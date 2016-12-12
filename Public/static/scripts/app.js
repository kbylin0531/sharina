"use strict";
/**
 * basic url to access
 */
var srg_base_url = psrg_vars["basic_url"];
/**
 * You must include the dependency on 'ngMaterial'
 */
angular.module("app", ["ngMaterial"]);
//dashboard
angular.module("app").service("performanceService", [
    function () {
        return {
            getPerformanceData: function (e) {
                return "week" === e ? [
                    {
                        key: "Middleware",
                        values: [[1, 11], [2, 10], [3, 14], [4, 21], [5, 13], [6, 21], [7, 21], [8, 18], [9, 11], [10, 11], [11, 18], [12, 14], [13, 10], [14, 20], [15, 21], [16, 28], [17, 12], [18, 16], [19, 22], [20, 18], [21, 21], [22, 10], [23, 11], [24, 14], [25, 9], [26, 14], [27, 10], [28, 21], [29, 11]]
                    }, {
                        key: "Ruby",
                        values: [[1, 29], [2, 36], [3, 42], [4, 25], [5, 22], [6, 34], [7, 41], [8, 19], [9, 45], [10, 31], [11, 28], [12, 36], [13, 54], [14, 41], [15, 36], [16, 39], [17, 21], [18, 20], [19, 22], [20, 44], [21, 32], [22, 20], [23, 28], [24, 24], [25, 29], [26, 19], [27, 20], [28, 31], [29, 49]]
                    }, {
                        key: "Web External",
                        values: [[1, 54], [2, 74], [3, 64], [4, 68], [5, 56], [6, 44], [7, 61], [8, 63], [9, 45], [10, 51], [11, 68], [12, 46], [13, 64], [14, 51], [15, 42], [16, 63], [17, 72], [18, 60], [19, 52], [20, 58], [21, 41], [22, 40], [23, 58], [24, 30], [25, 49], [26, 54], [27, 60], [28, 41], [29, 66]]
                    }, {
                        key: "Database",
                        values: [[1, 64], [2, 84], [3, 64], [4, 68], [5, 86], [6, 74], [7, 81], [8, 83], [9, 65], [10, 61], [11, 88], [12, 76], [13, 84], [14, 71], [15, 82], [16, 73], [17, 92], [18, 80], [19, 62], [20, 68], [21, 71], [22, 50], [23, 78], [24, 60], [25, 59], [26, 74], [27, 80], [28, 51], [29, 97]]
                    }] : [{
                    key: "Middleware",
                    values: [[1, 13], [2, 14], [3, 24], [4, 18], [5, 16], [6, 14], [7, 11], [8, 13], [9, 15], [10, 11], [11, 18], [12, 16], [13, 28], [14, 11], [15, 12], [16, 13], [17, 12], [18, 20], [19, 22], [20, 18], [21, 11], [22, 10], [23, 18], [24, 20], [25, 9], [26, 14], [27, 10], [28, 11], [29, 17]]
                }, {
                    key: "Ruby",
                    values: [[1, 29], [2, 36], [3, 42], [4, 25], [5, 22], [6, 34], [7, 41], [8, 19], [9, 45], [10, 31], [11, 28], [12, 36], [13, 54], [14, 41], [15, 36], [16, 39], [17, 21], [18, 20], [19, 22], [20, 44], [21, 32], [22, 20], [23, 28], [24, 24], [25, 29], [26, 19], [27, 20], [28, 31], [29, 49]]
                }, {
                    key: "Web External",
                    values: [[1, 54], [2, 74], [3, 64], [4, 68], [5, 56], [6, 44], [7, 61], [8, 63], [9, 45], [10, 51], [11, 68], [12, 46], [13, 64], [14, 51], [15, 42], [16, 63], [17, 72], [18, 60], [19, 52], [20, 58], [21, 41], [22, 40], [23, 58], [24, 30], [25, 49], [26, 54], [27, 60], [28, 41], [29, 66]]
                }, {
                    key: "Database",
                    values: [[1, 74], [2, 64], [3, 84], [4, 78], [5, 66], [6, 64], [7, 71], [8, 83], [9, 55], [10, 81], [11, 88], [12, 76], [13, 84], [14, 71], [15, 62], [16, 73], [17, 82], [18, 80], [19, 92], [20, 68], [21, 71], [22, 70], [23, 78], [24, 80], [25, 59], [26, 74], [27, 80], [28, 51], [29, 67]]
                }]
            }
        };
    }
]);
//nav
angular.module("app").service("navService", ["$q", function (e) {
    return {
        loadAllItems: function () {
            return e.when([
                {name: "Dashboard", icon: "dashboard", sref: ".dashboard"},
                {
                    name: "Profile",
                    icon: "person",
                    sref: ".profile"
                },
                {name: "Table", icon: "view_module", sref: ".table"}
            ])
        }
    }
}]);

