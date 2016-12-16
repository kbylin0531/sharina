!function (t) {
    "use strict";
    function e(t) {
        return function () {
            var e, n = arguments[0];
            for (e = "[" + (t ? t + ":" : "") + n + "] http://errors.angularjs.org/1.5.9/" + (t ? t + "/" : "") + n, n = 1; n < arguments.length; n++) {
                e = e + (1 == n ? "?" : "&") + "p" + (n - 1) + "=";
                var r, i = encodeURIComponent;
                r = arguments[n], r = "function" == typeof r ? r.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof r ? "undefined" : "string" != typeof r ? JSON.stringify(r) : r, e += i(r)
            }
            return Error(e)
        }
    }

    function n(t) {
        if (null == t || E(t))return !1;
        if (lr(t) || b(t) || Zn && t instanceof Zn)return !0;
        var e = "length" in Object(t) && t.length;
        return w(e) && (0 <= e && (e - 1 in t || t instanceof Array) || "function" == typeof t.item)
    }

    function r(t, e, i) {
        var o, a;
        if (t)if (S(t))for (o in t)"prototype" === o || "length" === o || "name" === o || t.hasOwnProperty && !t.hasOwnProperty(o) || e.call(i, t[o], o, t); else if (lr(t) || n(t)) {
            var s = "object" != typeof t;
            for (o = 0, a = t.length; o < a; o++)(s || o in t) && e.call(i, t[o], o, t)
        } else if (t.forEach && t.forEach !== r)t.forEach(e, i, t); else if (y(t))for (o in t)e.call(i, t[o], o, t); else if ("function" == typeof t.hasOwnProperty)for (o in t)t.hasOwnProperty(o) && e.call(i, t[o], o, t); else for (o in t)Xn.call(t, o) && e.call(i, t[o], o, t);
        return t
    }

    function i(t, e, n) {
        for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++)e.call(n, t[r[i]], r[i]);
        return r
    }

    function o(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function a() {
        return ++ur
    }

    function s(t, e, n) {
        for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
            var a = e[i];
            if (g(a) || S(a))for (var u = Object.keys(a), c = 0, l = u.length; c < l; c++) {
                var f = u[c], h = a[f];
                n && g(h) ? x(h) ? t[f] = new Date(h.valueOf()) : C(h) ? t[f] = new RegExp(h) : h.nodeName ? t[f] = h.cloneNode(!0) : M(h) ? t[f] = h.clone() : (g(t[f]) || (t[f] = lr(h) ? [] : {}), s(t[f], [h], !0)) : t[f] = h
            }
        }
        return r ? t.$$hashKey = r : delete t.$$hashKey, t
    }

    function u(t) {
        return s(t, er.call(arguments, 1), !1)
    }

    function c(t) {
        return s(t, er.call(arguments, 1), !0)
    }

    function l(t) {
        return parseInt(t, 10)
    }

    function f(t, e) {
        return u(Object.create(t), e)
    }

    function h() {
    }

    function p(t) {
        return t
    }

    function d(t) {
        return function () {
            return t
        }
    }

    function $(t) {
        return S(t.toString) && t.toString !== ir
    }

    function v(t) {
        return "undefined" == typeof t
    }

    function m(t) {
        return "undefined" != typeof t
    }

    function g(t) {
        return null !== t && "object" == typeof t
    }

    function y(t) {
        return null !== t && "object" == typeof t && !or(t)
    }

    function b(t) {
        return "string" == typeof t
    }

    function w(t) {
        return "number" == typeof t
    }

    function x(t) {
        return "[object Date]" === ir.call(t)
    }

    function S(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "[object RegExp]" === ir.call(t)
    }

    function E(t) {
        return t && t.window === t
    }

    function k(t) {
        return t && t.$evalAsync && t.$watch
    }

    function A(t) {
        return "boolean" == typeof t
    }

    function O(t) {
        return t && w(t.length) && fr.test(ir.call(t))
    }

    function M(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function V(t) {
        var e = {};
        t = t.split(",");
        var n;
        for (n = 0; n < t.length; n++)e[t[n]] = !0;
        return e
    }

    function T(t) {
        return Qn(t.nodeName || t[0] && t[0].nodeName)
    }

    function N(t, e) {
        var n = t.indexOf(e);
        return 0 <= n && t.splice(n, 1), n
    }

    function j(t, e) {
        function n(t, e) {
            var n, r = e.$$hashKey;
            if (lr(t)) {
                n = 0;
                for (var o = t.length; n < o; n++)e.push(i(t[n]))
            } else if (y(t))for (n in t)e[n] = i(t[n]); else if (t && "function" == typeof t.hasOwnProperty)for (n in t)t.hasOwnProperty(n) && (e[n] = i(t[n])); else for (n in t)Xn.call(t, n) && (e[n] = i(t[n]));
            return r ? e.$$hashKey = r : delete e.$$hashKey, e
        }

        function i(t) {
            if (!g(t))return t;
            var e = a.indexOf(t);
            if (-1 !== e)return s[e];
            if (E(t) || k(t))throw ar("cpws");
            var e = !1, r = o(t);
            return void 0 === r && (r = lr(t) ? [] : Object.create(or(t)), e = !0), a.push(t), s.push(r), e ? n(t, r) : r
        }

        function o(t) {
            switch (ir.call(t)) {
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return new t.constructor(i(t.buffer), t.byteOffset, t.length);
                case"[object ArrayBuffer]":
                    if (!t.slice) {
                        var e = new ArrayBuffer(t.byteLength);
                        return new Uint8Array(e).set(new Uint8Array(t)), e
                    }
                    return t.slice(0);
                case"[object Boolean]":
                case"[object Number]":
                case"[object String]":
                case"[object Date]":
                    return new t.constructor(t.valueOf());
                case"[object RegExp]":
                    return e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex, e;
                case"[object Blob]":
                    return new t.constructor([t], {type: t.type})
            }
            if (S(t.cloneNode))return t.cloneNode(!0)
        }

        var a = [], s = [];
        if (e) {
            if (O(e) || "[object ArrayBuffer]" === ir.call(e))throw ar("cpta");
            if (t === e)throw ar("cpi");
            return lr(e) ? e.length = 0 : r(e, function (t, n) {
                "$$hashKey" !== n && delete e[n]
            }), a.push(t), s.push(e), n(t, e)
        }
        return i(t)
    }

    function I(t, e) {
        if (t === e)return !0;
        if (null === t || null === e)return !1;
        if (t !== t && e !== e)return !0;
        var n, r = typeof t;
        if (r === typeof e && "object" === r) {
            if (!lr(t)) {
                if (x(t))return !!x(e) && I(t.getTime(), e.getTime());
                if (C(t))return !!C(e) && t.toString() === e.toString();
                if (k(t) || k(e) || E(t) || E(e) || lr(e) || x(e) || C(e))return !1;
                r = at();
                for (n in t)if ("$" !== n.charAt(0) && !S(t[n])) {
                    if (!I(t[n], e[n]))return !1;
                    r[n] = !0
                }
                for (n in e)if (!(n in r) && "$" !== n.charAt(0) && m(e[n]) && !S(e[n]))return !1;
                return !0
            }
            if (!lr(e))return !1;
            if ((r = t.length) === e.length) {
                for (n = 0; n < r; n++)if (!I(t[n], e[n]))return !1;
                return !0
            }
        }
        return !1
    }

    function D(t, e, n) {
        return t.concat(er.call(e, n))
    }

    function P(t, e) {
        var n = 2 < arguments.length ? er.call(arguments, 2) : [];
        return !S(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, D(n, arguments, 0)) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function R(e, n) {
        var r = n;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : E(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : k(n) && (r = "$SCOPE"), r
    }

    function U(t, e) {
        if (!v(t))return w(e) || (e = e ? 2 : null), JSON.stringify(t, R, e)
    }

    function F(t) {
        return b(t) ? JSON.parse(t) : t
    }

    function _(t, e) {
        t = t.replace(vr, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return cr(n) ? e : n
    }

    function q(t, e, n) {
        n = n ? -1 : 1;
        var r = t.getTimezoneOffset();
        return e = _(e, r), n *= e - r, t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + n), t
    }

    function L(t) {
        t = Zn(t).clone();
        try {
            t.empty()
        } catch (e) {
        }
        var n = Zn("<div>").append(t).html();
        try {
            return t[0].nodeType === wr ? Qn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                return "<" + Qn(e)
            })
        } catch (r) {
            return Qn(n)
        }
    }

    function B(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
        }
    }

    function H(t) {
        var e = {};
        return r((t || "").split("&"), function (t) {
            var n, r, i;
            t && (r = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), -1 !== n && (r = t.substring(0, n), i = t.substring(n + 1)), r = B(r), m(r) && (i = !m(i) || B(i), Xn.call(e, r) ? lr(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i))
        }), e
    }

    function z(t) {
        var e = [];
        return r(t, function (t, n) {
            lr(t) ? r(t, function (t) {
                e.push(G(n, !0) + (!0 === t ? "" : "=" + G(t, !0)))
            }) : e.push(G(n, !0) + (!0 === t ? "" : "=" + G(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function W(t) {
        return G(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function G(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function Z(t, e) {
        var n, r, i = mr.length;
        for (r = 0; r < i; ++r)if (n = mr[r] + e, b(n = t.getAttribute(n)))return n;
        return null
    }

    function J(e, n) {
        var i, o, a = {};
        r(mr, function (t) {
            t += "app", !i && e.hasAttribute && e.hasAttribute(t) && (i = e, o = e.getAttribute(t))
        }), r(mr, function (t) {
            t += "app";
            var n;
            !i && (n = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (i = n, o = n.getAttribute(t))
        }), i && (gr ? (a.strictDi = null !== Z(i, "strict-di"), n(i, o ? [o] : [], a)) : t.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function K(e, n, i) {
        g(i) || (i = {}), i = u({strictDi: !1}, i);
        var o = function () {
            if (e = Zn(e), e.injector()) {
                var r = e[0] === t.document ? "document" : L(e);
                throw ar("btstrpd", r.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return n = n || [], n.unshift(["$provide", function (t) {
                t.value("$rootElement", e)
            }]), i.debugInfoEnabled && n.push(["$compileProvider", function (t) {
                t.debugInfoEnabled(!0)
            }]), n.unshift("ng"), r = Ft(n, i.strictDi), r.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, r) {
                t.$apply(function () {
                    e.data("$injector", r), n(e)(t)
                })
            }]), r
        }, a = /^NG_ENABLE_DEBUG_INFO!/, s = /^NG_DEFER_BOOTSTRAP!/;
        return t && a.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(a, "")), t && !s.test(t.name) ? o() : (t.name = t.name.replace(s, ""), sr.resumeBootstrap = function (t) {
            return r(t, function (t) {
                n.push(t)
            }), o()
        }, void(S(sr.resumeDeferredBootstrap) && sr.resumeDeferredBootstrap()))
    }

    function Y() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function X(t) {
        if (t = sr.element(t).injector(), !t)throw ar("test");
        return t.get("$$testability")
    }

    function Q(t, e) {
        return e = e || "_", t.replace(yr, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function tt() {
        var e;
        if (!br) {
            var n = $r();
            (Jn = v(n) ? t.jQuery : n ? t[n] : void 0) && Jn.fn.on ? (Zn = Jn, u(Jn.fn, {
                scope: Dr.scope,
                isolateScope: Dr.isolateScope,
                controller: Dr.controller,
                injector: Dr.injector,
                inheritedData: Dr.inheritedData
            }), e = Jn.cleanData, Jn.cleanData = function (t) {
                for (var n, r, i = 0; null != (r = t[i]); i++)(n = Jn._data(r, "events")) && n.$destroy && Jn(r).triggerHandler("$destroy");
                e(t)
            }) : Zn = dt, sr.element = Zn, br = !0
        }
    }

    function et(t, e, n) {
        if (!t)throw ar("areq", e || "?", n || "required");
        return t
    }

    function nt(t, e, n) {
        return n && lr(t) && (t = t[t.length - 1]), et(S(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function rt(t, e) {
        if ("hasOwnProperty" === t)throw ar("badname", e)
    }

    function it(t, e, n) {
        if (!e)return t;
        e = e.split(".");
        for (var r, i = t, o = e.length, a = 0; a < o; a++)r = e[a], t && (t = (i = t)[r]);
        return !n && S(t) ? P(i, t) : t
    }

    function ot(t) {
        for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(e || t[i] !== n) && (e || (e = Zn(er.call(t, 0, i))), e.push(n));
        return e || t
    }

    function at() {
        return Object.create(null)
    }

    function st(t) {
        function n(t, e, n) {
            return t[e] || (t[e] = n())
        }

        var r = e("$injector"), i = e("ng");
        return t = n(t, "angular", Object), t.$$minErr = t.$$minErr || e, n(t, "module", function () {
            var t = {};
            return function (e, o, a) {
                if ("hasOwnProperty" === e)throw i("badname", "module");
                return o && t.hasOwnProperty(e) && (t[e] = null), n(t, e, function () {
                    function t(t, e, n, r) {
                        return r || (r = i), function () {
                            return r[n || "push"]([t, e, arguments]), l
                        }
                    }

                    function n(t, n) {
                        return function (r, o) {
                            return o && S(o) && (o.$$moduleName = e), i.push([t, n, arguments]), l
                        }
                    }

                    if (!o)throw r("nomod", e);
                    var i = [], s = [], u = [], c = t("$injector", "invoke", "push", s), l = {
                        _invokeQueue: i,
                        _configBlocks: s,
                        _runBlocks: u,
                        requires: o,
                        name: e,
                        provider: n("$provide", "provider"),
                        factory: n("$provide", "factory"),
                        service: n("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        decorator: n("$provide", "decorator"),
                        animation: n("$animateProvider", "register"),
                        filter: n("$filterProvider", "register"),
                        controller: n("$controllerProvider", "register"),
                        directive: n("$compileProvider", "directive"),
                        component: n("$compileProvider", "component"),
                        config: c,
                        run: function (t) {
                            return u.push(t), this
                        }
                    };
                    return a && c(a), l
                })
            }
        })
    }

    function ut(t, e) {
        if (lr(t)) {
            e = e || [];
            for (var n = 0, r = t.length; n < r; n++)e[n] = t[n]
        } else if (g(t))for (n in e = e || {}, t)"$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t
    }

    function ct(n) {
        u(n, {
            bootstrap: K,
            copy: j,
            extend: u,
            merge: c,
            equals: I,
            element: Zn,
            forEach: r,
            injector: Ft,
            noop: h,
            bind: P,
            toJson: U,
            fromJson: F,
            identity: p,
            isUndefined: v,
            isDefined: m,
            isString: b,
            isFunction: S,
            isObject: g,
            isNumber: w,
            isElement: M,
            isArray: lr,
            version: xr,
            isDate: x,
            lowercase: Qn,
            uppercase: tr,
            callbacks: {$$counter: 0},
            getTestability: X,
            $$minErr: e,
            $$csp: dr,
            reloadWithDebugInfo: Y
        }), (Kn = st(t))("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({$$sanitizeUri: Ye}), t.provider("$compile", Zt).directive({
                a: to,
                input: go,
                textarea: go,
                form: io,
                script: sa,
                select: la,
                option: fa,
                ngBind: wo,
                ngBindHtml: So,
                ngBindTemplate: xo,
                ngClass: Eo,
                ngClassEven: Ao,
                ngClassOdd: ko,
                ngCloak: Oo,
                ngController: Mo,
                ngForm: oo,
                ngHide: ta,
                ngIf: No,
                ngInclude: jo,
                ngInit: Do,
                ngNonBindable: Go,
                ngPluralize: Yo,
                ngRepeat: Xo,
                ngShow: Qo,
                ngStyle: ea,
                ngSwitch: na,
                ngSwitchWhen: ra,
                ngSwitchDefault: ia,
                ngOptions: Ko,
                ngTransclude: aa,
                ngModel: Ho,
                ngList: Po,
                ngChange: Co,
                pattern: pa,
                ngPattern: pa,
                required: ha,
                ngRequired: ha,
                minlength: $a,
                ngMinlength: $a,
                maxlength: da,
                ngMaxlength: da,
                ngValue: bo,
                ngModelOptions: Wo
            }).directive({ngInclude: Io}).directive(eo).directive(Vo), t.provider({
                $anchorScroll: _t,
                $animate: Jr,
                $animateCss: Xr,
                $$animateJs: Gr,
                $$animateQueue: Zr,
                $$AnimateRunner: Yr,
                $$animateAsyncRun: Kr,
                $browser: zt,
                $cacheFactory: Wt,
                $controller: te,
                $document: ee,
                $exceptionHandler: ne,
                $filter: hn,
                $$forceReflow: ii,
                $interpolate: de,
                $interval: $e,
                $http: le,
                $httpParamSerializer: ie,
                $httpParamSerializerJQLike: oe,
                $httpBackend: he,
                $xhrFactory: fe,
                $jsonpCallbacks: pi,
                $location: Ae,
                $log: Oe,
                $parse: ze,
                $rootScope: Ke,
                $q: We,
                $$q: Ge,
                $sce: en,
                $sceDelegate: tn,
                $sniffer: nn,
                $templateCache: Gt,
                $templateRequest: rn,
                $$testability: on,
                $timeout: an,
                $window: cn,
                $$rAF: Je,
                $$jqLite: It,
                $$HashMap: Fr,
                $$cookieReader: fn
            })
        }])
    }

    function lt(t) {
        return t.replace(Er, function (t, e, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(kr, "Moz$1")
    }

    function ft(t) {
        return t = t.nodeType, 1 === t || !t || 9 === t
    }

    function ht(t, e) {
        var n, i, o = e.createDocumentFragment(), a = [];
        if (Vr.test(t)) {
            for (n = o.appendChild(e.createElement("div")), i = (Tr.exec(t) || ["", ""])[1].toLowerCase(), i = jr[i] || jr._default, n.innerHTML = i[1] + t.replace(Nr, "<$1></$2>") + i[2], i = i[0]; i--;)n = n.lastChild;
            a = D(a, n.childNodes), n = o.firstChild, n.textContent = ""
        } else a.push(e.createTextNode(t));
        return o.textContent = "", o.innerHTML = "", r(a, function (t) {
            o.appendChild(t)
        }), o
    }

    function pt(t, e) {
        var n = t.parentNode;
        n && n.replaceChild(e, t), e.appendChild(t)
    }

    function dt(e) {
        if (e instanceof dt)return e;
        var n;
        if (b(e) && (e = hr(e), n = !0), !(this instanceof dt)) {
            if (n && "<" !== e.charAt(0))throw Or("nosel");
            return new dt(e)
        }
        if (n) {
            n = t.document;
            var r;
            e = (r = Mr.exec(e)) ? [n.createElement(r[1])] : (r = ht(e, n)) ? r.childNodes : []
        }
        Ct(this, e)
    }

    function $t(t) {
        return t.cloneNode(!0)
    }

    function vt(t, e) {
        if (e || gt(t), t.querySelectorAll)for (var n = t.querySelectorAll("*"), r = 0, i = n.length; r < i; r++)gt(n[r])
    }

    function mt(t, e, n, i) {
        if (m(i))throw Or("offargs");
        var o = (i = yt(t)) && i.events, a = i && i.handle;
        if (a)if (e) {
            var s = function (e) {
                var r = o[e];
                m(n) && N(r || [], n), m(n) && r && 0 < r.length || (t.removeEventListener(e, a, !1), delete o[e])
            };
            r(e.split(" "), function (t) {
                s(t), Ar[t] && s(Ar[t])
            })
        } else for (e in o)"$destroy" !== e && t.removeEventListener(e, a, !1), delete o[e]
    }

    function gt(t, e) {
        var n = t.ng339, r = n && Sr[n];
        r && (e ? delete r.data[e] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), mt(t)), delete Sr[n], t.ng339 = void 0))
    }

    function yt(t, e) {
        var n = t.ng339, n = n && Sr[n];
        return e && !n && (t.ng339 = n = ++Cr, n = Sr[n] = {events: {}, data: {}, handle: void 0}), n
    }

    function bt(t, e, n) {
        if (ft(t)) {
            var r = m(n), i = !r && e && !g(e), o = !e;
            if (t = (t = yt(t, !i)) && t.data, r)t[e] = n; else {
                if (o)return t;
                if (i)return t && t[e];
                u(t, e)
            }
        }
    }

    function wt(t, e) {
        return !!t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
    }

    function xt(t, e) {
        e && t.setAttribute && r(e.split(" "), function (e) {
            t.setAttribute("class", hr((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + hr(e) + " ", " ")))
        })
    }

    function St(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(e.split(" "), function (t) {
                t = hr(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", hr(n))
        }
    }

    function Ct(t, e) {
        if (e)if (e.nodeType)t[t.length++] = e; else {
            var n = e.length;
            if ("number" == typeof n && e.window !== e) {
                if (n)for (var r = 0; r < n; r++)t[t.length++] = e[r]
            } else t[t.length++] = e
        }
    }

    function Et(t, e) {
        return kt(t, "$" + (e || "ngController") + "Controller")
    }

    function kt(t, e, n) {
        for (9 === t.nodeType && (t = t.documentElement), e = lr(e) ? e : [e]; t;) {
            for (var r = 0, i = e.length; r < i; r++)if (m(n = Zn.data(t, e[r])))return n;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }

    function At(t) {
        for (vt(t, !0); t.firstChild;)t.removeChild(t.firstChild)
    }

    function Ot(t, e) {
        e || vt(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function Mt(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Zn(n).on("load", e)
    }

    function Vt(t, e) {
        var n = Pr[e.toLowerCase()];
        return n && Rr[T(t)] && n
    }

    function Tt(t, e) {
        var n = function (n, r) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var i = e[r || n.type], o = i ? i.length : 0;
            if (o) {
                if (v(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return !0 === n.immediatePropagationStopped
                };
                var s = i.specialHandlerWrapper || Nt;
                1 < o && (i = ut(i));
                for (var u = 0; u < o; u++)n.isImmediatePropagationStopped() || s(t, n, i[u])
            }
        };
        return n.elem = t, n
    }

    function Nt(t, e, n) {
        n.call(t, e)
    }

    function jt(t, e, n) {
        var r = e.relatedTarget;
        r && (r === t || Ir.call(t, r)) || n.call(t, e)
    }

    function It() {
        this.$get = function () {
            return u(dt, {
                hasClass: function (t, e) {
                    return t.attr && (t = t[0]), wt(t, e)
                }, addClass: function (t, e) {
                    return t.attr && (t = t[0]), St(t, e)
                }, removeClass: function (t, e) {
                    return t.attr && (t = t[0]), xt(t, e)
                }
            })
        }
    }

    function Dt(t, e) {
        var n = t && t.$$hashKey;
        return n ? ("function" == typeof n && (n = t.$$hashKey()), n) : (n = typeof t, n = "function" === n || "object" === n && null !== t ? t.$$hashKey = n + ":" + (e || a)() : n + ":" + t)
    }

    function Pt(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        r(t, this.put, this)
    }

    function Rt(t) {
        return t = (Function.prototype.toString.call(t) + " ").replace(Hr, ""), t.match(_r) || t.match(qr)
    }

    function Ut(t) {
        return (t = Rt(t)) ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Ft(t, e) {
        function n(t) {
            return function (e, n) {
                return g(e) ? void r(e, o(t)) : t(e, n)
            }
        }

        function i(t, e) {
            if (rt(t, "service"), (S(e) || lr(e)) && (e = $.instantiate(e)), !e.$get)throw zr("pget", t);
            return p[t + "Provider"] = e
        }

        function a(t, e) {
            return function () {
                var n = w.invoke(e, this);
                if (v(n))throw zr("undef", t);
                return n
            }
        }

        function s(t, e, n) {
            return i(t, {$get: !1 !== n ? a(t, e) : e})
        }

        function u(t) {
            et(v(t) || lr(t), "modulesToLoad", "not an array");
            var e, n = [];
            return r(t, function (t) {
                function r(t) {
                    var e, n;
                    for (e = 0, n = t.length; e < n; e++) {
                        var r = t[e], i = $.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }

                if (!h.get(t)) {
                    h.put(t, !0);
                    try {
                        b(t) ? (e = Kn(t), n = n.concat(u(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : S(t) ? n.push($.invoke(t)) : lr(t) ? n.push($.invoke(t)) : nt(t, "module")
                    } catch (i) {
                        throw lr(t) && (t = t[t.length - 1]), i.message && i.stack && -1 === i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), zr("modulerr", t, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function c(t, n) {
            function r(e, r) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === l)throw zr("cdep", e + " <- " + f.join(" <- "));
                    return t[e]
                }
                try {
                    return f.unshift(e), t[e] = l, t[e] = n(e, r), t[e]
                } catch (i) {
                    throw t[e] === l && delete t[e], i
                } finally {
                    f.shift()
                }
            }

            function i(t, n, i) {
                var o = [];
                t = Ft.$$annotate(t, e, i);
                for (var a = 0, s = t.length; a < s; a++) {
                    var u = t[a];
                    if ("string" != typeof u)throw zr("itkn", u);
                    o.push(n && n.hasOwnProperty(u) ? n[u] : r(u, i))
                }
                return o
            }

            return {
                invoke: function (t, e, n, r) {
                    return "string" == typeof n && (r = n, n = null), n = i(t, n, r), lr(t) && (t = t[t.length - 1]), r = !(11 >= Gn) && ("function" == typeof t && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(t) + " ")), r ? (n.unshift(null), new (Function.prototype.bind.apply(t, n))) : t.apply(e, n)
                }, instantiate: function (t, e, n) {
                    var r = lr(t) ? t[t.length - 1] : t;
                    return t = i(t, e, n), t.unshift(null), new (Function.prototype.bind.apply(r, t))
                }, get: r, annotate: Ft.$$annotate, has: function (e) {
                    return p.hasOwnProperty(e + "Provider") || t.hasOwnProperty(e)
                }
            }
        }

        e = !0 === e;
        var l = {}, f = [], h = new Pt([], (!0)), p = {
            $provide: {
                provider: n(i),
                factory: n(s),
                service: n(function (t, e) {
                    return s(t, ["$injector", function (t) {
                        return t.instantiate(e)
                    }])
                }),
                value: n(function (t, e) {
                    return s(t, d(e), !1)
                }),
                constant: n(function (t, e) {
                    rt(t, "constant"), p[t] = e, m[t] = e
                }),
                decorator: function (t, e) {
                    var n = $.get(t + "Provider"), r = n.$get;
                    n.$get = function () {
                        var t = w.invoke(r, n);
                        return w.invoke(e, null, {$delegate: t})
                    }
                }
            }
        }, $ = p.$injector = c(p, function (t, e) {
            throw sr.isString(e) && f.push(e), zr("unpr", f.join(" <- "))
        }), m = {}, y = c(m, function (t, e) {
            var n = $.get(t + "Provider", e);
            return w.invoke(n.$get, n, void 0, t)
        }), w = y;
        p.$injectorProvider = {$get: d(y)};
        var x = u(t), w = y.get("$injector");
        return w.strictDi = e, r(x, function (t) {
            t && w.invoke(t)
        }), w
    }

    function _t() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return Array.prototype.some.call(t, function (t) {
                    if ("a" === T(t))return e = t, !0
                }), e
            }

            function o(t) {
                if (t) {
                    t.scrollIntoView();
                    var n;
                    n = a.yOffset, S(n) ? n = n() : M(n) ? (n = n[0], n = "fixed" !== e.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : w(n) || (n = 0), n && (t = t.getBoundingClientRect().top, e.scrollBy(0, t - n))
                } else e.scrollTo(0, 0)
            }

            function a(t) {
                t = b(t) ? t : n.hash();
                var e;
                t ? (e = s.getElementById(t)) ? o(e) : (e = i(s.getElementsByName(t))) ? o(e) : "top" === t && o(null) : o(null)
            }

            var s = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function (t, e) {
                t === e && "" === t || Mt(function () {
                    r.$evalAsync(a)
                })
            }), a
        }]
    }

    function qt(t, e) {
        return t || e ? t ? e ? (lr(t) && (t = t.join(" ")), lr(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
    }

    function Lt(t) {
        b(t) && (t = t.split(" "));
        var e = at();
        return r(t, function (t) {
            t.length && (e[t] = !0)
        }), e
    }

    function Bt(t) {
        return g(t) ? t : {}
    }

    function Ht(t, e, n, i) {
        function o(t) {
            try {
                t.apply(null, er.call(arguments, 1))
            } finally {
                if (m--, 0 === m)for (; g.length;)try {
                    g.pop()()
                } catch (e) {
                    n.error(e)
                }
            }
        }

        function a() {
            S = null, s(), u()
        }

        function s() {
            y = C(), y = v(y) ? null : y, I(y, A) && (y = A), A = y
        }

        function u() {
            w === c.url() && b === y || (w = c.url(), b = y, r(E, function (t) {
                t(c.url(), y)
            }))
        }

        var c = this, l = t.location, f = t.history, p = t.setTimeout, d = t.clearTimeout, $ = {};
        c.isMock = !1;
        var m = 0, g = [];
        c.$$completeOutstandingRequest = o, c.$$incOutstandingRequestCount = function () {
            m++
        }, c.notifyWhenNoOutstandingRequests = function (t) {
            0 === m ? t() : g.push(t)
        };
        var y, b, w = l.href, x = e.find("base"), S = null, C = i.history ? function () {
            try {
                return f.state
            } catch (t) {
            }
        } : h;
        s(), b = y, c.url = function (e, n, r) {
            if (v(r) && (r = null), l !== t.location && (l = t.location), f !== t.history && (f = t.history), e) {
                var o = b === r;
                if (w === e && (!i.history || o))return c;
                var a = w && be(w) === be(e);
                return w = e, b = r, !i.history || a && o ? (a || (S = e), n ? l.replace(e) : a ? (n = l, r = e.indexOf("#"), r = -1 === r ? "" : e.substr(r), n.hash = r) : l.href = e, l.href !== e && (S = e)) : (f[n ? "replaceState" : "pushState"](r, "", e), s(), b = y), S && (S = e), c
            }
            return S || l.href.replace(/%27/g, "'")
        }, c.state = function () {
            return y
        };
        var E = [], k = !1, A = null;
        c.onUrlChange = function (e) {
            return k || (i.history && Zn(t).on("popstate", a), Zn(t).on("hashchange", a), k = !0), E.push(e), e
        }, c.$$applicationDestroyed = function () {
            Zn(t).off("hashchange popstate", a)
        }, c.$$checkUrlChange = u, c.baseHref = function () {
            var t = x.attr("href");
            return t ? t.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
        }, c.defer = function (t, e) {
            var n;
            return m++, n = p(function () {
                delete $[n], o(t)
            }, e || 0), $[n] = !0, n
        }, c.defer.cancel = function (t) {
            return !!$[t] && (delete $[t], d(t), o(h), !0)
        }
    }

    function zt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
            return new Ht(t, r, e, n)
        }]
    }

    function Wt() {
        this.$get = function () {
            function t(t, r) {
                function i(t) {
                    t !== h && (p ? p === t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t !== e && (t && (t.p = e), e && (e.n = t))
                }

                if (t in n)throw e("$cacheFactory")("iid", t);
                var a = 0, s = u({}, r, {id: t}), c = at(), l = r && r.capacity || Number.MAX_VALUE, f = at(), h = null, p = null;
                return n[t] = {
                    put: function (t, e) {
                        if (!v(e)) {
                            if (l < Number.MAX_VALUE) {
                                var n = f[t] || (f[t] = {key: t});
                                i(n)
                            }
                            return t in c || a++, c[t] = e, a > l && this.remove(p.key), e
                        }
                    }, get: function (t) {
                        if (l < Number.MAX_VALUE) {
                            var e = f[t];
                            if (!e)return;
                            i(e)
                        }
                        return c[t]
                    }, remove: function (t) {
                        if (l < Number.MAX_VALUE) {
                            var e = f[t];
                            if (!e)return;
                            e === h && (h = e.p), e === p && (p = e.n), o(e.n, e.p), delete f[t]
                        }
                        t in c && (delete c[t], a--)
                    }, removeAll: function () {
                        c = at(), a = 0, f = at(), h = p = null
                    }, destroy: function () {
                        f = s = c = null, delete n[t]
                    }, info: function () {
                        return u({}, s, {size: a})
                    }
                }
            }

            var n = {};
            return t.info = function () {
                var t = {};
                return r(n, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return n[t]
            }, t
        }
    }

    function Gt() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function Zt(e, n) {
        function i(t, e, n) {
            var i = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, o = at();
            return r(t, function (t, r) {
                if (t in C)o[r] = C[t]; else {
                    var a = t.match(i);
                    if (!a)throw Qr("iscp", e, r, t, n ? "controller bindings definition" : "isolate scope definition");
                    o[r] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || r
                    }, a[4] && (C[t] = o[r])
                }
            }), o
        }

        function a(t) {
            var e = t.charAt(0);
            if (!e || e !== Qn(e))throw Qr("baddir", t);
            if (t !== t.trim())throw Qr("baddir", t)
        }

        function s(t) {
            var e = t.require || t.controller && t.name;
            return !lr(e) && g(e) && r(e, function (t, n) {
                var r = t.match(w);
                t.substring(r[0].length) || (e[n] = r[0] + n)
            }), e
        }

        var c = {}, l = /^\s*directive:\s*([\w\-]+)\s+(.*)$/, $ = /(([\w\-]+)(?::([^;]+))?;?)/, y = V("ngSrc,ngSrcset,src,srcset"), w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, x = /^(on[a-z]+|formaction)$/, C = at();
        this.directive = function D(t, n) {
            return rt(t, "directive"), b(t) ? (a(t), et(n, "directiveFactory"), c.hasOwnProperty(t) || (c[t] = [], e.factory(t + "Directive", ["$injector", "$exceptionHandler", function (e, n) {
                var i = [];
                return r(c[t], function (r, o) {
                    try {
                        var a = e.invoke(r);
                        S(a) ? a = {compile: d(a)} : !a.compile && a.link && (a.compile = d(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || t, a.require = s(a), a.restrict = a.restrict || "EA", a.$$moduleName = r.$$moduleName, i.push(a)
                    } catch (u) {
                        n(u)
                    }
                }), i
            }])), c[t].push(n)) : r(t, o(D)), this
        }, this.component = function (t, e) {
            function n(t) {
                function n(e) {
                    return S(e) || lr(e) ? function (n, r) {
                        return t.invoke(e, this, {$element: n, $attrs: r})
                    } : e
                }

                var o = e.template || e.templateUrl ? e.template : "", a = {
                    controller: i,
                    controllerAs: Qt(e.controller) || e.controllerAs || "$ctrl",
                    template: n(o),
                    templateUrl: n(e.templateUrl),
                    transclude: e.transclude,
                    scope: {},
                    bindToController: e.bindings || {},
                    restrict: "E",
                    require: e.require
                };
                return r(e, function (t, e) {
                    "$" === e.charAt(0) && (a[e] = t)
                }), a
            }

            var i = e.controller || function () {
                };
            return r(e, function (t, e) {
                "$" === e.charAt(0) && (n[e] = t, S(i) && (i[e] = t))
            }), n.$inject = ["$injector"], this.directive(t, n)
        }, this.aHrefSanitizationWhitelist = function (t) {
            return m(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return m(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist()
        };
        var E = !0;
        this.debugInfoEnabled = function (t) {
            return m(t) ? (E = t, this) : E
        };
        var O = 10;
        this.onChangesTtl = function (t) {
            return arguments.length ? (O = t, this) : O
        };
        var M = !0;
        this.commentDirectivesEnabled = function (t) {
            return arguments.length ? (M = t, this) : M
        };
        var j = !0;
        this.cssClassDirectivesEnabled = function (t) {
            return arguments.length ? (j = t, this) : j
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (e, n, o, a, s, d, C, V, D, R) {
            function U() {
                try {
                    if (!--Et)throw bt = void 0, Qr("infchng", O);
                    C.$apply(function () {
                        for (var t = [], e = 0, n = bt.length; e < n; ++e)try {
                            bt[e]()
                        } catch (r) {
                            t.push(r)
                        }
                        if (bt = void 0, t.length)throw t
                    })
                } finally {
                    Et++
                }
            }

            function F(t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; n < r; n++)i = o[n], this[i] = e[i]
                } else this.$attr = {};
                this.$$element = t
            }

            function _(t, e, n) {
                xt.innerHTML = "<span " + e + ">", e = xt.firstChild.attributes;
                var r = e[0];
                e.removeNamedItem(r.name), r.value = n, t.attributes.setNamedItem(r)
            }

            function q(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {
                }
            }

            function B(e, n, r, i, o) {
                e instanceof Zn || (e = Zn(e));
                for (var a = /\S+/, s = 0, u = e.length; s < u; s++) {
                    var c = e[s];
                    c.nodeType === wr && c.nodeValue.match(a) && pt(c, e[s] = t.document.createElement("span"))
                }
                var l = H(e, n, e, r, i, o);
                B.$$addScopeClass(e);
                var f = null;
                return function (t, n, r) {
                    et(t, "scope"), o && o.needsNewScope && (t = t.$parent.$new()), r = r || {};
                    var i = r.parentBoundTranscludeFn, a = r.transcludeControllers;
                    if (r = r.futureParentElement, i && i.$$boundTransclude && (i = i.$$boundTransclude), f || (f = (r = r && r[0]) && "foreignobject" !== T(r) && ir.call(r).match(/SVG/) ? "svg" : "html"), r = "html" !== f ? Zn(ft(f, Zn("<div>").append(e).html())) : n ? Dr.clone.call(e) : e, a)for (var s in a)r.data("$" + s + "Controller", a[s].instance);
                    return B.$$addScopeInfo(r, t), n && n(r, t), l && l(t, r, r, i), r
                }
            }

            function H(t, e, n, r, i, o) {
                function a(t, n, r, i) {
                    var o, a, s, u, c, l, p;
                    if (f)for (p = Array(n.length), u = 0; u < h.length; u += 3)o = h[u], p[o] = n[o]; else p = n;
                    for (u = 0, c = h.length; u < c;)a = p[h[u++]], n = h[u++], o = h[u++], n ? (n.scope ? (s = t.$new(), B.$$addScopeInfo(Zn(a), s)) : s = t, l = n.transcludeOnThisElement ? z(t, n.transclude, i) : !n.templateOnThisElement && i ? i : !i && e ? z(t, e) : null, n(o, s, a, r, l)) : o && o(t, a.childNodes, void 0, i)
                }

                for (var s, u, c, l, f, h = [], p = 0; p < t.length; p++)s = new F, u = W(t[p], [], s, 0 === p ? r : void 0, i), (o = u.length ? Y(u, t[p], s, e, n, null, [], [], o) : null) && o.scope && B.$$addScopeClass(s.$$element), s = o && o.terminal || !(c = t[p].childNodes) || !c.length ? null : H(c, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : e), (o || s) && (h.push(p, o, s), l = !0, f = f || o), o = null;
                return l ? a : null
            }

            function z(t, e, n) {
                function r(r, i, o, a, s) {
                    return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                }

                var i, o = r.$$slots = at();
                for (i in e.$$slots)o[i] = e.$$slots[i] ? z(t, e.$$slots[i], n) : null;
                return r
            }

            function W(t, e, n, r, i) {
                var o, a = n.$attr;
                switch (t.nodeType) {
                    case 1:
                        o = T(t), rt(e, Kt(o), "E", r, i);
                        for (var s, u, c, l, f = t.attributes, h = 0, p = f && f.length; h < p; h++) {
                            var d = !1, v = !1;
                            s = f[h], u = s.name, c = hr(s.value), s = Kt(u), (l = Mt.test(s)) && (u = u.replace(ei, "").substr(8).replace(/_(.)/g, function (t, e) {
                                return e.toUpperCase()
                            })), (s = s.match(Tt)) && it(s[1]) && (d = u, v = u.substr(0, u.length - 5) + "end", u = u.substr(0, u.length - 6)), s = Kt(u.toLowerCase()), a[s] = u, !l && n.hasOwnProperty(s) || (n[s] = c, Vt(t, s) && (n[s] = !0)), dt(t, e, c, s, l), rt(e, s, "A", r, i, d, v)
                        }
                        if ("input" === o && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), !Ct)break;
                        if (a = t.className, g(a) && (a = a.animVal), b(a) && "" !== a)for (; t = $.exec(a);)s = Kt(t[2]), rt(e, s, "C", r, i) && (n[s] = hr(t[3])), a = a.substr(t.index + t[0].length);
                        break;
                    case wr:
                        if (11 === Gn)for (; t.parentNode && t.nextSibling && t.nextSibling.nodeType === wr;)t.nodeValue += t.nextSibling.nodeValue, t.parentNode.removeChild(t.nextSibling);
                        lt(e, t.nodeValue);
                        break;
                    case 8:
                        if (!St)break;
                        G(t, e, n, r, i)
                }
                return e.sort(ut), e
            }

            function G(t, e, n, r, i) {
                try {
                    var o = l.exec(t.nodeValue);
                    if (o) {
                        var a = Kt(o[1]);
                        rt(e, a, "M", r, i) && (n[a] = hr(o[2]))
                    }
                } catch (s) {
                }
            }

            function Z(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t)throw Qr("uterdir", e, n);
                        1 === t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                    } while (0 < i)
                } else r.push(t);
                return Zn(r)
            }

            function J(t, e, n) {
                return function (r, i, o, a, s) {
                    return i = Z(i[0], e, n), t(r, i, o, a, s)
                }
            }

            function K(t, e, n, r, i, o) {
                var a;
                return t ? B(e, n, r, i, o) : function () {
                    return a || (a = B(e, n, r, i, o), e = n = o = null), a.apply(this, arguments)
                }
            }

            function Y(t, e, n, i, a, s, c, l, f) {
                function h(t, e, n, r) {
                    t && (n && (t = J(t, n, r)), t.require = d.require, t.directiveName = $, (E === d || d.$$isolateScope) && (t = mt(t, {isolateScope: !0})), c.push(t)), e && (n && (e = J(e, n, r)), e.require = d.require, e.directiveName = $, (E === d || d.$$isolateScope) && (e = mt(e, {isolateScope: !0})), l.push(e))
                }

                function p(t, i, a, s, f) {
                    function h(t, e, n, r) {
                        var i;
                        if (k(t) || (r = n, n = e, e = t, t = void 0), N && (i = b), n || (n = N ? O.parent() : O), !r)return f(t, e, i, n, T);
                        var o = f.$$slots[r];
                        if (o)return o(t, e, i, n, T);
                        if (v(o))throw Qr("noslot", r, L(O))
                    }

                    var p, d, $, m, y, b, w, O;
                    e === a ? (s = n, O = n.$$element) : (O = Zn(a), s = new F(O, n)), y = i, E ? m = i.$new(!0) : x && (y = i.$parent), f && (w = h, w.$$boundTransclude = f, w.isSlotFilled = function (t) {
                        return !!f.$$slots[t]
                    }), C && (b = tt(O, s, w, C, m, i, E)), E && (B.$$addScopeInfo(O, m, !0, !(A && (A === E || A === E.$$originalDirective))), B.$$addScopeClass(O, !0), m.$$isolateBindings = E.$$isolateBindings, d = yt(i, s, m, m.$$isolateBindings, E), d.removeWatches && m.$on("$destroy", d.removeWatches));
                    for (p in b) {
                        d = C[p], $ = b[p];
                        var M = d.$$bindings.bindToController;
                        $.bindingInfo = $.identifier && M ? yt(y, s, $.instance, M, d) : {};
                        var V = $();
                        V !== $.instance && ($.instance = V, O.data("$" + d.name + "Controller", V), $.bindingInfo.removeWatches && $.bindingInfo.removeWatches(), $.bindingInfo = yt(y, s, $.instance, M, d))
                    }
                    for (r(C, function (t, e) {
                        var n = t.require;
                        t.bindToController && !lr(n) && g(n) && u(b[e].instance, X(e, n, O, b))
                    }), r(b, function (t) {
                        var e = t.instance;
                        if (S(e.$onChanges))try {
                            e.$onChanges(t.bindingInfo.initialChanges)
                        } catch (n) {
                            o(n)
                        }
                        if (S(e.$onInit))try {
                            e.$onInit()
                        } catch (r) {
                            o(r)
                        }
                        S(e.$doCheck) && (y.$watch(function () {
                            e.$doCheck()
                        }), e.$doCheck()), S(e.$onDestroy) && y.$on("$destroy", function () {
                            e.$onDestroy()
                        })
                    }), p = 0, d = c.length; p < d; p++)$ = c[p], gt($, $.isolateScope ? m : i, O, s, $.require && X($.directiveName, $.require, O, b), w);
                    var T = i;
                    for (E && (E.template || null === E.templateUrl) && (T = m), t && t(T, a.childNodes, void 0, f), p = l.length - 1; 0 <= p; p--)$ = l[p], gt($, $.isolateScope ? m : i, O, s, $.require && X($.directiveName, $.require, O, b), w);
                    r(b, function (t) {
                        t = t.instance, S(t.$postLink) && t.$postLink()
                    })
                }

                f = f || {};
                for (var d, $, m, y, b, w = -Number.MAX_VALUE, x = f.newScopeDirective, C = f.controllerDirectives, E = f.newIsolateScopeDirective, A = f.templateDirective, O = f.nonTlbTranscludeDirective, M = !1, V = !1, N = f.hasElementTranscludeDirective, j = n.$$element = Zn(e), I = i, D = !1, R = !1, U = 0, _ = t.length; U < _; U++) {
                    d = t[U];
                    var q = d.$$start, H = d.$$end;
                    if (q && (j = Z(e, q, H)), m = void 0, w > d.priority)break;
                    if ((b = d.scope) && (d.templateUrl || (g(b) ? (ct("new/isolated scope", E || x, d, j), E = d) : ct("new/isolated scope", E, d, j)), x = x || d), $ = d.name, !D && (d.replace && (d.templateUrl || d.template) || d.transclude && !d.$$tlb)) {
                        for (b = U + 1; D = t[b++];)if (D.transclude && !D.$$tlb || D.replace && (D.templateUrl || D.template)) {
                            R = !0;
                            break
                        }
                        D = !0
                    }
                    if (!d.templateUrl && d.controller && (b = d.controller, C = C || at(), ct("'" + $ + "' controller", C[$], d, j), C[$] = d), b = d.transclude)if (M = !0, d.$$tlb || (ct("transclusion", O, d, j), O = d), "element" === b)N = !0, w = d.priority, m = j, j = n.$$element = Zn(B.$$createComment($, n[$])), e = j[0], vt(a, er.call(m, 0), e), m[0].$$parentNode = m[0].parentNode, I = K(R, m, i, w, s && s.name, {nonTlbTranscludeDirective: O}); else {
                        var z = at();
                        if (m = Zn($t(e)).contents(), g(b)) {
                            m = [];
                            var G = at(), Y = at();
                            r(b, function (t, e) {
                                var n = "?" === t.charAt(0);
                                t = n ? t.substring(1) : t, G[t] = e, z[e] = null, Y[e] = n
                            }), r(j.contents(), function (t) {
                                var e = G[Kt(T(t))];
                                e ? (Y[e] = !0, z[e] = z[e] || [], z[e].push(t)) : m.push(t)
                            }), r(Y, function (t, e) {
                                if (!t)throw Qr("reqslot", e)
                            });
                            for (var Q in z)z[Q] && (z[Q] = K(R, z[Q], i))
                        }
                        j.empty(), I = K(R, m, i, void 0, void 0, {needsNewScope: d.$$isolateScope || d.$$newScope}), I.$$slots = z
                    }
                    if (d.template)if (V = !0, ct("template", A, d, j), A = d, b = S(d.template) ? d.template(j, n) : d.template, b = Ot(b), d.replace) {
                        if (s = d, m = Vr.test(b) ? Xt(ft(d.templateNamespace, hr(b))) : [], e = m[0], 1 !== m.length || 1 !== e.nodeType)throw Qr("tplrt", $, "");
                        vt(a, j, e), _ = {$attr: {}}, b = W(e, [], _);
                        var et = t.splice(U + 1, t.length - (U + 1));
                        (E || x) && nt(b, E, x), t = t.concat(b).concat(et), ot(n, _), _ = t.length
                    } else j.html(b);
                    if (d.templateUrl)V = !0, ct("template", A, d, j), A = d, d.replace && (s = d), p = st(t.splice(U, t.length - U), j, n, a, M && I, c, l, {
                        controllerDirectives: C,
                        newScopeDirective: x !== d && x,
                        newIsolateScopeDirective: E,
                        templateDirective: A,
                        nonTlbTranscludeDirective: O
                    }), _ = t.length; else if (d.compile)try {
                        y = d.compile(j, n, I);
                        var rt = d.$$originalDirective || d;
                        S(y) ? h(null, P(rt, y), q, H) : y && h(P(rt, y.pre), P(rt, y.post), q, H)
                    } catch (it) {
                        o(it, L(j))
                    }
                    d.terminal && (p.terminal = !0, w = Math.max(w, d.priority))
                }
                return p.scope = x && !0 === x.scope, p.transcludeOnThisElement = M, p.templateOnThisElement = V, p.transclude = I, f.hasElementTranscludeDirective = N, p
            }

            function X(t, e, n, i) {
                var o;
                if (b(e)) {
                    var a = e.match(w);
                    e = e.substring(a[0].length);
                    var s = a[1] || a[3], a = "?" === a[2];
                    if ("^^" === s ? n = n.parent() : o = (o = i && i[e]) && o.instance, !o) {
                        var u = "$" + e + "Controller";
                        o = s ? n.inheritedData(u) : n.data(u)
                    }
                    if (!o && !a)throw Qr("ctreq", e, t)
                } else if (lr(e))for (o = [], s = 0, a = e.length; s < a; s++)o[s] = X(t, e[s], n, i); else g(e) && (o = {}, r(e, function (e, r) {
                    o[r] = X(t, e, n, i)
                }));
                return o || null
            }

            function tt(t, e, n, r, i, o, a) {
                var s, u = at();
                for (s in r) {
                    var c = r[s], l = {
                        $scope: c === a || c.$$isolateScope ? i : o,
                        $element: t,
                        $attrs: e,
                        $transclude: n
                    }, f = c.controller;
                    "@" === f && (f = e[c.name]), l = d(f, l, !0, c.controllerAs), u[c.name] = l, t.data("$" + c.name + "Controller", l.instance)
                }
                return u
            }

            function nt(t, e, n) {
                for (var r = 0, i = t.length; r < i; r++)t[r] = f(t[r], {$$isolateScope: e, $$newScope: n})
            }

            function rt(t, n, r, a, s, u, l) {
                if (n === s)return null;
                if (s = null, c.hasOwnProperty(n)) {
                    var h;
                    n = e.get(n + "Directive");
                    for (var p = 0, d = n.length; p < d; p++)try {
                        if (h = n[p], (v(a) || a > h.priority) && -1 !== h.restrict.indexOf(r)) {
                            if (u && (h = f(h, {$$start: u, $$end: l})), !h.$$bindings) {
                                var $ = h, m = h, y = h.name, b = {isolateScope: null, bindToController: null};
                                if (g(m.scope) && (!0 === m.bindToController ? (b.bindToController = i(m.scope, y, !0), b.isolateScope = {}) : b.isolateScope = i(m.scope, y, !1)), g(m.bindToController) && (b.bindToController = i(m.bindToController, y, !0)), g(b.bindToController)) {
                                    var w = m.controller, x = m.controllerAs;
                                    if (!w)throw Qr("noctrl", y);
                                    if (!Qt(w, x))throw Qr("noident", y)
                                }
                                var S = $.$$bindings = b;
                                g(S.isolateScope) && (h.$$isolateBindings = S.isolateScope)
                            }
                            t.push(h), s = h
                        }
                    } catch (C) {
                        o(C)
                    }
                }
                return s
            }

            function it(t) {
                if (c.hasOwnProperty(t))for (var n = e.get(t + "Directive"), r = 0, i = n.length; r < i; r++)if (t = n[r], t.multiElement)return !0;
                return !1
            }

            function ot(t, e) {
                var n = e.$attr, i = t.$attr;
                r(t, function (r, i) {
                    "$" !== i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                }), r(e, function (e, r) {
                    t.hasOwnProperty(r) || "$" === r.charAt(0) || (t[r] = e, "class" !== r && "style" !== r && (i[r] = n[r]))
                })
            }

            function st(t, e, n, i, o, s, u, c) {
                var l, h, p = [], d = e[0], $ = t.shift(), v = f($, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: $
                }), m = S($.templateUrl) ? $.templateUrl(e, n) : $.templateUrl, y = $.templateNamespace;
                return e.empty(), a(m).then(function (a) {
                    var f, b;
                    if (a = Ot(a), $.replace) {
                        if (a = Vr.test(a) ? Xt(ft(y, hr(a))) : [], f = a[0], 1 !== a.length || 1 !== f.nodeType)throw Qr("tplrt", $.name, m);
                        a = {$attr: {}}, vt(i, e, f);
                        var w = W(f, [], a);
                        g($.scope) && nt(w, !0), t = w.concat(t), ot(n, a)
                    } else f = d, e.html(a);
                    for (t.unshift(v), l = Y(t, f, n, o, e, $, s, u, c), r(i, function (t, n) {
                        t === f && (i[n] = e[0])
                    }), h = H(e[0].childNodes, o); p.length;) {
                        a = p.shift(), b = p.shift();
                        var x = p.shift(), S = p.shift(), w = e[0];
                        if (!a.$$destroyed) {
                            if (b !== d) {
                                var C = b.className;
                                c.hasElementTranscludeDirective && $.replace || (w = $t(f)), vt(x, Zn(b), w), q(Zn(w), C)
                            }
                            b = l.transcludeOnThisElement ? z(a, l.transclude, S) : S, l(h, a, w, i, b)
                        }
                    }
                    p = null
                }), function (t, e, n, r, i) {
                    t = i, e.$$destroyed || (p ? p.push(e, n, r, t) : (l.transcludeOnThisElement && (t = z(e, l.transclude, i)), l(h, e, n, r, t)))
                }
            }

            function ut(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function ct(t, e, n, r) {
                function i(t) {
                    return t ? " (module: " + t + ")" : ""
                }

                if (e)throw Qr("multidir", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, L(r))
            }

            function lt(t, e) {
                var r = n(e, !0);
                r && t.push({
                    priority: 0, compile: function (t) {
                        t = t.parent();
                        var e = !!t.length;
                        return e && B.$$addBindingClass(t), function (t, n) {
                            var i = n.parent();
                            e || B.$$addBindingClass(i), B.$$addBindingInfo(i, r.expressions), t.$watch(r, function (t) {
                                n[0].nodeValue = t
                            })
                        }
                    }
                })
            }

            function ft(e, n) {
                switch (e = Qn(e || "html")) {
                    case"svg":
                    case"math":
                        var r = t.document.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function ht(t, e) {
                if ("srcdoc" === e)return V.HTML;
                var n = T(t);
                if ("src" === e || "ngSrc" === e) {
                    if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n))return V.RESOURCE_URL
                } else if ("xlinkHref" === e || "form" === n && "action" === e)return V.RESOURCE_URL
            }

            function dt(t, e, r, i, o) {
                var a = ht(t, i);
                o = y[i] || o;
                var s = n(r, !0, a, o);
                if (s) {
                    if ("multiple" === i && "select" === T(t))throw Qr("selmulti", L(t));
                    e.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (t, e, u) {
                                    if (e = u.$$observers || (u.$$observers = at()), x.test(i))throw Qr("nodomevents");
                                    var c = u[i];
                                    c !== r && (s = c && n(c, !0, a, o), r = c), s && (u[i] = s(t), (e[i] || (e[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function (t, e) {
                                        "class" === i && t !== e ? u.$updateClass(t, e) : u.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function vt(e, n, r) {
                var i, o, a = n[0], s = n.length, u = a.parentNode;
                if (e)for (i = 0, o = e.length; i < o; i++)if (e[i] === a) {
                    e[i++] = r, o = i + s - 1;
                    for (var c = e.length; i < c; i++, o++)o < c ? e[i] = e[o] : delete e[i];
                    e.length -= s - 1, e.context === a && (e.context = r);
                    break
                }
                for (u && u.replaceChild(r, a), e = t.document.createDocumentFragment(), i = 0; i < s; i++)e.appendChild(n[i]);
                for (Zn.hasData(a) && (Zn.data(r, Zn.data(a)), Zn(a).off("$destroy")), Zn.cleanData(e.querySelectorAll("*")), i = 1; i < s; i++)delete n[i];
                n[0] = r, n.length = 1
            }

            function mt(t, e) {
                return u(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function gt(t, e, n, r, i, a) {
                try {
                    t(e, n, r, i, a)
                } catch (s) {
                    o(s, L(n))
                }
            }

            function yt(t, e, i, o, a) {
                function u(e, n, r) {
                    S(i.$onChanges) && n !== r && (bt || (t.$$postDigest(U), bt = []), l || (l = {}, bt.push(c)), l[e] && (r = l[e].previousValue), l[e] = new Jt(r, n))
                }

                function c() {
                    i.$onChanges(l), l = void 0
                }

                var l, f = [], p = {};
                return r(o, function (r, o) {
                    var c, l, d, $, v = r.attrName, m = r.optional;
                    switch (r.mode) {
                        case"@":
                            m || Xn.call(e, v) || (i[o] = e[v] = void 0), e.$observe(v, function (t) {
                                (b(t) || A(t)) && (u(o, t, i[o]), i[o] = t)
                            }), e.$$observers[v].$$scope = t, c = e[v], b(c) ? i[o] = n(c)(t) : A(c) && (i[o] = c), p[o] = new Jt(ti, i[o]);
                            break;
                        case"=":
                            if (!Xn.call(e, v)) {
                                if (m)break;
                                e[v] = void 0
                            }
                            if (m && !e[v])break;
                            l = s(e[v]), $ = l.literal ? I : function (t, e) {
                                return t === e || t !== t && e !== e
                            }, d = l.assign || function () {
                                    throw c = i[o] = l(t), Qr("nonassign", e[v], v, a.name)
                                }, c = i[o] = l(t), m = function (e) {
                                return $(e, i[o]) || ($(e, c) ? d(t, e = i[o]) : i[o] = e), c = e
                            }, m.$stateful = !0, m = r.collection ? t.$watchCollection(e[v], m) : t.$watch(s(e[v], m), null, l.literal), f.push(m);
                            break;
                        case"<":
                            if (!Xn.call(e, v)) {
                                if (m)break;
                                e[v] = void 0
                            }
                            if (m && !e[v])break;
                            l = s(e[v]);
                            var g = i[o] = l(t);
                            p[o] = new Jt(ti, i[o]), m = t.$watch(l, function (t, e) {
                                if (e === t) {
                                    if (e === g)return;
                                    e = g
                                }
                                u(o, t, e), i[o] = t
                            }, l.literal), f.push(m);
                            break;
                        case"&":
                            if (l = e.hasOwnProperty(v) ? s(e[v]) : h, l === h && m)break;
                            i[o] = function (e) {
                                return l(t, e)
                            }
                    }
                }), {
                    initialChanges: p, removeWatches: f.length && function () {
                        for (var t = 0, e = f.length; t < e; ++t)f[t]()
                    }
                }
            }

            var bt, wt = /^\w/, xt = t.document.createElement("div"), St = M, Ct = j, Et = O;
            F.prototype = {
                $normalize: Kt, $addClass: function (t) {
                    t && 0 < t.length && D.addClass(this.$$element, t)
                }, $removeClass: function (t) {
                    t && 0 < t.length && D.removeClass(this.$$element, t)
                }, $updateClass: function (t, e) {
                    var n = Yt(t, e);
                    n && n.length && D.addClass(this.$$element, n), (n = Yt(e, t)) && n.length && D.removeClass(this.$$element, n)
                }, $set: function (t, e, n, i) {
                    var a = Vt(this.$$element[0], t), s = Ur[t], u = t;
                    if (a ? (this.$$element.prop(t, e), i = a) : s && (this[s] = e, u = s), this[t] = e, i ? this.$attr[t] = i : (i = this.$attr[t]) || (this.$attr[t] = i = Q(t, "-")), a = T(this.$$element), "a" === a && ("href" === t || "xlinkHref" === t) || "img" === a && "src" === t)this[t] = e = R(e, "src" === t); else if ("img" === a && "srcset" === t && m(e)) {
                        for (var a = "", s = hr(e), c = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, c = /\s/.test(s) ? c : /(,)/, s = s.split(c), c = Math.floor(s.length / 2), l = 0; l < c; l++)var f = 2 * l, a = a + R(hr(s[f]), !0), a = a + (" " + hr(s[f + 1]));
                        s = hr(s[2 * l]).split(/\s/), a += R(hr(s[0]), !0), 2 === s.length && (a += " " + hr(s[1])), this[t] = e = a
                    }
                    !1 !== n && (null === e || v(e) ? this.$$element.removeAttr(i) : wt.test(i) ? this.$$element.attr(i, e) : _(this.$$element[0], i, e)), (t = this.$$observers) && r(t[u], function (t) {
                        try {
                            t(e)
                        } catch (n) {
                            o(n)
                        }
                    })
                }, $observe: function (t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = at()), i = r[t] || (r[t] = []);
                    return i.push(e), C.$evalAsync(function () {
                        i.$$inter || !n.hasOwnProperty(t) || v(n[t]) || e(n[t])
                    }), function () {
                        N(i, e)
                    }
                }
            };
            var kt = n.startSymbol(), At = n.endSymbol(), Ot = "{{" === kt && "}}" === At ? p : function (t) {
                return t.replace(/\{\{/g, kt).replace(/}}/g, At)
            }, Mt = /^ngAttr[A-Z]/, Tt = /^(.+)Start$/;
            return B.$$addBindingInfo = E ? function (t, e) {
                var n = t.data("$binding") || [];
                lr(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : h, B.$$addBindingClass = E ? function (t) {
                q(t, "ng-binding")
            } : h, B.$$addScopeInfo = E ? function (t, e, n, r) {
                t.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", e)
            } : h, B.$$addScopeClass = E ? function (t, e) {
                q(t, e ? "ng-isolate-scope" : "ng-scope")
            } : h, B.$$createComment = function (e, n) {
                var r = "";
                return E && (r = " " + (e || "") + ": ", n && (r += n + " ")), t.document.createComment(r)
            }, B
        }]
    }

    function Jt(t, e) {
        this.previousValue = t, this.currentValue = e
    }

    function Kt(t) {
        return lt(t.replace(ei, ""))
    }

    function Yt(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
        t:for (; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)if (a === i[s])continue t;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function Xt(t) {
        t = Zn(t);
        var e = t.length;
        if (1 >= e)return t;
        for (; e--;)8 === t[e].nodeType && nr.call(t, e, 1);
        return t
    }

    function Qt(t, e) {
        if (e && b(e))return e;
        if (b(t)) {
            var n = ri.exec(t);
            if (n)return n[3]
        }
    }

    function te() {
        var t = {}, n = !1;
        this.has = function (e) {
            return t.hasOwnProperty(e)
        }, this.register = function (e, n) {
            rt(e, "controller"), g(e) ? u(t, e) : t[e] = n
        }, this.allowGlobals = function () {
            n = !0
        }, this.$get = ["$injector", "$window", function (r, i) {
            function o(t, n, r, i) {
                if (!t || !g(t.$scope))throw e("$controller")("noscp", i, n);
                t.$scope[n] = r
            }

            return function (e, a, s, c) {
                var l, f, h;
                if (s = !0 === s, c && b(c) && (h = c), b(e)) {
                    if (c = e.match(ri), !c)throw ni("ctrlfmt", e);
                    f = c[1], h = h || c[3], e = t.hasOwnProperty(f) ? t[f] : it(a.$scope, f, !0) || (n ? it(i, f, !0) : void 0), nt(e, f, !0)
                }
                return s ? (s = (lr(e) ? e[e.length - 1] : e).prototype, l = Object.create(s || null), h && o(a, h, l, f || e.name), u(function () {
                    var t = r.invoke(e, l, a, f);
                    return t !== l && (g(t) || S(t)) && (l = t, h && o(a, h, l, f || e.name)), l
                }, {instance: l, identifier: h})) : (l = r.instantiate(e, a, f), h && o(a, h, l, f || e.name), l)
            }
        }]
    }

    function ee() {
        this.$get = ["$window", function (t) {
            return Zn(t.document)
        }]
    }

    function ne() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function re(t) {
        return g(t) ? x(t) ? t.toISOString() : U(t) : t
    }

    function ie() {
        this.$get = function () {
            return function (t) {
                if (!t)return "";
                var e = [];
                return i(t, function (t, n) {
                    null === t || v(t) || (lr(t) ? r(t, function (t) {
                        e.push(G(n) + "=" + G(re(t)))
                    }) : e.push(G(n) + "=" + G(re(t))))
                }), e.join("&")
            }
        }
    }

    function oe() {
        this.$get = function () {
            return function (t) {
                function e(t, o, a) {
                    null === t || v(t) || (lr(t) ? r(t, function (t, n) {
                        e(t, o + "[" + (g(t) ? n : "") + "]")
                    }) : g(t) && !x(t) ? i(t, function (t, n) {
                        e(t, o + (a ? "" : "[") + n + (a ? "" : "]"))
                    }) : n.push(G(o) + "=" + G(re(t))))
                }

                if (!t)return "";
                var n = [];
                return e(t, "", !0), n.join("&")
            }
        }
    }

    function ae(t, e) {
        if (b(t)) {
            var n = t.replace(ci, "").trim();
            if (n) {
                var r = e("Content-Type");
                (r = r && 0 === r.indexOf(oi)) || (r = (r = n.match(si)) && ui[r[0]].test(n)), r && (t = F(n))
            }
        }
        return t
    }

    function se(t) {
        var e, n = at();
        return b(t) ? r(t.split("\n"), function (t) {
            e = t.indexOf(":");
            var r = Qn(hr(t.substr(0, e)));
            t = hr(t.substr(e + 1)), r && (n[r] = n[r] ? n[r] + ", " + t : t)
        }) : g(t) && r(t, function (t, e) {
            var r = Qn(e), i = hr(t);
            r && (n[r] = n[r] ? n[r] + ", " + i : i)
        }), n
    }

    function ue(t) {
        var e;
        return function (n) {
            return e || (e = se(t)), n ? (n = e[Qn(n)], void 0 === n && (n = null), n) : e
        }
    }

    function ce(t, e, n, i) {
        return S(i) ? i(t, e, n) : (r(i, function (r) {
            t = r(t, e, n)
        }), t)
    }

    function le() {
        var t = this.defaults = {
            transformResponse: [ae],
            transformRequest: [function (t) {
                return g(t) && "[object File]" !== ir.call(t) && "[object Blob]" !== ir.call(t) && "[object FormData]" !== ir.call(t) ? U(t) : t
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: ut(ai), put: ut(ai), patch: ut(ai)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, n = !1;
        this.useApplyAsync = function (t) {
            return m(t) ? (n = !!t, this) : n
        };
        var i = !0;
        this.useLegacyPromiseExtensions = function (t) {
            return m(t) ? (i = !!t, this) : i
        };
        var o = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, s, c, l, f, h) {
            function p(n) {
                function o(t, e) {
                    for (var n = 0, r = e.length; n < r;) {
                        var i = e[n++], o = e[n++];
                        t = t.then(i, o)
                    }
                    return e.length = 0, t
                }

                function a(t, e) {
                    var n, i = {};
                    return r(t, function (t, r) {
                        S(t) ? (n = t(e), null != n && (i[r] = n)) : i[r] = t
                    }), i
                }

                function s(t) {
                    var e = u({}, t);
                    return e.data = ce(t.data, t.headers, t.status, c.transformResponse), t = t.status, 200 <= t && 300 > t ? e : f.reject(e)
                }

                if (!g(n))throw e("$http")("badreq", n);
                if (!b(n.url))throw e("$http")("badreq", n.url);
                var c = u({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse,
                    paramSerializer: t.paramSerializer
                }, n);
                c.headers = function (e) {
                    var n, r, i, o = t.headers, s = u({}, e.headers), o = u({}, o.common, o[Qn(e.method)]);
                    t:for (n in o) {
                        r = Qn(n);
                        for (i in s)if (Qn(i) === r)continue t;
                        s[n] = o[n]
                    }
                    return a(s, ut(e))
                }(n), c.method = tr(c.method), c.paramSerializer = b(c.paramSerializer) ? h.get(c.paramSerializer) : c.paramSerializer;
                var l = [], p = [], $ = f.when(c);
                return r(w, function (t) {
                    (t.request || t.requestError) && l.unshift(t.request, t.requestError), (t.response || t.responseError) && p.push(t.response, t.responseError)
                }), $ = o($, l), $ = $.then(function (e) {
                    var n = e.headers, i = ce(e.data, ue(n), void 0, e.transformRequest);
                    return v(i) && r(n, function (t, e) {
                        "content-type" === Qn(e) && delete n[e]
                    }), v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials), d(e, i).then(s, s)
                }), $ = o($, p), i ? ($.success = function (t) {
                    return nt(t, "fn"), $.then(function (e) {
                        t(e.data, e.status, e.headers, c)
                    }), $
                }, $.error = function (t) {
                    return nt(t, "fn"), $.then(null, function (e) {
                        t(e.data, e.status, e.headers, c)
                    }), $
                }) : ($.success = fi("success"), $.error = fi("error")), $
            }

            function d(e, i) {
                function o(t) {
                    if (t) {
                        var e = {};
                        return r(t, function (t, r) {
                            e[r] = function (e) {
                                function r() {
                                    t(e)
                                }

                                n ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r)
                            }
                        }), e
                    }
                }

                function u(t, e, r, i) {
                    function o() {
                        c(e, t, r, i)
                    }

                    b && (200 <= t && 300 > t ? b.put(k, [t, e, se(r), i]) : b.remove(k)), n ? l.$applyAsync(o) : (o(), l.$$phase || l.$apply())
                }

                function c(t, n, r, i) {
                    n = -1 <= n ? n : 0, (200 <= n && 300 > n ? x.resolve : x.reject)({
                        data: t,
                        status: n,
                        headers: ue(r),
                        config: e,
                        statusText: i
                    })
                }

                function h(t) {
                    c(t.data, t.status, ut(t.headers()), t.statusText)
                }

                function d() {
                    var t = p.pendingRequests.indexOf(e);
                    -1 !== t && p.pendingRequests.splice(t, 1)
                }

                var b, w, x = f.defer(), C = x.promise, E = e.headers, k = $(e.url, e.paramSerializer(e.params));
                return p.pendingRequests.push(e), C.then(d, d), !e.cache && !t.cache || !1 === e.cache || "GET" !== e.method && "JSONP" !== e.method || (b = g(e.cache) ? e.cache : g(t.cache) ? t.cache : y), b && (w = b.get(k), m(w) ? w && S(w.then) ? w.then(h, h) : lr(w) ? c(w[1], w[0], ut(w[2]), w[3]) : c(w, 200, {}, "OK") : b.put(k, C)), v(w) && ((w = un(e.url) ? s()[e.xsrfCookieName || t.xsrfCookieName] : void 0) && (E[e.xsrfHeaderName || t.xsrfHeaderName] = w), a(e.method, k, i, u, E, e.timeout, e.withCredentials, e.responseType, o(e.eventHandlers), o(e.uploadEventHandlers))), C
            }

            function $(t, e) {
                return 0 < e.length && (t += (-1 === t.indexOf("?") ? "?" : "&") + e), t
            }

            var y = c("$http");
            t.paramSerializer = b(t.paramSerializer) ? h.get(t.paramSerializer) : t.paramSerializer;
            var w = [];
            return r(o, function (t) {
                w.unshift(b(t) ? h.get(t) : h.invoke(t))
            }), p.pendingRequests = [], function (t) {
                r(arguments, function (t) {
                    p[t] = function (e, n) {
                        return p(u({}, n || {}, {method: t, url: e}))
                    }
                })
            }("get", "delete", "head", "jsonp"), function (t) {
                r(arguments, function (t) {
                    p[t] = function (e, n, r) {
                        return p(u({}, r || {}, {method: t, url: e, data: n}))
                    }
                })
            }("post", "put", "patch"), p.defaults = t, p
        }]
    }

    function fe() {
        this.$get = function () {
            return function () {
                return new t.XMLHttpRequest
            }
        }
    }

    function he() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (t, e, n, r) {
            return pe(t, r, t.defer, e, n[0])
        }]
    }

    function pe(t, e, n, i, o) {
        function a(t, e, n) {
            t = t.replace("JSON_CALLBACK", e);
            var r = o.createElement("script"), a = null;
            return r.type = "text/javascript", r.src = t, r.async = !0, a = function (t) {
                r.removeEventListener("load", a, !1), r.removeEventListener("error", a, !1), o.body.removeChild(r), r = null;
                var s = -1, u = "unknown";
                t && ("load" !== t.type || i.wasCalled(e) || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
            }, r.addEventListener("load", a, !1), r.addEventListener("error", a, !1), o.body.appendChild(r), a
        }

        return function (o, s, u, c, l, f, p, d, $, g) {
            function y() {
                x && x(), C && C.abort()
            }

            function b(e, r, i, o, a) {
                m(k) && n.cancel(k), x = C = null, e(r, i, o, a), t.$$completeOutstandingRequest(h)
            }

            if (t.$$incOutstandingRequestCount(), s = s || t.url(), "jsonp" === Qn(o))var w = i.createCallback(s), x = a(s, w, function (t, e) {
                var n = 200 === t && i.getResponse(w);
                b(c, t, n, "", e), i.removeCallback(w)
            }); else {
                var C = e(o, s);
                if (C.open(o, s, !0), r(l, function (t, e) {
                        m(t) && C.setRequestHeader(e, t)
                    }), C.onload = function () {
                        var t = C.statusText || "", e = "response" in C ? C.response : C.responseText, n = 1223 === C.status ? 204 : C.status;
                        0 === n && (n = e ? 200 : "file" === sn(s).protocol ? 404 : 0), b(c, n, e, C.getAllResponseHeaders(), t)
                    }, o = function () {
                        b(c, -1, null, null, "")
                    }, C.onerror = o, C.onabort = o, C.ontimeout = o, r($, function (t, e) {
                        C.addEventListener(e, t)
                    }), r(g, function (t, e) {
                        C.upload.addEventListener(e, t)
                    }), p && (C.withCredentials = !0), d)try {
                    C.responseType = d
                } catch (E) {
                    if ("json" !== d)throw E
                }
                C.send(v(u) ? null : u)
            }
            if (0 < f)var k = n(y, f); else f && S(f.then) && f.then(y)
        }
    }

    function de() {
        var t = "{{", e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(t) {
                return "\\\\\\" + t
            }

            function a(n) {
                return n.replace(h, t).replace(p, e)
            }

            function s(t, e, n, r) {
                var i = t.$watch(function (t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function c(o, c, h, p) {
                function $(t) {
                    try {
                        var e = t;
                        t = h ? i.getTrusted(h, e) : i.valueOf(e);
                        var n;
                        if (p && !m(t))n = t; else if (null == t)n = ""; else {
                            switch (typeof t) {
                                case"string":
                                    break;
                                case"number":
                                    t = "" + t;
                                    break;
                                default:
                                    t = U(t)
                            }
                            n = t
                        }
                        return n
                    } catch (a) {
                        r(hi.interr(o, a))
                    }
                }

                if (!o.length || -1 === o.indexOf(t)) {
                    var g;
                    return c || (c = a(o), g = d(c), g.exp = o, g.expressions = [], g.$$watchDelegate = s), g
                }
                p = !!p;
                var y, b, w = 0, x = [], C = [];
                g = o.length;
                for (var E = [], k = []; w < g;) {
                    if (-1 === (y = o.indexOf(t, w)) || -1 === (b = o.indexOf(e, y + l))) {
                        w !== g && E.push(a(o.substring(w)));
                        break
                    }
                    w !== y && E.push(a(o.substring(w, y))), w = o.substring(y + l, b), x.push(w), C.push(n(w, $)), w = b + f, k.push(E.length), E.push("")
                }
                if (h && 1 < E.length && hi.throwNoconcat(o), !c || x.length) {
                    var A = function (t) {
                        for (var e = 0, n = x.length; e < n; e++) {
                            if (p && v(t[e]))return;
                            E[k[e]] = t[e]
                        }
                        return E.join("")
                    };
                    return u(function (t) {
                        var e = 0, n = x.length, i = Array(n);
                        try {
                            for (; e < n; e++)i[e] = C[e](t);
                            return A(i)
                        } catch (a) {
                            r(hi.interr(o, a))
                        }
                    }, {
                        exp: o, expressions: x, $$watchDelegate: function (t, e) {
                            var n;
                            return t.$watchGroup(C, function (r, i) {
                                var o = A(r);
                                S(e) && e.call(this, o, r !== i ? n : o, t), n = o
                            })
                        }
                    })
                }
            }

            var l = t.length, f = e.length, h = new RegExp(t.replace(/./g, o), "g"), p = new RegExp(e.replace(/./g, o), "g");
            return c.startSymbol = function () {
                return t
            }, c.endSymbol = function () {
                return e
            }, c
        }]
    }

    function $e() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (t, e, n, r, i) {
            function o(o, s, u, c) {
                function l() {
                    f ? o.apply(null, h) : o($)
                }

                var f = 4 < arguments.length, h = f ? er.call(arguments, 4) : [], p = e.setInterval, d = e.clearInterval, $ = 0, v = m(c) && !c, g = (v ? r : n).defer(), y = g.promise;
                return u = m(u) ? u : 0, y.$$intervalId = p(function () {
                    v ? i.defer(l) : t.$evalAsync(l), g.notify($++), 0 < u && $ >= u && (g.resolve($), d(y.$$intervalId), delete a[y.$$intervalId]), v || t.$apply()
                }, s), a[y.$$intervalId] = g, y
            }

            var a = {};
            return o.cancel = function (t) {
                return !!(t && t.$$intervalId in a) && (a[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete a[t.$$intervalId], !0)
            }, o
        }]
    }

    function ve(t) {
        t = t.split("/");
        for (var e = t.length; e--;)t[e] = W(t[e]);
        return t.join("/")
    }

    function me(t, e) {
        var n = sn(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = l(n.port) || $i[n.protocol] || null
    }

    function ge(t, e) {
        if (mi.test(t))throw vi("badpath", t);
        var n = "/" !== t.charAt(0);
        n && (t = "/" + t);
        var r = sn(t);
        e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = H(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function ye(t, e) {
        if (0 === e.lastIndexOf(t, 0))return e.substr(t.length)
    }

    function be(t) {
        var e = t.indexOf("#");
        return -1 === e ? t : t.substr(0, e)
    }

    function we(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function xe(t, e, n) {
        this.$$html5 = !0, n = n || "", me(t, this), this.$$parse = function (t) {
            var n = ye(e, t);
            if (!b(n))throw vi("ipthprfx", t, e);
            ge(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var t = z(this.$$search), n = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
            var o, a;
            return m(o = ye(t, r)) ? (a = o, a = n && m(o = ye(n, o)) ? e + (ye("/", o) || o) : t + a) : m(o = ye(e, r)) ? a = e + o : e === r + "/" && (a = e), a && this.$$parse(a), !!a
        }
    }

    function Se(t, e, n) {
        me(t, this), this.$$parse = function (r) {
            var i, o = ye(t, r) || ye(e, r);
            v(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", v(o) && (t = r, this.replace())) : (i = ye(n, o), v(i) && (i = o)), ge(i, this), r = this.$$path;
            var o = t, a = /^\/[A-Z]:(\/.*)/;
            0 === i.lastIndexOf(o, 0) && (i = i.replace(o, "")), a.exec(i) || (r = (i = a.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
        }, this.$$compose = function () {
            var e = z(this.$$search), r = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function (e, n) {
            return be(t) === be(e) && (this.$$parse(e), !0)
        }
    }

    function Ce(t, e, n) {
        this.$$html5 = !0, Se.apply(this, arguments), this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
            var o, a;
            return t === be(r) ? o = r : (a = ye(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o
        }, this.$$compose = function () {
            var e = z(this.$$search), r = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + n + this.$$url
        }
    }

    function Ee(t) {
        return function () {
            return this[t]
        }
    }

    function ke(t, e) {
        return function (n) {
            return v(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function Ae() {
        var t = "", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (e) {
            return m(e) ? (t = e, this) : t
        }, this.html5Mode = function (t) {
            return A(t) ? (e.enabled = t, this) : g(t) ? (A(t.enabled) && (e.enabled = t.enabled), A(t.requireBase) && (e.requireBase = t.requireBase), A(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
            function s(t, e, n) {
                var i = c.url(), o = c.$$state;
                try {
                    r.url(t, e, n), c.$$state = r.state()
                } catch (a) {
                    throw c.url(i), c.$$state = o, a
                }
            }

            function u(t, e) {
                n.$broadcast("$locationChangeSuccess", c.absUrl(), t, c.$$state, e)
            }

            var c, l;
            l = r.baseHref();
            var f, h = r.url();
            if (e.enabled) {
                if (!l && e.requireBase)throw vi("nobase");
                f = h.substring(0, h.indexOf("/", h.indexOf("//") + 2)) + (l || "/"), l = i.history ? xe : Ce
            } else f = be(h), l = Se;
            var p = f.substr(0, be(f).lastIndexOf("/") + 1);
            c = new l(f, p, "#" + t), c.$$parseLinkUrl(h, h), c.$$state = r.state();
            var d = /^\s*(javascript|mailto):/i;
            o.on("click", function (t) {
                if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
                    for (var i = Zn(t.target); "a" !== T(i[0]);)if (i[0] === o[0] || !(i = i.parent())[0])return;
                    var s = i.prop("href"), u = i.attr("href") || i.attr("xlink:href");
                    g(s) && "[object SVGAnimatedString]" === s.toString() && (s = sn(s.animVal).href), d.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || !c.$$parseLinkUrl(s, u) || (t.preventDefault(), c.absUrl() !== r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), we(c.absUrl()) !== we(h) && r.url(c.absUrl(), !0);
            var $ = !0;
            return r.onUrlChange(function (t, e) {
                v(ye(p, t)) ? a.location.href = t : (n.$evalAsync(function () {
                    var r, i = c.absUrl(), o = c.$$state;
                    t = we(t), c.$$parse(t), c.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : ($ = !1, u(i, o)))
                }), n.$$phase || n.$digest())
            }), n.$watch(function () {
                var t = we(r.url()), e = we(c.absUrl()), o = r.state(), a = c.$$replace, l = t !== e || c.$$html5 && i.history && o !== c.$$state;
                ($ || l) && ($ = !1, n.$evalAsync(function () {
                    var e = c.absUrl(), r = n.$broadcast("$locationChangeStart", e, t, c.$$state, o).defaultPrevented;
                    c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o) : (l && s(e, a, o === c.$$state ? null : c.$$state), u(t, o)))
                })), c.$$replace = !1
            }), c
        }]
    }

    function Oe() {
        var t = !0, e = this;
        this.debugEnabled = function (e) {
            return m(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function i(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function o(t) {
                var e = n.console || {}, o = e[t] || e.log || h;
                t = !1;
                try {
                    t = !!o.apply
                } catch (a) {
                }
                return t ? function () {
                    var t = [];
                    return r(arguments, function (e) {
                        t.push(i(e))
                    }), o.apply(e, t)
                } : function (t, e) {
                    o(t, null == e ? "" : e)
                }
            }

            return {
                log: o("log"), info: o("info"), warn: o("warn"), error: o("error"), debug: function () {
                    var n = o("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Me(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t)throw yi("isecfld", e);
        return t
    }

    function Ve(t) {
        return t + ""
    }

    function Te(t, e) {
        if (t) {
            if (t.constructor === t)throw yi("isecfn", e);
            if (t.window === t)throw yi("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find))throw yi("isecdom", e);
            if (t === Object)throw yi("isecobj", e)
        }
        return t
    }

    function Ne(t, e) {
        if (t) {
            if (t.constructor === t)throw yi("isecfn", e);
            if (t === Ni || t === ji || t === Ii)throw yi("isecff", e)
        }
    }

    function je(t, e) {
        if (t && (t === bi || t === wi || t === xi || t === Si || t === Ci || t === Ei || t === ki || t === Ai || t === Oi || t === Mi || t === Vi || t === Ti))throw yi("isecaf", e)
    }

    function Ie(t, e) {
        return "undefined" != typeof t ? t : e
    }

    function De(t, e) {
        return "undefined" == typeof t ? e : "undefined" == typeof e ? t : t + e
    }

    function Pe(t, e) {
        var n, i, o;
        switch (t.type) {
            case Fi.Program:
                n = !0, r(t.body, function (t) {
                    Pe(t.expression, e), n = n && t.expression.constant
                }), t.constant = n;
                break;
            case Fi.Literal:
                t.constant = !0, t.toWatch = [];
                break;
            case Fi.UnaryExpression:
                Pe(t.argument, e), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                break;
            case Fi.BinaryExpression:
                Pe(t.left, e), Pe(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                break;
            case Fi.LogicalExpression:
                Pe(t.left, e), Pe(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case Fi.ConditionalExpression:
                Pe(t.test, e), Pe(t.alternate, e), Pe(t.consequent, e), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case Fi.Identifier:
                t.constant = !1, t.toWatch = [t];
                break;
            case Fi.MemberExpression:
                Pe(t.object, e), t.computed && Pe(t.property, e), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = [t];
                break;
            case Fi.CallExpression:
                n = o = !!t.filter && !e(t.callee.name).$stateful, i = [], r(t.arguments, function (t) {
                    Pe(t, e), n = n && t.constant, t.constant || i.push.apply(i, t.toWatch)
                }), t.constant = n, t.toWatch = o ? i : [t];
                break;
            case Fi.AssignmentExpression:
                Pe(t.left, e), Pe(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                break;
            case Fi.ArrayExpression:
                n = !0, i = [], r(t.elements, function (t) {
                    Pe(t, e), n = n && t.constant, t.constant || i.push.apply(i, t.toWatch)
                }), t.constant = n, t.toWatch = i;
                break;
            case Fi.ObjectExpression:
                n = !0, i = [], r(t.properties, function (t) {
                    Pe(t.value, e), n = n && t.value.constant && !t.computed, t.value.constant || i.push.apply(i, t.value.toWatch)
                }), t.constant = n, t.toWatch = i;
                break;
            case Fi.ThisExpression:
                t.constant = !1, t.toWatch = [];
                break;
            case Fi.LocalsExpression:
                t.constant = !1, t.toWatch = []
        }
    }

    function Re(t) {
        if (1 === t.length) {
            t = t[0].expression;
            var e = t.toWatch;
            return 1 !== e.length ? e : e[0] !== t ? e : void 0
        }
    }

    function Ue(t) {
        return t.type === Fi.Identifier || t.type === Fi.MemberExpression
    }

    function Fe(t) {
        if (1 === t.body.length && Ue(t.body[0].expression))return {
            type: Fi.AssignmentExpression,
            left: t.body[0].expression,
            right: {type: Fi.NGValueParameter},
            operator: "="
        }
    }

    function _e(t) {
        return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === Fi.Literal || t.body[0].expression.type === Fi.ArrayExpression || t.body[0].expression.type === Fi.ObjectExpression)
    }

    function qe(t, e) {
        this.astBuilder = t, this.$filter = e
    }

    function Le(t, e) {
        this.astBuilder = t, this.$filter = e
    }

    function Be(t) {
        return "constructor" === t
    }

    function He(t) {
        return S(t.valueOf) ? t.valueOf() : Di.call(t)
    }

    function ze() {
        var t, e, n = at(), i = at(), o = {"true": !0, "false": !1, "null": null, undefined: void 0};
        this.addLiteral = function (t, e) {
            o[t] = e
        }, this.setIdentifierFns = function (n, r) {
            return t = n, e = r, this
        }, this.$get = ["$filter", function (a) {
            function s(t, e, r) {
                var o, s, c;
                switch (r = r || b, typeof t) {
                    case"string":
                        c = t = t.trim();
                        var v = r ? i : n;
                        if (o = v[c], !o) {
                            ":" === t.charAt(0) && ":" === t.charAt(1) && (s = !0, t = t.substring(2)), o = r ? y : g;
                            var m = new Ui(o);
                            o = new _i(m, a, o).parse(t), o.constant ? o.$$watchDelegate = d : s ? o.$$watchDelegate = o.literal ? p : f : o.inputs && (o.$$watchDelegate = l), r && (o = u(o)), v[c] = o
                        }
                        return $(o, e);
                    case"function":
                        return $(t, e);
                    default:
                        return $(h, e)
                }
            }

            function u(t) {
                function e(e, n, r, i) {
                    var o = b;
                    b = !0;
                    try {
                        return t(e, n, r, i)
                    } finally {
                        b = o
                    }
                }

                if (!t)return t;
                e.$$watchDelegate = t.$$watchDelegate, e.assign = u(t.assign), e.constant = t.constant, e.literal = t.literal;
                for (var n = 0; t.inputs && n < t.inputs.length; ++n)t.inputs[n] = u(t.inputs[n]);
                return e.inputs = t.inputs, e
            }

            function c(t, e) {
                return null == t || null == e ? t === e : ("object" != typeof t || (t = He(t), "object" != typeof t)) && (t === e || t !== t && e !== e)
            }

            function l(t, e, n, r, i) {
                var o, a = r.inputs;
                if (1 === a.length) {
                    var s = c, a = a[0];
                    return t.$watch(function (t) {
                        var e = a(t);
                        return c(e, s) || (o = r(t, void 0, void 0, [e]), s = e && He(e)), o
                    }, e, n, i)
                }
                for (var u = [], l = [], f = 0, h = a.length; f < h; f++)u[f] = c, l[f] = null;
                return t.$watch(function (t) {
                    for (var e = !1, n = 0, i = a.length; n < i; n++) {
                        var s = a[n](t);
                        (e || (e = !c(s, u[n]))) && (l[n] = s, u[n] = s && He(s))
                    }
                    return e && (o = r(t, void 0, void 0, l)), o
                }, e, n, i)
            }

            function f(t, e, n, r) {
                var i, o;
                return i = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, r) {
                    o = t, S(e) && e.apply(this, arguments), m(t) && r.$$postDigest(function () {
                        m(o) && i()
                    })
                }, n)
            }

            function p(t, e, n, i) {
                function o(t) {
                    var e = !0;
                    return r(t, function (t) {
                        m(t) || (e = !1)
                    }), e
                }

                var a, s;
                return a = t.$watch(function (t) {
                    return i(t)
                }, function (t, n, r) {
                    s = t, S(e) && e.call(this, t, n, r), o(t) && r.$$postDigest(function () {
                        o(s) && a()
                    })
                }, n)
            }

            function d(t, e, n, r) {
                var i = t.$watch(function (t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function $(t, e) {
                if (!e)return t;
                var n = t.$$watchDelegate, r = !1, n = n !== p && n !== f ? function (n, i, o, a) {
                    return o = r && a ? a[0] : t(n, i, o, a), e(o, n, i)
                } : function (n, r, i, o) {
                    return i = t(n, r, i, o), n = e(i, n, r), m(i) ? n : i
                };
                return t.$$watchDelegate && t.$$watchDelegate !== l ? n.$$watchDelegate = t.$$watchDelegate : e.$stateful || (n.$$watchDelegate = l, r = !t.inputs, n.inputs = t.inputs ? t.inputs : [t]), n
            }

            var v = dr().noUnsafeEval, g = {
                csp: v,
                expensiveChecks: !1,
                literals: j(o),
                isIdentifierStart: S(t) && t,
                isIdentifierContinue: S(e) && e
            }, y = {
                csp: v,
                expensiveChecks: !0,
                literals: j(o),
                isIdentifierStart: S(t) && t,
                isIdentifierContinue: S(e) && e
            }, b = !1;
            return s.$$runningExpensiveChecks = function () {
                return b
            }, s
        }]
    }

    function We() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return Ze(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function Ge() {
        this.$get = ["$browser", "$exceptionHandler", function (t, e) {
            return Ze(function (e) {
                t.defer(e)
            }, e)
        }]
    }

    function Ze(t, n) {
        function i() {
            this.$$state = {status: 0}
        }

        function o(t, e) {
            return function (n) {
                e.call(t, n)
            }
        }

        function a(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
                var t, r, i;
                i = e.pending, e.processScheduled = !1,
                    e.pending = void 0;
                for (var o = 0, a = i.length; o < a; ++o) {
                    r = i[o][0], t = i[o][e.status];
                    try {
                        S(t) ? r.resolve(t(e.value)) : 1 === e.status ? r.resolve(e.value) : r.reject(e.value)
                    } catch (s) {
                        r.reject(s), n(s)
                    }
                }
            }))
        }

        function s() {
            this.promise = new i
        }

        var c = e("$q", TypeError), l = function () {
            var t = new s;
            return t.resolve = o(t, t.resolve), t.reject = o(t, t.reject), t.notify = o(t, t.notify), t
        };
        u(i.prototype, {
            then: function (t, e, n) {
                if (v(t) && v(e) && v(n))return this;
                var r = new s;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), 0 < this.$$state.status && a(this.$$state), r.promise
            }, "catch": function (t) {
                return this.then(null, t)
            }, "finally": function (t, e) {
                return this.then(function (e) {
                    return h(e, !0, t)
                }, function (e) {
                    return h(e, !1, t)
                }, e)
            }
        }), u(s.prototype, {
            resolve: function (t) {
                this.promise.$$state.status || (t === this.promise ? this.$$reject(c("qcycle", t)) : this.$$resolve(t))
            }, $$resolve: function (t) {
                function e(t) {
                    u || (u = !0, s.$$resolve(t))
                }

                function r(t) {
                    u || (u = !0, s.$$reject(t))
                }

                var i, s = this, u = !1;
                try {
                    (g(t) || S(t)) && (i = t && t.then), S(i) ? (this.promise.$$state.status = -1, i.call(t, e, r, o(this, this.notify))) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, a(this.promise.$$state))
                } catch (c) {
                    r(c), n(c)
                }
            }, reject: function (t) {
                this.promise.$$state.status || this.$$reject(t)
            }, $$reject: function (t) {
                this.promise.$$state.value = t, this.promise.$$state.status = 2, a(this.promise.$$state)
            }, notify: function (e) {
                var r = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && r && r.length && t(function () {
                    for (var t, i, o = 0, a = r.length; o < a; o++) {
                        i = r[o][0], t = r[o][3];
                        try {
                            i.notify(S(t) ? t(e) : e)
                        } catch (s) {
                            n(s)
                        }
                    }
                })
            }
        });
        var f = function (t, e) {
            var n = new s;
            return e ? n.resolve(t) : n.reject(t), n.promise
        }, h = function (t, e, n) {
            var r = null;
            try {
                S(n) && (r = n())
            } catch (i) {
                return f(i, !1)
            }
            return r && S(r.then) ? r.then(function () {
                return f(t, e)
            }, function (t) {
                return f(t, !1)
            }) : f(t, e)
        }, p = function (t, e, n, r) {
            var i = new s;
            return i.resolve(t), i.promise.then(e, n, r)
        }, d = function (t) {
            if (!S(t))throw c("norslvr", t);
            var e = new s;
            return t(function (t) {
                e.resolve(t)
            }, function (t) {
                e.reject(t)
            }), e.promise
        };
        return d.prototype = i.prototype, d.defer = l, d.reject = function (t) {
            var e = new s;
            return e.reject(t), e.promise
        }, d.when = p, d.resolve = p, d.all = function (t) {
            var e = new s, n = 0, i = lr(t) ? [] : {};
            return r(t, function (t, r) {
                n++, p(t).then(function (t) {
                    i.hasOwnProperty(r) || (i[r] = t, --n || e.resolve(i))
                }, function (t) {
                    i.hasOwnProperty(r) || e.reject(t)
                })
            }), 0 === n && e.resolve(i), e.promise
        }, d.race = function (t) {
            var e = l();
            return r(t, function (t) {
                p(t).then(e.resolve, e.reject)
            }), e.promise
        }, d
    }

    function Je() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (t) {
                var e = n(t);
                return function () {
                    r(e)
                }
            } : function (t) {
                var n = e(t, 16.66, !1);
                return function () {
                    e.cancel(n)
                }
            };
            return o.supported = i, o
        }]
    }

    function Ke() {
        function t(t) {
            function e() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++ur, this.$$ChildScope = null
            }

            return e.prototype = t, e
        }

        var i = 10, o = e("$rootScope"), a = null, s = null;
        this.digestTtl = function (t) {
            return arguments.length && (i = t), i
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (e, u, c) {
            function l(t) {
                t.currentScope.$$destroyed = !0
            }

            function f(t) {
                9 === Gn && (t.$$childHead && f(t.$$childHead), t.$$nextSibling && f(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
            }

            function p() {
                this.$id = ++ur, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function d(t) {
                if (x.$$phase)throw o("inprog", x.$$phase);
                x.$$phase = t
            }

            function $(t, e) {
                do t.$$watchersCount += e; while (t = t.$parent)
            }

            function m(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function y() {
            }

            function b() {
                for (; k.length;)try {
                    k.shift()()
                } catch (t) {
                    e(t)
                }
                s = null
            }

            function w() {
                null === s && (s = c.defer(function () {
                    x.$apply(b)
                }))
            }

            p.prototype = {
                constructor: p, $new: function (e, n) {
                    var r;
                    return n = n || this, e ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n !== this) && r.$on("$destroy", l), r
                }, $watch: function (t, e, n, r) {
                    var i = u(t);
                    if (i.$$watchDelegate)return i.$$watchDelegate(this, e, n, i, t);
                    var o = this, s = o.$$watchers, c = {fn: e, last: y, get: i, exp: r || t, eq: !!n};
                    return a = null, S(e) || (c.fn = h), s || (s = o.$$watchers = []), s.unshift(c), $(this, 1), function () {
                        0 <= N(s, c) && $(o, -1), a = null
                    }
                }, $watchGroup: function (t, e) {
                    function n() {
                        u = !1, c ? (c = !1, e(o, o, s)) : e(o, i, s)
                    }

                    var i = Array(t.length), o = Array(t.length), a = [], s = this, u = !1, c = !0;
                    if (!t.length) {
                        var l = !0;
                        return s.$evalAsync(function () {
                            l && e(o, o, s)
                        }), function () {
                            l = !1
                        }
                    }
                    return 1 === t.length ? this.$watch(t[0], function (t, n, r) {
                        o[0] = t, i[0] = n, e(o, t === n ? o : i, r)
                    }) : (r(t, function (t, e) {
                        var r = s.$watch(t, function (t, r) {
                            o[e] = t, i[e] = r, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(r)
                    }), function () {
                        for (; a.length;)a.shift()()
                    })
                }, $watchCollection: function (t, e) {
                    function r(t) {
                        i = t;
                        var e, r, a, s;
                        if (!v(i)) {
                            if (g(i))if (n(i))for (o !== h && (o = h, $ = o.length = 0, l++), t = i.length, $ !== t && (l++, o.length = $ = t), e = 0; e < t; e++)s = o[e], a = i[e], r = s !== s && a !== a, r || s === a || (l++, o[e] = a); else {
                                o !== p && (o = p = {}, $ = 0, l++), t = 0;
                                for (e in i)Xn.call(i, e) && (t++, a = i[e], s = o[e], e in o ? (r = s !== s && a !== a, r || s === a || (l++, o[e] = a)) : ($++, o[e] = a, l++));
                                if ($ > t)for (e in l++, o)Xn.call(i, e) || ($--, delete o[e])
                            } else o !== i && (o = i, l++);
                            return l
                        }
                    }

                    r.$stateful = !0;
                    var i, o, a, s = this, c = 1 < e.length, l = 0, f = u(t, r), h = [], p = {}, d = !0, $ = 0;
                    return this.$watch(f, function () {
                        if (d ? (d = !1, e(i, i, s)) : e(i, a, s), c)if (g(i))if (n(i)) {
                            a = Array(i.length);
                            for (var t = 0; t < i.length; t++)a[t] = i[t]
                        } else for (t in a = {}, i)Xn.call(i, t) && (a[t] = i[t]); else a = i
                    })
                }, $digest: function () {
                    var t, n, r, u, l, f, h, p, $, v, m, g = i, w = [];
                    d("$digest"), c.$$checkUrlChange(), this === x && null !== s && (c.defer.cancel(s), b()), a = null;
                    do {
                        for (p = !1, $ = this, f = 0; f < C.length; f++) {
                            try {
                                m = C[f], m.scope.$eval(m.expression, m.locals)
                            } catch (k) {
                                e(k)
                            }
                            a = null
                        }
                        C.length = 0;
                        t:do {
                            if (f = $.$$watchers)for (h = f.length; h--;)try {
                                if (t = f[h])if (l = t.get, (n = l($)) === (r = t.last) || (t.eq ? I(n, r) : cr(n) && cr(r))) {
                                    if (t === a) {
                                        p = !1;
                                        break t
                                    }
                                } else p = !0, a = t, t.last = t.eq ? j(n, null) : n, u = t.fn, u(n, r === y ? n : r, $), 5 > g && (v = 4 - g, w[v] || (w[v] = []), w[v].push({
                                    msg: S(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                    newVal: n,
                                    oldVal: r
                                }))
                            } catch (O) {
                                e(O)
                            }
                            if (!(f = $.$$watchersCount && $.$$childHead || $ !== this && $.$$nextSibling))for (; $ !== this && !(f = $.$$nextSibling);)$ = $.$parent
                        } while ($ = f);
                        if ((p || C.length) && !g--)throw x.$$phase = null, o("infdig", i, w)
                    } while (p || C.length);
                    for (x.$$phase = null; A < E.length;)try {
                        E[A++]()
                    } catch (M) {
                        e(M)
                    }
                    E.length = A = 0
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === x && c.$$applicationDestroyed(), $(this, -this.$$watchersCount);
                        for (var e in this.$$listenerCount)m(this, this.$$listenerCount[e], e);
                        t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = h, this.$on = this.$watch = this.$watchGroup = function () {
                            return h
                        }, this.$$listeners = {}, this.$$nextSibling = null, f(this)
                    }
                }, $eval: function (t, e) {
                    return u(t)(this, e)
                }, $evalAsync: function (t, e) {
                    x.$$phase || C.length || c.defer(function () {
                        C.length && x.$digest()
                    }), C.push({scope: this, expression: u(t), locals: e})
                }, $$postDigest: function (t) {
                    E.push(t)
                }, $apply: function (t) {
                    try {
                        d("$apply");
                        try {
                            return this.$eval(t)
                        } finally {
                            x.$$phase = null
                        }
                    } catch (n) {
                        e(n)
                    } finally {
                        try {
                            x.$digest()
                        } catch (r) {
                            throw e(r), r
                        }
                    }
                }, $applyAsync: function (t) {
                    function e() {
                        n.$eval(t)
                    }

                    var n = this;
                    t && k.push(e), t = u(t), w()
                }, $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = n.indexOf(e);
                        -1 !== r && (n[r] = null, m(i, 1, t))
                    }
                }, $emit: function (t, n) {
                    var r, i, o, a = [], s = this, u = !1, c = {
                        name: t, targetScope: s, stopPropagation: function () {
                            u = !0
                        }, preventDefault: function () {
                            c.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = D([c], arguments, 1);
                    do {
                        for (r = s.$$listeners[t] || a, c.currentScope = s, i = 0, o = r.length; i < o; i++)if (r[i])try {
                            r[i].apply(null, l)
                        } catch (f) {
                            e(f)
                        } else r.splice(i, 1), i--, o--;
                        if (u)return c.currentScope = null, c;
                        s = s.$parent
                    } while (s);
                    return c.currentScope = null, c
                }, $broadcast: function (t, n) {
                    var r = this, i = this, o = {
                        name: t, targetScope: this, preventDefault: function () {
                            o.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[t])return o;
                    for (var a, s, u = D([o], arguments, 1); r = i;) {
                        for (o.currentScope = r, i = r.$$listeners[t] || [], a = 0, s = i.length; a < s; a++)if (i[a])try {
                            i[a].apply(null, u)
                        } catch (c) {
                            e(c)
                        } else i.splice(a, 1), a--, s--;
                        if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== this && r.$$nextSibling))for (; r !== this && !(i = r.$$nextSibling);)r = r.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var x = new p, C = x.$$asyncQueue = [], E = x.$$postDigestQueue = [], k = x.$$applyAsyncQueue = [], A = 0;
            return x
        }]
    }

    function Ye() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return m(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return m(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, r) {
                var i, o = r ? e : t;
                return i = sn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Xe(t) {
        if ("self" === t)return t;
        if (b(t)) {
            if (-1 < t.indexOf("***"))throw qi("iwcard", t);
            return t = pr(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (C(t))return new RegExp("^" + t.source + "$");
        throw qi("imatcher")
    }

    function Qe(t) {
        var e = [];
        return m(t) && r(t, function (t) {
            e.push(Xe(t))
        }), e
    }

    function tn() {
        this.SCE_CONTEXTS = Li;
        var t = ["self"], e = [];
        this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = Qe(e)), t
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = Qe(t)), e
        }, this.$get = ["$injector", function (n) {
            function r(t, e) {
                return "self" === t ? un(e) : !!t.exec(e.href)
            }

            function i(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            var o = function (t) {
                throw qi("unsafe")
            };
            n.has("$sanitize") && (o = n.get("$sanitize"));
            var a = i(), s = {};
            return s[Li.HTML] = i(a), s[Li.CSS] = i(a), s[Li.URL] = i(a), s[Li.JS] = i(a), s[Li.RESOURCE_URL] = i(s[Li.URL]), {
                trustAs: function (t, e) {
                    var n = s.hasOwnProperty(t) ? s[t] : null;
                    if (!n)throw qi("icontext", t, e);
                    if (null === e || v(e) || "" === e)return e;
                    if ("string" != typeof e)throw qi("itype", t);
                    return new n(e)
                }, getTrusted: function (n, i) {
                    if (null === i || v(i) || "" === i)return i;
                    var a = s.hasOwnProperty(n) ? s[n] : null;
                    if (a && i instanceof a)return i.$$unwrapTrustedValue();
                    if (n === Li.RESOURCE_URL) {
                        var u, c, a = sn(i.toString()), l = !1;
                        for (u = 0, c = t.length; u < c; u++)if (r(t[u], a)) {
                            l = !0;
                            break
                        }
                        if (l)for (u = 0, c = e.length; u < c; u++)if (r(e[u], a)) {
                            l = !1;
                            break
                        }
                        if (l)return i;
                        throw qi("insecurl", i.toString())
                    }
                    if (n === Li.HTML)return o(i);
                    throw qi("unsafe")
                }, valueOf: function (t) {
                    return t instanceof a ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function en() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function (e, n) {
            if (t && 8 > Gn)throw qi("iequirks");
            var i = ut(Li);
            i.isEnabled = function () {
                return t
            }, i.trustAs = n.trustAs, i.getTrusted = n.getTrusted, i.valueOf = n.valueOf, t || (i.trustAs = i.getTrusted = function (t, e) {
                return e
            }, i.valueOf = p), i.parseAs = function (t, n) {
                var r = e(n);
                return r.literal && r.constant ? r : e(n, function (e) {
                    return i.getTrusted(t, e)
                })
            };
            var o = i.parseAs, a = i.getTrusted, s = i.trustAs;
            return r(Li, function (t, e) {
                var n = Qn(e);
                i[lt("parse_as_" + n)] = function (e) {
                    return o(t, e)
                }, i[lt("get_trusted_" + n)] = function (e) {
                    return a(t, e)
                }, i[lt("trust_as_" + n)] = function (e) {
                    return s(t, e)
                }
            }), i
        }]
    }

    function nn() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, r = {}, i = !(t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id)) && t.history && t.history.pushState, o = l((/android (\d+)/.exec(Qn((t.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((t.navigator || {}).userAgent), s = e[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/, c = s.body && s.body.style, f = !1, h = !1;
            if (c) {
                for (var p in c)if (f = u.exec(p)) {
                    n = f[0], n = n[0].toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity" in c && "webkit"), f = !!("transition" in c || n + "Transition" in c), h = !!("animation" in c || n + "Animation" in c), !o || f && h || (f = b(c.webkitTransition), h = b(c.webkitAnimation))
            }
            return {
                history: !(!i || 4 > o || a), hasEvent: function (t) {
                    if ("input" === t && 11 >= Gn)return !1;
                    if (v(r[t])) {
                        var e = s.createElement("div");
                        r[t] = "on" + t in e
                    }
                    return r[t]
                }, csp: dr(), vendorPrefix: n, transitions: f, animations: h, android: o
            }
        }]
    }

    function rn() {
        var t;
        this.httpOptions = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (e, n, r, i) {
            function o(a, s) {
                o.totalPendingRequests++, b(a) && !v(e.get(a)) || (a = i.getTrustedResourceUrl(a));
                var c = n.defaults && n.defaults.transformResponse;
                return lr(c) ? c = c.filter(function (t) {
                    return t !== ae
                }) : c === ae && (c = null), n.get(a, u({cache: e, transformResponse: c}, t))["finally"](function () {
                    o.totalPendingRequests--
                }).then(function (t) {
                    return e.put(a, t.data), t.data
                }, function (t) {
                    if (!s)throw Bi("tpload", a, t.status, t.statusText);
                    return r.reject(t)
                })
            }

            return o.totalPendingRequests = 0, o
        }]
    }

    function on() {
        this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
            return {
                findBindings: function (t, e, n) {
                    t = t.getElementsByClassName("ng-binding");
                    var i = [];
                    return r(t, function (t) {
                        var o = sr.element(t).data("$binding");
                        o && r(o, function (r) {
                            n ? new RegExp("(^|\\s)" + pr(e) + "(\\s|\\||$)").test(r) && i.push(t) : -1 !== r.indexOf(e) && i.push(t)
                        })
                    }), i
                }, findModels: function (t, e, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = t.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + e + '"]');
                        if (o.length)return o
                    }
                }, getLocation: function () {
                    return n.url()
                }, setLocation: function (e) {
                    e !== n.url() && (n.url(e), t.$digest())
                }, whenStable: function (t) {
                    e.notifyWhenNoOutstandingRequests(t)
                }
            }
        }]
    }

    function an() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, r, i) {
            function o(o, s, u) {
                S(o) || (u = s, s = o, o = h);
                var c, l = er.call(arguments, 3), f = m(u) && !u, p = (f ? r : n).defer(), d = p.promise;
                return c = e.defer(function () {
                    try {
                        p.resolve(o.apply(null, l))
                    } catch (e) {
                        p.reject(e), i(e)
                    } finally {
                        delete a[d.$$timeoutId]
                    }
                    f || t.$apply()
                }, s), d.$$timeoutId = c, a[c] = p, d
            }

            var a = {};
            return o.cancel = function (t) {
                return !!(t && t.$$timeoutId in a) && (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))
            }, o
        }]
    }

    function sn(t) {
        return Gn && (Hi.setAttribute("href", t), t = Hi.href), Hi.setAttribute("href", t), {
            href: Hi.href,
            protocol: Hi.protocol ? Hi.protocol.replace(/:$/, "") : "",
            host: Hi.host,
            search: Hi.search ? Hi.search.replace(/^\?/, "") : "",
            hash: Hi.hash ? Hi.hash.replace(/^#/, "") : "",
            hostname: Hi.hostname,
            port: Hi.port,
            pathname: "/" === Hi.pathname.charAt(0) ? Hi.pathname : "/" + Hi.pathname
        }
    }

    function un(t) {
        return t = b(t) ? sn(t) : t, t.protocol === zi.protocol && t.host === zi.host
    }

    function cn() {
        this.$get = d(t)
    }

    function ln(t) {
        function e(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        var n = t[0] || {}, r = {}, i = "";
        return function () {
            var t, o, a, s, u;
            if (t = n.cookie || "", t !== i)for (i = t, t = i.split("; "), r = {}, a = 0; a < t.length; a++)o = t[a], s = o.indexOf("="), 0 < s && (u = e(o.substring(0, s)), v(r[u]) && (r[u] = e(o.substring(s + 1))));
            return r
        }
    }

    function fn() {
        this.$get = ln
    }

    function hn(t) {
        function e(n, i) {
            if (g(n)) {
                var o = {};
                return r(n, function (t, n) {
                    o[n] = e(n, t)
                }), o
            }
            return t.factory(n + "Filter", i)
        }

        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + "Filter")
            }
        }], e("currency", mn), e("date", On), e("filter", pn), e("json", Mn), e("limitTo", Vn), e("lowercase", Xi), e("number", gn), e("orderBy", Nn), e("uppercase", Qi)
    }

    function pn() {
        return function (t, r, i, o) {
            if (!n(t)) {
                if (null == t)return t;
                throw e("filter")("notarray", t)
            }
            o = o || "$";
            var a;
            switch (vn(r)) {
                case"function":
                    break;
                case"boolean":
                case"null":
                case"number":
                case"string":
                    a = !0;
                case"object":
                    r = dn(r, i, o, a);
                    break;
                default:
                    return t
            }
            return Array.prototype.filter.call(t, r)
        }
    }

    function dn(t, e, n, r) {
        var i = g(t) && n in t;
        return !0 === e ? e = I : S(e) || (e = function (t, e) {
            return !v(t) && (null === t || null === e ? t === e : !(g(e) || g(t) && !$(t)) && (t = Qn("" + t), e = Qn("" + e), -1 !== t.indexOf(e)))
        }), function (o) {
            return i && !g(o) ? $n(o, t[n], e, n, !1) : $n(o, t, e, n, r)
        }
    }

    function $n(t, e, n, r, i, o) {
        var a = vn(t), s = vn(e);
        if ("string" === s && "!" === e.charAt(0))return !$n(t, e.substring(1), n, r, i);
        if (lr(t))return t.some(function (t) {
            return $n(t, e, n, r, i)
        });
        switch (a) {
            case"object":
                var u;
                if (i) {
                    for (u in t)if ("$" !== u.charAt(0) && $n(t[u], e, n, r, !0))return !0;
                    return !o && $n(t, e, n, r, !1)
                }
                if ("object" === s) {
                    for (u in e)if (o = e[u], !S(o) && !v(o) && (a = u === r, !$n(a ? t : t[u], o, n, r, a, a)))return !1;
                    return !0
                }
                return n(t, e);
            case"function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function vn(t) {
        return null === t ? "null" : typeof t
    }

    function mn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n, r) {
            return v(n) && (n = e.CURRENCY_SYM), v(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : wn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function gn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return null == t ? t : wn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function yn(t) {
        var e, n, r, i, o, a = 0;
        for (-1 < (n = t.indexOf(Gi)) && (t = t.replace(Gi, "")), 0 < (r = t.search(/e/i)) ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), r = 0; t.charAt(r) === Zi; r++);
        if (r === (o = t.length))e = [0], n = 1; else {
            for (o--; t.charAt(o) === Zi;)o--;
            for (n -= r, e = [], i = 0; r <= o; r++, i++)e[i] = +t.charAt(r)
        }
        return n > Wi && (e = e.splice(0, Wi - 1), a = n - 1, n = 1), {d: e, e: a, i: n}
    }

    function bn(t, e, n, r) {
        var i = t.d, o = i.length - t.i;
        if (e = v(e) ? Math.min(Math.max(n, o), r) : +e, n = e + t.i, r = i[n], 0 < n) {
            i.splice(Math.max(t.i, n));
            for (var a = n; a < i.length; a++)i[a] = 0
        } else for (o = Math.max(0, o), t.i = 1, i.length = Math.max(1, n = e + 1), i[0] = 0, a = 1; a < n; a++)i[a] = 0;
        if (5 <= r)if (0 > n - 1) {
            for (r = 0; r > n; r--)i.unshift(0), t.i++;
            i.unshift(1), t.i++
        } else i[n - 1]++;
        for (; o < Math.max(0, e); o++)i.push(0);
        (e = i.reduceRight(function (t, e, n, r) {
            return e += t, r[n] = e % 10, Math.floor(e / 10)
        }, 0)) && (i.unshift(e), t.i++)
    }

    function wn(t, e, n, r, i) {
        if (!b(t) && !w(t) || isNaN(t))return "";
        var o = !isFinite(t), a = !1, s = Math.abs(t) + "", u = "";
        if (o)u = "∞"; else {
            for (a = yn(s), bn(a, i, e.minFrac, e.maxFrac), u = a.d, s = a.i, i = a.e, o = [], a = u.reduce(function (t, e) {
                return t && !e
            }, !0); 0 > s;)u.unshift(0), s++;
            for (0 < s ? o = u.splice(s, u.length) : (o = u, u = [0]), s = [], u.length >= e.lgSize && s.unshift(u.splice(-e.lgSize, u.length).join("")); u.length > e.gSize;)s.unshift(u.splice(-e.gSize, u.length).join(""));
            u.length && s.unshift(u.join("")), u = s.join(n), o.length && (u += r + o.join("")), i && (u += "e+" + i)
        }
        return 0 > t && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf
    }

    function xn(t, e, n, r) {
        var i = "";
        for ((0 > t || r && 0 >= t) && (r ? t = -t + 1 : (t = -t, i = "-")), t = "" + t; t.length < e;)t = Zi + t;
        return n && (t = t.substr(t.length - e)), i + t
    }

    function Sn(t, e, n, r, i) {
        return n = n || 0, function (o) {
            return o = o["get" + t](), (0 < n || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), xn(o, e, r, i)
        }
    }

    function Cn(t, e, n) {
        return function (r, i) {
            var o = r["get" + t](), a = tr((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t);
            return i[a][o]
        }
    }

    function En(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function kn(t) {
        return function (e) {
            var n = En(e.getFullYear());
            return e = +new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay())) - +n, e = 1 + Math.round(e / 6048e5), xn(e, t)
        }
    }

    function An(t, e) {
        return 0 >= t.getFullYear() ? e.ERAS[0] : e.ERAS[1]
    }

    function On(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var r = 0, i = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, a = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (r = l(e[9] + e[10]), i = l(e[9] + e[11])), o.call(t, l(e[1]), l(e[2]) - 1, l(e[3])), r = l(e[4] || 0) - r, i = l(e[5] || 0) - i, o = l(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), a.call(t, r, i, o, e)
            }
            return t
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, i, o) {
            var a, s, u = "", c = [];
            if (i = i || "mediumDate", i = t.DATETIME_FORMATS[i] || i, b(n) && (n = Yi.test(n) ? l(n) : e(n)), w(n) && (n = new Date(n)), !x(n) || !isFinite(n.getTime()))return n;
            for (; i;)(s = Ki.exec(i)) ? (c = D(c, s, 1), i = c.pop()) : (c.push(i), i = null);
            var f = n.getTimezoneOffset();
            return o && (f = _(o, f), n = q(n, o, !0)), r(c, function (e) {
                a = Ji[e], u += a ? a(n, t.DATETIME_FORMATS, f) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Mn() {
        return function (t, e) {
            return v(e) && (e = 2), U(t, e)
        }
    }

    function Vn() {
        return function (t, e, r) {
            return e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : l(e), cr(e) ? t : (w(t) && (t = t.toString()), n(t) ? (r = !r || isNaN(r) ? 0 : l(r), r = 0 > r ? Math.max(0, t.length + r) : r, 0 <= e ? Tn(t, r, r + e) : 0 === r ? Tn(t, e, t.length) : Tn(t, Math.max(0, r + e), r)) : t)
        }
    }

    function Tn(t, e, n) {
        return b(t) ? t.slice(e, n) : er.call(t, e, n)
    }

    function Nn(t) {
        function r(e) {
            return e.map(function (e) {
                var n = 1, r = p;
                if (S(e))r = e; else if (b(e) && ("+" !== e.charAt(0) && "-" !== e.charAt(0) || (n = "-" === e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (r = t(e), r.constant)))var i = r(), r = function (t) {
                    return t[i]
                };
                return {get: r, descending: n}
            })
        }

        function i(t) {
            switch (typeof t) {
                case"number":
                case"boolean":
                case"string":
                    return !0;
                default:
                    return !1
            }
        }

        function o(t, e) {
            var n = 0, r = t.type, i = e.type;
            if (r === i) {
                var i = t.value, o = e.value;
                "string" === r ? (i = i.toLowerCase(), o = o.toLowerCase()) : "object" === r && (g(i) && (i = t.index), g(o) && (o = e.index)), i !== o && (n = i < o ? -1 : 1)
            } else n = r < i ? -1 : 1;
            return n
        }

        return function (t, a, s, u) {
            if (null == t)return t;
            if (!n(t))throw e("orderBy")("notarray", t);
            lr(a) || (a = [a]), 0 === a.length && (a = ["+"]);
            var c = r(a), l = s ? -1 : 1, f = S(u) ? u : o;
            return t = Array.prototype.map.call(t, function (t, e) {
                return {
                    value: t,
                    tieBreaker: {value: e, type: "number", index: e},
                    predicateValues: c.map(function (n) {
                        var r = n.get(t);
                        return n = typeof r, null === r ? (n = "string", r = "null") : "object" === n && (S(r.valueOf) && (r = r.valueOf(), i(r)) || $(r) && (r = r.toString(), i(r))), {
                            value: r,
                            type: n,
                            index: e
                        }
                    })
                }
            }), t.sort(function (t, e) {
                for (var n = 0, r = c.length; n < r; n++) {
                    var i = f(t.predicateValues[n], e.predicateValues[n]);
                    if (i)return i * c[n].descending * l
                }
                return f(t.tieBreaker, e.tieBreaker) * l
            }), t = t.map(function (t) {
                return t.value
            })
        }
    }

    function jn(t) {
        return S(t) && (t = {link: t}), t.restrict = t.restrict || "AC", d(t)
    }

    function In(t, e, n, i, o) {
        var a = this, s = [];
        a.$error = {}, a.$$success = {}, a.$pending = void 0, a.$name = o(e.name || e.ngForm || "")(n), a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, a.$$parentForm = no, a.$rollbackViewValue = function () {
            r(s, function (t) {
                t.$rollbackViewValue()
            })
        }, a.$commitViewValue = function () {
            r(s, function (t) {
                t.$commitViewValue()
            })
        }, a.$addControl = function (t) {
            rt(t.$name, "input"), s.push(t), t.$name && (a[t.$name] = t), t.$$parentForm = a
        }, a.$$renameControl = function (t, e) {
            var n = t.$name;
            a[n] === t && delete a[n], a[e] = t, t.$name = e
        }, a.$removeControl = function (t) {
            t.$name && a[t.$name] === t && delete a[t.$name], r(a.$pending, function (e, n) {
                a.$setValidity(n, null, t)
            }), r(a.$error, function (e, n) {
                a.$setValidity(n, null, t)
            }), r(a.$$success, function (e, n) {
                a.$setValidity(n, null, t)
            }), N(s, t), t.$$parentForm = no
        }, zn({
            ctrl: this, $element: t, set: function (t, e, n) {
                var r = t[e];
                r ? -1 === r.indexOf(n) && r.push(n) : t[e] = [n]
            }, unset: function (t, e, n) {
                var r = t[e];
                r && (N(r, n), 0 === r.length && delete t[e])
            }, $animate: i
        }), a.$setDirty = function () {
            i.removeClass(t, Fo), i.addClass(t, _o), a.$dirty = !0, a.$pristine = !1, a.$$parentForm.$setDirty()
        }, a.$setPristine = function () {
            i.setClass(t, Fo, _o + " ng-submitted"), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, r(s, function (t) {
                t.$setPristine()
            })
        }, a.$setUntouched = function () {
            r(s, function (t) {
                t.$setUntouched()
            })
        }, a.$setSubmitted = function () {
            i.addClass(t, "ng-submitted"), a.$submitted = !0, a.$$parentForm.$setSubmitted()
        }
    }

    function Dn(t) {
        t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function Pn(t, e, n, r, i, o) {
        var a = Qn(e[0].type);
        if (!i.android) {
            var s = !1;
            e.on("compositionstart", function () {
                s = !0
            }), e.on("compositionend", function () {
                s = !1, c()
            })
        }
        var u, c = function (t) {
            if (u && (o.defer.cancel(u), u = null), !s) {
                var i = e.val();
                t = t && t.type, "password" === a || n.ngTrim && "false" === n.ngTrim || (i = hr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, t)
            }
        };
        if (i.hasEvent("input"))e.on("input", c); else {
            var l = function (t, e, n) {
                u || (u = o.defer(function () {
                    u = null, e && e.value === n || c(t)
                }))
            };
            e.on("keydown", function (t) {
                var e = t.keyCode;
                91 === e || 15 < e && 19 > e || 37 <= e && 40 >= e || l(t, this, this.value)
            }), i.hasEvent("paste") && e.on("paste cut", l)
        }
        e.on("change", c), vo[a] && r.$$hasNativeValidators && a === n.type && e.on("keydown wheel mousedown", function (t) {
            if (!u) {
                var e = this.validity, n = e.badInput, r = e.typeMismatch;
                u = o.defer(function () {
                    u = null, e.badInput === n && e.typeMismatch === r || c(t)
                })
            }
        }), r.$render = function () {
            var t = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            e.val() !== t && e.val(t)
        }
    }

    function Rn(t, e) {
        return function (n, i) {
            var o, a;
            if (x(n))return n;
            if (b(n)) {
                if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), ao.test(n))return new Date(n);
                if (t.lastIndex = 0, o = t.exec(n))return o.shift(), a = i ? {
                    yyyy: i.getFullYear(),
                    MM: i.getMonth() + 1,
                    dd: i.getDate(),
                    HH: i.getHours(),
                    mm: i.getMinutes(),
                    ss: i.getSeconds(),
                    sss: i.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, r(o, function (t, n) {
                    n < e.length && (a[e[n]] = +t)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return NaN
        }
    }

    function Un(t, e, n, r) {
        return function (i, o, a, s, u, c, l) {
            function f(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function h(t) {
                return m(t) && !x(t) ? n(t) || void 0 : t
            }

            Fn(i, o, a, s), Pn(i, o, a, s, u, c);
            var p, d = s && s.$options && s.$options.timezone;
            if (s.$$parserName = t, s.$parsers.push(function (t) {
                    return s.$isEmpty(t) ? null : e.test(t) ? (t = n(t, p), d && (t = q(t, d)), t) : void 0
                }), s.$formatters.push(function (t) {
                    if (t && !x(t))throw Lo("datefmt", t);
                    return f(t) ? ((p = t) && d && (p = q(p, d, !0)), l("date")(t, r, d)) : (p = null, "")
                }), m(a.min) || a.ngMin) {
                var $;
                s.$validators.min = function (t) {
                    return !f(t) || v($) || n(t) >= $
                }, a.$observe("min", function (t) {
                    $ = h(t), s.$validate()
                })
            }
            if (m(a.max) || a.ngMax) {
                var g;
                s.$validators.max = function (t) {
                    return !f(t) || v(g) || n(t) <= g
                }, a.$observe("max", function (t) {
                    g = h(t), s.$validate()
                })
            }
        }
    }

    function Fn(t, e, n, r) {
        (r.$$hasNativeValidators = g(e[0].validity)) && r.$parsers.push(function (t) {
            var n = e.prop("validity") || {};
            return n.badInput || n.typeMismatch ? void 0 : t
        })
    }

    function _n(t) {
        t.$$parserName = "number", t.$parsers.push(function (e) {
            return t.$isEmpty(e) ? null : co.test(e) ? parseFloat(e) : void 0
        }), t.$formatters.push(function (e) {
            if (!t.$isEmpty(e)) {
                if (!w(e))throw Lo("numfmt", e);
                e = e.toString()
            }
            return e
        })
    }

    function qn(t) {
        return m(t) && !w(t) && (t = parseFloat(t)), cr(t) ? void 0 : t
    }

    function Ln(t) {
        var e = t.toString(), n = e.indexOf(".");
        return -1 === n ? -1 < t && 1 > t && (t = /e-(\d+)$/.exec(e)) ? Number(t[1]) : 0 : e.length - n - 1
    }

    function Bn(t, e, n, r, i) {
        if (m(r)) {
            if (t = t(r), !t.constant)throw Lo("constexpr", n, r);
            return t(e)
        }
        return i
    }

    function Hn(t, e) {
        return t = "ngClass" + t, ["$animate", function (n) {
            function i(t, e) {
                var n = [], r = 0;
                t:for (; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++)if (i === e[o])continue t;
                    n.push(i)
                }
                return n
            }

            function o(t) {
                var e = [];
                return lr(t) ? (r(t, function (t) {
                    e = e.concat(o(t))
                }), e) : b(t) ? t.split(" ") : g(t) ? (r(t, function (t, n) {
                    t && (e = e.concat(n.split(" ")))
                }), e) : t
            }

            return {
                restrict: "AC", link: function (a, s, u) {
                    function c(t) {
                        t = l(t, 1), u.$addClass(t)
                    }

                    function l(t, e) {
                        var n = s.data("$classCounts") || at(), i = [];
                        return r(t, function (t) {
                            (0 < e || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(0 < e) && i.push(t))
                        }), s.data("$classCounts", n), i.join(" ")
                    }

                    function f(t, e) {
                        var r = i(e, t), o = i(t, e), r = l(r, 1), o = l(o, -1);
                        r && r.length && n.addClass(s, r), o && o.length && n.removeClass(s, o)
                    }

                    function h(t) {
                        if (!0 === e || (1 & a.$index) === e) {
                            var n = o(t || []);
                            if (p) {
                                if (!I(t, p)) {
                                    var r = o(p);
                                    f(r, n)
                                }
                            } else c(n)
                        }
                        p = lr(t) ? t.map(function (t) {
                            return ut(t)
                        }) : ut(t)
                    }

                    var p;
                    a.$watch(u[t], h, !0), u.$observe("class", function (e) {
                        h(a.$eval(u[t]))
                    }), "ngClass" !== t && a.$watch("$index", function (n, r) {
                        var i = 1 & n;
                        if (i !== (1 & r)) {
                            var s = o(a.$eval(u[t]));
                            i === e ? c(s) : (i = l(s, -1), u.$removeClass(i))
                        }
                    })
                }
            }
        }]
    }

    function zn(t) {
        function e(t, e) {
            e && !o[t] ? (u.addClass(i, t), o[t] = !0) : !e && o[t] && (u.removeClass(i, t), o[t] = !1)
        }

        function n(t, n) {
            t = t ? "-" + Q(t, "-") : "", e(Ro + t, !0 === n), e(Uo + t, !1 === n)
        }

        var r = t.ctrl, i = t.$element, o = {}, a = t.set, s = t.unset, u = t.$animate;
        o[Uo] = !(o[Ro] = i.hasClass(Ro)), r.$setValidity = function (t, i, o) {
            v(i) ? (r.$pending || (r.$pending = {}), a(r.$pending, t, o)) : (r.$pending && s(r.$pending, t, o), Wn(r.$pending) && (r.$pending = void 0)), A(i) ? i ? (s(r.$error, t, o), a(r.$$success, t, o)) : (a(r.$error, t, o), s(r.$$success, t, o)) : (s(r.$error, t, o), s(r.$$success, t, o)), r.$pending ? (e(qo, !0), r.$valid = r.$invalid = void 0, n("", null)) : (e(qo, !1), r.$valid = Wn(r.$error), r.$invalid = !r.$valid, n("", r.$valid)), i = r.$pending && r.$pending[t] ? void 0 : !r.$error[t] && (!!r.$$success[t] || null), n(t, i), r.$$parentForm.$setValidity(t, i, r)
        }
    }

    function Wn(t) {
        if (t)for (var e in t)if (t.hasOwnProperty(e))return !1;
        return !0
    }

    var Gn, Zn, Jn, Kn, Yn = /^\/(.+)\/([a-z]*)$/, Xn = Object.prototype.hasOwnProperty, Qn = function (t) {
        return b(t) ? t.toLowerCase() : t
    }, tr = function (t) {
        return b(t) ? t.toUpperCase() : t
    }, er = [].slice, nr = [].splice, rr = [].push, ir = Object.prototype.toString, or = Object.getPrototypeOf, ar = e("ng"), sr = t.angular || (t.angular = {}), ur = 0;
    Gn = t.document.documentMode;
    var cr = Number.isNaN || function (t) {
            return t !== t
        };
    h.$inject = [], p.$inject = [];
    var lr = Array.isArray, fr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, hr = function (t) {
        return b(t) ? t.trim() : t
    }, pr = function (t) {
        return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, dr = function () {
        if (!m(dr.rules)) {
            var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
            if (e) {
                var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                dr.rules = {
                    noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                    noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                }
            } else {
                e = dr;
                try {
                    new Function(""), n = !1
                } catch (r) {
                    n = !0
                }
                e.rules = {noUnsafeEval: n, noInlineStyle: !1}
            }
        }
        return dr.rules
    }, $r = function () {
        if (m($r.name_))return $r.name_;
        var e, n, r, i, o = mr.length;
        for (n = 0; n < o; ++n)if (r = mr[n], e = t.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
            i = e.getAttribute(r + "jq");
            break
        }
        return $r.name_ = i
    }, vr = /:/g, mr = ["ng-", "data-ng-", "ng:", "x-ng-"], gr = function (t) {
        if (!t.currentScript)return !0;
        var e = t.currentScript.getAttribute("src"), n = t.createElement("a");
        if (n.href = e, e = n.protocol, t.location.protocol === e)return !0;
        switch (e) {
            case"http:":
            case"https:":
            case"ftp:":
            case"blob:":
            case"file:":
            case"data:":
                return !0;
            default:
                return !1
        }
    }(t.document), yr = /[A-Z]/g, br = !1, wr = 3, xr = {
        full: "1.5.9",
        major: 1,
        minor: 5,
        dot: 9,
        codeName: "timeturning-lockdown"
    };
    dt.expando = "ng339";
    var Sr = dt.cache = {}, Cr = 1;
    dt._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var Er = /([:\-_]+(.))/g, kr = /^moz([A-Z])/, Ar = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Or = e("jqLite"), Mr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Vr = /<|&#?\w+;/, Tr = /<([\w:-]+)/, Nr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, jr = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    jr.optgroup = jr.option, jr.tbody = jr.tfoot = jr.colgroup = jr.caption = jr.thead, jr.th = jr.td;
    var Ir = t.Node.prototype.contains || function (t) {
            return !!(16 & this.compareDocumentPosition(t))
        }, Dr = dt.prototype = {
        ready: function (e) {
            function n() {
                r || (r = !0, e())
            }

            var r = !1;
            "complete" === t.document.readyState ? t.setTimeout(n) : (this.on("DOMContentLoaded", n), dt(t).on("load", n))
        }, toString: function () {
            var t = [];
            return r(this, function (e) {
                t.push("" + e)
            }), "[" + t.join(", ") + "]"
        }, eq: function (t) {
            return Zn(0 <= t ? this[t] : this[this.length + t])
        }, length: 0, push: rr, sort: [].sort, splice: [].splice
    }, Pr = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function (t) {
        Pr[Qn(t)] = t
    });
    var Rr = {};
    r("input select option textarea button form details".split(" "), function (t) {
        Rr[t] = !0
    });
    var Ur = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    r({
        data: bt, removeData: gt, hasData: function (t) {
            for (var e in Sr[t.ng339])return !0;
            return !1
        }, cleanData: function (t) {
            for (var e = 0, n = t.length; e < n; e++)gt(t[e])
        }
    }, function (t, e) {
        dt[e] = t
    }), r({
        data: bt, inheritedData: kt, scope: function (t) {
            return Zn.data(t, "$scope") || kt(t.parentNode || t, ["$isolateScope", "$scope"])
        }, isolateScope: function (t) {
            return Zn.data(t, "$isolateScope") || Zn.data(t, "$isolateScopeNoTemplate")
        }, controller: Et, injector: function (t) {
            return kt(t, "$injector")
        }, removeAttr: function (t, e) {
            t.removeAttribute(e)
        }, hasClass: wt, css: function (t, e, n) {
            return e = lt(e),
                m(n) ? void(t.style[e] = n) : t.style[e]
        }, attr: function (t, e, n) {
            var r = t.nodeType;
            if (r !== wr && 2 !== r && 8 !== r)if (r = Qn(e), Pr[r]) {
                if (!m(n))return t[e] || (t.attributes.getNamedItem(e) || h).specified ? r : void 0;
                n ? (t[e] = !0, t.setAttribute(e, r)) : (t[e] = !1, t.removeAttribute(r))
            } else if (m(n))t.setAttribute(e, n); else if (t.getAttribute)return t = t.getAttribute(e, 2), null === t ? void 0 : t
        }, prop: function (t, e, n) {
            return m(n) ? void(t[e] = n) : t[e]
        }, text: function () {
            function t(t, e) {
                if (v(e)) {
                    var n = t.nodeType;
                    return 1 === n || n === wr ? t.textContent : ""
                }
                t.textContent = e
            }

            return t.$dv = "", t
        }(), val: function (t, e) {
            if (v(e)) {
                if (t.multiple && "select" === T(t)) {
                    var n = [];
                    return r(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        }, html: function (t, e) {
            return v(e) ? t.innerHTML : (vt(t, !0), void(t.innerHTML = e))
        }, empty: At
    }, function (t, e) {
        dt.prototype[e] = function (e, n) {
            var r, i, o = this.length;
            if (t !== At && v(2 === t.length && t !== wt && t !== Et ? e : n)) {
                if (g(e)) {
                    for (r = 0; r < o; r++)if (t === bt)t(this[r], e); else for (i in e)t(this[r], i, e[i]);
                    return this
                }
                for (r = t.$dv, o = v(r) ? Math.min(o, 1) : o, i = 0; i < o; i++) {
                    var a = t(this[i], e, n);
                    r = r ? r + a : a
                }
                return r
            }
            for (r = 0; r < o; r++)t(this[r], e, n);
            return this
        }
    }), r({
        removeData: gt, on: function (t, e, n, r) {
            if (m(r))throw Or("onargs");
            if (ft(t)) {
                r = yt(t, !0);
                var i = r.events, o = r.handle;
                o || (o = r.handle = Tt(t, i)), r = 0 <= e.indexOf(" ") ? e.split(" ") : [e];
                for (var a = r.length, s = function (e, r, a) {
                    var s = i[e];
                    s || (s = i[e] = [], s.specialHandlerWrapper = r, "$destroy" === e || a || t.addEventListener(e, o, !1)), s.push(n)
                }; a--;)e = r[a], Ar[e] ? (s(Ar[e], jt), s(e, void 0, !0)) : s(e)
            }
        }, off: mt, one: function (t, e, n) {
            t = Zn(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        }, replaceWith: function (t, e) {
            var n, i = t.parentNode;
            vt(t), r(new dt(e), function (e) {
                n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
            })
        }, children: function (t) {
            var e = [];
            return r(t.childNodes, function (t) {
                1 === t.nodeType && e.push(t)
            }), e
        }, contents: function (t) {
            return t.contentDocument || t.childNodes || []
        }, append: function (t, e) {
            var n = t.nodeType;
            if (1 === n || 11 === n) {
                e = new dt(e);
                for (var n = 0, r = e.length; n < r; n++)t.appendChild(e[n])
            }
        }, prepend: function (t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                r(new dt(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        }, wrap: function (t, e) {
            pt(t, Zn(e).eq(0).clone()[0])
        }, remove: Ot, detach: function (t) {
            Ot(t, !0)
        }, after: function (t, e) {
            var n = t, r = t.parentNode;
            e = new dt(e);
            for (var i = 0, o = e.length; i < o; i++) {
                var a = e[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        }, addClass: St, removeClass: xt, toggleClass: function (t, e, n) {
            e && r(e.split(" "), function (e) {
                var r = n;
                v(r) && (r = !wt(t, e)), (r ? St : xt)(t, e)
            })
        }, parent: function (t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        }, next: function (t) {
            return t.nextElementSibling
        }, find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        }, clone: $t, triggerHandler: function (t, e, n) {
            var i, o, a = e.type || e, s = yt(t);
            (s = (s = s && s.events) && s[a]) && (i = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: h, type: a, target: t
            }, e.type && (i = u(i, e)), e = ut(s), o = n ? [i].concat(n) : [i], r(e, function (e) {
                i.isImmediatePropagationStopped() || e.apply(t, o)
            }))
        }
    }, function (t, e) {
        dt.prototype[e] = function (e, n, r) {
            for (var i, o = 0, a = this.length; o < a; o++)v(i) ? (i = t(this[o], e, n, r), m(i) && (i = Zn(i))) : Ct(i, t(this[o], e, n, r));
            return m(i) ? i : this
        }, dt.prototype.bind = dt.prototype.on, dt.prototype.unbind = dt.prototype.off
    }), Pt.prototype = {
        put: function (t, e) {
            this[Dt(t, this.nextUid)] = e
        }, get: function (t) {
            return this[Dt(t, this.nextUid)]
        }, remove: function (t) {
            var e = this[t = Dt(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Fr = [function () {
        this.$get = [function () {
            return Pt
        }]
    }], _r = /^([^\(]+?)=>/, qr = /^[^\(]*\(\s*([^\)]*)\)/m, Lr = /,/, Br = /^\s*(_?)(\S+?)\1\s*$/, Hr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, zr = e("$injector");
    Ft.$$annotate = function (t, e, n) {
        var i;
        if ("function" == typeof t) {
            if (!(i = t.$inject)) {
                if (i = [], t.length) {
                    if (e)throw b(n) && n || (n = t.name || Ut(t)), zr("strictdi", n);
                    e = Rt(t), r(e[1].split(Lr), function (t) {
                        t.replace(Br, function (t, e, n) {
                            i.push(n)
                        })
                    })
                }
                t.$inject = i
            }
        } else lr(t) ? (e = t.length - 1, nt(t[e], "fn"), i = t.slice(0, e)) : nt(t, "fn", !0);
        return i
    };
    var Wr = e("$animate"), Gr = function () {
        this.$get = h
    }, Zr = function () {
        var t = new Pt, e = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (n, i) {
            function o(t, e, n) {
                var i = !1;
                return e && (e = b(e) ? e.split(" ") : lr(e) ? e : [], r(e, function (e) {
                    e && (i = !0, t[e] = n)
                })), i
            }

            function a() {
                r(e, function (e) {
                    var n = t.get(e);
                    if (n) {
                        var i = Lt(e.attr("class")), o = "", a = "";
                        r(n, function (t, e) {
                            t !== !!i[e] && (t ? o += (o.length ? " " : "") + e : a += (a.length ? " " : "") + e)
                        }), r(e, function (t) {
                            o && St(t, o), a && xt(t, a)
                        }), t.remove(e)
                    }
                }), e.length = 0
            }

            return {
                enabled: h, on: h, off: h, pin: h, push: function (r, s, u, c) {
                    return c && c(), u = u || {}, u.from && r.css(u.from), u.to && r.css(u.to), (u.addClass || u.removeClass) && (s = u.addClass, c = u.removeClass, u = t.get(r) || {}, s = o(u, s, !0), c = o(u, c, !1), (s || c) && (t.put(r, u), e.push(r), 1 === e.length && i.$$postDigest(a))), r = new n, r.complete(), r
                }
            }
        }]
    }, Jr = ["$provide", function (t) {
        var e = this;
        this.$$registeredAnimations = Object.create(null), this.register = function (n, r) {
            if (n && "." !== n.charAt(0))throw Wr("notcsel", n);
            var i = n + "-animation";
            e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r)
        }, this.classNameFilter = function (t) {
            if (1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Wr("nongcls", "ng-animate");
            return this.$$classNameFilter
        }, this.$get = ["$$animateQueue", function (t) {
            function e(t, e, n) {
                if (n) {
                    var r;
                    t:{
                        for (r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (1 === i.nodeType) {
                                r = i;
                                break t
                            }
                        }
                        r = void 0
                    }
                    !r || r.parentNode || r.previousElementSibling || (n = null)
                }
                n ? n.after(t) : e.prepend(t)
            }

            return {
                on: t.on, off: t.off, pin: t.pin, enabled: t.enabled, cancel: function (t) {
                    t.end && t.end()
                }, enter: function (n, r, i, o) {
                    return r = r && Zn(r), i = i && Zn(i), r = r || i.parent(), e(n, r, i), t.push(n, "enter", Bt(o))
                }, move: function (n, r, i, o) {
                    return r = r && Zn(r), i = i && Zn(i), r = r || i.parent(), e(n, r, i), t.push(n, "move", Bt(o))
                }, leave: function (e, n) {
                    return t.push(e, "leave", Bt(n), function () {
                        e.remove()
                    })
                }, addClass: function (e, n, r) {
                    return r = Bt(r), r.addClass = qt(r.addclass, n), t.push(e, "addClass", r)
                }, removeClass: function (e, n, r) {
                    return r = Bt(r), r.removeClass = qt(r.removeClass, n), t.push(e, "removeClass", r)
                }, setClass: function (e, n, r, i) {
                    return i = Bt(i), i.addClass = qt(i.addClass, n), i.removeClass = qt(i.removeClass, r), t.push(e, "setClass", i)
                }, animate: function (e, n, r, i, o) {
                    return o = Bt(o), o.from = o.from ? u(o.from, n) : n, o.to = o.to ? u(o.to, r) : r, o.tempClasses = qt(o.tempClasses, i || "ng-inline-animate"), t.push(e, "animate", o)
                }
            }
        }]
    }], Kr = function () {
        this.$get = ["$$rAF", function (t) {
            function e(e) {
                n.push(e), 1 < n.length || t(function () {
                    for (var t = 0; t < n.length; t++)n[t]();
                    n = []
                })
            }

            var n = [];
            return function () {
                var t = !1;
                return e(function () {
                    t = !0
                }), function (n) {
                    t ? n() : e(n)
                }
            }
        }]
    }, Yr = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (t, e, n, i, o) {
            function a(t) {
                this.setHost(t);
                var e = n();
                this._doneCallbacks = [], this._tick = function (t) {
                    var n = i[0];
                    n && n.hidden ? o(t, 0, !1) : e(t)
                }, this._state = 0
            }

            return a.chain = function (t, e) {
                function n() {
                    r === t.length ? e(!0) : t[r](function (t) {
                        !1 === t ? e(!1) : (r++, n())
                    })
                }

                var r = 0;
                n()
            }, a.all = function (t, e) {
                function n(n) {
                    o = o && n, ++i === t.length && e(o)
                }

                var i = 0, o = !0;
                r(t, function (t) {
                    t.done(n)
                })
            }, a.prototype = {
                setHost: function (t) {
                    this.host = t || {}
                }, done: function (t) {
                    2 === this._state ? t() : this._doneCallbacks.push(t)
                }, progress: h, getPromise: function () {
                    if (!this.promise) {
                        var e = this;
                        this.promise = t(function (t, n) {
                            e.done(function (e) {
                                !1 === e ? n() : t()
                            })
                        })
                    }
                    return this.promise
                }, then: function (t, e) {
                    return this.getPromise().then(t, e)
                }, "catch": function (t) {
                    return this.getPromise()["catch"](t)
                }, "finally": function (t) {
                    return this.getPromise()["finally"](t)
                }, pause: function () {
                    this.host.pause && this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end(), this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel(), this._resolve(!1)
                }, complete: function (t) {
                    var e = this;
                    0 === e._state && (e._state = 1, e._tick(function () {
                        e._resolve(t)
                    }))
                }, _resolve: function (t) {
                    2 !== this._state && (r(this._doneCallbacks, function (e) {
                        e(t)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            }, a
        }]
    }, Xr = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (t, e, n) {
            return function (e, r) {
                function i() {
                    return t(function () {
                        o.addClass && (e.addClass(o.addClass), o.addClass = null), o.removeClass && (e.removeClass(o.removeClass), o.removeClass = null), o.to && (e.css(o.to), o.to = null), a || s.complete(), a = !0
                    }), s
                }

                var o = r || {};
                o.$$prepared || (o = j(o)), o.cleanupStyles && (o.from = o.to = null), o.from && (e.css(o.from), o.from = null);
                var a, s = new n;
                return {start: i, end: i}
            }
        }]
    }, Qr = e("$compile"), ti = new function () {
    };
    Zt.$inject = ["$provide", "$$sanitizeUriProvider"], Jt.prototype.isFirstChange = function () {
        return this.previousValue === ti
    };
    var ei = /^((?:x|data)[:\-_])/i, ni = e("$controller"), ri = /^(\S+)(\s+as\s+([\w$]+))?$/, ii = function () {
        this.$get = ["$document", function (t) {
            return function (e) {
                return e ? !e.nodeType && e instanceof Zn && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
            }
        }]
    }, oi = "application/json", ai = {"Content-Type": oi + ";charset=utf-8"}, si = /^\[|^\{(?!\{)/, ui = {
        "[": /]$/,
        "{": /}$/
    }, ci = /^\)\]\}',?\n/, li = e("$http"), fi = function (t) {
        return function () {
            throw li("legacy", t)
        }
    }, hi = sr.$interpolateMinErr = e("$interpolate");
    hi.throwNoconcat = function (t) {
        throw hi("noconcat", t)
    }, hi.interr = function (t, e) {
        return hi("interr", t, e.toString())
    };
    var pi = function () {
        this.$get = ["$window", function (t) {
            function e(t) {
                var e = function (t) {
                    e.data = t, e.called = !0
                };
                return e.id = t, e
            }

            var n = t.angular.callbacks, r = {};
            return {
                createCallback: function (t) {
                    t = "_" + (n.$$counter++).toString(36);
                    var i = "angular.callbacks." + t, o = e(t);
                    return r[i] = n[t] = o, i
                }, wasCalled: function (t) {
                    return r[t].called
                }, getResponse: function (t) {
                    return r[t].data
                }, removeCallback: function (t) {
                    delete n[r[t].id], delete r[t]
                }
            }
        }]
    }, di = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, $i = {
        http: 80,
        https: 443,
        ftp: 21
    }, vi = e("$location"), mi = /^\s*[\\/]{2,}/, gi = {
        $$absUrl: "",
        $$html5: !1,
        $$replace: !1,
        absUrl: Ee("$$absUrl"),
        url: function (t) {
            if (v(t))return this.$$url;
            var e = di.exec(t);
            return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
        },
        protocol: Ee("$$protocol"),
        host: Ee("$$host"),
        port: Ee("$$port"),
        path: ke("$$path", function (t) {
            return t = null !== t ? t.toString() : "", "/" === t.charAt(0) ? t : "/" + t
        }),
        search: function (t, e) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (b(t) || w(t))t = t.toString(), this.$$search = H(t); else {
                        if (!g(t))throw vi("isrcharg");
                        t = j(t, {}), r(t, function (e, n) {
                            null == e && delete t[n]
                        }), this.$$search = t
                    }
                    break;
                default:
                    v(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(), this
        },
        hash: ke("$$hash", function (t) {
            return null !== t ? t.toString() : ""
        }),
        replace: function () {
            return this.$$replace = !0, this
        }
    };
    r([Ce, Se, xe], function (t) {
        t.prototype = Object.create(gi), t.prototype.state = function (e) {
            if (!arguments.length)return this.$$state;
            if (t !== xe || !this.$$html5)throw vi("nostate");
            return this.$$state = v(e) ? null : e, this
        }
    });
    var yi = e("$parse"), bi = [].constructor, wi = (!1).constructor, xi = Function.constructor, Si = (0).constructor, Ci = {}.constructor, Ei = "".constructor, ki = bi.prototype, Ai = wi.prototype, Oi = xi.prototype, Mi = Si.prototype, Vi = Ci.prototype, Ti = Ei.prototype, Ni = Oi.call, ji = Oi.apply, Ii = Oi.bind, Di = Vi.valueOf, Pi = at();
    r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (t) {
        Pi[t] = !0
    });
    var Ri = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\x0B", "'": "'", '"': '"'}, Ui = function (t) {
        this.options = t
    };
    Ui.prototype = {
        constructor: Ui, lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;)if (t = this.text.charAt(this.index), '"' === t || "'" === t)this.readString(t); else if (this.isNumber(t) || "." === t && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar()))this.readIdent(); else if (this.is(t, "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: t
            }), this.index++; else if (this.isWhitespace(t))this.index++; else {
                var e = t + this.peek(), n = e + this.peek(2), r = Pi[e], i = Pi[n];
                Pi[t] || r || i ? (t = i ? n : r ? e : t, this.tokens.push({
                    index: this.index,
                    text: t,
                    operator: !0
                }), this.index += t.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (t, e) {
            return -1 !== e.indexOf(t)
        }, peek: function (t) {
            return t = t || 1, this.index + t < this.text.length && this.text.charAt(this.index + t)
        }, isNumber: function (t) {
            return "0" <= t && "9" >= t && "string" == typeof t
        }, isWhitespace: function (t) {
            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\x0B" === t || " " === t
        }, isIdentifierStart: function (t) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t)
        }, isValidIdentifierStart: function (t) {
            return "a" <= t && "z" >= t || "A" <= t && "Z" >= t || "_" === t || "$" === t
        }, isIdentifierContinue: function (t) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t)
        }, isValidIdentifierContinue: function (t, e) {
            return this.isValidIdentifierStart(t, e) || this.isNumber(t)
        }, codePointAt: function (t) {
            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
            var t = this.text.charAt(this.index), e = this.peek();
            if (!e)return t;
            var n = t.charCodeAt(0), r = e.charCodeAt(0);
            return 55296 <= n && 56319 >= n && 56320 <= r && 57343 >= r ? t + e : t
        }, isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        }, throwError: function (t, e, n) {
            throw n = n || this.index, e = m(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, yi("lexerr", t, e, this.text)
        }, readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Qn(this.text.charAt(this.index));
                if ("." === n || this.isNumber(n))t += n; else {
                    var r = this.peek();
                    if ("e" === n && this.isExpOperator(r))t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === t.charAt(t.length - 1))t += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== t.charAt(t.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
        }, readIdent: function () {
            var t = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var e = this.peekMultichar();
                if (!this.isIdentifierContinue(e))break;
                this.index += e.length
            }
            this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
        }, readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index), r = r + o;
                if (i)"u" === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Ri[o] || o, i = !1; else if ("\\" === o)i = !0; else {
                    if (o === t)return this.index++, void this.tokens.push({index: e, text: r, constant: !0, value: n});
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var Fi = function (t, e) {
        this.lexer = t, this.options = e
    };
    Fi.Program = "Program", Fi.ExpressionStatement = "ExpressionStatement", Fi.AssignmentExpression = "AssignmentExpression", Fi.ConditionalExpression = "ConditionalExpression", Fi.LogicalExpression = "LogicalExpression", Fi.BinaryExpression = "BinaryExpression", Fi.UnaryExpression = "UnaryExpression", Fi.CallExpression = "CallExpression", Fi.MemberExpression = "MemberExpression", Fi.Identifier = "Identifier", Fi.Literal = "Literal", Fi.ArrayExpression = "ArrayExpression", Fi.Property = "Property", Fi.ObjectExpression = "ObjectExpression", Fi.ThisExpression = "ThisExpression", Fi.LocalsExpression = "LocalsExpression", Fi.NGValueParameter = "NGValueParameter", Fi.prototype = {
        ast: function (t) {
            return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        }, program: function () {
            for (var t = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";"))return {
                type: Fi.Program,
                body: t
            }
        }, expressionStatement: function () {
            return {type: Fi.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var t = this.expression(); this.expect("|");)t = this.filter(t);
            return t
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var t = this.ternary();
            return this.expect("=") && (t = {
                type: Fi.AssignmentExpression,
                left: t,
                right: this.assignment(),
                operator: "="
            }), t
        }, ternary: function () {
            var t, e, n = this.logicalOR();
            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
                type: Fi.ConditionalExpression,
                test: n,
                alternate: t,
                consequent: e
            }) : n
        }, logicalOR: function () {
            for (var t = this.logicalAND(); this.expect("||");)t = {
                type: Fi.LogicalExpression,
                operator: "||",
                left: t,
                right: this.logicalAND()
            };
            return t
        }, logicalAND: function () {
            for (var t = this.equality(); this.expect("&&");)t = {
                type: Fi.LogicalExpression,
                operator: "&&",
                left: t,
                right: this.equality()
            };
            return t
        }, equality: function () {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");)e = {
                type: Fi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.relational()
            };
            return e
        }, relational: function () {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");)e = {
                type: Fi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.additive()
            };
            return e
        }, additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");)e = {
                type: Fi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.multiplicative()
            };
            return e
        }, multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");)e = {
                type: Fi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.unary()
            };
            return e
        }, unary: function () {
            var t;
            return (t = this.expect("+", "-", "!")) ? {
                type: Fi.UnaryExpression,
                operator: t.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = j(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
                type: Fi.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e; e = this.expect("(", "[", ".");)"(" === e.text ? (t = {
                type: Fi.CallExpression,
                callee: t,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === e.text ? (t = {
                type: Fi.MemberExpression,
                object: t,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === e.text ? t = {
                type: Fi.MemberExpression,
                object: t,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return t
        }, filter: function (t) {
            t = [t];
            for (var e = {
                type: Fi.CallExpression,
                callee: this.identifier(),
                arguments: t,
                filter: !0
            }; this.expect(":");)t.push(this.expression());
            return e
        }, parseArguments: function () {
            var t = [];
            if (")" !== this.peekToken().text)do t.push(this.filterChain()); while (this.expect(","));
            return t
        }, identifier: function () {
            var t = this.consume();
            return t.identifier || this.throwError("is not a valid identifier", t), {type: Fi.Identifier, name: t.text}
        }, constant: function () {
            return {type: Fi.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var t = [];
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                t.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), {type: Fi.ArrayExpression, elements: t}
        }, object: function () {
            var t, e = [];
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                t = {
                    type: Fi.Property,
                    kind: "init"
                }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t)
            } while (this.expect(","));
            return this.consume("}"), {type: Fi.ObjectExpression, properties: e}
        }, throwError: function (t, e) {
            throw yi("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        }, consume: function (t) {
            if (0 === this.tokens.length)throw yi("ueoe", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        }, peekToken: function () {
            if (0 === this.tokens.length)throw yi("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        }, peekAhead: function (t, e, n, r, i) {
            if (this.tokens.length > t) {
                t = this.tokens[t];
                var o = t.text;
                if (o === e || o === n || o === r || o === i || !(e || n || r || i))return t
            }
            return !1
        }, expect: function (t, e, n, r) {
            return !!(t = this.peek(t, e, n, r)) && (this.tokens.shift(), t)
        }, selfReferential: {"this": {type: Fi.ThisExpression}, $locals: {type: Fi.LocalsExpression}}
    }, qe.prototype = {
        compile: function (t, e) {
            var n = this, i = this.astBuilder.ast(t);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: e,
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            }, Pe(i, n.$filter);
            var o, a = "";
            return this.stage = "assign", (o = Fe(i)) && (this.state.computing = "assign", a = this.nextId(), this.recurse(o, a), this.return_(a), a = "fn.assign=" + this.generateFunction("assign", "s,v,l")), o = Re(i.body), n.stage = "inputs", r(o, function (t, e) {
                var r = "fn" + e;
                n.state[r] = {vars: [], body: [], own: {}}, n.state.computing = r;
                var i = n.nextId();
                n.recurse(t, i), n.return_(i), n.state.inputs.push(r), t.watchId = e
            }), this.state.computing = "fn", this.stage = "main", this.recurse(i), a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + a + this.watchFns() + "return fn;", a = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", a)(this.$filter, Me, Te, Ne, Ve, je, Ie, De, t), this.state = this.stage = void 0, a.literal = _e(i), a.constant = i.constant, a
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var t = [], e = this.state.inputs, n = this;
            return r(e, function (e) {
                t.push("var " + e + "=" + n.generateFunction(e, "s"))
            }), e.length && t.push("fn.inputs=[" + e.join(",") + "];"), t.join("")
        }, generateFunction: function (t, e) {
            return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
        }, filterPrefix: function () {
            var t = [], e = this;
            return r(this.state.filters, function (n, r) {
                t.push(n + "=$filter(" + e.escape(r) + ")")
            }), t.length ? "var " + t.join(",") + ";" : ""
        }, varsPrefix: function (t) {
            return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
        }, body: function (t) {
            return this.state[t].body.join("")
        }, recurse: function (t, e, n, i, o, a) {
            var s, u, c, l, f, p = this;
            if (i = i || h, !a && m(t.watchId))e = e || this.nextId(), this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, i, o, !0)); else switch (t.type) {
                case Fi.Program:
                    r(t.body, function (e, n) {
                        p.recurse(e.expression, void 0, void 0, function (t) {
                            u = t
                        }), n !== t.body.length - 1 ? p.current().body.push(u, ";") : p.return_(u)
                    });
                    break;
                case Fi.Literal:
                    l = this.escape(t.value), this.assign(e, l), i(l);
                    break;
                case Fi.UnaryExpression:
                    this.recurse(t.argument, void 0, void 0, function (t) {
                        u = t
                    }), l = t.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(e, l), i(l);
                    break;
                case Fi.BinaryExpression:
                    this.recurse(t.left, void 0, void 0, function (t) {
                        s = t
                    }), this.recurse(t.right, void 0, void 0, function (t) {
                        u = t
                    }), l = "+" === t.operator ? this.plus(s, u) : "-" === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(u, 0) : "(" + s + ")" + t.operator + "(" + u + ")", this.assign(e, l), i(l);
                    break;
                case Fi.LogicalExpression:
                    e = e || this.nextId(), p.recurse(t.left, e), p.if_("&&" === t.operator ? e : p.not(e), p.lazyRecurse(t.right, e)), i(e);
                    break;
                case Fi.ConditionalExpression:
                    e = e || this.nextId(), p.recurse(t.test, e), p.if_(e, p.lazyRecurse(t.alternate, e), p.lazyRecurse(t.consequent, e)), i(e);
                    break;
                case Fi.Identifier:
                    e = e || this.nextId(), n && (n.context = "inputs" === p.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), n.computed = !1, n.name = t.name), Me(t.name), p.if_("inputs" === p.stage || p.not(p.getHasOwnProperty("l", t.name)), function () {
                        p.if_("inputs" === p.stage || "s", function () {
                            o && 1 !== o && p.if_(p.not(p.nonComputedMember("s", t.name)), p.lazyAssign(p.nonComputedMember("s", t.name), "{}")), p.assign(e, p.nonComputedMember("s", t.name))
                        })
                    }, e && p.lazyAssign(e, p.nonComputedMember("l", t.name))), (p.state.expensiveChecks || Be(t.name)) && p.addEnsureSafeObject(e), i(e);
                    break;
                case Fi.MemberExpression:
                    s = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), p.recurse(t.object, s, void 0, function () {
                        p.if_(p.notNull(s), function () {
                            o && 1 !== o && p.addEnsureSafeAssignContext(s), t.computed ? (u = p.nextId(), p.recurse(t.property, u), p.getStringValue(u), p.addEnsureSafeMemberName(u), o && 1 !== o && p.if_(p.not(p.computedMember(s, u)), p.lazyAssign(p.computedMember(s, u), "{}")), l = p.ensureSafeObject(p.computedMember(s, u)), p.assign(e, l), n && (n.computed = !0, n.name = u)) : (Me(t.property.name), o && 1 !== o && p.if_(p.not(p.nonComputedMember(s, t.property.name)), p.lazyAssign(p.nonComputedMember(s, t.property.name), "{}")), l = p.nonComputedMember(s, t.property.name), (p.state.expensiveChecks || Be(t.property.name)) && (l = p.ensureSafeObject(l)), p.assign(e, l), n && (n.computed = !1, n.name = t.property.name))
                        }, function () {
                            p.assign(e, "undefined")
                        }), i(e)
                    }, !!o);
                    break;
                case Fi.CallExpression:
                    e = e || this.nextId(), t.filter ? (u = p.filter(t.callee.name), c = [], r(t.arguments, function (t) {
                        var e = p.nextId();
                        p.recurse(t, e), c.push(e)
                    }), l = u + "(" + c.join(",") + ")", p.assign(e, l), i(e)) : (u = p.nextId(), s = {}, c = [], p.recurse(t.callee, u, s, function () {
                        p.if_(p.notNull(u), function () {
                            p.addEnsureSafeFunction(u), r(t.arguments, function (t) {
                                p.recurse(t, p.nextId(), void 0, function (t) {
                                    c.push(p.ensureSafeObject(t))
                                })
                            }), s.name ? (p.state.expensiveChecks || p.addEnsureSafeObject(s.context), l = p.member(s.context, s.name, s.computed) + "(" + c.join(",") + ")") : l = u + "(" + c.join(",") + ")", l = p.ensureSafeObject(l), p.assign(e, l)
                        }, function () {
                            p.assign(e, "undefined")
                        }), i(e)
                    }));
                    break;
                case Fi.AssignmentExpression:
                    if (u = this.nextId(), s = {}, !Ue(t.left))throw yi("lval");
                    this.recurse(t.left, void 0, s, function () {
                        p.if_(p.notNull(s.context), function () {
                            p.recurse(t.right, u), p.addEnsureSafeObject(p.member(s.context, s.name, s.computed)), p.addEnsureSafeAssignContext(s.context), l = p.member(s.context, s.name, s.computed) + t.operator + u, p.assign(e, l), i(e || l)
                        })
                    }, 1);
                    break;
                case Fi.ArrayExpression:
                    c = [], r(t.elements, function (t) {
                        p.recurse(t, p.nextId(), void 0, function (t) {
                            c.push(t)
                        })
                    }), l = "[" + c.join(",") + "]", this.assign(e, l), i(l);
                    break;
                case Fi.ObjectExpression:
                    c = [], f = !1, r(t.properties, function (t) {
                        t.computed && (f = !0)
                    }), f ? (e = e || this.nextId(), this.assign(e, "{}"), r(t.properties, function (t) {
                        t.computed ? (s = p.nextId(), p.recurse(t.key, s)) : s = t.key.type === Fi.Identifier ? t.key.name : "" + t.key.value, u = p.nextId(), p.recurse(t.value, u), p.assign(p.member(e, s, t.computed), u)
                    })) : (r(t.properties, function (e) {
                        p.recurse(e.value, t.constant ? void 0 : p.nextId(), void 0, function (t) {
                            c.push(p.escape(e.key.type === Fi.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), l = "{" + c.join(",") + "}", this.assign(e, l)), i(e || l);
                    break;
                case Fi.ThisExpression:
                    this.assign(e, "s"), i("s");
                    break;
                case Fi.LocalsExpression:
                    this.assign(e, "l"), i("l");
                    break;
                case Fi.NGValueParameter:
                    this.assign(e, "v"), i("v")
            }
        }, getHasOwnProperty: function (t, e) {
            var n = t + "." + e, r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n]
        }, assign: function (t, e) {
            if (t)return this.current().body.push(t, "=", e, ";"), t
        }, filter: function (t) {
            return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
        }, ifDefined: function (t, e) {
            return "ifDefined(" + t + "," + this.escape(e) + ")"
        }, plus: function (t, e) {
            return "plus(" + t + "," + e + ")"
        }, return_: function (t) {
            this.current().body.push("return ", t, ";")
        }, if_: function (t, e, n) {
            if (!0 === t)e(); else {
                var r = this.current().body;
                r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        }, not: function (t) {
            return "!(" + t + ")"
        }, notNull: function (t) {
            return t + "!=null"
        }, nonComputedMember: function (t, e) {
            var n = /[^$_a-zA-Z0-9]/g;
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + "." + e : t + '["' + e.replace(n, this.stringEscapeFn) + '"]'
        }, computedMember: function (t, e) {
            return t + "[" + e + "]"
        }, member: function (t, e, n) {
            return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
        }, addEnsureSafeObject: function (t) {
            this.current().body.push(this.ensureSafeObject(t), ";")
        }, addEnsureSafeMemberName: function (t) {
            this.current().body.push(this.ensureSafeMemberName(t), ";")
        }, addEnsureSafeFunction: function (t) {
            this.current().body.push(this.ensureSafeFunction(t), ";")
        }, addEnsureSafeAssignContext: function (t) {
            this.current().body.push(this.ensureSafeAssignContext(t), ";")
        }, ensureSafeObject: function (t) {
            return "ensureSafeObject(" + t + ",text)"
        }, ensureSafeMemberName: function (t) {
            return "ensureSafeMemberName(" + t + ",text)"
        }, ensureSafeFunction: function (t) {
            return "ensureSafeFunction(" + t + ",text)"
        }, getStringValue: function (t) {
            this.assign(t, "getStringValue(" + t + ")")
        }, ensureSafeAssignContext: function (t) {
            return "ensureSafeAssignContext(" + t + ",text)"
        }, lazyRecurse: function (t, e, n, r, i, o) {
            var a = this;
            return function () {
                a.recurse(t, e, n, r, i, o)
            }
        }, lazyAssign: function (t, e) {
            var n = this;
            return function () {
                n.assign(t, e)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (t) {
            if (b(t))return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (w(t))return t.toString();
            if (!0 === t)return "true";
            if (!1 === t)return "false";
            if (null === t)return "null";
            if ("undefined" == typeof t)return "undefined";
            throw yi("esc")
        }, nextId: function (t, e) {
            var n = "v" + this.state.nextId++;
            return t || this.current().vars.push(n + (e ? "=" + e : "")), n
        }, current: function () {
            return this.state[this.state.computing]
        }
    }, Le.prototype = {
        compile: function (t, e) {
            var n = this, i = this.astBuilder.ast(t);
            this.expression = t, this.expensiveChecks = e, Pe(i, n.$filter);
            var o, a;
            (o = Fe(i)) && (a = this.recurse(o)), o = Re(i.body);
            var s;
            o && (s = [], r(o, function (t, e) {
                var r = n.recurse(t);
                t.input = r, s.push(r), t.watchId = e
            }));
            var u = [];
            return r(i.body, function (t) {
                u.push(n.recurse(t.expression))
            }), o = 0 === i.body.length ? h : 1 === i.body.length ? u[0] : function (t, e) {
                var n;
                return r(u, function (r) {
                    n = r(t, e)
                }), n
            }, a && (o.assign = function (t, e, n) {
                return a(t, n, e)
            }), s && (o.inputs = s), o.literal = _e(i), o.constant = i.constant, o
        }, recurse: function (t, e, n) {
            var i, o, a, s = this;
            if (t.input)return this.inputs(t.input, t.watchId);
            switch (t.type) {
                case Fi.Literal:
                    return this.value(t.value, e);
                case Fi.UnaryExpression:
                    return o = this.recurse(t.argument), this["unary" + t.operator](o, e);
                case Fi.BinaryExpression:
                    return i = this.recurse(t.left), o = this.recurse(t.right), this["binary" + t.operator](i, o, e);
                case Fi.LogicalExpression:
                    return i = this.recurse(t.left), o = this.recurse(t.right), this["binary" + t.operator](i, o, e);
                case Fi.ConditionalExpression:
                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
                case Fi.Identifier:
                    return Me(t.name, s.expression), s.identifier(t.name, s.expensiveChecks || Be(t.name), e, n, s.expression);
                case Fi.MemberExpression:
                    return i = this.recurse(t.object, !1, !!n), t.computed || (Me(t.property.name, s.expression), o = t.property.name), t.computed && (o = this.recurse(t.property)), t.computed ? this.computedMember(i, o, e, n, s.expression) : this.nonComputedMember(i, o, s.expensiveChecks, e, n, s.expression);
                case Fi.CallExpression:
                    return a = [], r(t.arguments, function (t) {
                        a.push(s.recurse(t))
                    }), t.filter && (o = this.$filter(t.callee.name)), t.filter || (o = this.recurse(t.callee, !0)), t.filter ? function (t, n, r, i) {
                        for (var s = [], u = 0; u < a.length; ++u)s.push(a[u](t, n, r, i));
                        return t = o.apply(void 0, s, i), e ? {context: void 0, name: void 0, value: t} : t
                    } : function (t, n, r, i) {
                        var u, c = o(t, n, r, i);
                        if (null != c.value) {
                            Te(c.context, s.expression), Ne(c.value, s.expression), u = [];
                            for (var l = 0; l < a.length; ++l)u.push(Te(a[l](t, n, r, i), s.expression));
                            u = Te(c.value.apply(c.context, u), s.expression)
                        }
                        return e ? {value: u} : u
                    };
                case Fi.AssignmentExpression:
                    return i = this.recurse(t.left, !0, 1), o = this.recurse(t.right), function (t, n, r, a) {
                        var u = i(t, n, r, a);
                        return t = o(t, n, r, a), Te(u.value, s.expression), je(u.context), u.context[u.name] = t, e ? {value: t} : t
                    };
                case Fi.ArrayExpression:
                    return a = [], r(t.elements, function (t) {
                        a.push(s.recurse(t))
                    }), function (t, n, r, i) {
                        for (var o = [], s = 0; s < a.length; ++s)o.push(a[s](t, n, r, i));
                        return e ? {value: o} : o
                    };
                case Fi.ObjectExpression:
                    return a = [], r(t.properties, function (t) {
                        t.computed ? a.push({
                            key: s.recurse(t.key),
                            computed: !0,
                            value: s.recurse(t.value)
                        }) : a.push({
                            key: t.key.type === Fi.Identifier ? t.key.name : "" + t.key.value,
                            computed: !1,
                            value: s.recurse(t.value)
                        })
                    }), function (t, n, r, i) {
                        for (var o = {}, s = 0; s < a.length; ++s)a[s].computed ? o[a[s].key(t, n, r, i)] = a[s].value(t, n, r, i) : o[a[s].key] = a[s].value(t, n, r, i);
                        return e ? {value: o} : o
                    };
                case Fi.ThisExpression:
                    return function (t) {
                        return e ? {value: t} : t
                    };
                case Fi.LocalsExpression:
                    return function (t, n) {
                        return e ? {value: n} : n
                    };
                case Fi.NGValueParameter:
                    return function (t, n, r) {
                        return e ? {value: r} : r
                    }
            }
        }, "unary+": function (t, e) {
            return function (n, r, i, o) {
                return n = t(n, r, i, o), n = m(n) ? +n : 0, e ? {value: n} : n
            }
        }, "unary-": function (t, e) {
            return function (n, r, i, o) {
                return n = t(n, r, i, o), n = m(n) ? -n : 0, e ? {value: n} : n
            }
        }, "unary!": function (t, e) {
            return function (n, r, i, o) {
                return n = !t(n, r, i, o), e ? {value: n} : n
            }
        }, "binary+": function (t, e, n) {
            return function (r, i, o, a) {
                var s = t(r, i, o, a);
                return r = e(r, i, o, a), s = De(s, r), n ? {value: s} : s
            }
        }, "binary-": function (t, e, n) {
            return function (r, i, o, a) {
                var s = t(r, i, o, a);
                return r = e(r, i, o, a), s = (m(s) ? s : 0) - (m(r) ? r : 0), n ? {value: s} : s
            }
        }, "binary*": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) * e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary/": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) / e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary%": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) % e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary===": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) === e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary!==": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) !== e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary==": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) == e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary!=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) != e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary<": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) < e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary>": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) > e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary<=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) <= e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary>=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) >= e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary&&": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) && e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary||": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) || e(r, i, o, a), n ? {value: r} : r
            }
        }, "ternary?:": function (t, e, n, r) {
            return function (i, o, a, s) {
                return i = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s), r ? {value: i} : i
            }
        }, value: function (t, e) {
            return function () {
                return e ? {context: void 0, name: void 0, value: t} : t
            }
        }, identifier: function (t, e, n, r, i) {
            return function (o, a, s, u) {
                return o = a && t in a ? a : o, r && 1 !== r && o && !o[t] && (o[t] = {}), a = o ? o[t] : void 0, e && Te(a, i), n ? {
                    context: o,
                    name: t,
                    value: a
                } : a
            }
        }, computedMember: function (t, e, n, r, i) {
            return function (o, a, s, u) {
                var c, l, f = t(o, a, s, u);
                return null != f && (c = e(o, a, s, u), c += "", Me(c, i), r && 1 !== r && (je(f), f && !f[c] && (f[c] = {})), l = f[c], Te(l, i)), n ? {
                    context: f,
                    name: c,
                    value: l
                } : l
            }
        }, nonComputedMember: function (t, e, n, r, i, o) {
            return function (a, s, u, c) {
                return a = t(a, s, u, c), i && 1 !== i && (je(a), a && !a[e] && (a[e] = {})), s = null != a ? a[e] : void 0, (n || Be(e)) && Te(s, o), r ? {
                    context: a,
                    name: e,
                    value: s
                } : s
            }
        }, inputs: function (t, e) {
            return function (n, r, i, o) {
                return o ? o[e] : t(n, r, i)
            }
        }
    };
    var _i = function (t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n, this.ast = new Fi(t, n), this.astCompiler = n.csp ? new Le(this.ast, e) : new qe(this.ast, e)
    };
    _i.prototype = {
        constructor: _i, parse: function (t) {
            return this.astCompiler.compile(t, this.options.expensiveChecks)
        }
    };
    var qi = e("$sce"), Li = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Bi = e("$compile"), Hi = t.document.createElement("a"), zi = sn(t.location.href);
    ln.$inject = ["$document"], hn.$inject = ["$provide"];
    var Wi = 22, Gi = ".", Zi = "0";
    mn.$inject = ["$locale"], gn.$inject = ["$locale"];
    var Ji = {
        yyyy: Sn("FullYear", 4, 0, !1, !0),
        yy: Sn("FullYear", 2, 0, !0, !0),
        y: Sn("FullYear", 1, 0, !1, !0),
        MMMM: Cn("Month"),
        MMM: Cn("Month", !0),
        MM: Sn("Month", 2, 1),
        M: Sn("Month", 1, 1),
        LLLL: Cn("Month", !1, !0),
        dd: Sn("Date", 2),
        d: Sn("Date", 1),
        HH: Sn("Hours", 2),
        H: Sn("Hours", 1),
        hh: Sn("Hours", 2, -12),
        h: Sn("Hours", 1, -12),
        mm: Sn("Minutes", 2),
        m: Sn("Minutes", 1),
        ss: Sn("Seconds", 2),
        s: Sn("Seconds", 1),
        sss: Sn("Milliseconds", 3),
        EEEE: Cn("Day"),
        EEE: Cn("Day", !0),
        a: function (t, e) {
            return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
        },
        Z: function (t, e, n) {
            return t = -1 * n, t = (0 <= t ? "+" : "") + (xn(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + xn(Math.abs(t % 60), 2))
        },
        ww: kn(2),
        w: kn(1),
        G: An,
        GG: An,
        GGG: An,
        GGGG: function (t, e) {
            return 0 >= t.getFullYear() ? e.ERANAMES[0] : e.ERANAMES[1]
        }
    }, Ki = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Yi = /^\-?\d+$/;
    On.$inject = ["$locale"];
    var Xi = d(Qn), Qi = d(tr);
    Nn.$inject = ["$parse"];
    var to = d({
        restrict: "E", compile: function (t, e) {
            if (!e.href && !e.xlinkHref)return function (t, e) {
                if ("a" === e[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === ir.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }
    }), eo = {};
    r(Pr, function (t, e) {
        function n(t, n, i) {
            t.$watch(i[r], function (t) {
                i.$set(e, !!t)
            })
        }

        if ("multiple" !== t) {
            var r = Kt("ng-" + e), i = n;
            "checked" === t && (i = function (t, e, i) {
                i.ngModel !== i[r] && n(t, e, i)
            }), eo[r] = function () {
                return {restrict: "A", priority: 100, link: i}
            }
        }
    }), r(Ur, function (t, e) {
        eo[e] = function () {
            return {
                priority: 100, link: function (t, n, r) {
                    return "ngPattern" === e && "/" === r.ngPattern.charAt(0) && (n = r.ngPattern.match(Yn)) ? void r.$set("ngPattern", new RegExp(n[1], n[2])) : void t.$watch(r[e], function (t) {
                        r.$set(e, t)
                    })
                }
            }
        }
    }), r(["src", "srcset", "href"], function (t) {
        var e = Kt("ng-" + t);
        eo[e] = function () {
            return {
                priority: 99, link: function (n, r, i) {
                    var o = t, a = t;
                    "href" === t && "[object SVGAnimatedString]" === ir.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function (e) {
                        e ? (i.$set(a, e), Gn && o && r.prop(o, i[a])) : "href" === t && i.$set(a, null)
                    })
                }
            }
        }
    });
    var no = {
        $addControl: h, $$renameControl: function (t, e) {
            t.$name = e
        }, $removeControl: h, $setValidity: h, $setDirty: h, $setPristine: h, $setSubmitted: h
    };
    In.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var ro = function (t) {
        return ["$timeout", "$parse", function (e, n) {
            function r(t) {
                return "" === t ? n('this[""]').assign : n(t).assign || h
            }

            return {
                name: "form",
                restrict: t ? "EAC" : "E",
                require: ["form", "^^?form"],
                controller: In,
                compile: function (n, i) {
                    n.addClass(Fo).addClass(Ro);
                    var o = i.name ? "name" : !(!t || !i.ngForm) && "ngForm";
                    return {
                        pre: function (t, n, i, a) {
                            var s = a[0];
                            if (!("action" in i)) {
                                var c = function (e) {
                                    t.$apply(function () {
                                        s.$commitViewValue(), s.$setSubmitted()
                                    }), e.preventDefault()
                                };
                                n[0].addEventListener("submit", c, !1), n.on("$destroy", function () {
                                    e(function () {
                                        n[0].removeEventListener("submit", c, !1)
                                    }, 0, !1)
                                })
                            }
                            (a[1] || s.$$parentForm).$addControl(s);
                            var l = o ? r(s.$name) : h;
                            o && (l(t, s), i.$observe(o, function (e) {
                                s.$name !== e && (l(t, void 0), s.$$parentForm.$$renameControl(s, e), (l = r(s.$name))(t, s))
                            })), n.on("$destroy", function () {
                                s.$$parentForm.$removeControl(s), l(t, void 0), u(s, no)
                            })
                        }
                    }
                }
            }
        }]
    }, io = ro(), oo = ro(!0), ao = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, so = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, uo = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, co = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, lo = /^(\d{4,})-(\d{2})-(\d{2})$/, fo = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, ho = /^(\d{4,})-W(\d\d)$/, po = /^(\d{4,})-(\d\d)$/, $o = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, vo = at();
    r(["date", "datetime-local", "month", "time", "week"], function (t) {
        vo[t] = !0
    });
    var mo = {
        text: function (t, e, n, r, i, o) {
            Pn(t, e, n, r, i, o), Dn(r)
        },
        date: Un("date", lo, Rn(lo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Un("datetimelocal", fo, Rn(fo, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Un("time", $o, Rn($o, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Un("week", ho, function (t, e) {
            if (x(t))return t;
            if (b(t)) {
                ho.lastIndex = 0;
                var n = ho.exec(t);
                if (n) {
                    var r = +n[1], i = +n[2], o = n = 0, a = 0, s = 0, u = En(r), i = 7 * (i - 1);
                    return e && (n = e.getHours(), o = e.getMinutes(), a = e.getSeconds(), s = e.getMilliseconds()), new Date(r, 0, u.getDate() + i, n, o, a, s)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: Un("month", po, Rn(po, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (t, e, n, r, i, o) {
            Fn(t, e, n, r), Pn(t, e, n, r, i, o), _n(r);
            var a, s;
            (m(n.min) || n.ngMin) && (r.$validators.min = function (t) {
                return r.$isEmpty(t) || v(a) || t >= a
            }, n.$observe("min", function (t) {
                a = qn(t), r.$validate()
            })), (m(n.max) || n.ngMax) && (r.$validators.max = function (t) {
                return r.$isEmpty(t) || v(s) || t <= s
            }, n.$observe("max", function (t) {
                s = qn(t), r.$validate()
            }))
        },
        url: function (t, e, n, r, i, o) {
            Pn(t, e, n, r, i, o), Dn(r), r.$$parserName = "url", r.$validators.url = function (t, e) {
                var n = t || e;
                return r.$isEmpty(n) || so.test(n)
            }
        },
        email: function (t, e, n, r, i, o) {
            Pn(t, e, n, r, i, o), Dn(r), r.$$parserName = "email", r.$validators.email = function (t, e) {
                var n = t || e;
                return r.$isEmpty(n) || uo.test(n)
            }
        },
        radio: function (t, e, n, r) {
            v(n.name) && e.attr("name", ++ur), e.on("click", function (t) {
                e[0].checked && r.$setViewValue(n.value, t && t.type)
            }), r.$render = function () {
                e[0].checked = n.value === r.$viewValue
            }, n.$observe("value", r.$render)
        },
        range: function (t, e, n, r, i, o) {
            function a(t, r) {
                e.attr(t, n[t]), n.$observe(t, r)
            }

            function s(t) {
                f = qn(t), cr(r.$modelValue) || (l ? (t = e.val(), f > t && (t = f, e.val(t)), r.$setViewValue(t)) : r.$validate())
            }

            function u(t) {
                h = qn(t), cr(r.$modelValue) || (l ? (t = e.val(), h < t && (e.val(h), t = h < f ? f : h), r.$setViewValue(t)) : r.$validate())
            }

            function c(t) {
                p = qn(t), cr(r.$modelValue) || (l && r.$viewValue !== e.val() ? r.$setViewValue(e.val()) : r.$validate())
            }

            Fn(t, e, n, r), _n(r), Pn(t, e, n, r, i, o);
            var l = r.$$hasNativeValidators && "range" === e[0].type, f = l ? 0 : void 0, h = l ? 100 : void 0, p = l ? 1 : void 0, d = e[0].validity;
            t = m(n.min), i = m(n.max), o = m(n.step);
            var $ = r.$render;
            r.$render = l && m(d.rangeUnderflow) && m(d.rangeOverflow) ? function () {
                $(), r.$setViewValue(e.val())
            } : $, t && (r.$validators.min = l ? function () {
                return !0
            } : function (t, e) {
                return r.$isEmpty(e) || v(f) || e >= f
            }, a("min", s)), i && (r.$validators.max = l ? function () {
                return !0
            } : function (t, e) {
                return r.$isEmpty(e) || v(h) || e <= h
            }, a("max", u)), o && (r.$validators.step = l ? function () {
                return !d.stepMismatch
            } : function (t, e) {
                var n;
                if (!(n = r.$isEmpty(e) || v(p))) {
                    n = f || 0;
                    var i = p, o = Number(e);
                    if ((0 | o) !== o || (0 | n) !== n || (0 | i) !== i) {
                        var a = Math.max(Ln(o), Ln(n), Ln(i)), a = Math.pow(10, a), o = o * a;
                        n *= a, i *= a
                    }
                    n = 0 === (o - n) % i
                }
                return n
            }, a("step", c))
        },
        checkbox: function (t, e, n, r, i, o, a, s) {
            var u = Bn(s, t, "ngTrueValue", n.ngTrueValue, !0), c = Bn(s, t, "ngFalseValue", n.ngFalseValue, !1);
            e.on("click", function (t) {
                r.$setViewValue(e[0].checked, t && t.type)
            }), r.$render = function () {
                e[0].checked = r.$viewValue
            }, r.$isEmpty = function (t) {
                return !1 === t
            }, r.$formatters.push(function (t) {
                return I(t, u)
            }), r.$parsers.push(function (t) {
                return t ? u : c
            })
        },
        hidden: h,
        button: h,
        submit: h,
        reset: h,
        file: h
    }, go = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, r) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (i, o, a, s) {
                    if (s[0]) {
                        var u = Qn(a.type);
                        "range" !== u || a.hasOwnProperty("ngInputRange") || (u = "text"), (mo[u] || mo.text)(i, o, a, s[0], e, t, n, r)
                    }
                }
            }
        }
    }], yo = /^(true|false|\d+)$/, bo = function () {
        return {
            restrict: "A", priority: 100, compile: function (t, e) {
                return yo.test(e.ngValue) ? function (t, e, n) {
                    n.$set("value", t.$eval(n.ngValue))
                } : function (t, e, n) {
                    t.$watch(n.ngValue, function (t) {
                        n.$set("value", t)
                    })
                }
            }
        }
    }, wo = ["$compile", function (t) {
        return {
            restrict: "AC", compile: function (e) {
                return t.$$addBindingClass(e), function (e, n, r) {
                    t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function (t) {
                        n.textContent = v(t) ? "" : t
                    })
                }
            }
        }
    }], xo = ["$interpolate", "$compile", function (t, e) {
        return {
            compile: function (n) {
                return e.$$addBindingClass(n), function (n, r, i) {
                    n = t(r.attr(i.$attr.ngBindTemplate)), e.$$addBindingInfo(r, n.expressions), r = r[0], i.$observe("ngBindTemplate", function (t) {
                        r.textContent = v(t) ? "" : t
                    })
                }
            }
        }
    }], So = ["$sce", "$parse", "$compile", function (t, e, n) {
        return {
            restrict: "A", compile: function (r, i) {
                var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (e) {
                    return t.valueOf(e)
                });
                return n.$$addBindingClass(r), function (e, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
                        var n = o(e);
                        r.html(t.getTrustedHtml(n) || "")
                    })
                }
            }
        }
    }], Co = d({
        restrict: "A", require: "ngModel", link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
                t.$eval(n.ngChange)
            })
        }
    }), Eo = Hn("", !0), ko = Hn("Odd", 0), Ao = Hn("Even", 1), Oo = jn({
        compile: function (t, e) {
            e.$set("ngCloak", void 0), t.removeClass("ng-cloak")
        }
    }), Mo = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], Vo = {}, To = {blur: !0, focus: !0};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = Kt("ng-" + t);
        Vo[e] = ["$parse", "$rootScope", function (n, r) {
            return {
                restrict: "A", compile: function (i, o) {
                    var a = n(o[e], null, !0);
                    return function (e, n) {
                        n.on(t, function (n) {
                            var i = function () {
                                a(e, {$event: n})
                            };
                            To[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var No = ["$animate", "$compile", function (t, e) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var s, u, c;
                n.$watch(i.ngIf, function (n) {
                    n ? u || a(function (n, o) {
                        u = o, n[n.length++] = e.$$createComment("end ngIf", i.ngIf), s = {clone: n}, t.enter(n, r.parent(), r)
                    }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ot(s.clone), t.leave(c).then(function () {
                        c = null
                    }), s = null))
                })
            }
        }
    }], jo = ["$templateRequest", "$anchorScroll", "$animate", function (t, e, n) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: sr.noop,
            compile: function (r, i) {
                var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                return function (r, i, u, c, l) {
                    var f, h, p, d = 0, $ = function () {
                        h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function () {
                            h = null
                        }), h = p, p = null)
                    };
                    r.$watch(o, function (o) {
                        var u = function () {
                            !m(s) || s && !r.$eval(s) || e()
                        }, h = ++d;
                        o ? (t(o, !0).then(function (t) {
                            if (!r.$$destroyed && h === d) {
                                var e = r.$new();
                                c.template = t, t = l(e, function (t) {
                                    $(), n.enter(t, null, i).then(u)
                                }), f = e, p = t, f.$emit("$includeContentLoaded", o), r.$eval(a)
                            }
                        }, function () {
                            r.$$destroyed || h !== d || ($(), r.$emit("$includeContentError", o))
                        }), r.$emit("$includeContentRequested", o)) : ($(), c.template = null)
                    })
                }
            }
        }
    }], Io = ["$compile", function (e) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                ir.call(r[0]).match(/SVG/) ? (r.empty(), e(ht(o.template, t.document).childNodes)(n, function (t) {
                    r.append(t)
                }, {futureParentElement: r})) : (r.html(o.template), e(r.contents())(n))
            }
        }
    }], Do = jn({
        priority: 450, compile: function () {
            return {
                pre: function (t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }), Po = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (t, e, n, i) {
                var o = e.attr(n.$attr.ngList) || ", ", a = "false" !== n.ngTrim, s = a ? hr(o) : o;
                i.$parsers.push(function (t) {
                    if (!v(t)) {
                        var e = [];
                        return t && r(t.split(s), function (t) {
                            t && e.push(a ? hr(t) : t)
                        }), e
                    }
                }), i.$formatters.push(function (t) {
                    if (lr(t))return t.join(o)
                }), i.$isEmpty = function (t) {
                    return !t || !t.length
                }
            }
        }
    }, Ro = "ng-valid", Uo = "ng-invalid", Fo = "ng-pristine", _o = "ng-dirty", qo = "ng-pending", Lo = e("ngModel"), Bo = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (t, e, n, i, o, a, s, u, c, l) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = l(n.name || "", !1)(t), this.$$parentForm = no;
        var f, p = o(n.ngModel), d = p.assign, $ = p, g = d, y = null, b = this;
        this.$$setOptions = function (t) {
            if ((b.$options = t) && t.getterSetter) {
                var e = o(n.ngModel + "()"), r = o(n.ngModel + "($$$p)");
                $ = function (t) {
                    var n = p(t);
                    return S(n) && (n = e(t)), n
                }, g = function (t, e) {
                    S(p(t)) ? r(t, {$$$p: e}) : d(t, e)
                }
            } else if (!p.assign)throw Lo("nonassign", n.ngModel, L(i))
        }, this.$render = h, this.$isEmpty = function (t) {
            return v(t) || "" === t || null === t || t !== t
        }, this.$$updateEmptyClasses = function (t) {
            b.$isEmpty(t) ? (a.removeClass(i, "ng-not-empty"), a.addClass(i, "ng-empty")) : (a.removeClass(i, "ng-empty"), a.addClass(i, "ng-not-empty"))
        };
        var x = 0;
        zn({
            ctrl: this, $element: i, set: function (t, e) {
                t[e] = !0
            }, unset: function (t, e) {
                delete t[e]
            }, $animate: a
        }), this.$setPristine = function () {
            b.$dirty = !1, b.$pristine = !0, a.removeClass(i, _o), a.addClass(i, Fo)
        }, this.$setDirty = function () {
            b.$dirty = !0, b.$pristine = !1, a.removeClass(i, Fo), a.addClass(i, _o), b.$$parentForm.$setDirty()
        }, this.$setUntouched = function () {
            b.$touched = !1, b.$untouched = !0, a.setClass(i, "ng-untouched", "ng-touched")
        }, this.$setTouched = function () {
            b.$touched = !0, b.$untouched = !1, a.setClass(i, "ng-touched", "ng-untouched")
        }, this.$rollbackViewValue = function () {
            s.cancel(y), b.$viewValue = b.$$lastCommittedViewValue, b.$render()
        }, this.$validate = function () {
            if (!cr(b.$modelValue)) {
                var t = b.$$rawModelValue, e = b.$valid, n = b.$modelValue, r = b.$options && b.$options.allowInvalid;
                b.$$runValidators(t, b.$$lastCommittedViewValue, function (i) {
                    r || e === i || (b.$modelValue = i ? t : void 0, b.$modelValue !== n && b.$$writeModelToScope())
                })
            }
        }, this.$$runValidators = function (t, e, n) {
            function i() {
                var n = !0;
                return r(b.$validators, function (r, i) {
                    var o = r(t, e);
                    n = n && o, a(i, o)
                }), !!n || (r(b.$asyncValidators, function (t, e) {
                    a(e, null)
                }), !1)
            }

            function o() {
                var n = [], i = !0;
                r(b.$asyncValidators, function (r, o) {
                    var s = r(t, e);
                    if (!s || !S(s.then))throw Lo("nopromise", s);
                    a(o, void 0), n.push(s.then(function () {
                        a(o, !0)
                    }, function () {
                        i = !1, a(o, !1)
                    }))
                }), n.length ? c.all(n).then(function () {
                    s(i)
                }, h) : s(!0)
            }

            function a(t, e) {
                u === x && b.$setValidity(t, e)
            }

            function s(t) {
                u === x && n(t)
            }

            x++;
            var u = x;
            (function () {
                var t = b.$$parserName || "parse";
                return v(f) ? (a(t, null), !0) : (f || (r(b.$validators, function (t, e) {
                    a(e, null)
                }), r(b.$asyncValidators, function (t, e) {
                    a(e, null)
                })), a(t, f), f)
            })() && i() ? o() : s(!1)
        }, this.$commitViewValue = function () {
            var t = b.$viewValue;
            s.cancel(y), (b.$$lastCommittedViewValue !== t || "" === t && b.$$hasNativeValidators) && (b.$$updateEmptyClasses(t), b.$$lastCommittedViewValue = t, b.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function () {
            var e = b.$$lastCommittedViewValue;
            if (f = !v(e) || void 0)for (var n = 0; n < b.$parsers.length; n++)if (e = b.$parsers[n](e), v(e)) {
                f = !1;
                break
            }
            cr(b.$modelValue) && (b.$modelValue = $(t));
            var r = b.$modelValue, i = b.$options && b.$options.allowInvalid;
            b.$$rawModelValue = e, i && (b.$modelValue = e, b.$modelValue !== r && b.$$writeModelToScope()), b.$$runValidators(e, b.$$lastCommittedViewValue, function (t) {
                i || (b.$modelValue = t ? e : void 0, b.$modelValue !== r && b.$$writeModelToScope())
            })
        }, this.$$writeModelToScope = function () {
            g(t, b.$modelValue), r(b.$viewChangeListeners, function (t) {
                try {
                    t()
                } catch (n) {
                    e(n)
                }
            })
        }, this.$setViewValue = function (t, e) {
            b.$viewValue = t, b.$options && !b.$options.updateOnDefault || b.$$debounceViewValueCommit(e)
        }, this.$$debounceViewValueCommit = function (e) {
            var n = 0, r = b.$options;
            r && m(r.debounce) && (r = r.debounce, w(r) ? n = r : w(r[e]) ? n = r[e] : w(r["default"]) && (n = r["default"])), s.cancel(y), n ? y = s(function () {
                b.$commitViewValue()
            }, n) : u.$$phase ? b.$commitViewValue() : t.$apply(function () {
                b.$commitViewValue()
            })
        }, t.$watch(function () {
            var e = $(t);
            if (e !== b.$modelValue && (b.$modelValue === b.$modelValue || e === e)) {
                b.$modelValue = b.$$rawModelValue = e, f = void 0;
                for (var n = b.$formatters, r = n.length, i = e; r--;)i = n[r](i);
                b.$viewValue !== i && (b.$$updateEmptyClasses(i), b.$viewValue = b.$$lastCommittedViewValue = i, b.$render(), b.$$runValidators(b.$modelValue, b.$viewValue, h))
            }
            return e
        })
    }], Ho = ["$rootScope", function (t) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: Bo,
            priority: 1,
            compile: function (e) {
                return e.addClass(Fo).addClass("ng-untouched").addClass(Ro), {
                    pre: function (t, e, n, r) {
                        var i = r[0];
                        e = r[1] || i.$$parentForm, i.$$setOptions(r[2] && r[2].$options), e.$addControl(i), n.$observe("name", function (t) {
                            i.$name !== t && i.$$parentForm.$$renameControl(i, t)
                        }), t.$on("$destroy", function () {
                            i.$$parentForm.$removeControl(i)
                        })
                    }, post: function (e, n, r, i) {
                        var o = i[0];
                        o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (t) {
                            o.$$debounceViewValueCommit(t && t.type)
                        }), n.on("blur", function () {
                            o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                        })
                    }
                }
            }
        }
    }], zo = /(\s+|^)default(\s+|$)/, Wo = function () {
        return {
            restrict: "A", controller: ["$scope", "$attrs", function (t, e) {
                var n = this;
                this.$options = j(t.$eval(e.ngModelOptions)), m(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = hr(this.$options.updateOn.replace(zo, function () {
                    return n.$options.updateOnDefault = !0, " "
                }))) : this.$options.updateOnDefault = !0
            }]
        }
    }, Go = jn({
        terminal: !0,
        priority: 1e3
    }), Zo = e("ngOptions"), Jo = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Ko = ["$compile", "$document", "$parse", function (e, i, o) {
        function a(t, e, r) {
            function i(t, e, n, r, i) {
                this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i
            }

            function a(t) {
                var e;
                if (!c && n(t))e = t; else {
                    e = [];
                    for (var r in t)t.hasOwnProperty(r) && "$" !== r.charAt(0) && e.push(r)
                }
                return e
            }

            var s = t.match(Jo);
            if (!s)throw Zo("iexp", t, L(e));
            var u = s[5] || s[7], c = s[6];
            t = / as /.test(s[0]) && s[1];
            var l = s[9];
            e = o(s[2] ? s[1] : u);
            var f = t && o(t) || e, h = l && o(l), p = l ? function (t, e) {
                return h(r, e)
            } : function (t) {
                return Dt(t)
            }, d = function (t, e) {
                return p(t, b(t, e))
            }, $ = o(s[2] || s[1]), v = o(s[3] || ""), m = o(s[4] || ""), g = o(s[8]), y = {}, b = c ? function (t, e) {
                return y[c] = e, y[u] = t, y
            } : function (t) {
                return y[u] = t, y
            };
            return {
                trackBy: l, getTrackByValue: d, getWatchables: o(g, function (t) {
                    var e = [];
                    t = t || [];
                    for (var n = a(t), i = n.length, o = 0; o < i; o++) {
                        var u = t === n ? o : n[o], c = t[u], u = b(c, u), c = p(c, u);
                        e.push(c), (s[2] || s[1]) && (c = $(r, u), e.push(c)), s[4] && (u = m(r, u), e.push(u))
                    }
                    return e
                }), getOptions: function () {
                    for (var t = [], e = {}, n = g(r) || [], o = a(n), s = o.length, u = 0; u < s; u++) {
                        var c = n === o ? u : o[u], h = b(n[c], c), y = f(r, h), c = p(y, h), w = $(r, h), x = v(r, h), h = m(r, h), y = new i(c, y, w, x, h);
                        t.push(y), e[c] = y
                    }
                    return {
                        items: t, selectValueMap: e, getOptionFromViewValue: function (t) {
                            return e[d(t)]
                        }, getViewValueFromOption: function (t) {
                            return l ? sr.copy(t.viewValue) : t.viewValue
                        }
                    }
                }
            }
        }

        var s = t.document.createElement("option"), u = t.document.createElement("optgroup");
        return {
            restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                pre: function (t, e, n, r) {
                    r[0].registerOption = h
                }, post: function (t, n, o, c) {
                    function l(t, e) {
                        t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), t.value !== e.value && (e.value = t.selectValue)
                    }

                    function f() {
                        var t = w && p.readValue();
                        if (w)for (var e = w.items.length - 1; 0 <= e; e--) {
                            var r = w.items[e];
                            Ot(m(r.group) ? r.element.parentNode : r.element)
                        }
                        w = x.getOptions();
                        var i = {};
                        y && n.prepend(h), w.items.forEach(function (t) {
                            var e;
                            if (m(t.group)) {
                                e = i[t.group], e || (e = u.cloneNode(!1), S.appendChild(e), e.label = null === t.group ? "null" : t.group, i[t.group] = e);
                                var n = s.cloneNode(!1)
                            } else e = S, n = s.cloneNode(!1);
                            e.appendChild(n), l(t, n)
                        }), n[0].appendChild(S), d.$render(), d.$isEmpty(t) || (e = p.readValue(), (x.trackBy || $ ? I(t, e) : t === e) || (d.$setViewValue(e), d.$render()))
                    }

                    var h, p = c[0], d = c[1], $ = o.multiple;
                    c = 0;
                    for (var v = n.children(), g = v.length; c < g; c++)if ("" === v[c].value) {
                        h = v.eq(c);
                        break
                    }
                    var y = !!h, b = Zn(s.cloneNode(!1));
                    b.val("?");
                    var w, x = a(o.ngOptions, n, t), S = i[0].createDocumentFragment(), C = function () {
                        y ? h.removeAttr("selected") : h.remove()
                    };
                    $ ? (d.$isEmpty = function (t) {
                        return !t || 0 === t.length
                    }, p.writeValue = function (t) {
                        w.items.forEach(function (t) {
                            t.element.selected = !1
                        }), t && t.forEach(function (t) {
                            (t = w.getOptionFromViewValue(t)) && (t.element.selected = !0)
                        })
                    }, p.readValue = function () {
                        var t = n.val() || [], e = [];
                        return r(t, function (t) {
                            (t = w.selectValueMap[t]) && !t.disabled && e.push(w.getViewValueFromOption(t))
                        }), e
                    }, x.trackBy && t.$watchCollection(function () {
                        if (lr(d.$viewValue))return d.$viewValue.map(function (t) {
                            return x.getTrackByValue(t)
                        })
                    }, function () {
                        d.$render()
                    })) : (p.writeValue = function (t) {
                        var e = w.selectValueMap[n.val()], r = w.getOptionFromViewValue(t);
                        e && e.element.removeAttribute("selected"), r ? (n[0].value !== r.selectValue && (b.remove(), C(), n[0].value = r.selectValue, r.element.selected = !0), r.element.setAttribute("selected", "selected")) : null === t || y ? (b.remove(), y || n.prepend(h), n.val(""), h.prop("selected", !0), h.attr("selected", !0)) : (C(), n.prepend(b), n.val("?"), b.prop("selected", !0), b.attr("selected", !0))
                    }, p.readValue = function () {
                        var t = w.selectValueMap[n.val()];
                        return t && !t.disabled ? (C(), b.remove(), w.getViewValueFromOption(t)) : null
                    }, x.trackBy && t.$watch(function () {
                        return x.getTrackByValue(d.$viewValue)
                    }, function () {
                        d.$render()
                    })), y ? (h.remove(), e(h)(t), h.removeClass("ng-scope")) : h = Zn(s.cloneNode(!1)), n.empty(), f(), t.$watchCollection(x.getWatchables, f)
                }
            }
        }
    }], Yo = ["$locale", "$interpolate", "$log", function (t, e, n) {
        var i = /{}/g, o = /^when(Minus)?(.+)$/;
        return {
            link: function (a, s, u) {
                function c(t) {
                    s.text(t || "")
                }

                var l, f = u.count, p = u.$attr.when && s.attr(u.$attr.when), d = u.offset || 0, $ = a.$eval(p) || {}, m = {}, g = e.startSymbol(), y = e.endSymbol(), b = g + f + "-" + d + y, w = sr.noop;
                r(u, function (t, e) {
                    var n = o.exec(e);
                    n && (n = (n[1] ? "-" : "") + Qn(n[2]), $[n] = s.attr(u.$attr[e]))
                }), r($, function (t, n) {
                    m[n] = e(t.replace(i, b))
                }), a.$watch(f, function (e) {
                    var r = parseFloat(e), i = cr(r);
                    i || r in $ || (r = t.pluralCat(r - d)), r === l || i && cr(l) || (w(), i = m[r], v(i) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + p), w = h, c()) : w = a.$watch(i, c), l = r)
                })
            }
        }
    }], Xo = ["$parse", "$animate", "$compile", function (t, i, o) {
        var a = e("ngRepeat"), s = function (t, e, n, r, i, o, a) {
            t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (e, u) {
                var c = u.ngRepeat, l = o.$$createComment("end ngRepeat", c), f = c.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!f)throw a("iexp", c);
                var h = f[1], p = f[2], d = f[3], $ = f[4], f = h.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!f)throw a("iidexp", h);
                var v = f[3] || f[1], m = f[2];
                if (d && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(d) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(d)))throw a("badident", d);
                var g, y, b, w, x = {$id: Dt};
                return $ ? g = t($) : (b = function (t, e) {
                    return Dt(e)
                }, w = function (t) {
                    return t
                }), function (t, e, o, u, f) {
                    g && (y = function (e, n, r) {
                        return m && (x[m] = e), x[v] = n, x.$index = r, g(t, x)
                    });
                    var h = at();
                    t.$watchCollection(p, function (o) {
                        var u, p, $, g, x, S, C, E, k, A, O = e[0], M = at();
                        if (d && (t[d] = o), n(o))E = o, p = y || b; else for (A in p = y || w, E = [], o)Xn.call(o, A) && "$" !== A.charAt(0) && E.push(A);
                        for (g = E.length, A = Array(g), u = 0; u < g; u++)if (x = o === E ? u : E[u], S = o[x], C = p(x, S, u), h[C])k = h[C], delete h[C], M[C] = k, A[u] = k; else {
                            if (M[C])throw r(A, function (t) {
                                t && t.scope && (h[t.id] = t)
                            }), a("dupes", c, C, S);
                            A[u] = {id: C, scope: void 0, clone: void 0}, M[C] = !0
                        }
                        for ($ in h) {
                            if (k = h[$], C = ot(k.clone), i.leave(C), C[0].parentNode)for (u = 0, p = C.length; u < p; u++)C[u].$$NG_REMOVED = !0;
                            k.scope.$destroy()
                        }
                        for (u = 0; u < g; u++)if (x = o === E ? u : E[u], S = o[x], k = A[u], k.scope) {
                            $ = O;
                            do $ = $.nextSibling; while ($ && $.$$NG_REMOVED);
                            k.clone[0] !== $ && i.move(ot(k.clone), null, O), O = k.clone[k.clone.length - 1], s(k.scope, u, v, S, m, x, g)
                        } else f(function (t, e) {
                            k.scope = e;
                            var n = l.cloneNode(!1);
                            t[t.length++] = n, i.enter(t, null, O), O = n, k.clone = t, M[k.id] = k, s(k.scope, u, v, S, m, x, g)
                        });
                        h = M
                    })
                }
            }
        }
    }], Qo = ["$animate", function (t) {
        return {
            restrict: "A", multiElement: !0, link: function (e, n, r) {
                e.$watch(r.ngShow, function (e) {
                    t[e ? "removeClass" : "addClass"](n, "ng-hide", {tempClasses: "ng-hide-animate"})
                })
            }
        }
    }], ta = ["$animate", function (t) {
        return {
            restrict: "A", multiElement: !0, link: function (e, n, r) {
                e.$watch(r.ngHide, function (e) {
                    t[e ? "addClass" : "removeClass"](n, "ng-hide", {tempClasses: "ng-hide-animate"})
                })
            }
        }
    }], ea = jn(function (t, e, n) {
        t.$watch(n.ngStyle, function (t, n) {
            n && t !== n && r(n, function (t, n) {
                e.css(n, "")
            }), t && e.css(t)
        }, !0)
    }), na = ["$animate", "$compile", function (t, e) {
        return {
            require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (n, i, o, a) {
                var s = [], u = [], c = [], l = [], f = function (t, e) {
                    return function () {
                        t.splice(e, 1)
                    }
                };
                n.$watch(o.ngSwitch || o.on, function (n) {
                    var i, o;
                    for (i = 0, o = c.length; i < o; ++i)t.cancel(c[i]);
                    for (i = c.length = 0, o = l.length; i < o; ++i) {
                        var h = ot(u[i].clone);
                        l[i].$destroy(), (c[i] = t.leave(h)).then(f(c, i))
                    }
                    u.length = 0, l.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && r(s, function (n) {
                        n.transclude(function (r, i) {
                            l.push(i);
                            var o = n.element;
                            r[r.length++] = e.$$createComment("end ngSwitchWhen"), u.push({clone: r}), t.enter(r, o.parent(), o)
                        })
                    })
                })
            }
        }
    }], ra = jn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (t, e, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: e
            })
        }
    }), ia = jn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (t, e, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
        }
    }), oa = e("ngTransclude"), aa = ["$compile", function (t) {
        return {
            restrict: "EAC", terminal: !0, compile: function (e) {
                var n = t(e.contents());
                return e.empty(), function (t, e, r, i, o) {
                    function a() {
                        n(t, function (t) {
                            e.append(t)
                        })
                    }

                    if (!o)throw oa("orphan", L(e));
                    r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = ""), r = r.ngTransclude || r.ngTranscludeSlot, o(function (t, n) {
                        t.length ? e.append(t) : (a(), n.$destroy())
                    }, null, r), r && !o.isSlotFilled(r) && a()
                }
            }
        }
    }], sa = ["$templateCache", function (t) {
        return {
            restrict: "E", terminal: !0, compile: function (e, n) {
                "text/ng-template" === n.type && t.put(n.id, e[0].text)
            }
        }
    }], ua = {$setViewValue: h, $render: h}, ca = ["$element", "$scope", function (e, n) {
        var r = this, i = new Pt;
        r.ngModelCtrl = ua, r.unknownOption = Zn(t.document.createElement("option")), r.renderUnknownOption = function (t) {
            t = "? " + Dt(t) + " ?", r.unknownOption.val(t), e.prepend(r.unknownOption), e.val(t)
        }, n.$on("$destroy", function () {
            r.renderUnknownOption = h
        }), r.removeUnknownOption = function () {
            r.unknownOption.parent() && r.unknownOption.remove()
        }, r.readValue = function () {
            return r.removeUnknownOption(), e.val()
        }, r.writeValue = function (t) {
            r.hasOption(t) ? (r.removeUnknownOption(), e.val(t), "" === t && r.emptyOption.prop("selected", !0)) : null == t && r.emptyOption ? (r.removeUnknownOption(), e.val("")) : r.renderUnknownOption(t)
        }, r.addOption = function (t, e) {
            if (8 !== e[0].nodeType) {
                rt(t, '"option value"'), "" === t && (r.emptyOption = e);
                var n = i.get(t) || 0;
                i.put(t, n + 1), r.ngModelCtrl.$render(), e[0].hasAttribute("selected") && (e[0].selected = !0)
            }
        }, r.removeOption = function (t) {
            var e = i.get(t);
            e && (1 === e ? (i.remove(t), "" === t && (r.emptyOption = void 0)) : i.put(t, e - 1))
        }, r.hasOption = function (t) {
            return !!i.get(t)
        }, r.registerOption = function (t, e, n, i, o) {
            if (i) {
                var a;
                n.$observe("value", function (t) {
                    m(a) && r.removeOption(a), a = t, r.addOption(t, e)
                })
            } else o ? t.$watch(o, function (t, i) {
                n.$set("value", t), i !== t && r.removeOption(i), r.addOption(t, e)
            }) : r.addOption(n.value, e);
            e.on("$destroy", function () {
                r.removeOption(n.value), r.ngModelCtrl.$render()
            })
        }
    }], la = function () {
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ca,
            priority: 1,
            link: {
                pre: function (t, e, n, i) {
                    var o = i[1];
                    if (o) {
                        var a = i[0];
                        if (a.ngModelCtrl = o, e.on("change", function () {
                                t.$apply(function () {
                                    o.$setViewValue(a.readValue())
                                })
                            }), n.multiple) {
                            a.readValue = function () {
                                var t = [];
                                return r(e.find("option"), function (e) {
                                    e.selected && t.push(e.value)
                                }), t
                            }, a.writeValue = function (t) {
                                var n = new Pt(t);
                                r(e.find("option"), function (t) {
                                    t.selected = m(n.get(t.value))
                                })
                            };
                            var s, u = NaN;
                            t.$watch(function () {
                                u !== o.$viewValue || I(s, o.$viewValue) || (s = ut(o.$viewValue), o.$render()), u = o.$viewValue
                            }), o.$isEmpty = function (t) {
                                return !t || 0 === t.length
                            }
                        }
                    }
                }, post: function (t, e, n, r) {
                    var i = r[1];
                    if (i) {
                        var o = r[0];
                        i.$render = function () {
                            o.writeValue(i.$viewValue)
                        }
                    }
                }
            }
        }
    }, fa = ["$interpolate", function (t) {
        return {
            restrict: "E", priority: 100, compile: function (e, n) {
                if (m(n.value))var r = t(n.value, !0); else {
                    var i = t(e.text(), !0);
                    i || n.$set("value", e.text())
                }
                return function (t, e, n) {
                    var o = e.parent();
                    (o = o.data("$selectController") || o.parent().data("$selectController")) && o.registerOption(t, e, n, r, i)
                }
            }
        }
    }], ha = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                r && (n.required = !0, r.$validators.required = function (t, e) {
                    return !n.required || !r.$isEmpty(e)
                }, n.$observe("required", function () {
                    r.$validate()
                }))
            }
        }
    }, pa = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, n, r, i) {
                if (i) {
                    var o, a = r.ngPattern || r.pattern;
                    r.$observe("pattern", function (t) {
                        if (b(t) && 0 < t.length && (t = new RegExp("^" + t + "$")), t && !t.test)throw e("ngPattern")("noregexp", a, t, L(n));
                        o = t || void 0, i.$validate()
                    }), i.$validators.pattern = function (t, e) {
                        return i.$isEmpty(e) || v(o) || o.test(e)
                    }
                }
            }
        }
    }, da = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    var i = -1;
                    n.$observe("maxlength", function (t) {
                        t = l(t), i = cr(t) ? -1 : t, r.$validate()
                    }), r.$validators.maxlength = function (t, e) {
                        return 0 > i || r.$isEmpty(e) || e.length <= i
                    }
                }
            }
        }
    }, $a = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    var i = 0;
                    n.$observe("minlength", function (t) {
                        i = l(t) || 0, r.$validate()
                    }), r.$validators.minlength = function (t, e) {
                        return r.$isEmpty(e) || e.length >= i
                    }
                }
            }
        }
    };
    t.angular.bootstrap ? t.console && console.log("WARNING: Tried to load angular more than once.") : (tt(),
        ct(sr), sr.module("ngLocale", [], ["$provide", function (t) {
        function e(t) {
            t += "";
            var e = t.indexOf(".");
            return -1 == e ? 0 : t.length - e - 1
        }

        t.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (t, n) {
                var r = 0 | t, i = n;
                return void 0 === i && (i = Math.min(e(t), 3)), Math.pow(10, i), 1 == r && 0 == i ? "one" : "other"
            }
        })
    }]), Zn(t.document).ready(function () {
        J(t.document, K)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.debounce", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html", "uib/template/accordion/accordion.html", "uib/template/alert/alert.html", "uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/datepicker/datepicker.html", "uib/template/datepicker/day.html", "uib/template/datepicker/month.html", "uib/template/datepicker/popup.html", "uib/template/datepicker/year.html", "uib/template/modal/backdrop.html", "uib/template/modal/window.html", "uib/template/pager/pager.html", "uib/template/pagination/pagination.html", "uib/template/tooltip/tooltip-html-popup.html", "uib/template/tooltip/tooltip-popup.html", "uib/template/tooltip/tooltip-template-popup.html", "uib/template/popover/popover-html.html", "uib/template/popover/popover-template.html", "uib/template/popover/popover.html", "uib/template/progressbar/bar.html", "uib/template/progressbar/progress.html", "uib/template/progressbar/progressbar.html", "uib/template/rating/rating.html", "uib/template/tabs/tab.html", "uib/template/tabs/tabset.html", "uib/template/timepicker/timepicker.html", "uib/template/typeahead/typeahead-match.html", "uib/template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$injector", function (e, t) {
    var n = t.has("$animateCss") ? t.get("$animateCss") : null;
    return {
        link: function (t, a, i) {
            function o() {
                a.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), n ? n(a, {
                    addClass: "in",
                    easing: "ease",
                    to: {height: a[0].scrollHeight + "px"}
                }).start()["finally"](r) : e.addClass(a, "in", {to: {height: a[0].scrollHeight + "px"}}).then(r)
            }

            function r() {
                a.removeClass("collapsing").addClass("collapse").css({height: "auto"})
            }

            function l() {
                return a.hasClass("collapse") || a.hasClass("in") ? (a.css({height: a[0].scrollHeight + "px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), void(n ? n(a, {
                    removeClass: "in",
                    to: {height: "0"}
                }).start()["finally"](s) : e.removeClass(a, "in", {to: {height: "0"}}).then(s))) : s()
            }

            function s() {
                a.css({height: "0"}), a.removeClass("collapsing").addClass("collapse")
            }

            t.$eval(i.uibCollapse) || a.addClass("in").addClass("collapse").css({height: "auto"}), t.$watch(i.uibCollapse, function (e) {
                e ? l() : o()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("uibAccordionConfig", {closeOthers: !0}).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function (e, t, n) {
    this.groups = [], this.closeOthers = function (a) {
        var i = angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers;
        i && angular.forEach(this.groups, function (e) {
            e !== a && (e.isOpen = !1)
        })
    }, this.addGroup = function (e) {
        var t = this;
        this.groups.push(e), e.$on("$destroy", function (n) {
            t.removeGroup(e)
        })
    }, this.removeGroup = function (e) {
        var t = this.groups.indexOf(e);
        -1 !== t && this.groups.splice(t, 1)
    }
}]).directive("uibAccordion", function () {
    return {
        controller: "UibAccordionController",
        controllerAs: "accordion",
        transclude: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/accordion/accordion.html"
        }
    }
}).directive("uibAccordionGroup", function () {
    return {
        require: "^uibAccordion", transclude: !0, replace: !0, templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/accordion/accordion-group.html"
        }, scope: {heading: "@", isOpen: "=?", isDisabled: "=?"}, controller: function () {
            this.setHeading = function (e) {
                this.heading = e
            }
        }, link: function (e, t, n, a) {
            a.addGroup(e), e.openClass = n.openClass || "panel-open", e.panelClass = n.panelClass || "panel-default", e.$watch("isOpen", function (n) {
                t.toggleClass(e.openClass, !!n), n && a.closeOthers(e)
            }), e.toggleOpen = function (t) {
                e.isDisabled || t && 32 !== t.which || (e.isOpen = !e.isOpen)
            }
        }
    }
}).directive("uibAccordionHeading", function () {
    return {
        transclude: !0, template: "", replace: !0, require: "^uibAccordionGroup", link: function (e, t, n, a, i) {
            a.setHeading(i(e, angular.noop))
        }
    }
}).directive("uibAccordionTransclude", function () {
    return {
        require: "^uibAccordionGroup", link: function (e, t, n, a) {
            e.$watch(function () {
                return a[n.uibAccordionTransclude]
            }, function (e) {
                e && (t.find("span").html(""), t.find("span").append(e))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$attrs", "$interpolate", "$timeout", function (e, t, n, a) {
    e.closeable = !!t.close;
    var i = angular.isDefined(t.dismissOnTimeout) ? n(t.dismissOnTimeout)(e.$parent) : null;
    i && a(function () {
        e.close()
    }, parseInt(i, 10))
}]).directive("uibAlert", function () {
    return {
        controller: "UibAlertController", controllerAs: "alert", templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/alert/alert.html"
        }, transclude: !0, replace: !0, scope: {type: "@", close: "&"}
    }
}), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("UibButtonsController", ["uibButtonConfig", function (e) {
    this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click"
}]).directive("uibBtnRadio", ["$parse", function (e) {
    return {
        require: ["uibBtnRadio", "ngModel"],
        controller: "UibButtonsController",
        controllerAs: "buttons",
        link: function (t, n, a, i) {
            var o = i[0], r = i[1], l = e(a.uibUncheckable);
            n.find("input").css({display: "none"}), r.$render = function () {
                n.toggleClass(o.activeClass, angular.equals(r.$modelValue, t.$eval(a.uibBtnRadio)))
            }, n.on(o.toggleEvent, function () {
                if (!a.disabled) {
                    var e = n.hasClass(o.activeClass);
                    (!e || angular.isDefined(a.uncheckable)) && t.$apply(function () {
                        r.$setViewValue(e ? null : t.$eval(a.uibBtnRadio)), r.$render()
                    })
                }
            }), a.uibUncheckable && t.$watch(l, function (e) {
                a.$set("uncheckable", e ? "" : null)
            })
        }
    }
}]).directive("uibBtnCheckbox", function () {
    return {
        require: ["uibBtnCheckbox", "ngModel"],
        controller: "UibButtonsController",
        controllerAs: "button",
        link: function (e, t, n, a) {
            function i() {
                return r(n.btnCheckboxTrue, !0)
            }

            function o() {
                return r(n.btnCheckboxFalse, !1)
            }

            function r(t, n) {
                return angular.isDefined(t) ? e.$eval(t) : n
            }

            var l = a[0], s = a[1];
            t.find("input").css({display: "none"}), s.$render = function () {
                t.toggleClass(l.activeClass, angular.equals(s.$modelValue, i()))
            }, t.on(l.toggleEvent, function () {
                n.disabled || e.$apply(function () {
                    s.$setViewValue(t.hasClass(l.activeClass) ? o() : i()), s.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (e, t, n, a, i) {
    function o() {
        for (; v.length;)v.shift()
    }

    function r(e) {
        if (angular.isUndefined(h[e].index))return h[e];
        for (var t = 0, n = h.length; n > t; ++t)if (h[t].index === e)return h[t]
    }

    function l(n, a, r) {
        $ || (angular.extend(n, {direction: r, active: !0}), angular.extend(f.currentSlide || {}, {
            direction: r,
            active: !1
        }), i.enabled(t) && !e.$currentTransition && n.$element && f.slides.length > 1 && (n.$element.data(g, n.direction), f.currentSlide && f.currentSlide.$element && f.currentSlide.$element.data(g, n.direction), e.$currentTransition = !0, i.on("addClass", n.$element, function (t, n) {
            if ("close" === n && (e.$currentTransition = null, i.off("addClass", t), v.length)) {
                var a = v.pop(), r = e.indexOfSlide(a), s = r > f.getCurrentIndex() ? "next" : "prev";
                o(), l(a, r, s)
            }
        })), f.currentSlide = n, b = a, c())
    }

    function s() {
        d && (n.cancel(d), d = null)
    }

    function u(t) {
        t.length || (e.$currentTransition = null, o())
    }

    function c() {
        s();
        var t = +e.interval;
        !isNaN(t) && t > 0 && (d = n(p, t))
    }

    function p() {
        var t = +e.interval;
        m && !isNaN(t) && t > 0 && h.length ? e.next() : e.pause()
    }

    var d, m, f = this, h = f.slides = e.slides = [], g = "uib-slideDirection", b = -1, v = [];
    f.currentSlide = null;
    var $ = !1;
    f.addSlide = function (t, n) {
        t.$element = n, h.push(t), 1 === h.length || t.active ? (e.$currentTransition && (e.$currentTransition = null), f.select(h[h.length - 1]), 1 === h.length && e.play()) : t.active = !1
    }, f.getCurrentIndex = function () {
        return f.currentSlide && angular.isDefined(f.currentSlide.index) ? +f.currentSlide.index : b
    }, f.next = e.next = function () {
        var t = (f.getCurrentIndex() + 1) % h.length;
        return 0 === t && e.noWrap() ? void e.pause() : f.select(r(t), "next")
    }, f.prev = e.prev = function () {
        var t = f.getCurrentIndex() - 1 < 0 ? h.length - 1 : f.getCurrentIndex() - 1;
        return e.noWrap() && t === h.length - 1 ? void e.pause() : f.select(r(t), "prev")
    }, f.removeSlide = function (e) {
        angular.isDefined(e.index) && h.sort(function (e, t) {
            return +e.index > +t.index
        });
        var t = v.indexOf(e);
        -1 !== t && v.splice(t, 1);
        var n = h.indexOf(e);
        h.splice(n, 1), a(function () {
            h.length > 0 && e.active ? n >= h.length ? f.select(h[n - 1]) : f.select(h[n]) : b > n && b--
        }), 0 === h.length && (f.currentSlide = null, o())
    }, f.select = e.select = function (t, n) {
        var a = e.indexOfSlide(t);
        void 0 === n && (n = a > f.getCurrentIndex() ? "next" : "prev"), t && t !== f.currentSlide && !e.$currentTransition ? l(t, a, n) : t && t !== f.currentSlide && e.$currentTransition && (v.push(t), t.active = !1)
    }, e.indexOfSlide = function (e) {
        return angular.isDefined(e.index) ? +e.index : h.indexOf(e)
    }, e.isActive = function (e) {
        return f.currentSlide === e
    }, e.pause = function () {
        e.noPause || (m = !1, s())
    }, e.play = function () {
        m || (m = !0, c())
    }, e.$on("$destroy", function () {
        $ = !0, s()
    }), e.$watch("noTransition", function (e) {
        i.enabled(t, !e)
    }), e.$watch("interval", c), e.$watchCollection("slides", u)
}]).directive("uibCarousel", function () {
    return {
        transclude: !0,
        replace: !0,
        controller: "UibCarouselController",
        controllerAs: "carousel",
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/carousel/carousel.html"
        },
        scope: {interval: "=", noTransition: "=", noPause: "=", noWrap: "&"}
    }
}).directive("uibSlide", function () {
    return {
        require: "^uibCarousel", transclude: !0, replace: !0, templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/carousel/slide.html"
        }, scope: {active: "=?", actual: "=?", index: "=?"}, link: function (e, t, n, a) {
            a.addSlide(e, t), e.$on("$destroy", function () {
                a.removeSlide(e)
            }), e.$watch("active", function (t) {
                t && a.select(e)
            })
        }
    }
}).animation(".item", ["$animateCss", function (e) {
    function t(e, t, n) {
        e.removeClass(t), n && n()
    }

    var n = "uib-slideDirection";
    return {
        beforeAddClass: function (a, i, o) {
            if ("active" === i) {
                var r = !1, l = a.data(n), s = "next" === l ? "left" : "right", u = t.bind(this, a, s + " " + l, o);
                return a.addClass(l), e(a, {addClass: s}).start().done(u), function () {
                    r = !0
                }
            }
            o()
        }, beforeRemoveClass: function (a, i, o) {
            if ("active" === i) {
                var r = !1, l = a.data(n), s = "next" === l ? "left" : "right", u = t.bind(this, a, s, o);
                return e(a, {addClass: s}).start().done(u), function () {
                    r = !0
                }
            }
            o()
        }
    }
}]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "orderByFilter", function (e, t, n) {
    function a(e) {
        var t = [], a = e.split(""), i = e.indexOf("'");
        if (i > -1) {
            var o = !1;
            e = e.split("");
            for (var r = i; r < e.length; r++)o ? ("'" === e[r] && (r + 1 < e.length && "'" === e[r + 1] ? (e[r + 1] = "$", a[r + 1] = "") : (a[r] = "", o = !1)), e[r] = "$") : "'" === e[r] && (e[r] = "$", a[r] = "", o = !0);
            e = e.join("")
        }
        return angular.forEach(d, function (n) {
            var i = e.indexOf(n.key);
            if (i > -1) {
                e = e.split(""), a[i] = "(" + n.regex + ")", e[i] = "$";
                for (var o = i + 1, r = i + n.key.length; r > o; o++)a[o] = "", e[o] = "$";
                e = e.join(""), t.push({index: i, apply: n.apply, matcher: n.regex})
            }
        }), {regex: new RegExp("^" + a.join("") + "$"), map: n(t, "index")}
    }

    function i(e, t, n) {
        return !(1 > n) && (1 === t && n > 28 ? 29 === n && (e % 4 === 0 && e % 100 !== 0 || e % 400 === 0) : 3 !== t && 5 !== t && 8 !== t && 10 !== t || 31 > n)
    }

    function o(e) {
        return parseInt(e, 10)
    }

    function r(e, t) {
        return e && t ? c(e, t) : e
    }

    function l(e, t) {
        return e && t ? c(e, t, !0) : e
    }

    function s(e, t) {
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
    }

    function u(e, t) {
        return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
    }

    function c(e, t, n) {
        n = n ? -1 : 1;
        var a = s(t, e.getTimezoneOffset());
        return u(e, n * (a - e.getTimezoneOffset()))
    }

    var p, d, m = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    this.init = function () {
        p = t.id, this.parsers = {}, d = [{
            key: "yyyy", regex: "\\d{4}", apply: function (e) {
                this.year = +e
            }
        }, {
            key: "yy", regex: "\\d{2}", apply: function (e) {
                this.year = +e + 2e3
            }
        }, {
            key: "y", regex: "\\d{1,4}", apply: function (e) {
                this.year = +e
            }
        }, {
            key: "M!", regex: "0?[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, {
            key: "MMMM", regex: t.DATETIME_FORMATS.MONTH.join("|"), apply: function (e) {
                this.month = t.DATETIME_FORMATS.MONTH.indexOf(e)
            }
        }, {
            key: "MMM", regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (e) {
                this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)
            }
        }, {
            key: "MM", regex: "0[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, {
            key: "M", regex: "[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, {
            key: "d!", regex: "[0-2]?[0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, {
            key: "dd", regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, {
            key: "d", regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, {key: "EEEE", regex: t.DATETIME_FORMATS.DAY.join("|")}, {
            key: "EEE",
            regex: t.DATETIME_FORMATS.SHORTDAY.join("|")
        }, {
            key: "HH", regex: "(?:0|1)[0-9]|2[0-3]", apply: function (e) {
                this.hours = +e
            }
        }, {
            key: "hh", regex: "0[0-9]|1[0-2]", apply: function (e) {
                this.hours = +e
            }
        }, {
            key: "H", regex: "1?[0-9]|2[0-3]", apply: function (e) {
                this.hours = +e
            }
        }, {
            key: "h", regex: "[0-9]|1[0-2]", apply: function (e) {
                this.hours = +e
            }
        }, {
            key: "mm", regex: "[0-5][0-9]", apply: function (e) {
                this.minutes = +e
            }
        }, {
            key: "m", regex: "[0-9]|[1-5][0-9]", apply: function (e) {
                this.minutes = +e
            }
        }, {
            key: "sss", regex: "[0-9][0-9][0-9]", apply: function (e) {
                this.milliseconds = +e
            }
        }, {
            key: "ss", regex: "[0-5][0-9]", apply: function (e) {
                this.seconds = +e
            }
        }, {
            key: "s", regex: "[0-9]|[1-5][0-9]", apply: function (e) {
                this.seconds = +e
            }
        }, {
            key: "a", regex: t.DATETIME_FORMATS.AMPMS.join("|"), apply: function (e) {
                12 === this.hours && (this.hours = 0), "PM" === e && (this.hours += 12)
            }
        }, {
            key: "Z", regex: "[+-]\\d{4}", apply: function (e) {
                var t = e.match(/([+-])(\d{2})(\d{2})/), n = t[1], a = t[2], i = t[3];
                this.hours += o(n + a), this.minutes += o(n + i)
            }
        }, {key: "ww", regex: "[0-4][0-9]|5[0-3]"}, {key: "w", regex: "[0-9]|[1-4][0-9]|5[0-3]"}, {
            key: "GGGG",
            regex: t.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g, "\\s")
        }, {key: "GGG", regex: t.DATETIME_FORMATS.ERAS.join("|")}, {
            key: "GG",
            regex: t.DATETIME_FORMATS.ERAS.join("|")
        }, {key: "G", regex: t.DATETIME_FORMATS.ERAS.join("|")}]
    }, this.init(), this.parse = function (n, o, r) {
        if (!angular.isString(n) || !o)return n;
        o = t.DATETIME_FORMATS[o] || o, o = o.replace(m, "\\$&"), t.id !== p && this.init(), this.parsers[o] || (this.parsers[o] = a(o));
        var l = this.parsers[o], s = l.regex, u = l.map, c = n.match(s), d = !1;
        if (c && c.length) {
            var f, h;
            angular.isDate(r) && !isNaN(r.getTime()) ? f = {
                year: r.getFullYear(),
                month: r.getMonth(),
                date: r.getDate(),
                hours: r.getHours(),
                minutes: r.getMinutes(),
                seconds: r.getSeconds(),
                milliseconds: r.getMilliseconds()
            } : (r && e.warn("dateparser:", "baseDate is not a valid date"), f = {
                year: 1900,
                month: 0,
                date: 1,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            });
            for (var g = 1, b = c.length; b > g; g++) {
                var v = u[g - 1];
                "Z" === v.matcher && (d = !0), v.apply && v.apply.call(f, c[g])
            }
            var $ = d ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear, y = d ? Date.prototype.setUTCHours : Date.prototype.setHours;
            return i(f.year, f.month, f.date) && (!angular.isDate(r) || isNaN(r.getTime()) || d ? (h = new Date(0), $.call(h, f.year, f.month, f.date), y.call(h, f.hours || 0, f.minutes || 0, f.seconds || 0, f.milliseconds || 0)) : (h = new Date(r), $.call(h, f.year, f.month, f.date), y.call(h, f.hours, f.minutes, f.seconds, f.milliseconds))), h
        }
    }, this.toTimezone = r, this.fromTimezone = l, this.timezoneToOffset = s, this.addDateMinutes = u, this.convertTimezoneToLocal = c
}]), angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", ["$animate", function (e) {
    var t = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/, n = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
    return {
        restrict: "A", compile: function (a, i) {
            function o(e, t, n) {
                s.push(e), u.push({scope: e, element: t}), f.forEach(function (t, n) {
                    r(t, e)
                }), e.$on("$destroy", l)
            }

            function r(t, a) {
                var i = t.match(n), o = a.$eval(i[1]), r = i[2], l = c[t];
                if (!l) {
                    var s = function (t) {
                        var n = null;
                        u.some(function (e) {
                            var a = e.scope.$eval(d);
                            return a === t ? (n = e, !0) : void 0
                        }), l.lastActivated !== n && (l.lastActivated && e.removeClass(l.lastActivated.element, o), n && e.addClass(n.element, o), l.lastActivated = n)
                    };
                    c[t] = l = {lastActivated: null, scope: a, watchFn: s, compareWithExp: r, watcher: a.$watch(r, s)}
                }
                l.watchFn(a.$eval(r))
            }

            function l(e) {
                var t = e.targetScope, n = s.indexOf(t);
                if (s.splice(n, 1), u.splice(n, 1), s.length) {
                    var a = s[0];
                    angular.forEach(c, function (e) {
                        e.scope === t && (e.watcher = a.$watch(e.compareWithExp, e.watchFn), e.scope = a)
                    })
                } else c = {}
            }

            var s = [], u = [], c = {}, p = i.uibIsClass.match(t), d = p[2], m = p[1], f = m.split(",");
            return o
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (e, t) {
    var n, a = {normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/}, i = {
        auto: /\s?auto?\s?/i,
        primary: /^(top|bottom|left|right)$/,
        secondary: /^(top|bottom|left|right|center)$/,
        vertical: /^(top|bottom)$/
    };
    return {
        getRawNode: function (e) {
            return e[0] || e
        }, parseStyle: function (e) {
            return e = parseFloat(e), isFinite(e) ? e : 0
        }, offsetParent: function (n) {
            function a(e) {
                return "static" === (t.getComputedStyle(e).position || "static")
            }

            n = this.getRawNode(n);
            for (var i = n.offsetParent || e[0].documentElement; i && i !== e[0].documentElement && a(i);)i = i.offsetParent;
            return i || e[0].documentElement
        }, scrollbarWidth: function () {
            if (angular.isUndefined(n)) {
                var t = angular.element('<div style="position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;"></div>');
                e.find("body").append(t), n = t[0].offsetWidth - t[0].clientWidth, n = isFinite(n) ? n : 0, t.remove()
            }
            return n
        }, scrollParent: function (n, i) {
            n = this.getRawNode(n);
            var o = i ? a.hidden : a.normal, r = e[0].documentElement, l = t.getComputedStyle(n), s = "absolute" === l.position, u = n.parentElement || r;
            if (u === r || "fixed" === l.position)return r;
            for (; u.parentElement && u !== r;) {
                var c = t.getComputedStyle(u);
                if (s && "static" !== c.position && (s = !1), !s && o.test(c.overflow + c.overflowY + c.overflowX))break;
                u = u.parentElement
            }
            return u
        }, position: function (n, a) {
            n = this.getRawNode(n);
            var i = this.offset(n);
            if (a) {
                var o = t.getComputedStyle(n);
                i.top -= this.parseStyle(o.marginTop), i.left -= this.parseStyle(o.marginLeft)
            }
            var r = this.offsetParent(n), l = {top: 0, left: 0};
            return r !== e[0].documentElement && (l = this.offset(r), l.top += r.clientTop - r.scrollTop, l.left += r.clientLeft - r.scrollLeft), {
                width: Math.round(angular.isNumber(i.width) ? i.width : n.offsetWidth),
                height: Math.round(angular.isNumber(i.height) ? i.height : n.offsetHeight),
                top: Math.round(i.top - l.top),
                left: Math.round(i.left - l.left)
            }
        }, offset: function (n) {
            n = this.getRawNode(n);
            var a = n.getBoundingClientRect();
            return {
                width: Math.round(angular.isNumber(a.width) ? a.width : n.offsetWidth),
                height: Math.round(angular.isNumber(a.height) ? a.height : n.offsetHeight),
                top: Math.round(a.top + (t.pageYOffset || e[0].documentElement.scrollTop)),
                left: Math.round(a.left + (t.pageXOffset || e[0].documentElement.scrollLeft))
            }
        }, viewportOffset: function (n, a, i) {
            n = this.getRawNode(n), i = i !== !1;
            var o = n.getBoundingClientRect(), r = {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }, l = a ? e[0].documentElement : this.scrollParent(n), s = l.getBoundingClientRect();
            if (r.top = s.top + l.clientTop, r.left = s.left + l.clientLeft, l === e[0].documentElement && (r.top += t.pageYOffset, r.left += t.pageXOffset), r.bottom = r.top + l.clientHeight, r.right = r.left + l.clientWidth, i) {
                var u = t.getComputedStyle(l);
                r.top += this.parseStyle(u.paddingTop), r.bottom -= this.parseStyle(u.paddingBottom), r.left += this.parseStyle(u.paddingLeft), r.right -= this.parseStyle(u.paddingRight)
            }
            return {
                top: Math.round(o.top - r.top),
                bottom: Math.round(r.bottom - o.bottom),
                left: Math.round(o.left - r.left),
                right: Math.round(r.right - o.right)
            }
        }, parsePlacement: function (e) {
            var t = i.auto.test(e);
            return t && (e = e.replace(i.auto, "")), e = e.split("-"), e[0] = e[0] || "top", i.primary.test(e[0]) || (e[0] = "top"), e[1] = e[1] || "center", i.secondary.test(e[1]) || (e[1] = "center"), t ? e[2] = !0 : e[2] = !1, e
        }, positionElements: function (e, n, a, o) {
            e = this.getRawNode(e), n = this.getRawNode(n);
            var r = angular.isDefined(n.offsetWidth) ? n.offsetWidth : n.prop("offsetWidth"), l = angular.isDefined(n.offsetHeight) ? n.offsetHeight : n.prop("offsetHeight");
            a = this.parsePlacement(a);
            var s = o ? this.offset(e) : this.position(e), u = {top: 0, left: 0, placement: ""};
            if (a[2]) {
                var c = this.viewportOffset(e), p = t.getComputedStyle(n), d = {
                    width: r + Math.round(Math.abs(this.parseStyle(p.marginLeft) + this.parseStyle(p.marginRight))),
                    height: l + Math.round(Math.abs(this.parseStyle(p.marginTop) + this.parseStyle(p.marginBottom)))
                };
                if (a[0] = "top" === a[0] && d.height > c.top && d.height <= c.bottom ? "bottom" : "bottom" === a[0] && d.height > c.bottom && d.height <= c.top ? "top" : "left" === a[0] && d.width > c.left && d.width <= c.right ? "right" : "right" === a[0] && d.width > c.right && d.width <= c.left ? "left" : a[0], a[1] = "top" === a[1] && d.height - s.height > c.bottom && d.height - s.height <= c.top ? "bottom" : "bottom" === a[1] && d.height - s.height > c.top && d.height - s.height <= c.bottom ? "top" : "left" === a[1] && d.width - s.width > c.right && d.width - s.width <= c.left ? "right" : "right" === a[1] && d.width - s.width > c.left && d.width - s.width <= c.right ? "left" : a[1], "center" === a[1])if (i.vertical.test(a[0])) {
                    var m = s.width / 2 - r / 2;
                    c.left + m < 0 && d.width - s.width <= c.right ? a[1] = "left" : c.right + m < 0 && d.width - s.width <= c.left && (a[1] = "right")
                } else {
                    var f = s.height / 2 - d.height / 2;
                    c.top + f < 0 && d.height - s.height <= c.bottom ? a[1] = "top" : c.bottom + f < 0 && d.height - s.height <= c.top && (a[1] = "bottom")
                }
            }
            switch (a[0]) {
                case"top":
                    u.top = s.top - l;
                    break;
                case"bottom":
                    u.top = s.top + s.height;
                    break;
                case"left":
                    u.left = s.left - r;
                    break;
                case"right":
                    u.left = s.left + s.width
            }
            switch (a[1]) {
                case"top":
                    u.top = s.top;
                    break;
                case"bottom":
                    u.top = s.top + s.height - l;
                    break;
                case"left":
                    u.left = s.left;
                    break;
                case"right":
                    u.left = s.left + s.width - r;
                    break;
                case"center":
                    i.vertical.test(a[0]) ? u.left = s.left + s.width / 2 - r / 2 : u.top = s.top + s.height / 2 - l / 2
            }
            return u.top = Math.round(u.top), u.left = Math.round(u.left), u.placement = "center" === a[1] ? a[0] : a[0] + "-" + a[1], u
        }, positionArrow: function (e, n) {
            e = this.getRawNode(e);
            var a = !0, o = e.querySelector(".tooltip-inner");
            if (o || (a = !1, o = e.querySelector(".popover-inner")), o) {
                var r = a ? e.querySelector(".tooltip-arrow") : e.querySelector(".arrow");
                if (r) {
                    if (n = this.parsePlacement(n), "center" === n[1])return void angular.element(r).css({
                        top: "",
                        bottom: "",
                        right: "",
                        left: "",
                        margin: ""
                    });
                    var l = "border-" + n[0] + "-width", s = t.getComputedStyle(r)[l], u = "border-";
                    u += i.vertical.test(n[0]) ? n[0] + "-" + n[1] : n[1] + "-" + n[0], u += "-radius";
                    var c = t.getComputedStyle(a ? o : e)[u], p = {
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto",
                        margin: 0
                    };
                    switch (n[0]) {
                        case"top":
                            p.bottom = a ? "0" : "-" + s;
                            break;
                        case"bottom":
                            p.top = a ? "0" : "-" + s;
                            break;
                        case"left":
                            p.right = a ? "0" : "-" + s;
                            break;
                        case"right":
                            p.left = a ? "0" : "-" + s
                    }
                    p[n[1]] = c, angular.element(r).css(p)
                }
            }
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.position"]).value("$datepickerSuppressError", !1).constant("uibDatepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRows: 4,
    yearColumns: 5,
    minDate: null,
    maxDate: null,
    shortcutPropagation: !1,
    ngModelOptions: {}
}).controller("UibDatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerSuppressError", "uibDateParser", function (e, t, n, a, i, o, r, l, s) {
    var u = this, c = {$setViewValue: angular.noop}, p = {};
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle"], function (n) {
        u[n] = angular.isDefined(t[n]) ? a(t[n])(e.$parent) : r[n]
    }), angular.forEach(["showWeeks", "startingDay", "yearRows", "yearColumns", "shortcutPropagation"], function (n) {
        u[n] = angular.isDefined(t[n]) ? e.$parent.$eval(t[n]) : r[n]
    }), angular.forEach(["minDate", "maxDate"], function (n) {
        t[n] ? e.$parent.$watch(t[n], function (e) {
            u[n] = e ? angular.isDate(e) ? s.fromTimezone(new Date(e), p.timezone) : new Date(o(e, "medium")) : null, u.refreshView()
        }) : u[n] = r[n] ? s.fromTimezone(new Date(r[n]), p.timezone) : null
    }), angular.forEach(["minMode", "maxMode"], function (n) {
        t[n] ? e.$parent.$watch(t[n], function (a) {
            u[n] = e[n] = angular.isDefined(a) ? a : t[n], ("minMode" === n && u.modes.indexOf(e.datepickerMode) < u.modes.indexOf(u[n]) || "maxMode" === n && u.modes.indexOf(e.datepickerMode) > u.modes.indexOf(u[n])) && (e.datepickerMode = u[n])
        }) : u[n] = e[n] = r[n] || null
    }), e.datepickerMode = e.datepickerMode || r.datepickerMode, e.uniqueId = "datepicker-" + e.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(t.initDate) ? (this.activeDate = s.fromTimezone(e.$parent.$eval(t.initDate), p.timezone) || new Date, e.$parent.$watch(t.initDate, function (e) {
        e && (c.$isEmpty(c.$modelValue) || c.$invalid) && (u.activeDate = s.fromTimezone(e, p.timezone), u.refreshView())
    })) : this.activeDate = new Date, e.disabled = angular.isDefined(t.disabled) || !1, angular.isDefined(t.ngDisabled) && e.$parent.$watch(t.ngDisabled, function (t) {
        e.disabled = t, u.refreshView()
    }), e.isActive = function (t) {
        return 0 === u.compare(t.date, u.activeDate) && (e.activeDateId = t.uid, !0)
    }, this.init = function (e) {
        c = e, p = e.$options || r.ngModelOptions, c.$modelValue && (this.activeDate = c.$modelValue), c.$render = function () {
            u.render()
        }
    }, this.render = function () {
        if (c.$viewValue) {
            var e = new Date(c.$viewValue), t = !isNaN(e);
            t ? this.activeDate = s.fromTimezone(e, p.timezone) : l || i.error('Datepicker directive: "ng-model" value must be a Date object')
        }
        this.refreshView()
    }, this.refreshView = function () {
        if (this.element) {
            e.selectedDt = null, this._refreshView(), e.activeDt && (e.activeDateId = e.activeDt.uid);
            var t = c.$viewValue ? new Date(c.$viewValue) : null;
            t = s.fromTimezone(t, p.timezone), c.$setValidity("dateDisabled", !t || this.element && !this.isDisabled(t))
        }
    }, this.createDateObject = function (t, n) {
        var a = c.$viewValue ? new Date(c.$viewValue) : null;
        a = s.fromTimezone(a, p.timezone);
        var i = {
            date: t,
            label: o(t, n.replace(/d!/, "dd")).replace(/M!/, "MM"),
            selected: a && 0 === this.compare(t, a),
            disabled: this.isDisabled(t),
            current: 0 === this.compare(t, new Date),
            customClass: this.customClass(t) || null
        };
        return a && 0 === this.compare(t, a) && (e.selectedDt = i), u.activeDate && 0 === this.compare(i.date, u.activeDate) && (e.activeDt = i), i
    }, this.isDisabled = function (n) {
        return e.disabled || this.minDate && this.compare(n, this.minDate) < 0 || this.maxDate && this.compare(n, this.maxDate) > 0 || t.dateDisabled && e.dateDisabled({
                date: n,
                mode: e.datepickerMode
            })
    }, this.customClass = function (t) {
        return e.customClass({date: t, mode: e.datepickerMode})
    }, this.split = function (e, t) {
        for (var n = []; e.length > 0;)n.push(e.splice(0, t));
        return n
    }, e.select = function (t) {
        if (e.datepickerMode === u.minMode) {
            var n = c.$viewValue ? s.fromTimezone(new Date(c.$viewValue), p.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
            n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n = s.toTimezone(n, p.timezone), c.$setViewValue(n), c.$render()
        } else u.activeDate = t, e.datepickerMode = u.modes[u.modes.indexOf(e.datepickerMode) - 1]
    }, e.move = function (e) {
        var t = u.activeDate.getFullYear() + e * (u.step.years || 0), n = u.activeDate.getMonth() + e * (u.step.months || 0);
        u.activeDate.setFullYear(t, n, 1), u.refreshView()
    }, e.toggleMode = function (t) {
        t = t || 1, e.datepickerMode === u.maxMode && 1 === t || e.datepickerMode === u.minMode && -1 === t || (e.datepickerMode = u.modes[u.modes.indexOf(e.datepickerMode) + t])
    }, e.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var d = function () {
        u.element[0].focus()
    };
    e.$on("uib:datepicker.focus", d), e.keydown = function (t) {
        var n = e.keys[t.which];
        if (n && !t.shiftKey && !t.altKey && !e.disabled)if (t.preventDefault(), u.shortcutPropagation || t.stopPropagation(), "enter" === n || "space" === n) {
            if (u.isDisabled(u.activeDate))return;
            e.select(u.activeDate)
        } else!t.ctrlKey || "up" !== n && "down" !== n ? (u.handleKeyDown(n, t), u.refreshView()) : e.toggleMode("up" === n ? 1 : -1)
    }
}]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function (e, t, n) {
    function a(e, t) {
        return 1 !== t || e % 4 !== 0 || e % 100 === 0 && e % 400 !== 0 ? o[t] : 29
    }

    function i(e) {
        var t = new Date(e);
        t.setDate(t.getDate() + 4 - (t.getDay() || 7));
        var n = t.getTime();
        return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
    }

    var o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.step = {months: 1}, this.element = t, this.init = function (t) {
        angular.extend(t, this), e.showWeeks = t.showWeeks, t.refreshView()
    }, this.getDates = function (e, t) {
        for (var n, a = new Array(t), i = new Date(e), o = 0; t > o;)n = new Date(i), a[o++] = n, i.setDate(i.getDate() + 1);
        return a
    }, this._refreshView = function () {
        var t = this.activeDate.getFullYear(), a = this.activeDate.getMonth(), o = new Date(this.activeDate);
        o.setFullYear(t, a, 1);
        var r = this.startingDay - o.getDay(), l = r > 0 ? 7 - r : -r, s = new Date(o);
        l > 0 && s.setDate(-l + 1);
        for (var u = this.getDates(s, 42), c = 0; 42 > c; c++)u[c] = angular.extend(this.createDateObject(u[c], this.formatDay), {
            secondary: u[c].getMonth() !== a,
            uid: e.uniqueId + "-" + c
        });
        e.labels = new Array(7);
        for (var p = 0; 7 > p; p++)e.labels[p] = {abbr: n(u[p].date, this.formatDayHeader), full: n(u[p].date, "EEEE")};
        if (e.title = n(this.activeDate, this.formatDayTitle), e.rows = this.split(u, 7), e.showWeeks) {
            e.weekNumbers = [];
            for (var d = (11 - this.startingDay) % 7, m = e.rows.length, f = 0; m > f; f++)e.weekNumbers.push(i(e.rows[f][d].date))
        }
    }, this.compare = function (e, t) {
        var n = new Date(e.getFullYear(), e.getMonth(), e.getDate()), a = new Date(t.getFullYear(), t.getMonth(), t.getDate());
        return n.setFullYear(e.getFullYear()), a.setFullYear(t.getFullYear()), n - a
    }, this.handleKeyDown = function (e, t) {
        var n = this.activeDate.getDate();
        if ("left" === e)n -= 1; else if ("up" === e)n -= 7; else if ("right" === e)n += 1; else if ("down" === e)n += 7; else if ("pageup" === e || "pagedown" === e) {
            var i = this.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
            this.activeDate.setMonth(i, 1), n = Math.min(a(this.activeDate.getFullYear(), this.activeDate.getMonth()), n)
        } else"home" === e ? n = 1 : "end" === e && (n = a(this.activeDate.getFullYear(), this.activeDate.getMonth()));
        this.activeDate.setDate(n)
    }
}]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function (e, t, n) {
    this.step = {years: 1}, this.element = t, this.init = function (e) {
        angular.extend(e, this), e.refreshView()
    }, this._refreshView = function () {
        for (var t, a = new Array(12), i = this.activeDate.getFullYear(), o = 0; 12 > o; o++)t = new Date(this.activeDate), t.setFullYear(i, o, 1), a[o] = angular.extend(this.createDateObject(t, this.formatMonth), {uid: e.uniqueId + "-" + o});
        e.title = n(this.activeDate, this.formatMonthTitle), e.rows = this.split(a, 3)
    }, this.compare = function (e, t) {
        var n = new Date(e.getFullYear(), e.getMonth()), a = new Date(t.getFullYear(), t.getMonth());
        return n.setFullYear(e.getFullYear()), a.setFullYear(t.getFullYear()), n - a
    }, this.handleKeyDown = function (e, t) {
        var n = this.activeDate.getMonth();
        if ("left" === e)n -= 1; else if ("up" === e)n -= 3; else if ("right" === e)n += 1; else if ("down" === e)n += 3; else if ("pageup" === e || "pagedown" === e) {
            var a = this.activeDate.getFullYear() + ("pageup" === e ? -1 : 1);
            this.activeDate.setFullYear(a)
        } else"home" === e ? n = 0 : "end" === e && (n = 11);
        this.activeDate.setMonth(n)
    }
}]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function (e, t, n) {
    function a(e) {
        return parseInt((e - 1) / o, 10) * o + 1
    }

    var i, o;
    this.element = t, this.yearpickerInit = function () {
        i = this.yearColumns, o = this.yearRows * i, this.step = {years: o}
    }, this._refreshView = function () {
        for (var t, n = new Array(o), r = 0, l = a(this.activeDate.getFullYear()); o > r; r++)t = new Date(this.activeDate), t.setFullYear(l + r, 0, 1), n[r] = angular.extend(this.createDateObject(t, this.formatYear), {uid: e.uniqueId + "-" + r});
        e.title = [n[0].label, n[o - 1].label].join(" - "), e.rows = this.split(n, i), e.columns = i
    }, this.compare = function (e, t) {
        return e.getFullYear() - t.getFullYear()
    }, this.handleKeyDown = function (e, t) {
        var n = this.activeDate.getFullYear();
        "left" === e ? n -= 1 : "up" === e ? n -= i : "right" === e ? n += 1 : "down" === e ? n += i : "pageup" === e || "pagedown" === e ? n += ("pageup" === e ? -1 : 1) * o : "home" === e ? n = a(this.activeDate.getFullYear()) : "end" === e && (n = a(this.activeDate.getFullYear()) + o - 1), this.activeDate.setFullYear(n)
    }
}]).directive("uibDatepicker", function () {
    return {
        replace: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/datepicker/datepicker.html"
        },
        scope: {datepickerMode: "=?", dateDisabled: "&", customClass: "&", shortcutPropagation: "&?"},
        require: ["uibDatepicker", "^ngModel"],
        controller: "UibDatepickerController",
        controllerAs: "datepicker",
        link: function (e, t, n, a) {
            var i = a[0], o = a[1];
            i.init(o)
        }
    }
}).directive("uibDaypicker", function () {
    return {
        replace: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/datepicker/day.html"
        },
        require: ["^uibDatepicker", "uibDaypicker"],
        controller: "UibDaypickerController",
        link: function (e, t, n, a) {
            var i = a[0], o = a[1];
            o.init(i)
        }
    }
}).directive("uibMonthpicker", function () {
    return {
        replace: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/datepicker/month.html"
        },
        require: ["^uibDatepicker", "uibMonthpicker"],
        controller: "UibMonthpickerController",
        link: function (e, t, n, a) {
            var i = a[0], o = a[1];
            o.init(i)
        }
    }
}).directive("uibYearpicker", function () {
    return {
        replace: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/datepicker/year.html";
        },
        require: ["^uibDatepicker", "uibYearpicker"],
        controller: "UibYearpickerController",
        link: function (e, t, n, a) {
            var i = a[0];
            angular.extend(i, a[1]), i.yearpickerInit(), i.refreshView()
        }
    }
}).constant("uibDatepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    datepickerPopupTemplateUrl: "uib/template/datepicker/popup.html",
    datepickerTemplateUrl: "uib/template/datepicker/datepicker.html",
    html5Types: {date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM"},
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0,
    onOpenFocus: !0,
    altInputFormats: []
}).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", "uibDatepickerConfig", function (e, t, n, a, i, o, r, l, s, u, c, p, d) {
    function m(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }

    function f(t) {
        var n = u.parse(t, $, e.date);
        if (isNaN(n))for (var a = 0; a < P.length; a++)if (n = u.parse(t, P[a], e.date), !isNaN(n))return n;
        return n
    }

    function h(e) {
        if (angular.isNumber(e) && (e = new Date(e)), !e)return null;
        if (angular.isDate(e) && !isNaN(e))return e;
        if (angular.isString(e)) {
            var t = f(e);
            if (!isNaN(t))return u.toTimezone(t, O.timezone)
        }
        return T.$options && T.$options.allowInvalid ? e : void 0
    }

    function g(e, t) {
        var a = e || t;
        return !n.ngRequired && !a || (angular.isNumber(a) && (a = new Date(a)), !a || (!(!angular.isDate(a) || isNaN(a)) || !!angular.isString(a) && !isNaN(f(t))))
    }

    function b(n) {
        if (e.isOpen || !e.disabled) {
            var a = S[0], i = t[0].contains(n.target), o = void 0 !== a.contains && a.contains(n.target);
            !e.isOpen || i || o || e.$apply(function () {
                e.isOpen = !1
            })
        }
    }

    function v(n) {
        27 === n.which && e.isOpen ? (n.preventDefault(), n.stopPropagation(), e.$apply(function () {
            e.isOpen = !1
        }), t[0].focus()) : 40 !== n.which || e.isOpen || (n.preventDefault(), n.stopPropagation(), e.$apply(function () {
            e.isOpen = !0
        }))
    }

    var $, y, w, k, D, x, C, M, T, O, S, P, E = {}, I = !1;
    e.watchData = {}, this.init = function (l) {
        if (T = l, O = l.$options || d.ngModelOptions, y = angular.isDefined(n.closeOnDateSelection) ? e.$parent.$eval(n.closeOnDateSelection) : c.closeOnDateSelection, w = angular.isDefined(n.datepickerAppendToBody) ? e.$parent.$eval(n.datepickerAppendToBody) : c.appendToBody, k = angular.isDefined(n.onOpenFocus) ? e.$parent.$eval(n.onOpenFocus) : c.onOpenFocus, D = angular.isDefined(n.datepickerPopupTemplateUrl) ? n.datepickerPopupTemplateUrl : c.datepickerPopupTemplateUrl, x = angular.isDefined(n.datepickerTemplateUrl) ? n.datepickerTemplateUrl : c.datepickerTemplateUrl, P = angular.isDefined(n.altInputFormats) ? e.$parent.$eval(n.altInputFormats) : c.altInputFormats, e.showButtonBar = angular.isDefined(n.showButtonBar) ? e.$parent.$eval(n.showButtonBar) : c.showButtonBar, c.html5Types[n.type] ? ($ = c.html5Types[n.type], I = !0) : ($ = n.uibDatepickerPopup || c.datepickerPopup, n.$observe("uibDatepickerPopup", function (e, t) {
                var n = e || c.datepickerPopup;
                if (n !== $ && ($ = n, T.$modelValue = null, !$))throw new Error("uibDatepickerPopup must have a date format specified.")
            })), !$)throw new Error("uibDatepickerPopup must have a date format specified.");
        if (I && n.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");
        if (C = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), e.ngModelOptions = angular.copy(O), e.ngModelOptions.timezone = null, C.attr({
                "ng-model": "date",
                "ng-model-options": "ngModelOptions",
                "ng-change": "dateSelection(date)",
                "template-url": D
            }), M = angular.element(C.children()[0]), M.attr("template-url", x), I && "month" === n.type && (M.attr("datepicker-mode", '"month"'), M.attr("min-mode", "month")), n.datepickerOptions) {
            var p = e.$parent.$eval(n.datepickerOptions);
            p && p.initDate && (e.initDate = u.fromTimezone(p.initDate, O.timezone), M.attr("init-date", "initDate"), delete p.initDate), angular.forEach(p, function (e, t) {
                M.attr(m(t), e)
            })
        }
        angular.forEach(["minMode", "maxMode"], function (t) {
            n[t] && (e.$parent.$watch(function () {
                return n[t]
            }, function (n) {
                e.watchData[t] = n
            }), M.attr(m(t), "watchData." + t))
        }), angular.forEach(["datepickerMode", "shortcutPropagation"], function (t) {
            if (n[t]) {
                var a = i(n[t]), o = {
                    get: function () {
                        return a(e.$parent)
                    }
                };
                if (M.attr(m(t), "watchData." + t), "datepickerMode" === t) {
                    var r = a.assign;
                    o.set = function (t) {
                        r(e.$parent, t)
                    }
                }
                Object.defineProperty(e.watchData, t, o)
            }
        }), angular.forEach(["minDate", "maxDate", "initDate"], function (t) {
            if (n[t]) {
                var a = i(n[t]);
                e.$parent.$watch(a, function (n) {
                    ("minDate" === t || "maxDate" === t) && (E[t] = angular.isDate(n) ? u.fromTimezone(new Date(n), O.timezone) : new Date(s(n, "medium"))), e.watchData[t] = E[t] || u.fromTimezone(new Date(n), O.timezone)
                }), M.attr(m(t), "watchData." + t)
            }
        }), n.dateDisabled && M.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRows", "yearColumns"], function (e) {
            angular.isDefined(n[e]) && M.attr(m(e), n[e])
        }), n.customClass && M.attr("custom-class", "customClass({ date: date, mode: mode })"), I ? T.$formatters.push(function (t) {
            return e.date = u.fromTimezone(t, O.timezone), t
        }) : (T.$$parserName = "date", T.$validators.date = g, T.$parsers.unshift(h), T.$formatters.push(function (t) {
            return T.$isEmpty(t) ? (e.date = t, t) : (e.date = u.fromTimezone(t, O.timezone), $ = $.replace(/M!/, "MM").replace(/d!/, "dd"), s(e.date, $))
        })), T.$viewChangeListeners.push(function () {
            e.date = f(T.$viewValue)
        }), t.bind("keydown", v), S = a(C)(e), C.remove(), w ? o.find("body").append(S) : t.after(S), e.$on("$destroy", function () {
            e.isOpen === !0 && (r.$$phase || e.$apply(function () {
                e.isOpen = !1
            })), S.remove(), t.unbind("keydown", v), o.unbind("click", b)
        })
    }, e.getText = function (t) {
        return e[t + "Text"] || c[t + "Text"]
    }, e.isDisabled = function (t) {
        return "today" === t && (t = new Date), e.watchData.minDate && e.compare(t, E.minDate) < 0 || e.watchData.maxDate && e.compare(t, E.maxDate) > 0
    }, e.compare = function (e, t) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())
    }, e.dateSelection = function (n) {
        angular.isDefined(n) && (e.date = n);
        var a = e.date ? s(e.date, $) : null;
        t.val(a), T.$setViewValue(a), y && (e.isOpen = !1, t[0].focus())
    }, e.keydown = function (n) {
        27 === n.which && (n.stopPropagation(), e.isOpen = !1, t[0].focus())
    }, e.select = function (t) {
        if ("today" === t) {
            var n = new Date;
            angular.isDate(e.date) ? (t = new Date(e.date), t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate())) : t = new Date(n.setHours(0, 0, 0, 0))
        }
        e.dateSelection(t)
    }, e.close = function () {
        e.isOpen = !1, t[0].focus()
    }, e.disabled = angular.isDefined(n.disabled) || !1, n.ngDisabled && e.$parent.$watch(i(n.ngDisabled), function (t) {
        e.disabled = t
    }), e.$watch("isOpen", function (n) {
        n ? e.disabled ? e.isOpen = !1 : (e.position = w ? l.offset(t) : l.position(t), e.position.top = e.position.top + t.prop("offsetHeight"), p(function () {
            k && e.$broadcast("uib:datepicker.focus"), o.bind("click", b)
        }, 0, !1)) : o.unbind("click", b)
    })
}]).directive("uibDatepickerPopup", function () {
    return {
        require: ["ngModel", "uibDatepickerPopup"],
        controller: "UibDatepickerPopupController",
        scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&", customClass: "&"},
        link: function (e, t, n, a) {
            var i = a[0], o = a[1];
            o.init(i)
        }
    }
}).directive("uibDatepickerPopupWrap", function () {
    return {
        replace: !0, transclude: !0, templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/datepicker/popup.html"
        }
    }
}), angular.module("ui.bootstrap.debounce", []).factory("$$debounce", ["$timeout", function (e) {
    return function (t, n) {
        var a;
        return function () {
            var i = this, o = Array.prototype.slice.call(arguments);
            a && e.cancel(a), a = e(function () {
                t.apply(i, o)
            }, n)
        }
    }
}]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("uibDropdownConfig", {
    appendToOpenClass: "uib-dropdown-open",
    openClass: "open"
}).service("uibDropdownService", ["$document", "$rootScope", function (e, t) {
    var n = null;
    this.open = function (t) {
        n || (e.on("click", a), e.on("keydown", i)), n && n !== t && (n.isOpen = !1), n = t
    }, this.close = function (t) {
        n === t && (n = null, e.off("click", a), e.off("keydown", i))
    };
    var a = function (e) {
        if (n && !(e && "disabled" === n.getAutoClose() || e && 3 === e.which)) {
            var a = n.getToggleElement();
            if (!(e && a && a[0].contains(e.target))) {
                var i = n.getDropdownElement();
                e && "outsideClick" === n.getAutoClose() && i && i[0].contains(e.target) || (n.isOpen = !1, t.$$phase || n.$apply())
            }
        }
    }, i = function (e) {
        27 === e.which ? (n.focusToggleElement(), a()) : n.isKeynavEnabled() && -1 !== [38, 40].indexOf(e.which) && n.isOpen && (e.preventDefault(), e.stopPropagation(), n.focusDropdownEntry(e.which))
    }
}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (e, t, n, a, i, o, r, l, s, u, c) {
    var p, d, m = this, f = e.$new(), h = i.appendToOpenClass, g = i.openClass, b = angular.noop, v = n.onToggle ? a(n.onToggle) : angular.noop, $ = !1, y = null, w = !1, k = s.find("body");
    t.addClass("dropdown"), this.init = function () {
        if (n.isOpen && (d = a(n.isOpen), b = d.assign, e.$watch(d, function (e) {
                f.isOpen = !!e
            })), angular.isDefined(n.dropdownAppendTo)) {
            var i = a(n.dropdownAppendTo)(f);
            i && (y = angular.element(i))
        }
        $ = angular.isDefined(n.dropdownAppendToBody), w = angular.isDefined(n.keyboardNav), $ && !y && (y = k), y && m.dropdownMenu && (y.append(m.dropdownMenu), t.on("$destroy", function () {
            m.dropdownMenu.remove()
        }))
    }, this.toggle = function (e) {
        return f.isOpen = arguments.length ? !!e : !f.isOpen
    }, this.isOpen = function () {
        return f.isOpen
    }, f.getToggleElement = function () {
        return m.toggleElement
    }, f.getAutoClose = function () {
        return n.autoClose || "always"
    }, f.getElement = function () {
        return t
    }, f.isKeynavEnabled = function () {
        return w
    }, f.focusDropdownEntry = function (e) {
        var n = m.dropdownMenu ? angular.element(m.dropdownMenu).find("a") : t.find("ul").eq(0).find("a");
        switch (e) {
            case 40:
                angular.isNumber(m.selectedOption) ? m.selectedOption = m.selectedOption === n.length - 1 ? m.selectedOption : m.selectedOption + 1 : m.selectedOption = 0;
                break;
            case 38:
                angular.isNumber(m.selectedOption) ? m.selectedOption = 0 === m.selectedOption ? 0 : m.selectedOption - 1 : m.selectedOption = n.length - 1
        }
        n[m.selectedOption].focus()
    }, f.getDropdownElement = function () {
        return m.dropdownMenu
    }, f.focusToggleElement = function () {
        m.toggleElement && m.toggleElement[0].focus()
    }, f.$watch("isOpen", function (n, a) {
        if (y && m.dropdownMenu) {
            var i, s, d = l.positionElements(t, m.dropdownMenu, "bottom-left", !0);
            if (i = {
                    top: d.top + "px",
                    display: n ? "block" : "none"
                }, s = m.dropdownMenu.hasClass("dropdown-menu-right"), s ? (i.left = "auto", i.right = window.innerWidth - (d.left + t.prop("offsetWidth")) + "px") : (i.left = d.left + "px", i.right = "auto"), !$) {
                var w = l.offset(y);
                i.top = d.top - w.top + "px", s ? i.right = window.innerWidth - (d.left - w.left + t.prop("offsetWidth")) + "px" : i.left = d.left - w.left + "px"
            }
            m.dropdownMenu.css(i)
        }
        var k = y ? y : t;
        if (r[n ? "addClass" : "removeClass"](k, y ? h : g).then(function () {
                angular.isDefined(n) && n !== a && v(e, {open: !!n})
            }), n)m.dropdownMenuTemplateUrl && c(m.dropdownMenuTemplateUrl).then(function (e) {
            p = f.$new(), u(e.trim())(p, function (e) {
                var t = e;
                m.dropdownMenu.replaceWith(t), m.dropdownMenu = t
            })
        }), f.focusToggleElement(), o.open(f); else {
            if (m.dropdownMenuTemplateUrl) {
                p && p.$destroy();
                var D = angular.element('<ul class="dropdown-menu"></ul>');
                m.dropdownMenu.replaceWith(D), m.dropdownMenu = D
            }
            o.close(f), m.selectedOption = null
        }
        angular.isFunction(b) && b(e, n)
    }), e.$on("$locationChangeSuccess", function () {
        "disabled" !== f.getAutoClose() && (f.isOpen = !1)
    })
}]).directive("uibDropdown", function () {
    return {
        controller: "UibDropdownController", link: function (e, t, n, a) {
            a.init()
        }
    }
}).directive("uibDropdownMenu", function () {
    return {
        restrict: "A", require: "?^uibDropdown", link: function (e, t, n, a) {
            if (a && !angular.isDefined(n.dropdownNested)) {
                t.addClass("dropdown-menu");
                var i = n.templateUrl;
                i && (a.dropdownMenuTemplateUrl = i), a.dropdownMenu || (a.dropdownMenu = t)
            }
        }
    }
}).directive("uibDropdownToggle", function () {
    return {
        require: "?^uibDropdown", link: function (e, t, n, a) {
            if (a) {
                t.addClass("dropdown-toggle"), a.toggleElement = t;
                var i = function (i) {
                    i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function () {
                        a.toggle()
                    })
                };
                t.bind("click", i), t.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), e.$watch(a.isOpen, function (e) {
                    t.attr("aria-expanded", !!e)
                }), e.$on("$destroy", function () {
                    t.unbind("click", i)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var e = [];
            return {
                add: function (t, n) {
                    e.push({key: t, value: n})
                }, get: function (t) {
                    for (var n = 0; n < e.length; n++)if (t === e[n].key)return e[n]
                }, keys: function () {
                    for (var t = [], n = 0; n < e.length; n++)t.push(e[n].key);
                    return t
                }, top: function () {
                    return e[e.length - 1]
                }, remove: function (t) {
                    for (var n = -1, a = 0; a < e.length; a++)if (t === e[a].key) {
                        n = a;
                        break
                    }
                    return e.splice(n, 1)[0]
                }, removeTop: function () {
                    return e.splice(e.length - 1, 1)[0]
                }, length: function () {
                    return e.length
                }
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.stackedMap"]).factory("$$multiMap", function () {
    return {
        createNew: function () {
            var e = {};
            return {
                entries: function () {
                    return Object.keys(e).map(function (t) {
                        return {key: t, value: e[t]}
                    })
                }, get: function (t) {
                    return e[t]
                }, hasKey: function (t) {
                    return !!e[t]
                }, keys: function () {
                    return Object.keys(e)
                }, put: function (t, n) {
                    e[t] || (e[t] = []), e[t].push(n)
                }, remove: function (t, n) {
                    var a = e[t];
                    if (a) {
                        var i = a.indexOf(n);
                        -1 !== i && a.splice(i, 1), a.length || delete e[t]
                    }
                }
            }
        }
    }
}).provider("$uibResolve", function () {
    var e = this;
    this.resolver = null, this.setResolver = function (e) {
        this.resolver = e
    }, this.$get = ["$injector", "$q", function (t, n) {
        var a = e.resolver ? t.get(e.resolver) : null;
        return {
            resolve: function (e, i, o, r) {
                if (a)return a.resolve(e, i, o, r);
                var l = [];
                return angular.forEach(e, function (e) {
                    angular.isFunction(e) || angular.isArray(e) ? l.push(n.resolve(t.invoke(e))) : angular.isString(e) ? l.push(n.resolve(t.get(e))) : l.push(n.resolve(e))
                }), n.all(l).then(function (t) {
                    var n = {}, a = 0;
                    return angular.forEach(e, function (e, i) {
                        n[i] = t[a++]
                    }), n
                })
            }
        }
    }]
}).directive("uibModalBackdrop", ["$animateCss", "$injector", "$uibModalStack", function (e, t, n) {
    function a(t, a, i) {
        i.modalInClass && (e(a, {addClass: i.modalInClass}).start(), t.$on(n.NOW_CLOSING_EVENT, function (n, o) {
            var r = o();
            t.modalOptions.animation ? e(a, {removeClass: i.modalInClass}).start().then(r) : r()
        }))
    }

    return {
        replace: !0, templateUrl: "uib/template/modal/backdrop.html", compile: function (e, t) {
            return e.addClass(t.backdropClass), a
        }
    }
}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animate", "$animateCss", "$document", function (e, t, n, a, i) {
    return {
        scope: {index: "@"}, replace: !0, transclude: !0, templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/modal/window.html"
        }, link: function (o, r, l) {
            r.addClass(l.windowClass || ""), r.addClass(l.windowTopClass || ""), o.size = l.size, o.close = function (t) {
                var n = e.getTop();
                n && n.value.backdrop && "static" !== n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"))
            }, r.on("click", o.close), o.$isRendered = !0;
            var s = t.defer();
            l.$observe("modalRender", function (e) {
                "true" === e && s.resolve()
            }), s.promise.then(function () {
                var s = null;
                l.modalInClass && (s = a(r, {addClass: l.modalInClass}).start(), o.$on(e.NOW_CLOSING_EVENT, function (e, t) {
                    var i = t();
                    a ? a(r, {removeClass: l.modalInClass}).start().then(i) : n.removeClass(r, l.modalInClass).then(i)
                })), t.when(s).then(function () {
                    if (!i[0].activeElement || !r[0].contains(i[0].activeElement)) {
                        var e = r[0].querySelector("[autofocus]");
                        e ? e.focus() : r[0].focus()
                    }
                });
                var u = e.getTop();
                u && e.modalRendered(u.key)
            })
        }
    }
}]).directive("uibModalAnimationClass", function () {
    return {
        compile: function (e, t) {
            t.modalAnimation && e.addClass(t.uibModalAnimationClass)
        }
    }
}).directive("uibModalTransclude", function () {
    return {
        link: function (e, t, n, a, i) {
            i(e.$parent, function (e) {
                t.empty(), t.append(e)
            })
        }
    }
}).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", function (e, t, n, a, i, o, r, l) {
    function s() {
        for (var e = -1, t = $.keys(), n = 0; n < t.length; n++)$.get(t[n]).value.backdrop && (e = n);
        return e
    }

    function u(e, t) {
        var n = $.get(e).value, a = n.appendTo;
        $.remove(e), d(n.modalDomEl, n.modalScope, function () {
            var t = n.openedClass || v;
            y.remove(t, e), a.toggleClass(t, y.hasKey(t)), c(!0)
        }), p(), t && t.focus ? t.focus() : a.focus && a.focus()
    }

    function c(e) {
        var t;
        $.length() > 0 && (t = $.top().value, t.modalDomEl.toggleClass(t.windowTopClass || "", e))
    }

    function p() {
        if (h && -1 === s()) {
            var e = g;
            d(h, g, function () {
                e = null
            }), h = void 0, g = void 0
        }
    }

    function d(e, n, a, i) {
        function r() {
            r.done || (r.done = !0, t(e, {event: "leave"}).start().then(function () {
                e.remove(), i && i.resolve()
            }), n.$destroy(), a && a())
        }

        var l, s = null, u = function () {
            return l || (l = o.defer(), s = l.promise), function () {
                l.resolve()
            }
        };
        return n.$broadcast(w.NOW_CLOSING_EVENT, u), o.when(s).then(r)
    }

    function m(e) {
        if (e.isDefaultPrevented())return e;
        var t = $.top();
        if (t)switch (e.which) {
            case 27:
                t.value.keyboard && (e.preventDefault(), i.$apply(function () {
                    w.dismiss(t.key, "escape key press")
                }));
                break;
            case 9:
                w.loadFocusElementList(t);
                var n = !1;
                e.shiftKey ? w.isFocusInFirstItem(e) && (n = w.focusLastFocusableElement()) : w.isFocusInLastItem(e) && (n = w.focusFirstFocusableElement()), n && (e.preventDefault(), e.stopPropagation())
        }
    }

    function f(e, t, n) {
        return !e.value.modalScope.$broadcast("modal.closing", t, n).defaultPrevented
    }

    var h, g, b, v = "modal-open", $ = l.createNew(), y = r.createNew(), w = {NOW_CLOSING_EVENT: "modal.stack.now-closing"}, k = 0, D = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
    return i.$watch(s, function (e) {
        g && (g.index = e)
    }), n.on("keydown", m), i.$on("$destroy", function () {
        n.off("keydown", m)
    }), w.open = function (t, o) {
        var r = n[0].activeElement, l = o.openedClass || v;
        c(!1), $.add(t, {
            deferred: o.deferred,
            renderDeferred: o.renderDeferred,
            closedDeferred: o.closedDeferred,
            modalScope: o.scope,
            backdrop: o.backdrop,
            keyboard: o.keyboard,
            openedClass: o.openedClass,
            windowTopClass: o.windowTopClass,
            animation: o.animation,
            appendTo: o.appendTo
        }), y.put(l, t);
        var u = o.appendTo, p = s();
        if (!u.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");
        p >= 0 && !h && (g = i.$new(!0), g.modalOptions = o, g.index = p, h = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), h.attr("backdrop-class", o.backdropClass), o.animation && h.attr("modal-animation", "true"), a(h)(g), e.enter(h, u));
        var d = angular.element('<div uib-modal-window="modal-window"></div>');
        d.attr({
            "template-url": o.windowTemplateUrl,
            "window-class": o.windowClass,
            "window-top-class": o.windowTopClass,
            size: o.size,
            index: $.length() - 1,
            animate: "animate"
        }).html(o.content), o.animation && d.attr("modal-animation", "true"), e.enter(d, u).then(function () {
            a(d)(o.scope), e.addClass(u, l)
        }), $.top().value.modalDomEl = d, $.top().value.modalOpener = r, w.clearFocusListCache()
    }, w.close = function (e, t) {
        var n = $.get(e);
        return n && f(n, t, !0) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.resolve(t), u(e, n.value.modalOpener), !0) : !n
    }, w.dismiss = function (e, t) {
        var n = $.get(e);
        return n && f(n, t, !1) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.reject(t), u(e, n.value.modalOpener), !0) : !n
    }, w.dismissAll = function (e) {
        for (var t = this.getTop(); t && this.dismiss(t.key, e);)t = this.getTop()
    }, w.getTop = function () {
        return $.top()
    }, w.modalRendered = function (e) {
        var t = $.get(e);
        t && t.value.renderDeferred.resolve()
    }, w.focusFirstFocusableElement = function () {
        return b.length > 0 && (b[0].focus(), !0)
    }, w.focusLastFocusableElement = function () {
        return b.length > 0 && (b[b.length - 1].focus(), !0)
    }, w.isFocusInFirstItem = function (e) {
        return b.length > 0 && (e.target || e.srcElement) === b[0]
    }, w.isFocusInLastItem = function (e) {
        return b.length > 0 && (e.target || e.srcElement) === b[b.length - 1]
    }, w.clearFocusListCache = function () {
        b = [], k = 0
    }, w.loadFocusElementList = function (e) {
        if ((void 0 === b || !b.length) && e) {
            var t = e.value.modalDomEl;
            t && t.length && (b = t[0].querySelectorAll(D))
        }
    }, w
}]).provider("$uibModal", function () {
    var e = {
        options: {animation: !0, backdrop: !0, keyboard: !0},
        $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (t, n, a, i, o, r, l) {
            function s(e) {
                return e.template ? n.when(e.template) : i(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl)
            }

            var u = {}, c = null;
            return u.getPromiseChain = function () {
                return c
            }, u.open = function (i) {
                function u() {
                    return b
                }

                var p = n.defer(), d = n.defer(), m = n.defer(), f = n.defer(), h = {
                    result: p.promise,
                    opened: d.promise,
                    closed: m.promise,
                    rendered: f.promise,
                    close: function (e) {
                        return l.close(h, e)
                    },
                    dismiss: function (e) {
                        return l.dismiss(h, e)
                    }
                };
                if (i = angular.extend({}, e.options, i), i.resolve = i.resolve || {}, i.appendTo = i.appendTo || a.find("body").eq(0), !i.template && !i.templateUrl)throw new Error("One of template or templateUrl options is required.");
                var g, b = n.all([s(i), r.resolve(i.resolve, {}, null, null)]);
                return g = c = n.all([c]).then(u, u).then(function (e) {
                    var n = i.scope || t, a = n.$new();
                    a.$close = h.close, a.$dismiss = h.dismiss, a.$on("$destroy", function () {
                        a.$$uibDestructionScheduled || a.$dismiss("$uibUnscheduledDestruction")
                    });
                    var r, s = {};
                    i.controller && (s.$scope = a, s.$uibModalInstance = h, angular.forEach(e[1], function (e, t) {
                        s[t] = e
                    }), r = o(i.controller, s), i.controllerAs && (i.bindToController && (r.$close = a.$close, r.$dismiss = a.$dismiss, angular.extend(r, n)), a[i.controllerAs] = r)), l.open(h, {
                        scope: a,
                        deferred: p,
                        renderDeferred: f,
                        closedDeferred: m,
                        content: e[0],
                        animation: i.animation,
                        backdrop: i.backdrop,
                        keyboard: i.keyboard,
                        backdropClass: i.backdropClass,
                        windowTopClass: i.windowTopClass,
                        windowClass: i.windowClass,
                        windowTemplateUrl: i.windowTemplateUrl,
                        size: i.size,
                        openedClass: i.openedClass,
                        appendTo: i.appendTo
                    }), d.resolve(!0)
                }, function (e) {
                    d.reject(e), p.reject(e)
                })["finally"](function () {
                    c === g && (c = null)
                }), h
            }, u
        }]
    };
    return e
}), angular.module("ui.bootstrap.paging", []).factory("uibPaging", ["$parse", function (e) {
    return {
        create: function (t, n, a) {
            t.setNumPages = a.numPages ? e(a.numPages).assign : angular.noop, t.ngModelCtrl = {$setViewValue: angular.noop}, t.init = function (i, o) {
                t.ngModelCtrl = i, t.config = o, i.$render = function () {
                    t.render()
                }, a.itemsPerPage ? n.$parent.$watch(e(a.itemsPerPage), function (e) {
                    t.itemsPerPage = parseInt(e, 10), n.totalPages = t.calculateTotalPages(), t.updatePage()
                }) : t.itemsPerPage = o.itemsPerPage, n.$watch("totalItems", function (e, a) {
                    (angular.isDefined(e) || e !== a) && (n.totalPages = t.calculateTotalPages(), t.updatePage())
                })
            }, t.calculateTotalPages = function () {
                var e = t.itemsPerPage < 1 ? 1 : Math.ceil(n.totalItems / t.itemsPerPage);
                return Math.max(e || 0, 1)
            }, t.render = function () {
                n.page = parseInt(t.ngModelCtrl.$viewValue, 10) || 1
            }, n.selectPage = function (e, a) {
                a && a.preventDefault();
                var i = !n.ngDisabled || !a;
                i && n.page !== e && e > 0 && e <= n.totalPages && (a && a.target && a.target.blur(), t.ngModelCtrl.$setViewValue(e), t.ngModelCtrl.$render())
            }, n.getText = function (e) {
                return n[e + "Text"] || t.config[e + "Text"]
            }, n.noPrevious = function () {
                return 1 === n.page
            }, n.noNext = function () {
                return n.page === n.totalPages
            }, t.updatePage = function () {
                t.setNumPages(n.$parent, n.totalPages), n.page > n.totalPages ? n.selectPage(n.totalPages) : t.ngModelCtrl.$render()
            }
        }
    }
}]), angular.module("ui.bootstrap.pager", ["ui.bootstrap.paging"]).controller("UibPagerController", ["$scope", "$attrs", "uibPaging", "uibPagerConfig", function (e, t, n, a) {
    e.align = angular.isDefined(t.align) ? e.$parent.$eval(t.align) : a.align, n.create(this, e, t)
}]).constant("uibPagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("uibPager", ["uibPagerConfig", function (e) {
    return {
        scope: {totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "="},
        require: ["uibPager", "?ngModel"],
        controller: "UibPagerController",
        controllerAs: "pager",
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/pager/pager.html"
        },
        replace: !0,
        link: function (t, n, a, i) {
            var o = i[0], r = i[1];
            r && o.init(r, e)
        }
    }
}]), angular.module("ui.bootstrap.pagination", ["ui.bootstrap.paging"]).controller("UibPaginationController", ["$scope", "$attrs", "$parse", "uibPaging", "uibPaginationConfig", function (e, t, n, a, i) {
    function o(e, t, n) {
        return {number: e, text: t, active: n}
    }

    function r(e, t) {
        var n = [], a = 1, i = t, r = angular.isDefined(s) && t > s;
        r && (u ? (a = Math.max(e - Math.floor(s / 2), 1), i = a + s - 1, i > t && (i = t, a = i - s + 1)) : (a = (Math.ceil(e / s) - 1) * s + 1, i = Math.min(a + s - 1, t)));
        for (var l = a; i >= l; l++) {
            var d = o(l, l, l === e);
            n.push(d)
        }
        if (r && s > 0 && (!u || c || p)) {
            if (a > 1) {
                if (!p || a > 3) {
                    var m = o(a - 1, "...", !1);
                    n.unshift(m)
                }
                if (p) {
                    if (3 === a) {
                        var f = o(2, "2", !1);
                        n.unshift(f)
                    }
                    var h = o(1, "1", !1);
                    n.unshift(h)
                }
            }
            if (t > i) {
                if (!p || t - 2 > i) {
                    var g = o(i + 1, "...", !1);
                    n.push(g)
                }
                if (p) {
                    if (i === t - 2) {
                        var b = o(t - 1, t - 1, !1);
                        n.push(b)
                    }
                    var v = o(t, t, !1);
                    n.push(v)
                }
            }
        }
        return n
    }

    var l = this, s = angular.isDefined(t.maxSize) ? e.$parent.$eval(t.maxSize) : i.maxSize, u = angular.isDefined(t.rotate) ? e.$parent.$eval(t.rotate) : i.rotate, c = angular.isDefined(t.forceEllipses) ? e.$parent.$eval(t.forceEllipses) : i.forceEllipses, p = angular.isDefined(t.boundaryLinkNumbers) ? e.$parent.$eval(t.boundaryLinkNumbers) : i.boundaryLinkNumbers;
    e.boundaryLinks = angular.isDefined(t.boundaryLinks) ? e.$parent.$eval(t.boundaryLinks) : i.boundaryLinks, e.directionLinks = angular.isDefined(t.directionLinks) ? e.$parent.$eval(t.directionLinks) : i.directionLinks, a.create(this, e, t), t.maxSize && e.$parent.$watch(n(t.maxSize), function (e) {
        s = parseInt(e, 10), l.render()
    });
    var d = this.render;
    this.render = function () {
        d(), e.page > 0 && e.page <= e.totalPages && (e.pages = r(e.page, e.totalPages))
    }
}]).constant("uibPaginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    boundaryLinkNumbers: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0,
    forceEllipses: !1
}).directive("uibPagination", ["$parse", "uibPaginationConfig", function (e, t) {
    return {
        scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@", ngDisabled: "="},
        require: ["uibPagination", "?ngModel"],
        controller: "UibPaginationController",
        controllerAs: "pagination",
        templateUrl: function (e, t) {
            return t.templateUrl || "uib/template/pagination/pagination.html"
        },
        replace: !0,
        link: function (e, n, a, i) {
            var o = i[0], r = i[1];
            r && o.init(r, t)
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
    function e(e) {
        var t = /[A-Z]/g, n = "-";
        return e.replace(t, function (e, t) {
            return (t ? n : "") + e.toLowerCase()
        })
    }

    var t = {
        placement: "top",
        placementClassPrefix: "",
        animation: !0,
        popupDelay: 0,
        popupCloseDelay: 0,
        useContentExp: !1
    }, n = {mouseenter: "mouseleave", click: "click", outsideClick: "outsideClick", focus: "blur", none: ""}, a = {};
    this.options = function (e) {
        angular.extend(a, e)
    }, this.setTriggers = function (e) {
        angular.extend(n, e)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function (i, o, r, l, s, u, c, p, d) {
        function m(e) {
            if (27 === e.which) {
                var t = f.top();
                t && (t.value.close(), f.removeTop(), t = null)
            }
        }

        var f = d.createNew();
        return l.on("keypress", m), c.$on("$destroy", function () {
            l.off("keypress", m)
        }), function (i, c, d, m) {
            function h(e) {
                var t = (e || m.trigger || d).split(" "), a = t.map(function (e) {
                    return n[e] || e
                });
                return {show: t, hide: a}
            }

            m = angular.extend({}, t, a, m);
            var g = e(i), b = u.startSymbol(), v = u.endSymbol(), $ = "<div " + g + '-popup title="' + b + "title" + v + '" ' + (m.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + b + "content" + v + '" ') + 'placement="' + b + "placement" + v + '" popup-class="' + b + "popupClass" + v + '" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';
            return {
                compile: function (e, t) {
                    var n = o($);
                    return function (e, t, a, o) {
                        function u() {
                            V.isOpen ? g() : d()
                        }

                        function d() {
                            (!H || e.$eval(a[c + "Enable"])) && (y(), D(), V.popupDelay ? I || (I = r(b, V.popupDelay, !1)) : b())
                        }

                        function g() {
                            v(), V.popupCloseDelay ? U || (U = r($, V.popupCloseDelay, !1)) : $()
                        }

                        function b() {
                            return v(), y(), V.content ? (w(), void V.$evalAsync(function () {
                                V.isOpen = !0, x(!0), L()
                            })) : angular.noop
                        }

                        function v() {
                            I && (r.cancel(I), I = null), A && (r.cancel(A), A = null)
                        }

                        function $() {
                            V && V.$evalAsync(function () {
                                V.isOpen = !1, x(!1), V.animation ? E || (E = r(k, 150, !1)) : k()
                            })
                        }

                        function y() {
                            U && (r.cancel(U), U = null), E && (r.cancel(E), E = null)
                        }

                        function w() {
                            S || (P = V.$new(), S = n(P, function (e) {
                                N ? l.find("body").append(e) : t.after(e)
                            }), C())
                        }

                        function k() {
                            v(), y(), M(), S && (S.remove(), S = null), P && (P.$destroy(), P = null)
                        }

                        function D() {
                            V.title = a[c + "Title"], z ? V.content = z(e) : V.content = a[i], V.popupClass = a[c + "Class"], V.placement = angular.isDefined(a[c + "Placement"]) ? a[c + "Placement"] : m.placement;
                            var t = parseInt(a[c + "PopupDelay"], 10), n = parseInt(a[c + "PopupCloseDelay"], 10);
                            V.popupDelay = isNaN(t) ? m.popupDelay : t, V.popupCloseDelay = isNaN(n) ? m.popupCloseDelay : n
                        }

                        function x(t) {
                            R && angular.isFunction(R.assign) && R.assign(e, t)
                        }

                        function C() {
                            Y.length = 0, z ? (Y.push(e.$watch(z, function (e) {
                                V.content = e, !e && V.isOpen && $()
                            })), Y.push(P.$watch(function () {
                                q || (q = !0, P.$$postDigest(function () {
                                    q = !1, V && V.isOpen && L()
                                }))
                            }))) : Y.push(a.$observe(i, function (e) {
                                V.content = e, !e && V.isOpen ? $() : L()
                            })), Y.push(a.$observe(c + "Title", function (e) {
                                V.title = e, V.isOpen && L()
                            })), Y.push(a.$observe(c + "Placement", function (e) {
                                V.placement = e ? e : m.placement, V.isOpen && L()
                            }))
                        }

                        function M() {
                            Y.length && (angular.forEach(Y, function (e) {
                                e()
                            }), Y.length = 0)
                        }

                        function T(e) {
                            V && V.isOpen && S && (t[0].contains(e.target) || S[0].contains(e.target) || g())
                        }

                        function O() {
                            var e = a[c + "Trigger"];
                            B(), F = h(e), "none" !== F.show && F.show.forEach(function (e, n) {
                                "outsideClick" === e ? (t.on("click", u), l.on("click", T)) : e === F.hide[n] ? t.on(e, u) : e && (t.on(e, d), t.on(F.hide[n], g)), t.on("keypress", function (e) {
                                    27 === e.which && g()
                                })
                            })
                        }

                        var S, P, E, I, U, A, N = !!angular.isDefined(m.appendToBody) && m.appendToBody, F = h(void 0), H = angular.isDefined(a[c + "Enable"]), V = e.$new(!0), q = !1, R = !!angular.isDefined(a[c + "IsOpen"]) && p(a[c + "IsOpen"]), z = !!m.useContentExp && p(a[i]), Y = [], L = function () {
                            S && S.html() && (A || (A = r(function () {
                                S.css({top: 0, left: 0});
                                var e = s.positionElements(t, S, V.placement, N);
                                S.css({
                                    top: e.top + "px",
                                    left: e.left + "px",
                                    visibility: "visible"
                                }), m.placementClassPrefix && S.removeClass("top bottom left right"), S.removeClass(m.placementClassPrefix + "top " + m.placementClassPrefix + "top-left " + m.placementClassPrefix + "top-right " + m.placementClassPrefix + "bottom " + m.placementClassPrefix + "bottom-left " + m.placementClassPrefix + "bottom-right " + m.placementClassPrefix + "left " + m.placementClassPrefix + "left-top " + m.placementClassPrefix + "left-bottom " + m.placementClassPrefix + "right " + m.placementClassPrefix + "right-top " + m.placementClassPrefix + "right-bottom");
                                var n = e.placement.split("-");
                                S.addClass(n[0], m.placementClassPrefix + e.placement), s.positionArrow(S, e.placement), A = null
                            }, 0, !1)))
                        };
                        V.origScope = e, V.isOpen = !1, f.add(V, {close: $}), V.contentExp = function () {
                            return V.content
                        }, a.$observe("disabled", function (e) {
                            e && v(), e && V.isOpen && $()
                        }), R && e.$watch(R, function (e) {
                            V && !e === V.isOpen && u()
                        });
                        var B = function () {
                            F.show.forEach(function (e) {
                                "outsideClick" === e ? t.off("click", u) : (t.off(e, d), t.off(e, u))
                            }), F.hide.forEach(function (e) {
                                "outsideClick" === e ? l.off("click", T) : t.off(e, g)
                            })
                        };
                        O();
                        var j = e.$eval(a[c + "Animation"]);
                        V.animation = angular.isDefined(j) ? !!j : m.animation;
                        var W, _ = c + "AppendToBody";
                        W = _ in a && void 0 === a[_] || e.$eval(a[_]), N = angular.isDefined(W) ? W : N, N && e.$on("$locationChangeSuccess", function () {
                            V.isOpen && $()
                        }), e.$on("$destroy", function () {
                            B(), k(), f.remove(V), V = null
                        })
                    }
                }
            }
        }
    }]
}).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (e, t, n, a) {
    return {
        link: function (i, o, r) {
            var l, s, u, c = i.$eval(r.tooltipTemplateTranscludeScope), p = 0, d = function () {
                s && (s.remove(), s = null), l && (l.$destroy(), l = null), u && (e.leave(u).then(function () {
                    s = null
                }), s = u, u = null)
            };
            i.$watch(t.parseAsResourceUrl(r.uibTooltipTemplateTransclude), function (t) {
                var r = ++p;
                t ? (a(t, !0).then(function (a) {
                    if (r === p) {
                        var i = c.$new(), s = a, m = n(s)(i, function (t) {
                            d(), e.enter(t, o)
                        });
                        l = i, u = m, l.$emit("$includeContentLoaded", t)
                    }
                }, function () {
                    r === p && (d(), i.$emit("$includeContentError", t))
                }), i.$emit("$includeContentRequested", t)) : d()
            }), i.$on("$destroy", d)
        }
    }
}]).directive("uibTooltipClasses", ["$uibPosition", function (e) {
    return {
        restrict: "A", link: function (t, n, a) {
            if (t.placement) {
                var i = e.parsePlacement(t.placement);
                n.addClass(i[0])
            } else n.addClass("top");
            t.popupClass && n.addClass(t.popupClass), t.animation() && n.addClass(a.tooltipAnimationClass)
        }
    }
}]).directive("uibTooltipPopup", function () {
    return {
        replace: !0,
        scope: {content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
        templateUrl: "uib/template/tooltip/tooltip-popup.html"
    }
}).directive("uibTooltip", ["$uibTooltip", function (e) {
    return e("uibTooltip", "tooltip", "mouseenter")
}]).directive("uibTooltipTemplatePopup", function () {
    return {
        replace: !0,
        scope: {contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&"},
        templateUrl: "uib/template/tooltip/tooltip-template-popup.html"
    }
}).directive("uibTooltipTemplate", ["$uibTooltip", function (e) {
    return e("uibTooltipTemplate", "tooltip", "mouseenter", {useContentExp: !0})
}]).directive("uibTooltipHtmlPopup", function () {
    return {
        replace: !0, scope: {contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
        templateUrl: "uib/template/tooltip/tooltip-html-popup.html"
    }
}).directive("uibTooltipHtml", ["$uibTooltip", function (e) {
    return e("uibTooltipHtml", "tooltip", "mouseenter", {useContentExp: !0})
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
    return {
        replace: !0,
        scope: {
            title: "@",
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "uib/template/popover/popover-template.html"
    }
}).directive("uibPopoverTemplate", ["$uibTooltip", function (e) {
    return e("uibPopoverTemplate", "popover", "click", {useContentExp: !0})
}]).directive("uibPopoverHtmlPopup", function () {
    return {
        replace: !0,
        scope: {contentExp: "&", title: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
        templateUrl: "uib/template/popover/popover-html.html"
    }
}).directive("uibPopoverHtml", ["$uibTooltip", function (e) {
    return e("uibPopoverHtml", "popover", "click", {useContentExp: !0})
}]).directive("uibPopoverPopup", function () {
    return {
        replace: !0,
        scope: {title: "@", content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&"},
        templateUrl: "uib/template/popover/popover.html"
    }
}).directive("uibPopover", ["$uibTooltip", function (e) {
    return e("uibPopover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", {
    animate: !0,
    max: 100
}).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function (e, t, n) {
    var a = this, i = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
    this.bars = [], e.max = angular.isDefined(e.max) ? e.max : n.max, this.addBar = function (t, n, o) {
        i || n.css({transition: "none"}), this.bars.push(t), t.max = e.max, t.title = o && angular.isDefined(o.title) ? o.title : "progressbar", t.$watch("value", function (e) {
            t.recalculatePercentage()
        }), t.recalculatePercentage = function () {
            var e = a.bars.reduce(function (e, t) {
                return t.percent = +(100 * t.value / t.max).toFixed(2), e + t.percent
            }, 0);
            e > 100 && (t.percent -= e - 100)
        }, t.$on("$destroy", function () {
            n = null, a.removeBar(t)
        })
    }, this.removeBar = function (e) {
        this.bars.splice(this.bars.indexOf(e), 1), this.bars.forEach(function (e) {
            e.recalculatePercentage()
        })
    }, e.$watch("max", function (t) {
        a.bars.forEach(function (t) {
            t.max = e.max, t.recalculatePercentage()
        })
    })
}]).directive("uibProgress", function () {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        require: "uibProgress",
        scope: {max: "=?"},
        templateUrl: "uib/template/progressbar/progress.html"
    }
}).directive("uibBar", function () {
    return {
        replace: !0,
        transclude: !0,
        require: "^uibProgress",
        scope: {value: "=", type: "@"},
        templateUrl: "uib/template/progressbar/bar.html",
        link: function (e, t, n, a) {
            a.addBar(e, t, n)
        }
    }
}).directive("uibProgressbar", function () {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        scope: {value: "=", max: "=?", type: "@"},
        templateUrl: "uib/template/progressbar/progressbar.html",
        link: function (e, t, n, a) {
            a.addBar(e, angular.element(t.children()[0]), {title: n.title})
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null,
    titles: ["one", "two", "three", "four", "five"]
}).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function (e, t, n) {
    var a = {$setViewValue: angular.noop};
    this.init = function (i) {
        a = i, a.$render = this.render, a.$formatters.push(function (e) {
            return angular.isNumber(e) && e << 0 !== e && (e = Math.round(e)), e
        }), this.stateOn = angular.isDefined(t.stateOn) ? e.$parent.$eval(t.stateOn) : n.stateOn, this.stateOff = angular.isDefined(t.stateOff) ? e.$parent.$eval(t.stateOff) : n.stateOff;
        var o = angular.isDefined(t.titles) ? e.$parent.$eval(t.titles) : n.titles;
        this.titles = angular.isArray(o) && o.length > 0 ? o : n.titles;
        var r = angular.isDefined(t.ratingStates) ? e.$parent.$eval(t.ratingStates) : new Array(angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max);
        e.range = this.buildTemplateObjects(r)
    }, this.buildTemplateObjects = function (e) {
        for (var t = 0, n = e.length; n > t; t++)e[t] = angular.extend({index: t}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff,
            title: this.getTitle(t)
        }, e[t]);
        return e
    }, this.getTitle = function (e) {
        return e >= this.titles.length ? e + 1 : this.titles[e]
    }, e.rate = function (t) {
        !e.readonly && t >= 0 && t <= e.range.length && (a.$setViewValue(a.$viewValue === t ? 0 : t), a.$render())
    }, e.enter = function (t) {
        e.readonly || (e.value = t), e.onHover({value: t})
    }, e.reset = function () {
        e.value = a.$viewValue, e.onLeave()
    }, e.onKeydown = function (t) {
        /(37|38|39|40)/.test(t.which) && (t.preventDefault(), t.stopPropagation(), e.rate(e.value + (38 === t.which || 39 === t.which ? 1 : -1)))
    }, this.render = function () {
        e.value = a.$viewValue
    }
}]).directive("uibRating", function () {
    return {
        require: ["uibRating", "ngModel"],
        scope: {readonly: "=?", onHover: "&", onLeave: "&"},
        controller: "UibRatingController",
        templateUrl: "uib/template/rating/rating.html",
        replace: !0,
        link: function (e, t, n, a) {
            var i = a[0], o = a[1];
            i.init(o)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function (e) {
    var t = this, n = t.tabs = e.tabs = [];
    t.select = function (e) {
        angular.forEach(n, function (t) {
            t.active && t !== e && (t.active = !1, t.onDeselect(), e.selectCalled = !1)
        }), e.active = !0, e.selectCalled || (e.onSelect(), e.selectCalled = !0)
    }, t.addTab = function (e) {
        n.push(e), 1 === n.length && e.active !== !1 ? e.active = !0 : e.active ? t.select(e) : e.active = !1
    }, t.removeTab = function (e) {
        var i = n.indexOf(e);
        if (e.active && n.length > 1 && !a) {
            var o = i === n.length - 1 ? i - 1 : i + 1;
            t.select(n[o])
        }
        n.splice(i, 1)
    };
    var a;
    e.$on("$destroy", function () {
        a = !0
    })
}]).directive("uibTabset", function () {
    return {
        transclude: !0,
        replace: !0,
        scope: {type: "@"},
        controller: "UibTabsetController",
        templateUrl: "uib/template/tabs/tabset.html",
        link: function (e, t, n) {
            e.vertical = !!angular.isDefined(n.vertical) && e.$parent.$eval(n.vertical), e.justified = !!angular.isDefined(n.justified) && e.$parent.$eval(n.justified)
        }
    }
}).directive("uibTab", ["$parse", function (e) {
    return {
        require: "^uibTabset",
        replace: !0,
        templateUrl: "uib/template/tabs/tab.html",
        transclude: !0,
        scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"},
        controller: function () {
        },
        controllerAs: "tab",
        link: function (t, n, a, i, o) {
            t.$watch("active", function (e) {
                e && i.select(t)
            }), t.disabled = !1, a.disable && t.$parent.$watch(e(a.disable), function (e) {
                t.disabled = !!e
            }), t.select = function () {
                t.disabled || (t.active = !0)
            }, i.addTab(t), t.$on("$destroy", function () {
                i.removeTab(t)
            }), t.$transcludeFn = o
        }
    }
}]).directive("uibTabHeadingTransclude", function () {
    return {
        restrict: "A", require: "^uibTab", link: function (e, t) {
            e.$watch("headingElement", function (e) {
                e && (t.html(""), t.append(e))
            })
        }
    }
}).directive("uibTabContentTransclude", function () {
    function e(e) {
        return e.tagName && (e.hasAttribute("uib-tab-heading") || e.hasAttribute("data-uib-tab-heading") || e.hasAttribute("x-uib-tab-heading") || "uib-tab-heading" === e.tagName.toLowerCase() || "data-uib-tab-heading" === e.tagName.toLowerCase() || "x-uib-tab-heading" === e.tagName.toLowerCase())
    }

    return {
        restrict: "A", require: "^uibTabset", link: function (t, n, a) {
            var i = t.$eval(a.uibTabContentTransclude);
            i.$transcludeFn(i.$parent, function (t) {
                angular.forEach(t, function (t) {
                    e(t) ? i.headingElement = t : n.append(t)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    showMeridian: !0,
    showSeconds: !1,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0,
    showSpinners: !0,
    templateUrl: "uib/template/timepicker/timepicker.html"
}).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function (e, t, n, a, i, o, r) {
    function l() {
        var t = +e.hours, n = e.showMeridian ? t > 0 && 13 > t : t >= 0 && 24 > t;
        return n ? (e.showMeridian && (12 === t && (t = 0), e.meridian === $[1] && (t += 12)), t) : void 0
    }

    function s() {
        var t = +e.minutes;
        return t >= 0 && 60 > t ? t : void 0
    }

    function u() {
        var t = +e.seconds;
        return t >= 0 && 60 > t ? t : void 0
    }

    function c(e) {
        return null === e ? "" : angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e.toString()
    }

    function p(e) {
        d(), v.$setViewValue(new Date(b)), m(e)
    }

    function d() {
        v.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1, e.invalidSeconds = !1
    }

    function m(t) {
        if (v.$modelValue) {
            var n = b.getHours(), a = b.getMinutes(), i = b.getSeconds();
            e.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), e.hours = "h" === t ? n : c(n), "m" !== t && (e.minutes = c(a)), e.meridian = b.getHours() < 12 ? $[0] : $[1], "s" !== t && (e.seconds = c(i)), e.meridian = b.getHours() < 12 ? $[0] : $[1]
        } else e.hours = null, e.minutes = null, e.seconds = null, e.meridian = $[0]
    }

    function f(e) {
        b = g(b, e), p()
    }

    function h(e, t) {
        return g(e, 60 * t)
    }

    function g(e, t) {
        var n = new Date(e.getTime() + 1e3 * t), a = new Date(e);
        return a.setHours(n.getHours(), n.getMinutes(), n.getSeconds()), a
    }

    var b = new Date, v = {$setViewValue: angular.noop}, $ = angular.isDefined(n.meridians) ? e.$parent.$eval(n.meridians) : r.meridians || o.DATETIME_FORMATS.AMPMS;
    e.tabindex = angular.isDefined(n.tabindex) ? n.tabindex : 0, t.removeAttr("tabindex"), this.init = function (t, a) {
        v = t, v.$render = this.render, v.$formatters.unshift(function (e) {
            return e ? new Date(e) : null
        });
        var i = a.eq(0), o = a.eq(1), l = a.eq(2), s = angular.isDefined(n.mousewheel) ? e.$parent.$eval(n.mousewheel) : r.mousewheel;
        s && this.setupMousewheelEvents(i, o, l);
        var u = angular.isDefined(n.arrowkeys) ? e.$parent.$eval(n.arrowkeys) : r.arrowkeys;
        u && this.setupArrowkeyEvents(i, o, l), e.readonlyInput = angular.isDefined(n.readonlyInput) ? e.$parent.$eval(n.readonlyInput) : r.readonlyInput, this.setupInputEvents(i, o, l)
    };
    var y = r.hourStep;
    n.hourStep && e.$parent.$watch(a(n.hourStep), function (e) {
        y = +e
    });
    var w = r.minuteStep;
    n.minuteStep && e.$parent.$watch(a(n.minuteStep), function (e) {
        w = +e
    });
    var k;
    e.$parent.$watch(a(n.min), function (e) {
        var t = new Date(e);
        k = isNaN(t) ? void 0 : t
    });
    var D;
    e.$parent.$watch(a(n.max), function (e) {
        var t = new Date(e);
        D = isNaN(t) ? void 0 : t
    });
    var x = !1;
    n.ngDisabled && e.$parent.$watch(a(n.ngDisabled), function (e) {
        x = e
    }), e.noIncrementHours = function () {
        var e = h(b, 60 * y);
        return x || e > D || b > e && k > e
    }, e.noDecrementHours = function () {
        var e = h(b, 60 * -y);
        return x || k > e || e > b && e > D
    }, e.noIncrementMinutes = function () {
        var e = h(b, w);
        return x || e > D || b > e && k > e
    }, e.noDecrementMinutes = function () {
        var e = h(b, -w);
        return x || k > e || e > b && e > D
    }, e.noIncrementSeconds = function () {
        var e = g(b, C);
        return x || e > D || b > e && k > e
    }, e.noDecrementSeconds = function () {
        var e = g(b, -C);
        return x || k > e || e > b && e > D
    }, e.noToggleMeridian = function () {
        return b.getHours() < 12 ? x || h(b, 720) > D : x || h(b, -720) < k
    };
    var C = r.secondStep;
    n.secondStep && e.$parent.$watch(a(n.secondStep), function (e) {
        C = +e
    }), e.showSeconds = r.showSeconds, n.showSeconds && e.$parent.$watch(a(n.showSeconds), function (t) {
        e.showSeconds = !!t
    }), e.showMeridian = r.showMeridian, n.showMeridian && e.$parent.$watch(a(n.showMeridian), function (t) {
        if (e.showMeridian = !!t, v.$error.time) {
            var n = l(), a = s();
            angular.isDefined(n) && angular.isDefined(a) && (b.setHours(n), p())
        } else m()
    }), this.setupMousewheelEvents = function (t, n, a) {
        var i = function (e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
            return e.detail || t > 0
        };
        t.bind("mousewheel wheel", function (t) {
            x || e.$apply(i(t) ? e.incrementHours() : e.decrementHours()), t.preventDefault()
        }), n.bind("mousewheel wheel", function (t) {
            x || e.$apply(i(t) ? e.incrementMinutes() : e.decrementMinutes()), t.preventDefault()
        }), a.bind("mousewheel wheel", function (t) {
            x || e.$apply(i(t) ? e.incrementSeconds() : e.decrementSeconds()), t.preventDefault()
        })
    }, this.setupArrowkeyEvents = function (t, n, a) {
        t.bind("keydown", function (t) {
            x || (38 === t.which ? (t.preventDefault(), e.incrementHours(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementHours(), e.$apply()))
        }), n.bind("keydown", function (t) {
            x || (38 === t.which ? (t.preventDefault(), e.incrementMinutes(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementMinutes(), e.$apply()))
        }), a.bind("keydown", function (t) {
            x || (38 === t.which ? (t.preventDefault(), e.incrementSeconds(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementSeconds(), e.$apply()))
        })
    }, this.setupInputEvents = function (t, n, a) {
        if (e.readonlyInput)return e.updateHours = angular.noop, e.updateMinutes = angular.noop, void(e.updateSeconds = angular.noop);
        var i = function (t, n, a) {
            v.$setViewValue(null), v.$setValidity("time", !1), angular.isDefined(t) && (e.invalidHours = t), angular.isDefined(n) && (e.invalidMinutes = n), angular.isDefined(a) && (e.invalidSeconds = a)
        };
        e.updateHours = function () {
            var e = l(), t = s();
            v.$setDirty(), angular.isDefined(e) && angular.isDefined(t) ? (b.setHours(e), b.setMinutes(t), k > b || b > D ? i(!0) : p("h")) : i(!0)
        }, t.bind("blur", function (t) {
            v.$setTouched(), null === e.hours || "" === e.hours ? i(!0) : !e.invalidHours && e.hours < 10 && e.$apply(function () {
                e.hours = c(e.hours)
            })
        }), e.updateMinutes = function () {
            var e = s(), t = l();
            v.$setDirty(), angular.isDefined(e) && angular.isDefined(t) ? (b.setHours(t), b.setMinutes(e), k > b || b > D ? i(void 0, !0) : p("m")) : i(void 0, !0)
        }, n.bind("blur", function (t) {
            v.$setTouched(), null === e.minutes ? i(void 0, !0) : !e.invalidMinutes && e.minutes < 10 && e.$apply(function () {
                e.minutes = c(e.minutes)
            })
        }), e.updateSeconds = function () {
            var e = u();
            v.$setDirty(), angular.isDefined(e) ? (b.setSeconds(e), p("s")) : i(void 0, void 0, !0)
        }, a.bind("blur", function (t) {
            !e.invalidSeconds && e.seconds < 10 && e.$apply(function () {
                e.seconds = c(e.seconds)
            })
        })
    }, this.render = function () {
        var t = v.$viewValue;
        isNaN(t) ? (v.$setValidity("time", !1), i.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (t && (b = t), k > b || b > D ? (v.$setValidity("time", !1), e.invalidHours = !0, e.invalidMinutes = !0) : d(), m())
    }, e.showSpinners = angular.isDefined(n.showSpinners) ? e.$parent.$eval(n.showSpinners) : r.showSpinners, e.incrementHours = function () {
        e.noIncrementHours() || f(60 * y * 60)
    }, e.decrementHours = function () {
        e.noDecrementHours() || f(60 * -y * 60)
    }, e.incrementMinutes = function () {
        e.noIncrementMinutes() || f(60 * w)
    }, e.decrementMinutes = function () {
        e.noDecrementMinutes() || f(60 * -w)
    }, e.incrementSeconds = function () {
        e.noIncrementSeconds() || f(C)
    }, e.decrementSeconds = function () {
        e.noDecrementSeconds() || f(-C)
    }, e.toggleMeridian = function () {
        var t = s(), n = l();
        e.noToggleMeridian() || (angular.isDefined(t) && angular.isDefined(n) ? f(720 * (b.getHours() < 12 ? 60 : -60)) : e.meridian = e.meridian === $[0] ? $[1] : $[0])
    }, e.blur = function () {
        v.$setTouched()
    }
}]).directive("uibTimepicker", ["uibTimepickerConfig", function (e) {
    return {
        require: ["uibTimepicker", "?^ngModel"],
        controller: "UibTimepickerController",
        controllerAs: "timepicker",
        replace: !0,
        scope: {},
        templateUrl: function (t, n) {
            return n.templateUrl || e.templateUrl
        },
        link: function (e, t, n, a) {
            var i = a[0], o = a[1];
            o && i.init(o, t.find("input"))
        }
    }
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.debounce", "ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function (e) {
    var t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function (n) {
            var a = n.match(t);
            if (!a)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
            return {itemName: a[3], source: e(a[4]), viewMapper: e(a[2] || a[1]), modelMapper: e(a[1])}
        }
    }
}]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$$debounce", "$uibPosition", "uibTypeaheadParser", function (e, t, n, a, i, o, r, l, s, u, c, p, d) {
    function m() {
        q.moveInProgress || (q.moveInProgress = !0, q.$digest()), Z()
    }

    function f() {
        q.position = S ? p.offset(t) : p.position(t), q.position.top += t.prop("offsetHeight")
    }

    var h, g, b = [9, 13, 27, 38, 40], v = 200, $ = e.$eval(n.typeaheadMinLength);
    $ || 0 === $ || ($ = 1);
    var y = e.$eval(n.typeaheadWaitMs) || 0, w = e.$eval(n.typeaheadEditable) !== !1;
    e.$watch(n.typeaheadEditable, function (e) {
        w = e !== !1
    });
    var k, D, x = i(n.typeaheadLoading).assign || angular.noop, C = i(n.typeaheadOnSelect), M = !!angular.isDefined(n.typeaheadSelectOnBlur) && e.$eval(n.typeaheadSelectOnBlur), T = i(n.typeaheadNoResults).assign || angular.noop, O = n.typeaheadInputFormatter ? i(n.typeaheadInputFormatter) : void 0, S = !!n.typeaheadAppendToBody && e.$eval(n.typeaheadAppendToBody), P = n.typeaheadAppendTo ? e.$eval(n.typeaheadAppendTo) : null, E = e.$eval(n.typeaheadFocusFirst) !== !1, I = !!n.typeaheadSelectOnExact && e.$eval(n.typeaheadSelectOnExact), U = i(n.typeaheadIsOpen).assign || angular.noop, A = e.$eval(n.typeaheadShowHint) || !1, N = i(n.ngModel), F = i(n.ngModel + "($$$p)"), H = function (t, n) {
        return angular.isFunction(N(e)) && g && g.$options && g.$options.getterSetter ? F(t, {$$$p: n}) : N.assign(t, n)
    }, V = d.parse(n.uibTypeahead), q = e.$new(), R = e.$on("$destroy", function () {
        q.$destroy()
    });
    q.$on("$destroy", R);
    var z = "typeahead-" + q.$id + "-" + Math.floor(1e4 * Math.random());
    t.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": z});
    var Y, L;
    A && (Y = angular.element("<div></div>"), Y.css("position", "relative"), t.after(Y), L = t.clone(), L.attr("placeholder", ""), L.val(""), L.css({
        position: "absolute",
        top: "0px",
        left: "0px",
        "border-color": "transparent",
        "box-shadow": "none",
        opacity: 1,
        background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
        color: "#999"
    }), t.css({
        position: "relative",
        "vertical-align": "top",
        "background-color": "transparent"
    }), Y.append(L), L.after(t));
    var B = angular.element("<div uib-typeahead-popup></div>");
    B.attr({
        id: z,
        matches: "matches",
        active: "activeIdx",
        select: "select(activeIdx, evt)",
        "move-in-progress": "moveInProgress",
        query: "query",
        position: "position",
        "assign-is-open": "assignIsOpen(isOpen)",
        debounce: "debounceUpdate"
    }), angular.isDefined(n.typeaheadTemplateUrl) && B.attr("template-url", n.typeaheadTemplateUrl), angular.isDefined(n.typeaheadPopupTemplateUrl) && B.attr("popup-template-url", n.typeaheadPopupTemplateUrl);
    var j = function () {
        A && L.val("")
    }, W = function () {
        q.matches = [], q.activeIdx = -1, t.attr("aria-expanded", !1), j()
    }, _ = function (e) {
        return z + "-option-" + e
    };
    q.$watch("activeIdx", function (e) {
        0 > e ? t.removeAttr("aria-activedescendant") : t.attr("aria-activedescendant", _(e))
    });
    var G = function (e, t) {
        return !!(q.matches.length > t && e) && e.toUpperCase() === q.matches[t].label.toUpperCase()
    }, K = function (n, a) {
        var i = {$viewValue: n};
        x(e, !0), T(e, !1), o.when(V.source(e, i)).then(function (o) {
            var r = n === h.$viewValue;
            if (r && k)if (o && o.length > 0) {
                q.activeIdx = E ? 0 : -1, T(e, !1), q.matches.length = 0;
                for (var l = 0; l < o.length; l++)i[V.itemName] = o[l], q.matches.push({
                    id: _(l),
                    label: V.viewMapper(q, i),
                    model: o[l]
                });
                if (q.query = n, f(), t.attr("aria-expanded", !0), I && 1 === q.matches.length && G(n, 0) && (angular.isNumber(q.debounceUpdate) || angular.isObject(q.debounceUpdate) ? c(function () {
                        q.select(0, a)
                    }, angular.isNumber(q.debounceUpdate) ? q.debounceUpdate : q.debounceUpdate["default"]) : q.select(0, a)), A) {
                    var s = q.matches[0].label;
                    n.length > 0 && s.slice(0, n.length).toUpperCase() === n.toUpperCase() ? L.val(n + s.slice(n.length)) : L.val("")
                }
            } else W(), T(e, !0);
            r && x(e, !1)
        }, function () {
            W(), x(e, !1), T(e, !0)
        })
    };
    S && (angular.element(s).on("resize", m), l.find("body").on("scroll", m));
    var Z = c(function () {
        q.matches.length && f(), q.moveInProgress = !1
    }, v);
    q.moveInProgress = !1, q.query = void 0;
    var X, J = function (e) {
        X = r(function () {
            K(e)
        }, y)
    }, Q = function () {
        X && r.cancel(X)
    };
    W(), q.assignIsOpen = function (t) {
        U(e, t)
    }, q.select = function (a, i) {
        var o, l, s = {};
        D = !0, s[V.itemName] = l = q.matches[a].model, o = V.modelMapper(e, s), H(e, o), h.$setValidity("editable", !0), h.$setValidity("parse", !0), C(e, {
            $item: l,
            $model: o,
            $label: V.viewMapper(e, s),
            $event: i
        }), W(), q.$eval(n.typeaheadFocusOnSelect) !== !1 && r(function () {
            t[0].focus()
        }, 0, !1)
    }, t.on("keydown", function (e) {
        if (0 !== q.matches.length && -1 !== b.indexOf(e.which)) {
            if (-1 === q.activeIdx && (9 === e.which || 13 === e.which))return W(), void q.$digest();
            e.preventDefault();
            var t;
            switch (e.which) {
                case 9:
                case 13:
                    q.$apply(function () {
                        angular.isNumber(q.debounceUpdate) || angular.isObject(q.debounceUpdate) ? c(function () {
                            q.select(q.activeIdx, e)
                        }, angular.isNumber(q.debounceUpdate) ? q.debounceUpdate : q.debounceUpdate["default"]) : q.select(q.activeIdx, e)
                    });
                    break;
                case 27:
                    e.stopPropagation(), W(), q.$digest();
                    break;
                case 38:
                    q.activeIdx = (q.activeIdx > 0 ? q.activeIdx : q.matches.length) - 1, q.$digest(), t = B.find("li")[q.activeIdx], t.parentNode.scrollTop = t.offsetTop;
                    break;
                case 40:
                    q.activeIdx = (q.activeIdx + 1) % q.matches.length, q.$digest(), t = B.find("li")[q.activeIdx], t.parentNode.scrollTop = t.offsetTop
            }
        }
    }), t.bind("focus", function (e) {
        k = !0, 0 !== $ || h.$viewValue || r(function () {
            K(h.$viewValue, e)
        }, 0)
    }), t.bind("blur", function (e) {
        M && q.matches.length && -1 !== q.activeIdx && !D && (D = !0, q.$apply(function () {
            angular.isObject(q.debounceUpdate) && angular.isNumber(q.debounceUpdate.blur) ? c(function () {
                q.select(q.activeIdx, e)
            }, q.debounceUpdate.blur) : q.select(q.activeIdx, e)
        })), !w && h.$error.editable && (h.$viewValue = "", t.val("")), k = !1, D = !1
    });
    var ee = function (e) {
        t[0] !== e.target && 3 !== e.which && 0 !== q.matches.length && (W(), u.$$phase || q.$digest())
    };
    l.on("click", ee), e.$on("$destroy", function () {
        l.off("click", ee), (S || P) && te.remove(), S && (angular.element(s).off("resize", m), l.find("body").off("scroll", m)), B.remove(), A && Y.remove()
    });
    var te = a(B)(q);
    S ? l.find("body").append(te) : P ? angular.element(P).eq(0).append(te) : t.after(te), this.init = function (t, n) {
        h = t, g = n, q.debounceUpdate = h.$options && i(h.$options.debounce)(e), h.$parsers.unshift(function (t) {
            return k = !0, 0 === $ || t && t.length >= $ ? y > 0 ? (Q(), J(t)) : K(t) : (x(e, !1), Q(), W()), w ? t : t ? void h.$setValidity("editable", !1) : (h.$setValidity("editable", !0), null)
        }), h.$formatters.push(function (t) {
            var n, a, i = {};
            return w || h.$setValidity("editable", !0), O ? (i.$model = t, O(e, i)) : (i[V.itemName] = t, n = V.viewMapper(e, i), i[V.itemName] = void 0, a = V.viewMapper(e, i), n !== a ? n : t)
        })
    }
}]).directive("uibTypeahead", function () {
    return {
        controller: "UibTypeaheadController",
        require: ["ngModel", "^?ngModelOptions", "uibTypeahead"],
        link: function (e, t, n, a) {
            a[2].init(a[0], a[1])
        }
    }
}).directive("uibTypeaheadPopup", ["$$debounce", function (e) {
    return {
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "&",
            moveInProgress: "=",
            select: "&",
            assignIsOpen: "&",
            debounce: "&"
        }, replace: !0, templateUrl: function (e, t) {
            return t.popupTemplateUrl || "uib/template/typeahead/typeahead-popup.html"
        }, link: function (t, n, a) {
            t.templateUrl = a.templateUrl, t.isOpen = function () {
                var e = t.matches.length > 0;
                return t.assignIsOpen({isOpen: e}), e
            }, t.isActive = function (e) {
                return t.active === e
            }, t.selectActive = function (e) {
                t.active = e
            }, t.selectMatch = function (n, a) {
                var i = t.debounce();
                angular.isNumber(i) || angular.isObject(i) ? e(function () {
                    t.select({activeIdx: n, evt: a})
                }, angular.isNumber(i) ? i : i["default"]) : t.select({activeIdx: n, evt: a})
            }
        }
    }
}]).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function (e, t, n) {
    return {
        scope: {index: "=", match: "=", query: "="}, link: function (a, i, o) {
            var r = n(o.templateUrl)(a.$parent) || "uib/template/typeahead/typeahead-match.html";
            e(r).then(function (e) {
                var n = angular.element(e.trim());
                i.replaceWith(n), t(n)(a)
            })
        }
    }
}]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function (e, t, n) {
    function a(e) {
        return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    function i(e) {
        return /<.*>/g.test(e)
    }

    var o;
    return o = t.has("$sanitize"), function (t, r) {
        return !o && i(t) && n.warn("Unsafe use of typeahead please use ngSanitize"), t = r ? ("" + t).replace(new RegExp(a(r), "gi"), "<strong>$&</strong>") : t, o || (t = e.trustAsHtml(t)), t
    }
}]), angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/accordion/accordion-group.html", '<div class="panel" ng-class="panelClass || \'panel-default\'">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <div tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></div>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n\t  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')
}]), angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
}]), angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/datepicker/datepicker.html", '<div class="uib-datepicker" ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')
}]), angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/datepicker/day.html", '<table class="uib-daypicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/datepicker/month.html", '<table class="uib-monthpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/datepicker/popup.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/datepicker/popup.html", '<ul class="uib-datepicker-popup dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n\t<li ng-transclude></li>\n\t<li ng-if="showButtonBar" style="padding:10px 9px 2px" class="uib-button-bar">\n\t\t<span class="btn-group pull-left">\n\t\t\t<button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n\t\t\t<button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n\t\t</span>\n\t\t<button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close()">{{ getText(\'close\') }}</button>\n\t</li>\n</ul>\n')
}]), angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/datepicker/year.html", '<table class="uib-yearpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/modal/backdrop.html", '<div class="modal-backdrop"\n     uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
}]), angular.module("uib/template/modal/window.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')
}]), angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/pager/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')
}]), angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')
}]), angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]), angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/popover/popover-html.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')
}]), angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
}]), angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')
}]), angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/progressbar/progress.html", '<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')
}]), angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')
}]), angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n')
}]), angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}" class="uib-tab">\n  <div ng-click="select()" uib-tab-heading-transclude>{{heading}}</div>\n</li>\n')
}]), angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/timepicker/timepicker.html", '<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input style="width:50px;" type="text" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/typeahead/typeahead-match.html", '<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')
}]), angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (e) {
    e.put("uib/template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]), angular.module("ui.bootstrap.carousel").run(function () {
    !angular.$$csp().noInlineStyle && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>')
}), angular.module("ui.bootstrap.tabs").run(function () {
    !angular.$$csp().noInlineStyle && angular.element(document).find("head").prepend('<style type="text/css">.uib-tab > div{position:relative;display:block;padding:10px 15px;outline:0;color:#337ab7;}.uib-tab > div:focus,.uib-tab > div:hover{background-color:#eee;color:#23527c;}.uib-tab.disabled > div{color:#777;}.uib-tab.disabled > div:focus,.uib-tab.disabled > div:hover{color:#777;cursor:not-allowed;background-color:transparent;}.nav-tabs > .uib-tab > div{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0;}.nav-tabs > .uib-tab > div:hover{border-color:#eee #eee #ddd;}.nav-tabs > .uib-tab.active > div,.nav-tabs > .uib-tab.active > div:focus,.nav-tabs > .uib-tab.active > div:hover{color:#555;cursor:default;background-color:#fff;border-color:#ddd #ddd transparent #ddd;}.nav-pills > .uib-tab > div{border-radius:4px;}.nav-pills > .uib-tab.active > div,.nav-pills > .uib-tab.active > div:focus,.nav-pills > .uib-tab.active > div:hover{color:#fff;background-color:#337ab7;}</style>')
});
!function (e, o) {
    "use strict";
    function t(e, t, n) {
        var i = n.baseHref(), r = e[0];
        return function (e, n, u) {
            var c, s;
            u = u || {}, s = u.expires, c = o.isDefined(u.path) ? u.path : i, o.isUndefined(n) && (s = "Thu, 01 Jan 1970 00:00:00 GMT", n = ""), o.isString(s) && (s = new Date(s)), n = encodeURIComponent(e) + "=" + encodeURIComponent(n), n = n + (c ? ";path=" + c : "") + (u.domain ? ";domain=" + u.domain : ""), n += s ? ";expires=" + s.toUTCString() : "", n += u.secure ? ";secure" : "", u = n.length + 1, 4096 < u && t.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + u + " > 4096 bytes)!"), r.cookie = n
        }
    }

    o.module("ngCookies", ["ng"]).provider("$cookies", [function () {
        var e = this.defaults = {};
        this.$get = ["$$cookieReader", "$$cookieWriter", function (t, n) {
            return {
                get: function (e) {
                    return t()[e]
                }, getObject: function (e) {
                    return (e = this.get(e)) ? o.fromJson(e) : e
                }, getAll: function () {
                    return t()
                }, put: function (t, i, r) {
                    n(t, i, r ? o.extend({}, e, r) : e)
                }, putObject: function (e, t, n) {
                    this.put(e, o.toJson(t), n)
                }, remove: function (t, i) {
                    n(t, void 0, i ? o.extend({}, e, i) : e)
                }
            }
        }]
    }]), o.module("ngCookies").factory("$cookieStore", ["$cookies", function (e) {
        return {
            get: function (o) {
                return e.getObject(o)
            }, put: function (o, t) {
                e.putObject(o, t)
            }, remove: function (o) {
                e.remove(o)
            }
        }
    }]), t.$inject = ["$document", "$log", "$browser"], o.module("ngCookies").provider("$$cookieWriter", function () {
        this.$get = t
    })
}(window, window.angular);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (e, t, r) {
    "use strict";
    function n(e, t) {
        return J(new (J(function () {
        }, {prototype: e})), t)
    }

    function a(e) {
        return B(arguments, function (t) {
            t !== e && B(t, function (t, r) {
                e.hasOwnProperty(r) || (e[r] = t)
            })
        }), e
    }

    function i(e, t) {
        var r = [];
        for (var n in e.path) {
            if (e.path[n] !== t.path[n])break;
            r.push(e.path[n])
        }
        return r
    }

    function o(e) {
        if (Object.keys)return Object.keys(e);
        var t = [];
        return B(e, function (e, r) {
            t.push(r)
        }), t
    }

    function u(e, t) {
        if (Array.prototype.indexOf)return e.indexOf(t, Number(arguments[2]) || 0);
        var r = e.length >>> 0, n = Number(arguments[2]) || 0;
        for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += r); r > n; n++)if (n in e && e[n] === t)return n;
        return -1
    }

    function s(e, t, r, n) {
        var a, s = i(r, n), l = {}, c = [];
        for (var f in s)if (s[f] && s[f].params && (a = o(s[f].params), a.length))for (var p in a)u(c, a[p]) >= 0 || (c.push(a[p]), l[a[p]] = e[a[p]]);
        return J({}, l, t)
    }

    function l(e, t, r) {
        if (!r) {
            r = [];
            for (var n in e)r.push(n)
        }
        for (var a = 0; a < r.length; a++) {
            var i = r[a];
            if (e[i] != t[i])return !1
        }
        return !0
    }

    function c(e, t) {
        var r = {};
        return B(e, function (e) {
            r[e] = t[e]
        }), r
    }

    function f(e) {
        var t = {}, r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        return B(r, function (r) {
            r in e && (t[r] = e[r])
        }), t
    }

    function p(e) {
        var t = {}, r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var n in e)-1 == u(r, n) && (t[n] = e[n]);
        return t
    }

    function h(e, t) {
        var r = z(e), n = r ? [] : {};
        return B(e, function (e, a) {
            t(e, a) && (n[r ? n.length : a] = e)
        }), n
    }

    function v(e, t) {
        var r = z(e) ? [] : {};
        return B(e, function (e, n) {
            r[n] = t(e, n)
        }), r
    }

    function $(e, t) {
        var n = 1, i = 2, s = {}, l = [], c = s, f = J(e.when(s), {$$promises: s, $$values: s});
        this.study = function (s) {
            function h(e, r) {
                if (g[r] !== i) {
                    if (m.push(r), g[r] === n)throw m.splice(0, u(m, r)), new Error("Cyclic dependency: " + m.join(" -> "));
                    if (g[r] = n, U(e))d.push(r, [function () {
                        return t.get(e)
                    }], l); else {
                        var a = t.annotate(e);
                        B(a, function (e) {
                            e !== r && s.hasOwnProperty(e) && h(s[e], e)
                        }), d.push(r, e, a)
                    }
                    m.pop(), g[r] = i
                }
            }

            function v(e) {
                return T(e) && e.then && e.$$promises
            }

            if (!T(s))throw new Error("'invocables' must be an object");
            var $ = o(s || {}), d = [], m = [], g = {};
            return B(s, h), s = m = g = null, function (n, i, o) {
                function u() {
                    --w || (b || a(y, i.$$values), m.$$values = y, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, h.resolve(y))
                }

                function s(e) {
                    m.$$failure = e, h.reject(e)
                }

                function l(r, a, i) {
                    function l(e) {
                        f.reject(e), s(e)
                    }

                    function c() {
                        if (!R(m.$$failure))try {
                            f.resolve(t.invoke(a, o, y)), f.promise.then(function (e) {
                                y[r] = e, u()
                            }, l)
                        } catch (e) {
                            l(e)
                        }
                    }

                    var f = e.defer(), p = 0;
                    B(i, function (e) {
                        g.hasOwnProperty(e) && !n.hasOwnProperty(e) && (p++, g[e].then(function (t) {
                            y[e] = t, --p || c()
                        }, l))
                    }), p || c(), g[r] = f.promise
                }

                if (v(n) && o === r && (o = i, i = n, n = null), n) {
                    if (!T(n))throw new Error("'locals' must be an object")
                } else n = c;
                if (i) {
                    if (!v(i))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else i = f;
                var h = e.defer(), m = h.promise, g = m.$$promises = {}, y = J({}, n), w = 1 + d.length / 3, b = !1;
                if (R(i.$$failure))return s(i.$$failure), m;
                i.$$inheritedValues && a(y, p(i.$$inheritedValues, $)), J(g, i.$$promises), i.$$values ? (b = a(y, p(i.$$values, $)), m.$$inheritedValues = p(i.$$values, $), u()) : (i.$$inheritedValues && (m.$$inheritedValues = p(i.$$inheritedValues, $)), i.then(u, s));
                for (var S = 0, E = d.length; E > S; S += 3)n.hasOwnProperty(d[S]) ? u() : l(d[S], d[S + 1], d[S + 2]);
                return m
            }
        }, this.resolve = function (e, t, r, n) {
            return this.study(e)(t, r, n)
        }
    }

    function d(e, t, r) {
        this.fromConfig = function (e, t, r) {
            return R(e.template) ? this.fromString(e.template, t) : R(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : R(e.templateProvider) ? this.fromProvider(e.templateProvider, t, r) : null
        }, this.fromString = function (e, t) {
            return F(e) ? e(t) : e
        }, this.fromUrl = function (r, n) {
            return F(r) && (r = r(n)), null == r ? null : e.get(r, {
                cache: t,
                headers: {Accept: "text/html"}
            }).then(function (e) {
                return e.data
            })
        }, this.fromProvider = function (e, t, n) {
            return r.invoke(e, null, n || {params: t})
        }
    }

    function m(e, t, a) {
        function i(t, r, n, a) {
            if (d.push(t), v[t])return v[t];
            if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
            if ($[t])throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
            return $[t] = new _.Param(t, r, n, a), $[t]
        }

        function o(e, t, r, n) {
            var a = ["", ""], i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!t)return i;
            switch (r) {
                case!1:
                    a = ["(", ")" + (n ? "?" : "")];
                    break;
                case!0:
                    i = i.replace(/\/$/, ""), a = ["(?:/(", ")|/)?"];
                    break;
                default:
                    a = ["(" + r + "|", ")?"]
            }
            return i + a[0] + t + a[1]
        }

        function u(a, i) {
            var o, u, s, l, c;
            return o = a[2] || a[3], c = t.params[o], s = e.substring(p, a.index), u = i ? a[4] : a[4] || ("*" == a[1] ? ".*" : null), u && (l = _.type(u) || n(_.type("string"), {pattern: new RegExp(u, t.caseInsensitive ? "i" : r)})), {
                id: o,
                regexp: u,
                segment: s,
                type: l,
                cfg: c
            }
        }

        t = J({params: {}}, T(t) ? t : {});
        var s, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, c = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = "^", p = 0, h = this.segments = [], v = a ? a.params : {}, $ = this.params = a ? a.params.$$new() : new _.ParamSet, d = [];
        this.source = e;
        for (var m, g, y; (s = l.exec(e)) && (m = u(s, !1), !(m.segment.indexOf("?") >= 0));)g = i(m.id, m.type, m.cfg, "path"), f += o(m.segment, g.type.pattern.source, g.squash, g.isOptional), h.push(m.segment), p = l.lastIndex;
        y = e.substring(p);
        var w = y.indexOf("?");
        if (w >= 0) {
            var b = this.sourceSearch = y.substring(w);
            if (y = y.substring(0, w), this.sourcePath = e.substring(0, p + w), b.length > 0)for (p = 0; s = c.exec(b);)m = u(s, !0), g = i(m.id, m.type, m.cfg, "search"), p = l.lastIndex
        } else this.sourcePath = e, this.sourceSearch = "";
        f += o(y) + (t.strict === !1 ? "/?" : "") + "$", h.push(y), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : r), this.prefix = h[0], this.$$paramNames = d
    }

    function g(e) {
        J(this, e)
    }

    function y() {
        function e(e) {
            return null != e ? e.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : e
        }

        function a(e) {
            return null != e ? e.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : e
        }

        function i() {
            return {strict: $, caseInsensitive: p}
        }

        function s(e) {
            return F(e) || z(e) && F(e[e.length - 1])
        }

        function l() {
            for (; S.length;) {
                var e = S.shift();
                if (e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");
                t.extend(w[e.name], f.invoke(e.def))
            }
        }

        function c(e) {
            J(this, e || {})
        }

        _ = this;
        var f, p = !1, $ = !0, d = !1, w = {}, b = !0, S = [], E = {
            string: {
                encode: e, decode: a, is: function (e) {
                    return null == e || !R(e) || "string" == typeof e
                }, pattern: /[^\/]*/
            },
            "int": {
                encode: e, decode: function (e) {
                    return parseInt(e, 10)
                }, is: function (e) {
                    return R(e) && this.decode(e.toString()) === e
                }, pattern: /\d+/
            },
            bool: {
                encode: function (e) {
                    return e ? 1 : 0
                }, decode: function (e) {
                    return 0 !== parseInt(e, 10)
                }, is: function (e) {
                    return e === !0 || e === !1
                }, pattern: /0|1/
            },
            date: {
                encode: function (e) {
                    return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : r
                },
                decode: function (e) {
                    if (this.is(e))return e;
                    var t = this.capture.exec(e);
                    return t ? new Date(t[1], t[2] - 1, t[3]) : r
                },
                is: function (e) {
                    return e instanceof Date && !isNaN(e.valueOf())
                },
                equals: function (e, t) {
                    return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {encode: t.toJson, decode: t.fromJson, is: t.isObject, equals: t.equals, pattern: /[^\/]*/},
            any: {encode: t.identity, decode: t.identity, equals: t.equals, pattern: /.*/}
        };
        y.$$getDefaultValue = function (e) {
            if (!s(e.value))return e.value;
            if (!f)throw new Error("Injectable functions cannot be called at configuration time");
            return f.invoke(e.value)
        }, this.caseInsensitive = function (e) {
            return R(e) && (p = e), p
        }, this.strictMode = function (e) {
            return R(e) && ($ = e), $
        }, this.defaultSquashPolicy = function (e) {
            if (!R(e))return d;
            if (e !== !0 && e !== !1 && !U(e))throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
            return d = e, e
        }, this.compile = function (e, t) {
            return new m(e, J(i(), t))
        }, this.isMatcher = function (e) {
            if (!T(e))return !1;
            var t = !0;
            return B(m.prototype, function (r, n) {
                F(r) && (t = t && R(e[n]) && F(e[n]))
            }), t
        }, this.type = function (e, t, r) {
            if (!R(t))return w[e];
            if (w.hasOwnProperty(e))throw new Error("A type named '" + e + "' has already been defined.");
            return w[e] = new g(J({name: e}, t)), r && (S.push({name: e, def: r}), b || l()), this
        }, B(E, function (e, t) {
            w[t] = new g(J({name: t}, e))
        }), w = n(w, {}), this.$get = ["$injector", function (e) {
            return f = e, b = !1, l(), B(E, function (e, t) {
                w[t] || (w[t] = new g(e))
            }), this
        }], this.Param = function (e, n, a, i) {
            function l(e) {
                var t = T(e) ? o(e) : [], r = -1 === u(t, "value") && -1 === u(t, "type") && -1 === u(t, "squash") && -1 === u(t, "array");
                return r && (e = {value: e}), e.$$fn = s(e.value) ? e.value : function () {
                    return e.value
                }, e
            }

            function c(r, n, a) {
                if (r.type && n)throw new Error("Param '" + e + "' has two type configurations.");
                return n ? n : r.type ? t.isString(r.type) ? w[r.type] : r.type instanceof g ? r.type : new g(r.type) : "config" === a ? w.any : w.string
            }

            function p() {
                var t = {array: "search" === i && "auto"}, r = e.match(/\[\]$/) ? {array: !0} : {};
                return J(t, r, a).array
            }

            function $(e, t) {
                var r = e.squash;
                if (!t || r === !1)return !1;
                if (!R(r) || null == r)return d;
                if (r === !0 || U(r))return r;
                throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
            }

            function m(e, t, n, a) {
                var i, o, s = [{from: "", to: n || t ? r : ""}, {from: null, to: n || t ? r : ""}];
                return i = z(e.replace) ? e.replace : [], U(a) && i.push({from: a, to: r}), o = v(i, function (e) {
                    return e.from
                }), h(s, function (e) {
                    return -1 === u(o, e.from)
                }).concat(i)
            }

            function y() {
                if (!f)throw new Error("Injectable functions cannot be called at configuration time");
                var e = f.invoke(a.$$fn);
                if (null !== e && e !== r && !E.type.is(e))throw new Error("Default value (" + e + ") for parameter '" + E.id + "' is not an instance of Type (" + E.type.name + ")");
                return e
            }

            function b(e) {
                function t(e) {
                    return function (t) {
                        return t.from === e
                    }
                }

                function r(e) {
                    var r = v(h(E.replace, t(e)), function (e) {
                        return e.to
                    });
                    return r.length ? r[0] : e
                }

                return e = r(e), R(e) ? E.type.$normalize(e) : y()
            }

            function S() {
                return "{Param:" + e + " " + n + " squash: '" + j + "' optional: " + P + "}"
            }

            var E = this;
            a = l(a), n = c(a, n, i);
            var x = p();
            n = x ? n.$asArray(x, "search" === i) : n, "string" !== n.name || x || "path" !== i || a.value !== r || (a.value = "");
            var P = a.value !== r, j = $(a, P), A = m(a, x, P, j);
            J(this, {
                id: e,
                type: n,
                location: i,
                array: x,
                squash: j,
                replace: A,
                isOptional: P,
                value: b,
                dynamic: r,
                config: a,
                toString: S
            })
        }, c.prototype = {
            $$new: function () {
                return n(this, J(new c, {$$parent: this}))
            }, $$keys: function () {
                for (var e = [], t = [], r = this, n = o(c.prototype); r;)t.push(r), r = r.$$parent;
                return t.reverse(), B(t, function (t) {
                    B(o(t), function (t) {
                        -1 === u(e, t) && -1 === u(n, t) && e.push(t)
                    })
                }), e
            }, $$values: function (e) {
                var t = {}, r = this;
                return B(r.$$keys(), function (n) {
                    t[n] = r[n].value(e && e[n])
                }), t
            }, $$equals: function (e, t) {
                var r = !0, n = this;
                return B(n.$$keys(), function (a) {
                    var i = e && e[a], o = t && t[a];
                    n[a].type.equals(i, o) || (r = !1)
                }), r
            }, $$validates: function (e) {
                var n, a, i, o, u, s = this.$$keys();
                for (n = 0; n < s.length && (a = this[s[n]], i = e[s[n]], i !== r && null !== i || !a.isOptional); n++) {
                    if (o = a.type.$normalize(i), !a.type.is(o))return !1;
                    if (u = a.type.encode(o), t.isString(u) && !a.type.pattern.exec(u))return !1
                }
                return !0
            }, $$parent: r
        }, this.ParamSet = c
    }

    function w(e, n) {
        function a(e) {
            var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
            return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
        }

        function i(e, t) {
            return e.replace(/\$(\$|\d{1,2})/, function (e, r) {
                return t["$" === r ? 0 : Number(r)]
            })
        }

        function o(e, t, r) {
            if (!r)return !1;
            var n = e.invoke(t, t, {$match: r});
            return !R(n) || n
        }

        function u(n, a, i, o, u) {
            function p(e, t, r) {
                return "/" === d ? e : t ? d.slice(0, -1) + e : r ? d.slice(1) + e : e
            }

            function h(e) {
                function t(e) {
                    var t = e(i, n);
                    return !!t && (U(t) && n.replace().url(t), !0)
                }

                if (!e || !e.defaultPrevented) {
                    $ && n.url() === $, $ = r;
                    var a, o = l.length;
                    for (a = 0; o > a; a++)if (t(l[a]))return;
                    c && t(c)
                }
            }

            function v() {
                return s = s || a.$on("$locationChangeSuccess", h)
            }

            var $, d = o.baseHref(), m = n.url();
            return f || v(), {
                sync: function () {
                    h()
                }, listen: function () {
                    return v()
                }, update: function (e) {
                    return e ? void(m = n.url()) : void(n.url() !== m && (n.url(m), n.replace()))
                }, push: function (e, t, a) {
                    var i = e.format(t || {});
                    null !== i && t && t["#"] && (i += "#" + t["#"]), n.url(i), $ = a && a.$$avoidResync ? n.url() : r, a && a.replace && n.replace()
                }, href: function (r, a, i) {
                    if (!r.validates(a))return null;
                    var o = e.html5Mode();
                    t.isObject(o) && (o = o.enabled), o = o && u.history;
                    var s = r.format(a);
                    if (i = i || {}, o || null === s || (s = "#" + e.hashPrefix() + s), null !== s && a && a["#"] && (s += "#" + a["#"]), s = p(s, o, i.absolute), !i.absolute || !s)return s;
                    var l = !o && s ? "/" : "", c = n.port();
                    return c = 80 === c || 443 === c ? "" : ":" + c, [n.protocol(), "://", n.host(), c, l, s].join("")
                }
            }
        }

        var s, l = [], c = null, f = !1;
        this.rule = function (e) {
            if (!F(e))throw new Error("'rule' must be a function");
            return l.push(e), this
        }, this.otherwise = function (e) {
            if (U(e)) {
                var t = e;
                e = function () {
                    return t
                }
            } else if (!F(e))throw new Error("'rule' must be a function");
            return c = e, this
        }, this.when = function (e, t) {
            var r, u = U(t);
            if (U(e) && (e = n.compile(e)), !u && !F(t) && !z(t))throw new Error("invalid 'handler' in when()");
            var s = {
                matcher: function (e, t) {
                    return u && (r = n.compile(t), t = ["$match", function (e) {
                        return r.format(e)
                    }]), J(function (r, n) {
                        return o(r, t, e.exec(n.path(), n.search()))
                    }, {prefix: U(e.prefix) ? e.prefix : ""})
                }, regex: function (e, t) {
                    if (e.global || e.sticky)throw new Error("when() RegExp must not be global or sticky");
                    return u && (r = t, t = ["$match", function (e) {
                        return i(r, e)
                    }]), J(function (r, n) {
                        return o(r, t, e.exec(n.path()))
                    }, {prefix: a(e)})
                }
            }, l = {matcher: n.isMatcher(e), regex: e instanceof RegExp};
            for (var c in l)if (l[c])return this.rule(s[c](e, t));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (e) {
            e === r && (e = !0), f = e
        }, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
    }

    function b(e, a) {
        function i(e) {
            return 0 === e.indexOf(".") || 0 === e.indexOf("^")
        }

        function p(e, t) {
            if (!e)return r;
            var n = U(e), a = n ? e : e.name, o = i(a);
            if (o) {
                if (!t)throw new Error("No reference point given for path '" + a + "'");
                t = p(t);
                for (var u = a.split("."), s = 0, l = u.length, c = t; l > s; s++)if ("" !== u[s] || 0 !== s) {
                    if ("^" !== u[s])break;
                    if (!c.parent)throw new Error("Path '" + a + "' not valid for state '" + t.name + "'");
                    c = c.parent
                } else c = t;
                u = u.slice(s).join("."), a = c.name + (c.name && u ? "." : "") + u
            }
            var f = P[a];
            return !f || !n && (n || f !== e && f.self !== e) ? r : f
        }

        function h(e, t) {
            j[e] || (j[e] = []), j[e].push(t)
        }

        function $(e) {
            for (var t = j[e] || []; t.length;)d(t.shift())
        }

        function d(t) {
            t = n(t, {
                self: t, resolve: t.resolve || {}, toString: function () {
                    return this.name
                }
            });
            var r = t.name;
            if (!U(r) || r.indexOf("@") >= 0)throw new Error("State must have a valid name");
            if (P.hasOwnProperty(r))throw new Error("State '" + r + "' is already defined");
            var a = -1 !== r.indexOf(".") ? r.substring(0, r.lastIndexOf(".")) : U(t.parent) ? t.parent : T(t.parent) && U(t.parent.name) ? t.parent.name : "";
            if (a && !P[a])return h(a, t.self);
            for (var i in O)F(O[i]) && (t[i] = O[i](t, O.$delegates[i]));
            return P[r] = t, !t[A] && t.url && e.when(t.url, ["$match", "$stateParams", function (e, r) {
                x.$current.navigable == t && l(e, r) || x.transitionTo(t, e, {inherit: !0, location: !1})
            }]), $(r), t
        }

        function m(e) {
            return e.indexOf("*") > -1
        }

        function g(e) {
            for (var t = e.split("."), r = x.$current.name.split("."), n = 0, a = t.length; a > n; n++)"*" === t[n] && (r[n] = "*");
            return "**" === t[0] && (r = r.slice(u(r, t[1])), r.unshift("**")), "**" === t[t.length - 1] && (r.splice(u(r, t[t.length - 2]) + 1, Number.MAX_VALUE), r.push("**")), t.length == r.length && r.join("") === t.join("")
        }

        function y(e, t) {
            return U(e) && !R(t) ? O[e] : F(t) && U(e) ? (O[e] && !O.$delegates[e] && (O.$delegates[e] = O[e]), O[e] = t, this) : this
        }

        function w(e, t) {
            return T(e) ? t = e : t.name = e, d(t), this
        }

        function b(e, a, i, u, f, h, $, d, y) {
            function w(t, r, n, i) {
                var o = e.$broadcast("$stateNotFound", t, r, n);
                if (o.defaultPrevented)return $.update(), k;
                if (!o.retry)return null;
                if (i.$retry)return $.update(), q;
                var u = x.transition = a.when(o.retry);
                return u.then(function () {
                    return u !== x.transition ? j : (t.options.$retry = !0, x.transitionTo(t.to, t.toParams, t.options))
                }, function () {
                    return k
                }), $.update(), u
            }

            function b(e, r, n, o, s, l) {
                function p() {
                    var r = [];
                    return B(e.views, function (n, a) {
                        var o = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
                        o.$template = [function () {
                            return i.load(a, {view: n, locals: s.globals, params: h, notify: l.notify}) || ""
                        }], r.push(f.resolve(o, s.globals, s.resolve, e).then(function (r) {
                            if (F(n.controllerProvider) || z(n.controllerProvider)) {
                                var i = t.extend({}, o, s.globals);
                                r.$$controller = u.invoke(n.controllerProvider, null, i)
                            } else r.$$controller = n.controller;
                            r.$$state = e, r.$$controllerAs = n.controllerAs, s[a] = r
                        }))
                    }), a.all(r).then(function () {
                        return s.globals
                    })
                }

                var h = n ? r : c(e.params.$$keys(), r), v = {$stateParams: h};
                s.resolve = f.resolve(e.resolve, v, s.resolve, e);
                var $ = [s.resolve.then(function (e) {
                    s.globals = e
                })];
                return o && $.push(o), a.all($).then(p).then(function (e) {
                    return s
                })
            }

            var j = a.reject(new Error("transition superseded")), O = a.reject(new Error("transition prevented")), k = a.reject(new Error("transition aborted")), q = a.reject(new Error("transition failed"));
            return E.locals = {resolve: null, globals: {$stateParams: {}}}, x = {
                params: {},
                current: E.self,
                $current: E,
                transition: null
            }, x.reload = function (e) {
                return x.transitionTo(x.current, h, {reload: e || !0, inherit: !1, notify: !0})
            }, x.go = function (e, t, r) {
                return x.transitionTo(e, t, J({inherit: !0, relative: x.$current}, r))
            }, x.transitionTo = function (t, r, i) {
                r = r || {}, i = J({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, i || {});
                var o, l = x.$current, f = x.params, v = l.path, d = p(t, i.relative), m = r["#"];
                if (!R(d)) {
                    var g = {to: t, toParams: r, options: i}, y = w(g, l.self, f, i);
                    if (y)return y;
                    if (t = g.to, r = g.toParams, i = g.options, d = p(t, i.relative), !R(d)) {
                        if (!i.relative)throw new Error("No such state '" + t + "'");
                        throw new Error("Could not resolve '" + t + "' from state '" + i.relative + "'")
                    }
                }
                if (d[A])throw new Error("Cannot transition to abstract state '" + t + "'");
                if (i.inherit && (r = s(h, r || {}, x.$current, d)), !d.params.$$validates(r))return q;
                r = d.params.$$values(r), t = d;
                var P = t.path, k = 0, C = P[k], I = E.locals, V = [];
                if (i.reload) {
                    if (U(i.reload) || T(i.reload)) {
                        if (T(i.reload) && !i.reload.name)throw new Error("Invalid reload state object");
                        var M = i.reload === !0 ? v[0] : p(i.reload);
                        if (i.reload && !M)throw new Error("No such reload state '" + (U(i.reload) ? i.reload : i.reload.name) + "'");
                        for (; C && C === v[k] && C !== M;)I = V[k] = C.locals, k++, C = P[k]
                    }
                } else for (; C && C === v[k] && C.ownParams.$$equals(r, f);)I = V[k] = C.locals, k++, C = P[k];
                if (S(t, r, l, f, I, i))return m && (r["#"] = m), x.params = r, K(x.params, h), K(c(t.params.$$keys(), h), t.locals.globals.$stateParams), i.location && t.navigable && t.navigable.url && ($.push(t.navigable.url, r, {
                    $$avoidResync: !0,
                    replace: "replace" === i.location
                }), $.update(!0)), x.transition = null, a.when(x.current);
                if (r = c(t.params.$$keys(), r || {}), m && (r["#"] = m), i.notify && e.$broadcast("$stateChangeStart", t.self, r, l.self, f, i).defaultPrevented)return e.$broadcast("$stateChangeCancel", t.self, r, l.self, f), null == x.transition && $.update(), O;
                for (var D = a.when(I), N = k; N < P.length; N++, C = P[N])I = V[N] = n(I), D = b(C, r, C === t, D, I, i);
                var F = x.transition = D.then(function () {
                    var n, a, o;
                    if (x.transition !== F)return j;
                    for (n = v.length - 1; n >= k; n--)o = v[n], o.self.onExit && u.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                    for (n = k; n < P.length; n++)a = P[n], a.locals = V[n], a.self.onEnter && u.invoke(a.self.onEnter, a.self, a.locals.globals);
                    return x.transition !== F ? j : (x.$current = t, x.current = t.self, x.params = r, K(x.params, h), x.transition = null, i.location && t.navigable && $.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === i.location
                    }), i.notify && e.$broadcast("$stateChangeSuccess", t.self, r, l.self, f), $.update(!0), x.current)
                }, function (n) {
                    return x.transition !== F ? j : (x.transition = null, o = e.$broadcast("$stateChangeError", t.self, r, l.self, f, n), o.defaultPrevented || $.update(), a.reject(n))
                });
                return F
            }, x.is = function (e, t, n) {
                n = J({relative: x.$current}, n || {});
                var a = p(e, n.relative);
                return R(a) ? x.$current === a && (!t || l(a.params.$$values(t), h)) : r
            }, x.includes = function (e, t, n) {
                if (n = J({relative: x.$current}, n || {}), U(e) && m(e)) {
                    if (!g(e))return !1;
                    e = x.$current.name
                }
                var a = p(e, n.relative);
                return R(a) ? !!R(x.$current.includes[a.name]) && (!t || l(a.params.$$values(t), h, o(t))) : r
            }, x.href = function (e, t, n) {
                n = J({lossy: !0, inherit: !0, absolute: !1, relative: x.$current}, n || {});
                var a = p(e, n.relative);
                if (!R(a))return null;
                n.inherit && (t = s(h, t || {}, x.$current, a));
                var i = a && n.lossy ? a.navigable : a;
                return i && i.url !== r && null !== i.url ? $.href(i.url, c(a.params.$$keys().concat("#"), t || {}), {absolute: n.absolute}) : null
            }, x.get = function (e, t) {
                if (0 === arguments.length)return v(o(P), function (e) {
                    return P[e].self
                });
                var r = p(e, t || x.$current);
                return r && r.self ? r.self : null
            }, x
        }

        function S(e, t, r, n, a, i) {
            function o(e, t, r) {
                function n(t) {
                    return "search" != e.params[t].location
                }

                var a = e.params.$$keys().filter(n), i = f.apply({}, [e.params].concat(a)), o = new _.ParamSet(i);
                return o.$$equals(t, r)
            }

            return !(i.reload || e !== r || !(a === r.locals || e.self.reloadOnSearch === !1 && o(r, n, t))) || void 0
        }

        var E, x, P = {}, j = {}, A = "abstract", O = {
            parent: function (e) {
                if (R(e.parent) && e.parent)return p(e.parent);
                var t = /^(.+)\.[^.]+$/.exec(e.name);
                return t ? p(t[1]) : E
            }, data: function (e) {
                return e.parent && e.parent.data && (e.data = e.self.data = n(e.parent.data, e.data)), e.data
            }, url: function (e) {
                var t = e.url, r = {params: e.params || {}};
                if (U(t))return "^" == t.charAt(0) ? a.compile(t.substring(1), r) : (e.parent.navigable || E).url.concat(t, r);
                if (!t || a.isMatcher(t))return t;
                throw new Error("Invalid url '" + t + "' in state '" + e + "'")
            }, navigable: function (e) {
                return e.url ? e : e.parent ? e.parent.navigable : null
            }, ownParams: function (e) {
                var t = e.url && e.url.params || new _.ParamSet;
                return B(e.params || {}, function (e, r) {
                    t[r] || (t[r] = new _.Param(r, null, e, "config"))
                }), t
            }, params: function (e) {
                var t = f(e.ownParams, e.ownParams.$$keys());
                return e.parent && e.parent.params ? J(e.parent.params.$$new(), t) : new _.ParamSet
            }, views: function (e) {
                var t = {};
                return B(R(e.views) ? e.views : {"": e}, function (r, n) {
                    n.indexOf("@") < 0 && (n += "@" + e.parent.name), t[n] = r
                }), t
            }, path: function (e) {
                return e.parent ? e.parent.path.concat(e) : []
            }, includes: function (e) {
                var t = e.parent ? J({}, e.parent.includes) : {};
                return t[e.name] = !0, t
            }, $delegates: {}
        };
        E = d({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), E.navigable = null, this.decorator = y, this.state = w, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function S() {
        function e(e, t) {
            return {
                load: function (e, r) {
                    var n, a = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return r = J(a, r), r.view && (n = t.fromConfig(r.view, r.params, r.locals)), n
                }
            }
        }

        this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
    }

    function E() {
        var e = !1;
        this.useAnchorScroll = function () {
            e = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (t, r) {
            return e ? t : function (e) {
                return r(function () {
                    e[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function x(e, r, n, a) {
        function i() {
            return r.has ? function (e) {
                return r.has(e) ? r.get(e) : null
            } : function (e) {
                try {
                    return r.get(e)
                } catch (t) {
                    return null
                }
            }
        }

        function o(e, r) {
            function n(e) {
                return 1 === Y && G >= 4 ? !!l.enabled(e) : 1 === Y && G >= 2 ? !!l.enabled() : !!s
            }

            var a = {
                enter: function (e, t, r) {
                    t.after(e), r()
                }, leave: function (e, t) {
                    e.remove(), t()
                }
            };
            if (e.noanimation)return a;
            if (l)return {
                enter: function (e, r, i) {
                    n(e) ? t.version.minor > 2 ? l.enter(e, null, r).then(i) : l.enter(e, null, r, i) : a.enter(e, r, i)
                }, leave: function (e, r) {
                    n(e) ? t.version.minor > 2 ? l.leave(e).then(r) : l.leave(e, r) : a.leave(e, r)
                }
            };
            if (s) {
                var i = s && s(r, e);
                return {
                    enter: function (e, t, r) {
                        i.enter(e, null, t), r()
                    }, leave: function (e, t) {
                        i.leave(e), t()
                    }
                }
            }
            return a
        }

        var u = i(), s = u("$animator"), l = u("$animate"), c = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function (r, i, u) {
                return function (r, i, s) {
                    function l() {
                        function e() {
                            t && t.remove(), r && r.$destroy()
                        }

                        var t = f, r = h;
                        r && (r._willBeDestroyed = !0), p ? (m.leave(p, function () {
                            e(), f = null
                        }), f = p) : (e(), f = null), p = null, h = null
                    }

                    function c(o) {
                        var c, f = j(r, s, i, a), g = f && e.$current && e.$current.locals[f];
                        if ((o || g !== v) && !r._willBeDestroyed) {
                            c = r.$new(), v = e.$current.locals[f], c.$emit("$viewContentLoading", f);
                            var y = u(c, function (e) {
                                m.enter(e, i, function () {
                                    h && h.$emit("$viewContentAnimationEnded"), (t.isDefined(d) && !d || r.$eval(d)) && n(e)
                                }), l()
                            });
                            p = y, h = c, h.$emit("$viewContentLoaded", f), h.$eval($)
                        }
                    }

                    var f, p, h, v, $ = s.onload || "", d = s.autoscroll, m = o(s, r);
                    r.$on("$stateChangeSuccess", function () {
                        c(!1)
                    }), c(!0)
                }
            }
        };
        return c
    }

    function P(e, t, r, n) {
        return {
            restrict: "ECA", priority: -400, compile: function (a) {
                var i = a.html();
                return function (a, o, u) {
                    var s = r.$current, l = j(a, u, o, n), c = s && s.locals[l];
                    if (c) {
                        o.data("$uiView", {name: l, state: c.$$state}), o.html(c.$template ? c.$template : i);
                        var f = e(o.contents());
                        if (c.$$controller) {
                            c.$scope = a, c.$element = o;
                            var p = t(c.$$controller, c);
                            c.$$controllerAs && (a[c.$$controllerAs] = p), o.data("$ngControllerController", p), o.children().data("$ngControllerController", p)
                        }
                        f(a)
                    }
                }
            }
        }
    }

    function j(e, t, r, n) {
        var a = n(t.uiView || t.name || "")(e), i = r.inheritedData("$uiView");
        return a.indexOf("@") >= 0 ? a : a + "@" + (i ? i.state.name : "")
    }

    function A(e, t) {
        var r, n = e.match(/^\s*({[^}]*})\s*$/);
        if (n && (e = t + "(" + n[1] + ")"), r = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length)throw new Error("Invalid state ref '" + e + "'");
        return {state: r[1], paramExpr: r[3] || null}
    }

    function O(e) {
        var t = e.parent().inheritedData("$uiView");
        return t && t.state && t.state.name ? t.state : void 0
    }

    function k(e) {
        var t = "[object SVGAnimatedString]" === Object.prototype.toString.call(e.prop("href")), r = "FORM" === e[0].nodeName;
        return {
            attr: r ? "action" : t ? "xlink:href" : "href",
            isAnchor: "A" === e.prop("tagName").toUpperCase(),
            clickable: !r
        }
    }

    function q(e, t, r, n, a) {
        return function (i) {
            var o = i.which || i.button, u = a();
            if (!(o > 1 || i.ctrlKey || i.metaKey || i.shiftKey || e.attr("target"))) {
                var s = r(function () {
                    t.go(u.state, u.params, u.options)
                });
                i.preventDefault();
                var l = n.isAnchor && !u.href ? 1 : 0;
                i.preventDefault = function () {
                    l-- <= 0 && r.cancel(s)
                }
            }
        }
    }

    function C(e, t) {
        return {relative: O(e) || t.$current, inherit: !0}
    }

    function I(e, r) {
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (n, a, i, o) {
                var u = A(i.uiSref, e.current.name), s = {
                    state: u.state,
                    href: null,
                    params: null
                }, l = k(a), c = o[1] || o[0];
                s.options = J(C(a, e), i.uiSrefOpts ? n.$eval(i.uiSrefOpts) : {});
                var f = function (r) {
                    r && (s.params = t.copy(r)), s.href = e.href(u.state, s.params, s.options), c && c.$$addStateInfo(u.state, s.params), null !== s.href && i.$set(l.attr, s.href)
                };
                u.paramExpr && (n.$watch(u.paramExpr, function (e) {
                    e !== s.params && f(e)
                }, !0), s.params = t.copy(n.$eval(u.paramExpr))), f(), l.clickable && a.bind("click", q(a, e, r, l, function () {
                    return s
                }))
            }
        }
    }

    function V(e, t) {
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (r, n, a, i) {
                function o(t) {
                    f.state = t[0], f.params = t[1], f.options = t[2], f.href = e.href(f.state, f.params, f.options), s && s.$$addStateInfo(f.state, f.params), f.href && a.$set(u.attr, f.href)
                }

                var u = k(n), s = i[1] || i[0], l = [a.uiState, a.uiStateParams || null, a.uiStateOpts || null], c = "[" + l.map(function (e) {
                        return e || "null"
                    }).join(", ") + "]", f = {state: null, params: null, options: null, href: null};
                r.$watch(c, o, !0), o(r.$eval(c)), u.clickable && n.bind("click", q(n, e, t, u, function () {
                    return f
                }))
            }
        }
    }

    function M(e, t, r) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (t, n, a, i) {
                function o(t, r, a) {
                    var i = e.get(t, O(n)), o = u(t, r);
                    $.push({state: i || {name: t}, params: r, hash: o}), d[o] = a
                }

                function u(e, r) {
                    if (!U(e))throw new Error("state should be a string");
                    return T(r) ? e + L(r) : (r = t.$eval(r), T(r) ? e + L(r) : e)
                }

                function s() {
                    for (var e = 0; e < $.length; e++)f($[e].state, $[e].params) ? l(n, d[$[e].hash]) : c(n, d[$[e].hash]), p($[e].state, $[e].params) ? l(n, h) : c(n, h)
                }

                function l(e, t) {
                    i(function () {
                        e.addClass(t)
                    })
                }

                function c(e, t) {
                    e.removeClass(t)
                }

                function f(t, r) {
                    return e.includes(t.name, r)
                }

                function p(t, r) {
                    return e.is(t.name, r)
                }

                var h, v, $ = [], d = {};
                h = r(a.uiSrefActiveEq || "", !1)(t);
                try {
                    v = t.$eval(a.uiSrefActive)
                } catch (m) {
                }
                v = v || r(a.uiSrefActive || "", !1)(t), T(v) && B(v, function (r, n) {
                    if (U(r)) {
                        var a = A(r, e.current.name);
                        o(a.state, t.$eval(a.paramExpr), n)
                    }
                }), this.$$addStateInfo = function (e, t) {
                    T(v) && $.length > 0 || (o(e, t, v), s())
                }, t.$on("$stateChangeSuccess", s), s()
            }]
        }
    }

    function D(e) {
        var t = function (t, r) {
            return e.is(t, r)
        };
        return t.$stateful = !0, t
    }

    function N(e) {
        var t = function (t, r, n) {
            return e.includes(t, r, n)
        };
        return t.$stateful = !0, t
    }

    var R = t.isDefined, F = t.isFunction, U = t.isString, T = t.isObject, z = t.isArray, B = t.forEach, J = t.extend, K = t.copy, L = t.toJson;
    t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), $.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", $), d.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", d);
    var _;
    m.prototype.concat = function (e, t) {
        var r = {caseInsensitive: _.caseInsensitive(), strict: _.strictMode(), squash: _.defaultSquashPolicy()};
        return new m(this.sourcePath + e + this.sourceSearch, J(r, t), this)
    }, m.prototype.toString = function () {
        return this.source
    }, m.prototype.exec = function (e, t) {
        function r(e) {
            function t(e) {
                return e.split("").reverse().join("")
            }

            function r(e) {
                return e.replace(/\\-/g, "-")
            }

            var n = t(e).split(/-(?!\\)/), a = v(n, t);
            return v(a, r).reverse()
        }

        var n = this.regexp.exec(e);
        if (!n)return null;
        t = t || {};
        var a, i, o, u = this.parameters(), s = u.length, l = this.segments.length - 1, c = {};
        if (l !== n.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
        var f, p;
        for (a = 0; l > a; a++) {
            for (o = u[a], f = this.params[o], p = n[a + 1], i = 0; i < f.replace.length; i++)f.replace[i].from === p && (p = f.replace[i].to);
            p && f.array === !0 && (p = r(p)), R(p) && (p = f.type.decode(p)), c[o] = f.value(p)
        }
        for (; s > a; a++) {
            for (o = u[a], c[o] = this.params[o].value(t[o]), f = this.params[o], p = t[o], i = 0; i < f.replace.length; i++)f.replace[i].from === p && (p = f.replace[i].to);
            R(p) && (p = f.type.decode(p)), c[o] = f.value(p)
        }
        return c
    }, m.prototype.parameters = function (e) {
        return R(e) ? this.params[e] || null : this.$$paramNames
    }, m.prototype.validates = function (e) {
        return this.params.$$validates(e)
    }, m.prototype.format = function (e) {
        function t(e) {
            return encodeURIComponent(e).replace(/-/g, function (e) {
                return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        e = e || {};
        var r = this.segments, n = this.parameters(), a = this.params;
        if (!this.validates(e))return null;
        var i, o = !1, u = r.length - 1, s = n.length, l = r[0];
        for (i = 0; s > i; i++) {
            var c = u > i, f = n[i], p = a[f], h = p.value(e[f]), $ = p.isOptional && p.type.equals(p.value(), h), d = !!$ && p.squash, m = p.type.encode(h);
            if (c) {
                var g = r[i + 1], y = i + 1 === u;
                if (d === !1)null != m && (l += z(m) ? v(m, t).join("-") : encodeURIComponent(m)), l += g; else if (d === !0) {
                    var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    l += g.match(w)[1]
                } else U(d) && (l += d + g);
                y && p.squash === !0 && "/" === l.slice(-1) && (l = l.slice(0, -1))
            } else {
                if (null == m || $ && d !== !1)continue;
                if (z(m) || (m = [m]), 0 === m.length)continue;
                m = v(m, encodeURIComponent).join("&" + f + "="), l += (o ? "&" : "?") + (f + "=" + m), o = !0
            }
        }
        return l
    }, g.prototype.is = function (e, t) {
        return !0
    }, g.prototype.encode = function (e, t) {
        return e
    }, g.prototype.decode = function (e, t) {
        return e
    }, g.prototype.equals = function (e, t) {
        return e == t
    }, g.prototype.$subPattern = function () {
        var e = this.pattern.toString();
        return e.substr(1, e.length - 2)
    }, g.prototype.pattern = /.*/, g.prototype.toString = function () {
        return "{Type:" + this.name + "}"
    }, g.prototype.$normalize = function (e) {
        return this.is(e) ? e : this.decode(e)
    }, g.prototype.$asArray = function (e, t) {
        function n(e, t) {
            function n(e, t) {
                return function () {
                    return e[t].apply(e, arguments)
                }
            }

            function a(e) {
                return z(e) ? e : R(e) ? [e] : []
            }

            function i(e) {
                switch (e.length) {
                    case 0:
                        return r;
                    case 1:
                        return "auto" === t ? e[0] : e;
                    default:
                        return e
                }
            }

            function o(e) {
                return !e
            }

            function u(e, t) {
                return function (r) {
                    if (z(r) && 0 === r.length)return r;
                    r = a(r);
                    var n = v(r, e);
                    return t === !0 ? 0 === h(n, o).length : i(n)
                }
            }

            function s(e) {
                return function (t, r) {
                    var n = a(t), i = a(r);
                    if (n.length !== i.length)return !1;
                    for (var o = 0; o < n.length; o++)if (!e(n[o], i[o]))return !1;
                    return !0
                }
            }

            this.encode = u(n(e, "encode")), this.decode = u(n(e, "decode")), this.is = u(n(e, "is"), !0), this.equals = s(n(e, "equals")), this.pattern = e.pattern, this.$normalize = u(n(e, "$normalize")), this.name = e.name, this.$arrayMode = t
        }

        if (!e)return this;
        if ("auto" === e && !t)throw new Error("'auto' array mode is for query parameters only");
        return new n(this, e)
    }, t.module("ui.router.util").provider("$urlMatcherFactory", y), t.module("ui.router.util").run(["$urlMatcherFactory", function (e) {
    }]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", w), b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").factory("$stateParams", function () {
        return {}
    }).provider("$state", b), S.$inject = [], t.module("ui.router.state").provider("$view", S), t.module("ui.router.state").provider("$uiViewScroll", E);
    var Y = t.version.major, G = t.version.minor;
    x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], P.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", x), t.module("ui.router.state").directive("uiView", P), I.$inject = ["$state", "$timeout"], V.$inject = ["$state", "$timeout"], M.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", I).directive("uiSrefActive", M).directive("uiSrefActiveEq", M).directive("uiState", V),
        D.$inject = ["$state"], N.$inject = ["$state"], t.module("ui.router.state").filter("isState", D).filter("includedByState", N)
}(window, window.angular);