"use strict";
// ngCookie
(function (window, angular) {
    'use strict';
    angular.module('ngCookies', ['ng']).provider('$cookies', [function $CookiesProvider() {
        var defaults = this.defaults = {};

        function calcOptions(options) {
            return options ? angular.extend({}, defaults, options) : defaults
        }

        this.$get = ['$$cookieReader', '$$cookieWriter', function ($$cookieReader, $$cookieWriter) {
            return {
                get: function (key) {
                    return $$cookieReader()[key]
                }, getObject: function (key) {
                    var value = this.get(key);
                    return value ? angular.fromJson(value) : value
                }, getAll: function () {
                    return $$cookieReader()
                }, put: function (key, value, options) {
                    $$cookieWriter(key, value, calcOptions(options))
                }, putObject: function (key, value, options) {
                    this.put(key, angular.toJson(value), options)
                }, remove: function (key, options) {
                    $$cookieWriter(key, undefined, calcOptions(options))
                }
            }
        }]
    }]);
    angular.module('ngCookies').factory('$cookieStore', ['$cookies', function ($cookies) {
        return {
            get: function (key) {
                return $cookies.getObject(key)
            }, put: function (key, value) {
                $cookies.putObject(key, value)
            }, remove: function (key) {
                $cookies.remove(key)
            }
        }
    }]);
    function $$CookieWriter($document, $log, $browser) {
        var cookiePath = $browser.baseHref();
        var rawDocument = $document[0];

        function buildCookieString(name, value, options) {
            var path, expires;
            options = options || {};
            expires = options.expires;
            path = angular.isDefined(options.path) ? options.path : cookiePath;
            if (angular.isUndefined(value)) {
                expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
                value = ''
            }
            if (angular.isString(expires)) {
                expires = new Date(expires)
            }
            var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            str += path ? ';path=' + path : '';
            str += options.domain ? ';domain=' + options.domain : '';
            str += expires ? ';expires=' + expires.toUTCString() : '';
            str += options.secure ? ';secure' : '';
            var cookieLength = str.length + 1;
            if (cookieLength > 4096) {
                $log.warn('Cookie \'' + name + '\' possibly not set or overflowed because it was too large (' + cookieLength + ' > 4096 bytes)!')
            }
            return str
        }

        return function (name, value, options) {
            rawDocument.cookie = buildCookieString(name, value, options)
        }
    }

    $$CookieWriter.$inject = ['$document', '$log', '$browser'];
    angular.module('ngCookies').provider('$$cookieWriter', function $$CookieWriterProvider() {
        this.$get = $$CookieWriter
    })
})(window, window.angular);


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
        var sidebar = $("ul.sidebar");
        var sidebarFooter = $("div#sidebar-footer");
        var lias = $("li.sidebar-list>a");
        var len = data.footmenu.length;
        var spacing = (12 / len).toFixed(0);

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

        isea.each(data.sidemenu, function (item) {
            sidebar.append('<li class="sidebar-title"><span>' + item.title + '</span></li>');
            isea.each(item.children, function (subitem) {
                var icon = "icon" in subitem ? "fa fa-" + subitem.icon : "";
                var url = "/" + subitem.name;
                if (!first) first = url;
                sidebar.append('<li class="sidebar-list"><a href="#' + url + '">' +
                    subitem.title + ' <span class="menu-icon ' + icon + '"></span></a></li>');
                stateProvider.state(url, {
                    url: url,
                    templateUrl: subitem.path
                });
            });
        });
        isea.each(data.footmenu, function (item) {
            sidebarFooter.append('<div class="col-xs-' + spacing + '"><a href="' + (item.url || "#") + '" target="' + (item.target || "_self") + '">' + item.title + '</a></div>');
        });

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

isea.each(ctrlers, function (ctrlername) {
    rdash.controller(ctrlername, new Function("$scope", "isea.loader.load('" + controllerPath + ctrlername + ".js',  function () { rdash['" + ctrlername + "'].run($scope);});"));
});

rdash.controller("MemberController", ["$scope", function ($scope) {
    $scope.saveChange = function () {
        if ($scope.newpwd != $scope.rpnewpwd) {
            alert("密码不一致");
        } else {
            $.post("/Admin/Member/changePasswd", {"old": $scope.oldpwd, "new": $scope.newpwd}, function (data) {
                alert(data.message);
            });
        }
    }
}]);
