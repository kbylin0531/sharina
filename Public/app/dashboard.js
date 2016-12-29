"use strict";
/**
 * switch(expression) 中的表达式采取的是严格模式
 */
// ngCookie
var rdash = angular.module("RDash", ["ui.bootstrap", "ui.router"]);
rdash.url = {
    menu: "/Admin/API/getMenu",
    info: "/Admin/API/getInfo"

};
var controllerPath = "/app/controller/";
//控制器列表
var ctrlers = ["ArticleAddCtrler", "PgyRawDataController", "MemberController", "SystemController"];
/**
 * Sidebar Toggle & Cookie Control
 * 小于这个值将视为移动设备而收起侧边栏
 */
var mobileView = 768;
//-------------------------------------- ROUTE -------------------------------------------------------------
rdash.config(["$stateProvider", "$urlRouterProvider", function (stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/");

    $.get(rdash.url.menu, function (data) {
        data = data.data;
        var first = '';
        var sidebar = $("ul.sidebar");
        var sidebarFooter = $("div#sidebar-footer");
        var len = data["footmenu"].length;
        var spacing = (12 / len).toFixed(0);

        var reactive = function (list) {
            list = list || location.hash;
            if (list.indexOf("#") != 0) {
                list = "#" + list;
            }
            //ps:jquery选择器的数量不会随元素的加载而变化
            $("li.sidebar-list>a").each(function () {
                var a = $(this);
                if (a.attr("href") == list) {
                    a.addClass("active");
                } else {
                    a.removeClass("active")
                }
            });
        };
        if ("sidemenu" in data) isea.each(data["sidemenu"], function (item) {
            var icon = "icon" in item ? "fa fa-" + item.icon : "";
            if (!first) first = item.path;
            sidebar.append('<li class="sidebar-list"><a href="#' + item.path + '">' +
                item.title + ' <span class="menu-icon ' + icon + '"></span></a></li>');
            stateProvider.state(item.path, {
                url: item.path,
                templateUrl: item.path
            });
        });

        if ("inside" in data) isea.each(data["inside"], function (item) {
            stateProvider.state(item, {url: item, templateUrl: item});
        });
        if ("footmenu" in data) isea.each(data["footmenu"], function (item) {
            sidebarFooter.append('<div class="col-xs-' + spacing + '"><a href="' + (item.url || "#") + '" target="' + (item.target || "_self") + '">' + item.title + '</a></div>');
        });

        if ("usermenu" in data) {
            var dropdownmenu = $("#dropdown-menu");
            //路由菜单
            if ("route" in data["usermenu"]) isea.each(data["usermenu"]["route"], function (item) {
                dropdownmenu.append(isea.dom.create('li.link', {}, '<a href="#' + item.path + '">' + item.title + '</a>'));
                stateProvider.state(item.path, {
                    url: item.path,
                    templateUrl: item.path
                });
            });
            dropdownmenu.append(isea.dom.create('li.divider'));
            //链接菜单
            if ("link" in data["usermenu"]) isea.each(data["usermenu"]["link"], function (item) {
                dropdownmenu.append('<li class="link"><a href="' + item.url + '">' + item.title + '</a></li>');
            });
        }

        //change the hash
        reactive(location.hash = first);
        $("li.sidebar-list>a").click(function () {
            reactive($(this).attr("href"));
        });
    });
}]);

//-------------------------------------- CONTROLLER -------------------------------------------------------------
//--  如果元素在控制器scope範圍以內被刪除，將會出現angularjs內部監聽的錯誤（雖然不會對實際的JS和DOM造成影響）
//--  解決的辦法可以是將不想讓angularjs控制的代碼放到控制器scope以外的區域
//---------------------------------------------------------------------------------------------------------------
rdash.controller("MasterCtrl", ["$scope", function ($scope) {
    //user info and menu
    $.get(rdash.url.info, function (data) {
        $scope.profile = data.data.profile;
        $scope.username = data.data.username;
    });

    $scope.mastertitle = 'PSR';

    // $scope.$watch(window.innerWidth, function (newValue, oldValue) {
    //     console.log(newValue,mobileView);
    //     if (newValue >= mobileView) {
    //         console.log(isea.cookie.get("toggle"), isea.util.gettype(isea.cookie.get("toggle")));
    //         $scope.toggle = "true" === isea.cookie.get("toggle");
    //     } else {
    //         $scope.toggle = false;
    //     }
    // });

    $scope.toggleSidebar = function () {
        isea.cookie.set('toggle', $scope.toggle = !$scope.toggle, 0);
    };

    window.onresize = function () {
        if (isea.client.viewport().width >= mobileView) {
            $scope.toggle = ("true" === isea.cookie.get("toggle"));
        } else {
            $scope.toggle = false;
        }
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
//     .directive("rdTable", function () {
//     return {
//         transclude: !0,
//         template: '<table id="dtable" class="table table-bordered" cellspacing="0" width="100%"></table>',
//         restrict: "EA"
//     };
// });

isea.each(ctrlers, function (ctrlername) {
    rdash.controller(ctrlername, new Function("$scope", "isea.loader.load('" + controllerPath + ctrlername + ".js',  function () { rdash['" + ctrlername + "'].run($scope);});"));
});

