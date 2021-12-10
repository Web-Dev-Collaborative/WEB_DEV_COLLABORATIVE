const hcaptcha = (() => {
  "use strict";
  function e(e) {
    const t = this.constructor;
    return this.then(
      n => {
        return t.resolve(e()).then(() => {
          return n;
        });
      },
      n => {
        return t.resolve(e()).then(() => {
          return t.reject(n);
        });
      }
    );
  }
  const t = setTimeout;
  function n() {}
  function i(e) {
    if (!(this instanceof i))
      throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    (this._state = 0),
      (this._handled = !1),
      (this._value = undefined),
      (this._deferreds = []),
      h(e, this);
  }
  function o(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        i._immediateFn(() => {
          const n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            let i;
            try {
              i = n(e._value);
            } catch (o) {
              return void a(t.promise, o);
            }
            r(t.promise, i);
          } else (1 === e._state ? r : a)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }
  function r(e, t) {
    try {
      if (t === e)
        throw new TypeError("A promise cannot be resolved with itself.");
      if (t && ("object" == typeof t || "function" == typeof t)) {
        const n = t.then;
        if (t instanceof i) return (e._state = 3), (e._value = t), void s(e);
        if ("function" == typeof n)
          return void h(
            ((o = n),
            (r = t),
            function () {
              o.apply(r, arguments);
            }),
            e
          );
      }
      (e._state = 1), (e._value = t), s(e);
    } catch (c) {
      a(e, c);
    }
    var o, r;
  }
  function a(e, t) {
    (e._state = 2), (e._value = t), s(e);
  }
  function s(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      i._immediateFn(() => {
        e._handled || i._unhandledRejectionFn(e._value);
      });
    for (let t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
    e._deferreds = null;
  }
  function c(e, t, n) {
    (this.onFulfilled = "function" == typeof e ? e : null),
      (this.onRejected = "function" == typeof t ? t : null),
      (this.promise = n);
  }
  function h(e, t) {
    let n = !1;
    try {
      e(
        e => {
          n || ((n = !0), r(t, e));
        },
        e => {
          n || ((n = !0), a(t, e));
        }
      );
    } catch (i) {
      if (n) return;
      (n = !0), a(t, i);
    }
  }
  (i.prototype["catch"] = function (e) {
    return this.then(null, e);
  }),
    (i.prototype.then = function (e, t) {
      const i = new this.constructor(n);
      return o(this, new c(e, t, i)), i;
    }),
    (i.prototype["finally"] = e),
    (i.all = e => {
      return new i((t, n) => {
        if (!e || "undefined" == typeof e.length)
          throw new TypeError("Promise.all accepts an array");
        const i = Array.prototype.slice.call(e);
        if (0 === i.length) return t([]);
        let o = i.length;
        function r(e, a) {
          try {
            if (a && ("object" == typeof a || "function" == typeof a)) {
              const s = a.then;
              if ("function" == typeof s)
                return void s.call(
                  a,
                  t => {
                    r(e, t);
                  },
                  n
                );
            }
            (i[e] = a), 0 == --o && t(i);
          } catch (c) {
            n(c);
          }
        }
        for (let a = 0; a < i.length; a++) r(a, i[a]);
      });
    }),
    (i.resolve = e => {
      return e && "object" == typeof e && e.constructor === i
        ? e
        : new i(t => {
            t(e);
          });
    }),
    (i.reject = e => {
      return new i((t, n) => {
        n(e);
      });
    }),
    (i.race = e => {
      return new i((t, n) => {
        for (let i = 0, o = e.length; i < o; i++) e[i].then(t, n);
      });
    }),
    (i._immediateFn =
      ("function" == typeof setImmediate &&
        (e => {
          setImmediate(e);
        })) ||
      (e => {
        t(e, 0);
      })),
    (i._unhandledRejectionFn = e => {
      "undefined" != typeof console &&
        console &&
        console.warn("Possible Unhandled Promise Rejection:", e);
    });
  let l;

  const d = (() => {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw new Error("unable to locate global object");
  })();

  "Promise" in d
    ? d.Promise.prototype["finally"] || (d.Promise.prototype["finally"] = e)
    : (d.Promise = i),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = (e => {
        return function (t, n) {
          if (null === this || this === undefined)
            throw TypeError(
              "Array.prototype.indexOf called on null or undefined"
            );
          const i = e(this);
          const o = i.length >>> 0;
          let r = Math.min(0 | n, o);
          if (r < 0) r = Math.max(0, o + r);
          else if (r >= o) return -1;
          if (void 0 === t) {
            for (; r !== o; ++r) if (void 0 === i[r] && r in i) return r;
          } else if (t != t) {
            for (; r !== o; ++r) if (i[r] != i[r]) return r;
          } else for (; r !== o; ++r) if (i[r] === t) return r;
          return -1;
        };
      })(Object)),
    Array.isArray ||
      (Array.isArray = e => {
        return "[object Array]" === Object.prototype.toString.call(e);
      }),
    document.getElementsByClassName ||
      (window.Element.prototype.getElementsByClassName = document.constructor.prototype.getElementsByClassName = e => {
        if (document.querySelectorAll)
          return document.querySelectorAll("." + e);
        for (
          var t = document.getElementsByTagName("*"),
            n = new RegExp("(^|\\s)" + e + "(\\s|$)"),
            i = [],
            o = 0;
          o < t.length;
          o++
        )
          n.test(t[o].className) && i.push(t[o]);
        return i;
      }),
    String.prototype.startsWith ||
      (String.prototype.startsWith = function (e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
      }),
    String.prototype.endsWith ||
      (String.prototype.endsWith = function (e, t) {
        return (
          (t === undefined || t > this.length) && (t = this.length),
          this.substring(t - e.length, t) === e
        );
      });
  try {
    if (
      Object.defineProperty &&
      Object.getOwnPropertyDescriptor &&
      Object.getOwnPropertyDescriptor(Element.prototype, "textContent") &&
      !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get
    ) {
      const u = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
      Object.defineProperty(Element.prototype, "textContent", {
        get() {
          return u.get.call(this);
        },
        set(e) {
          u.set.call(this, e);
        },
      });
    }
  } catch (Ct) {}
  Function.prototype.bind ||
    (Function.prototype.bind = function (e) {
      if ("function" != typeof this)
        throw new TypeError("Function.prototype.bind: Item Can Not Be Bound.");
      const t = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = () => {},
            o = function () {
              return n.apply(
                this instanceof i ? this : e,
                t.concat(Array.prototype.slice.call(arguments))
              );
            };
      return (
        this.prototype && (i.prototype = this.prototype),
        (o.prototype = new i()),
        o
      );
    }),
    "function" != typeof Object.create &&
      (Object.create = (e, t) => {
        function n() {}
        if (((n.prototype = e), "object" == typeof t))
          for (const i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        return new n();
      }),
    Date.now ||
      (Date.now = () => {
        return new Date().getTime();
      }),
    window.console || (window.console = {});
  for (
    var p,
      f,
      m = ["error", "info", "log", "show", "table", "trace", "warn"],
      g = e => {},
      y = m.length;
    --y > -1;

  )
    (l = m[y]), window.console[l] || (window.console[l] = g);
  if (window.atob)
    try {
      window.atob(" ");
    } catch (kt) {
      window.atob =
        ((p = window.atob),
        ((f = e => {
          return p(String(e).replace(/[\t\n\f\r ]+/g, ""));
        }).original = p),
        f);
    }
  else {
    const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", w = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    window.atob = e => {
      if (((e = String(e).replace(/[\t\n\f\r ]+/g, "")), !w.test(e)))
        throw new TypeError(
          "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
        );
      let t, n, i;
      e += "==".slice(2 - (3 & e.length));
      for (var o = "", r = 0; r < e.length; )
        (t =
          (v.indexOf(e.charAt(r++)) << 18) |
          (v.indexOf(e.charAt(r++)) << 12) |
          ((n = v.indexOf(e.charAt(r++))) << 6) |
          (i = v.indexOf(e.charAt(r++)))),
          (o +=
            64 === n
              ? String.fromCharCode((t >> 16) & 255)
              : 64 === i
              ? String.fromCharCode((t >> 16) & 255, (t >> 8) & 255)
              : String.fromCharCode((t >> 16) & 255, (t >> 8) & 255, 255 & t));
      return o;
    };
  }
  Event.prototype.preventDefault ||
    (Event.prototype.preventDefault = function () {
      this.returnValue = !1;
    }),
    Event.prototype.stopPropagation ||
      (Event.prototype.stopPropagation = function () {
        this.cancelBubble = !0;
      });
  const b = [],
        x = [],
        _ = {
          add(e) {
            b.push(e);
          },
          remove(e) {
            for (var t = !1, n = b.length; --n > -1 && !1 === t; )
              b[n].id === e.id && ((t = b[n]), b.splice(n, 1));
            return t;
          },
          each(e) {
            for (let t = -1; ++t < b.length; ) e(b[t]);
          },
          isValidId(e) {
            for (var t = !1, n = -1; ++n < b.length && !1 === t; )
              b[n].id === e && (t = !0);
            return t;
          },
          getByIndex(e) {
            for (var t = !1, n = -1; ++n < b.length && !1 === t; )
              n === e && (t = b[n]);
            return t;
          },
          getById(e) {
            for (var t = !1, n = -1; ++n < b.length && !1 === t; )
              b[n].id === e && (t = b[n]);
            return t;
          },
          getCaptchaIdList() {
            const e = [];
            return _.each(t => {
              e.push(t.id);
            }),
            e
          ;
          },
          pushSession(e, t) {
            x.push([e, t]), x.length > 10 && x.splice(0, x.length - 10);
          },
          getSession() {
            return x;
          },
        };
  function C(e, t) {
    "object" != typeof e || t || ((t = e), (e = null));
    let n = !1;
    if (!(n = e ? _.getById(e) : _.getByIndex(0)))
      throw e
        ? Error("[hCaptcha] invalid captcha id: " + e)
        : Error("[hCaptcha] no captchas exist.");
    n.onReady(n.initChallenge, t);
  }
  function k() {
    const e = this;
    (this._bottom = 0),
      (this._top = 0),
      (this.storage = {}),
      (this.add = t => {
        return (e.storage[e._top] = t), e._top++, t;
      }),
      (this.remove = () => {
        if (!e.empty()) {
          const t = e._bottom, n = e.storage[t];
          return (e.storage[t] = null), e._bottom++, n;
        }
      }),
      (this.empty = () => {
        return e._top === e._bottom;
      }),
      (this.size = () => {
        return e._top - e._bottom;
      });
  }
  const E = {
            queue: k,
            depth: function Et(e, t, n) {
              if ("object" == typeof e && e[t] && e[t].length > 0)
                for (let i = e[t].length; --i > -1; ) Et(e[t][i], t, n);
              e !== undefined && n(e);
            },
            breathe(e, t, n) {
              const i = new k();
              let o = null;
              for (i.add(e), o = i.remove(); o; ) {
                for (let r = 0; r < o[t].length; r++) i.add(o[t][r]);
                n(o), (o = i.remove());
              }
            },
          },
        O = [
          {
            family: "UC Browser",
            patterns: ["(UC? ?Browser|UCWEB|U3)[ /]?(\\d+)\\.(\\d+)\\.(\\d+)"],
          },
          {
            family: "Opera",
            name_replace: "Opera Mobile",
            patterns: [
              "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
              "(Opera)/(\\d+)\\.(\\d+).+Opera Mobi",
              "Opera Mobi.+(Opera)(?:/|\\s+)(\\d+)\\.(\\d+)",
              "Opera Mobi",
              "(?:Mobile Safari).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)",
            ],
          },
          {
            family: "Opera",
            name_replace: "Opera Mini",
            patterns: [
              "(Opera Mini)(?:/att|)/?(\\d+|)(?:\\.(\\d+)|)(?:\\.(\\d+)|)",
              "(OPiOS)/(\\d+).(\\d+).(\\d+)",
            ],
          },
          {
            family: "Opera",
            name_replace: "Opera Neon",
            patterns: ["Chrome/.+( MMS)/(\\d+).(\\d+).(\\d+)"],
          },
          {
            name_replace: "Opera",
            patterns: [
              "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)",
              "(?:Chrome).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)",
            ],
          },
          {
            family: "Firefox",
            name_replace: "Firefox Mobile",
            patterns: [
              "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
              "(Fennec)/(\\d+)\\.(\\d+)(pre)",
              "(Fennec)/(\\d+)\\.(\\d+)",
              "(?:Mobile|Tablet);.*(Firefox)/(\\d+)\\.(\\d+)",
              "(FxiOS)/(\\d+)\\.(\\d+)(\\.(\\d+)|)(\\.(\\d+)|)",
            ],
          },
          {
            name_replace: "Coc Coc",
            patterns: ["(coc_coc_browser)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)"],
          },
          {
            family: "QQ",
            name_replace: "QQ Mini",
            patterns: ["(MQQBrowser/Mini)(?:(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)"],
          },
          {
            family: "QQ",
            name_replace: "QQ Mobile",
            patterns: ["(MQQBrowser)(?:/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)"],
          },
          {
            name_replace: "QQ",
            patterns: [
              "(QQBrowser)(?:/(\\d+)(?:\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)|)",
            ],
          },
          {
            family: "Edge",
            name: "Edge Mobile",
            patterns: [
              "Windows Phone .*(Edge)/(\\d+)\\.(\\d+)",
              "(EdgiOS|EdgA)/(\\d+)\\.(\\d+).(\\d+).(\\d+)",
            ],
          },
          { name_replace: "Edge", patterns: ["(Edge|Edg)/(\\d+)(?:\\.(\\d+)|)"] },
          { patterns: ["(Puffin)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)"] },
          {
            family: "Chrome",
            name_replace: "Chrome Mobile",
            patterns: [
              "Version/.+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
              "; wv\\).+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
              "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
              "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
              "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile(?:[ /]|$)",
              " Mobile .*(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
            ],
          },
          {
            family: "Yandex",
            name_replace: "Yandex Mobile",
            patterns: ["(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+).*Mobile"],
          },
          {
            name_replace: "Yandex",
            patterns: ["(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)"],
          },
          {
            patterns: [
              "(Vivaldi)/(\\d+)\\.(\\d+)",
              "(Vivaldi)/(\\d+)\\.(\\d+)\\.(\\d+)",
            ],
          },
          {
            name_replace: "Brave",
            patterns: ["(brave)/(\\d+)\\.(\\d+)\\.(\\d+) Chrome"],
          },
          {
            family: "Chrome",
            patterns: [
              "(Chromium|Chrome)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)",
            ],
          },
          {
            name_replace: "Internet Explorer Mobile",
            patterns: ["(IEMobile)[ /](\\d+)\\.(\\d+)"],
          },
          {
            family: "Safari",
            name_replace: "Safari Mobile",
            patterns: [
              "(iPod|iPhone|iPad).+Version/(d+).(d+)(?:.(d+)|).*[ +]Safari",
              "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).* AppleNews\\/\\d+\\.\\d+\\.\\d+?",
              "(iPod|iPhone|iPad).+Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)",
              "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile.*[ +]Safari",
              "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile",
              "(iPod|iPod touch|iPhone|iPad).* Safari",
              "(iPod|iPod touch|iPhone|iPad)",
            ],
          },
          {
            name_replace: "Safari",
            patterns: ["(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|).*Safari/"],
          },
          {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(7|8).(0)"],
            major_replace: "11",
          },
          {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(6)\\.(0)"],
            major_replace: "10",
          },
          {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(5)\\.(0)"],
            major_replace: "9",
          },
          {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(4)\\.(0)"],
            major_replace: "8",
          },
          {
            family: "Firefox",
            patterns: [
              "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)",
              "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*|)",
            ],
          },
        ],
        S = [
          {
            family: "Windows",
            name_replace: "Windows Phone",
            patterns: [
              "(Windows Phone) (?:OS[ /])?(\\d+)\\.(\\d+)",
              "^UCWEB.*; (wds) (\\d+)\\.(d+)(?:\\.(\\d+)|);",
              "^UCWEB.*; (wds) (\\d+)\\.(\\d+)(?:\\.(\\d+)|);",
            ],
          },
          {
            family: "Windows",
            name_replace: "Windows Mobile",
            patterns: ["(Windows ?Mobile)"],
          },
          {
            name_replace: "Android",
            patterns: [
              "(Android)[ \\-/](\\d+)(?:\\.(\\d+)|)(?:[.\\-]([a-z0-9]+)|)",
              "(Android) (d+);",
              "^UCWEB.*; (Adr) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+)|);",
              "^(JUC).*; ?U; ?(?:Android|)(\\d+)\\.(\\d+)(?:[\\.\\-]([a-z0-9]+)|)",
              "(android)\\s(?:mobile\\/)(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)",
              "(Silk-Accelerated=[a-z]{4,5})",
              "Puffin/[\\d\\.]+AT",
              "Puffin/[\\d\\.]+AP",
            ],
          },
          {
            name_replace: "Chrome OS",
            patterns: [
              "(x86_64|aarch64)\\ (\\d+)\\.(\\d+)\\.(\\d+).*Chrome.*(?:CitrixChromeApp)$",
              "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+)|)",
            ],
          },
          {
            name_replace: "Windows",
            patterns: ["(Windows 10)", "(Windows NT 6\\.4)", "(Windows NT 10\\.0)"],
            major_replace: "10",
          },
          {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.3; ARM;)", "(Windows NT 6.3)"],
            major_replace: "8",
            minor_replace: "1",
          },
          {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.2)"],
            major_replace: "8",
          },
          {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.1)"],
            major_replace: "7",
          },
          {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.0)"],
            major_replace: "Vista",
          },
          {
            name_replace: "Windows",
            patterns: ["(Windows (?:NT 5\\.2|NT 5\\.1))"],
            major_replace: "XP",
          },
          {
            name_replace: "Mac OS X",
            patterns: [
              "((?:Mac[ +]?|; )OS[ +]X)[\\s+/](?:(\\d+)[_.](\\d+)(?:[_.](\\d+)|)|Mach-O)",
              "\\w+\\s+Mac OS X\\s+\\w+\\s+(\\d+).(\\d+).(\\d+).*",
              "(?:PPC|Intel) (Mac OS X)",
            ],
          },
          {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(10).(d+).*((?:i386|x86_64))"],
            major_replace: "10",
            minor_replace: "6",
          },
          {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(11).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "7",
          },
          {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(12).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "8",
          },
          {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(13).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "9",
          },
          {
            name_replace: "iOS",
            patterns: [
              "^UCWEB.*; (iPad|iPh|iPd) OS (\\d+)_(\\d+)(?:_(\\d+)|);",
              "(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(\\d+)[_\\.](\\d+)(?:[_\\.](\\d+)|)",
              "(iPhone|iPad|iPod); Opera",
              "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
              "\\b(iOS[ /]|iOS; |iPhone(?:/| v|[ _]OS[/,]|; | OS : |\\d,\\d/|\\d,\\d; )|iPad/)(\\d{1,2})[_\\.](\\d{1,2})(?:[_\\.](\\d+)|)",
              "\\((iOS);",
              "(iPod|iPhone|iPad)",
              "Puffin/[\\d\\.]+IT",
              "Puffin/[\\d\\.]+IP",
            ],
          },
          {
            family: "Chrome",
            name_replace: "Chromecast",
            patterns: [
              "(CrKey -)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)",
              "(CrKey[ +]armv7l)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)",
              "(CrKey)(?:[/](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)",
            ],
          },
          { name_replace: "Debian", patterns: ["([Dd]ebian)"] },
          {
            family: "Linux",
            name_replace: "Linux",
            patterns: ["(Linux Mint)(?:/(\\d+)|)"],
          },
          {
            family: "Linux",
            patterns: [
              "(Ubuntu|Kubuntu|Arch Linux|CentOS|Slackware|Gentoo|openSUSE|SUSE|Red Hat|Fedora|PCLinuxOS|Mageia|(?:Free|Open|Net|\\b)BSD)",
              "(Mandriva)(?: Linux|)/(?:[\\d.-]+m[a-z]{2}(\\d+).(\\d)|)",
              "(Linux)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)",
              "\\(linux-gnu\\)",
            ],
          },
          {
            family: "BlackBerry",
            name_replace: "BlackBerry OS",
            patterns: [
              "(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
              "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)",
              "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)",
              "(Black[Bb]erry)",
            ],
          },
          {
            patterns: [
              "(Fedora|Red Hat|PCLinuxOS|Puppy|Ubuntu|Kindle|Bada|Sailfish|Lubuntu|BackTrack|Slackware|(?:Free|Open|Net|\\b)BSD)[/ ](\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)",
            ],
          },
        ],
        I = navigator.userAgent,
        P = {
          getAgent() {
            return I;
          },
          getBrowser(e) {
            return B(e || I, O);
          },
          getOS(e) {
            return B(e || I, S);
          },
        };
  function T(e, t) {
    try {
      const n = new RegExp(t).exec(e);
      return n
        ? {
            name: n[1] || "Other",
            major: n[2] || "0",
            minor: n[3] || "0",
            patch: n[4] || "0",
          }
        : null;
    } catch (kt) {
      return null;
    }
  }
  function B(e, t) {
    for (var n = null, i = null, o = -1, r = !1; ++o < t.length && !r; ) {
      n = t[o];
      for (let a = -1; ++a < n.patterns.length && !r; )
        r = null !== (i = T(e, n.patterns[a]));
    }
    return r
      ? ((i.family = n.family || n.name_replace || i.name),
        n.name_replace && (i.name = n.name_replace),
        n.major_replace && (i.major = n.major_replace),
        n.minor_replace && (i.minor = n.minor_replace),
        n.patch_replace && (i.minor = n.patch_replace),
        i)
      : { family: "Other", name: "Other", major: "0", minor: "0", patch: "0" };
  }
  function A() {
    const e = this, t = P.getBrowser(), n = P.getAgent();
    (this.agent = n.toLowerCase()),
      (this.language =
        window.navigator.userLanguage || window.navigator.language),
      (this.isCSS1 = "CSS1Compat" === (document.compatMode || "")),
      (this.width = () => {
        return window.innerWidth && window.document.documentElement.clientWidth
          ? Math.min(window.innerWidth, document.documentElement.clientWidth)
          : window.innerWidth ||
              window.document.documentElement.clientWidth ||
              document.body.clientWidth;
      }),
      (this.height = () => {
        return (
          window.innerHeight ||
          window.document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      }),
      (this.scrollX = () => {
        return window.pageXOffset !== undefined
          ? window.pageXOffset
          : e.isCSS1
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      }),
      (this.scrollY = () => {
        return window.pageYOffset !== undefined
          ? window.pageYOffset
          : e.isCSS1
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      }),
      (this.type =
        "Edge" === t.family
          ? "edge"
          : "Internet Explorer" === t.family
          ? "ie"
          : "Chrome" === t.family
          ? "chrome"
          : "Safari" === t.family
          ? "safari"
          : "Firefox" === t.family
          ? "firefox"
          : t.family.toLowerCase()),
      (this.version = 1 * (t.major + "." + t.minor) || 0),
      (this.hasPostMessage = !!window.postMessage);
  }
  (A.prototype.hasEvent = (e, t) => {
    return "on" + e in (t || document.createElement("div"));
  }),
    (A.prototype.getScreenDimensions = () => {
      const e = {};
      for (const t in window.screen) e[t] = window.screen[t];
      return delete e.orientation, e;
    }),
    (A.prototype.interrogateNavigator = () => {
      const e = {};
      for (const t in window.navigator)
        try {
          e[t] = window.navigator[t];
        } catch (Ct) {}
      if (
        (delete e.plugins,
        delete e.mimeTypes,
        (e.plugins = []),
        window.navigator.plugins)
      )
        for (let n = 0; n < window.navigator.plugins.length; n++)
          e.plugins[n] = window.navigator.plugins[n].filename;
      return e;
    }),
    (A.prototype.supportsCanvas = () => {
      const e = document.createElement("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    (A.prototype.supportsWebAssembly = () => {
      try {
        if (
          "object" == typeof WebAssembly &&
          "function" == typeof WebAssembly.instantiate
        ) {
          const e = new WebAssembly.Module(
            Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
          );
          if (e instanceof WebAssembly.Module)
            return new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
        }
      } catch (kt) {
        return !1;
      }
    });
  const M = {
            Browser: new A(),
            System: new (function () {
              let e;
              let t;
              const n = P.getOS();
              const i = P.getAgent();
              (this.mobile =
                ((e = !!(
                  "ontouchstart" in window ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                )),
                (t = !1),
                n &&
                  (t =
                    [
                      "iOS",
                      "Windows Phone",
                      "Windows Mobile",
                      "Android",
                      "BlackBerry OS",
                    ].indexOf(n.name) >= 0),
                e && t)),
                (this.dpr = () => {
                  return window.devicePixelRatio || 1;
                }),
                this.mobile &&
                  n &&
                  "Windows" === n.family &&
                  i.indexOf("touch") < 0 &&
                  (this.mobile = !1),
                (this.os =
                  "iOS" === n.family
                    ? "ios"
                    : "Android" === n.family
                    ? "android"
                    : "Mac OS X" === n.family
                    ? "mac"
                    : "Windows" === n.family
                    ? "windows"
                    : "Linux" === n.family
                    ? "linux"
                    : n.family.toLowerCase()),
                (this.version = (() => {
                  if (!n) return "unknown";
                  let e = n.major;
                  return (
                    n.minor && (e += "." + n.minor),
                    n.patch && (e += "." + n.patch),
                    e
                  );
                })());
            })(),
          },
        $ = {
          host: null,
          file: null,
          sitekey: null,
          pingdom:
            "safari" === M.Browser.type &&
            "windows" !== M.System.os &&
            "mac" !== M.System.os &&
            "ios" !== M.System.os &&
            "android" !== M.System.os,
          assetDomain: "https://assets.hcaptcha.com",
          assetUrl: "https://assets.hcaptcha.com/captcha/v1/a9589f9/static",
          width: null,
          height: null,
          mobile: null,
        },
        L = {
          tplinks: "on",
          language: null,
          reportapi: "https://accounts.hcaptcha.com",
          endpoint: "https://hcaptcha.com",
          endpointOverride: null,
          size: "normal",
          theme: "light",
          assethost: null,
          imghost: null,
          recaptchacompat: "true",
        },
        j =
          "Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> to complete this captcha.";
  function R(e, t) {
    (e.style.width = "304px"),
      (e.style.height = "78px"),
      (e.style.backgroundColor = "#f9e5e5"),
      (e.style.position = "relative"),
      (e.innerHTML = "");
    const n = document.createElement("div");
    (n.style.width = "284px"),
      (n.style.position = "absolute"),
      (n.style.top = "12px"),
      (n.style.left = "10px"),
      (n.style.fontFamily = "arial, sans-serif"),
      (n.style.color = "#7c0a06"),
      (n.style.fontSize = "14px"),
      (n.style.fontWeight = "normal"),
      (n.style.lineHeight = "18px"),
      (n.innerHTML = t || j),
      e.appendChild(n);
  }
  let D = !0;
  function z(e) {
    const t = { message: e.name + ": " + e.message };
    e.stack && (t.stack_trace = { trace: e.stack }),
      N("report error", "internal", "debug", t),
      W("internal error", "error", $.file);
  }
  function W(e, t, n) {
    D && window.Raven && Raven.captureMessage(e, { level: t, logger: n });
  }
  function N(e, t, n, i) {
    D &&
      window.Raven &&
      Raven.captureBreadcrumb({ message: e, category: t, level: n, data: i });
  }
  function U() {
    try {
      (function (e) {
        const t = [].slice.call(arguments, 1);
        "string" == typeof e
          ? window[e]
            ? "function" == typeof window[e]
              ? window[e].apply(null, t)
              : console.log(
                  "[hCaptcha] Callback '" + e + "' is not a function."
                )
            : console.log("[hCaptcha] Callback '" + e + "' is not defined.")
          : "function" == typeof e
          ? e.apply(null, t)
          : console.log("[hcaptcha] Invalid callback '" + e + "'.");
      }.apply(null, arguments));
    } catch (Ct) {
      console.error("[hCaptcha] There was an error in your callback."),
        console.error(Ct);
    }
  }
  function F(e, t) {
    let n;
    let i = "attempts" in (t = t || {}) ? t.attempts : 1;
    const o = t.delay || 0;
    const r = t.onFail;
    return (n = (t, n, a) => {
      e().then(t, e => {
        let t = i-- > 0;
        r && (t = !1 !== r(e) && t), t ? setTimeout(a, o) : n(e);
      });
    }),
    new Promise((e, t) => {
      n(e, t, function i() {
        n(e, t, i);
      });
    });
  }
  const q = {
            eventName(e) {
              let t = e;
              return (
                "down" === e ||
                "up" === e ||
                "move" === e ||
                "over" === e ||
                "out" === e
                  ? (t =
                      !M.System.mobile || ("down" !== e && "up" !== e && "move" !== e)
                        ? "mouse" + e
                        : "down" === e
                        ? "touchstart"
                        : "up" === e
                        ? "touchend"
                        : "touchmove")
                  : "enter" === e && (t = "keydown"),
                t
              );
            },
            actionName(e) {
              let t = e;
              return (
                "touchstart" === t || "mousedown" === t
                  ? (t = "down")
                  : "touchmove" === t || "mousemove" === t
                  ? (t = "move")
                  : "touchend" === t || "mouseup" === t
                  ? (t = "up")
                  : "mouseover" === t
                  ? (t = "over")
                  : "mouseout" === t && (t = "out"),
                t
              );
            },
            eventCallback(e, t, n) {
              const i = q.actionName(e);
              return o => {
                if (
                  ((o = o || window.event),
                  "down" === i ||
                    "move" === i ||
                    "up" === i ||
                    "over" === i ||
                    "out" === i ||
                    "click" === i)
                ) {
                  const r = q.eventCoords(o), a = n.getBoundingClientRect();
                  (o.windowX = r.x),
                    (o.windowY = r.y),
                    (o.elementX = o.windowX - (a.x || a.left)),
                    (o.elementY = o.windowY - (a.y || a.top));
                }
                (o.keyNum = o.which || o.keyCode || 0),
                  ("enter" === e && 13 !== o.keyNum && 32 !== o.keyNum) ||
                    ((o.action = i), (o.targetElement = n), t(o));
              };
            },
            eventCoords(e) {
              const t = { x: 0, y: 0 };
              if (e.windowsPointer) return e;
              if (!e) return t;
              if (e.touches || e.changedTouches) {
                const n = (e.touches && e.touches.length >= 1
                  ? e.touches
                  : e.changedTouches)[0];
                (t.x = n.pageX || n.clientX), (t.y = n.pageY || n.clientY);
              } else (t.x = e.pageX || e.clientX), (t.y = e.pageY || e.clientY);
              return t;
            },
          },
        H = ["Webkit", "Moz", "ms"],
        X = document.createElement("div").style,
        Y = {};
  function J(e) {
    const t = Y[e];
    return t ||
    (e in X
      ? e
      : (Y[e] =
          (e => {
            for (let t = e[0].toUpperCase() + e.slice(1), n = H.length; n--; )
              if ((e = H[n] + t) in X) return e;
          })(e) || e));
  }
  function V(e, t, n) {
    if (
      ((this.dom = null),
      (this._clss = []),
      (this._nodes = []),
      (this._listeners = []),
      (this._frag = null),
      "object" == typeof e)
    ) {
      this.dom = e;
      const i = [];
      let o = [];
      e.className && (o = e.className.split(" "));
      for (let r = 0; r < o.length; r++)
        "" !== o[r] && " " !== o[r] && i.push(o[r]);
      this._clss = i;
    } else
      (n !== undefined && null !== n) || (n = !0),
        (e === undefined ||
          ("string" == typeof e &&
            (e.indexOf("#") >= 0 || e.indexOf(".") >= 0))) &&
          (e && (t = e), (e = "div")),
        (this.dom = document.createElement(e)),
        t &&
          (t.indexOf("#") >= 0
            ? (this.dom.id = t.split("#")[1])
            : (t.indexOf(".") >= 0 && (t = t.split(".")[1]),
              this.addClass.call(this, t)));
    !0 === n &&
      ((this._frag = document.createDocumentFragment()),
      this._frag.appendChild(this.dom));
  }
  (V.prototype.createElement = function (e, t) {
    const n = new V(e, t, !1);
    return this.appendElement.call(this, n), this._nodes.push(n), n;
  }),
    (V.prototype.appendElement = function (e) {
      if (e === undefined)
        return z({
          name: "DomElement Add Child",
          message: "Child Element is undefined",
        });
      let t;
      t =
        e._frag !== undefined && null !== e._frag
          ? e._frag
          : e.dom !== undefined
          ? e.dom
          : e;
      try {
        e instanceof V && (e._parent = this), this.dom.appendChild(t);
      } catch (kt) {
        z({ name: "DomElement Add Child", message: "Failed to append child." });
      }
      return this;
    }),
    (V.prototype.removeElement = function (e) {
      try {
        let t = e;
        if (e.dom) {
          t = t.dom;
          for (let n = e._nodes.length; --n > -1; )
            e.dom.removeChild(e._nodes[n].dom || e._nodes[n]),
              e._nodes.splice(n, 1);
        } else
          for (let i = this._nodes.length; --i > -1; )
            this._nodes[i] === t && this._nodes.splice(i, 1);
        t.parentNode === this.dom && this.dom.removeChild(t);
      } catch (kt) {
        z({
          name: "DomElement Remove Child",
          message: "Failed to remove child.",
        });
      }
    }),
    (V.prototype.addClass = function (e) {
      return (
        !1 === this.hasClass.call(this, e) &&
          (this._clss.push(e), (this.dom.className = this._clss.join(" "))),
        this
      );
    }),
    (V.prototype.hasClass = function (e) {
      for (
        var t = this.dom.className.indexOf(e) >= 0, n = this._clss.length;
        n-- && !t;

      )
        t = this._clss[n] === e;
      return t;
    }),
    (V.prototype.removeClass = function (e) {
      for (let t = this._clss.length; --t > -1; )
        this._clss[t] === e && this._clss.splice(t, 1);
      return (this.dom.className = this._clss.join(" ")), this;
    }),
    (V.prototype.text = function (e) {
      if (this && this.dom) {
        if (!e) return this.dom.textContent;
        for (
          let t, n, i, o, r = /&(.*?);/g, a = /<[a-z][\s\S]*>/i;
          null !== (t = r.exec(e));

        ) {
          !1 === a.test(t[0])
            ? ((i = t[0]),
              (o = void 0),
              ((o = document.createElement("div")).innerHTML = i),
              (n = o.textContent),
              (e = e.replace(new RegExp(t[0], "g"), n)))
            : (e = e.replace(t[0], ""));
        }
        return (this.dom.textContent = e), this;
      }
    }),
    (V.prototype.content = V.prototype.text),
    (V.prototype.css = function (e) {
      let t;
      for (const n in e) {
        t = e[n];
        try {
          if (
            ("opacity" !== n &&
              "zIndex" !== n &&
              "fontWeight" !== n &&
              isFinite(t) &&
              parseFloat(t) === t &&
              (t += "px"),
            "ie" === M.Browser.type &&
              8 === M.Browser.version &&
              "opacity" === n)
          )
            this.dom.style.filter = "alpha(opacity=" + 100 * t + ")";
          else {
            const i = J(n);
            this.dom.style[i] = t;
          }
        } catch (Ct) {}
      }
      return this;
    }),
    (V.prototype.backgroundImage = function (e, t, n, i) {
      const o = t !== undefined && n !== undefined, r = { "-ms-high-contrast-adjust": "none" };
      if (("object" == typeof t && (i = t), i === undefined && (i = {}), o)) {
        const a = e.width / e.height;
        var s = t;
        var c = s / a;
        i.cover && c < n && (s = (c = n) * a),
          i.contain && c > n && (s = (c = n) * a),
          (r.width = s),
          (r.height = c),
          i.center &&
            ((r.marginLeft = -s / 2),
            (r.marginTop = -c / 2),
            (r.position = "absolute"),
            (r.left = "50%"),
            (r.top = "50%")),
          (i.left || i.right) && ((r.left = i.left || 0), (r.top = i.top || 0));
      }
      "ie" === M.Browser.type && 8 === M.Browser.version
        ? (r.filter =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            e.src +
            "',sizingMethod='scale')")
        : ((r.background = "url(" + e.src + ")"),
          (r.backgroundPosition = "50% 50%"),
          (r.backgroundRepeat = "no-repeat"),
          (r.backgroundSize = o
            ? s + "px " + c + "px"
            : i.cover
            ? "cover"
            : i.contain
            ? "contain"
            : "100%")),
        this.css.call(this, r);
    }),
    (V.prototype.setAttribute = function (e, t) {
      let n;
      if ("object" == typeof e)
        for (const i in e) (n = e[i]), this.dom.setAttribute(i, n);
      else this.dom.setAttribute(e, t);
    }),
    (V.prototype.removeAttribute = function (e, t) {
      let n;
      if ("object" == typeof e)
        for (const i in e) (n = e[i]), this.dom.removeAttribute(i, n);
      else this.dom.removeAttribute(e, t);
    }),
    (V.prototype.addEventListener = function (e, t, n) {
      const i = {
        event: q.eventName(e),
        handler: q.eventCallback(e, t, this.dom),
        callback: t,
      };
      this._listeners.push(i),
        this.dom.addEventListener
          ? this.dom.addEventListener(i.event, i.handler, n)
          : this.dom.attachEvent("on" + i.event, i.handler);
    }),
    (V.prototype.removeEventListener = function (e, t, n) {
      for (let i, o = this._listeners.length; --o > -1; )
        (i = this._listeners[o]).event === e &&
          i.callback === t &&
          (this._listeners.splice(o, 1),
          this.dom.removeEventListener
            ? this.dom.removeEventListener(i.event, i.handler, n)
            : this.dom.detachEvent("on" + i.event, i.handler));
    }),
    (V.prototype.focus = function () {
      this.dom.focus();
    }),
    (V.prototype.blur = function () {
      this.dom.blur();
    }),
    (V.prototype.html = function (e) {
      return e && (this.dom.innerHTML = e), this.dom.innerHTML;
    }),
    (V.prototype.__destroy = function () {
      for (var e, t = this._listeners.length; --t > -1; )
        (e = this._listeners[t]),
          this._listeners.splice(t, 1),
          this.dom.removeEventListener
            ? this.dom.removeEventListener(e.event, e.handler)
            : this.dom.detachEvent("on" + e.event, e.handler);
      return (
        (this.dom = null),
        (this._clss = []),
        (this._nodes = []),
        (this._listeners = []),
        (this._frag = null),
        (e = null),
        null
      );
    });
  const Q = {
    self(e, t) {
      const n = {}, i = Array.prototype.slice.call(arguments, 2);
      for (const o in (t.apply(e, i), e)) n[o] = e[o];
    },
    proto(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
    },
  };
  function K(e, t) {
    Q.self(this, V, t || "div", e), (this.children = []), (this._events = []);
  }
  Q.proto(K, V),
    (K.prototype.initComponent = function (e, t, n) {
      const i = new e(t);
      return (
        (i._parent = this),
        this.children.push(i),
        i.dom &&
          (n !== undefined
            ? n.appendElement && n.appendElement(i)
            : this.appendElement(i)),
        i
      );
    }),
    (K.prototype.destroy = function () {
      const e = this;
      try {
        E.depth(this, "children", t => {
          if (e !== t)
            for (let n = e.children.length; --n > -1; )
              e.children[n] === t && e.children.splice(n, 1);
          t._destroy && t._destroy(), (t = null);
        });
      } catch (kt) {
        throw new Error("Trouble destroying nodes: " + kt);
      }
      return null;
    }),
    (K.prototype._destroy = function () {
      try {
        this.onDestroy && this.onDestroy(),
          this._parent.removeElement && this._parent.removeElement(this);
        for (let e = this._events.length; --e > -1; ) this._events.splice(e, 1);
        (this.children = null),
          (this._destroy = null),
          (this._events = null),
          (this.destroy = null),
          (this.emit = null),
          (this.on = null),
          (this.off = null),
          (this.initComponent = null);
      } catch (kt) {
        z({ name: "DomComponent", message: "Failed to destroy." });
      }
    }),
    (K.prototype.on = function (e, t) {
      for (var n = this._events.length, i = !1; --n > -1 && !1 === i; )
        this._events[n].event === e && (i = this._events[n]);
      !1 === i && ((i = { event: e, listeners: [] }), this._events.push(i)),
        i.listeners.push(t);
    }),
    (K.prototype.off = function (e, t) {
      for (let n = this._events.length; --n > -1; )
        if (this._events[n].event === e) {
          for (let i = this._events[n].listeners.length; --i > -1; )
            this._events[n].listeners[i] === t &&
              this._events[n].listeners.splice(i, 1);
          0 === this._events[n].listeners.length && this._events.splice(n, 1);
        }
    }),
    (K.prototype.emit = function (e) {
      for (
        let t = Array.prototype.slice.call(arguments, 1), n = this._events.length;
        --n > -1 && this._events;

      )
        if (this._events[n].event === e)
          for (let i = this._events[n].listeners.length; --i > -1; )
            this._events[n].listeners[i].apply(this, t);
    });

  const G = {
      af: "Afrikaans",
      sq: "Albanian",
      am: "Amharic",
      ar: "Arabic",
      hy: "Armenian",
      az: "Azerbaijani",
      eu: "Basque",
      be: "Belarusian",
      bn: "Bengali",
      bg: "Bulgarian",
      bs: "Bosnian",
      my: "Burmese",
      ca: "Catalan",
      ceb: "Cebuano",
      zh: "Chinese",
      "zh-CN": "Chinese Simplified",
      "zh-TW": "Chinese Traditional",
      co: "Corsican",
      hr: "Croatian",
      cs: "Czech",
      da: "Danish",
      nl: "Dutch",
      en: "English",
      eo: "Esperanto",
      et: "Estonian",
      fa: "Persian",
      fi: "Finnish",
      fr: "French",
      fy: "Frisian",
      gd: "Gaelic",
      gl: "Galacian",
      ka: "Georgian",
      de: "German",
      el: "Greek",
      gu: "Gujurati",
      ht: "Haitian",
      ha: "Hausa",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hmn: "Hmong",
      hu: "Hungarian",
      is: "Icelandic",
      ig: "Igbo",
      id: "Indonesian",
      ga: "Irish",
      it: "Italian",
      ja: "Japanese",
      jw: "Javanese",
      kn: "Kannada",
      kk: "Kazakh",
      km: "Khmer",
      rw: "Kinyarwanda",
      ky: "Kirghiz",
      ko: "Korean",
      ku: "Kurdish",
      lo: "Lao",
      la: "Latin",
      lv: "Latvian",
      lt: "Lithuanian",
      lb: "Luxembourgish",
      mk: "Macedonian",
      mg: "Malagasy",
      ms: "Malay",
      ml: "Malayalam",
      mt: "Maltese",
      mi: "Maori",
      mr: "Marathi",
      mn: "Mongolian",
      ne: "Nepali",
      no: "Norwegian",
      ny: "Nyanja",
      or: "Oriya",
      pl: "Polish",
      pt: "Portuguese",
      ps: "Pashto",
      pa: "Punjabi",
      ro: "Romanian",
      ru: "Russian",
      sm: "Samoan",
      sn: "Shona",
      sd: "Sindhi",
      si: "Singhalese",
      sr: "Serbian",
      sk: "Slovak",
      sl: "Slovenian",
      so: "Somani",
      st: "Southern Sotho",
      es: "Spanish",
      su: "Sundanese",
      sw: "Swahili",
      sv: "Swedish",
      tl: "Tagalog",
      tg: "Tajik",
      ta: "Tamil",
      tt: "Tatar",
      te: "Teluga",
      th: "Thai",
      tr: "Turkish",
      tk: "Turkmen",
      ug: "Uyghur",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      vi: "Vietnamese",
      cy: "Welsh",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      zu: "Zulu",
    };

  const Z = {
    zh: { "I am human": "我是人" },
    ar: { "I am human": "أنا الإنسان" },
    af: { "I am human": "Ek is menslike" },
    am: { "I am human": "እኔ ሰው ነኝ" },
    hy: { "I am human": "Ես մարդ եմ" },
    az: { "I am human": "Mən insanam" },
    eu: { "I am human": "Gizakia naiz" },
    bn: { "I am human": "আমি মানব নই" },
    bg: { "I am human": "Аз съм човек" },
    ca: { "I am human": "Sóc humà" },
    hr: { "I am human": "Ja sam čovjek" },
    cs: { "I am human": "Jsem člověk" },
    da: { "I am human": "Jeg er et menneske" },
    nl: { "I am human": "Ik ben een mens" },
    et: { "I am human": "Ma olen inimeste" },
    fi: { "I am human": "Olen ihminen" },
    fr: { "I am human": "Je suis humain" },
    gl: { "I am human": "Eu son humano" },
    ka: { "I am human": "მე ვარ ადამიანი" },
    de: { "I am human": "Ich bin ein Mensch" },
    el: { "I am human": "Είμαι άνθρωπος" },
    gu: { "I am human": "હું માનવ છું" },
    iw: { "I am human": ". אני אנושי" },
    hi: { "I am human": "मैं मानव हूं" },
    hu: { "I am human": "Nem vagyok robot" },
    is: { "I am human": "Ég er manneskja" },
    id: { "I am human": "Aku manusia" },
    it: { "I am human": "Sono un essere umano" },
    ja: { "I am human": "私は人間です" },
    kn: { "I am human": "ನಾನು ಮಾನವನು" },
    ko: { "I am human": "사람입니다" },
    lo: { "I am human": "ຂ້ອຍເປັນມະນຸດ" },
    lv: { "I am human": "Es esmu cilvēks" },
    lt: { "I am human": "Aš esu žmogaus" },
    ms: { "I am human": "Saya manusia" },
    ml: { "I am human": "ഞാൻ മനുഷ്യനാണ്" },
    mr: { "I am human": "मी मानवी आहे" },
    mn: { "I am human": "Би бол хүн" },
    no: { "I am human": "Jeg er menneskelig" },
    fa: { "I am human": "من انسانی هستم" },
    pl: { "I am human": "Jestem człowiekiem" },
    pt: { "I am human": "Sou humano" },
    ro: { "I am human": "Eu sunt om" },
    ru: { "I am human": "Я человек" },
    sr: { "I am human": "Ja sam ljudski" },
    si: { "I am human": "මම මිනිස්සු" },
    sk: { "I am human": "Ja som človek" },
    sl: { "I am human": "Jaz sem človeški" },
    es: { "I am human": "Soy humano" },
    sw: { "I am human": "Mimi ni binadamu" },
    sv: { "I am human": "Jag är människa" },
    ta: { "I am human": "நான் மனித" },
    te: { "I am human": "నేను మనిషిని" },
    th: { "I am human": "ผมมนุษย์" },
    tr: { "I am human": "Ben bir insanım" },
    uk: { "I am human": "Я людини" },
    ur: { "I am human": "میں انسان ہوں" },
    vi: { "I am human": "Tôi là con người" },
    zu: { "I am human": "Ngingumuntu" },
  };

  let ee = null;

  const te = {
    translate(e) {
      const t = te.getBestTrans(Z);
      return (t && t[e]) || e;
    },
    getBestTrans(e) {
      const t = te.getLocale();
      return t in e
        ? e[t]
        : te.getShortLocale(t) in e
        ? e[te.getShortLocale(t)]
        : "en" in e
        ? e.en
        : null;
    },
    getLocale() {
      let e =
          ee || window.navigator.userLanguage || window.navigator.language;

      const t = te.getShortLocale(e);
      return (
        "in" === t && (e = "id"),
        "iw" === t && (e = "he"),
        "nb" === t && (e = "no"),
        "ji" === t && (e = "yi"),
        "zh-CN" === e && (e = "zh"),
        "jv" === t && (e = "jw"),
        G[e] ? e : G[t] ? t : "en"
      );
    },
    setLocale(e) {
      ee = e;
    },
    getShortLocale(e) {
      return e.indexOf("-") >= 0 ? e.substring(0, e.indexOf("-")) : e;
    },
    isShortLocale(e) {
      return 2 === e.length || 3 === e.length;
    },
    addTable(e, t) {
      if ((t || (t = Object.create(null)), Z[e])) {
        const n = Z[e];
        for (const i in t) n[i] = t[i];
      } else Z[e] = t;
      return Z[e];
    },
    getTable(e) {
      return Z[e];
    },
    addTables(e) {
      for (const t in e) te.addTable(t, e[t]);
      return Z;
    },
    getTables() {
      return Z;
    },
  };

  const ne = {
    touchstart: "ts",
    touchend: "te",
    touchmove: "tm",
    touchcancel: "tc",
  };

  const ie = { mousedown: "md", mouseup: "mu", mousemove: "mm" };
  const oe = { keydown: "kd", keyup: "ku" };
  const re = { devicemotion: "dm" };

  const ae = (e, t) => {
    const n = ie[e];
    let i = null;
    return e => {
      (i = (e => {
        return [e.windowX, e.windowY, Date.now()];
      })(e)),
        t(n, i);
    };
  };

  const se = (e, t) => {
    const n = ne[e];
    let i = null;
    return e => {
      (i = (e => {
        for (
          var t,
            n =
              e.touches && e.touches.length >= 1
                ? e.touches
                : e.changedTouches,
            i = [],
            o = 0;
          o < n.length;
          o++
        )
          (t = q.eventCoords(n[o])), i.push([n[o].identifier, t.x, t.y]);
        return i.push(Date.now()), i;
      })(e)),
        t(n, i);
    };
  };

  const ce = (e, t) => {
    const n = oe[e];
    let i = null;
    return e => {
      (i = (e => {
        return [e.keyNum, Date.now()];
      })(e)),
        t(n, i);
    };
  };

  const he = (e, t) => {
    const n = re[e];
    let i = null;
    let o = [];
    return e => {
      null !==
        (i = ((e, t) => {
        (e.acceleration === undefined ||
          (e.acceleration && e.acceleration.x === undefined)) &&
          (e.acceleration = { x: 0, y: 0, z: 0 });
        (e.rotationRate === undefined ||
          (e.rotationRate && e.rotationRate.alpha === undefined)) &&
          (e.rotationRate = { alpha: 0, beta: 0, gamma: 0 });

        const n = [
            e.acceleration.x,
            e.acceleration.y,
            e.acceleration.z,
            e.rotationRate.alpha,
            e.rotationRate.beta,
            e.rotationRate.gamma,
            Date.now(),
          ];

        let i = [];
        if (0 === t.length) (t = n), (i = n);
        else {
          for (var o, r = 0, a = 0; a < 6; a++)
            (o = t[a] - n[a]), i.push(n[a]), (r += Math.abs(o));
          if ((i.push(Date.now()), (t = n), r <= 0)) return null;
        }
        return { motion: i, prevmotion: t };
      })(e, o)) && ((o = i.prevmotion), (i = i.motion), t(n, i));
    };
  };

  let le = {};
  const de = 5e3;
  const ue = Date.now();
  let pe = !1;
  let fe = !1;
  let me = null;
  let ge = !0;
  let ye = !0;
  let ve = !1;
  let we = !0;

  const be = {
    record(e, t, n, i) {
      (le.v = 1),
        (ge = e === undefined ? ge : e),
        (ye = n === undefined ? ye : n),
        (ve = t === undefined ? ve : t),
        (we = i === undefined ? we : i),
        !1 === fe &&
          ((me = new V(document.body)),
          ge &&
            (me.addEventListener("mousedown", ae("mousedown", xe)),
            me.addEventListener("mousemove", ae("mousemove", xe)),
            me.addEventListener("mouseup", ae("mouseup", xe))),
          !0 === ve &&
            (me.addEventListener("keyup", ce("keyup", xe)),
            me.addEventListener("keydown", ce("keydown", xe))),
          ye &&
            !0 === M.Browser.hasEvent("touchstart", document.body) &&
            (me.addEventListener("touchstart", se("touchstart", xe)),
            me.addEventListener("touchmove", se("touchmove", xe)),
            me.addEventListener("touchend", se("touchend", xe))),
          we &&
            !0 === M.Browser.hasEvent("devicemotion", window) &&
            me.addEventListener("devicemotion", he("devicemotion", xe)),
          (fe = !0)),
        (le.st = Date.now()),
        (pe = !0);
    },
    stop() {
      !1 !== pe && (pe = !1);
    },
    time() {
      return ue;
    },
    getData() {
      return le;
    },
    setData(e, t) {
      le[e] || (le[e] = null),
        Array.isArray(le[e]) ? le[e].push(t) : (le[e] = t);
    },
    resetData() {
      le = {};
    },
    circBuffPush: xe,
  };

  function xe(e, t) {
    !1 !== pe &&
      ((le[e] = le[e] || []),
      le[e].push(t),
      le[e].length > de && le[e].splice(0, le[e].length - de));
  }
  let _e = [], Ce = !1, ke = !1;
  function Ee() {
    ("interactive" !== document.readyState &&
      "loaded" !== document.readyState &&
      "complete" !== document.readyState) ||
      Oe();
  }
  function Oe() {
    if (!1 === ke) {
      for (let e = 0; e < _e.length; e++) _e[e].fn.apply(null, _e[e].args);
      _e = [];
    }
    (ke = !0),
      document.removeEventListener
        ? (document.removeEventListener("DOMContentLoaded", Oe),
          window.removeEventListener("load", Oe))
        : (document.detachEvent("onreadystatechange", Ee),
          window.detachEvent("onload", Oe));
  }
  new V(document);
  const Se = new V(window);
  function Ie(e, t) {
    const n = e instanceof HTMLIFrameElement;
    try {
      n
        ? e.parentNode && e.contentWindow.postMessage(JSON.stringify(t), "*")
        : e.postMessage(JSON.stringify(t), "*");
    } catch (Ct) {
      W(Ct.message, "error", "messaging");
    }
  }
  function Pe(e, t) {
    (this.target = e),
      (this.id = t),
      (this.messages = []),
      (this.incoming = []),
      (this.waiting = []);
  }
  function Te(e, t) {
    const n = this,
          i = {},
          o = new Promise((e, t) => {
            (i.resolve = e), (i.reject = t);
          }),
          r = { source: "hcaptcha", label: e, id: n.id, promise: null, lookup: t };
    return o
      .then(e => {
        (r.promise = "resolve"),
          null !== e && (r.contents = e),
          Ie(n.target, r);
      })
      ["catch"](e => {
        (r.promise = "reject"), null !== e && (r.error = e), Ie(n.target, r);
      }),
    i
  ;
  }
  (Pe.prototype.setID = function (e) {
    this.id = e;
  }),
    (Pe.prototype.contact = function (e, t) {
      if (!this.id)
        throw new Error(
          "Chat requires unique id to communicate between windows"
        );
      const n = this,
            i = Date.now().toString(36),
            o = {
              source: "hcaptcha",
              label: e,
              id: this.id,
              promise: "create",
              lookup: i,
            };
      if (t) {
        if ("object" != typeof t) throw new Error("Message must be an object.");
        o.contents = t;
      }
      return new Promise((t, r) => {
        n.waiting.push({ label: e, reject: r, resolve: t, lookup: i }),
          Ie(n.target, o);
      });
    }),
    (Pe.prototype.listen = function (e, t) {
      if (!this.id)
        throw new Error(
          "Chat requires unique id to communicate between windows"
        );
      for (var n = this.messages.length, i = !1; --n > -1 && !1 === i; )
        this.messages[n].label === e && (i = this.messages[n]);
      !1 === i && ((i = { label: e, listeners: [] }), this.messages.push(i)),
        i.listeners.push(t);
    }),
    (Pe.prototype.answer = function (e, t) {
      if (!this.id)
        throw new Error(
          "Chat requires unique id to communicate between windows"
        );
      for (var n = this.incoming.length, i = !1; --n > -1 && !1 === i; )
        this.incoming[n].label === e && (i = this.incoming[n]);
      !1 === i && ((i = { label: e, listeners: [] }), this.incoming.push(i)),
        i.listeners.push(t);
    }),
    (Pe.prototype.send = function (e, t) {
      if (!this.id)
        throw new Error(
          "Chat requires unique id to communicate between windows"
        );
      const n = { source: "hcaptcha", label: e, id: this.id };
      if (t) {
        if ("object" != typeof t) throw new Error("Message must be an object.");
        n.contents = t;
      }
      Ie(this.target, n);
    }),
    (Pe.prototype.check = function (e, t) {
      for (
        var n = [].concat.apply(
            [],
            [this.messages, this.incoming, this.waiting]
          ),
          i = [],
          o = -1;
        ++o < n.length;

      )
        if (n[o].label === e) {
          if (t && n[o].lookup && t !== n[o].lookup) continue;
          i.push(n[o]);
        }
      return i;
    }),
    (Pe.prototype.respond = function (e) {
      for (
        var t,
          n,
          i = -1,
          o = 0,
          r = [].concat.apply([], [this.messages, this.incoming, this.waiting]);
        ++i < r.length;

      )
        if (r[i].label === e.label) {
          if (e.lookup && r[i].lookup && e.lookup !== r[i].lookup) continue;
          const a = [];
          if (
            ((t = r[i]),
            e.error && a.push(e.error),
            e.contents && a.push(e.contents),
            e.promise && "create" !== e.promise)
          ) {
            t[e.promise].apply(t[e.promise], a);
            for (let s = this.waiting.length, c = !1; --s > -1 && !1 === c; )
              this.waiting[s].label === t.label &&
                this.waiting[s].lookup === t.lookup &&
                ((c = !0), this.waiting.splice(s, 1));
            continue;
          }
          for (o = 0; o < t.listeners.length; o++) {
            if (((n = t.listeners[o]), "create" === e.promise)) {
              const h = Te.call(this, t.label, e.lookup);
              a.push(h);
            }
            n.apply(n, a);
          }
        }
      r = null;
    }),
    (Pe.prototype.destroy = function () {
      return (
        (this.messages = null),
        (this.incoming = null),
        (this.waiting = null),
        null
      );
    });
  const Be = {
    chats: [],
    isSupported() {
      return !!window.postMessage;
    },
    createChat(e, t) {
      const n = new Pe(e, t);
      return Be.chats.push(n), n;
    },
    addChat(e) {
      Be.chats.push(e);
    },
    removeChat(e) {
      for (var t = !1, n = Be.chats.length; --n > -1 && !1 === t; )
        e.id === Be.chats[n].id &&
          e.target === Be.chats[n].target &&
          ((t = Be.chats[n]), Be.chats.splice(n, 1));
      return t;
    },
    handle(e) {
      let t = e.data;
      if ("string" == typeof t)
        try {
          if (!(t.indexOf("hcaptcha") >= 0)) return;
          t = JSON.parse(t);
          for (let n, i = Be.chats, o = -1; ++o < i.length; )
            (n = i[o]).id === t.id && n.respond(t);
        } catch (Ct) {
          N("postMessage handler error", "postMessage", "debug", {
            event: e,
            error: Ct,
          });
        }
    },
  };
  window.addEventListener
    ? window.addEventListener("message", Be.handle)
    : window.attachEvent("onmessage", Be.handle);
  const Ae = {
            getCookie(e) {
              const t = document.cookie.replace(/ /g, "").split(";");
              try {
                for (var n = "", i = t.length; i-- && !n; )
                  t[i].indexOf(e) >= 0 && (n = t[i]);
                return n;
              } catch (kt) {
                return "";
              }
            },
            hasCookie(e) {
              return !!Ae.getCookie(e);
            },
            supportsAPI() {
              try {
                return (
                  "hasStorageAccess" in document && "requestStorageAccess" in document
                );
              } catch (kt) {
                return !1;
              }
            },
            hasAccess() {
              return new Promise(e => {
                document
                  .hasStorageAccess()
                  .then(() => {
                    e(!0);
                  })
                  ["catch"](() => {
                    e(!1);
                  });
              });
            },
            requestAccess() {
              try {
                return document.requestStorageAccess();
              } catch (kt) {
                return Promise.resolve();
              }
            },
          },
        Me = e => {
          for (
            var t,
              n,
              i,
              o = {},
              r = e ? (e.indexOf("&") >= 0 ? e.split("&") : [e]) : [],
              a = 0;
            a < r.length;
            a++
          )
            r[a].indexOf("=") >= 0 &&
              ((t = r[a].split("=")),
              (n = decodeURIComponent(t[0])),
              ("false" !== (i = decodeURIComponent(t[1])) && "true" !== i) ||
                (i = "true" === i),
              (o[n] = i));
          return o;
        },
        $e = e => {
          const t = [];
          for (const n in e)
            t.push([encodeURIComponent(n), encodeURIComponent(e[n])].join("="));
          return t.join("&");
        };
  function Le(e, t) {
    (this.id = e),
      (this.width = null),
      (this.height = null),
      (this.mobile = !1),
      (this.ready = !1),
      (this.listeners = []),
      (this.config = t),
      (this._visible = !1),
      (this._selected = !1),
      (this.$iframe = new V("iframe")),
      (this._host = $.host || window.location.hostname);
    let n = $.assetUrl;
    L.assethost && (n = L.assethost + $.assetUrl.replace($.assetDomain, "")),
      (this.$iframe.dom.src =
        n +
        "/hcaptcha-challenge.html#id=" +
        this.id +
        "&host=" +
        this._host +
        (t ? "&" + $e(this.config) : "")),
      (this.$iframe.dom.title = "Main content of the hCaptcha challenge"),
      (this.$iframe.dom.frameBorder = 0),
      (this.$iframe.dom.scrolling = "no"),
      this.setupParentContainer(t),
      this._hasCustomContainer
        ? (this._hideIframe(), this._parent.appendChild(this.$iframe.dom))
        : ((this.$container = new V("div")),
          (this.$wrapper = this.$container.createElement("div")),
          (this.$overlay = this.$container.createElement("div")),
          (this.$arrow = this.$container.createElement("div")),
          (this.$arrow.fg = this.$arrow.createElement("div")),
          (this.$arrow.bg = this.$arrow.createElement("div")),
          this.style.call(this),
          this.$wrapper.appendElement(this.$iframe),
          this._parent.appendChild(this.$container.dom),
          this.$container.setAttribute("aria-hidden", !0)),
      (this.chat = Be.createChat(this.$iframe.dom, e));
  }
  function je(e, t, n) {
    (this.id = t),
      (this.response = null),
      (this.location = { tick: null, offset: null, bounding: null }),
      (this.config = n),
      (this._ticked = !0),
      (this.$container = e instanceof V ? e : new V(e)),
      (this._host = $.host || window.location.hostname),
      (this.$iframe = new V("iframe"));
    let i = $.assetUrl;
    L.assethost && (i = L.assethost + $.assetUrl.replace($.assetDomain, "")),
      (this.$iframe.dom.src =
        i +
        "/hcaptcha-checkbox.html#id=" +
        this.id +
        "&host=" +
        this._host +
        (n ? "&" + $e(this.config) : "")),
      (this.$iframe.dom.title =
        "widget containing checkbox for hCaptcha security challenge"),
      (this.$iframe.dom.tabIndex = this.config.tabindex || 0),
      (this.$iframe.dom.frameBorder = "0"),
      (this.$iframe.dom.scrolling = "no"),
      this.config.size &&
        "invisible" == this.config.size &&
        this.$iframe.setAttribute("aria-hidden", "true"),
      this.$iframe.setAttribute("data-hcaptcha-widget-id", t),
      this.$iframe.setAttribute("data-hcaptcha-response", ""),
      this.$container.appendElement(this.$iframe),
      "off" !== L.recaptchacompat &&
        ((this.$textArea0 = this.$container.createElement(
          "textarea",
          "#g-recaptcha-response-" + t
        )),
        (this.$textArea0.dom.name = "g-recaptcha-response"),
        this.$textArea0.css({ display: "none" })),
      (this.$textArea1 = this.$container.createElement(
        "textarea",
        "#h-captcha-response-" + t
      )),
      (this.$textArea1.dom.name = "h-captcha-response"),
      this.$textArea1.css({ display: "none" }),
      (this.chat = Be.createChat(this.$iframe.dom, t)),
      (this.clearLoading = this.clearLoading.bind(this));
  }
  function Re(e, t, n) {
    if (!n.sitekey)
      throw new De(
        "Missing sitekey",
        "https://hcaptcha.com/docs/configuration#jsapi"
      );
    (this.id = t),
      (this.visible = !1),
      (this.overflow = { override: !1, cssUsed: !0, value: null, scroll: 0 }),
      (this.onError = null),
      (this.onPass = null),
      (this.onExpire = null),
      (this.onChalExpire = null),
      (this.onOpen = null),
      (this.onClose = null),
      (this._ready = !1),
      (this._listeners = []),
      (this.config = n),
      (this._userEscaped = !1),
      (this._userClosed = !1),
      (this._userPassed = !1),
      (this._responseTimer = null),
      (this._expiredChallenge = !1),
      (this._expiredResponse = !1),
      (this.challenge = new Le(t, n)),
      (this.checkbox = new je(e, t, n)),
      (this.initChallenge = this.initChallenge.bind(this)),
      (this.closeChallenge = this.closeChallenge.bind(this)),
      (this.displayChallenge = this.displayChallenge.bind(this));
  }
  function De(e, t) {
    let n = "[hCaptcha] " + e;
    t && (n += " - " + t),
      (this.message =
        "hCaptcha has failed to initialize. Please see the developer tools console for more information."),
      (this.reason = n);
  }
  function ze() {
    Q.self(this, V, "canvas");
    const e = this;
    (this.element = this.dom),
      (this.ctx = this.element.getContext("2d")),
      (this.scale = 1),
      (this.dpr = window.devicePixelRatio || 1),
      (this.clearColor = "#fff"),
      (this.ctx.roundedRect = (t, n, i, o, r) => {
        const a = i > 0 ? r : -r, s = o > 0 ? r : -r;
        e.ctx.beginPath(),
          e.ctx.moveTo(t + a, n),
          e.ctx.lineTo(t + i - a, n),
          e.ctx.quadraticCurveTo(t + i, n, t + i, n + s),
          e.ctx.lineTo(t + i, n + o - s),
          e.ctx.quadraticCurveTo(t + i, n + o, t + i - a, n + o),
          e.ctx.lineTo(t + a, n + o),
          e.ctx.quadraticCurveTo(t, n + o, t, n + o - s),
          e.ctx.lineTo(t, n + s),
          e.ctx.quadraticCurveTo(t, n, t + a, n),
          e.ctx.closePath();
      });
  }
  function We(e) {
    (e = e || {}),
      (this.x = e.x || 0),
      (this.y = e.y || 0),
      (this.rotate = this.rotate.bind(this)),
      (this.getDistance = this.getDistance.bind(this)),
      (this.radius = 0),
      (this.tolerance = 0),
      (this.fill = !1),
      (this.stroke = !1),
      (this.fillColor = "#fff"),
      (this.strokeColor = "#fff"),
      (this.strokeWidth = 1);
  }
  function Ne(e, t, n) {
    Q.self(this, We, e),
      (this.handleIn = new We(t)),
      (this.handleOut = new We(n)),
      (this.prev = null),
      (this.next = null),
      (this.index = 0);
  }
  (Le.prototype.setupParentContainer = function (e) {
    let t;
    const n = e["challenge-container"];
    n && (t = "string" == typeof n ? document.getElementById(n) : n),
      t
        ? ((this._hasCustomContainer = !0), (this._parent = t))
        : ((this._hasCustomContainer = !1), (this._parent = document.body));
  }),
    (Le.prototype._hideIframe = function () {
      const e = {};
      "ie" !== M.Browser.type ||
      ("ie" === M.Browser.type && 8 !== M.Browser.version)
        ? ((e.opacity = 0), (e.visibility = "hidden"))
        : (e.display = "none"),
        this.$iframe.setAttribute("aria-hidden", !0),
        this.$iframe.css(e);
    }),
    (Le.prototype._showIframe = function () {
      const e = {};
      "ie" !== M.Browser.type ||
      ("ie" === M.Browser.type && 8 !== M.Browser.version)
        ? ((e.opacity = 1), (e.visibility = "visible"))
        : (e.display = "block"),
        this.$iframe.removeAttribute("aria-hidden"),
        this.$iframe.css(e);
    }),
    (Le.prototype.style = function () {
      if (this._hasCustomContainer)
        this.$iframe.css({
          border: 0,
          position: "relative",
          backgroundColor: "#fff",
        });
      else {
        const e = {
          backgroundColor: "#fff",
          border: "1px solid rgb(208, 208, 208)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 4px",
          borderRadius: 4,
          left: -1e4,
          top: -1e4,
          zIndex: -9999999999999,
          position: "absolute",
        };
        "ie" !== M.Browser.type ||
        ("ie" === M.Browser.type && 8 !== M.Browser.version)
          ? ((e.transition = "opacity 0.15s ease-out"),
            (e.opacity = 0),
            (e.visibility = "hidden"))
          : (e.display = "none"),
          this.$container.css(e),
          this.$wrapper.css({ position: "relative" }),
          this.$overlay.css({
            width: "100%",
            height: "100%",
            position: "fixed",
            pointerEvents: "none",
            top: 0,
            left: 0,
            zIndex: 0,
            backgroundColor: "#fff",
            opacity: 0.05,
          }),
          this.$arrow.css({
            borderWidth: 11,
            position: "absolute",
            pointerEvents: "none",
            marginTop: -11,
            zIndex: 1,
            right: "100%",
          }),
          this.$arrow.fg.css({
            borderWidth: 10,
            borderStyle: "solid",
            borderColor:
              "transparent rgb(255, 255, 255) transparent transparent",
            position: "relative",
            top: 10,
            zIndex: 1,
          }),
          this.$arrow.bg.css({
            borderWidth: 11,
            borderStyle: "solid",
            borderColor:
              "transparent rgb(208, 208, 208) transparent transparent",
            position: "relative",
            top: -11,
            zIndex: 0,
          }),
          this.$iframe.css({ border: 0, zIndex: 2e9, position: "relative" });
      }
    }),
    (Le.prototype.setup = function (e) {
      return this.chat.send("create-challenge", e);
    }),
    (Le.prototype.sendProof = function (e) {
      return this.chat.contact("solve-proof", e);
    }),
    (Le.prototype.sendTranslation = function (e) {
      const t = { locale: e, table: te.getTable(e) || {} };
      this.chat && this.chat.send("challenge-translate", t);
    }),
    (Le.prototype.isVisible = function () {
      return this._visible;
    }),
    (Le.prototype.getDimensions = function (e, t) {
      return this._visible
        ? this.chat.contact("resize-challenge", { width: e, height: t })
        : Promise.resolve(null);
    }),
    (Le.prototype.show = function () {
      if (!0 !== this._visible)
        if (((this._visible = !0), this._hasCustomContainer))
          this._showIframe();
        else {
          const e = { zIndex: 9999999999999 };
          "ie" !== M.Browser.type ||
          ("ie" === M.Browser.type && 8 !== M.Browser.version)
            ? ((e.opacity = 1), (e.visibility = "visible"))
            : (e.display = "block"),
            this.$container.css(e),
            this.$container.removeAttribute("aria-hidden"),
            this.$overlay.css({ pointerEvents: "auto", cursor: "pointer" }),
            this.$iframe.dom.focus();
        }
    }),
    (Le.prototype.close = function () {
      if (((this._visible = !1), this._hasCustomContainer))
        return this._hideIframe(), void this.chat.send("close-challenge");
      const e = { left: -1e4, top: -1e4, zIndex: -9999999999999 };
      "ie" !== M.Browser.type ||
      ("ie" === M.Browser.type && 8 !== M.Browser.version)
        ? ((e.opacity = 0), (e.visibility = "hidden"))
        : (e.display = "none"),
        this.$container.css(e),
        this._hasCustomContainer ||
          this.$overlay.css({ pointerEvents: "none", cursor: "default" }),
        this.chat.send("close-challenge"),
        this.$container.setAttribute("aria-hidden", !0);
    }),
    (Le.prototype.size = function (e, t, n) {
      (this.width = e),
        (this.height = t),
        (this.mobile = n),
        this.$iframe.css({ width: e, height: t }),
        this._hasCustomContainer ||
          (this.$wrapper.css({ width: e, height: t }),
          n
            ? this.$overlay.css({ opacity: 0.5 })
            : this.$overlay.css({ opacity: 0.05 }));
    }),
    (Le.prototype.position = function (e) {
      if (!this._hasCustomContainer && e) {
        const t = window.document.documentElement;
        const n = M.Browser.scrollY();
        const i = M.Browser.width();
        const o = M.Browser.height();

        let r =
          this.mobile ||
          "invisible" === this.config.size ||
          e.offset.left + e.tick.x <= e.tick.width / 2;

        const a = Math.round(e.bounding.top) + n !== e.offset.top;
        const s = this.height > t.clientHeight;
        let c = r ? (i - this.width) / 2 : e.bounding.left + e.tick.right + 10;
        (c + this.width + 10 > i || c < 0) &&
          ((c = (i - this.width) / 2), (r = !0));

        const h =
            (t.scrollHeight < t.clientHeight
              ? t.clientHeight
              : t.scrollHeight) -
            this.height -
            10;

        let l = r
          ? (o - this.height) / 2 + n
          : e.bounding.top + e.tick.y + n - this.height / 2;

        a && l < n && (l = n + 10),
          a && l + this.height >= n + o && (l = n + o - (this.height + 10)),
          (l = Math.max(Math.min(l, h), 10));
        let d = e.bounding.top + e.tick.y + n - l - 10;
        const u = this.height - 10 - 30;
        return (
          (d = Math.max(Math.min(d, u), 10)),
          this.$container.css({ left: c, top: l }),
          this.$arrow.fg.css({ display: r ? "none" : "block" }),
          this.$arrow.bg.css({ display: r ? "none" : "block" }),
          this.$arrow.css({ top: d }),
          (this.top = l),
          this.$container.dom.getBoundingClientRect(),
          s
        );
      }
    }),
    (Le.prototype.destroy = function () {
      this._visible && this.close.call(this),
        this._hasCustomContainer
          ? this._parent.removeChild(this.$iframe.dom)
          : (this._parent.removeChild(this.$container.dom),
            (this.$container = this.$container.__destroy())),
        (this.$iframe = this.$iframe.__destroy()),
        Be.removeChat(this.chat),
        (this.chat = this.chat.destroy());
    }),
    (Le.prototype.setReady = function (e) {
      if (((this.ready = e), this.ready))
        for (let t, n = this.listeners.length; --n > -1; )
          (t = this.listeners[n]), this.listeners.splice(n, 1), t();
    }),
    (Le.prototype.onReady = function (e) {
      const t = Array.prototype.slice.call(arguments, 1),
            n = () => {
              e.apply(null, t);
            };
      this.ready ? n() : this.listeners.push(n);
    }),
    (Le.prototype.onOverlayClick = function (e) {
      this._hasCustomContainer || this.$overlay.addEventListener("click", e);
    }),
    (Le.prototype.setEndpoint = function (e) {
      this.chat && this.chat.send("challenge-update", { endpoint: e });
    }),
    (Le.prototype.setData = function (e) {
      this.chat && this.chat.send("challenge-data", e);
    }),
    (je.prototype.setResponse = function (e) {
      (this.response = e),
        this.$iframe.dom.setAttribute("data-hcaptcha-response", e),
        "off" !== L.recaptchacompat && (this.$textArea0.dom.value = e),
        (this.$textArea1.dom.value = e);
    }),
    (je.prototype.style = function () {
      switch (this.config.size) {
        case "compact":
          this.$iframe.css({ width: 164, height: 144 });
          break;
        case "invisible":
          this.$iframe.css({ display: "none" });
          break;
        default:
          this.$iframe.css({ width: 303, height: 78, overflow: "hidden" });
      }
    }),
    (je.prototype.reset = function () {
      (this._ticked = !1), this.chat && this.chat.send("checkbox-reset");
    }),
    (je.prototype.clearLoading = function () {
      this.chat && this.chat.send("checkbox-clear");
    }),
    (je.prototype.sendTranslation = function (e) {
      const t = { locale: e, table: te.getTable(e) || {} };
      this.chat && this.chat.send("checkbox-translate", t);
    }),
    (je.prototype.status = function (e, t) {
      this.chat &&
        this.chat.send("checkbox-status", {
          text: e || null,
          a11yOnly: t || !1,
        });
    }),
    (je.prototype.tick = function () {
      (this._ticked = !0), this.chat && this.chat.send("checkbox-tick");
    }),
    (je.prototype.getTickLocation = function () {
      return this.chat.contact("checkbox-location");
    }),
    (je.prototype.getOffset = function () {
      let e = this.$iframe.dom;
      e.offsetParent || (e = e.parentElement);
      for (var t = 0, n = 0; e; )
        (t += e.offsetLeft), (n += e.offsetTop), (e = e.offsetParent);
      return { top: n, left: t };
    }),
    (je.prototype.getBounding = function () {
      return this.$iframe.dom.getBoundingClientRect();
    }),
    (je.prototype.destroy = function () {
      this._ticked && this.reset(),
        this.$container.removeElement(this.$iframe),
        this.$container.removeElement(this.$textArea1),
        "off" !== L.recaptchacompat &&
          (this.$container.removeElement(this.$textArea0),
          (this.$textArea0 = this.$textArea0.__destroy())),
        (this.$textArea1 = this.$textArea1.__destroy()),
        (this.$container = this.$container.__destroy()),
        (this.$iframe = this.$iframe.__destroy()),
        Be.removeChat(this.chat),
        (this.chat = this.chat.destroy());
    }),
    (Re.prototype._resetTimer = function () {
      null !== this._responseTimer &&
        (clearTimeout(this._responseTimer), (this._responseTimer = null));
    }),
    (Re.prototype.initChallenge = function (e) {
    e || (e = {});
    let t = e.manifest || null;
    const n = e.charity || null;
    const i = e.link || null;
    const o = e.action || "";
    const r = e.rqdata || null;
    const a = M.Browser.width();
    const s = M.Browser.height();
    this._resetTimer(), t || ((t = Object.create(null)).st = Date.now());
    const c = be.getData();
    be.resetData(),
      (t.topLevel = c),
      (t.session = _.getSession()),
      (t.widgetList = _.getCaptchaIdList()),
      (t.widgetId = this.id),
      (t.href = window.location.href),
      this._userClosed && (t.clickedOutside = !0),
      this._expiredChallenge && (t.expiredPopup = !0),
      this._expiredResponse && (t.expiredCaptcha = !0),
      this._userEscaped && (t.escPressed = !0),
      (this._userEscaped = !1),
      (this._userClosed = !1),
      (this._expiredChallenge = !1),
      (this._expiredResponse = !1),
      this.checkbox.setResponse(""),
      this.challenge.setup({
        manifest: t,
        width: a,
        height: s,
        charity: n,
        link: i,
        action: o,
        rqdata: r,
      });
  }),
    (Re.prototype.displayChallenge = function (e) {
      const t = this;
      this.visible = !0;
      const n = this.checkbox, i = this.challenge, o = M.Browser.height();
      if (!("ie" === M.Browser.type && 8 === M.Browser.version)) {
        const r = window
          .getComputedStyle(document.body)
          .getPropertyValue("overflow-y");
        (this.overflow.override = "hidden" === r),
          this.overflow.override &&
            ((this.overflow.cssUsed =
              "" === document.body.style.overflow &&
              "" === document.body.style.overflowY),
            this.overflow.cssUsed ||
              (this.overflow.value = "" === r ? "auto" : r),
            (this.overflow.scroll = M.Browser.scrollY()),
            (document.body.style.overflowY = "auto"));
      }
      return new Promise(t => {
        n.status(),
          n.getTickLocation().then(r => {
            (i.size(e.width, e.height, e.mobile),
            i.show(),
            n.clearLoading(),
            (n.location.bounding = n.getBounding()),
            (n.location.tick = r),
            (n.location.offset = n.getOffset()),
            i.position(n.location)) &&
              ((
                window.document.scrollingElement ||
                document.getElementsByTagName("html")[0]
              ).scrollTop = Math.abs(i.height - o) + i.top);
            t();
          });
      }).then(() => {
        t.onOpen && U(t.onOpen);
      });
    }),
    (Re.prototype.resize = function (e, t, n) {
      const i = this, o = this.checkbox, r = this.challenge;
      r.getDimensions(e, t)
        .then(e => {
          e && r.size(e.width, e.height, e.mobile),
            (o.location.bounding = o.getBounding()),
            (o.location.offset = o.getOffset()),
            (M.System.mobile && !n) || r.position(o.location);
        })
        ["catch"](e => {
          i.closeChallenge.call(i, {
            event: "challenge-error",
            message: "Captcha resize caused error.",
            error: e,
          });
        });
    }),
    (Re.prototype.position = function () {
      const e = this.checkbox, t = this.challenge;
      M.System.mobile ||
        ((e.location.bounding = e.getBounding()), t.position(e.location));
    }),
    (Re.prototype.reset = function () {
      this.checkbox.reset(),
        this.checkbox.setResponse(""),
        this._resetTimer(),
        (this._userEscaped = !1),
        (this._userClosed = !1),
        (this._userPassed = !1),
        (this._expiredResponse = !1),
        (this._expiredChallenge = !1);
    }),
    (Re.prototype.closeChallenge = function (e) {
      this.visible = !1;
      const t = this, n = this.checkbox, i = this.challenge;
      this.overflow.override &&
        (((
          window.document.scrollingElement ||
          document.getElementsByTagName("html")[0]
        ).scrollTop = this.overflow.scroll),
        (this.overflow.override = !1),
        (this.overflow.scroll = 0),
        (document.body.style.overflowY = this.overflow.cssUsed
          ? null
          : this.overflow.value));
      const o = e.response || "";
      switch ((n.setResponse(o), i.close(), n.$iframe.dom.focus(), e.event)) {
        case "challenge-escaped":
          (this._userEscaped = !0), n.reset(), t.onClose && U(t.onClose);
          break;
        case "challenge-expired":
          (this._expiredChallenge = !0),
            n.reset(),
            n.status("hCaptcha window closed due to timeout.", !0),
            t.onChalExpire && U(t.onChalExpire);
          break;
        case "challenge-error":
        case "bundle-error":
        case "network-error":
          n.reset(),
            "network-error" === e.event && n.status(e.message),
            this.onError && U(this.onError, e.message || "");
          break;
        case "challenge-passed":
          n.tick(),
            this.onPass && U(this.onPass, o),
            "number" == typeof e.expiration &&
              (t._resetTimer(),
              (t._responseTimer = setTimeout(() => {
                try {
                  n.reset(),
                    n.setResponse(""),
                    n.status(
                      "hCaptcha security token has expired. Please complete the challenge again.",
                      !0
                    );
                } catch (kt) {
                  W(
                    "Checkbox not present or could not destroy on expiration: " +
                      kt.message,
                    "error",
                    "global"
                  );
                }
                t.onExpire && U(t.onExpire),
                  (t._responseTimer = null),
                  (t._expiredResponse = !0);
              }, 1e3 * e.expiration)));
      }
    }),
    (Re.prototype.updateTranslation = function (e) {
      const t = this.checkbox, n = this.challenge;
      t.sendTranslation(e), n.sendTranslation(e);
    }),
    (Re.prototype.isReady = function () {
      return this._ready;
    }),
    (Re.prototype.setReady = function (e) {
      if (((this._ready = e), this._ready))
        for (let t, n = this._listeners.length; --n > -1; )
          (t = this._listeners[n]), this._listeners.splice(n, 1), t();
    }),
    (Re.prototype.onReady = function (e) {
      const t = Array.prototype.slice.call(arguments, 1),
            n = () => {
              e.apply(null, t);
            };
      this._ready ? n() : this._listeners.push(n);
    }),
    (Re.prototype.destroy = function () {
      (this._resetTimer(), this.overflow.override) &&
        (((
          window.document.scrollingElement ||
          document.getElementsByTagName("html")[0]
        ).scrollTop = this.overflow.scroll),
        (this.overflow.override = !1),
        (this.overflow.scroll = 0),
        (document.body.style.overflowY = this.overflow.cssUsed
          ? null
          : this.overflow.value));
      this.challenge.destroy(),
        this.checkbox.destroy(),
        (this.challenge = null),
        (this.checkbox = null);
    }),
    Q.proto(ze, V),
    (ze.prototype.dimensions = function (e, t) {
      this.css({ width: e, height: t }),
        (this.element.width = Math.round(e / this.scale) * this.dpr),
        (this.element.height = Math.round(t / this.scale) * this.dpr),
        this.ctx.scale(this.dpr, this.dpr),
        (this.width = Math.round(e / this.scale)),
        (this.height = Math.round(t / this.scale));
    }),
    (ze.prototype.clear = function () {
      this.ctx &&
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
    }),
    (ze.prototype.draw = function () {
      this.ctx &&
        ((this.ctx.fillStyle = this.clearColor),
        this.ctx.fillRect(0, 0, this.element.width, this.element.height));
    }),
    (ze.prototype._destroy = function () {
      this.__destroy(),
        (this.element = null),
        (this.ctx = null),
        (this.width = null),
        (this.height = null);
    }),
    (We.prototype.rotate = function (e, t) {
      const n = (e => {
                return e * (Math.PI / 180);
              })(t),
            i = Math.sin(n),
            o = Math.cos(n),
            r = this.x - e.x,
            a = this.y - e.y;
      (this.x = r * o - a * i + e.x), (this.y = r * i + a * o + e.y);
    }),
    (We.prototype.getDistance = function (e) {
      return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
    }),
    (We.prototype.getAngle = function (e) {
    const t = e.x - this.x;
    const n = e.y - this.y;
    let i = (180 * Math.atan2(n, t)) / Math.PI;
    return i < 0 && (i += 360), i;
  }),
    (We.prototype.hitTest = function (e) {
      return this.radius + this.tolerance >= this.getDistance(e);
    }),
    (We.prototype.restrict = function (e, t, n, i) {
      if ("x" !== e && "y" !== e)
        throw new Error("Point.restrict requires a value: x or y");
      return (
        t + this[e] < n
          ? (t = this[e] - n)
          : t + this[e] > i && (t = i - this[e]),
        this[e] + t
      );
    }),
    (We.prototype.draw = function (e) {
      e.ctx.beginPath(),
        e.ctx.arc(this.x, this.y, this.radius / e.scale, 0, 2 * Math.PI, !1),
        this.fill && ((e.ctx.fillStyle = this.fillColor), e.ctx.fill()),
        this.stroke &&
          ((e.ctx.strokeStyle = this.strokeColor),
          (e.ctx.lineWidth = this.strokeWidth / e.scale),
          e.ctx.stroke());
    }),
    Q.proto(Ne, We),
    (Ne.prototype.set = function (e, t, n) {
      (this.x = e.x || this.x),
        (this.y = e.y || this.y),
        t === undefined
          ? ((this.handleIn.x = this.x), (this.handleIn.y = this.y))
          : ((this.handleIn.x = t.x), (this.handleIn.y = t.y)),
        n === undefined
          ? ((this.handleOut.x = this.x), (this.handleOut.y = this.y))
          : ((this.handleOut.x = n.x), (this.handleOut.y = n.y));
    }),
    (Ne.prototype.clone = function () {
      const e = { x: this.x, y: this.y }, t = { x: this.handleIn.x, y: this.handleIn.y }, n = { x: this.handleOut.x, y: this.handleOut.y }, i = new Ne();
      return (
        t.x === n.x && t.y === n.y ? i.set(e) : i.set(e, t, n),
        (i.index = this.index),
        (i.prev = this.prev),
        (i.next = this.next),
        (i.radius = this.radius),
        (i.tolerance = this.tolerance),
        (i.fill = this.fill),
        (i.stroke = this.stroke),
        (i.fillColor = this.fillColor),
        (i.strokeColor = this.strokeColor),
        (i.strokeWidth = this.strokeWidth),
        i
      );
    }),
    (Ne.prototype.move = function (e, t) {
      (this.x += e),
        (this.y += t),
        (this.handleIn.x += e),
        (this.handleIn.y += t),
        (this.handleOut.x += e),
        (this.handleOut.y += t);
    }),
    (Ne.prototype.render = function (e) {
      this.handleIn.x !== this.x &&
        this.handleIn.y !== this.y &&
        this.handleIn.draw(e),
        this.handleOut.x !== this.x &&
          this.handleOut.y !== this.y &&
          this.handleOut.draw(e),
        this.draw(e);
    });
  const Ue = {
    getType(e) {
      return e.toLowerCase().match(/\.(?:jpg|gif|png|jpeg|svg)$/g)
        ? "image"
        : e.toLowerCase().match(/\.(?:js)$/g)
        ? "script"
        : "file";
    },
    getLocation(e) {
      if (L.assethost && e.indexOf($.assetDomain) >= 0)
        return L.assethost + e.replace($.assetDomain, "");
      if (L.imghost && e.indexOf("imgs") >= 0) {
        const t =
          e.indexOf(".ai") >= 0 ? e.indexOf(".ai") + 3 : e.indexOf(".com") + 4;
        return L.imghost + e.substr(t, e.length);
      }
      return e;
    },
  };
  function Fe(e, t) {
    let n = e;
    const i = n.substr(n.lastIndexOf(".") + 1, n.length);
    t || (t = {}),
      t.fallback &&
        "svg" === i &&
        "ie" === M.Browser.type &&
        M.Browser.version <= 11 &&
        (n = e.substr(0, e.indexOf(i)) + t.fallback),
      t.prefix && (n = t.prefix + "/" + e),
      (this.attribs = { crossOrigin: t.crossOrigin || null }),
      (this.id = n),
      (this.src = Ue.getLocation(n)),
      (this.ext = i),
      (this.width = 0),
      (this.height = 0),
      (this.aspect = 0),
      (this.loaded = !1),
      (this.error = !1),
      (this.element = null),
      (this.cb = { load: [], error: [] });
  }
  function qe(e, t, n) {
    for (let i = e[t], o = i.length, r = null; --o > -1; )
      (r = i[o]), i.splice(o, 1), r(n);
    "error" === t ? (e.load = []) : (e.error = []);
  }
  function He(e, t) {
    let n = e;
    t || (t = {}),
      t.prefix && (n = t.prefix + "/" + e),
      (this.attribs = {
        defer: t.defer || null,
        async: t.async || null,
        crossOrigin: t.crossOrigin || null,
      }),
      (this.id = n),
      (this.src = Ue.getLocation(n)),
      (this.loaded = !1),
      (this.error = !1),
      (this.element = null),
      (this.cb = { load: [], error: [] });
  }
  function Xe(e, t, n) {
    for (let i = e[t], o = i.length, r = null; --o > -1; )
      (r = i[o]), i.splice(o, 1), r(n);
    "error" === t ? (e.load = []) : (e.error = []);
  }
  function Ye(e) {
    if (null === e) return "";
    const t = [];
    return (function n(e, t) {
      let i, o;
      if ("object" == typeof e)
        for (o in e)
          !0 === Je((i = e[o])) ? n(i, t) : (t[t.length] = Ve(o, i));
      else if (!0 === Array.isArray(e))
        for (let r = 0; r < e.length; r++)
          !0 === Je((i = e[r])) ? n(e, t) : (t[t.length] = Ve(o, i));
      else t[t.length] = Ve(e);
    })(e, t),
    t.join("&")
  ;
  }
  function Je(e) {
    return !0 === Array.isArray(e) || "object" == typeof e;
  }
  function Ve(e, t) {
    return (
      encodeURIComponent(e) + "=" + encodeURIComponent(null === t ? "" : t)
    );
  }
  (Fe.prototype.load = function () {
    const e = this, t = this.attribs, n = this.src, i = this.id;
    return new Promise((o, r) => {
      const a = new Image();
      (e.element = a),
        t.crossOrigin && (a.crossOrigin = t.crossOrigin),
        (a.onerror = t => {
          (e.error = !0), (a.onload = a.onerror = null);
          const n = (t && t.message ? t.message : "Loading Error") + ": " + i;
          qe(e.cb, "error", n), r(n);
        }),
        (a.onload = () => {
          e.loaded ||
            ((e.width = a.width),
            (e.height = a.height),
            (e.aspect = a.width / a.height),
            (e.loaded = !0),
            (a.onload = a.onerror = null),
            qe(e.cb, "load", e),
            o(e));
        }),
        (a.src = n),
        a.complete && a.onload();
    });
  }),
    (Fe.prototype.onload = function (e) {
      this.error || (this.loaded ? e(this) : this.cb.load.push(e));
    }),
    (Fe.prototype.onerror = function (e) {
      (this.loaded && !this.error) ||
        (this.error ? e(this) : this.cb.error.push(e));
    }),
    (He.prototype.load = function () {
      const e = this, t = this.attribs, n = this.src, i = this.id;
      return new Promise((o, r) => {
        const a = document.createElement("script");
        (e.element = a),
          (a.onerror = t => {
            (e.error = !0),
              (a.onload = a.onreadystatechange = a.onerror = null);
            const n = (t.message || "Loading Error") + ": " + i;
            Xe(e.cb, "error", n), r(n);
          }),
          (a.onload = a.onreadystatechange = function () {
            this.loaded ||
              (a.readyState &&
                "loaded" !== a.readyState &&
                "complete" !== a.readyState) ||
              ((e.loaded = !0),
              (a.onload = a.onreadystatechange = a.onerror = null),
              document.body.removeChild(a),
              Xe(e.cb, "load", e),
              o(e));
          }),
          (a.type = "text/javascript"),
          (a.src = n),
          t.crossOrigin && (a.crossorigin = t.crossOrigin),
          t.async && (a.async = !0),
          t.defer && (a.defer = !0),
          document.body.appendChild(a),
          a.complete && a.onload();
      });
    }),
    (He.prototype.onload = function (e) {
      this.error || (this.loaded ? e(this) : this.cb.load.push(e));
    }),
    (He.prototype.onerror = function (e) {
      (this.loaded && !this.error) ||
        (this.error ? e(this) : this.cb.error.push(e));
    });
  const Qe = {
            400: "Rate limited or network error. Please retry.",
            429: "Your computer or network has sent too many requests.",
            500: "Cannot contact hCaptcha. Check your connection and try again.",
          },
        Ke = {
          getText(e) {
            try {
              return te.translate(Qe[e]);
            } catch (kt) {
              return !1;
            }
          },
        },
        Ge =
          "undefined" != typeof XDomainRequest &&
          "withCredentials" in XMLHttpRequest.prototype == !1;
  function Ze(e, t, n) {
    n = n || {};
    const i = {
      url: t,
      method: e.toUpperCase(),
      responseType: n.responseType || "string",
      dataType: n.dataType || null,
      withCredentials: n.withCredentials || !1,
      headers: n.headers || null,
      data: n.data || null,
    };
    return (i.legacy = i.withCredentials && Ge),
    i.data &&
      ("json" === i.dataType &&
        "object" == typeof i.data &&
        (i.data = JSON.stringify(i.data)),
      "query" === i.dataType && (i.data = Ye(i.data))),
    n.retry
      ? F(() => {
          return et(i);
        }, n.retry)
      : et(i)
  ;
  }
  function et(e) {
    const t = e.legacy ? new XDomainRequest() : new XMLHttpRequest();
    return new Promise((n, i) => {
      let o;

      const r = o => {
        return r => {
          let a = t.response || t.responseText;
          const s = t.statusText || "";
          const c = t.status;
          const h = t.readyState;
          if (4 === h || e.legacy) {
            if ("error" === o || (c >= 400 && c <= 511))
              return void i({
                event: "network-error",
                endpoint: e.url,
                state: h,
                status: c,
                message: Ke.getText(c || 400) || s,
              });
            "json" === e.responseType && a && (a = JSON.parse(a)),
              n({ state: h, status: c, body: a, message: s });
          }
        };
      };

      if (
        ((t.onload = r("complete")),
        (t.onerror = t.ontimeout = r("error")),
        t.open(e.method, e.url),
        !e.legacy) &&
        ((t.withCredentials = e.withCredentials), e.headers)
      )
        for (const a in e.headers) (o = e.headers[a]), t.setRequestHeader(a, o);
      setTimeout(() => {
        t.send(e.data);
      }, 0);
    });
  }
  const tt = (e, t) => {
    if (
      ("object" == typeof e && t === undefined && (e = (t = e).url), null === e)
    )
      throw new Error("Url missing");
    return Ze("GET", e, t);
  };
  function nt(e, t) {
    let n = e;
    t || (t = {}),
      t.prefix && (n = t.prefix + "/" + e),
      (this.id = n),
      (this.src = Ue.getLocation(n)),
      (this.loaded = !1),
      (this.error = !1),
      (this.cb = { load: [], error: [] }),
      (this.data = null);
  }
  function it(e, t, n) {
    for (let i = e[t], o = i.length, r = null; --o > -1; )
      (r = i[o]), i.splice(o, 1), r(n);
    "error" === t ? (e.load = []) : (e.error = []);
  }
  (nt.prototype.load = function () {
    const e = this, t = this.src, n = this.id;
    return new Promise((i, o) => {
      const r = {};
      t.indexOf("json") >= 0 && (r.responseType = "json"),
        tt(t, r)
          .then(t => {
            (e.loaded = !0), (e.data = t.body), it(e.cb, "load", e), i(e);
          })
          ["catch"](t => {
            e.error = !0;
            const i = (t && t.message ? t.message : "Loading Error") + ": " + n;
            it(e.cb, "error", i), o(i);
          });
    });
  }),
    (nt.prototype.onload = function (e) {
      this.error || (this.loaded ? e(this) : this.cb.load.push(e));
    }),
    (nt.prototype.onerror = function (e) {
      (this.loaded && !this.error) ||
        (this.error ? e(this) : this.cb.error.push(e));
    });
  const ot = [],
        rt = {
          add(e, t) {
            const n = Ue.getType(e);
            return rt[n] ? rt[n](e, t) : Promise.resolve(null);
          },
          batch(e, t) {
            for (var n = [], i = -1; ++i < e.length; ) {
              const o = e[i];
              n.push(rt.add(o, t));
            }
            return Promise.all(n)["finally"](() => {
              n = [];
            });
          },
          image(e, t) {
            const n = new Fe(e, t);
            return ot.push(n), n.load();
          },
          script(e, t) {
            const n = new He(e, t);
            return ot.push(n), n.load();
          },
          file(e, t) {
            const n = new nt(e, t);
            return ot.push(n), n.load();
          },
          retrieve(e) {
            return new Promise((t, n) => {
              for (var i = ot.length, o = !1, r = null; --i > -1 && !o; )
                o = (r = ot[i]).id.indexOf(e) >= 0 && r;
              if (!o) return t(null);
              r.onload(t), r.onerror(n);
            });
          },
        };
  function at(e) {
    if ("en" === e) return Promise.resolve();
    const t = e + ".json";
    return new Promise((n, i) => {
      rt.retrieve(t)
        .then(n => {
          return n ||
          rt
            .file(t, {
              prefix:
                "https://assets.hcaptcha.com/captcha/v1/a9589f9/static/i18n",
            })
            .then(t => {
              return te.addTable(e, t.data), t;
            });
        })
        .then(e => {
          n(e.data);
        })
        ["catch"](e => {
          i(e);
        });
    });
  }
  let st = 0;

  const ct = [
    "tplinks",
    "sitekey",
    "theme",
    "size",
    "tabindex",
    "challenge-container",
  ];

  const ht =
    "Your browser is missing or has disabled Cross-Window Messaging. Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> or enable it for hCaptcha.com";

  const lt =
    "Your browser plugins or privacy policies are blocking the hCaptcha service. Please disable them for hCaptcha.com";

  const dt = {
    render(e, t) {
      if (
        ("string" == typeof e && (e = document.getElementById(e)),
        e && 1 === e.nodeType)
      )
        if ((e => {
          if (!(e && "challenge-container" in e)) return !0;
          let t = e["challenge-container"];
          return (
            "string" == typeof t && (t = document.getElementById(t)),
            !!t && 1 === t.nodeType
          );
        })(t)) {
          if (!1 !== Be.isSupported()) {
            for (
              var n, i, o = e.getElementsByTagName("iframe"), r = -1;
              ++r < o.length && !n;

            )
              (i = o[r].getAttribute("data-hcaptcha-widget-id")) && (n = !0);
            if (n)
              return (
                console.error(
                  "Only one captcha is permitted per parent container."
                ),
                i
              );
            const a = ((e, t) => {
                      for (
                        var n = [
                            "tplinks",
                            "sitekey",
                            "theme",
                            "type",
                            "size",
                            "tabindex",
                            "callback",
                            "expired-callback",
                            "chalexpired-callback",
                            "error-callback",
                            "open-callback",
                            "close-callback",
                            "endpoint",
                            "challenge-container",
                          ],
                          i = {},
                          o = 0;
                        o < n.length;
                        o++
                      ) {
                        const r = n[o];
                        let a = t && t[r];
                        a || (a = e.getAttribute("data-" + r)), a && (i[r] = a);
                      }
                      return i;
                    })(e, t),
                  s = st++ + Math.random().toString(36).substr(2),
                  c = {
                    sentry: D,
                    reportapi: L.reportapi,
                    recaptchacompat: L.recaptchacompat,
                  };
            L.endpointOverride && (c.endpoint = L.endpointOverride),
              null !== L.language && (c.hl = te.getLocale()),
              L.assethost && (c.assethost = L.assethost),
              L.imghost && (c.imghost = L.imghost),
              L.tplinks && (c.tplinks = L.tplinks);
            for (let h = 0; h < ct.length; h++) {
              const l = ct[h];
              l in a && (c[l] = a[l]);
            }
            if (
              e instanceof HTMLButtonElement ||
              e instanceof HTMLInputElement
            ) {
              const d = new V("div", ".h-captcha");
              d.css({ display: "none" });
              for (let u = null, p = 0; p < e.attributes.length; p++)
                (u = e.attributes[p]).name.startsWith("data-") &&
                  d.setAttribute(u.name, u.value);
              const f =
                e.tagName.toLowerCase() +
                "[data-hcaptcha-widget-id='" +
                s +
                "']";
              e.setAttribute("data-hcaptcha-widget-id", s),
                d.setAttribute("data-hcaptcha-source-id", f),
                e.parentNode.insertBefore(d.dom, e),
                (e.onclick = e => {
                  return e.preventDefault(), C(s);
                }),
                (e = d),
                (c.size = "invisible");
            }
            try {
              var m = new Re(e, s, c);
              m.challenge.style(), m.checkbox.style();
            } catch (Ct) {
              let g = lt;
              return (
                Ct instanceof De &&
                  ((g = Ct.message), console.error(Ct.reason)),
                void R(e, g)
              );
            }
            return a.callback && (m.onPass = a.callback),
            a["expired-callback"] && (m.onExpire = a["expired-callback"]),
            a["chalexpired-callback"] &&
              (m.onChalExpire = a["chalexpired-callback"]),
            a["open-callback"] && (m.onOpen = a["open-callback"]),
            a["close-callback"] && (m.onClose = a["close-callback"]),
            a["error-callback"] && (m.onError = a["error-callback"]),
            m.checkbox.chat.listen("checkbox-selected", e => {
              m.onReady(m.initChallenge, e);
            }),
            m.checkbox.chat.listen("checkbox-loaded", e => {
              (m.checkbox.location.bounding = m.checkbox.getBounding()),
                (m.checkbox.location.tick = e),
                (m.checkbox.location.offset = m.checkbox.getOffset());
              const t = te.getLocale();
              m.checkbox.sendTranslation(t);
            }),
            m.checkbox.chat.listen("checkbox-setup", e => {
              m.challenge.onReady(() => {
                !L.endpointOverride &&
                  e.endpoint &&
                  m.challenge.setEndpoint(e.endpoint),
                  e.c
                    ? m.challenge.sendProof(e.c).then(() => {
                        m.setReady(!0);
                      })
                    : m.setReady(!0);
              });
            }),
            m.challenge.chat.listen("challenge-loaded", () => {
              m.challenge.setReady(!0);
              const e = te.getLocale();
              m.challenge.sendTranslation(e);
            }),
            m.challenge.chat.answer("challenge-ready", (e, t) => {
              m.displayChallenge(e).then(t.resolve);
            }),
            m.challenge.chat.listen("challenge-resize", () => {
              const e = M.Browser.width(), t = M.Browser.height();
              m.resize(e, t);
            }),
            m.challenge.chat.listen("challenge-closed", m.closeChallenge),
            m.challenge.chat.answer("get-url", e => {
              e.resolve(window.location.href);
            }),
            m.challenge.chat.answer("check-api", e => {
              const t = be.getData();
              be.resetData(), e.resolve(t);
            }),
            m.challenge.chat.listen("challenge-key", e => {
              _.pushSession(e.key, m.id);
            }),
            m.challenge.onOverlayClick(() => {
              m.closeChallenge({ event: "challenge-escaped" });
            }),
            m.challenge.chat.listen("challenge-language", e => {
              const t = e.locale;
              te.setLocale(t),
                at(t)
                  .then(e => {
                    _.each(e => {
                      if (e)
                        try {
                          e.updateTranslation(t);
                        } catch (Ct) {
                          W(
                            "Failed to update text translation: " +
                              JSON.stringify(Ct),
                            "error",
                            "translation"
                          );
                        }
                    });
                  })
                  ["catch"](e => {
                    W("Language failed to load: " + t, "error", "api");
                  });
            }),
            m.challenge.chat.answer("get-ac", e => {
              e.resolve(Ae.hasCookie("hc_accessibility"));
            }),
            _.add(m),
            s;
          }
          R(e, ht);
        } else console.log(
          "[hCaptcha] render: invalid challenge container '" +
            t["challenge-container"] +
            "'."
        );
      else console.log("[hCaptcha] render: invalid container '" + e + "'.");
    },
    reset(e) {
      let t;
      if (e) {
        if (!(t = _.getById(e)))
          throw Error("[hCaptcha] invalid captcha id: " + e);
        t.reset();
      } else {
        if (!(t = _.getByIndex(0)))
          throw Error("[hCaptcha] no captchas exist.");
        t.reset();
      }
    },
    remove(e) {
      let t = e ? _.getById(e) : _.getByIndex(0);
      if (!t)
        throw e
          ? Error("[hCaptcha] invalid captcha id: " + e)
          : Error("[hCaptcha] no captchas exist.");
      _.remove(t), t.destroy(), (t = null);
    },
    execute: C,
    getResponse(e) {
      let t, n;
      if (
        ((n = e ? _.getById(e) : _.getByIndex(0)) &&
          (t = n.checkbox.response || ""),
        void 0 !== t)
      )
        return t;
      throw e
        ? new Error("[hCaptcha] invalid captcha id: " + e)
        : new Error("[hCaptcha] no captchas exist.");
    },
    getRespKey(e) {
      let t = "", n = null;
      n = e ? _.getById(e) : _.getByIndex(0);
      try {
        for (let i = _.getSession(), o = i.length, r = !1; --o > -1 && !r; )
          (r = i[o][1] === n.id) && (t = i[o][0]);
      } catch (a) {
        t = "";
      }
      return t;
    },
    close(e) {
      let t = !1;
      if (!(t = e ? _.getById(e) : _.getByIndex(0)))
        throw e
          ? Error("[hCaptcha] invalid captcha id: " + e)
          : Error("[hCaptcha] no captchas exist.");
      t.closeChallenge({ event: "challenge-escaped" });
    },
    setData(e, t) {
      if (
        ("object" != typeof e || t || ((t = e), (e = null)),
        !t || "object" != typeof t)
      )
        throw Error("[hCaptcha] invalid data supplied");
      let n = !1;
      if (!(n = e ? _.getById(e) : _.getByIndex(0)))
        throw e
          ? Error("[hCaptcha] invalid captcha id: " + e)
          : Error("[hCaptcha] no captchas exist.");
      const i = n.challenge.setData.bind(n.challenge);
      n.onReady(i, t);
    },
    nodes: _,
  };
  $.file = "hcaptcha";
  const ut = document.currentScript;
  let pt = !1;
  let ft = !1;
  let mt = "on";
  let gt = M.Browser.width() / M.Browser.height();
  const yt = window.hcaptcha || !1;
  function vt() {
    const e = M.Browser.width(), t = M.Browser.height(), n = M.System.mobile && gt !== e / t;
    (gt = e / t),
      xt(),
      dt.nodes.each(i => {
        i.visible && i.resize(e, t, n);
      });
  }
  function wt(e) {
    e.preventDefault && e.preventDefault(),
      bt(),
      dt.nodes.each(e => {
        e.visible && e.position();
      });
  }
  function bt() {
    be.circBuffPush("xy", [
      M.Browser.scrollX(),
      M.Browser.scrollY(),
      document.documentElement.clientWidth / window.innerWidth,
      Date.now(),
    ]);
  }
  function xt() {
    be.circBuffPush("wn", [
      M.Browser.width(),
      M.Browser.height(),
      M.System.dpr(),
      Date.now(),
    ]);
  }
  !(function (e) {
    const t = Array.prototype.slice.call(arguments, 1);
    !0 !== ke &&
    "interactive" !== document.readyState &&
    "loaded" !== document.readyState &&
    "complete" !== document.readyState
      ? (_e.push({ fn: e, args: t }),
        !1 === Ce &&
          (document.addEventListener
            ? (document.addEventListener("DOMContentLoaded", Oe),
              window.addEventListener("load", Oe))
            : (document.attachEvent("onreadystatechange", Ee),
              window.attachEvent("onload", Oe)),
          (Ce = !0)))
      : setTimeout(() => {
          e(t);
        }, 1);
  })(() => {
    yt ||
      ((() => {
        let e;
        e = ut ? [ut] : document.getElementsByTagName("script");
        let t = -1, n = !1, i = null, o = null;
        for (; ++t < e.length && !1 === n; )
          e[t] &&
            e[t].src &&
            ((i = e[t].src.split("?")),
            (o = i[0]),
            /\/(hcaptcha|1\/api)\.js$/.test(o) && (n = e[t]));
        if (!1 === n) return;
        const r = Me(i[1]);
        (pt = r.onload || !1),
          (ft = r.render || !1),
          "off" === r.tplinks && (mt = "off");
        (L.tplinks = mt),
          (L.language = r.hl || null),
          r.endpoint && (L.endpointOverride = r.endpoint);
        (L.reportapi = r.reportapi || L.reportapi),
          (L.assethost = r.assethost || null),
          (L.imghost = r.imghost || null),
          (L.recaptchacompat = r.recaptchacompat || L.recaptchacompat),
          ($.host = r.host || window.location.hostname),
          L.language
            ? te.setLocale(L.language)
            : te.setLocale(
                window.navigator.userLanguage || window.navigator.language
              );
        (a = r.sentry === undefined || r.sentry),
          (D = a),
          "off" === L.recaptchacompat
            ? console.log("recaptchacompat disabled")
            : (window.grecaptcha = _t);
        var a;
      })(), (() => {
      const e = te.getLocale();
      if (e.indexOf("en") >= 0) return;
      at(e)
        .then(t => {
          dt.nodes.each(t => {
            if (t)
              try {
                t.updateTranslation(e);
              } catch (Ct) {
                W(
                  "Failed to update text translation: " + JSON.stringify(Ct),
                  "error",
                  "translation"
                );
              }
          });
        })
        ["catch"](t => {
          W("Language failed to load: " + e, "error", "api");
        });
    })(), !1 === ft || "onload" === ft ? (e => {
          for (
            var t = document.getElementsByClassName("h-captcha"),
              n = [],
              i = 0;
            i < t.length;
            i++
          )
            n.push(t[i]);
          const o = [];
          if ("off" !== L.recaptchacompat)
            for (
              let r = document.getElementsByClassName("g-recaptcha"), a = 0;
              a < r.length;
              a++
            )
              o.push(r[a]);
          for (let s = [].concat(n, o), c = 0; c < s.length; c++) e(s[c]);
        })(dt.render) : "explicit" !== ft &&
        console.log(
          "hcaptcha: invalid render parameter '" +
            ft +
            "', using 'explicit' instead."
        ), pt &&
      setTimeout(() => {
        U(pt);
      }, 1), Se.addEventListener("resize", vt), Se.addEventListener("scroll", wt), (() => {
      be.resetData();
      try {
        be.record(),
          be.setData("sc", M.Browser.getScreenDimensions()),
          be.setData("nv", M.Browser.interrogateNavigator()),
          be.setData("dr", document.referrer),
          xt(),
          bt();
      } catch (Ct) {}
    })());
  });
  var _t = {
    render: dt.render,
    remove: dt.remove,
    execute: dt.execute,
    reset: dt.reset,
    close: dt.close,
    setData: dt.setData,
    getResponse: dt.getResponse,
    getRespKey: dt.getRespKey,
  };
  return _t;
})();
