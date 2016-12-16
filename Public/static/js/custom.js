"use strict";
var rdash = angular.module("RDash", ["ui.bootstrap", "ui.router", "ngCookies"]);
//-------------------------------------- ROUTE -------------------------------------------------------------
rdash.config(["$stateProvider", "$urlRouterProvider", function (stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/"),
        stateProvider.state("index", {
            url: "/",
            templateUrl: public_url+"app/dashboard.html"
        }).state("tables", {
            url: "/tables",
            templateUrl: public_url+"app/tables.html"
        });
}]);

//-------------------------------------- CONTROLLER -------------------------------------------------------------
rdash.controller("AlertsCtrl", ["$scope", function (e) {
    e.alerts = [
        {
            type: "success",
            msg: "Thanks for visiting! Feel free to create pull requests to improve the dashboard!"
        }, {
            type: "danger",
            msg: "Found a bug? Create an issue with as many details as you can."
        }],
        e.addAlert = function () {
            e.alerts.push({msg: "Another alert!"})
        },
        e.closeAlert = function (t) {
            e.alerts.splice(t, 1)
        }
}]).controller("MasterCtrl", ["$scope", "$cookieStore", function (t, e) {
    var g = 992;
    t.getWidth = function () {
        return window.innerWidth
    }, t.$watch(t.getWidth, function (o, n) {
        o >= g ? angular.isDefined(e.get("toggle")) ? t.toggle = !!e.get("toggle") : t.toggle = !0 : t.toggle = !1
    }), t.toggleSidebar = function () {
        t.toggle = !t.toggle, e.put("toggle", t.toggle)
    }, window.onresize = function () {
        t.$apply()
    }
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