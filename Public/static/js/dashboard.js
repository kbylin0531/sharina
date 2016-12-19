"use strict";
var rdash = angular.module("RDash", ["ui.bootstrap", "ui.router", "ngCookies"]);
var apiurl = {
    sidemenu: "/Admin/API/getSideMenu",
    membermenu: "/Admin/API/getSiteinfo"
};
var controllerPath = "/app/controller/";
//控制器列表
var ctrlers = ["ArticleAddCtrler"];
/**
 * Sidebar Toggle & Cookie Control
 * 小于这个值将视为移动设备而收起侧边栏
 */
var mobileView = 768;

//-------------------------------------- ROUTE -------------------------------------------------------------
rdash.config(["$stateProvider", "$urlRouterProvider", function (stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/");

    $.get(apiurl.sidemenu, function (data) {
        data = data.data;
        var first = '';
        for (var x in data) {
            var item = data[x];
            var sidebar = $("ul.sidebar");
            sidebar.append('<li class="sidebar-title"><span>' + item.title + '</span></li>');

            for (var y in item.children) {
                var subitem = item.children[y];
                var icon = "icon" in subitem ? "fa fa-" + subitem.icon : "";
                var url = "/" + subitem.name;
                if (!first) first = url;
                sidebar.append('<li class="sidebar-list"><a href="#' + url + '">' +
                    subitem.title + ' <span class="menu-icon ' + icon + '"></span></a></li>');
                stateProvider.state(url, {
                    url: url,
                    templateUrl: subitem.path
                });
            }
        }
        var lias = $("li.sidebar-list>a");

        var reactive = function (list) {
            list = list || location.hash;
            if (list.indexOf("#") != 0) {
                list = "#" + list;
            }
            lias.each(function () {
                var a = $(this);
                if (a.attr("href") == list) {
                    a.addClass("active");
                } else {
                    a.removeClass("active")
                }
            });
        };

        //change the hash
        reactive(location.hash = first);
        lias.click(function () {
            reactive($(this).attr("href"));
        });
    });
}]);

//-------------------------------------- CONTROLLER -------------------------------------------------------------
rdash.controller("MasterCtrl", ["$scope", "$cookieStore", function ($scope, $cookieStore) {
    //user info and menu
    $.get(apiurl.membermenu, function (data) {
        isea.each(data.data, function (value, key) {
            $scope[key] = value;//
        });
        // $scope.avatar = data.avatar;//
        // $scope.username = data.username;
        // $scope.generalmenu = data.generalmenu;
        // $scope.usermenu = data.usermenu;
    });

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !!$cookieStore.get('toggle');
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }
    });

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };
}]);
//-------------------------------------- DIRECTIVE ------------------------------------------------------------------------------
rdash.directive("rdLoading", function () {
    return {
        restrict: "AE",
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
}).directive("rdWidgetBody", function () {
    return {
        requires: "^rdWidget",
        scope: {loading: "=?", classes: "@?"},
        transclude: !0,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: "E"
    };
}).directive("rdWidgetFooter", function () {
    return {
        requires: "^rdWidget",
        transclude: !0,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: "E"
    };
}).directive("rdWidgetHeader", function () {
    return {
        requires: "^rdWidget",
        scope: {title: "@", icon: "@"},
        transclude: !0,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: "E"
    };
}).directive("rdWidget", function () {
    return {transclude: !0, template: '<div class="widget" ng-transclude></div>', restrict: "EA"};
});

for (var x in ctrlers) {
    var ctrlername = ctrlers[x];
    rdash.controller(ctrlername, new Function("$scope", "isea.loader.load('" + controllerPath + ctrlername + ".js',  function () { rdash['" + ctrlername + "'].run($scope);});"));
}
