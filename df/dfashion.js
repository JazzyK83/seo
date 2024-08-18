const jo = {};

(function JetThemeScript() {
  var U = window,
    a2 = document,
    b = setTimeout,
    cD = clearTimeout,
    cG = Date,
    cs = Math,
    y = parseInt,
    S = escape,
    g = unescape,
    cg = encodeURIComponent,
    o = decodeURIComponent,
    ao = RegExp,
    cp = XMLHttpRequest,
    bZ = localStorage,
    aJ = JSON,
    bh = Image,
    bl = setInterval,
    di = clearInterval,
    aQ = "forEach",
    bv = "innerHTML",
    cd = "tagName",
    E = "getElementById",
    v = "getElementsByClassName",
    bQ = "querySelector",
    c5 = "querySelectorAll",
    b9 = "createElement",
    J = "className",
    L = "replace",
    co = "indexOf",
    t = "lastIndexOf",
    bk = "EventListener",
    cH = "add",
    aY = "remove",
    cN = "id",
    aX = "type",
    c6 = "length",
    ag = "call",
    b2 = "slice",
    aL = "scroller",
    aD = "push",
    cx = "Time",
    al = "Date",
    aC = "clientX",
    aB = "clientY",
    n = "pageX",
    m = "pageY",
    aZ = "scrollLeft",
    ce = "scrollTop",
    an = "onreadystatechange",
    cK = "readyState",
    bg = "Attribute",
    bB = "set",
    bX = "get",
    aH = "post",
    N = "checked",
    aE = "focus",
    cu = "height",
    cI = "offsetWidth",
    cP = "offsetHeight",
    aK = "toFixed",
    aR = "pageYOffset",
    c7 = "appendChild",
    bW = "firstChild",
    cO = "insert",
    cf = "Before",
    aO = "value",
    aU = "match",
    ah = "href",
    bA = "src",
    ad = "onload",
    ay = "onerror",
    T = "target",
    cl = "closest",
    bw = "location",
    bs = "split",
    bp = "trim",
    cq = "open",
    by = "send",
    bC = "random",
    dh = "status",
    bI = "toString",
    a9 = "parentElement",
    az = "activeElement",
    cE = "preventDefault",
    bt = "substr",
    cZ = "setRequestHeader",
    aP = "responseText",
    cQ = "response",
    br = "body",
    a5 = "title",
    av = "test",
    aN = "container",
    a6 = "ceil",
    aw = "floor",
    bP = "round",
    at = "min",
    c3 = "map",
    cR = "cookie",
    ae = "contains",
    bx = "toUTCString",
    ci = "textContent",
    aI = "elementFromPoint",
    a4 = "Item",
    b6 = "nextSibling",
    df = "load",
    F = "false",
    bb = "valid",
    cm = "scroll",
    O = "click",
    ba = "submit",
    b0 = "blur",
    cc = "mousemove",
    x = "mouseup",
    aj = "touchstart",
    a8 = "mousedown",
    be = "change",
    q = "complete",
    dg = "undefined",
    bJ = "function",
    bS = "Content-Type",
    Y = "text/html",
    cC = "application/x-www-form-urlencoded",
    k = "pagination",
    c2 = "loadCustomPosts",
    p = "custom_posts",
    X = "config",
    de = "adsbygoogle",
    b1 = "analytics",
    A = "jet",
    cJ = "https://",
    ak = "www.blogger.com/",
    aG = "-rw",
    ch = "devicePixelRatio",
    d = "mount",
    db = typeof isPreview !== dg ? isPreview : false,
    cv = typeof siteUrl !== dg ? siteUrl.substr(0, siteUrl.length - 1).replace(/(^\w+:|^)\/\//, "") : "",
    aS = cJ + cv,
    a0 = typeof currentUrl !== dg ? currentUrl : "",
    z = typeof blogId !== dg ? blogId : "",
    cS = typeof blogTitle !== dg ? blogTitle : "",
    bL = typeof titleSeparator !== dg ? titleSeparator : " - ",
    cz = typeof pageTitle !== dg ? pageTitle : "Page",
    D = typeof analyticId !== dg ? analyticId : false,
    C = typeof caPubAdsense !== dg ? caPubAdsense.replace(/^\D+/g, "") : false,
    a3 = C ? "ca-pub-" + C : false,
    ca = typeof innerAdsDelimiter !== dg ? innerAdsDelimiter : "p,br,div",
    b8 = typeof ignoreAdsDelimiter !== dg ? ignoreAdsDelimiter : "pre,ul,ol,li,table,blockquote",
    bF = typeof autoTOC !== dg ? autoTOC : false,
    ax = typeof toc_temp === bJ ? toc_temp : false,
    u = typeof positionTOC !== dg ? positionTOC : false,
    bu = typeof jtCallback === bJ ? jtCallback : false,
    ct = "theme",
    a7 = "firebase",
    w = "8.4.2",
    c = typeof firebaseUrl !== dg ? firebaseUrl : "",
    bV = typeof safeAds !== dg ? safeAds : false,
    b5 = typeof limitAdsClick !== dg ? limitAdsClick : 3,
    bj = typeof timeAdsClick !== dg ? timeAdsClick : 10,
    bi = typeof blockAdsClick !== dg ? blockAdsClick : 6,
    bn = typeof generate_url_temp === bJ ? generate_url_temp : false,
    bH = typeof safeLinkUrl !== dg ? safeLinkUrl : aS,
    c0 = typeof safeLinkGenerate !== dg ? safeLinkGenerate : ".safelink",
    ar = typeof ignoreSafeLink !== dg ? ignoreSafeLink : "",
    af = "member",
    cF = "app",
    W = "please",
    bd = "Newspaper";

  function R(j, i) {
    return -1 < (" " + j[J] + " ").indexOf(" " + i + " ");
  }

  function Q(dj, j) {
    var i;
    R(dj, j) || ("" != (i = dj[J]) && (j = " " + j), dj[J] = i + j);
  }

  function bU(j, i) {
    j[J] = j[J].replace(new ao("(?:^|\\s)" + i + "(?!\\S)"), "").trim();
  }

  function bR(j, i) {
    (R(j, i) ? bU : Q)(j, i);
  }

  function aW(j, i) {
    Q(j, "d-block"), b(function () {
      Q(j, i);
    }, 100);
  }

  function cB(dj, j, i) {
    bU(dj, j),
      b(function () {
        bU(dj, "d-block");
      }, i || 300);
  }

  function I(dj, j) {
    for (var i = 0; i < dj.length; i++) {
      if (dj[i] === j) {
        return true;
      }
    }
    return false;
  }

  function aT() {
    return (cs.random() + 1).toString(36).substr(7);
  }

  function cT(j, i) {
    return !!(j = new RegExp("[?&]" + j + "=([^&#=]*)")).test(i) && i.match(j)[1];
  }

  function ab(dn, dr, dq, dp) {
    dn = parseInt(dn), dr = parseInt(dr), dq = parseInt(dq), dp = parseInt(dp);
    var j,
      dk,
      dl = Math.ceil(dn / dq);
    dr < 1 ? (dr = 1) : dl < dr && (dr = dl);
    dk =
      dl <= dp
        ? ((j = 1), dl)
        : ((dn = Math.floor(dp / 2)),
          (dq = Math.ceil(dp / 2) - 1),
          dr <= dn
            ? ((j = 1), dp)
            : dl <= dr + dq
            ? ((j = dl - dp + 1), dl)
            : ((j = dr - dn), dr + dq));
    for (
      var ds = (dr - 1) * dq, dp = Math.min(ds + dq - 1, dn - 1), dj = [], dm = 0;
      dm < dk + 1 - j;
      dm++
    ) {
      dj.push(dm);
    }
    return {
      startPage: j,
      endPage: dk,
      pages: dj,
      startIndex: ds,
      endIndex: dp,
    };
  }

  function ba() {
    var j = jo.g;
    return j ? (j instanceof Array ? j.length : 1) : 0;
  }

  function cj(j) {
    jo.g = j;
  }

  function co(dr, dn, dq, dp, ds, j, dm, dk, dl) {
    var dj = ab(ba(), dn, dq, dp);
    dr.innerHTML = "";
    for (var di = dj.startPage; di <= dj.endPage; di++) {
      var dt = a2.createElement("a");
      dt.className = dn === di ? "active" : "";
      dt.innerHTML = di;
      dt.href = "#";
      dt.addEventListener("click", function (e) {
        dn = parseInt(e.target.innerHTML);
        co(dr, dn, dq, dp, ds, j, dm, dk, dl);
        return false;
      });
      dr.appendChild(dt);
    }
    if (j) {
      var dk = a2.createElement("button");
      dk.innerHTML = "Load More";
      dk.addEventListener("click", function () {
        co(dr, dn + 1, dq, dp, ds, j, dm, dk, dl);
      });
      dr.appendChild(dk);
    }
    dl(jo.g.slice(dj.startIndex, dj.endIndex + 1));
  }

  jo.p = co;
})();
