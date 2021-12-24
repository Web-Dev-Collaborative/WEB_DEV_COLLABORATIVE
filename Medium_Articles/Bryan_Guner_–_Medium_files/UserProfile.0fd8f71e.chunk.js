( self.webpackChunklite = self.webpackChunklite || [] ).push( [
  [ 6918 ],
  {
    94559: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        Nx: () => x,
        Vz: () => U,
        Kw: () => C
      } );
      const t = r( 28655 ),
        i = r.n( t ),
        o = r( 50008 ),
        a = r.n( o ),
        l = r( 63038 ),
        s = r.n( l ),
        u = r( 71439 ),
        c = r( 67294 ),
        m = r( 28859 ),
        d = r( 22669 ),
        f = r( 78886 ),
        p = r( 51684 ),
        g = r( 8558 ),
        v = r( 7530 ),
        h = r( 64504 ),
        E = r( 67995 ),
        S = r( 28309 ),
        y = r( 90038 );

      function b() {
        const e = i()( [
          "\n  fragment PublisherSidebarWithBlogrolls_publisher on Publisher {\n    __typename\n    id\n    name\n    ... on Collection {\n      ...PublisherSidebarWithBlogrolls_collection\n    }\n    ... on User {\n      ...PublisherSidebarWithBlogrolls_user\n      ...PublisherSidebarFollows_user\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( b = () => {
            return e;
          } ),
          e;
      }

      function P() {
        const e = i()( [
          "\n  fragment PublisherSidebarWithBlogrolls_user on User {\n    id\n    username\n    bio\n    name\n    imageId\n  }\n",
        ] );
        return ( P = () => {
            return e;
          } ),
          e;
      }

      function w() {
        const e = i()( [
          "\n  fragment PublisherSidebarWithBlogrolls_collection on Collection {\n    id\n    name\n    tagline\n  }\n",
        ] );
        return ( w = () => {
            return e;
          } ),
          e;
      }

      var x = c.forwardRef( ( e, n ) => {
        const r = e.publisher,
          t = e.isClearOfBounds,
          i = c.useRef( null ),
          o = c.useState( 0 ),
          l = s()( o, 2 ),
          u = l[ 0 ],
          b = l[ 1 ],
          P = c.useState( 0 ),
          w = s()( P, 2 ),
          x = w[ 0 ],
          I = w[ 1 ],
          U = c.useContext( m.u6 ).watchedBounds,
          C = c.useState( t || !1 ),
          R = s()( C, 2 ),
          O = R[ 0 ],
          $ = R[ 1 ],
          k = c.useState( {} ),
          B = s()( k, 2 ),
          D = B[ 0 ],
          T = D.topOffset,
          M = D.fixedWidth,
          Z = D.isFixed,
          A = B[ 1 ],
          F = c.useCallback(
            () => {
              let e;
              !( ( e, n, r, t ) => {
                r( ( 0, p.b2 )( e, n, [ "footer" ], {
                  threshold: 10
                } ) );
              } )( i, U, $ );
              const n = null == i ? void 0 : i.current,
                r = null == n ? void 0 : n.clientHeight;
              if (
                n &&
                r &&
                null !== ( e = window ) &&
                void 0 !== e &&
                e.innerHeight
              ) {
                let t;
                const o = n.getBoundingClientRect().top;
                const a = window.innerHeight - o;
                if ( u && a - r > 50 ) b( 0 );
                else if (
                  a <= r &&
                  ( ( null === ( t = window ) || void 0 === t ?
                      void 0 :
                      t.innerHeight ) !== x ||
                    !u )
                ) {
                  let l;
                  b( a - 25 ),
                    I(
                      null === ( l = window ) || void 0 === l ?
                      void 0 :
                      l.innerHeight
                    );
                }
              }
            },
            [ U, n, x, u ]
          ),
          L = c.useCallback(
            () => {
              _( U, A, n );
            },
            [ U, n ]
          ),
          H = "object" === a()( n ) ? n : null,
          W = ( null == H ? void 0 : H.current ) || void 0;
        c.useEffect( ( 0, p.hE )( F, W, !0 ), [ F, null == H ? void 0 : H.current ] ),
          c.useEffect( ( 0, p.hE )( L, W, !1 ), [
            L,
            null == H ? void 0 : H.current,
          ] ),
          c.useEffect(
            () => {
              void 0 === Z &&
                setTimeout( () => {
                  _( U, A, n );
                }, 50 );
            },
            [ U, A ]
          ),
          c.useEffect(
            () => {
              L(), F();
            },
            [ U ]
          );
        const N = "User" === r.__typename ? r.bio : r.tagline,
          z = "User" === r.__typename ? void 0 : 6,
          j = O && void 0 !== Z,
          q = ( 0, S.Iq )(),
          X = ( 0, E.n )( {
            name: "heading",
            scale: "XS"
          } );
        return c.createElement(
          p.HX, {
            scrollableRef: n,
            sidebarRef: i,
            visible: j,
            isFixed: Z,
            topOffset: T,
            fixedWidth: M,
            disableTransition: !0,
          },
          c.createElement(
            "div", {
              className: u ?
                q( {
                  maxHeight: "".concat( u, "px" ),
                  overflowY: "auto"
                } ) :
                void 0,
            },
            "User" === r.__typename &&
            r.imageId &&
            c.createElement(
              v.xu, {
                marginBottom: "24px",
                maxHeight: "131px",
                maxWidth: "131px",
                overflow: "hidden",
              },
              c.createElement( g.Ee, {
                src: ( 0, y.W6 )( {
                  miroId: r.imageId,
                  width: 131,
                  height: 131,
                  strategy: y._S.Crop,
                } ),
                width: 131,
              } )
            ),
            c.createElement(
              v.xu, {
                marginBottom: "8px"
              },
              c.createElement(
                "h2", {
                  className: q( [ X, {
                    wordBreak: "break-word"
                  } ] )
                },
                r.name
              )
            ),
            c.createElement(
              v.xu, {
                marginBottom: "32px"
              },
              c.createElement(
                h.F, {
                  scale: "M",
                  clamp: z
                },
                c.createElement( d.Z, {
                  wrapLinks: !0
                }, N )
              )
            ),
            "User" === r.__typename ?
            c.createElement( f.eB, {
              publisher: r
            } ) :
            null
          )
        );
      } );

      const _ = ( e, n, r ) => {
        let t;
        let i;
        let o;
        let l;
        let s;
        let u;

        const c =
          null === ( t = e.get( "header" ) ) ||
          void 0 === t ||
          null === ( i = t.ref ) ||
          void 0 === i ?
          void 0 :
          i.current;

        const m =
          null === ( o = e.get( "ghost-track" ) ) ||
          void 0 === o ||
          null === ( l = o.ref ) ||
          void 0 === l ?
          void 0 :
          l.current;

        const d = "object" === a()( r ) ? ( null == r ? void 0 : r.current ) : null;
        if ( "undefined" != typeof window && c && m ) {
          const f = d ? d.scrollTop : window.scrollY,
            p = null == d ? void 0 : d.getBoundingClientRect(),
            g =
            null !== ( s = null == p ? void 0 : p.top ) && void 0 !== s ?
            s :
            0,
            v =
            null !== ( u = null == p ? void 0 : p.width ) && void 0 !== u ?
            u :
            0,
            h = c.offsetTop + c.offsetHeight + 64,
            E = f + 150 > h;
          n( {
            topOffset: E ? 150 + g : h,
            fixedWidth: E ? v : 0,
            isFixed: E,
          } );
        } else n( {
          isFixed: void 0,
          topOffset: void 0
        } );
      };

      const I = ( 0, u.Ps )( w() );
      var U = ( 0, u.Ps )( P() );
      var C = ( 0, u.Ps )( b(), I, U, f.FB );
    },
    51684: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        ZR: () => p,
        HX: () => v,
        b2: () => h,
        hE: () => E
      } );
      const t = r( 59713 );
      const i = r.n( t );
      const o = r( 67294 );
      const a = r( 28859 );
      const l = r( 43689 );
      const s = r( 85740 );
      const u = r( 7530 );
      const c = r( 28309 );
      const m = r( 27108 );
      const d = r( 89349 );
      const f = r( 21146 );
      var p = 131;

      const g = e => {
        return {
          pointerEvents: e ? "auto" : "none"
        };
      };

      var v = e => {
        const n = e.children,
          r = e.disableTransition,
          t = e.isFixed,
          m = e.scrollableRef,
          f = e.sidebarRef,
          v = e.testId,
          h = e.topOffset,
          E = e.visible,
          S = e.fixedWidth,
          y = ( 0, c.Iq )(),
          b = ( e => {
            let n;
            let r;
            let t;
            const s = e.isFixed;
            const u = void 0 === s || s;
            const c = e.disableTransition;
            const m = void 0 !== c && c;
            const f = e.scrollableRef;
            const p = e.topOffset;
            const g = e.visible;
            const v = e.fixedWidth;

            const h = ( t =
                null ===
                ( n = o.useContext( a.u6 ).watchedBounds.get( "header" ) ) ||
                void 0 === n ||
                null === ( r = n.ref ) ||
                void 0 === r ?
                void 0 :
                r.current ) ?
              t.offsetTop + t.offsetHeight + 64 :
              l.Je + 54 + 40;

            return e => {
              return n => {
                let r;

                const t = ( 0, d.uc )(
                  n,
                  e,
                  n.grid.xStep * n.grid.marginSteps.lg,
                  f && "current" in f ? f.current : null
                );

                const o = void 0 === p ? h : p;
                return (
                  ( r = {
                    opacity: g ? 1 : 0,
                    pointerEvents: "none",
                    position: u ? "fixed" : "absolute",
                    willChange: "opacity, transform",
                    width: v ? "".concat( v, "px" ) : "100%",
                    transform: "translateY(".concat( o, "px)" ),
                    top: 0,
                  } ),
                  i()( r, ( 0, d.nk )( "no-preference" ), {
                    transition: m ? "opacity 0s" : "opacity 200ms",
                  } ),
                  i()( r, t, {
                    display: "none"
                  } ),
                  r
                );
              };
            };
          } )( {
            isFixed: t,
            scrollableRef: m,
            topOffset: h,
            visible: E,
            disableTransition: r,
            fixedWidth: S,
          } ),
          P = e => {
            return o.createElement(
              "div", {
                className: y( b( e ) ),
                "data-test-id": v
              },
              o.createElement(
                u.Pm, {
                  size: "outset"
                },
                o.createElement(
                  u.xu, {
                    display: "flex",
                    flexDirection: "column",
                    width: "".concat( e, "px" ),
                    ref: f,
                  },
                  o.createElement( "div", {
                    className: y( g( E ) )
                  }, n )
                )
              )
            );
          };
        return o.createElement(
          s.bZ, {
            name: "enable_blogrolls",
            placeholder() {
              return P( p );
            },
          },
          e => {
            return P( e ? 197 : p );
          }
        );
      };

      var h = ( e, n, r, t ) => {
        const i = e.current;
        if ( !i ) return !1;
        const o = t.threshold || 10,
          a = Array.from( n.values() )
          .filter( e => {
            let n;
            const t = e.ref;
            const i = e.opts;
            return (
              r.includes( null !== ( n = i.type ) && void 0 !== n ? n : "" ) &&
              !!t.current
            );
          } )
          .map( e => {
            const n = e.ref,
              r = e.opts,
              t = r && r.offset,
              i = ( 0, f.L6 )( n.current );
            return ( 0, f.Dd )( i, t );
          } ),
          l = ( 0, f.L6 )( i );
        return !a.some( e => {
          return ( 0, f.kK )( e, l, o );
        } );
      };

      var E = function ( e, n ) {
        const r = !( arguments.length > 2 && void 0 !== arguments[ 2 ] ) ||
          arguments[ 2 ],
          t = r ? "scroll_throttled" : "scroll";
        return () => {
          const r = ( 0, m.jC )( null != n ? n : void 0 );
          return r.on( t, e ),
            r.on( "scroll_end", e ),
            r.on( "resize_throttled", e ),
            () => {
              r.off( t, e ),
                r.off( "scroll_end", e ),
                r.off( "resize_throttled", e );
            };
        };
      };
    },
    85714: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        ZP: () => m,
        v: () => d,
        QX: () => f
      } );
      const t = r( 28655 ),
        i = r.n( t ),
        o = r( 71439 ),
        a = r( 67294 ),
        l = r( 12291 ),
        s = r( 85277 );

      function u() {
        const e = i()( [
          "\n  fragment SuspendedBannerLoader_post on Post {\n    id\n    isSuspended\n  }\n",
        ] );
        return ( u = () => {
            return e;
          } ),
          e;
      }

      function c() {
        const e = i()( [
          "\n  fragment SuspendedBannerLoader_user on User {\n    id\n    isSuspended\n  }\n",
        ] );
        return ( c = () => {
            return e;
          } ),
          e;
      }
      const m = ( 0, l.$j )()( e => {
        const n = e.dispatch,
          r = e.user,
          t = e.post;
        return a.useEffect( () => {
            r && r.isSuspended ?
              n(
                ( 0, s.Dx )( {
                  duration: "NEXTPAGE",
                  message: "",
                  toastStyle: "USER_SUSPENDED",
                } )
              ) :
              t &&
              t.isSuspended &&
              n(
                ( 0, s.Dx )( {
                  duration: "NEXTPAGE",
                  message: "",
                  toastStyle: "POST_SUSPENDED",
                  extraParams: {
                    postId: ( null == t ? void 0 : t.id ) || ""
                  },
                } )
              );
          }, [] ),
          null;
      } );
      var d = ( 0, o.Ps )( c() ),
        f = ( 0, o.Ps )( u() );
    },
    65314: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        L: () => _,
        Z: () => I
      } );
      const t = r( 28655 ),
        i = r.n( t ),
        o = r( 34575 ),
        a = r.n( o ),
        l = r( 93913 ),
        s = r.n( l ),
        u = r( 2205 ),
        c = r.n( u ),
        m = r( 78585 ),
        d = r.n( m ),
        f = r( 29754 ),
        p = r.n( f ),
        g = r( 71439 ),
        v = r( 93022 ),
        h = r( 67294 ),
        E = r( 12291 );
      const S = e => {
        let n = e.children;
        const r = e.omitAnd;
        const t = void 0 !== r && r;

        const i = ( n = n.filter( e => {
          return !!e;
        } ) ).length;

        const o = [];
        return 1 === i ?
          o.push( n[ 0 ] ) :
          2 === i ?
          o.push( n[ 0 ], t ? ", " : " and ", n[ 1 ] ) :
          n.forEach( ( e, n ) => {
            if ( ( o.push( e ), n < i - 2 ) ) o.push( ", " );
            else if ( n === i - 2 ) {
              const r = t ? ", " : ", and ";
              o.push( r );
            }
          } ),
          o;
      };
      const y = r( 7530 ),
        b = r( 64504 ),
        P = r( 27952 );

      function w() {
        const e = i()( [
          "\n  fragment UserProfileSummary_user on User {\n    id\n    mediumMemberAt\n    userMeta {\n      collections {\n        name\n        slug\n        id\n        ...collectionUrl_collection\n      }\n      topWriterInTags {\n        id\n        displayTitle\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( w = () => {
            return e;
          } ),
          e;
      }

      const x = ( e => {
        c()( i, e );
        let n;
        let r;

        const t =
          ( ( n = i ),
            ( r = ( () => {
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
              const t = p()( n );
              if ( r ) {
                const i = p()( this ).constructor;
                e = Reflect.construct( t, arguments, i );
              } else e = t.apply( this, arguments );
              return d()( this, e );
            } );

        function i() {
          return a()( this, i ), t.apply( this, arguments );
        }
        return s()( i, [ {
            key: "render",
            value() {
              let e;
              let n;
              const r = this.props;
              const t = r.currentLocation;
              const i = r.productName;
              const o = r.authDomain;
              const a = r.entityType;
              const l = r.user;
              const s = r.scale;
              const u = void 0 === s ? "M" : s;
              const c = l.mediumMemberAt;
              const m = l.userMeta;
              const d = ( m && m.collections ) || [];
              c &&
                ( e = h.createElement(
                  y.xu, {
                    display: "inline"
                  },
                  ""
                  .concat( i, " member since " )
                  .concat( ( 0, v.Z )( c, "LLLL yyyy" ) )
                ) );
              let f;

              const p = d.filter( e => {
                return e && e.name && ( e.slug || e.id );
              } );

              p.length &&
                ( n = h.createElement(
                  y.xu, {
                    display: "inline"
                  },
                  "Editor of ",
                  h.createElement(
                    S,
                    null,
                    p.map( ( e, n ) => {
                      return e && e.name ?
                        h.createElement(
                          y.rU, {
                            key: n,
                            href: ( 0, P.WG )( e, t, o ),
                            inline: !0,
                          },
                          e.name
                        ) :
                        null;
                    } )
                  )
                ) ),
                m &&
                m.topWriterInTags &&
                m.topWriterInTags.length > 0 &&
                ( f = h.createElement(
                  y.xu, {
                    display: "inline"
                  },
                  "Top writer in ",
                  h.createElement(
                    S, {
                      omitAnd: !0
                    },
                    m.topWriterInTags.map( ( e, n ) => {
                      return e && e.id && e.displayTitle ?
                        h.createElement(
                          "span", {
                            key: n
                          },
                          h.createElement(
                            y.rU, {
                              href: ( 0, P.HY )( e.id, o, a ),
                              inline: !0
                            },
                            e.displayTitle
                          )
                        ) :
                        null;
                    } )
                  )
                ) );
              const g = h.createElement(
                  y.xu, {
                    display: "inline",
                    marginLeft: "6px",
                    marginRight: "6px",
                  },
                  "·"
                ),
                E = e && n,
                w = ( n && f ) || ( e && f );
              return h.createElement(
                b.F, {
                  scale: u,
                  tag: "span"
                },
                e,
                E && g,
                n,
                w && g,
                f
              );
            },
          }, ] ),
          i;
      } )( h.Component );

      var _ = ( 0, g.Ps )( w(), P.nf );
      const I = ( 0, E.$j )( e => {
        const n = e.config,
          r = n.productName,
          t = n.authDomain;
        return {
          currentLocation: e.navigation.currentLocation,
          productName: r,
          authDomain: t,
          entityType: e.client.routingEntity.type,
        };
      } )( x );
    },
    48603: ( e, n, r ) => {
      "use strict";
      r.r( n ),
        r.d( n, {
          PreAuroraUserProfileHandler: () => In,
          UserProfileHandler: () => _n,
          UserProfileHandlerQuery: () => wn,
        } );
      const t = r( 63038 ),
        i = r.n( t ),
        o = r( 28655 ),
        a = r.n( o ),
        l = r( 46829 ),
        s = r( 71439 ),
        u = r( 67294 ),
        c = r( 42963 ),
        m = r( 27781 ),
        d = r( 7208 ),
        f = r( 55503 ),
        p = r( 45076 ),
        g = r( 319 ),
        v = r.n( g ),
        h = r( 59713 ),
        E = r.n( h ),
        S = r( 82492 ),
        y = r.n( S ),
        b = r( 12291 ),
        P = r( 86280 ),
        w = r( 59317 ),
        x = r( 28859 ),
        _ = r( 638 ),
        I = r( 45113 ),
        U = r( 2955 ),
        C = r( 94132 ),
        R = r( 47012 ),
        O = r( 36698 ),
        $ = r( 7678 ),
        k = r( 94559 ),
        B = r( 55127 ),
        D = r( 73036 ),
        T = r( 49925 ),
        M = r( 56365 ),
        Z = r( 85740 ),
        A = r( 85714 ),
        F = r( 98281 ),
        L = r( 93874 ),
        H = r( 7530 ),
        W = r( 62630 ),
        N = r( 28309 ),
        z = r( 88479 ),
        j = r( 31517 ),
        q = r( 85277 ),
        X = r( 172 ),
        V = r( 8403 ),
        Q = r( 30389 ),
        Y = r( 27140 ),
        G = r( 90038 ),
        K = r( 534 );

      function J() {
        const e = a()( [
          "\n  fragment ProfilePubScreen_user on User {\n    id\n    viewerIsUser\n    customStyleSheet {\n      id\n      ...CustomBackgroundWrapper_customStyleSheet\n      ...MetaHeader_customStyleSheet\n      ...customDefaultBackgroundTheme_customStyleSheet\n      ...customStyleSheetFontTheme_customStyleSheet\n    }\n    ...MetaHeader_publisher\n    ...PublisherHomepagePosts_publisher\n    ...PublisherSidebar_user\n    ...PublisherSidebarWithBlogrolls_user\n    ...UserSubdomainFlow_user\n    ...UserProfileMetadata_user\n    ...SuspendedBannerLoader_user\n    ...TruncatedPostCard_user\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( J = () => {
            return e;
          } ),
          e;
      }
      const ee = () => {
          return null;
        },
        ne = e => {
          let n;
          let r;
          const t = e.user;
          const i = e.fetchMoreHomepagePosts;
          const o = ( 0, N.Fg )();
          const a = ( 0, K.ZI )( t.customStyleSheet, ( 0, K.zI )( t.customStyleSheet, o ) );
          const l = ( 0, W.Av )();
          const s = ( 0, b.I0 )();
          const c = ( 0, P.YC )().value;
          const m = ( 0, P.rZ )();
          const d = m.loading;
          const f = m.viewerId;
          const g = ( 0, q.w )();

          const v = ( 0, b.v9 )( e => {
            return e.navigation.referrer;
          } );

          const h = ( 0, Q.P )();
          const E = h.inAppBrowser;
          const S = h.loading;
          const y = ( 0, V.YF )();
          const w = ( 0, V.PM )();
          u.useEffect(
            () => {
              if ( !d && f && !S ) {
                l.event( "profile.viewed", {
                    profileId: t.id
                  } ),
                  "unsubscribe-newsletter" === y &&
                  ( t.viewerIsUser ?
                    g( {
                      duration: "NEXTPAGE",
                      message: "You cannot unsubscribe from yourself.",
                    } ) :
                    g( {
                      duration: "NEXTPAGE",
                      message: "",
                      toastStyle: "NEWSLETTER_UNSUBSCRIBE",
                      extraParams: {
                        newsletterName: t.name || ""
                      },
                    } ) );
                const e = ( 0, I.RD )( {
                  inAppBrowser: E,
                  referrer: v,
                  referrerSource: w,
                  viewer: c,
                  page_type: "profile",
                  profile_name: t.name,
                  profile_photo: ( 0, G.W6 )( {
                    miroId: t.imageId || F.Ei,
                    width: 64,
                    height: 64,
                    strategy: G._S.Resample,
                  } ),
                  profile_username: t.username,
                  currentUserId: f,
                } );
                ( 0, I.Pu )( e ),
                s( ( 0, X.aj )( e ) ),
                  s( ( 0, X.QZ )() ),
                  s( ( 0, X.Dl )( !!t.viewerIsUser ) );
              }
            },
            [ d, f, S, E ]
          );
          const U = ( 0, T.KW )( t || null );
          ( 0, Y.D )( U ) !== U && s( ( 0, j.t )( U || !1 ) );
          const J = !( 0, R.I_ )( {
              publisher: t,
              customStyleSheet: t.customStyleSheet,
            } ),
            ne = u.createElement( $.w3, {
              publisher: t
            } );
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              x.Am,
              null,
              u.createElement( _.u, null ),
              u.createElement(
                Z.bZ, {
                  name: "can_view_suspended_content",
                  placeholder: ee
                },
                e => {
                  return e ? u.createElement( A.ZP, {
                    user: t
                  } ) : null;
                }
              ),
              u.createElement( z.Z, {
                tab: p.m.Overview,
                user: t
              } ),
              u.createElement(
                H.f6, {
                  theme: a
                },
                u.createElement(
                  M.f, {
                    customStyleSheet: null == t ? void 0 : t.customStyleSheet,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                  },
                  u.createElement(
                    x.TA, {
                      name: "header",
                      type: "header"
                    },
                    u.createElement( R.Go, {
                      customStyleSheet: null == t ? void 0 : t.customStyleSheet,
                      publisher: t,
                    } ),
                    u.createElement( B.z, {
                      headerScale: null == t ||
                        null === ( n = t.customStyleSheet ) ||
                        void 0 === n ||
                        null === ( r = n.header ) ||
                        void 0 === r ?
                        void 0 :
                        r.headerScale,
                      publisher: t,
                    } )
                  ),
                  u.createElement(
                    H.xu, {
                      flexGrow: "1"
                    },
                    u.createElement(
                      D.M,
                      null,
                      u.createElement( O.IX, {
                        publisher: t,
                        fetchMore: i
                      } )
                    )
                  ),
                  J &&
                  u.createElement(
                    Z.bZ, {
                      name: "enable_blogrolls",
                      placeholder() {
                        return ne;
                      },
                    },
                    e => {
                      return e ? u.createElement( k.Nx, {
                        publisher: t
                      } ) : ne;
                    }
                  ),
                  u.createElement(
                    H.xu, {
                      marginTop: "50px"
                    },
                    u.createElement(
                      x.TA, {
                        name: "footer",
                        type: "footer"
                      },
                      u.createElement( C.T, {
                        slimFooter: !0
                      } )
                    )
                  )
                )
              )
            ),
            u.createElement( L.h, {
              user: t,
              redirectOnComplete: !0
            } )
          );
        },
        re = ( 0, s.Ps )(
          J(),
          M.w,
          R.aU,
          R.Mv,
          O.Yz,
          $.Do,
          k.Vz,
          L.k,
          z.k,
          K.Ui,
          K.VE,
          A.v,
          U.Dc
        ),
        te = r( 51512 ),
        ie = r( 52837 ),
        oe = r( 61250 ),
        ae = r( 79853 ),
        le = r( 90320 ),
        se = r( 80177 ),
        ue = r( 77455 );

      function ce( e, n ) {
        const r = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          let t = Object.getOwnPropertySymbols( e );
          n &&
            ( t = t.filter( n => {
              return Object.getOwnPropertyDescriptor( e, n ).enumerable;
            } ) ),
            r.push.apply( r, t );
        }
        return r;
      }

      function me( e ) {
        for ( let n = 1; n < arguments.length; n++ ) {
          const r = null != arguments[ n ] ? arguments[ n ] : {};
          n % 2 ?
            ce( Object( r ), !0 ).forEach( n => {
              E()( e, n, r[ n ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) :
            ce( Object( r ) ).forEach( n => {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor( r, n )
              );
            } );
        }
        return e;
      }

      function de() {
        const e = a()( [
          "\n    mutation followUser($targetUserId: ID!) {\n      followUser(targetUserId: $targetUserId) {\n        id\n        isFollowing\n      }\n    }\n  ",
        ] );
        return ( de = () => {
            return e;
          } ),
          e;
      }

      function fe() {
        const e = a()( [
          "\n  query ProfilePubHandlerQuery(\n    $id: ID\n    $username: ID\n    $homepagePostsLimit: PaginationLimit\n    $homepagePostsFrom: String\n    $includeDistributedResponses: Boolean\n  ) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        isFollowing\n        name\n        username\n        viewerIsUser\n        ...ProfilePubScreen_user\n      }\n    }\n    oneClickFollowEligibility(username: $username, userId: $id)\n  }\n  ",
          "\n",
        ] );
        return ( fe = () => {
            return e;
          } ),
          e;
      }
      const pe = ( 0, s.Ps )( fe(), re ),
        ge = e => {
          let n;
          let r;
          let t;
          const o = e.match.params.username;
          const a = ( 0, V.PM )();
          const c = ( 0, P.YC )().value;
          const m = null == c ? void 0 : c.id;
          const d = !!c;
          const f = ( 0, oe.k6 )();
          const p = f && f.type === ie.Cr.USER ? f.id : null;

          const g = ( 0, l.useQuery )( pe, {
            variables: {
              id: p,
              username: o,
              homepagePostsLimit: 10,
              includeDistributedResponses: !0,
            },
          } );

          const h = g.loading;
          const E = g.error;
          let S = g.data;

          const x = ( S =
            void 0 === S ?
            {
              userResult: void 0,
              oneClickFollowEligibility: void 0
            } :
            S ).userResult;

          const _ = S.oneClickFollowEligibility;
          const I = g.fetchMore;
          const U = ( 0, q.w )();
          const C = ( 0, W.Av )();
          const R = ( x && "User" === x.__typename && x.name ) || "";
          const O = ( 0, te.P7 )( a || "" );
          const $ = O.name;
          const k = void 0 === $ ? "" : $;
          const B = O.susiEntry;
          const D = void 0 === B ? "" : B;
          const T = "follow" === ( 0, ue.K )().get( "intent" ) && !!_;
          const M = "login" === k && "follow_oneclick" === D;
          const Z = ( 0, s.Ps )( de() );

          const A = ( 0, l.useMutation )( Z, {
            onCompleted() {
              U( {
                message: "",
                toastStyle: "SUBSCRIBE_SUCCESS",
                extraParams: {
                  name: R
                },
              } );
            },
            onError() {
              return U( {
                message: "",
                toastStyle: "SUBSCRIBE_FAIL"
              } );
            },
          } );

          const F = i()( A, 2 );
          const L = F[ 0 ];
          const H = F[ 1 ].error;
          const N = ( 0, w.j )().openModal;

          const z = ( 0, b.v9 )( e => {
            return e.config;
          } ).authDomain;

          if (
            ( u.useEffect(
                () => {
                  if ( "User" === ( null == x ? void 0 : x.__typename ) ) {
                    const e = x.id,
                      n = x.isFollowing,
                      r = x.viewerIsUser;
                    x.username &&
                      ( T || M ) &&
                      ( C.event( "oneclickfollow.profile.visit", {
                          authorId: e,
                          userId: m,
                          referrerSource: a,
                        } ),
                        d ?
                        r ?
                        U( {
                          message: "",
                          toastStyle: "SUBSCRIBE_SELF"
                        } ) :
                        ( !e ||
                          n ||
                          r ||
                          ( L( {
                              optimisticResponse: {
                                followUser: me(
                                  me( {}, x ), {}, {
                                    id: e,
                                    isFollowing: !0
                                  }
                                ),
                              },
                              variables: {
                                targetUserId: e
                              },
                            } ),
                            H ||
                            C.event( "user.followed", {
                              targetUserId: e,
                              followSource: "follow_oneclick",
                            } ) ),
                          n &&
                          ( M || T ) &&
                          U( {
                            message: "",
                            toastStyle: "SUBSCRIBED_ALREADY",
                            extraParams: {
                              name: R
                            },
                          } ) ) :
                        N( {
                          operation: "login",
                          step: "SIGNIN_OPTIONS",
                          susiEntry: "follow_oneclick",
                        } ) );
                  }
                },
                [ x, z ]
              ),
              h )
          )
            return u.createElement( le.Z, null );
          if ( E ) return u.createElement( ae.Z, {
            error: E
          } );
          if (
            !x ||
            ( !p && !o ) ||
            "User" !== ( null == x ? void 0 : x.__typename )
          )
            return u.createElement( se.Z, null );
          const j =
            null == x ||
            null === ( n = x.homepagePostsConnection ) ||
            void 0 === n ||
            null === ( r = n.pagingInfo ) ||
            void 0 === r ?
            void 0 :
            r.next;
          if ( j ) {
            const X = j.limit,
              Q = j.from;
            t = () => {
              return I( {
                variables: {
                  homepagePostsFrom: Q,
                  homepagePostsLimit: X
                },
                updateQuery( e, n ) {
                  let r;
                  let t;
                  let i;
                  let o;
                  let a;
                  let l;
                  let s;
                  let u;
                  let c;
                  const m = n.fetchMoreResult;

                  const d =
                    ( "User" ===
                      ( null == e ||
                        null === ( r = e.userResult ) ||
                        void 0 === r ?
                        void 0 :
                        r.__typename ) &&
                      ( null == e ||
                        null === ( t = e.userResult ) ||
                        void 0 === t ||
                        null === ( i = t.homepagePostsConnection ) ||
                        void 0 === i ?
                        void 0 :
                        i.posts ) ) || [];

                  const f =
                    ( "User" ===
                      ( null == m ||
                        null === ( o = m.userResult ) ||
                        void 0 === o ?
                        void 0 :
                        o.__typename ) &&
                      ( null == m ||
                        null === ( a = m.userResult ) ||
                        void 0 === a ||
                        null === ( l = a.homepagePostsConnection ) ||
                        void 0 === l ?
                        void 0 :
                        l.posts ) ) || [];

                  const p =
                    ( "User" ===
                      ( null == m ||
                        null === ( s = m.userResult ) ||
                        void 0 === s ?
                        void 0 :
                        s.__typename ) &&
                      ( null == m ||
                        null === ( u = m.userResult ) ||
                        void 0 === u ||
                        null === ( c = u.homepagePostsConnection ) ||
                        void 0 === c ?
                        void 0 :
                        c.pagingInfo ) ) ||
                    void 0;

                  return y()( {}, e, {
                    userResult: {
                      homepagePostsConnection: {
                        posts: [].concat( v()( d ), v()( f ) ),
                        pagingInfo: p,
                      },
                    },
                  } );
                },
              } );
            };
          }
          return u.createElement( ne, {
            user: x,
            fetchMoreHomepagePosts: t
          } );
        },
        ve = r( 41254 ),
        he = r( 47266 ),
        Ee = r( 26463 ),
        Se = r( 22669 ),
        ye = r( 28774 ),
        be = r( 93593 ),
        Pe = r( 885 ),
        we = r( 32262 ),
        xe = r( 62181 ),
        _e = r( 73004 ),
        Ie = () => {
          const e = "userActionsPopoverSignedOutMenu";
          return u.createElement(
            u.Fragment,
            null,
            u.createElement( H.Bn, null, n => {
              const r = n.isVisible,
                t = n.hide,
                i = n.toggle;
              return u.createElement(
                H.J2, {
                  ariaId: e,
                  isVisible: r,
                  hide: t,
                  popoverRenderFn() {
                    return u.createElement(
                      we.mX,
                      null,
                      u.createElement(
                        we.Sl,
                        null,
                        u.createElement(
                          xe.R9, {
                            operation: "login",
                            susiEntry: "report_profile"
                          },
                          "Report user"
                        )
                      )
                    );
                  },
                },
                u.createElement(
                  H.rU, {
                    ariaControls: e,
                    ariaExpanded: r ? "true" : "false",
                    onClick: i,
                  },
                  u.createElement( _e.Z, null )
                )
              );
            } )
          );
        },
        Ue = r( 18970 ),
        Ce = r( 53380 ),
        Re = r( 5868 ),
        Oe = r( 93258 ),
        $e = r( 27572 ),
        ke = r( 27952 );

      function Be() {
        const e = a()( [
          "\n  fragment UserProfileActions_user on User {\n    id\n    username\n    isBlocking\n    ...UserFollowButton_user\n  }\n  ",
          "\n",
        ] );
        return ( Be = () => {
            return e;
          } ),
          e;
      }
      const De = e => {
          const n = e.user,
            r = ( 0, P.YC )(),
            t = r.loading,
            i = r.value,
            o = "follow_profile",
            a = "userProfileActionsMenu";
          if ( t ) return null;
          const l = n.id,
            s = n.username,
            c = n.isBlocking;
          if ( !s ) return null;
          if ( !i )
            return u.createElement(
              H.xu, {
                display: "flex",
                alignItems: "center"
              },
              u.createElement(
                $e.cW, {
                  source: {
                    name: "profile",
                    userId: l,
                    susiEntry: "follow_profile",
                  },
                },
                u.createElement(
                  H.xu, {
                    marginLeft: "20px",
                    marginRight: "10px"
                  },
                  u.createElement( Ce.Bv, {
                    buttonSize: "COMPACT",
                    user: n,
                    susiEntry: o,
                  } )
                ),
                u.createElement( Ie, null )
              )
            );
          const m = i.id;
          return m === n.id ?
            u.createElement(
              H.xu, {
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                marginLeft: "20px",
              },
              u.createElement(
                H.zx, {
                  size: "COMPACT",
                  href: ( 0, ke.qn )( s )
                },
                "Edit profile"
              )
            ) :
            u.createElement( H.Bn, null, e => {
              const r = e.isVisible,
                t = e.hide,
                i = e.toggle;
              return u.createElement( H.Bn, null, e => {
                const s = e.isVisible,
                  d = e.show,
                  f = e.hide;
                return u.createElement( H.Bn, null, e => {
                  const p = e.isVisible,
                    g = e.show,
                    v = e.hide;
                  return u.createElement(
                    ye.Z, {
                      targetUserId: l,
                      viewerId: m,
                      onCompleted: f
                    },
                    e => {
                      const h = e.mutate;
                      return u.createElement(
                        Pe.Z, {
                          targetUserId: l,
                          viewerId: m
                        },
                        e => {
                          const E = e.mutate;
                          return u.createElement(
                            be.Z, {
                              targetUserId: l,
                              viewerId: m,
                              isBlocking: c,
                              onOptimisticComplete: v,
                            },
                            e => {
                              const m = e.mutate;
                              return u.createElement(
                                u.Fragment,
                                null,
                                u.createElement(
                                  H.xu, {
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "5px",
                                  },
                                  u.createElement(
                                    H.xu, {
                                      marginLeft: "20px",
                                      marginRight: "10px",
                                    },
                                    c ?
                                    u.createElement( Oe.d, {
                                      buttonSize: "COMPACT",
                                      targetUserId: l,
                                    } ) :
                                    u.createElement(
                                      $e.cW, {
                                        source: {
                                          name: "profile",
                                          userId: l,
                                        },
                                      },
                                      u.createElement( Ce.Bv, {
                                        buttonSize: "COMPACT",
                                        user: n,
                                        susiEntry: o,
                                      } )
                                    )
                                  ),
                                  u.createElement(
                                    H.J2, {
                                      ariaId: a,
                                      isVisible: r,
                                      hide: t,
                                      popoverRenderFn() {
                                        return u.createElement(
                                          we.mX,
                                          null,
                                          u.createElement(
                                            we.Sl,
                                            null,
                                            u.createElement(
                                              H.rU, {
                                                linkStyle: "SUBTLE",
                                                onClick() {
                                                  c ? E() : d(), t();
                                                },
                                              },
                                              c ?
                                              "Unblock user" :
                                              "Block user"
                                            )
                                          ),
                                          u.createElement(
                                            we.Sl,
                                            null,
                                            u.createElement(
                                              H.rU, {
                                                linkStyle: "SUBTLE",
                                                onClick() {
                                                  g(), t();
                                                },
                                              },
                                              "Report user"
                                            )
                                          )
                                        );
                                      },
                                    },
                                    u.createElement(
                                      H.rU, {
                                        ariaControls: a,
                                        ariaExpanded: r ? "true" : "false",
                                        onClick: i,
                                      },
                                      u.createElement( _e.Z, null )
                                    )
                                  )
                                ),
                                u.createElement( Ue.Z, {
                                  onConfirm: h,
                                  isVisible: s,
                                  hide: f,
                                } ),
                                u.createElement( Re.Z, {
                                  onConfirm: m,
                                  isVisible: p,
                                  hide: v,
                                  withBlockOption: !c,
                                } )
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                } );
              } );
            } );
        },
        Te = ( 0, s.Ps )( Be(), Ce.sj ),
        Me = r( 65314 ),
        Ze = r( 64504 ),
        Ae = r( 68455 ),
        Fe = r( 27390 );

      function Le() {
        const e = a()( [
          "\n  fragment UserProfileHero_user on User {\n    id\n    username\n    mediumMemberAt\n    name\n    bio\n    twitterScreenName\n    userMeta {\n      collections {\n        name\n        slug\n        id\n      }\n      topWriterInTags {\n        id\n        displayTitle\n      }\n      userSuggestionReason {\n        reason {\n          __typename\n          ... on FolloweesWhoFollow {\n            users {\n              name\n              username\n            }\n          }\n        }\n      }\n    }\n    socialStats {\n      followingCount\n      followerCount\n    }\n    ...UserAvatar_user\n    ...UserProfileActions_user\n    ...UserProfileSummary_user\n    ...userUrl_user\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( Le = () => {
            return e;
          } ),
          e;
      }
      const He = e => {
        return {
          fill: e.baseColor.fill.lighter
        };
      };
      const We = e => {
        const n = e.user,
          r = ( 0, N.Iq )(),
          t = n.socialStats,
          i = n.username,
          o = n.userMeta,
          a = ( 0, b.v9 )( e => {
            return e.config;
          } ).authDomain;
        if ( !i ) return null;
        let l;
        let s;
        let c;
        let m;
        let d;
        const f = t || {};
        const p = f.followingCount;
        const g = f.followerCount;
        p &&
          ( l = u.createElement(
            H.xu, {
              marginRight: "16px"
            },
            u.createElement(
              H.rU, {
                href: ( 0, ke.Mz )( i ),
                inline: !0
              },
              ( 0, Fe.pY )( p ),
              " Following"
            )
          ) ),
          g &&
          ( s = u.createElement(
            H.xu, {
              marginRight: "16px"
            },
            u.createElement(
              H.rU, {
                href: ( 0, ke.ol )( i ),
                inline: !0
              },
              ( 0, Fe.pY )( g ),
              " Followers"
            )
          ) ),
          n.twitterScreenName &&
          ( c = u.createElement(
            H.xu, {
              display: "flex",
              alignItems: "center"
            },
            u.createElement(
              H.xu, {
                marginRight: "8px"
              },
              u.createElement(
                H.rU, {
                  href: ( 0, ke.x_ )( n.twitterScreenName ),
                  inline: !0
                },
                u.createElement( Ae.Z, {
                  className: r( He )
                } )
              )
            )
          ) ),
          ( l || s || c ) &&
          ( m = u.createElement(
            Ze.F, {
              scale: "M",
              tag: "span"
            },
            u.createElement(
              H.xu, {
                display: "flex"
              },
              l,
              s,
              ( l || s ) &&
              c &&
              u.createElement( H.xu, {
                marginRight: "12px"
              }, "·" ),
              c
            )
          ) );
        const v = o && o.userSuggestionReason && o.userSuggestionReason.reason;
        if ( v ) {
          let h;
          switch ( v.__typename ) {
            case "FolloweesWhoFollow":
              h = v.users;
              break;
            default:
              return null;
          }
          h &&
            h.length > 0 &&
            ( d = u.createElement(
              Ze.F, {
                scale: "M",
                tag: "span"
              },
              "Followed by",
              " ",
              h.map( ( e, n ) => {
                return e && e.username && e.name ?
                  u.createElement(
                    "span", {
                      key: n
                    },
                    u.createElement(
                      H.rU, {
                        href: ( 0, ke.AW )( e, a ),
                        inline: !0
                      },
                      e.name
                    ),
                    2 === h.length && 0 === n ? " and " : null
                  ) :
                  null;
              } )
            ) );
        }
        return u.createElement(
          H.xu, {
            display: "flex",
            flexDirection: "column"
          },
          u.createElement(
            H.xu, {
              display: "none",
              xs: {
                display: "block"
              },
              marginBottom: "20px"
            },
            u.createElement( F.ZP, {
              user: n,
              scale: "XL"
            } )
          ),
          u.createElement(
            H.xu, {
              marginBottom: "30px"
            },
            u.createElement(
              H.xu, {
                marginTop: "10px",
                marginLeft: "40px",
                marginBottom: "10px",
                float: "right",
                xs: {
                  display: "none"
                },
              },
              u.createElement( F.ZP, {
                user: n,
                scale: "XXL"
              } )
            ),
            d,
            u.createElement(
              H.xu, {
                display: "flex",
                alignItems: "center",
                marginTop: "4px",
                marginBottom: "4px",
              },
              u.createElement( Ze.X6, {
                scale: "L",
                tag: "h1"
              }, n.name ),
              u.createElement( De, {
                user: n
              } )
            ),
            u.createElement(
              H.xu, {
                marginBottom: "16px"
              },
              u.createElement(
                Ze.F, {
                  scale: "L",
                  color: "DARKER"
                },
                u.createElement( Se.Z, {
                  linkifyTwitterHandles: !0
                }, n.bio )
              )
            ),
            u.createElement( Me.Z, {
              user: n
            } ),
            u.createElement( H.xu, {
              marginTop: "8px",
              marginBottom: "16px"
            }, m )
          )
        );
      };
      const Ne = ( 0, s.Ps )( Le(), F.WQ, Te, Me.L, ke.$m ),
        ze = r( 40605 );

      function je() {
        const e = a()( [
          "\n  query UserStreamResponses($userId: ID!, $pagingOptions: PagingOptions) {\n    user(id: $userId) {\n      id\n      responsesStreamConnection(paging: $pagingOptions) {\n        ...commonStreamConnection\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( je = () => {
            return e;
          } ),
          e;
      }

      function qe() {
        const e = a()( [
          "\n  query UserStreamHighlights($userId: ID!, $pagingOptions: PagingOptions) {\n    user(id: $userId) {\n      id\n      highlightsStreamConnection(paging: $pagingOptions) {\n        ...commonStreamConnection\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( qe = () => {
            return e;
          } ),
          e;
      }

      function Xe() {
        const e = a()( [
          "\n  query UserStreamClaps($userId: ID!, $pagingOptions: PagingOptions) {\n    user(id: $userId) {\n      id\n      clapsStreamConnection(paging: $pagingOptions) {\n        ...commonStreamConnection\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( Xe = () => {
            return e;
          } ),
          e;
      }

      function Ve() {
        const e = a()( [
          "\n  query UserStreamSeries($userId: ID!, $pagingOptions: PagingOptions) {\n    user(id: $userId) {\n      id\n      seriesStreamConnection(paging: $pagingOptions) {\n        ...commonStreamConnection\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( Ve = () => {
            return e;
          } ),
          e;
      }

      function Qe() {
        const e = a()( [
          "\n  query UserStreamOverview($userId: ID!, $pagingOptions: PagingOptions) {\n    user(id: $userId) {\n      id\n      name\n      profileStreamConnection(paging: $pagingOptions) {\n        ...commonStreamConnection\n      }\n      navItems {\n        title\n      }\n      userPostCounts {\n        publishedPosts\n      }\n      ...commonStream_viewer\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( Qe = () => {
            return e;
          } ),
          e;
      }
      const Ye = ( 0, s.Ps )( Qe(), d.sS, d.yf ),
        Ge = ( 0, s.Ps )( Ve(), d.sS ),
        Ke = ( 0, s.Ps )( Xe(), d.sS ),
        Je = ( 0, s.Ps )( qe(), d.sS ),
        en = ( 0, s.Ps )( je(), d.sS ),
        nn = e => {
          const n = e.tab,
            r = ( ( e, n ) => {
              let r;
              let t;
              let i;
              let o;

              const a = ( e => {
                switch ( e ) {
                  case p.m.Overview:
                  case p.m.Latest:
                    return Ye;
                  case p.m.Series:
                    return Ge;
                  case p.m.Claps:
                    return Ke;
                  case p.m.Highlights:
                    return Je;
                  case p.m.Responses:
                    return en;
                }
              } )( e );

              const s = ( 0, l.useQuery )( a, {
                variables: {
                  userId: n
                }
              } );
              const u = s.loading;
              const c = s.fetchMore;
              let m = s.data;
              const d = ( m = void 0 === m ? {
                user: void 0
              } : m ).user;
              if ( !d ) return {
                loading: u
              };
              let f;

              const g = ( e => {
                switch ( e ) {
                  case p.m.Overview:
                  case p.m.Latest:
                    return "profileStreamConnection";
                  case p.m.Series:
                    return "seriesStreamConnection";
                  case p.m.Claps:
                    return "clapsStreamConnection";
                  case p.m.Highlights:
                    return "highlightsStreamConnection";
                  case p.m.Responses:
                    return "responsesStreamConnection";
                }
              } )( e );

              const h =
                null !==
                ( r =
                  null == d || null === ( t = d[ g ] ) || void 0 === t ?
                  void 0 :
                  t.stream ) && void 0 !== r ?
                r :
                [];

              const S = d.userMeta && d.userMeta.featuredPostId;

              const b =
                null == d ||
                null === ( i = d[ g ] ) ||
                void 0 === i ||
                null === ( o = i.pagingInfo ) ||
                void 0 === o ?
                void 0 :
                o.next;

              if ( b ) {
                const P = {
                  limit: b.limit,
                  page: b.page,
                  source: b.source,
                  to: b.to,
                  ignoredIds: b.ignoredIds,
                };
                P &&
                  ( f = () => {
                    return c( {
                      variables: {
                        userId: d.id,
                        pagingOptions: P
                      },
                      updateQuery( e, n ) {
                        let r;
                        let t;
                        let i;
                        let o;
                        let a;
                        const l = n.fetchMoreResult;
                        return y()( {}, e, {
                          user: E()( {}, g, {
                            stream: [].concat(
                              v()(
                                null !==
                                ( r =
                                  null == e ||
                                  null === ( t = e.user ) ||
                                  void 0 === t ?
                                  void 0 :
                                  t[ g ].stream ) && void 0 !== r ?
                                r :
                                []
                              ),
                              v()(
                                null !==
                                ( i =
                                  null == l ||
                                  null === ( o = l.user ) ||
                                  void 0 === o ?
                                  void 0 :
                                  o[ g ].stream ) && void 0 !== i ?
                                i :
                                []
                              )
                            ),
                            pagingInfo: null == l || null === ( a = l.user ) || void 0 === a ?
                              void 0 :
                              a[ g ].pagingInfo,
                          } ),
                        } );
                      },
                    } );
                  } );
              }
              let w, x = "";
              if ( e === p.m.Overview ) {
                let _;
                0 ===
                  Number(
                    null == d || null === ( _ = d.userPostCounts ) || void 0 === _ ?
                    void 0 :
                    _.publishedPosts
                  ) && ( x = "".concat( d.name, " hasn't written any stories." ) );
                const I = !!( d.navItems || [] ).find( e => {
                  return "Responses" === e.title;
                } );
                w = "".concat(
                  d.name,
                  I ?
                  " hasn 't published on Medium yet. Check back later to see their stories, claps, and highlights, or read their responses." :
                  " hasn''t been active on Medium yet. Check back later to see their stories, claps, and highlights."
                );
              }
              return {
                loading: u,
                fetchMore: f,
                emptyMessage: w,
                featuredPostId: S,
                streamItems: h,
                noStoriesWrittenMessage: x,
              };
            } )( n, e.userId ),
            t = r.loading,
            i = r.fetchMore,
            o = r.emptyMessage,
            a = r.streamItems,
            s = r.featuredPostId;
          return a ?
            u.createElement( d.ZP, {
              tab: n,
              loading: t,
              fetchMore: i,
              streamItems: a,
              emptyStateMessage: o,
              featuredPostId: s,
            } ) :
            null;
        };

      function rn() {
        const e = a()( [
          "\n  fragment UserProfileScreen_user on User {\n    id\n    ...SuspendedBannerLoader_user\n    ...UserProfileHero_user\n    ...UserProfileNav_user\n    ...UserProfileMetadata_user\n    ...Metabar_user\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( rn = () => {
            return e;
          } ),
          e;
      }
      const tn = () => {
          return null;
        },
        on = e => {
          const n = e.user,
            r = e.tab;
          return u.createElement( P.Q_, null, e => {
            return u.createElement( an, {
              user: n,
              tab: r,
              viewer: e
            } );
          } );
        },
        an = e => {
          const n = e.viewer,
            r = e.user,
            t = e.tab,
            i = ( 0, b.v9 )( e => {
              return {
                referrer: e.navigation.referrer
              };
            }, b.wU ).referrer,
            o = ( 0, V.PM )(),
            a = ( 0, Q.P )(),
            l = a.loading,
            s = a.inAppBrowser,
            c = ( 0, W.Av )(),
            m = ( 0, b.I0 )(),
            d = ( 0, P.rZ )(),
            f = d.loading,
            p = d.viewerId;
          return u.useEffect(
              () => {
                if ( !f && p && !l ) {
                  c.event( "profile.viewed", {
                    profileId: r.id
                  } );
                  const e = ( 0, I.RD )( {
                    inAppBrowser: s,
                    referrer: i,
                    referrerSource: o,
                    viewer: n,
                    page_type: "profile",
                    profile_name: r.name,
                    profile_photo: ( 0, G.W6 )( {
                      miroId: r.imageId || F.Ei,
                      width: 64,
                      height: 64,
                      strategy: G._S.Resample,
                    } ),
                    profile_username: r.username,
                    currentUserId: p,
                  } );
                  ( 0, I.Pu )( e ),
                  m( ( 0, X.aj )( e ) ),
                    m( ( 0, X.QZ )() ),
                    m( ( 0, X.Dl )( !1 ) );
                }
              },
              [ f, p, l, s ]
            ),
            r && r.id ?
            u.createElement(
              H.MI, {
                columns: 8,
                overflow: "hidden"
              },
              u.createElement( _.u, null ),
              u.createElement(
                Z.bZ, {
                  name: "can_view_suspended_content",
                  placeholder: tn
                },
                e => {
                  return e ? u.createElement( A.ZP, {
                    user: r
                  } ) : null;
                }
              ),
              u.createElement( z.Z, {
                tab: t,
                user: r
              } ),
              u.createElement(
                H.xu, {
                  backgroundColor: "BACKGROUND"
                },
                u.createElement( Ee.kw, {
                  user: r
                } ),
                u.createElement( We, {
                  user: r
                } ),
                u.createElement( ze.Z, {
                  user: r
                } )
              ),
              u.createElement(
                $e.cW, {
                  source: {
                    name: "user_profile"
                  }
                },
                u.createElement( nn, {
                  tab: t,
                  userId: r.id
                } )
              )
            ) :
            null;
        },
        ln = ( 0, s.Ps )( rn(), A.v, z.k, Ne, ze.g, Ee.UV ),
        sn = r( 93015 );

      function un() {
        const e = a()( [
          "\n  query UserProfileHandler($id: ID, $username: ID) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        isAuroraVisible\n        viewerIsUser\n        ...UserCanonicalizer_user\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( un = () => {
            return e;
          } ),
          e;
      }

      function cn() {
        const e = a()( [
          "\n  query UserProfileResponsesHandler($id: ID, $username: ID, $paging: PagingOptions) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        isAuroraVisible\n        ...UserProfileScreen_user\n        ...UserCanonicalizer_user\n        responsesStreamConnection(paging: $paging) {\n          ...commonStreamConnection\n        }\n      }\n    }\n    viewer {\n      ...PostActions_viewer\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( cn = () => {
            return e;
          } ),
          e;
      }

      function mn() {
        const e = a()( [
          "\n  query UserProfileHighlightsHandler($id: ID, $username: ID, $paging: PagingOptions) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        ...UserProfileScreen_user\n        ...UserCanonicalizer_user\n        highlightsStreamConnection(paging: $paging) {\n          ...commonStreamConnection\n        }\n      }\n    }\n    viewer {\n      ...PostActions_viewer\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( mn = () => {
            return e;
          } ),
          e;
      }

      function dn() {
        const e = a()( [
          "\n  query UserProfileClapsHandler($id: ID, $username: ID, $paging: PagingOptions) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        ...UserProfileScreen_user\n        ...UserCanonicalizer_user\n        clapsStreamConnection(paging: $paging) {\n          ...commonStreamConnection\n        }\n      }\n    }\n    viewer {\n      ...PostActions_viewer\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( dn = () => {
            return e;
          } ),
          e;
      }

      function fn() {
        const e = a()( [
          "\n  query UserProfileSeriesHandler($id: ID, $username: ID, $paging: PagingOptions) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        ...UserProfileScreen_user\n        ...UserCanonicalizer_user\n        seriesStreamConnection(paging: $paging) {\n          ...commonStreamConnection\n        }\n      }\n    }\n    viewer {\n      ...PostActions_viewer\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( fn = () => {
            return e;
          } ),
          e;
      }

      function pn() {
        const e = a()( [
          "\n  query UserProfileOverviewHandler($id: ID, $username: ID, $paging: PagingOptions) {\n    userResult(id: $id, username: $username) {\n      __typename\n      ... on User {\n        id\n        ...UserProfileScreen_user\n        ...UserCanonicalizer_user\n        profileStreamConnection(paging: $paging) {\n          ...commonStreamConnection\n        }\n      }\n    }\n    viewer {\n      ...PostActions_viewer\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( pn = () => {
            return e;
          } ),
          e;
      }
      const gn = ( 0, s.Ps )( pn(), ln, d.sS, m.zW, f.r );
      const vn = ( 0, s.Ps )( fn(), ln, d.sS, m.zW, f.r );
      const hn = ( 0, s.Ps )( dn(), ln, d.sS, m.zW, f.r );
      const En = ( 0, s.Ps )( mn(), ln, d.sS, m.zW, f.r );
      const Sn = ( 0, s.Ps )( cn(), ln, d.sS, m.zW, f.r );

      const yn = Object.values( p.m ).filter( e => {
        return e !== p.m.Overview;
      } );

      const bn = new RegExp( "/(".concat( yn.join( "|" ), ")$" ) );

      const Pn = e => {
        const n = bn.exec( e ),
          r = n && n[ 1 ];
        return ( r && ( 0, sn.g )( p.m, r ) ) || p.m.Overview;
      };

      var wn = ( 0, s.Ps )( un(), f.r );

      const xn = e => {
        const n = e.id;
        const r = e.match;
        const t = e.username;
        const i = ( 0, l.useQuery )( wn, {
          variables: {
            id: n,
            username: t
          }
        } );
        const o = i.loading;
        const a = i.error;
        let s = i.data;
        const m = ( s = void 0 === s ? {
          userResult: void 0
        } : s ).userResult;
        if ( a ) return u.createElement( ae.Z, {
          error: a
        } );
        if ( o ) return u.createElement( le.Z, null );
        const d = Pn( null == r ? void 0 : r.url );
        switch ( null == m ? void 0 : m.__typename ) {
          case "User":
            return m.isAuroraVisible ?
              d === p.m.Highlights && m.viewerIsUser ?
              u.createElement( c.Z, {
                to: "/me/list/highlights"
              } ) :
              d === p.m.Responses && m.viewerIsUser ?
              u.createElement( c.Z, {
                to: "/me/stories/responses"
              } ) :
              u.createElement(
                f.C, {
                  user: m
                },
                u.createElement( ge, {
                  match: r
                } )
              ) :
              u.createElement( In, {
                match: r
              } );
          case "Blocked":
            return u.createElement(
              ve.Z, {
                code: 403,
                title: "403 Blocked — Medium"
              },
              "This user had blocked you from following them or viewing their stories."
            );
          case "NotFound":
            return u.createElement( se.Z, null );
          case "AccountSuspended":
            return u.createElement( he.y, {
              suspension: "account"
            } );
          default:
            return u.createElement( ae.Z, {
              error: new Error(
                "Unsupported userResult: ".concat(
                  null == m ? void 0 : m.__typename
                )
              ),
            } );
        }
      };

      var _n = e => {
        const n = e.match,
          r = ( 0, oe.k6 )(),
          t = r && r.type === ie.Cr.USER ? r.id : null,
          i = n.params.username;
        return t || i ?
          u.createElement( xn, {
            id: t,
            match: n,
            username: i
          } ) :
          u.createElement( se.Z, null );
      };

      var In = e => {
        const n = e.match,
          r = ( 0, oe.k6 )(),
          t = ( null == r ? void 0 : r.type ) === ie.Cr.USER ? r.id : null,
          o = n.params.username,
          a = n.url,
          s = Pn( a ),
          m = ( e => {
            switch ( e ) {
              case p.m.Series:
                return vn;
              case p.m.Claps:
                return hn;
              case p.m.Highlights:
                return En;
              case p.m.Responses:
                return Sn;
              case p.m.Overview:
              default:
                return gn;
            }
          } )( s ),
          d = ( 0, l.useLazyQuery )( m ),
          g = i()( d, 2 ),
          v = g[ 0 ],
          h = g[ 1 ],
          E = h.called,
          S = h.loading,
          y = h.error,
          b = h.data,
          P = null == b ? void 0 : b.userResult;
        return s === p.m.Latest ?
          u.createElement( c.Z, {
            to: "/".concat( o )
          } ) :
          E ?
          S ?
          u.createElement( le.Z, null ) :
          ( o || t ) && "User" === ( null == P ? void 0 : P.__typename ) && s ?
          y && !P ?
          u.createElement( ae.Z, {
            error: y
          } ) :
          u.createElement(
            f.C, {
              user: P
            },
            u.createElement( on, {
              user: P,
              tab: s
            } )
          ) :
          u.createElement( se.Z, null ) :
          ( v( {
              variables: {
                id: t,
                username: o
              }
            } ),
            u.createElement( le.Z, null ) );
      };
    },
    41254: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        Z: () => E
      } );
      const t = r( 67294 ),
        i = r( 70405 ),
        o = r( 5977 ),
        a = r( 59713 ),
        l = r.n( a ),
        s = r( 7530 ),
        u = r( 67995 ),
        c = r( 28309 ),
        m = r( 80637 ),
        d = {
          fontSize: "20px",
          textTransform: "uppercase"
        },
        f = e => {
          return l()( {
              display: "block",
              fontSize: "192px",
              lineHeight: "200px"
            },
            m.sm( e ), {
              fontSize: "150px"
            }
          );
        };
      const p = e => {
        const n = e.errorCode,
          r = ( 0, c.Iq )(),
          i = ( 0, u.n )( {
            name: "marketing",
            scale: "XXXL"
          } );
        return t.createElement(
          s.xu, {
            display: "flex",
            flexDirection: "column"
          },
          t.createElement( "div", {
            className: r( d )
          }, "Error" ),
          t.createElement( "div", {
            className: r( [ i, f ] )
          }, n )
        );
      };
      const g = r( 26463 ),
        v = r( 5955 ),
        h = {
          fontSize: "24px"
        };

      function E( e ) {
        const n = e.code,
          r = e.title,
          a = e.children,
          l = e.lumenId,
          u = ( 0, c.Iq )();
        return t.createElement( o.AW, {
          render( e ) {
            const o = e.staticContext;
            return (
              o && ( o.statusCode = n ),
              t.createElement(
                "div",
                null,
                t.createElement( i.q, null, t.createElement( "title", null, r ) ),
                t.createElement( g.kw, null ),
                t.createElement(
                  s.xu, {
                    tag: "section",
                    paddingTop: "60px",
                    paddingBottom: "60px"
                  },
                  t.createElement(
                    s.Pm, {
                      size: "inset"
                    },
                    t.createElement(
                      s.xu, {
                        display: "flex",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      },
                      t.createElement( p, {
                        errorCode: n
                      } ),
                      t.createElement(
                        "div", {
                          className: u( ( 0, v.rJ )() )
                        },
                        t.createElement(
                          s.xu, {
                            marginBottom: "28px"
                          },
                          t.createElement( "div", {
                            className: u( h )
                          }, a )
                        ),
                        l ?
                        t.createElement(
                          "div", {
                            className: u( h )
                          },
                          "A report is available on",
                          " ",
                          t.createElement(
                            s.rU, {
                              href: "https://lumendatabase.org/notices/".concat(
                                l
                              ),
                              display: "inline-block",
                              inline: !0,
                              target: "_blank",
                              linkStyle: "OBVIOUS",
                            },
                            "Lumen"
                          ),
                          "."
                        ) :
                        null
                      )
                    )
                  )
                )
              )
            );
          },
        } );
      }
    },
    47266: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        y: () => u
      } );
      const t = r( 67294 );
      const i = r( 7530 );
      const o = r( 64504 );
      const a = r( 62630 );
      const l = r( 41254 );
      const s = r( 27952 );

      var u = e => {
        const n = e.suspension,
          r = ( 0, a.Av )();
        return t.createElement(
          l.Z, {
            code: 410,
            title: "410 ".concat( n, " suspended — Medium" )
          },
          t.createElement(
            i.xu, {
              display: "flex",
              marginTop: "-30px"
            },
            t.createElement(
              o.QE, {
                scale: "S"
              },
              "This ",
              n,
              " is under investigation or was found in violation of the Medium Rules.",
              " "
            )
          ),
          t.createElement(
            i.xu, {
              display: "flex",
              marginTop: "80px"
            },
            t.createElement(
              o.QE, {
                color: "DARKER",
                scale: "M"
              },
              "There are thousands of stories to read on Medium. Visit our homepage ",
              t.createElement( "br", null ),
              " to find one that''s right for you."
            )
          ),
          t.createElement(
            i.xu, {
              display: "flex",
              marginTop: "15px"
            },
            t.createElement(
              i.zx, {
                buttonStyle: "SUBTLE",
                href: ( 0, s.$x )(),
                onClick() {
                  r.event( "suspendedPage.backToHomeClicked", {} );
                },
              },
              "Take me to Medium"
            )
          )
        );
      };
    },
    93015: ( e, n, r ) => {
      "use strict";

      function t( e, n ) {
        if ( void 0 !== n ) {
          const r = ( ( e, n ) => {
            return Object.keys( e ).find( r => {
              return e[ r ] === n;
            } );
          } )( e, n );
          return r && e[ r ];
        }
      }
      r.d( n, {
        g: () => t
      } );
    },
    27140: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        D: () => i
      } );
      const t = r( 67294 );

      function i( e ) {
        const n = t.useRef();
        return t.useEffect(
            () => {
              n.current = e;
            },
            [ e ]
          ),
          n.current;
      }
    },
    77455: ( e, n, r ) => {
      "use strict";
      r.d( n, {
        K: () => l
      } );
      const t = r( 63038 );
      const i = r.n( t );
      const o = r( 67294 );
      const a = r( 5977 );

      var l = () => {
        const e = ( 0, a.TH )().search,
          n = o.useState( new URLSearchParams( e ) );
        return i()( n, 1 )[ 0 ];
      };
    },
    41609: ( e, n, r ) => {
      const t = r( 280 ),
        i = r( 64160 ),
        o = r( 35694 ),
        a = r( 1469 ),
        l = r( 98612 ),
        s = r( 44144 ),
        u = r( 25726 ),
        c = r( 36719 ),
        m = Object.prototype.hasOwnProperty;
      e.exports = e => {
        if ( null == e ) return !0;
        if (
          l( e ) &&
          ( a( e ) ||
            "string" == typeof e ||
            "function" == typeof e.splice ||
            s( e ) ||
            c( e ) ||
            o( e ) )
        )
          return !e.length;
        const n = i( e );
        if ( "[object Map]" == n || "[object Set]" == n ) return !e.size;
        if ( u( e ) ) return !t( e ).length;
        for ( const r in e )
          if ( m.call( e, r ) ) return !1;
        return !0;
      };
    },
  },
] );
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/UserProfile.0fd8f71e.chunk.js.map
