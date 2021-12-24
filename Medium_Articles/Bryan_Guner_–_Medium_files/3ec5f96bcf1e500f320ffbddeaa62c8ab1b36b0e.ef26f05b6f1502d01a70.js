(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "14ZF": function (e, t, n) {
      "use strict";
      const a = n("MX0m"), r = n.n(a), i = n("q1tI"), o = i.createElement;
      t.a = () => {
        return o(
          "div",
          { className: "jsx-710207973 signup-form-email-disclaimer" },
          "By continuing, you agree to Repl.it's",
          " ",
          o(
            "a",
            {
              href: "/site/terms",
              target: "_blank",
              className: "jsx-710207973",
            },
            "Terms of Service"
          ),
          " ",
          "and",
          " ",
          o(
            "a",
            {
              href: "/site/privacy",
              target: "_blank",
              className: "jsx-710207973",
            },
            "Privacy Policy"
          ),
          ", and to receiving emails with updates.",
          o(r.a, { id: "710207973" }, [
            ".signup-form-email-disclaimer.jsx-710207973{font-size:12px;margin-top:20px;text-align:center;color:var(--color-foreground-2);line-height:14px;}",
          ])
        );
      };
    },
    "2tbh": function (e, t, n) {
      "use strict";
      const a = n("MX0m"),
            r = n.n(a),
            i = n("q1tI"),
            o = n("hfKm"),
            s = n.n(o),
            c = n("2Eek"),
            u = n.n(c),
            p = n("XoMD"),
            l = n.n(p),
            d = n("Jo+v"),
            f = n.n(d),
            h = n("4mXO"),
            m = n.n(h),
            b = n("pLtp"),
            g = n.n(b),
            v = n("vYYK"),
            x = n("ln6h"),
            w = n.n(x),
            y = n("0iUn"),
            k = n("sLSF"),
            j = n("MI3g"),
            S = n("a7VT"),
            C = n("Tit0"),
            O = n("/MKj"),
            E = n("ANjH"),
            T = n("XLFt"),
            _ = n("BvvR"),
            N = n("kOwS"),
            I = n("KRxe"),
            L = i.createElement,
            R = (e => {
              function t() {
                let e, n;
                Object(y.a)(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
                  r[i] = arguments[i];
                return ((n = Object(j.a)(
                  this,
                  (e = Object(S.a)(t)).call.apply(e, [this].concat(r))
                )).state = { isShown: !1 }),
                (n.toggleShowHide = () => {
                  n.setState({ isShown: !n.state.isShown });
                }),
                n
              ;
              }
              return Object(C.a)(t, e),
              Object(k.a)(t, [
                {
                  key: "focus",
                  value() {
                    this.input && this.input.focus();
                  },
                },
                {
                  key: "render",
                  value() {
                    const e = this, t = this.state.isShown, n = t ? "HIDE" : "SHOW";
                    return L(
                      "div",
                      { className: "jsx-3588716774 password-input" },
                      this.props.validated
                        ? L(
                            _.a,
                            Object(N.a)(
                              {
                                ref(t) {
                                  return (e.input = t);
                                },
                                type: t ? "text" : "password",
                              },
                              this.props,
                              { validated: void 0 }
                            )
                          )
                        : L(
                            I.b,
                            Object(N.a)(
                              {
                                ref(t) {
                                  return (e.input = t);
                                },
                              },
                              this.props,
                              { type: t ? "text" : "password", validated: void 0 }
                            )
                          ),
                      this.props.value &&
                        this.props.value.length > 0 &&
                        L(
                          "div",
                          {
                            onClick: this.toggleShowHide,
                            className: "jsx-3588716774 password-show-toggle",
                          },
                          n
                        ),
                      L(r.a, { id: "3588716774" }, [
                        ".password-input.jsx-3588716774{position:relative;}",
                        ".password-input.jsx-3588716774 input{padding-right:67px !important;}",
                        ".password-show-toggle.jsx-3588716774{position:absolute;right:19px;line-height:16px;top:12px;cursor:pointer;}",
                      ])
                    );
                  },
                },
              ]),
              t;
            })(i.Component);
      R.defaultProps = { validated: !1, theme: "replitLight" };
      const U = R, F = n("kDxc"), A = n("7J1T"), H = n("JxgA"), M = n("14ZF"), P = n("up5I"), D = n("IdsG"), G = i.createElement;
      function K(e, t) {
        const n = g()(e);
        if (m.a) {
          let a = m()(e);
          t &&
            (a = a.filter(t => {
              return f()(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function z(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(t => {
                Object(v.a)(e, t, n[t]);
              })
            : l.a
            ? u()(e, l()(n))
            : K(Object(n)).forEach(t => {
                s()(e, t, f()(n, t));
              });
        }
        return e;
      }
      const V = (e => {
                function t(e) {
                  let n;
                  return Object(y.a)(this, t),
                  ((n = Object(j.a)(
                    this,
                    Object(S.a)(t).call(this)
                  )).onRandomUser = () => {
                    const e = "user".concat(Math.ceil(1e7 * Math.random())), t = "".concat(e, "@").concat(e, ".com");
                    n.setState({ username: e, email: t });
                  }),
                  (n.onSignup = e => {
                    let t, a, r, i, o, s, c, u, p, l, d, f;
                    return w.a.async(
                      h => {
                        for (;;)
                          switch ((h.prev = h.next)) {
                            case 0:
                              e.preventDefault(),
                                n.setState({ isLoading: !0 }),
                                (t = n.props.onSubmit),
                                (h.t0 = w.a.keys(n.state.validation));
                            case 4:
                              if ((h.t1 = h.t0()).done) {
                                h.next = 12;
                                break;
                              }
                              if (
                                ((a = h.t1.value),
                                !n.inputRefs[a] ||
                                  !n.inputRefs[a].focus ||
                                  (n.state[a] && !n.state.validation[a]))
                              ) {
                                h.next = 10;
                                break;
                              }
                              return (
                                n.inputRefs[a].focus(),
                                n.setState({ isLoading: !1 }),
                                h.abrupt("return")
                              );
                            case 10:
                              h.next = 4;
                              break;
                            case 12:
                              if (
                                ((r = n.state),
                                (i = r.username),
                                (o = r.email),
                                (s = r.password),
                                (c = r.isTeacher),
                                (u = r.privacyInvite),
                                i && s && o)
                              ) {
                                h.next = 17;
                                break;
                              }
                              return (
                                t({ error: "All fields are required" }),
                                n.setState({ isLoading: !1 }),
                                h.abrupt("return")
                              );
                            case 17:
                              return (
                                (h.prev = 17),
                                (h.next = 20),
                                w.a.awrap(Object(H.b)())
                              );
                            case 20:
                              (p = h.sent), (h.next = 28);
                              break;
                            case 23:
                              return (
                                (h.prev = 23),
                                (h.t2 = h.catch(17)),
                                t({
                                  error:
                                    "Something went wrong trying to submit. Please try again.",
                                }),
                                n.setState({ isLoading: !1 }),
                                h.abrupt("return")
                              );
                            case 28:
                              return (
                                (h.next = 30),
                                w.a.awrap(
                                  n.props.signup({
                                    username: i,
                                    password: s,
                                    privacyInvite: u,
                                    email: o,
                                    teacher: c,
                                    hCaptchaResponse: p,
                                    hCaptchaSiteKey: H.a,
                                  })
                                )
                              );
                            case 30:
                              if (
                                ((l = h.sent),
                                (d = l.user),
                                (f = l.error),
                                n.setState({ isLoading: !1 }),
                                !f)
                              ) {
                                h.next = 38;
                                break;
                              }
                              if (
                                (t({
                                  error:
                                    f.status && f.message
                                      ? f.message
                                      : "Something went wrong",
                                }),
                                !(f.status >= 500))
                              ) {
                                h.next = 38;
                                break;
                              }
                              throw f;
                            case 38:
                              d && t({ user: d });
                            case 39:
                            case "end":
                              return h.stop();
                          }
                      },
                      null,
                      null,
                      [[17, 23]]
                    );
                  }),
                  (n.inputRefs = {}),
                  (n.state = {
                    username: e.username || "",
                    email: e.email || "",
                    password: e.password || "",
                    isTeacher: e.isTeacher || !1,
                    privacyInvite: e.privacyInvite,
                    isLoading: !1,
                    validation: { username: null, email: null, password: null },
                  }),
                  e.privacyInvite &&
                    ((n.state.username = e.randomUsername),
                    (n.state.email = "".concat(
                      e.randomUsername,
                      "@teams.noreply.replit.com"
                    ))),
                  n;
                }
                return Object(C.a)(t, e),
                Object(k.a)(t, [
                  {
                    key: "onValidation",
                    value(e, t) {
                      this.setState({
                        validation: z(
                          {},
                          this.state.validation,
                          Object(v.a)({}, e, t)
                        ),
                      });
                    },
                  },
                  {
                    key: "render",
                    value() {
                      const e = this, t = this.props.onChangeAuth, n = this.state, a = n.email, i = n.username, o = n.password, s = n.isTeacher, c = n.isLoading, u = n.privacyInvite;
                      return G(
                        "div",
                        null,
                        G(
                          "form",
                          {
                            onSubmit: this.onSignup,
                            method: "POST",
                            action: "/signup",
                            className: "jsx-750989145 signup-form",
                          },
                          u &&
                            G(
                              "div",
                              { className: "jsx-750989145 invite-message" },
                              G(
                                D.a,
                                { size: "small" },
                                "Use our default or pick a username that's not your real name."
                              )
                            ),
                          G(
                            "div",
                            { className: "jsx-750989145 input-group" },
                            G(_.a, {
                              ref(t) {
                                return (e.inputRefs.username = t);
                              },
                              validator: "username",
                              name: "username",
                              placeholder: "username",
                              value: i,
                              onChange(t) {
                                return e.setState({
                                  username: t.currentTarget.value,
                                });
                              },
                              onValidation(t) {
                                return e.onValidation("username", t);
                              },
                              autoComplete: "on",
                              autoFocus: !0,
                              autoCorrect: "off",
                              autoCapitalize: "off",
                            })
                          ),
                          this.props.privacyInvite
                            ? void 0
                            : G(
                                "div",
                                { className: "jsx-750989145 input-group" },
                                G(_.a, {
                                  ref(t) {
                                    return (e.inputRefs.email = t);
                                  },
                                  validator: "email",
                                  name: "email",
                                  placeholder: "email",
                                  value: a,
                                  onChange(t) {
                                    return e.setState({
                                      email: t.currentTarget.value,
                                    });
                                  },
                                  onValidation(t) {
                                    return e.onValidation("email", t);
                                  },
                                  readOnly: !!this.props.immutableEmail,
                                  autoComplete: "on",
                                  autoCorrect: "off",
                                  autoCapitalize: "off",
                                })
                              ),
                          G(
                            "div",
                            { className: "jsx-750989145 input-group" },
                            G(U, {
                              validated: !0,
                              ref(t) {
                                return (e.inputRefs.password = t);
                              },
                              key: "password",
                              name: "password",
                              placeholder: "password",
                              validator: "password",
                              value: o,
                              onChange(t) {
                                return e.setState({
                                  password: t.currentTarget.value,
                                });
                              },
                              onValidation(t) {
                                return e.onValidation("password", t);
                              },
                            })
                          ),
                          !this.props.privacyInvite &&
                            G(
                              "div",
                              { className: "jsx-750989145 signup-form-bottom" },
                              G(
                                "div",
                                { className: "jsx-750989145 teacher-checkbox" },
                                G(
                                  F.a,
                                  {
                                    checked: s,
                                    onChange(t) {
                                      return e.setState({ isTeacher: t });
                                    },
                                  },
                                  "I'm a teacher"
                                )
                              ),
                              t &&
                                G(
                                  "div",
                                  { className: "jsx-750989145" },
                                  "or",
                                  " ",
                                  G(
                                    "a",
                                    {
                                      onClick(e) {
                                        e.preventDefault(), t();
                                      },
                                      className:
                                        "jsx-750989145 signup-form-switcher",
                                    },
                                    "log in"
                                  )
                                )
                            ),
                          c
                            ? G(T.a, {
                                style: {
                                  margin: "0 auto",
                                  width: "35px",
                                  height: "35px",
                                },
                              })
                            : G(
                                P.a,
                                {
                                  color: "primary",
                                  filled: !0,
                                  fullWidth: !0,
                                  onClick: this.onSignup,
                                },
                                "Sign up"
                              ),
                          G(M.a, null),
                          G("input", {
                            type: "submit",
                            style: { display: "none" },
                            className: "jsx-750989145",
                          }),
                          G(r.a, { id: "750989145" }, [
                            ".input-group.jsx-750989145{margin-bottom:8px;}",
                            ".invite-message.jsx-750989145{text-align:center;padding:var(--spacing-1);}",
                            ".signup-form-bottom.jsx-750989145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;font-size:14px;margin-bottom:20px;color:var(--color-foreground-2);}",
                            ".signup-form-switcher.jsx-750989145{cursor:pointer;}",
                          ])
                        ),
                        !1
                      );
                    },
                  },
                ]),
                t;
              })(i.Component),
            Y = Object(O.c)(null, e => {
              return Object(E.b)({ signup: A.f }, e);
            })(V),
            J = n("YFqc"),
            X = n.n(J),
            Q = i.createElement,
            q = (e => {
              function t() {
                let e, n;
                Object(y.a)(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
                  r[i] = arguments[i];
                return ((n = Object(j.a)(
                  this,
                  (e = Object(S.a)(t)).call.apply(e, [this].concat(r))
                )).state = {
                  username: n.props.username || "",
                  password: n.props.password || "",
                  isLoading: !1,
                }),
                (n.onLogin = e => {
                  let t, a, r, i, o, s, c, u;
                  return w.a.async(
                    p => {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              (e && e.preventDefault && e.preventDefault(),
                              !n.state.isLoading)
                            ) {
                              p.next = 3;
                              break;
                            }
                            return p.abrupt("return");
                          case 3:
                            if (
                              ((t = n.props.onSubmit),
                              (a = n.state),
                              (r = a.username),
                              (i = a.password),
                              r && i)
                            ) {
                              p.next = 9;
                              break;
                            }
                            return (
                              t({ error: "All fields are required" }),
                              !r && n.inputRefs.username
                                ? n.inputRefs.username.focus()
                                : !i &&
                                  n.inputRefs.password &&
                                  n.inputRefs.password.focus(),
                              p.abrupt("return")
                            );
                          case 9:
                            return (
                              n.setState({ isLoading: !0 }),
                              (p.prev = 10),
                              (p.next = 13),
                              w.a.awrap(Object(H.b)())
                            );
                          case 13:
                            (o = p.sent), (p.next = 21);
                            break;
                          case 16:
                            return (
                              (p.prev = 16),
                              (p.t0 = p.catch(10)),
                              t({
                                error:
                                  "Something went wrong trying to submit. Please try again.",
                              }),
                              n.setState({ isLoading: !1 }),
                              p.abrupt("return")
                            );
                          case 21:
                            return (
                              (p.next = 23),
                              w.a.awrap(
                                n.props.login({
                                  username: r,
                                  password: i,
                                  hCaptchaResponse: o,
                                  hCaptchaSiteKey: H.a,
                                  teacher: n.props.isTeacher,
                                })
                              )
                            );
                          case 23:
                            if (
                              ((s = p.sent),
                              (c = s.user),
                              (u = s.error),
                              n.setState({ isLoading: !1 }),
                              !u)
                            ) {
                              p.next = 31;
                              break;
                            }
                            if (
                              (t({
                                error:
                                  u.status && u.message
                                    ? u.message
                                    : "Something went wrong",
                              }),
                              !(u.status >= 500))
                            ) {
                              p.next = 31;
                              break;
                            }
                            throw u;
                          case 31:
                            c && t({ user: c });
                          case 32:
                          case "end":
                            return p.stop();
                        }
                    },
                    null,
                    null,
                    [[10, 16]]
                  );
                }),
                (n.inputRefs = {}),
                n;
              }
              return Object(C.a)(t, e),
              Object(k.a)(t, [
                {
                  key: "render",
                  value() {
                    const e = this, t = this.props.onChangeAuth, n = this.state, a = n.username, i = n.password, o = n.isLoading;
                    return Q(
                      "div",
                      null,
                      Q(
                        "form",
                        {
                          onSubmit: this.onLogin,
                          method: "POST",
                          action: "/login",
                          className: "jsx-3520724391 login-form",
                        },
                        Q(
                          "div",
                          { className: "jsx-3520724391 input-group" },
                          Q(I.b, {
                            ref(t) {
                              return (e.inputRefs.username = t);
                            },
                            name: "username",
                            placeholder: "email or username",
                            value: a,
                            onChange(t) {
                              return e.setState({
                                username: t.currentTarget.value,
                              });
                            },
                            autoComplete: "on",
                            autoFocus: !0,
                            autoCorrect: "off",
                            autoCapitalize: "off",
                          })
                        ),
                        Q(
                          "div",
                          { className: "jsx-3520724391 input-group" },
                          Q(U, {
                            ref(t) {
                              return (e.inputRefs.password = t);
                            },
                            validated: !1,
                            key: "password",
                            name: "password",
                            placeholder: "password",
                            value: i,
                            onChange(t) {
                              return e.setState({
                                password: t.currentTarget.value,
                              });
                            },
                          })
                        ),
                        Q(
                          "div",
                          { className: "jsx-3520724391 login-form-bottom" },
                          Q(
                            X.a,
                            { href: "/forgot" },
                            Q(
                              "a",
                              { className: "jsx-3520724391 login-forgot" },
                              "Forgot password?"
                            )
                          ),
                          t &&
                            Q(
                              "div",
                              { className: "jsx-3520724391" },
                              "or",
                              " ",
                              Q(
                                "a",
                                {
                                  onClick(e) {
                                    e.preventDefault(), t();
                                  },
                                  className: "jsx-3520724391 login-form-switcher",
                                },
                                "sign up"
                              )
                            )
                        ),
                        o
                          ? Q(T.a, {
                              style: {
                                margin: "0 auto",
                                width: "35px",
                                height: "35px",
                              },
                            })
                          : Q(
                              P.a,
                              {
                                color: "primary",
                                onClick: this.onLogin,
                                filled: !0,
                                fullWidth: !0,
                              },
                              "Log in"
                            ),
                        Q("input", {
                          type: "submit",
                          style: { display: "none" },
                          className: "jsx-3520724391",
                        }),
                        Q(r.a, { id: "3520724391" }, [
                          ".input-group.jsx-3520724391{margin-bottom:8px;}",
                          ".login-form-bottom.jsx-3520724391{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;margin-bottom:20px;font-size:14px;}",
                          ".login-forgot.jsx-3520724391{color:var(--color-primary-1);display:inline-block;border:0;margin-left:3px;}",
                          ".login-forgot.jsx-3520724391:hover{-webkit-text-decoration:underline;text-decoration:underline;}",
                          ".login-form-switcher.jsx-3520724391{color:var(--color-primary-1);cursor:pointer;}",
                        ])
                      )
                    );
                  },
                },
              ]),
              t;
            })(i.Component),
            B = Object(O.c)(null, e => {
              return Object(E.b)({ login: A.d }, e);
            })(q),
            W = n("TSYQ"),
            Z = n.n(W),
            $ = i.createElement,
            ee = ["google", "github", "facebook"],
            te = (e => {
              function t() {
                let e, n;
                Object(y.a)(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
                  r[i] = arguments[i];
                return ((n = Object(j.a)(
                  this,
                  (e = Object(S.a)(t)).call.apply(e, [this].concat(r))
                )).onOAuth = e => {
                  const t = n.props.onSubmit, a = window.open(e);
                  window.addEventListener("message", function e(r) {
                    let i, o, s, c, u;
                    return w.a.async(p => {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              (r.origin !== window.location.origin &&
                                "https://replit.com" !== r.origin &&
                                "https://repl.it" !== r.origin) ||
                              "authenticated" !== r.data
                            ) {
                              p.next = 15;
                              break;
                            }
                            return (
                              window.removeEventListener("message", e),
                              (i = r.source.location.search),
                              a.close(),
                              (p.next = 6),
                              w.a.awrap(n.props.authenticate())
                            );
                          case 6:
                            if (((o = p.sent), (s = o.error), (c = o.user), !s)) {
                              p.next = 14;
                              break;
                            }
                            if (
                              (t({
                                error:
                                  s.status && s.message
                                    ? s.message
                                    : "Something went wrong",
                              }),
                              401 === s.status)
                            ) {
                              p.next = 13;
                              break;
                            }
                            throw s;
                          case 13:
                            return p.abrupt("return");
                          case 14:
                            c &&
                              ((u = !(!i || !i.includes("newUser=1"))),
                              t({ user: c, social: !0, newUser: u }));
                          case 15:
                          case "end":
                            return p.stop();
                        }
                    });
                  });
                }),
                (n.onOptionClick = (e, t) => {
                  e.preventDefault();
                  let a = "/auth/".concat(t, "/get?close=1");
                  n.props.isTeacher && (a += "&teacher=1"), n.onOAuth(a);
                }),
                n;
              }
              return Object(C.a)(t, e),
              Object(k.a)(t, [
                {
                  key: "render",
                  value() {
                    const e = this;
                    return $(
                      "div",
                      { className: "jsx-3910275636" },
                      ee.map(t => {
                        return $(ne, {
                          key: t,
                          onClick(n) {
                            return e.onOptionClick(n, t);
                          },
                          provider: t,
                        });
                      }),
                      $(r.a, { id: "3910275636" }, [
                        "div.jsx-3910275636{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:var(--spacing-2) 0;}",
                      ])
                    );
                  },
                },
              ]),
              t;
            })(i.Component),
            ne = e => {
              const t = e.onClick, n = e.provider;
              return $(
                "a",
                { onClick: t, className: "jsx-1534605632 social-login-item" },
                $("div", {
                  style: {
                    backgroundImage: "url(/public/images/".concat(n, ".png)"),
                  },
                  className:
                    "jsx-1534605632 " +
                    (Z()("social-login-icon", Object(v.a)({}, n, n)) || ""),
                }),
                $(r.a, { id: "1534605632" }, [
                  ".social-login-item.jsx-1534605632{padding:var(--spacing-1);border-radius:100%;}",
                  ".social-login-icon.jsx-1534605632{height:24px;width:24px;background-size:contain;background-repeat:no-repeat;}",
                  ".social-login-item.jsx-1534605632:hover{background-color:var(--color-control-3);}",
                  ".social-login-item.jsx-1534605632,.social-login-item.jsx-1534605632:hover{border:0 none;}",
                  ".replit-ui-theme-root.dark .social-login-icon.github{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1);}",
                ])
              );
            },
            ae = Object(O.c)(null, e => {
              return Object(E.b)({ authenticate: A.a }, e);
            })(te),
            re = n("EQ2k"),
            ie = i.createElement;
      t.a = e => {
        const t = e.onSubmit, n = e.isLogin, a = e.email, i = e.isTeacher, o = e.onChangeAuth, s = e.privacyInvite, c = e.randomUsername;
        return ie(
          "div",
          { className: r.a.dynamic([["1827768959", [re.a.black]]]) },
          ie(r.a, { id: "1827768959", dynamic: [re.a.black] }, [
            "div.__jsx-style-dynamic-selector{max-width:280px;margin-top:auto;margin-bottom:auto;color:".concat(
              re.a.black,
              ";}"
            ),
          ]),
          !s && ie(ae, { isTeacher: i, onSubmit: t }),
          n
            ? ie(B, { isTeacher: i, onSubmit: t, onChangeAuth: o })
            : ie(Y, {
                isTeacher: i,
                email: a,
                onSubmit: t,
                onChangeAuth: o,
                privacyInvite: s,
                randomUsername: c,
              })
        );
      };
    },
    "7J1T": function (e, t, n) {
      "use strict";
      n.d(t, "f", () => {
        return y;
      }),
        n.d(t, "d", () => {
          return k;
        }),
        n.d(t, "a", () => {
          return j;
        }),
        n.d(t, "e", () => {
          return S;
        }),
        n.d(t, "c", () => {
          return C;
        }),
        n.d(t, "b", () => {
          return O;
        });
      const a = n("hfKm"), r = n.n(a), i = n("2Eek"), o = n.n(i), s = n("XoMD"), c = n.n(s), u = n("Jo+v"), p = n.n(u), l = n("4mXO"), d = n.n(l), f = n("pLtp"), h = n.n(f), m = n("vYYK"), b = n("ln6h"), g = n.n(b), v = n("G5Ub");
      function x(e, t) {
        const n = h()(e);
        if (d.a) {
          let a = d()(e);
          t &&
            (a = a.filter(t => {
              return p()(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function w(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(n), !0).forEach(t => {
                Object(m.a)(e, t, n[t]);
              })
            : c.a
            ? o()(e, c()(n))
            : x(Object(n)).forEach(t => {
                r()(e, t, p()(n, t));
              });
        }
        return e;
      }
      function y(e) {
        const t = e.username, n = e.email, a = e.password, r = e.teacher, i = e.selfLearner, o = e.hCaptchaResponse, s = e.hCaptchaSiteKey, c = e.privacyInvite;
        return (e, u) => {
          let p;
          return g.a.async(
            l => {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    return (
                      e({ type: "FETCH_SIGNUP_REQUEST" }),
                      (l.prev = 1),
                      (l.next = 4),
                      g.a.awrap(
                        Object(v.d)("/signup", {
                          email: n,
                          username: t,
                          password: a,
                          teacher: r,
                          privacyInvite: c,
                          selfLearner: i,
                          hCaptchaResponse: o,
                          hCaptchaSiteKey: s,
                        })
                      )
                    );
                  case 4:
                    (p = l.sent), (l.next = 11);
                    break;
                  case 7:
                    return (
                      (l.prev = 7),
                      (l.t0 = l.catch(1)),
                      e({ type: "FETCH_SIGNUP_FAILURE", error: l.t0 }),
                      l.abrupt("return", { error: l.t0 })
                    );
                  case 11:
                    return (
                      e({ type: "FETCH_SIGNUP_SUCCESS", user: p }),
                      l.abrupt("return", { user: u().user.userInfo })
                    );
                  case 13:
                  case "end":
                    return l.stop();
                }
            },
            null,
            null,
            [[1, 7]]
          );
        };
      }
      function k(e) {
        const t = e.username, n = e.password, a = e.teacher, r = e.hCaptchaResponse, i = e.hCaptchaSiteKey;
        return (e, o) => {
          let s;
          return g.a.async(
            c => {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    return (
                      e({ type: "FETCH_LOGIN_REQUEST" }),
                      (c.prev = 1),
                      (c.next = 4),
                      g.a.awrap(
                        Object(v.d)("/login", {
                          username: t,
                          password: n,
                          teacher: a,
                          hCaptchaResponse: r,
                          hCaptchaSiteKey: i,
                        })
                      )
                    );
                  case 4:
                    (s = c.sent), (c.next = 11);
                    break;
                  case 7:
                    return (
                      (c.prev = 7),
                      (c.t0 = c.catch(1)),
                      e({ type: "FETCH_LOGIN_FAILURE", error: c.t0 }),
                      c.abrupt("return", { error: c.t0 })
                    );
                  case 11:
                    return (
                      e({ type: "FETCH_LOGIN_SUCCESS", user: s }),
                      c.abrupt("return", { user: o().user.userInfo })
                    );
                  case 13:
                  case "end":
                    return c.stop();
                }
            },
            null,
            null,
            [[1, 7]]
          );
        };
      }
      function j() {
        return (e, t) => {
          let n, a;
          return g.a.async(
            r => {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      e({ type: "FETCH_USER_INFO_REQUEST" }),
                      (r.prev = 1),
                      (r.next = 4),
                      g.a.awrap(Object(v.b)("/is_authenticated"))
                    );
                  case 4:
                    (n = r.sent), (r.next = 11);
                    break;
                  case 7:
                    return (
                      (r.prev = 7),
                      (r.t0 = r.catch(1)),
                      e({ type: "FETCH_USER_INFO_FAILURE", error: r.t0 }),
                      r.abrupt("return", { error: r.t0 })
                    );
                  case 11:
                    if (n.success) {
                      r.next = 16;
                      break;
                    }
                    return (
                      ((a = new Error("Unauthorized")).status = 401),
                      e({ type: "FETCH_USER_INFO_FAILURE", error: a }),
                      r.abrupt("return", { error: a })
                    );
                  case 16:
                    return (
                      e({
                        type: "FETCH_USER_INFO_SUCCESS",
                        user: w({}, n.user, {
                          should_complete_profile: n.should_complete_profile,
                        }),
                      }),
                      r.abrupt("return", { user: t().user.userInfo })
                    );
                  case 18:
                  case "end":
                    return r.stop();
                }
            },
            null,
            null,
            [[1, 7]]
          );
        };
      }
      function S() {
        return { type: "AUTH_MODAL_SHOW" };
      }
      function C() {
        return { type: "AUTH_MODAL_INCREMENT_PROMPT_COUNT" };
      }
      function O() {
        return { type: "AUTH_MODAL_DISSMISS" };
      }
    },
    JxgA(e, t, n) {
      "use strict";
      ((e => {
        n.d(t, "a", () => {
          return s;
        }),
          n.d(t, "b", () => {
            return m;
          });
        const a = n("ln6h");
        const r = n.n(a);
        const i = n("eVuF");
        const o = n.n(i);

        var s = e.env.BYPASS_CAPTCHA_CYPRESS
          ? "20000000-ffff-ffff-ffff-000000000002"
          : "473079ba-e99f-4e25-a635-e9b661c7dd3e";

        const c = !0;
        const u = 1.7;
        const p = 5;
        let l = 0;
        function d() {
          const e = Math.floor(500 * Math.random());
          return 1e3 * Math.pow(u, l) + e;
        }
        let f = null;
        function h(e) {
          return () => {
            "undefined" === typeof window.hcaptcha
              ? setTimeout(() => {
                  h(e);
                }, 100)
              : e();
          };
        }
        function m() {
          let e;
          return r.a.async(t => {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (c) {
                    t.next = 2;
                    break;
                  }
                  throw new Error("captcha on the server?");
                case 2:
                  if ((window.location.hostname, !f)) {
                    t.next = 6;
                    break;
                  }
                  return (t.next = 6), r.a.awrap(f);
                case 6:
                  return (e = window.hcaptcha),
                  t.abrupt(
                    "return",
                    new o.a((t, n) => {
                      const a = document.createElement("div"),
                            r = e.render(a, {
                              sitekey: s,
                              size: "invisible",
                              callback(n) {
                                e.reset(r),
                                  window.document.body.contains(a) &&
                                    window.document.body.removeChild(a),
                                  t(n);
                              },
                              "error-callback": function () {
                                e.reset(r),
                                  window.document.body.contains(a) &&
                                    window.document.body.removeChild(a),
                                  n(new Error("HCaptcha render error"));
                              },
                              "expired-callback": function () {
                                e.reset(r),
                                  window.document.body.contains(a) &&
                                    window.document.body.removeChild(a),
                                  n(new Error("HCaptcha render expired"));
                              },
                            });
                      window.document.body.appendChild(a), e.execute(r);
                    })
                  );
                case 8:
                case "end":
                  return t.stop();
              }
          });
        }
        c &&
          (f = (function e() {
            let t;
            return r.a.async(n => {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return ((t = document.createElement("script")).src =
                      "https://www.hcaptcha.com/1/api.js?render=explicit&host=repl.it"),
                    n.abrupt(
                      "return",
                      new o.a((n, a) => {
                        (t.onload = h(() => {
                          (f = null), n();
                        })),
                          (t.onerror = () => {
                            l++,
                              (f = new o.a((t, n) => {
                                setTimeout(() => {
                                  e().then(t, n);
                                }, d());
                              })),
                              l === p &&
                                a(
                                  new Error(
                                    "Failed to load captcha script after ".concat(
                                      p,
                                      " times"
                                    )
                                  )
                                );
                          }),
                          window.document.head.appendChild(t);
                      })
                    )
                  ;
                  case 3:
                  case "end":
                    return n.stop();
                }
            });
          })());
      }).call(this, n("8oxB")));
    },
    kDxc(e, t, n) {
      "use strict";
      const a = n("0iUn"),
            r = n("sLSF"),
            i = n("MI3g"),
            o = n("a7VT"),
            s = n("Tit0"),
            c = n("MX0m"),
            u = n.n(c),
            p = n("q1tI"),
            l = n("TSYQ"),
            d = n.n(l),
            f = n("EQ2k"),
            h = p.createElement,
            m = (e => {
              function t(e) {
                let n;
                return Object(a.a)(this, t),
                ((n = Object(i.a)(
                  this,
                  Object(o.a)(t).call(this, e)
                )).onToggle = e => {
                  e && (e.preventDefault(), e.stopPropagation());
                  const t =
                    void 0 === n.props.forceChecked
                      ? n.state.checked
                      : n.props.forceChecked;
                  n.props.onChange(!t),
                    void 0 === n.props.forceChecked &&
                      n.setState({ checked: !n.state.checked });
                }),
                (n.state = { checked: e.checked || !1 }),
                n;
              }
              return Object(s.a)(t, e),
              Object(r.a)(t, [
                {
                  key: "render",
                  value() {
                    return h(
                      "div",
                      {
                        style: this.props.style,
                        onClick: this.onToggle,
                        className:
                          u.a.dynamic([
                            ["950980637", [f.a.blueGray, f.a.blueGray]],
                          ]) + " checkbox-wrapper",
                      },
                      h("div", {
                        className:
                          u.a.dynamic([
                            ["950980637", [f.a.blueGray, f.a.blueGray]],
                          ]) +
                          " " +
                          (d()("checkbox-box", {
                            "checkbox-checked":
                              void 0 !== this.props.forceChecked
                                ? this.props.forceChecked
                                : this.props.checked,
                          }) || ""),
                      }),
                      this.props.children,
                      h(
                        u.a,
                        {
                          id: "950980637",
                          dynamic: [f.a.blueGray, f.a.blueGray],
                        },
                        [
                          ".checkbox-wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}",
                          ".checkbox-box.__jsx-style-dynamic-selector{min-width:16px;width:16px;height:16px;background:#fff;border:solid 2px #eee;margin-right:5px;}",
                          ".checkbox-checked.__jsx-style-dynamic-selector{background-color:"
                            .concat(
                              f.a.blueGray,
                              ";background-image:url(/public/images/check_mark.svg);background-size:90%;background-position:center;background-repeat:no-repeat;border:solid 2px "
                            )
                            .concat(f.a.blueGray, ";}"),
                        ]
                      )
                    );
                  },
                },
              ]),
              t
            ;
            })(p.Component);
      (m.defaultProps = { style: {}, onChange() {} }), (t.a = m);
    },
  },
]);
//# sourceMappingURL=3ec5f96bcf1e500f320ffbddeaa62c8ab1b36b0e.ef26f05b6f1502d01a70.js.map
