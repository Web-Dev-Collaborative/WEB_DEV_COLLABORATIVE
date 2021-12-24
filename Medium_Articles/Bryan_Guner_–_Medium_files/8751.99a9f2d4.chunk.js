( self.webpackChunklite = self.webpackChunklite || [] ).push( [
  [ 8751 ],
  {
    90194: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        w: () => s
      } );
      const r = n( 67294 );
      const i = n( 7530 );
      const o = n( 62630 );
      const a = n( 27572 );
      const l = n( 28309 );
      const c = n( 16139 );

      var s = e => {
        const t = e.buttonSize,
          n = void 0 === t ? "LARGE" : t,
          s = e.buttonStyle,
          u = void 0 === s ? "STRONG" : s,
          d = e.newsletterV3Id,
          m = e.showMailIcon,
          b = void 0 === m || m,
          p = e.onClick,
          f = e.width,
          w = e.buttonText,
          E = void 0 === w ? "Get this newsletter" : w,
          g = e.redirectUrl,
          h = ( 0, a.Qi )(),
          v = ( 0, o.Av )(),
          S = ( 0, l.Iq )();
        return r.createElement(
          i.zx, {
            buttonStyle: u,
            onClick() {
              v.event( "newsletterV3.subscribeClicked", {
                  newsletterV3Id: d,
                  source: h,
                } ),
                p();
            },
            size: n,
            width: f,
            href: g,
          },
          b &&
          r.createElement(
            "span", {
              className: S( () => {
                return {
                  marginRight: "8px"
                };
              } ),
              "aria-hidden": "true",
            },
            r.createElement( c.Z, null )
          ),
          E
        );
      };
    },
    31429: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        x: () => M,
        B: () => U
      } );
      const r = n( 63038 ),
        i = n.n( r ),
        o = n( 28655 ),
        a = n.n( o ),
        l = n( 71439 ),
        c = n( 67294 ),
        s = n( 12291 ),
        u = n( 9972 ),
        d = n( 90194 ),
        m = n( 59713 ),
        b = n.n( m ),
        p = n( 46829 ),
        f = n( 62630 ),
        w = n( 85277 );

      function E( e, t ) {
        const n = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          let r = Object.getOwnPropertySymbols( e );
          t &&
            ( r = r.filter( t => {
              return Object.getOwnPropertyDescriptor( e, t ).enumerable;
            } ) ),
            n.push.apply( n, r );
        }
        return n;
      }

      function g( e ) {
        for ( let t = 1; t < arguments.length; t++ ) {
          const n = null != arguments[ t ] ? arguments[ t ] : {};
          t % 2 ?
            E( Object( n ), !0 ).forEach( t => {
              b()( e, t, n[ t ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
            E( Object( n ) ).forEach( t => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor( n, t )
              );
            } );
        }
        return e;
      }

      function h() {
        const e = a()( [
          "\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n",
        ] );
        return ( h = () => {
            return e;
          } ),
          e;
      }

      function v() {
        const e = a()( [
          "\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n",
        ] );
        return ( v = () => {
            return e;
          } ),
          e;
      }

      function S() {
        const e = a()( [
          "\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    isSubscribed\n  }\n",
        ] );
        return ( S = () => {
            return e;
          } ),
          e;
      }
      const y = ( 0, l.Ps )( S() ),
        x = ( 0, l.Ps )( v() ),
        V = ( 0, l.Ps )( h() ),
        N = n( 86280 ),
        O = n( 62181 ),
        C = n( 7530 ),
        T = n( 25597 ),
        R = n( 64504 ),
        I = n( 27572 ),
        k = n( 51512 ),
        P = n( 14391 ),
        _ = n( 8403 ),
        L = n( 51064 ),
        A = n( 27952 ),
        j = n( 534 );

      function B() {
        const e = a()( [
          "\n  fragment NewsletterV3SubscribeButton_newsletterV3 on NewsletterV3 {\n    id\n    name\n    isSubscribed\n    type\n    user {\n      name\n    }\n    collection {\n      ...CollectionMetabar_collection\n      ...SusiClickable_collection\n      ...collectionDefaultBackgroundTheme_collection\n    }\n    ...SusiClickable_newsletterV3\n    ...useNewsletterV3Subscription_newsletterV3\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( B = () => {
            return e;
          } ),
          e;
      }
      const D = "newsletter_v3_promo";
      var U = ( 0, l.Ps )( B(), u.JE, O.Os, O.GB, j.Gi, y );

      var M = e => {
        let t;
        let n;
        let r;
        const o = e.newsletterV3;
        const a = e.buttonLayout;
        const l = void 0 === a ? "MULTI-LINE" : a;
        const u = e.helperTextColor;
        const m = void 0 === u ? "LIGHTER" : u;
        const b = e.showHelperText;
        const E = void 0 === b || b;
        const h = e.showMailIcon;
        let v = void 0 === h || h;
        const S = e.buttonSize;
        const B = void 0 === S ? "LARGE" : S;
        const U = e.buttonStyle;
        const M = void 0 === U ? "STRONG" : U;
        const F = e.redirectUrl;
        const W = ( 0, N.YC )().value;
        const $ = o.id;
        const G = o.collection ? o.collection : void 0;
        const z = o.user ? o.user : void 0;
        const Y = ( 0, w.w )();
        const q = ( 0, _.PM )();

        const H = ( 0, s.v9 )( e => {
          return e.config.productName;
        } );

        const Q = ( 0, L.O )( !1 );
        const Z = i()( Q, 3 );
        const K = Z[ 0 ];
        const X = Z[ 1 ];
        const J = Z[ 2 ];
        switch ( o.type ) {
          case P.Rr.NEWSLETTER_TYPE_COLLECTION:
            ( t = o.name ), ( n = "You 're signed up for ".concat( t, "." ) );
            break;
          case P.Rr.NEWSLETTER_TYPE_AUTHOR:
            ( t = null == z ? void 0 : z.name ),
            ( n = "You''re subscribed to ".concat( t ) );
        }
        F
          ?
          ( ( r = "Learn more" ), ( v = !1 ) ) :
          o.type === P.Rr.NEWSLETTER_TYPE_COLLECTION ?
          ( r = "Get this newsletter" ) :
          o.type === P.Rr.NEWSLETTER_TYPE_AUTHOR && ( r = "Subscribe" );
        const ee = ( ( e, t, n ) => {
            const r = c.useState( n ),
              o = i()( r, 2 ),
              a = o[ 0 ],
              l = o[ 1 ],
              s = c.useState( !1 ),
              u = i()( s, 2 ),
              d = u[ 0 ],
              m = u[ 1 ],
              b = ( 0, f.Av )(),
              E = ( 0, w.w )();
            d &&
              b.event( "newsletterV3.subscribe.error", {
                newsletterV3Id: e
              } );
            const h = ( 0, p.useMutation )( x, {
                variables: {
                  newsletterV3Id: e,
                  shouldRecordConsent: !1
                },
                onCompleted( e ) {
                  const t = e.subscribeNewsletterV3;
                  m( !t ), t && l( !0 );
                },
                update( t, n ) {
                  let r;

                  const i = {
                    id: "NewsletterV3:".concat( e ),
                    fragment: y,
                    fragmentName: "useNewsletterV3Subscription_newsletterV3",
                  };

                  const o = t.readFragment( i );
                  t.writeFragment(
                    g(
                      g( {}, i ), {}, {
                        data: g(
                          g( {}, o ), {}, {
                            isSubscribed: null === ( r = n.data ) || void 0 === r ?
                              void 0 :
                              r.subscribeNewsletterV3,
                          }
                        ),
                      }
                    )
                  );
                },
              } ),
              v = i()( h, 1 )[ 0 ],
              S = ( 0, p.useMutation )( V, {
                variables: {
                  newsletterV3Id: e
                },
                onCompleted( e ) {
                  const n = e.unsubscribeNewsletterV3;
                  m( !n ),
                    n &&
                    ( l( !1 ),
                      E( {
                        duration: "NEXTPAGE",
                        message: "",
                        toastStyle: "NEWSLETTER_UNSUBSCRIBE",
                        extraParams: {
                          newsletterName: t
                        },
                      } ) );
                },
                update( t, n ) {
                  let r;

                  const i = {
                    id: "NewsletterV3:".concat( e ),
                    fragment: y,
                    fragmentName: "useNewsletterV3Subscription_newsletterV3",
                  };

                  const o = t.readFragment( i );
                  t.writeFragment(
                    g(
                      g( {}, i ), {}, {
                        data: g(
                          g( {}, o ), {}, {
                            isSubscribed: !(
                              null !== ( r = n.data ) &&
                              void 0 !== r &&
                              r.unsubscribeNewsletterV3
                            ),
                          }
                        ),
                      }
                    )
                  );
                },
              } ),
              N = i()( S, 1 )[ 0 ];
            return {
              isSubscribed: a,
              hasError: d,
              setSubscribe( t ) {
                const n =
                  arguments.length > 1 &&
                  void 0 !== arguments[ 1 ] &&
                  arguments[ 1 ];
                m( !1 ),
                  t ?
                  v( {
                    variables: {
                      newsletterV3Id: e,
                      shouldRecordConsent: n,
                    },
                  } ) :
                  N();
              },
            };
          } )( o.id, t, o.isSubscribed ),
          te = ee.isSubscribed,
          ne = ee.hasError,
          re = ee.setSubscribe;
        c.useEffect(
          () => {
            if ( q ) {
              const e = ( 0, k.P7 )( q || "" ).susiEntry;
              [
                "collection_newsletter_v3_landing",
                "newsletter_v3_promo",
              ].includes( void 0 === e ? "" : e ) &&
                te &&
                Y( {
                  duration: "NEXTPAGE",
                  message: "",
                  toastStyle: "NEWSLETTER_SUBSCRIBE",
                  extraParams: {
                    newsletterName: null == o ? void 0 : o.name,
                    unsubscribeFn() {
                      return re( !1 );
                    },
                  },
                } );
            }
          },
          [ q ]
        );
        const ie = e => {
            const t = e.children;
            return c.createElement(
              C.xu, {
                margin: "COMPACT" === l ? "10px 20px 10px 0" : "",
                xs: {
                  margin: "10px 0 0 0"
                },
              },
              t
            );
          },
          oe = e => {
            const t = e.children;
            return c.createElement(
              C.xu, {
                maxWidth: "COMPACT" === l ? "380px" : "",
                margin: "COMPACT" === l ? "10px 0 10px 0" : "10px 0 0 0",
              },
              c.createElement( R.F, {
                scale: "S",
                color: m
              }, t )
            );
          },
          ae = () => {
            const e = ( 0, A.Zu )( $ ),
              n = {
                buttonSize: B,
                buttonStyle: M,
                newsletterV3Id: o.id,
                onClick() {
                  F ||
                    ( W && W.allowEmailAddressSharingEditorWriter ?
                      re( !0, !1 ) :
                      X() );
                },
                showMailIcon: v,
                buttonText: r,
                redirectUrl: F,
              };
            return c.createElement(
              ie,
              null,
              W ?
              c.createElement(
                c.Fragment,
                null,
                c.createElement( d.w, n ),
                c.createElement(
                  C.QH, {
                    onConfirm() {
                      return re( !0, !0 );
                    },
                    isVisible: K,
                    hide: J,
                    titleText: "Confirm your subscription to ".concat( t ),
                    confirmText: "Confirm now",
                    buttonStyle: "STRONG",
                    buttonSize: "LARGE",
                    showCancelButton: !1,
                    withCloseButton: !1,
                    isDestructiveAction: !1,
                  },
                  "By confirming, you agree to share your email address with the editors of newsletters and writers you've subscribed to so they can stay in contact with you outside of ".concat(
                    H,
                    ". You can opt out of sharing your email address by unsubscribing in your Settings."
                  )
                )
              ) :
              c.createElement(
                O.R9, {
                  operation: "register",
                  newsletterV3: o,
                  collection: G,
                  actionUrl: e,
                  susiEntry: D,
                },
                c.createElement( d.w, n )
              )
            );
          },
          le = () => {
            return !E || F ?
              c.createElement( c.Fragment, null ) :
              W ?
              c.createElement(
                oe,
                null,
                "Emails will be sent to ",
                W.email,
                ".",
                c.createElement(
                  C.xu,
                  null,
                  c.createElement(
                    O.R9, {
                      operation: "login",
                      newsletterV3: o,
                      collection: G,
                      susiEntry: D,
                    },
                    c.createElement(
                      C.rU, {
                        onClick() {},
                        linkStyle: "OBVIOUS",
                        inline: !0,
                        target: "_blank",
                      },
                      "Not you?"
                    )
                  )
                )
              ) :
              c.createElement(
                oe,
                null,
                "Create a free Medium account to get ",
                o.name,
                " in your inbox."
              );
          };
        return c.createElement(
          c.Fragment,
          null,
          c.createElement( C.Yi, null, e => {
            return c.createElement(
              C.f6, {
                theme: ( 0, j.jN )( G, e )
              },
              te ?
              c.createElement(
                c.Fragment,
                null,
                c.createElement(
                  ie,
                  null,
                  c.createElement(
                    C.zx, {
                      buttonStyle: "SUBTLE",
                      size: "SMALL",
                      onClick() {
                        return re( !1 );
                      },
                    },
                    "Unsubscribe"
                  )
                ),
                E && c.createElement( oe, null, n )
              ) :
              c.createElement(
                I.cW, {
                  source: {
                    newsletterV3Id: o.id
                  },
                  extendSource: !0
                },
                c.createElement( ae, null ),
                c.createElement( le, null )
              )
            );
          } ),
          ne &&
          c.createElement( T.Z, {
            toastStyle: "RETRYABLE_ERROR",
            isVisible: ne,
            hide() {},
          } )
        );
      };
    },
    55346: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        QL: () => L,
        Lh: () => j
      } );
      const r = n( 28655 ),
        i = n.n( r ),
        o = n( 59713 ),
        a = n.n( o ),
        l = n( 63038 ),
        c = n.n( l ),
        s = n( 46829 ),
        u = n( 71439 ),
        d = n( 67294 ),
        m = n( 12291 ),
        b = n( 90194 ),
        p = n( 7530 ),
        f = n( 28309 ),
        w = {
          from: {
            transform: "rotate(0deg)"
          },
          to: {
            transform: "rotate(360deg)"
          },
        },
        E = e => {
          return t => {
            return {
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: ""
                .concat( t.baseColor.border.light, " transparent " )
                .concat( t.baseColor.border.light, " " )
                .concat( t.baseColor.border.light ),
              animation: "".concat( e, " 1s infinite linear;" ),
            };
          };
        },
        g = e => {
          const t = e.buttonSize,
            n = void 0 === t ? "LARGE" : t,
            r = e.buttonStyle,
            i = void 0 === r ? "STRONG" : r,
            o = ( 0, f.Iq )(),
            a = () => {
              const e = ( 0, f.om )( {
                keyframesName: w
              } ).keyframesName;
              return d.createElement( "div", {
                className: o( E( e ) )
              } );
            },
            l = () => {
              return d.createElement(
                p.xu,
                null,
                d.createElement(
                  p.xu, {
                    display: "inline-block",
                    float: "left",
                    marginRight: "8px",
                  },
                  d.createElement( a, null )
                ),
                d.createElement( p.xu, {
                  float: "left"
                }, "Loading.." )
              );
            };
          return d.createElement(
            "div", {
              style: {
                cursor: "wait"
              }
            },
            d.createElement(
              p.zx, {
                buttonStyle: i,
                onClick() {
                  return null;
                },
                size: n,
                width: "207px",
                disabled: !0,
              },
              d.createElement( l, null )
            )
          );
        },
        h = n( 90738 ),
        v = n( 14414 ),
        S = n( 31285 ),
        y = n( 7462 ),
        x = n( 64504 ),
        V = n( 27572 ),
        N = n( 37581 ),
        O = n( 49456 ),
        C = n( 51299 ),
        T = n( 27952 ),
        R = n( 534 );

      function I() {
        const e = i()( [
          "\n  fragment NewsletterV3SubscribeByEmail_newsletterV3 on NewsletterV3 {\n    id\n    slug\n    collection {\n      ...collectionDefaultBackgroundTheme_collection\n      ...collectionUrl_collection\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( I = () => {
            return e;
          } ),
          e;
      }

      function k() {
        const e = i()( [
          "\n  mutation SendNewsletterSubscriptionAcctAuthEmail(\n    $newsletterV3Id: String!\n    $email: String!\n    $redirect: String\n    $captchaValue: String\n    $operation: String\n  ) {\n    sendNewsletterSubscriptionAcctAuthEmail(\n      newsletterV3Id: $newsletterV3Id\n      email: $email\n      redirect: $redirect\n      captchaValue: $captchaValue\n      operation: $operation\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n",
        ] );
        return ( k = () => {
            return e;
          } ),
          e;
      }

      function P( e, t ) {
        const n = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          let r = Object.getOwnPropertySymbols( e );
          t &&
            ( r = r.filter( t => {
              return Object.getOwnPropertyDescriptor( e, t ).enumerable;
            } ) ),
            n.push.apply( n, r );
        }
        return n;
      }

      function _( e ) {
        for ( let t = 1; t < arguments.length; t++ ) {
          const n = null != arguments[ t ] ? arguments[ t ] : {};
          t % 2 ?
            P( Object( n ), !0 ).forEach( t => {
              a()( e, t, n[ t ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
            P( Object( n ) ).forEach( t => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor( n, t )
              );
            } );
        }
        return e;
      }

      var L = e => {
        const t = e.centerContent,
          n = void 0 !== t && t,
          r = e.newsletterV3,
          i = ( 0, f.Fg )(),
          o = ( 0, V.pK )(),
          a = ( 0, V.hp )(),
          l = ( 0, m.v9 )( e => {
            return {
              authDomain: e.config.authDomain,
              currentLocation: e.navigation.currentLocation,
              productName: e.config.productName,
            };
          }, m.wU ),
          u = l.authDomain,
          w = l.currentLocation,
          E = l.productName,
          I = d.useState( "" ),
          k = c()( I, 2 ),
          P = k[ 0 ],
          L = k[ 1 ],
          j = d.useState( "" ),
          B = c()( j, 2 ),
          D = B[ 0 ],
          U = B[ 1 ],
          M = d.useState( !1 ),
          F = c()( M, 2 ),
          W = F[ 0 ],
          $ = F[ 1 ],
          G = d.useState( !1 ),
          z = c()( G, 2 ),
          Y = z[ 0 ],
          q = z[ 1 ],
          H = d.useState( !1 ),
          Q = c()( H, 2 ),
          Z = Q[ 0 ],
          K = Q[ 1 ],
          X = d.useState( !1 ),
          J = c()( X, 2 ),
          ee = J[ 0 ],
          te = J[ 1 ],
          ne = d.useState( "" ),
          re = c()( ne, 2 ),
          ie = re[ 0 ],
          oe = re[ 1 ],
          ae = "register",
          le = null == w.match( "http[s]?://[^/]*".concat( u ) ),
          ce = r.collection,
          se = r.id,
          ue = r.slug,
          de = ( 0, T.Zu )( se ),
          me = ce ? ( 0, T.iB )( ue, u, ce ) : w;
        ( 0, s.useQuery )( S.qz, {
          fetchPolicy: "no-cache",
          skip: !de || le,
          onCompleted( e ) {
            const t = e.accountToken;
            return t && oe( ( 0, v.hQ )( me, o, a, de, t ) );
          },
        } );
        const be = e => {
            L( e ),
              $( !0 ),
              setTimeout( () => {
                return $( !1 );
              }, y.zn ),
              q( !1 ),
              K( !1 );
          },
          pe = () => {
            ( 0, O.J )( D ) ? ( K( !0 ), q( !0 ) ) : be( "Enter a valid email address." );
          },
          fe = () => {
            be(
              "We couldn't process your request. Try again, or contact our support team."
            );
          },
          we = ( 0, s.useMutation )( A, {
            onCompleted( e ) {
              switch ( e.sendNewsletterSubscriptionAcctAuthEmail.__typename ) {
                case "SusiMethod":
                  U( D ), te( !0 );
                  break;
                case "BadRequest":
                  be( "Enter a valid email address." );
                  break;
                case "FailedChallenge":
                case "NotFound":
                default:
                  fe();
              }
            },
            onError: fe,
          } ),
          Ee = c()( we, 1 )[ 0 ],
          ge = {
            newsletterV3Id: se,
            email: D,
            operation: ae,
            redirect: ie
          },
          he = ( 0, C.U )();
        return d.createElement(
          p.f6, {
            theme: ( 0, R.jN )( ce, i )
          },
          d.createElement(
            p.xu, {
              alignItems: n ? "center" : "flex-start",
              display: "flex",
              flexDirection: "column",
              justifyContent: n ? "center" : "flex-start",
            },
            d.createElement( h.k, {
              callback( e ) {
                Ee( {
                  variables: _( {
                    captchaValue: e
                  }, ge )
                } );
              },
              shouldExecuteRecaptcha: Y,
            } ),
            d.createElement(
              p.xu, {
                display: ee ? "none" : "inline"
              },
              d.createElement(
                p.xu, {
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  sm: {
                    alignItems: n ? "center" : "flex-start",
                    flexDirection: "column",
                    height: "130px",
                    paddingTop: "16px",
                  },
                  height: "56px",
                },
                d.createElement(
                  p.xu, {
                    marginTop: P && "25px",
                    sm: {
                      marginTop: "0"
                    }
                  },
                  d.createElement( y.II, {
                    errorMessage: P,
                    handleInputChange( e ) {
                      U( e.target.value.trim() );
                    },
                    handleSubmit: pe,
                    input: D,
                    inputType: y.n$.EMAIL,
                    isAnimating: W,
                    textAlign: "start",
                    placeholder: "Your email",
                    width: "".concat( {
                        xl: 375,
                        lg: 375,
                        md: 325,
                        sm: 450,
                        xs: 200,
                        "": 200,
                      } [ he ],
                      "px"
                    ),
                  } )
                ),
                d.createElement(
                  p.xu, {
                    marginBottom: "auto",
                    marginLeft: "15px",
                    sm: {
                      marginLeft: "0px",
                      marginTop: "15px"
                    },
                  },
                  Z ?
                  d.createElement( g, {
                    newsletterV3Id: se
                  } ) :
                  d.createElement(
                    N.$, {
                      eventData: {
                        operation: ae
                      }
                    },
                    d.createElement( b.w, {
                      newsletterV3Id: se,
                      onClick: pe,
                    } )
                  )
                )
              ),
              d.createElement(
                p.xu, {
                  paddingTop: P && "20px",
                  marginTop: "10px",
                  sm: {
                    marginTop: "0"
                  },
                },
                d.createElement(
                  x.F, {
                    color: "DARKER",
                    scale: "XS"
                  },
                  "By signing up, you will create a ",
                  E,
                  " account if you don''t already have one. Review our",
                  " ",
                  d.createElement(
                    p.rU, {
                      href: ( 0, T.wo )(),
                      linkStyle: "OBVIOUS",
                      inline: !0,
                      target: "_blank",
                    },
                    "Privacy Policy"
                  ),
                  " ",
                  "for more information about our privacy practices."
                )
              )
            ),
            d.createElement(
              p.xu, {
                display: ee ? "inline" : "none",
                marginBottom: "15px",
                marginTop: "5px",
              },
              d.createElement(
                x.F, {
                  color: "DARKER",
                  scale: "M"
                },
                d.createElement( "b", null, "Check your inbox" ),
                d.createElement( "br", null ),
                E,
                " sent you an email at ",
                D,
                " to complete your subscription."
              )
            )
          )
        );
      };

      const A = ( 0, u.Ps )( k() );
      var j = ( 0, u.Ps )( I(), R.Gi, T.nf );
    },
    51299: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        U: () => c
      } );
      const r = n( 63038 );
      const i = n.n( r );
      const o = n( 67294 );
      const a = n( 28309 );
      const l = n( 72955 );

      var c = () => {
        const e = ( 0, a.Fg )(),
          t = o.useState( "lg" ),
          n = i()( t, 2 ),
          r = n[ 0 ],
          c = n[ 1 ],
          s = () => {
            window.innerWidth >= e.breakpoints.xl ?
              c( "xl" ) :
              e.breakpoints.lg <= window.innerWidth &&
              window.innerWidth < e.breakpoints.xl ?
              c( "lg" ) :
              e.breakpoints.md <= window.innerWidth &&
              window.innerWidth < e.breakpoints.lg ?
              c( "md" ) :
              e.breakpoints.sm <= window.innerWidth &&
              window.innerWidth < e.breakpoints.md ?
              c( "sm" ) :
              c( "xs" );
          };
        return o.useEffect( () => {
            return s(),
              l.V6.on( "resize", s ),
              () => {
                return l.V6.off( "resize", s );
              };
          }, [] ),
          r;
      };
    },
  },
] );
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8751.99a9f2d4.chunk.js.map