angular.module("app").service("messagesService", ["$q", function (e) {
    return {
        loadAllItems: function () {
            return e.when([
                {
                    userPhoto: "/assets/images/user.svg",
                    subject: "Electromagnetic radiation",
                    userName: "Wilhelm Conrad Röntgen",
                    date: "1901",
                    text: "In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him"
                }, {
                    userPhoto: "/assets/images/user.svg",
                    subject: "Atomic structure",
                    userName: "Niels Bohr",
                    date: "1922",
                    text: "For his services in the investigation of the structure of atoms and of the radiation emanating from them"
                }
            ]);
        }
    }
}]);
// panel in dashboard
angular.module("app").directive("panelWidget", function () {
    return {
        restrict: "E",
        replace: !0,
        transclude: !0,
        scope: {title: "@", template: "@", options: "@"},
        template: '<section layout-margin class="md-whiteframe-z1 panel-widget">' +
        '<md-toolbar md-theme="custom" class="md-hue-1 panel-widget-toolbar">' +
        '<div class="md-toolbar-tools">' +
        '<h3 class="panel-widget-tittle">{{title}}</h3>' +
        '<span flex></span>' +
        '<md-button ng-show="options" ng-click="$showOptions = !$showOptions" class="md-icon-button" aria-label="Show options">' +
        '<i class="material-icons">more_vert</i>' +
        '</md-button>' +
        '</div>' +
        '</md-toolbar>' +
        '<div ng-include="template"></div>' +
        '</section>',
        compile: function (e, a, t) {
            return function (e, a) {
                t(e, function (e) {
                    a.append(e)
                })
            }
        }
    }
});

// Main pane
angular.module("app").controller("MainController", ["navService", "$mdSidenav", "$mdBottomSheet",
    "$log", "$q", "$state", "$mdToast",
    function (navService, a, t, log, o, i, r) {

        var u = this;
        //assign template vars
        u.baseurl = srg_base_url;
        u.menuItems = [];
        u.selectItem = function (e) {
            u.title = e.name;
            u.toggleItemsList();
            u.showSimpleToast(u.title)
        };
        u.toggleItemsList = function () {
            var e = t.hide() || o.when(!0);
            e.then(function () {
                a("left").toggle()
            })
        };
        u.showActions = function (e) {
            var content = document.getElementById("content");
            t.show({
                parent: angular.element(content),
                template: '<md-bottom-sheet class="md-list md-has-header">' +
                '<md-subheader>Select action</md-subheader>' +
                ' <md-list>' +
                '<md-list-item ng-repeat="action in vm.actions">' +
                ' <md-button class="md-list-item-content"  ng-click="vm.performAction(action)" ng-href="{{action.url}}" target="_blank">' +
                '<i class="material-icons">{{action.icon}}</i>' +
                '<span class="share-label">{{action.name}}</span>' +
                '</md-button>' +
                '</md-list-item>' +
                '</md-list>' +
                '</md-bottom-sheet>',
                controller: ["$mdBottomSheet", function (e) {
                    var a = this;
                    a.actions = [{
                        name: "Share",
                        icon: "share",
                        url: "#"
                    }, {
                        name: "Star",
                        icon: "star",
                        url: "#"
                    }];
                    a.performAction = function (a) {
                        e.hide(a)
                    }
                }],
                controllerAs: "vm",
                bindToController: !0,
                targetEvent: e
            }).then(function (e) {
                e && log.debug(e.name + " clicked!")
            })
        };
        u.title = i.current.data.title;
        u.showSimpleToast = function (e) {
            r.show(r.simple().content(e).hideDelay(2e3).position("bottom right"))
        };
        u.toggleRightSidebar = function () {
            a("right").toggle()
        };
        navService.loadAllItems().then(function (e) {
            u.menuItems = [].concat(e)
        })
    }]);

// <html class="no-js" ng-app="angularMaterialAdmin">
angular.module("angularMaterialAdmin",
    ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ui.router", "ngMaterial", "nvd3", "app"])
    .config(["$stateProvider", "$urlRouterProvider", "$mdThemingProvider", "$mdIconProvider",
        function (stateProvider, urlRouterProvider, mdThemingProvider, mdIconProvider) {
            stateProvider.state("home", {
                url: "",
                templateUrl: srg_base_url + "app/views/main.html",
                controller: "MainController",
                controllerAs: "vm",
                "abstract": !0
            }).state("home.profile", {
                url: "/profile",
                templateUrl: srg_base_url + "app/views/profile.html",
                controller: function () {
                    this.user = {
                        title: "admin",
                        email: "contact@flatlogic.com"
                    };
                },
                controllerAs: "vm",
                data: {title: "Profile"}
            }).state("home.dashboard", {
                // while access "#/dashboard"
                url: "/dashboard",
                templateUrl: srg_base_url + "app/views/dashboard.html",
                controller: function () {
                    this.baseurl = srg_base_url;
                },
                controllerAs: "cc",
                data: {title: "Dashboard"}
            }).state("home.table", {
                url: "/table",
                controller: function ($scope) {
                },
                controllerAs: "vm",
                templateUrl: srg_base_url + "app/views/table.html",
                data: {title: "Table"}
            });
            urlRouterProvider.otherwise("/dashboard");
            mdThemingProvider.theme("default").primaryPalette("grey", {"default": "600"}).accentPalette("teal", {"default": "500"}).warnPalette("defaultPrimary");
            mdThemingProvider.theme("dark", "default").primaryPalette("defaultPrimary").dark();
            mdThemingProvider.theme("grey", "default").primaryPalette("grey");
            mdThemingProvider.theme("custom", "default").primaryPalette("defaultPrimary", {"hue-1": "50"});
            var e75853 = "#E75753";
            mdThemingProvider.definePalette("defaultPrimary", {
                50: "#FFFFFF",
                100: "rgb(255, 198, 197)",
                200: e75853,
                300: e75853,
                400: e75853,
                500: e75853,
                600: e75853,
                700: e75853,
                800: e75853,
                900: e75853,
                A100: e75853,
                A200: e75853,
                A400: e75853,
                A700: e75853
            });
            mdIconProvider.icon("user", "assets/images/user.svg", 64)
        }]).run(["$templateCache", function (e) {
}]);