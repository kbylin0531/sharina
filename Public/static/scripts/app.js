"use strict";
/**
 * basic url to access
 */
var srg_base_url = psrg_vars["basic_url"];
/**
 * You must include the dependency on 'ngMaterial'
 */
angular.module("app", ["ngMaterial"]);
var angularApp = angular.module("app");


//-------------------------------- SERVICE ---------------------------------------------
//nav
angularApp.service("navService", ["$q", function (e) {
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

angularApp.service("messagesService", ["$q", function ($q) {
    var messages = [
        {
            userPhoto: '/assets/images/user.svg',
            subject: 'Electromagnetic radiation',
            userName: 'Wilhelm Conrad Röntgen',
            date: '1901',
            text: 'In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him'
        },
        {
            userPhoto: '/assets/images/user.svg',
            subject: 'Spin theory',
            userName: 'Wolfgang Pauli',
            date: '1945',
            text: 'For the discovery of the Exclusion Principle, also called the Pauli principle'
        }
    ];

    return {
        loadAllItems: function () {
            return $q.when(messages);
        }
    };
}]);

//------------------------------------ DIRECTIVE ------------------------------------------
// panel in dashboard
angularApp.directive("panelWidget", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {title: '@', template: '@', options: '@'},
        template: '' +
        '<section layout-margin class="md-whiteframe-z1 panel-widget">' +
        '  <md-toolbar md-theme="custom" class="md-hue-1 panel-widget-toolbar">' +
        '    <div class="md-toolbar-tools">' +
        '      <h3 class="panel-widget-tittle">{{title}}</h3>' +
        '      <span flex></span>' +
        '      <md-button ng-show="options" ng-click="$showOptions = !$showOptions" class="md-icon-button" aria-label="Show options">' +
        '        <i class="material-icons">more_vert</i>' +
        '      </md-button>' +
        '    </div>' +
        '  </md-toolbar>' +
        '  <div ng-include="template"/>' +
        '</section>',
        compile: function (element, attrs, linker) {
            return function (scope, element) {
                linker(scope, function (clone) {
                    element.append(clone);
                });
            };
        }
    };
});
//------------------------------------ CONTROLLER ------------------------------------------
// Main pane
angularApp.controller("MainController", ["navService", "$mdSidenav", "$mdBottomSheet",
    "$log", "$q", "$state", "$mdToast",
    function (navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast) {
        var vm = this;

        vm.menuItems = [];
        vm.selectItem = selectItem;
        vm.toggleItemsList = toggleItemsList;
        vm.showActions = showActions;
        vm.title = $state.current.data.title;
        vm.showSimpleToast = showSimpleToast;
        vm.toggleRightSidebar = toggleRightSidebar;

        navService
            .loadAllItems()
            .then(function (menuItems) {
                vm.menuItems = [].concat(menuItems);
            });

        function toggleRightSidebar() {
            $mdSidenav('right').toggle();
        }

        function toggleItemsList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        function selectItem(item) {
            vm.title = item.name;
            vm.toggleItemsList();
            vm.showSimpleToast(vm.title);
        }

        function showActions($event) {
            $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
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
                controller: ['$mdBottomSheet', SheetController],
                controllerAs: "vm",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            function SheetController($mdBottomSheet) {
                var vm = this;
                vm.baseurl = srg_base_url;
                vm.actions = [
                    {
                        name: 'Share',
                        icon: 'share',
                        url: 'https://twitter.com/intent/tweet?text=Angular%20Material%20Dashboard%20https://github.com/flatlogic/angular-material-dashboard%20via%20@flatlogicinc'
                    },
                    {
                        name: 'Star',
                        icon: 'star',
                        url: 'https://github.com/flatlogic/angular-material-dashboard/stargazers'
                    }
                ];

                vm.performAction = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

        function showSimpleToast(title) {
            $mdToast.show(
                $mdToast.simple()
                    .content(title)
                    .hideDelay(2000)
                    .position('bottom right')
            );
        }
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