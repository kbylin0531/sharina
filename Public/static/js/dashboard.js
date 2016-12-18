"use strict";
var rdash = angular.module("RDash", ["ui.bootstrap", "ui.router", "ngCookies"]);
var apiurl = {
    sidemenu: "/Admin/API/getSideMenu",
    membermenu: "/Admin/API/getMemberInfo"
};

$.get(apiurl.membermenu, function (data) {
    data = data.data;
    $("#member-avatar").attr("src", data["avatar"]);
    $("#member-name").text(data["name"]);
    var dropdown = $("#dropdown-menu");
    var divider = isea.dom.create("li.divider");
    isea.each(data["menu"], function (mgroup) {
        dropdown.append(divider);
        isea.each(mgroup, function (menu) {
            dropdown.append($('<li class="link"><a href="' + menu.url + '">' + menu.title + '</a></li>'));
        })
    });
});


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
                if (!first)first = url;
                console.log(subitem);
                sidebar.append('<li class="sidebar-list"><a href="#' + url + '">' +
                    subitem.title + ' <span class="menu-icon ' + icon + '"></span></a></li>');
                stateProvider.state(url, {
                    url: url,
                    templateUrl: subitem.path
                });
            }
        }

        var reactive = function (list) {
            list = list || location.hash;
            if (list.indexOf("#") != 0) {
                list = "#" + list;
            }
            $("li.sidebar-list>a").each(function () {
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
        $("li.sidebar-list>a").click(function () {
            reactive($(this).attr("href"));
        });
    });
}]);

//-------------------------------------- CONTROLLER -------------------------------------------------------------
rdash.controller("MasterCtrl", ["$scope", "$cookieStore", function ($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

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
}).directive("controller", function () {
    // HTML中使用"<controller name="editor" ></controller>" 调用指定将把文件"/app/controller/editor.js"引入控制器
    return {
        transclude: !0, link: function (scope, element, attrs) {
            isea.loader.load("/app/controller/" + attrs["name"] + ".js", function () {
                console.log(attrs["name"], rdash[attrs["name"]]);
                rdash[attrs["name"]].run();
            });
        }, restrict: "E"
    };
});

//空的控制器占位
var ctrlers = ["ArticleAddCtrler"];
for (var x in ctrlers) {
    var func = function ($scope) {
        console.log(this.controller, arguments);
    };
    func.controller = ctrlers[x];
    rdash.controller(ctrlers[x], func);
}
