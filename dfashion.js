const jo = {};
!(function () {
    var e,
        t,
        A = window,
        m = document,
        n = setTimeout,
        a = clearTimeout,
        j = Date,
        w = Math,
        k = parseInt,
        o = encodeURIComponent,
        r = RegExp,
        i = XMLHttpRequest,
        s = alert,
        l = localStorage,
        c = JSON,
        d = Image,
        u = setInterval,
        f = clearInterval,
        D = "innerHTML",
        p = "tagName",
        g = "getElementById",
        h = "querySelector",
        b = "querySelectorAll",
        v = "createElement",
        y = "className",
        x = "replace",
        C = "indexOf",
        _ = "EventListener",
        I = "add",
        P = "remove",
        S = "key",
        T = "type",
        $ = "parse",
        E = "length",
        M = "slice",
        B = "reset",
        O = "push",
        R = "Time",
        L = "clientX",
        U = "clientY",
        z = "scrollLeft",
        J = "scrollTop",
        N = "onreadystatechange",
        q = "readyState",
        F = "Attribute",
        H = "set",
        G = "get",
        Y = "checked",
        X = "offsetWidth",
        W = "toFixed",
        K = "pageYOffset",
        Q = "appendChild",
        V = "firstChild",
        Z = "insert",
        ee = "Before",
        te = "value",
        ae = "safe",
        ne = "match",
        oe = "href",
        re = "src",
        ie = "target",
        se = "closest",
        le = "location",
        ce = "trim",
        de = "open",
        ue = "send",
        fe = "random",
        me = "toString",
        pe = "parentElement",
        ge = "preventDefault",
        he = "substr",
        be = "setRequestHeader",
        ve = "responseText",
        ye = "response",
        Ae = "title",
        je = "test",
        we = "container",
        ke = "ceil",
        De = "floor",
        xe = "min",
        Ce = "map",
        _e = "cookie",
        Ie = "contains",
        Pe = "toUTCString",
        Se = "textContent",
        Te = "load",
        $e = "true",
        Ee = "false",
        Me = "valid",
        Be = "scroll",
        Oe = "click",
        Re = "mousemove",
        Le = "mouseup",
        Ue = "touchstart",
        ze = "mousedown",
        Je = "undefined",
        Ne = "function",
        qe = "Content-Type",
        Fe = "text/html",
        He = "pagination",
        Ge = "loadCustomPosts",
        Ye = "custom_posts",
        Xe = "config",
        We = "adsbygoogle",
        Ke = "analytics",
        Qe = typeof isPreview != Je && isPreview,
        Ve = typeof siteUrl != Je ? siteUrl : "",
        Ze = typeof currentUrl != Je ? currentUrl : "",
        et = typeof blogId != Je ? blogId : "",
        tt = typeof blogTitle != Je ? blogTitle : "",
        at = typeof titleSeparator != Je ? titleSeparator : " - ",
        nt = typeof pageTitle != Je ? pageTitle : "Page",
        ot = typeof analyticId != Je && analyticId,
        rt = !!(sa = typeof caPubAdsense != Je && caPubAdsense[x](/^\D+/g, "")) && "ca-pub-" + sa,
        it = typeof innerAdsDelimiter != Je ? innerAdsDelimiter : "p,br,div",
        st = typeof ignoreAdsDelimiter != Je ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        lt = typeof autoTOC != Je && autoTOC,
        ct = typeof toc_temp == Ne && toc_temp,
        dt = typeof positionTOC != Je && positionTOC,
        ut = typeof jtCallback == Ne && jtCallback,
        ft = "https://",
        mt = "www.blogger.com/",
        pt = "-rw",
        gt = "5.0.0-beta2",
        ht = "bootstrap",
        bt = "firebase",
        vt = "8.4.2",
        At = typeof bootstrapJs != Je && bootstrapJs,
        jt = typeof firebaseUrl != Je ? firebaseUrl : "",
        wt = typeof bsCallback == Ne && bsCallback,
        kt = typeof safeAds != Je && safeAds,
        Dt = typeof limitAdsClick != Je ? limitAdsClick : 3,
        xt = typeof timeAdsClick != Je ? timeAdsClick : 10,
        Ct = typeof blockAdsClick != Je ? blockAdsClick : 6,
        _t = typeof generate_url_temp == Ne && generate_url_temp,
        It = "please",
        Pt = "license",
        St = "Newspaper";
    function Tt(e, t) {
        return -1 < (" " + e[y] + " ")[C](" " + t + " ");
    }
    function $t(e, t) {
        var a;
        Tt(e, t) || ("" != (a = e[y]) && (t = " " + t), (e[y] = a + t));
    }
    function Et(e, t) {
        e[y] = e[y][x](new r("(?:^|\\s)" + t + "(?!\\S)"), "")[ce]();
    }
    function Mt(e, t, a) {
        Et(e, t),
            n(function () {
                Et(e, "d-block");
            }, a || 300);
    }
    function Bt(e, t) {
        for (var a = 0; a < e[E]; a++) if (e[a] === t) return 1;
    }
    function Ot(e, t) {
        return !!(e = new r("[?&]" + e + "=([^&#=]*)"))[je](t) && t[ne](e)[1];
    }
    function Rt(e, t, a, n) {
        var o = new j(),
            a = "minutes" == n ? 60 * a * 1e3 : "hours" == n ? 60 * a * 60 * 1e3 : 24 * a * 60 * 60 * 1e3;
        o[H + R](o[G + R]() + a);
        o = "expires=" + o[Pe]();
        m[_e] = e + "=" + t + "; " + o + "; path=/";
    }
    function Lt(e) {
        e = m[_e][ne](new r("(^| )" + e + "=([^;]+)"));
        if (e) return e[2];
    }
    function Ut(e) {
        try {
            return c[$](e);
        } catch (e) {
            return !1;
        }
    }
    (e = function (e) {
        e || (pt = "");
    }),
        ((t = new d()).onload = t.onerror = function () {
            e(2 == t.height);
        }),
        (t[re] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    var zt,
        Jt = m[g]("header"),
        Nt = m[g]("search-toggle"),
        qt = m[g]("search-header"),
        Ft = m[g]("navbar-toggle"),
        Ht = m[g]("navbar"),
        Gt = m[g]("back-to-top"),
        Yt = m[g]("dark-toggler"),
        Xt = m[h]("html"),
        Wt = m[g]("comment-button"),
        Kt = m[g]("threaded-comment-form"),
        Qt = m[g]("comment-editor"),
        Vt = m[g]("comment-editor-src"),
        Zt = m[g]("comment-script"),
        ea = m[b](".comment-reply"),
        ta = m[b](".entry-text noscript"),
        aa = m[b](".contact-form-blogger"),
        na = m[g]("ads-post"),
        oa = m[g]("post-body"),
        ra = m[h](".related-posts"),
        ia = m[h](".related-inline"),
        sa = Ot("page", Ze),
        la = m[b](".generate-url"),
        ca = Ve[he](0, Ve[E] - 1)[x](/(^\w+:|^)\/\//, ""),
        da = yt[ce](),
        d = Lt("j" + S),
        yt = Lt("j" + Me),
        ua = Lt("j" + ae) ? k(Lt("j" + ae)) : 0,
        fa = ft + "source.jettheme.com/app?" + re + "=" + da;
    function ma(e) {
        var t, a, n, o, r, i, s;
        "IMG" == e[p] &&
            (0 < (s = e[G + F]("data-src"))[C]("bp.blogspot")
                ? ((t = e[X][W](0)),
                  (a = e[pe][X][W](0)),
                  (n = e[pe][pe][X][W](0)),
                  (o = e.offsetHeight[W](0)),
                  (r = s.split("/")),
                  (i = ""),
                  (i = Tt(e[pe], "ratio") ? "w" + t + pt + "-h" + o + "-c" : "s" + (i = t < 10 ? (a < 10 ? n : a) : t) + pt),
                  (s = s[x](r[r[E] - 2], i)),
                  e[H + F]("data-src", s))
                : s[ne](/(img.youtube|i.ytimg)/) && ((s = s[he](0, s.lastIndexOf("/")) + "/mqdefault.jpg"), e[H + F]("data-src", s)));
    }
    if (
        ((zt = 0),
        A[I + _](
            Be,
            function () {
                var e,
                    t = this[K];
                t < zt && Tt(Jt, "header-hidden")
                    ? (e = n(function () {
                          Et(Jt, "header-hidden");
                      }, 500))
                    : zt < t && Tt(Jt, "header-animate") && (a(e), $t(Jt, "header-hidden")),
                    (zt = t);
            },
            !1
        ),
        0 < ta[E])
    ) {
        for (var pa = 0; pa < ta[E]; ++pa) {
            var ga = ta[pa],
                ha = ga[D],
                ba = m[v]("textarea");
            ba[D] = ha[x](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
            ha = m[v]("div");
            (ha[D] = ba.value), 0 == pa && $t(ha, "feature-image mb-3"), ga[pe][Z + ee](ha, ga);
        }
        Defer.dom('[lazyload="true"]', 1, "loaded", ma, null, { rootMargin: "200%" });
    }
    if (null !== oa) {
        if ((null !== ra && null !== ia && ((ia[D] = ra[D]), ia[H + F]("data-no-item", ra[G + F]("data-no-item"))), null !== na)) {
            for (var va = oa[b](it + "," + st), ya = na.childNodes, Aa = ya[E], ja = [], pa = 0; pa < va[E]; pa++) {
                var wa = va[pa][se](st);
                (wa && va[pa] != wa) || ja[O](va[pa]);
            }
            for (var ka, pa = 0; pa < Aa; pa++) pa == Aa - 1 ? oa[Q](ya[0]) : ((ka = pa == Aa - 1 ? ja[E] - 1 : w.round(ja[E] / Aa) * pa), (ka = 0 == pa ? ja[0] : ja[ka].nextSibling) && ka[pe][Z + ee](ya[0], ka));
        }
        if (lt && lt != Ee && ct && null !== oa[V]) {
            for (var Da = oa[b]("h2,h3,h4,h5,h6"), lt = m[v]("div"), dt = oa[h](dt), xa = [], pa = 0; pa < Da[E]; pa++) {
                var Ca = Da[pa],
                    _a = Ca[Se][x](/[^\w!?]/g, "_")[x](/__/g, "_"),
                    Ia = k(Ca[p][x]("H", ""));
                (Ca.id = _a), xa[O]({ level: Ia, title: Ca[Se], id: _a });
            }
            null === dt && (dt = oa[V]), 0 < xa[E] && ((lt[D] = ct(xa)[ce]()), dt && dt[pe][Z + ee](lt, dt));
        }
    }
    function Pa() {
        ((Nt && Nt[Y]) || (Ft && Ft[Y]) ? Et : $t)(Jt, "header-animate");
    }
    function Sa(t, a) {
        function e(e) {
            t[Ie](e[ie]) || (a(), n());
        }
        var n = function () {
            m[P + _](Oe, e);
        };
        m[I + _](Oe, e);
    }
    function Ta(e) {
        e != Vt[oe] && ($t(Kt, "loader"), (Vt[oe] = e), (Qt[re] = e)),
            Tt(Kt, "d-none") &&
                (Et(Kt, "d-none"),
                (e = Zt[te][ne](/<script.*?src='(.*?)'/)[1]),
                Defer.js(e, "comment-js", 500, function () {
                    BLOG_CMT_createIframe(ft + mt + "rpc_relay.html");
                }));
    }
    for (
        jo[Ge] = function (u) {
            var f = (w[fe]() + 1)[me](36)[he](7),
                e = u[G + F]("data-label"),
                m = u[G + F]("data-title"),
                p = u[G + F]("data-items"),
                g = u[G + F]("data-shuffle"),
                h = u[G + F]("data-no-item"),
                b = u[G + F]("data-func"),
                v = u[G + F]("data-callback"),
                t = h ? k(p) + 1 : p,
                y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                a = e || u[D],
                n = a.split(","),
                e = "",
                e = 1 < n[E] ? (a ? "-/" + o(n[w[De](w[fe]() * n[E])]) + "/?" : "?") : a && a != Ee ? "-/" + o(a[ce]()) + "/?" : "?";
            Defer.js(Ve + "feeds/posts/summary/" + e + "alt=json&callback=jo." + Ye + "_" + S + "_" + f + "&max-results=" + t),
                (jo[Ye + "_" + S + "_" + f] = function (e) {
                    var t = k(e.feed.openSearch$totalResults.$t),
                        a = e.feed.category;
                    if (0 < t) {
                        for (var n = { title: m, posts: [], categories: a }, o = e.feed.entry, r = 0, i = 0; i < o[E]; ++i) {
                            var s,
                                l,
                                c = o[i],
                                d = c.link[c.link[E] - 1][oe];
                            if (r == p) break;
                            d != h &&
                                (r++,
                                ((s = {}).grup_id = f),
                                (s.url = d),
                                (s.title = c[Ae].$t),
                                (s.summary = c.summary.$t[ce]()),
                                (s.img = c.media$thumbnail && c.media$thumbnail.url),
                                (s.author = c.author[0].name.$t),
                                (s.comment = c.thr$total && c.thr$total.$t),
                                (s.label = c.category),
                                (l = c.published.$t),
                                (c = (d = new j(l))[G + "Date"]()),
                                (l = y[d[G + "Month"]()]),
                                (d = d[G + "FullYear"]()),
                                (s.date = c + " " + l + ", " + d),
                                n.posts[O](s));
                        }
                        e = A[b];
                        typeof e == Ne &&
                            0 < n.posts[E] &&
                            (g &&
                                (n.posts = (function (e) {
                                    for (var t = e.slice(), a = t[E] - 1; 0 < a; a--) {
                                        var n = w[De](w[fe]() * (a + 1)),
                                            o = t[a];
                                        (t[a] = t[n]), (t[n] = o);
                                    }
                                    return t;
                                })(n.posts)[M](0, g)),
                            (u[D] = e(n)[ce]()),
                            Et(u, "visually-hidden"),
                            Defer.dom(".lazy-" + f, 1, "loaded", ma),
                            !v || (typeof (e = A[v]) == Ne && e()));
                    }
                });
        },
            Nt &&
                Nt[I + _]("change", function () {
                    Pa(),
                        this[Y] &&
                            n(function () {
                                m[g]("search-input").focus();
                            }, 100),
                        Sa(qt, function () {
                            (Nt[Y] = !1), Pa();
                        });
                }),
            Ft &&
                Ft[I + _]("change", function () {
                    var e, t;
                    Pa(),
                        this[Y]
                            ? ((t = "show"),
                              $t((e = Ht), "d-block"),
                              n(function () {
                                  $t(e, t);
                              }, 100),
                              Sa(Ht, function () {
                                  (Ft[Y] = !1), Pa(), Mt(Ht, "show");
                              }))
                            : Mt(Ht, "show");
                }),
            Yt &&
                Yt[I + _](Oe, function (e) {
                    var t;
                    e[ge](), (Tt((t = Xt), (e = "dark-mode")) ? Et : $t)(t, e), null !== l && l[H + "Item"]("theme", Tt(Xt, "dark-mode") ? "dark" : "light");
                }),
            A[I + _](
                Be,
                function () {
                    (1 <= this[K] && null !== Jt ? $t : Et)(Jt, "shadow-sm"), (1e3 <= this[K] && null !== Gt ? Et : $t)(Gt, "d-none");
                },
                !1
            ),
            Qt &&
                Qt[I + _](Te, function (e) {
                    Et(Kt, "loader");
                }),
            Wt &&
                Wt[I + _](Oe, function (e) {
                    e[ge](), Ta(this[oe]), "add-comment" != Kt[pe].id && m[g]("add-comment")[Q](Kt);
                }),
            pa = 0;
        pa < ea[E];
        ++pa
    )
        ea[pa][I + _](Oe, function (e) {
            e[ge]();
            e = this[G + F]("data-comment-id");
            Ta(this[oe]), Kt[pe].id != "c" + e && m[g]("c" + e)[Q](Kt);
        });
    for (pa = 0; pa < aa[E]; ++pa)
        (Ma = aa[pa])[I + _]("submit", function (e) {
            e[ge]();
            var t = e[ie];
            $t(t, "loading");
            var a = new FormData(t),
                n = "blogID=" + et;
            a.forEach(function (e, t) {
                n += "&" + o(t) + "=" + o(e);
            });
            (e = ft + mt + "contact-form.do"), (a = new i());
            a[de]("post", e),
                a[be](qe, "application/x-www-form-urlencoded"),
                a[ue](n),
                (a[N] = function () {
                    var e;
                    Et(t, "loading"),
                        4 === this[q] &&
                            200 === this.status &&
                            "" != this[ye] &&
                            ((e = Ut(this[ve][ce]())) && "true" == e.details.emailSentStatus ? (t[B](), Et(t, "send-error"), $t(t, "send-success")) : (Et(t, "send-success"), $t(t, "send-error")));
                });
        });
    
    if (
        ((Yt = this),
        (Wt = function (e) {
            function t(e, t) {
                for (e = 0; e < a[E]; ) (t = (t = a[e++])[we] || t)[P + _](ze, t.md, 0), A[P + _](Le, t.mu, 0), A[P + _](Re, t.mm, 0);
                for (a = [][M].call(m.getElementsByClassName("drag-scroll")), e = 0; e < a[E]; )
                    !(function (t, a, n, o, r, i) {
                        (i = t[we] || t)[I + _](
                            ze,
                            (i.md = function (e) {
                                (t["has" + F]("nochilddrag") && m.elementFromPoint(e.pageX, e.pageY) != i) || ((o = 1), (a = e[L]), (n = e[U]), e[ge]());
                            }),
                            0
                        ),
                            A[I + _](
                                Le,
                                (i.mu = function () {
                                    o = 0;
                                }),
                                0
                            ),
                            A[I + _](
                                Re,
                                (i.mm = function (e) {
                                    o && (((r = t.scroller || t)[z] -= s = -a + (a = e[L])), (r[J] -= l = -n + (n = e[U])), t == m.body && (((r = m.documentElement)[z] -= s), (r[J] -= l)));
                                }),
                                0
                            );
                    })(a[e++]);
            }
            var s,
                l,
                a = [];
            "complete" == m[q] ? t() : A[I + _](Te, t, 0), (e[B] = t);
        }),
        Ne == typeof define && define.amd ? define(["exports"], Wt) : Je != typeof exports ? Wt(exports) : Wt((Yt.dragscroll = {})),
        !da || (da === d && yt != Je)
            ? (da && yt == $e) || $a()
            : n(function () {
                  var e = new i();
                  e[de](G, fa, !0), e[ue](null), (e[N] = Ea);
              }, 8e3),
        _t)
    )
        for (var Ma, pa = 0; pa < la[E]; ++pa) (Ma = la[pa])[D] = _t(Ma)[ce]();
    function Ba() {
        m[P + _](Re, Ba),
            m[P + _](Ue, Ba),
            m[P + _](Be, Ba),
            Qe ||
                (rt &&
                    (!kt || (kt && ua < Dt)) &&
                    ((adsbygoogle = A[We] || [])[O]({ google_ad_client: "ca-pub-" + rt, enable_page_level_ads: !0, overlays: { bottom: !0 } }), Defer.js(ft + "pagead2.googlesyndication.com/pagead/js/" + We + ".js", We, 100)),
                ot &&
                    ot != Ee &&
                    Defer.js(ft + "www.googletagmanager.com/gtag/js?id=" + ot, Ke, 100, function () {
                        function e() {
                            dataLayer[O](arguments);
                        }
                        e("js", new Date()), e(Xe, ot);
                    }),
                jt &&
                    jt != Ee &&
                    Defer.js(ft + "www.gstatic.com/" + bt + "js/" + vt + "/" + bt + "-app.js", bt + "-app", 100, function () {
                        Defer.js(ft + "www.gstatic.com/" + bt + "js/" + vt + "/" + bt + "-database.js", bt + "-db", 100, function () {
                            var e = m[b](".jt-get-view");
                            firebase.initializeApp({ databaseURL: jt });
                            for (var t = firebase.database(), a = 0; a < e[E]; a++) {
                                var n = e[a],
                                    o = n[G + F]("data-id"),
                                    o = t.ref("pages/" + o);
                                o.once(
                                    te,
                                    (function (t, a) {
                                        return function (e) {
                                            e = e.exists() ? e.val() : 0;
                                            0 < e && ((t[D] = e), Et(t[pe], "d-none")), t[G + F]("data-increment") == $e && (t[H + F]("data-increment", !1), (e = k(e) + 1), a.set(e));
                                        };
                                    })(n, o)
                                );
                            }
                        });
                    }),
                ut && ut()),
            et && Defer.css(ft + mt + "dyn-css/authorization.css?targetBlogID=" + et),
            At && Defer.js(ft + "cdn.jsdelivr.net/npm/" + ht + "@" + gt + "/dist/js/" + ht + ".min.js", ht, 100, wt);
    }
    rt &&
        kt &&
        (A.focus(),
        A[I + _]("blur", function () {
            n(function () {
                var e = m.activeElement;
                "IFRAME" == e[p] && e[se]("." + We) && (Dt <= (e = ua + 1) ? Rt("j" + ae, e, Ct, "hours") : Rt("j" + ae, e, xt, "minutes"));
            }, 50);
        })),
        sa && (m[Ae] = m[Ae][x](at, at + nt + " " + sa + at)),
        Defer.dom(".lazyload", 1, "loaded", ma),
        Defer.dom(
            "#post-pager",
            1,
            null,
            function (e) {
                for (var t = e[b]("a"), a = 0; a < t[E]; ++a) {
                    var n = t[a],
                        o = n[oe],
                        r = m[v]("span");
                    $t(r, "d-block fw-bold pt-2 jt-text-primary"),
                        n[Q](r),
                        (function (e, t) {
                            var a = new i();
                            a[de](G, e),
                                a[be](qe, Fe),
                                a[ue](null),
                                a[I + _](Te, function () {
                                    var e = a[ve][ne](/<title>(.*?)<\/title>/);
                                    t[D] = e[1][x](at + tt, "");
                                });
                        })(o, r);
                }
            },
            null,
            { rootMargin: "200%" }
        ),
        Defer.dom(
            "#pagination",
            1,
            null,
            function (i) {
                var s, r, l, c, e, t, d, u;
                function f(e, t, a) {
                    var n = m[v]("li"),
                        o = m[v]("span");
                    return (
                        $t(o, "btn btn-sm rounded-pill jt-icon-center"),
                        (o[D] = a || e),
                        o[H + F]("data-page", e),
                        e == t
                            ? $t(o, "jt-btn-primary")
                            : ($t(o, "jt-btn-light hover-btn-primary"),
                              o[I + _](Oe, function (e) {
                                  var t;
                                  e[ge](),
                                      1 == (u = o[G + F]("data-page"))
                                          ? ((t = r ? Ve + "search" + c + "?max-results=" + s + "&page=" + u : Ve), (A[le][oe] = t))
                                          : ((t = (u - 1) * s), Defer.js(Ve + "feeds/posts/summary/" + l + "?start-index=" + t + "&alt=json&callback=jo." + He + "_date&max-results=1"));
                              })),
                        n[Q](o),
                        n
                    );
                }
                i[G + F]("data-pagination") != Ee
                    ? ((s = i[G + F]("data-posts")),
                      (r = i[G + F]("data-label")),
                      (l = (r = o(r)) ? "-/" + r + "/" : ""),
                      (c = r ? "/label/" + r : ""),
                      Defer.js(Ve + "feeds/posts/summary/" + l + "?alt=json&callback=jo." + He + "_" + S + "&max-results=1"),
                      (e = Ot("max-results", Ze)),
                      (t = Ot("page", Ze)),
                      (d = e || s),
                      (u = t || 1),
                      (jo[He + "_" + S] = function (e) {
                          var t = e.feed,
                              a = k(t.openSearch$totalResults.$t);
                          if (s < a) {
                              var e = (function (e, t, a, n) {
                                      (e = k(e)), (t = k(t)), (a = k(a)), (n = k(n));
                                      var o,
                                          r,
                                          i = w[ke](e / a);
                                      t < 1 ? (t = 1) : i < t && (t = i), (r = i <= n ? ((o = 1), i) : ((e = w[De](n / 2)), (a = w[ke](n / 2) - 1), t <= e ? ((o = 1), n) : i <= t + a ? ((o = i - n + 1), i) : ((o = t - e), t + a)));
                                      for (var s = (t - 1) * a, n = w[xe](s + a - 1, e - 1), l = [], c = 0; c < r + 1 - o; c++) l[O](c);
                                      return (
                                          (l = l[Ce](function (e) {
                                              return o + e;
                                          })),
                                          { totalItems: e, currentPage: t, pageSize: a, totalPages: i, startPage: o, endPage: r, startIndex: s, endIndex: n, pages: l }
                                      );
                                  })(a, u, d, 5),
                                  n = m[v]("ul"),
                                  t = e.totalPages;
                              1 != e.currentPage && ((a = f(e.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>')), n[Q](a)), Bt(e.pages, 1) || ((r = f(1, e.currentPage, "1 . .")), n[Q](r));
                              for (var o = 0; o < e.pages[E]; o++) {
                                  var r = f(e.pages[o], e.currentPage);
                                  n[Q](r);
                              }
                              Bt(e.pages, t) || ((r = f(t, e.currentPage, ". . " + t)), n[Q](r)),
                                  e.currentPage != t && ((t = f(e.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>')), n[Q](t)),
                                  (i[D] = ""),
                                  $t(n, "pagination mb-0"),
                                  i[Q](n),
                                  Et(i, "visually-hidden");
                          }
                      }),
                      (jo[He + "_date"] = function (e) {
                          (e = e.feed.entry[0]), (e = (e = e.published.$t[he](0, 19) + e.published.$t[he](23, 29))[x]("+", "%2B")), (e = Ve + "search" + c + "?updated-max=" + e + "&max-results=" + d + "&page=" + u);
                          A[le][oe] = e;
                      }))
                    : Et(i, "visually-hidden");
            },
            null,
            { rootMargin: "200%" }
        ),
        Defer.dom(".custom-posts", 1, null, jo[Ge], null, { rootMargin: "200%" }),
        Defer.dom(".generate-url", 1, "loaded", function (e) {
            var t = e[G + F]("data-url") || "#",
                a = e[G + F]("data-duration") || 300,
                n = e[G + F]("data-increase") || 3,
                o = e[G + F]("data-after") || "Get Link",
                r = e[h](".progress-bar"),
                i = e[h](".btn"),
                s = 0,
                l = u(function () {
                    100 <= (s += n) && ((s = 100), f(l), Et(i, "disabled"), (i[D] = o), i[H + F]("href", t)), r[H + F]("style", "width:" + s + "%");
                }, a);
        }),
        m[I + _](Re, Ba),
        m[I + _](Ue, Ba),
        m[I + _](Be, Ba);
})();
