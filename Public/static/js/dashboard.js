"use strict";
var rdash = angular.module("RDash", ["ui.bootstrap", "ui.router", "ngCookies"]);
//-------------------------------------- ROUTE -------------------------------------------------------------
rdash.config(["$stateProvider", "$urlRouterProvider", function (stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/");

    $.get('/Admin/API/getSideMenu', function (data) {
        data = data.data;
        for (var x in data) {
            var item = data[x];
            var sidebar = $("ul.sidebar");
            sidebar.append('<li class="sidebar-title"><span>' + item.title + '</span></li>');

            for (var y in item.children) {
                var subitem = item.children[y];
                var icon = "icon" in subitem ? "fa fa-" + subitem.name : "";
                var url = "/" + subitem.name;
                sidebar.append('<li class="sidebar-list"><a href="#' + url + '">' +
                    subitem.title + ' <span class="menu-icon ' + icon + '"></span></a></li>');
                stateProvider.state(url, {
                    url: url,
                    templateUrl: subitem.path
                });
            }

        }
        location.hash = "#/tachometer"
    });
}]);

//-------------------------------------- CONTROLLER -------------------------------------------------------------
rdash.controller("AlertsCtrl", ["$scope", function ($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
    }, {
        type: 'danger',
        msg: 'Found a bug? Create an issue with as many details as you can.'
    }];

    $scope.addAlert = function () {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}]).controller("MasterCtrl", ["$scope", "$cookieStore", function ($scope, $cookieStore) {
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
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
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


window.dashboard = {
    reactive: function (list) {
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
    }
};
location.hash = "#/"