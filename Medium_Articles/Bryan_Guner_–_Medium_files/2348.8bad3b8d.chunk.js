( self.webpackChunklite = self.webpackChunklite || [] ).push( [
  [ 2348 ],
  {
    638: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        u: () => d
      } );
      const r = n( 63038 );
      const a = n.n( r );
      const o = n( 67294 );
      const c = n( 12291 );
      const l = n( 85740 );
      const i = n( 86280 );
      const u = n( 51512 );
      const s = n( 8403 );
      const m = n( 15412 );
      const p = n( 92154 );

      const f = () => {
        return null;
      };

      var d = () => {
        const e = ( 0, c.v9 )( e => {
          return e.config.isAmp;
        } );
        return ( 0, i.cD )().isBot || e ?
          null :
          o.createElement(
            l.bZ, {
              name: "dont_track_user",
              placeholder: f
            },
            e => {
              return e ?
                null :
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    "script",
                    null,
                    "window.PARSELY = window.PARSELY || {autotrack: false}"
                  ),
                  o.createElement( i.Q_, null, e => {
                    return o.createElement( h, {
                      viewer: e
                    } );
                  } )
                );
            }
          );
      };

      const h = e => {
        const t = e.viewer,
          n = ( 0, c.v9 )( e => {
            const t = e.navigation;
            return {
              currentLocation: t.currentLocation,
              referrer: t.referrer,
            };
          }, c.wU ),
          r = n.currentLocation,
          a = n.referrer,
          o = ( e => {
            return e ? ( e.mediumMemberAt ? "member" : "user" ) : "visitor";
          } )( t ),
          l = ( 0, s.PM )();
        return g( r, a, l, o ), null;
      };

      const g = ( e, t, n, r ) => {
        const c = ( 0, m.G )(
            "//d1z2jf7jlzjs58.cloudfront.net/keys/medium.com/p.js", {
              id: "parsely-cf",
            }
          ),
          l = a()( c, 2 ),
          i = l[ 0 ],
          u = l[ 1 ],
          s = ( 0, p.l )();
        o.useEffect(
          () => {
            i &&
              !u &&
              s( {
                resource() {
                  return window.PARSELY.beacon;
                },
                callback() {
                  return window.PARSELY.beacon.trackPageView( {
                    url: E( e, n ),
                    urlref: t,
                    js: 1,
                    data: {
                      viewerStatus: r
                    },
                  } );
                },
                max: 10,
              } );
          },
          [ e, t, i, u ]
        );
      };

      function E( e, t ) {
        if ( !e ) return "";
        if ( !t ) return e;
        const n = new URL( e ),
          r = ( 0, u.P7 )( t ),
          o = r.name,
          c = r.dimension;
        if ( ( o && n.searchParams.set( "utm_medium", o ), c ) ) {
          const l = c.split( "." ),
            i = a()( l, 3 ),
            s = i[ 0 ],
            m = i[ 1 ],
            p = i[ 2 ];
          s && n.searchParams.set( "utm_source", s ),
            m && n.searchParams.set( "utm_term", m ),
            p && n.searchParams.set( "utm_content", p );
        }
        return n.toString();
      }
    },
    94132: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        T: () => y
      } );
      const r = n( 59713 ),
        a = n.n( r ),
        o = n( 67294 ),
        c = n( 12291 ),
        l = n( 60046 ),
        i = n( 82418 ),
        u = n( 97145 ),
        s = n( 7530 ),
        m = n( 64504 ),
        p = n( 28309 ),
        f = n( 67122 ),
        d = n( 27952 );

      function h( e, t ) {
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
            h( Object( n ), !0 ).forEach( t => {
              a()( e, t, n[ t ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
            h( Object( n ) ).forEach( t => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor( n, t )
              );
            } );
        }
        return e;
      }

      const E = e => {
        const t = e.authDomain,
          n = e.productName;
        return o.createElement(
          s.xu, {
            flexGrow: "1",
            flexShrink: "1",
            flexBasis: "0",
            margin: "0 12px",
          },
          o.createElement(
            s.xu, {
              paddingBottom: "8px"
            },
            o.createElement(
              s.rU, {
                href: ( 0, d.GM )( t, n )
              },
              o.createElement( m.X6, {
                scale: "S"
              }, "Share your thinking." )
            )
          ),
          o.createElement(
            m.F, {
              scale: "M"
            },
            "If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It 's easy and free to post your thinking on any topic.",
            " ",
            o.createElement(
              s.rU, {
                href: ( 0, d.GM )( t, n ),
                inline: !0,
                linkStyle: "OBVIOUS"
              },
              "Write on ",
              n
            )
          )
        );
      };

      var y = e => {
        const t = e.slimFooter,
          n = ( 0, c.v9 )( e => {
            return {
              authDomain: e.config.authDomain,
              productName: e.config.productName,
            };
          }, c.wU ),
          r = n.authDomain,
          a = n.productName,
          h = ( 0, p.Fg )(),
          y = g(
            g( {}, h ), {}, {
              baseColor: g(
                g( {}, h.baseColor ), {}, {
                  background: {
                    light: f.Uy( 0.76 ),
                    normal: f.Uy( 0.84 ),
                    dark: f.Uy( 0.9 ),
                  },
                  border: {
                    lighter: f.l9( 0.1 ),
                    light: f.l9( 0.2 ),
                    normal: f.l9( 0.34 ),
                    dark: f.l9( 0.54 ),
                    darker: f.l9( 0.84 ),
                  },
                  fill: {
                    lighter: f.l9( 0.7 ),
                    light: f.l9( 0.8 ),
                    normal: f.l9( 0.98 ),
                    dark: f.l9( 0.99 ),
                    darker: f.l9( 1 ),
                  },
                  text: {
                    lighter: f.l9( 0.7 ),
                    light: f.l9( 0.8 ),
                    normal: f.l9( 0.98 ),
                    dark: f.l9( 0.99 ),
                    darker: f.l9( 1 ),
                  },
                }
              ),
            }
          );
        return o.createElement(
          s.f6, {
            theme: y
          },
          o.createElement(
            s.xu, {
              backgroundColor: "BASE_DARK",
              padding: "".concat( t ? "32px" : "60px", " 0" ),
              sm: {
                padding: "32px 0"
              },
            },
            o.createElement(
              s.Pm,
              null,
              t ?
              null :
              o.createElement(
                s.xu, {
                  borderBottom: "BASE_DARK",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "32px",
                  paddingBottom: "48px",
                  sm: {
                    display: "none"
                  },
                },
                o.createElement(
                  s.xu, {
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 -12px",
                  },
                  o.createElement(
                    s.xu, {
                      flexGrow: "1",
                      flexShrink: "1",
                      flexBasis: "0",
                      margin: "0 12px",
                    },
                    o.createElement(
                      s.xu, {
                        paddingBottom: "8px"
                      },
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.jQ )( {
                            authDomain: r,
                            autoplay: !0,
                          } ),
                        },
                        o.createElement(
                          m.X6, {
                            scale: "S"
                          },
                          "Learn more."
                        )
                      )
                    ),
                    o.createElement(
                      m.F, {
                        scale: "M"
                      },
                      a,
                      " is an open platform where 170 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface.",
                      " ",
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.jQ )( {
                            authDomain: r,
                            autoplay: !0,
                          } ),
                          inline: !0,
                          linkStyle: "OBVIOUS",
                        },
                        "Learn more"
                      )
                    )
                  ),
                  o.createElement(
                    s.xu, {
                      flexGrow: "1",
                      flexShrink: "1",
                      flexBasis: "0",
                      margin: "0 12px",
                    },
                    o.createElement(
                      s.xu, {
                        paddingBottom: "8px"
                      },
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.a4 )( r )
                        },
                        o.createElement(
                          m.X6, {
                            scale: "S"
                          },
                          "Make ",
                          a,
                          " yours."
                        )
                      )
                    ),
                    o.createElement(
                      m.F, {
                        scale: "M"
                      },
                      "Follow the writers, publications, and topics that matter to you, and you''ll see them on your homepage and in your inbox.",
                      " ",
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.a4 )( r ),
                          inline: !0,
                          linkStyle: "OBVIOUS",
                        },
                        "Explore"
                      )
                    )
                  ),
                  o.createElement( E, {
                    authDomain: r,
                    productName: a
                  } )
                )
              ),
              o.createElement(
                s.xu, {
                  display: "flex",
                  flexDirection: "column"
                },
                o.createElement(
                  s.xu, {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  },
                  o.createElement(
                    s.rU, {
                      href: "https://".concat( r, "/" ),
                      ariaLabel: "Go to homepage",
                    },
                    o.createElement( l.Rv, {
                      fill: f.ix
                    } )
                  ),
                  o.createElement(
                    s.xu, {
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "8px",
                      width: "200px",
                      sm: {
                        display: "flex",
                        width: "140px"
                      },
                    },
                    o.createElement(
                      m.F, {
                        color: "DARKER",
                        scale: "L"
                      },
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.jQ )( {
                            authDomain: r
                          } ),
                          inline: !0
                        },
                        "About"
                      )
                    ),
                    o.createElement(
                      m.F, {
                        color: "DARKER",
                        scale: "L"
                      },
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.Xp )(),
                          inline: !0
                        },
                        "Help"
                      )
                    ),
                    o.createElement(
                      m.F, {
                        color: "DARKER",
                        scale: "L"
                      },
                      o.createElement(
                        s.rU, {
                          href: ( 0, d.xB )(),
                          inline: !0
                        },
                        "Legal"
                      )
                    )
                  )
                ),
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    s.xu, {
                      display: "none",
                      sm: {
                        display: "flex",
                        marginBottom: "16px",
                        marginTop: "30px",
                      },
                    },
                    o.createElement(
                      m.F, {
                        color: "LIGHTER",
                        scale: "L"
                      },
                      "Get the Medium app"
                    )
                  ),
                  o.createElement(
                    s.xu, {
                      display: "none",
                      sm: {
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "16px",
                        width: "100%",
                      },
                    },
                    o.createElement(
                      s.xu, {
                        marginRight: "16px"
                      },
                      o.createElement( u.E, {
                        entryPoint: "postPageFooter"
                      } )
                    ),
                    o.createElement(
                      s.xu,
                      null,
                      o.createElement( i.H, {
                        entryPoint: "postPageFooter"
                      } )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    55503: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        r: () => y,
        C: () => v
      } );
      const r = n( 59713 ),
        a = n.n( r ),
        o = n( 28655 ),
        c = n.n( o ),
        l = n( 8575 ),
        i = n( 71439 ),
        u = n( 67294 ),
        s = n( 12291 ),
        m = n( 42963 ),
        p = n( 8403 ),
        f = n( 96879 ),
        d = n( 27952 );

      function h( e, t ) {
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
            h( Object( n ), !0 ).forEach( t => {
              a()( e, t, n[ t ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
            h( Object( n ) ).forEach( t => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor( n, t )
              );
            } );
        }
        return e;
      }

      function E() {
        const e = c()( [
          "\n  fragment UserCanonicalizer_user on User {\n    id\n    username\n    hasSubdomain\n    customDomainState {\n      live {\n        domain\n      }\n    }\n  }\n",
        ] );
        return ( E = () => {
            return e;
          } ),
          e;
      }
      var y = ( 0, i.Ps )( E() ),
        v = e => {
          let t;
          let n;
          const r = e.user;
          const a = e.children;

          const o = ( 0, s.v9 )( e => {
            const t = e.config,
              n = t.authDomain,
              r = t.nodeEnv,
              a = e.navigation;
            return {
              authDomain: n,
              currentLocation: a.currentLocation,
              host: a.host,
              nodeEnv: r,
            };
          }, s.wU );

          const c = o.authDomain;
          const i = o.currentLocation;
          const h = o.host;
          const E = o.nodeEnv;
          const y = ( 0, p.PM )();
          const v = ( 0, p.YF )();
          const w = ( 0, p.G1 )();
          const b = r.username;
          const x = r.hasSubdomain;

          const k =
            null === ( t = r.customDomainState ) ||
            void 0 === t ||
            null === ( n = t.live ) ||
            void 0 === n ?
            void 0 :
            n.domain;

          if ( !k && !x ) return a;

          const P = g(
            g( g( {}, y ? {
              source: y
            } : {} ), w ? {
              sk: w
            } : {} ),
            v ? {
              interstitial: v
            } : {}
          );

          const S = l.parse( i );
          const O = S.protocol;
          const D = S.host;
          const j = S.path;
          const R = new RegExp( "^/@".concat( b ), "i" );
          const U = null == j ? void 0 : j.replace( R, "" );
          const L = "development" === E && h.endsWith( ":8080" ) ? ":8080" : "";
          const C = "".concat( O, "//" ).concat( D );
          const B = "".concat( O, "//" ).concat( k ).concat( L );
          const A = "".concat( ( 0, d.Rt )( b, c ) );
          const _ = B === C;
          let F = null;
          return (
            k && !_ ?
            ( F = "".concat( B ).concat( U ) ) :
            x && A !== C && !_ && ( F = "".concat( A ).concat( U ) ),
            F ? u.createElement( m.Z, {
              to: ( 0, f.Rk )( F, P ),
              replace: !0
            } ) : a
          );
        };
    },
    40605: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        Z: () => v,
        g: () => w
      } );
      const r = n( 28655 ),
        a = n.n( r ),
        o = n( 34575 ),
        c = n.n( o ),
        l = n( 93913 ),
        i = n.n( l ),
        u = n( 2205 ),
        s = n.n( u ),
        m = n( 78585 ),
        p = n.n( m ),
        f = n( 29754 ),
        d = n.n( f ),
        h = n( 71439 ),
        g = n( 67294 ),
        E = n( 7530 );

      function y() {
        const e = a()( [
          "\n  fragment UserProfileNav_user on User {\n    id\n    navItems {\n      title\n      href: url\n    }\n  }\n",
        ] );
        return ( y = () => {
            return e;
          } ),
          e;
      }
      const v = ( e => {
        s()( a, e );
        let t;
        let n;

        const r =
          ( ( t = a ),
            ( n = ( () => {
              if ( "undefined" == typeof Reflect || !Reflect.construct )
                return !1;
              if ( Reflect.construct.sham ) return !1;
              if ( "function" == typeof Proxy ) return !0;
              try {
                return Date.prototype.toString.call(
                    Reflect.construct( Date, [], () => {} )
                  ),
                  !0;
              } catch ( e ) {
                return !1;
              }
            } )() ),
            function () {
              let e;
              const r = d()( t );
              if ( n ) {
                const a = d()( this ).constructor;
                e = Reflect.construct( r, arguments, a );
              } else e = r.apply( this, arguments );
              return p()( this, e );
            } );

        function a() {
          return c()( this, a ), r.apply( this, arguments );
        }
        return i()( a, [ {
            key: "render",
            value() {
              const e = this.props.user.navItems,
                t = [];
              return e &&
                ( e.forEach( e => {
                    const n = e.title,
                      r = e.href;
                    n && r && t.push( {
                      title: n,
                      href: r
                    } );
                  } ),
                  t.length ) ?
                g.createElement( E.LU, {
                  items: t
                } ) :
                null;
            },
          }, ] ),
          a;
      } )( g.Component );
      var w = ( 0, h.Ps )( y() );
    },
    45076: ( e, t, n ) => {
      "use strict";
      let r;
      n.d( t, {
        m: () => r
      } ), ( e => {
        ( e.Overview = "overview" ),
        ( e.Latest = "latest" ),
        ( e.Series = "series" ),
        ( e.Claps = "has-recommended" ),
        ( e.Highlights = "highlights" ),
        ( e.Responses = "responses" );
      } )( r || ( r = {} ) );
    },
    88479: ( e, t, n ) => {
      "use strict";
      n.d( t, {
        Z: () => h,
        k: () => g
      } );
      const r = n( 28655 ),
        a = n.n( r ),
        o = n( 71439 ),
        c = n( 67294 ),
        l = n( 70405 ),
        i = n( 12291 ),
        u = n( 40605 ),
        s = n( 45076 ),
        m = n( 90038 ),
        p = n( 27390 ),
        f = n( 27952 );

      function d() {
        const e = a()( [
          "\n  fragment UserProfileMetadata_user on User {\n    id\n    username\n    name\n    bio\n    imageId\n    twitterScreenName\n    userPostCounts {\n      publishedPosts\n    }\n    socialStats {\n      followerCount\n      followingCount\n    }\n    ...UserProfileNav_user\n    ...userUrl_user\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( d = () => {
            return e;
          } ),
          e;
      }

      function h( e ) {
        let t;
        let n;
        let r;
        let a;
        const o = e.tab;
        const u = e.user;
        const d = u.username;
        const h = u.imageId;
        const g = u.twitterScreenName;
        const E = u.navItems;
        const y = u.socialStats;
        const v = u.customDomainState;
        let w = u.name;
        let b = u.bio;

        const x = ( 0, i.v9 )( e => {
          return {
            authDomain: e.config.authDomain,
            productName: e.config.productName,
          };
        } );

        const k = x.authDomain;
        const P = x.productName;
        ( w = w || "Unknown" ),
        ( b = b || "" ) && ( b = b.match( /\.$/ ) ? b : "".concat( b, "." ) );
        let S = null;
        switch ( o ) {
          case s.m.Series:
            ( n = "Series written by ".concat( w, " – " ).concat( P ) ),
            ( r = "Read the latest series written by "
              .concat( w, " on " )
              .concat( P, ". " )
              .concat( b ) ),
            ( a = d ? ( 0, f.TP )( d ) : null );
            break;
          case s.m.Claps:
            ( n = "Stories ".concat( w, " clapped for – " ).concat( P ) ),
            ( r = "Discover all stories "
              .concat( w, " clapped for on " )
              .concat( P, ". " )
              .concat( b ) ),
            ( a = d ? ( 0, f.co )( d ) : null );
            break;
          case s.m.Highlights:
            ( n = "Story highlights by ".concat( w, " – " ).concat( P ) ),
            ( r = "Read all highlights by "
              .concat( w, " on " )
              .concat( P, ". " )
              .concat( b ) ),
            ( a = d ? ( 0, f.i$ )( d ) : null );
            break;
          case s.m.Responses:
            ( n = "Responses – ".concat( w, " – " ).concat( P ) ),
            ( r = "Responses published by "
              .concat( w, " on " )
              .concat( P, ". " )
              .concat( b ) ),
            ( a = d ? ( 0, f.hz )( d ) : null );
            break;
          default:
          case s.m.Overview:
            ( n = "".concat( w, " – " ).concat( P ) ),
            ( r = "Read writing from "
              .concat( w, " on " )
              .concat( P, ". " )
              .concat( b ) ).length < 150 &&
              ( r = ""
                .concat( r, " Every day, " )
                .concat(
                  w,
                  " and thousands of other voices read, write, and share important stories on "
                )
                .concat( P, "." ) ),
              ( a = d ? "/@".concat( d ) : null ),
              null != v &&
              null !== ( t = v.live ) &&
              void 0 !== t &&
              t.domain &&
              ( S = ( 0, f.AW )( u, k ) );
            break;
          case "about":
            ( n = "About – ".concat( w, " – " ).concat( P ) ),
            ( r = "About ".concat( w, " on " ).concat( P, ". " ).concat( b ) ),
            ( a = d ? ( 0, f.wF )( d ) : null );
            break;
          case "followers":
            const O =
              null != y && y.followerCount ? ( 0, p.rR )( y.followerCount ) : 0;
            ( n = "People following ".concat( w ) ),
            ( r = ""
              .concat( O, " people follow " )
              .concat( w, " on " )
              .concat( P, "." ) ),
            ( a = d ? ( 0, f.ol )( d ) : null );
            break;
          case "following":
            const D =
              null != y && y.followingCount ? ( 0, p.rR )( y.followingCount ) : 0;
            ( n = "People followed by ".concat( w ) ),
            ( r = ""
              .concat( w, " follows " )
              .concat( D, " people on " )
              .concat( P, "." ) ),
            ( a = d ? ( 0, f.Mz )( d ) : null );
        }
        const j = "https://".concat( k ).concat( a );
        null !== a && null === S && ( S = j );
        const R = a ? "medium:/".concat( a ) : null,
          U = a ? "medium:/".concat( a ) : null,
          L = h ?
          ( 0, m.W6 )( {
            miroId: h,
            width: 1200,
            strategy: m._S.Resample,
            height: NaN,
          } ) :
          null,
          C = w.split( " " ),
          B = 1 === C.length ? w : C[ 0 ],
          A = C.length > 1 ? C.slice( 1 ).join( " " ) : null;
        return c.createElement(
          l.q,
          null,
          c.createElement( "title", null, n ),
          c.createElement( "meta", {
            property: "og:title",
            content: n
          } ),
          c.createElement( "meta", {
            name: "description",
            content: r
          } ),
          c.createElement( "meta", {
            property: "og:description",
            content: r
          } ),
          c.createElement( "meta", {
            name: "twitter:description",
            content: r
          } ),
          E && 0 === E.length ?
          c.createElement( "meta", {
            name: "robots",
            content: "noindex,follow",
          } ) :
          null,
          S ? c.createElement( "link", {
            rel: "canonical",
            href: S
          } ) : null,
          S ?
          c.createElement( "meta", {
            property: "og:url",
            content: S
          } ) :
          null,
          S ?
          c.createElement( "meta", {
            property: "al:web:url",
            content: S
          } ) :
          null,
          R ?
          c.createElement( "meta", {
            property: "al:ios:url",
            content: R
          } ) :
          null,
          R ?
          c.createElement( "meta", {
            name: "twitter:app:url:iphone",
            content: R,
          } ) :
          null,
          U ?
          c.createElement( "meta", {
            property: "al:android:url",
            content: U,
          } ) :
          null,
          S ?
          c.createElement( "link", {
            rel: "alternate",
            href: ( 0, f.zi )( j )
          } ) :
          null,
          a ?
          c.createElement( "link", {
            id: "feedLink",
            rel: "alternate",
            type: "application/rss+xml",
            title: "RSS",
            href: "https://medium.com/feed".concat( a ),
          } ) :
          null,
          L ?
          c.createElement( "meta", {
            property: "og:image",
            content: L
          } ) :
          null,
          L ?
          c.createElement( "meta", {
            name: "twitter:image:src",
            content: L
          } ) :
          null,
          g ?
          c.createElement( "link", {
            rel: "me",
            href: "https://twitter.com/".concat( g ),
          } ) :
          null,
          d ?
          c.createElement( "meta", {
            property: "profile:username",
            content: d,
          } ) :
          null,
          B ?
          c.createElement( "meta", {
            property: "profile:first_name",
            content: B,
          } ) :
          null,
          A ?
          c.createElement( "meta", {
            property: "profile:last_name",
            content: A,
          } ) :
          null,
          c.createElement( "meta", {
            property: "og:type",
            content: "profile"
          } ),
          c.createElement( "meta", {
            name: "twitter:card",
            content: "summary"
          } )
        );
      }
      var g = ( 0, o.Ps )( d(), u.g, f.$m );
    },
  },
] );
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2348.8bad3b8d.chunk.js.map
