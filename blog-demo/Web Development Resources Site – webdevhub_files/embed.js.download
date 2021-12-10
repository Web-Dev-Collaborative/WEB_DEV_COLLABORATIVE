// medium tho
(function () { var h = this;
function k(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function l(a) {
  return "array" == k(a);
}
function m(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function n(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, e);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function p(a, b, c) {
  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? m : n;
  return p.apply(null, arguments);
}
var q = Date.now || function() {
  return+new Date;
};
var r = Array.prototype, s = r.indexOf ? function(a, b, c) {
  return r.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if ("string" == typeof a) {
    return "string" == typeof b && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, t = r.map ? function(a, b, c) {
  return r.map.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, d = Array(e), g = "string" == typeof a ? a.split("") : a, f = 0;f < e;f++) {
    f in g && (d[f] = b.call(c, g[f], f, a));
  }
  return d;
};
function u(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = e;
  }
  return b;
}
;function v(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return p.apply(null, b);
}
Function.prototype.bind || (Function.prototype.bind = v);
function w(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return s.apply(null, b);
}
Array.prototype.indexOf || (Array.prototype.indexOf = w);
function x(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return t.apply(null, b);
}
Array.prototype.map || (Array.prototype.map = x);
Date.now || (Date.now = q);
Array.isArray || (Array.isArray = l);
Object.keys || (Object.keys = u);
(function() {
  for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
    var c = (new Date).getTime(), g = Math.max(0, 16 - (c - a)), f = window.setTimeout(function() {
      b(NaN);
    }, g);
    a = c + g;
    return f;
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    clearTimeout(a);
  });
})();
(function() {
  "undefined" === typeof window.performance && (window.performance = {});
  if (!window.performance.now) {
    var a = Date.now();
    window.performance.timing && window.performance.timing.navigationStart && (a = window.performance.timing.navigationStart);
    window.performance.now = function() {
      return Date.now() - a;
    };
  }
})();
window.URL = window.URL || window.webkitURL || window;
function y(a, b, c) {
  this.l = a;
  this.g = b;
  this.h = null;
  this.i = String(c);
  a = this.g.hostname;
  /hatch.dm|medium.com/.test(a) && (a = "api." + a);
  a = this.g.protocol + "//" + a;
  this.g.port && "443" != this.g.port && (a += ":" + this.g.port);
  this.k = a;
}
var z = {q:"profile", o:"collection", s:"story"};
y.prototype.j = function(a) {
  var b = a.data && a.data.split("::");
  b && "m" == b[0] && b[1] == this.i && a.origin == this.k && (a = "display: block;max-width: 100%;min-width: 220px;padding: 0;position: static;visibility: visible;", "false" !== this.g.getAttribute("data-border") && (a += "border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;border-color: #eee #ddd #bbb;border-width: 1px;border-style: solid;box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;"), this.h.setAttribute("style", a), this.h.setAttribute("height",
  b[2]));
};
function A() {
  this.n = 0;
}
A.prototype.m = function() {
  for (var a in z) {
    a = z[a];
    for (var b = document.querySelectorAll(".m-" + a), c = 0, e = b.length;c < e;c++) {
      var d = new y(a, b[c], this.n++);
      d.h = document.createElement("iframe");
      d.h.src = d.k + "/embed?type\x3d" + encodeURIComponent(d.l) + "\x26path\x3d" + encodeURIComponent(d.g.pathname) + "\x26id\x3d" + encodeURIComponent(d.i) + "\x26collapsed\x3d" + encodeURIComponent(d.g.getAttribute("data-collapsed"));
      d.h.setAttribute("allowtransparency", !0);
      d.h.setAttribute("frameborder", "0");
      d.h.setAttribute("title", "Embedded " + d.l);
      d.h.setAttribute("width", d.g.getAttribute("data-width") || 400);
      d.h.setAttribute("height", 0);
      d.g.parentNode.insertBefore(d.h, d.g);
      d.g.parentNode.removeChild(d.g);
      document.addEventListener ? window.addEventListener("message", d.j.bind(d), !1) : document.attachEvent && document.attachEvent("onmessage", d.j.bind(d));
    }
  }
};
if ("Microsoft Internet Explorer" != window.navigator.appName || 8 < document.documentMode) {
  if (window.obv && window.obv.embeds) {
    window.obv.embeds.render();
  } else {
    var B = function() {
      var a = new A, b = a.m.bind(a), c = ["obv", "embeds", "render"], e = h;
      c[0] in e || !e.execScript || e.execScript("var " + c[0]);
      for (var d;c.length && (d = c.shift());) {
        c.length || void 0 === b ? e = e[d] ? e[d] : e[d] = {} : e[d] = b;
      }
      a.m();
    };
    "complete" === document.readyState ? setTimeout(B, 1) : document.addEventListener ? window.addEventListener("load", B, !1) : document.attachEvent && window.attachEvent("onload", B);
  }
}
; }).call(this)
