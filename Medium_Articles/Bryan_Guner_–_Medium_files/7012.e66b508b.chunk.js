( self.webpackChunklite = self.webpackChunklite || [] ).push( [
  [ 7012 ],
  {
    73004: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        Z: () => i
      } );
      const r = t( 67294 );

      function o() {
        return ( o =
          Object.assign ||
          function ( e ) {
            for ( let n = 1; n < arguments.length; n++ ) {
              const t = arguments[ n ];
              for ( const r in t )
                Object.prototype.hasOwnProperty.call( t, r ) && ( e[ r ] = t[ r ] );
            }
            return e;
          } ).apply( this, arguments );
      }
      const l = r.createElement( "path", {
        d: "M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z",
        fillRule: "evenodd",
      } );
      const i = e => {
        return r.createElement(
          "svg",
          o( {
            width: 21,
            height: 21,
            viewBox: "0 0 21 21"
          }, e ),
          l
        );
      };
    },
    84783: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        b3: () => P,
        Iq: () => T,
        Fp: () => V
      } );
      const r = t( 63038 ),
        o = t.n( r ),
        l = t( 28655 ),
        i = t.n( l ),
        a = t( 71439 ),
        u = t( 46829 ),
        c = t( 67294 ),
        s = t( 12291 ),
        d = t( 34664 ),
        m = t( 86280 ),
        g = t( 324 ),
        p = t( 62181 ),
        f = t( 7530 ),
        v = t( 25597 ),
        h = t( 64504 ),
        b = t( 62630 ),
        E = t( 27572 ),
        S = t( 28309 ),
        _ = t( 72955 ),
        x = t( 73004 ),
        y = t( 27952 );

      function C() {
        const e = i()( [
          "\n  mutation UnsubscribeCollectionEmailsMutation($id: ID!) {\n    unsubscribeCollectionEmails(collectionId: $id) {\n      __typename\n      id\n      isUserSubscribedToCollectionEmails\n    }\n  }\n",
        ] );
        return ( C = () => {
            return e;
          } ),
          e;
      }

      function w() {
        const e = i()( [
          "\n  mutation SubscribeCollectionEmailsMutation($id: ID!) {\n    subscribeCollectionEmails(collectionId: $id) {\n      __typename\n      id\n      isUserSubscribedToCollectionEmails\n    }\n  }\n",
        ] );
        return ( w = () => {
            return e;
          } ),
          e;
      }

      function A() {
        const e = i()( [
          "\n  mutation UnfollowCollectionMutation($id: ID!) {\n    unfollowCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerIsFollowing\n    }\n  }\n",
        ] );
        return ( A = () => {
            return e;
          } ),
          e;
      }

      function I() {
        const e = i()( [
          "\n  mutation FollowCollectionMutation($id: ID!) {\n    followCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerIsFollowing\n      isUserSubscribedToCollectionEmails\n    }\n  }\n",
        ] );
        return ( I = () => {
            return e;
          } ),
          e;
      }

      function M() {
        const e = i()( [
          "\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    viewerIsFollowing\n    name\n    viewerIsSubscribedToLetters\n    canToggleEmail\n    slug\n    isUserSubscribedToCollectionEmails\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( M = () => {
            return e;
          } ),
          e;
      }

      function L() {
        const e = i()( [
          "\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n",
        ] );
        return ( L = () => {
            return e;
          } ),
          e;
      }
      const k = "collectionFollowPopover";
      var P = ( 0, a.Ps )( L() );
      var T = ( 0, a.Ps )( M(), y.nf, p.Os );
      const R = "follow_card";

      const H = e => {
        const n = e.children,
          t = e.extraTopPadding,
          r = e.extraBottomPadding,
          o = e.padding,
          l = e.margin,
          i = e.borderTop;
        return c.createElement(
          f.xu, {
            padding: o ||
              ""
              .concat( t ? "20px" : "5px", " 20px " )
              .concat( r ? "20px" : "5px", " 20px" ),
            margin: l,
            borderTop: i ? "BASE_LIGHTER" : "NONE",
          },
          n
        );
      };

      const D = ( 0, a.Ps )( I() );
      const N = ( 0, a.Ps )( A() );
      const F = ( 0, a.Ps )( w() );
      const O = ( 0, a.Ps )( C() );

      const B = e => {
        return n => {
          return e ?
            {
              fill: n.baseColor.text.lighter,
              marginLeft: "2px",
              width: "18px",
              height: "auto",
              position: "absolute",
              bottom: "0",
            } :
            {
              fill: "inherit",
              marginLeft: "6px"
            };
        };
      };

      var V = e => {
        const n = e.buttonSize,
          t = e.buttonStyleFn,
          r = e.collection,
          l = e.isPopoverVisible,
          i = e.isToastVisible,
          a = e.post,
          y = e.simpleButton,
          C = e.isLinkStyle,
          w = e.susiEntry,
          A = ( 0, S.Iq )(),
          I = ( 0, s.v9 )( e => {
            return {
              isAmp: e.config.isAmp,
              authDomain: e.config.authDomain
            };
          }, s.wU ),
          M = I.isAmp,
          L = I.authDomain,
          P = r && r.name ? r.name : "",
          T = ( 0, b.Av )(),
          R = ( 0, E.pK )(),
          V = c.useState( !!l ),
          G = o()( V, 2 ),
          j = G[ 0 ],
          z = G[ 1 ],
          Y = c.useState( !!i ),
          X = o()( Y, 2 ),
          $ = X[ 0 ],
          Q = X[ 1 ],
          Z = ( e => {
            return {
              followCollectionMutation: ( e => {
                const n = ( 0, u.useMutation )( D ),
                  t = o()( n, 1 )[ 0 ];
                return c.useCallback(
                  () => {
                    return t( {
                      variables: {
                        id: e.id
                      },
                      optimisticResponse: {
                        followCollection: {
                          __typename: "Collection",
                          id: e.id,
                          viewerIsFollowing: !0,
                          isUserSubscribedToCollectionEmails: !1,
                        },
                      },
                    } );
                  },
                  [ e ]
                );
              } )( e ),
              unfollowCollectionMutation: ( e => {
                const n = ( 0, u.useMutation )( N ),
                  t = o()( n, 1 )[ 0 ];
                return c.useCallback(
                  () => {
                    return t( {
                      variables: {
                        id: e.id
                      },
                      optimisticResponse: {
                        unfollowCollection: {
                          __typename: "Collection",
                          id: e.id,
                          viewerIsFollowing: !1,
                        },
                      },
                    } );
                  },
                  [ e ]
                );
              } )( e ),
              subscribeCollectionEmailsMutation: ( e => {
                const n = ( 0, u.useMutation )( F ),
                  t = o()( n, 1 )[ 0 ];
                return c.useCallback(
                  () => {
                    return t( {
                      variables: {
                        id: e.id
                      },
                      optimisticResponse: {
                        subscribeCollectionEmails: {
                          __typename: "Collection",
                          id: e.id,
                          isUserSubscribedToCollectionEmails: !0,
                        },
                      },
                    } );
                  },
                  [ e ]
                );
              } )( e ),
              unsubscribeCollectionEmailsMutation: ( e => {
                const n = ( 0, u.useMutation )( O ),
                  t = o()( n, 1 )[ 0 ];
                return c.useCallback(
                  () => {
                    return t( {
                      variables: {
                        id: e.id
                      },
                      optimisticResponse: {
                        unsubscribeCollectionEmails: {
                          __typename: "Collection",
                          id: e.id,
                          isUserSubscribedToCollectionEmails: !1,
                        },
                      },
                    } );
                  },
                  [ e ]
                );
              } )( e ),
            };
          } )( r ),
          q = Z.followCollectionMutation,
          K = Z.unfollowCollectionMutation,
          J = Z.subscribeCollectionEmailsMutation,
          ee = Z.unsubscribeCollectionEmailsMutation,
          ne = c.useCallback( () => {
            z( !1 );
          }, [] );
        c.useEffect(
          () => {
            return _.V6.on( "scroll", ne ),
              () => {
                _.V6.off( "scroll", ne );
              };
          },
          [ ne ]
        );
        const te = c.useCallback(
            () => {
              r.viewerIsFollowing ||
                ( T.event( "collection.followed", {
                    collectionId: r.id,
                    followSource: R,
                  } ),
                  q() ),
                z( !0 );
            },
            [ r ]
          ),
          re = c.useCallback( () => {
            T.event( "collection.unfollowed", {
                collectionId: r.id,
                followSource: R,
              } ),
              K(),
              z( !1 );
          }, [] ),
          oe = c.useCallback( () => {
            z( !1 );
          }, [] ),
          le = c.useCallback( e => {
            T.event( "client.action", {
                action: "toggle-subscribe-collection-emails",
                eventType: "click",
                classAttribute: "checkbox",
              } ),
              e.target.checked ? J() : ee(),
              Q( !0 );
          }, [] ),
          ie = c.useCallback( () => {
            Q( !1 );
          }, [] );
        if ( M ) return null;
        if ( y ) return W( L, r, a, te, re, n, t );
        const ae = e => {
            const n = e.children,
              t = e.buttonSize,
              o = void 0 === t ? "SMALL" : t,
              l = e.buttonStyle,
              i = e.isPopoverVisible,
              u = e.linkStyle,
              s = void 0 === u ? null : u;
            return c.createElement( m.Q_, null, e => {
              return e ?
                null != s ?
                c.createElement(
                  f.rU, {
                    ariaControls: k,
                    ariaExpanded: i ? "true" : "false",
                    onClick: te,
                    linkStyle: s,
                  },
                  n
                ) :
                c.createElement(
                  f.zx, {
                    ariaControls: k,
                    ariaExpanded: i ? "true" : "false",
                    size: o,
                    onClick: te,
                    buttonStyle: l,
                  },
                  n
                ) :
                c.createElement(
                  p.R9, {
                    collection: r,
                    buttonStyle: "STRONG",
                    linkStyle: "OBVIOUS",
                    isButton: !C,
                    buttonSize: o,
                    operation: "register",
                    actionUrl: U( L, r, a ) || "",
                    susiEntry: w,
                  },
                  n
                );
            } );
          },
          ue = !!r.isUserSubscribedToCollectionEmails;
        return c.createElement(
          d.f,
          null,
          c.createElement(
            f.J2, {
              ariaId: k,
              isVisible: !!j,
              hide: oe,
              popoverRenderFn() {
                return c.createElement(
                  f.xu, {
                    width: "280px",
                    display: "flex",
                    flexDirection: "column",
                  },
                  c.createElement(
                    H, {
                      extraTopPadding: !0
                    },
                    c.createElement(
                      h.X6, {
                        scale: "XS"
                      },
                      "You‘re following ",
                      P
                    )
                  ),
                  c.createElement(
                    H,
                    null,
                    c.createElement(
                      h.F, {
                        scale: "M"
                      },
                      "You‘ll now see more stories from ",
                      P,
                      " across Medium."
                    )
                  ),
                  r.canToggleEmail &&
                  c.createElement(
                    H,
                    null,
                    c.createElement(
                      h.F, {
                        scale: "M"
                      },
                      c.createElement(
                        "label",
                        null,
                        c.createElement(
                          f.xu, {
                            display: "inline",
                            marginRight: "5px"
                          },
                          c.createElement( "input", {
                            type: "checkbox",
                            onChange: le,
                            checked: ue,
                          } )
                        ),
                        "Receive emails from this publication"
                      )
                    )
                  ),
                  c.createElement(
                    H, {
                      extraBottomPadding: !0
                    },
                    c.createElement(
                      h.F, {
                        scale: "M"
                      },
                      c.createElement(
                        f.rU, {
                          onClick: re,
                          linkStyle: "OBVIOUS",
                          inline: !0
                        },
                        "Unfollow publication"
                      )
                    )
                  )
                );
              },
            },
            c.createElement(
              ae, {
                isPopoverVisible: !!j,
                buttonStyle: r.viewerIsFollowing ? "OBVIOUS" : "STRONG",
                linkStyle: C ?
                  r.viewerIsFollowing ?
                  "SUBTLE" :
                  "OBVIOUS" :
                  null,
                buttonSize: n,
              },
              c.createElement(
                f.xu, {
                  display: "flex",
                  flexDirection: "row"
                },
                r.viewerIsFollowing ? "Following" : "Follow",
                r.viewerIsFollowing &&
                c.createElement(
                  "span", {
                    className: A( {
                      marginBottom: C ? null : "-6px",
                      position: "relative",
                    } ),
                  },
                  c.createElement( x.Z, {
                    className: A( B( C ) )
                  } )
                )
              )
            )
          ),
          c.createElement(
            g.N8,
            null,
            c.createElement(
              v.Z, {
                isVisible: !!$,
                hide: ie,
                duration: 2e3
              },
              c.createElement(
                h.F, {
                  scale: "M"
                },
                ue ?
                "You‘ll now receive emails from ".concat( P, "." ) :
                "You‘ll no longer receive emails from ".concat( P, "." )
              )
            )
          )
        );
      };

      const U = ( e, n, t ) => {
        return (
          n.slug &&
          ( t && t.id ? ( 0, y.TA )( e, n.slug, t.id ) : ( 0, y.Ll )( e, n.slug ) )
        );
      };

      const W = function ( e, n, t, r, o ) {
        const l =
          arguments.length > 5 && void 0 !== arguments[ 5 ] ?
          arguments[ 5 ] :
          "REGULAR",
          i =
          arguments.length > 6 && void 0 !== arguments[ 6 ] ?
          arguments[ 6 ] :
          e => {
            return e ? "STRONG" : "OBVIOUS";
          },
          a = i( !!n.viewerIsFollowing );
        return c.createElement( m.Q_, null, i => {
          return i ?
            c.createElement(
              f.zx, {
                size: l,
                onClick: n.viewerIsFollowing ? o : r,
                buttonStyle: a,
              },
              n.viewerIsFollowing ? "Following" : "Follow"
            ) :
            c.createElement(
              p.R9, {
                collection: n,
                buttonStyle: "OBVIOUS",
                isButton: !0,
                buttonSize: "REGULAR",
                operation: "register",
                actionUrl: U( e, n, t ) || "",
                susiEntry: R,
              },
              n.viewerIsFollowing ? "Following" : "Follow"
            );
        } );
      };
    },
    2330: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        r: () => p,
        f: () => f
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 8558 ),
        u = t( 7530 ),
        c = t( 67995 ),
        s = t( 28309 ),
        d = t( 14391 ),
        m = t( 90038 );

      function g() {
        const e = o()( [
          "\n  fragment PublisherLogo_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n",
        ] );
        return ( g = () => {
            return e;
          } ),
          e;
      }

      function p( e ) {
        const n = e.clamp,
          t = void 0 === n ? 1 : n,
          r = e.maxWidth,
          o = e.maxHeight,
          l = e.textScale,
          g = void 0 === l ? "S" : l,
          p = e.withTextColorSubtle,
          f = void 0 !== p && p,
          v = e.customNameColor,
          h = e.name,
          b = e.logo,
          E = e.nameTreatment,
          S = e.leadingTrim,
          _ = void 0 !== S && S,
          x = e.withWordBreak,
          y = void 0 !== x && x,
          C = ( 0, s.Iq )(),
          w = ( 0, c.n )( {
            name: "heading",
            scale: g,
            clamp: t,
            leadingTrim: _
          } ),
          A = ( ( e, n ) => {
            return t => {
              return {
                color: n || t.baseColor.text[ e ]
              };
            };
          } )( f ? "normal" : "dark", v ),
          I = y ? {
            wordBreak: "break-word"
          } : {};
        if ( !b || !b.id || E === d.m3.NAME_TREATMENT_TEXT )
          return i.createElement( "span", {
            className: C( [ w, A, I ] )
          }, h || "" );
        const M = b.id;
        let L = b.originalWidth || 100;
        let k = b.originalHeight || 100;
        if ( r && L > r ) {
          const P = L / r;
          ( L = Math.floor( L / P ) ), ( k = Math.floor( k / P ) );
        }
        if ( o && k > o ) {
          const T = k / o;
          ( L = Math.floor( L / T ) ), ( k = Math.floor( k / T ) );
        }
        return i.createElement(
          u.xu, {
            width: "".concat( L, "px" ),
            height: "".concat( k, "px" )
          },
          i.createElement( a.UV, {
            miroId: M,
            alt: h || "Publication logo",
            width: L,
            height: k,
            strategy: m._S.Resample,
          } )
        );
      }
      var f = ( 0, l.Ps )( g() );
    },
    52872: ( e, n, t ) => {
      "use strict";

      function r( e, n, t ) {
        const r = t / n || 0;

        let o = {
          xs: {
            maxHeight: 32,
            maxWidth: 320
          },
          md: {
            maxHeight: 40,
            maxWidth: 400
          },
          xl: {
            maxHeight: 60,
            maxWidth: 600
          },
        };

        return (
          r <= 2.5 ?
          ( o = {
            xs: {
              maxHeight: 50,
              maxWidth: 125
            },
            md: {
              maxHeight: 70,
              maxWidth: 175
            },
            xl: {
              maxHeight: 90,
              maxWidth: 225
            },
          } ) :
          r < 5 &&
          ( o = {
            xs: {
              maxHeight: 40,
              maxWidth: 200
            },
            md: {
              maxHeight: 50,
              maxWidth: 250
            },
            xl: {
              maxHeight: 70,
              maxWidth: 350
            },
          } ),
          o[ e ]
        );
      }
      t.d( n, {
        p: () => r
      } );
    },
    68387: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        Qw: () => h,
        Qj: () => b,
        w7: () => E
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 12291 ),
        u = t( 53976 ),
        c = t( 86280 ),
        s = t( 62181 ),
        d = t( 22091 ),
        m = t( 64504 ),
        g = t( 62630 ),
        p = t( 28309 ),
        f = t( 27952 );

      function v() {
        const e = o()( [
          "\n  fragment EntityDrivenSubscriptionCallToAction_creator on User {\n    __typename\n    id\n    name\n    isAllowEdsEnabled\n  }\n",
        ] );
        return ( v = () => {
            return e;
          } ),
          e;
      }
      var h = "entity_driven_subscription",
        b = e => {
          let n;
          let t;
          const r = e.creator;
          const o = ( 0, g.Av )();
          const l = ( 0, p.Iq )();

          const v = ( 0, a.v9 )( e => {
            return e.config.authDomain;
          } );

          const h = ( 0, c.YC )().value;

          const b = i.useCallback(
            () => {
              o.event( "entityDrivenSubCallToAction.clicked", {
                userId: null == h ? void 0 : h.id,
                entityId: null == r ? void 0 : r.id,
              } );
            },
            [ r, h, v ]
          );

          if (
            ( i.useEffect( () => {
                o.event( "experiment.eligible", {
                  experimentId: "65da28af5652"
                } );
              }, [] ),
              !( 0, u.V )( {
                name: "entity_driven_subscription_milestone_1",
                placeholder: !1,
              } ) ||
              null == r ||
              !r.isAllowEdsEnabled ||
              ( null != h && h.mediumMemberAt ) )
          )
            return null;
          const E =
            null !== ( n = null == r ? void 0 : r.name ) && void 0 !== n ?
            n :
            "",
            S =
            null !== ( t = null == r ? void 0 : r.id ) && void 0 !== t ? t : "";
          return i.createElement(
            "div", {
              className: l( e => {
                return {
                  borderTop: "4px solid ".concat( e.accentColor.border.normal ),
                  padding: "38px",
                  marginTop: "12px",
                  marginBottom: "56px",
                  backgroundColor: e.baseColor.background.light,
                };
              } ),
            },
            i.createElement(
              d.xu,
              null,
              i.createElement(
                m.X6, {
                  scale: {
                    xs: "S",
                    sm: "S",
                    md: "M",
                    lg: "M",
                    xl: "M"
                  }
                },
                "Read everything from ",
                E,
                " — and more."
              )
            ),
            i.createElement(
              d.xu, {
                paddingTop: "10px",
                paddingBottom: "30px"
              },
              i.createElement(
                m.F, {
                  scale: {
                    xs: "M",
                    sm: "M",
                    md: "L",
                    lg: "L",
                    xl: "L"
                  },
                  color: "DARKER",
                },
                "Upgrade to Medium membership to directly support independent writers and get unlimited access to everything on Medium."
              )
            ),
            i.createElement(
              d.xu, {
                display: "flex",
                flexDirection: "row"
              },
              i.createElement(
                d.zx, {
                  onClick: b,
                  href: ""
                    .concat( ( 0, f.c5 )( v ), "?subscribeToUserId=" )
                    .concat( S ),
                  buttonStyle: "STRONG",
                },
                "Become a member"
              ),
              !h &&
              i.createElement(
                m.F, {
                  scale: {
                    xs: "S",
                    sm: "S",
                    md: "M",
                    lg: "M",
                    xl: "M"
                  },
                  color: "DARKER",
                },
                i.createElement(
                  d.xu, {
                    marginLeft: "12px",
                    display: "flex",
                    flexDirection: "column",
                  },
                  "Already a member?",
                  i.createElement(
                    s.R9, {
                      operation: "login",
                      linkStyle: "OBVIOUS",
                      inline: !0,
                      susiEntry: "entity_driven_subscription_cta",
                    },
                    "Sign In"
                  )
                )
              )
            )
          );
        },
        E = ( 0, l.Ps )( v() );
    },
    47012: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        Go: () => tn,
        aU: () => on,
        Mv: () => rn,
        I_: () => an
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 63038 ),
        i = t.n( l ),
        a = t( 59713 ),
        u = t.n( a ),
        c = t( 71439 ),
        s = t( 67294 ),
        d = t( 12291 ),
        m = t( 46197 ),
        g = t( 60046 ),
        p = t( 56862 ),
        f = t( 51562 ),
        v = t( 28309 );

      function h() {
        return ( h =
          Object.assign ||
          function ( e ) {
            for ( let n = 1; n < arguments.length; n++ ) {
              const t = arguments[ n ];
              for ( const r in t )
                Object.prototype.hasOwnProperty.call( t, r ) && ( e[ r ] = t[ r ] );
            }
            return e;
          } ).apply( this, arguments );
      }
      const b = s.createElement( "path", {
        d: "M0 .5h14M0 7h14M0 13.5h14"
      } );
      const E = e => {
        return s.createElement( "svg", h( {
          width: 14,
          height: 14
        }, e ), b );
      };
      const S = e => {
          return {
            stroke: e.baseColor.fill.lighter
          };
        },
        _ = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px",
          border: "0px",
          padding: "0px",
          cursor: "pointer",
        };

      function x( e ) {
        const n = e.onClick,
          t = e.ariaLabel,
          r = void 0 === t ? "expand" : t,
          o = ( 0, v.Iq )();
        return s.createElement(
          "button", {
            className: o( _ ),
            onClick: n,
            "aria-label": r
          },
          s.createElement( E, {
            className: o( S )
          } )
        );
      }
      const y = t( 73882 ),
        C = t( 61722 ),
        w = t( 65357 ),
        A = t( 47700 ),
        I = t( 60295 ),
        M = t( 39555 ),
        L = t( 88584 ),
        k = t( 85274 ),
        P = t( 25885 ),
        T = e => {
          let n;
          let t;
          let r;
          let o;
          let l;
          let a;
          const u = e.children;
          const c = e.rules;
          const d = void 0 === c ? {} : c;
          const m = ( 0, v.Iq )();

          const g = {
            borderRadius: "1000px",
            backgroundColor: ( ( n = ( 0, v.Fg )() ),
              ( t = ( 0, P.n2 )( n.backgroundColor ) ),
              ( r = i()( t, 3 ) ),
              ( o = r[ 0 ] ),
              ( l = r[ 1 ] ),
              ( a = r[ 2 ] ),
              ( 0, P.JX )( [ o, l, a, 0.8 ] ) ),
          };

          return s.createElement( "div", {
            className: m( [ g, d ] )
          }, u );
        },
        R = t( 55388 ),
        H = t( 86280 ),
        D = t( 98281 ),
        N = t( 68421 ),
        F = t( 7530 ),
        O = t( 27572 ),
        B = t( 14391 );

      function V() {
        const e = o()( [
          "\n  fragment MetaHeaderActions_post on Post {\n    ...MetabarButtonConversionLI_post\n    isLocked\n    pendingCollection {\n      ...MetaHeaderActions_collection_common\n    }\n    ...MetabarPostMenuButton_post\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( V = () => {
            return e;
          } ),
          e;
      }

      function U() {
        const e = o()( [
          "\n  fragment MetaHeaderActions_publisher on Publisher {\n    __typename\n    ...MetaHeaderPubMenu_publisher\n    ...SearchWidget_publisher\n    ... on Collection {\n      id\n      viewerIsEditor\n      creator {\n        id\n      }\n      customStyleSheet {\n        navigation {\n          navItems {\n            name\n          }\n        }\n      }\n      ...CollectionAvatar_collection\n      ...CollectionMetabarActionsPopover_collection\n      ...MetaHeaderActions_collection_common\n    }\n    ... on User {\n      id\n      ...UserAvatar_user\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( U = () => {
            return e;
          } ),
          e;
      }

      function W() {
        const e = o()( [
          "\n  fragment MetaHeaderActions_collection_common on Collection {\n    creator {\n      id\n    }\n    viewerIsEditor\n  }\n",
        ] );
        return ( W = () => {
            return e;
          } ),
          e;
      }
      let G;
      const j = "12px";

      const z = e => {
        let n;
        let t;
        let r;
        const o = e.publisher;
        const l = e.post;
        const i = e.hideAboutLink;
        const a = void 0 !== i && i;
        const u = ( 0, H.YC )().value;
        const c = "Collection" === o.__typename ? o : null;
        const d = "User" === ( null == o ? void 0 : o.__typename ) ? o : null;
        const m = !( null == u || !u.mediumMemberAt );
        const g = c && c.creator && c.creator.id === ( null == u ? void 0 : u.id );
        const p = c && c.viewerIsEditor;
        const v = g || p;
        const h = l && l.creator && l.creator.id === ( null == u ? void 0 : u.id );
        const b = d && d.id === ( null == u ? void 0 : u.id );
        const E = !!d && ( null == u ? void 0 : u.id ) === d.id;
        const S = v || E;
        const _ = u && !m && !v && !b && !h;
        const x = ( 0, k.N )().isNewPostButtonVisible;

        const M = !(
          null == c ||
          null === ( n = c.customStyleSheet ) ||
          void 0 === n ||
          null === ( t = n.navigation ) ||
          void 0 === t ||
          null === ( r = t.navItems ) ||
          void 0 === r ||
          !r.length
        );

        return s.createElement(
          F.xu, {
            display: "flex",
            alignItems: "center",
            marginRight: S ? "24px" : "12px",
            height: "32px",
            overflow: "visible",
          },
          u &&
          !S &&
          s.createElement(
            T,
            null,
            s.createElement( w.Q, {
              publisher: o,
              hideAboutLink: a
            } )
          ),
          u &&
          s.createElement(
            O.cW, {
              source: {
                name: "search-popover"
              }
            },
            s.createElement(
              F.xu, {
                marginLeft: "8px",
                marginRight: "10px"
              },
              s.createElement(
                T,
                null,
                s.createElement( R.Rh, {
                  publisher: o,
                  setIsMetabarLocked() {},
                } )
              )
            )
          ),
          c &&
          v &&
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              F.xu, {
                marginLeft: j,
                marginRight: j
              },
              s.createElement(
                N.o, {
                  flag: B.T3.AURORA_NAV_AVAILABLE,
                  isVisible: c.isAuroraEligible && !M,
                  targetDistance: 15,
                  padding: 12,
                  text: "You can now add sections to your publication. Go to ‘Design your publication ' to get started.",
                },
                s.createElement(
                  C.o, {
                    collection: c,
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  },
                  s.createElement( y.v, {
                    collection: c,
                    size: 32
                  } )
                )
              )
            ),
            x &&
            s.createElement( L.F, {
              collection: c,
              paddingTop: "0px",
              paddingBottom: "0px",
              marginLeft: j,
            } )
          ),
          _ &&
          s.createElement(
            f.W, {
              featureString: "li-post-page-navbar",
              target: "upsell-button",
            },
            s.createElement(
              F.xu, {
                marginRight: j,
                sm: {
                  display: "none"
                }
              },
              s.createElement( I.Z, {
                post: l
              } )
            )
          ),
          u &&
          E &&
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              F.xu, {
                marginLeft: j,
                marginRight: j,
                display: "flex",
                alignItems: "center",
              },
              s.createElement(
                A.W, {
                  viewer: u,
                  setIsMetabarLocked() {}
                },
                s.createElement( D.ZP, {
                  user: u,
                  scale: "XS"
                } )
              )
            ),
            x &&
            s.createElement(
              F.xu, {
                marginLeft: j
              },
              s.createElement( k.Q, null )
            )
          )
        );
      };

      const Y = ( 0, c.Ps )( W() );
      const X = ( 0, c.Ps )( U(), w.f, R.Aw, y.d, C.s, Y, D.WQ );
      const $ = ( 0, c.Ps )( V(), I.V, Y, M.R );
      const Q = t( 70405 );
      const Z = t( 85489 );
      const q = t( 65849 );
      const K = t( 90038 );

      function J() {
        const e = o()( [
          "\n  fragment MetaHeaderBackground_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      headerScale\n      backgroundImageDisplayMode\n      backgroundImageVerticalAlignment\n      backgroundColorDisplayMode\n      backgroundColor {\n        ...getHexFromColorValue_colorValue\n        ...getOpaqueHexFromColorValue_colorValue\n      }\n      secondaryBackgroundColor {\n        ...getHexFromColorValue_colorValue\n      }\n      postBackgroundColor {\n        ...getHexFromColorValue_colorValue\n      }\n      backgroundImage {\n        ...MetaHeaderBackground_imageMetadata\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( J = () => {
            return e;
          } ),
          e;
      }

      function ee() {
        const e = o()( [
          "\n  fragment MetaHeaderBackground_imageMetadata on ImageMetadata {\n    id\n    originalWidth\n  }\n",
        ] );
        return ( ee = () => {
            return e;
          } ),
          e;
      }
      const ne =
        ( ( G = {} ),
          u()( G, B.v2.START, "top" ),
          u()( G, B.v2.END, "bottom" ),
          u()( G, B.v2.CENTER, "center" ),
          G ),
        te = e => {
          return ( 0, K.W6 )( {
            miroId: e.id,
            width: e.originalWidth || 2e3,
            strategy: K._S.Resample,
            freezeGifs: !1,
          } );
        },
        re = ( e, n ) => {
          const t = ( e || {} ).header,
            r = n ?
            ( 0, Z.eQ )( null == t ? void 0 : t.postBackgroundColor ) :
            null,
            o = n ?
            ( 0, Z.Z )( null == t ? void 0 : t.backgroundColor ) :
            ( 0, Z.eQ )( null == t ? void 0 : t.backgroundColor );
          return {
            altHex: r,
            primaryHex: o,
            backgroundColor: r || o
          };
        },
        oe = ( e, n ) => {
          let t;
          let r;
          const o = ( e || {} ).header;
          const l = ( 0, q.jb )();

          const i =
            null !==
            ( t =
              null == e || null === ( r = e.header ) || void 0 === r ?
              void 0 :
              r.headerScale ) && void 0 !== t ?
            t :
            l.headerScale;

          return n || i === B.w6.HEADER_SCALE_SMALL ?
            null :
            null == o ?
            void 0 :
            o.backgroundImage;
        },
        le = e => {
          let n;
          const t = e.customStyleSheet;
          const r = e.withAltBackground;
          const o = void 0 !== r && r;
          const l = e.children;
          const i = ( 0, v.Iq )();

          const a = ( ( e, n ) => {
            let t;
            let r;
            let o;
            let l;
            const i = ( e || {} ).header;
            const a = ( 0, q.jb )();

            const u =
              null !==
              ( t =
                null == e || null === ( r = e.header ) || void 0 === r ?
                void 0 :
                r.backgroundImageDisplayMode ) && void 0 !== t ?
              t :
              a.backgroundColorDisplayMode;

            const c = n ?
              B.PG.COLOR_DISPLAY_MODE_SOLID :
              null !==
              ( o =
                null == e || null === ( l = e.header ) || void 0 === l ?
                void 0 :
                l.backgroundColorDisplayMode ) && void 0 !== o ?
              o :
              a.backgroundColorDisplayMode;

            const d = oe( e, n );
            const m = d ? te( d ) : "";
            const g = re( e, n );
            const p = g.altHex;
            const f = g.primaryHex;
            const v = g.backgroundColor;
            return s.useMemo(
              () => {
                return n => {
                  const t = ( 0, Z.eQ )(
                      null == i ? void 0 : i.secondaryBackgroundColor
                    ),
                    r = {
                      display: "flex",
                      flexDirection: "column"
                    };
                  if (
                    ( !d &&
                      v &&
                      c === B.PG.COLOR_DISPLAY_MODE_SOLID &&
                      ( r.backgroundColor = v || n.backgroundColor ),
                      p )
                  )
                    return r;
                  const o = [];
                  if (
                    ( d && c === B.PG.COLOR_DISPLAY_MODE_SOLID ?
                      o.push(
                        "linear-gradient(to bottom, "
                        .concat( f || "transparent", ", " )
                        .concat( f || "transparent", ")" )
                      ) :
                      c === B.PG.COLOR_DISPLAY_MODE_VERTICAL_GRADIENT &&
                      o.push(
                        "linear-gradient(to bottom, "
                        .concat( f || "transparent", ", " )
                        .concat( t || "transparent", ")" )
                      ),
                      d )
                  ) {
                    let l, s;
                    o.push( "url(".concat( m, ")" ) );
                    const g =
                      null !==
                      ( l =
                        null == e ||
                        null === ( s = e.header ) ||
                        void 0 === s ?
                        void 0 :
                        s.backgroundImageVerticalAlignment ) &&
                      void 0 !== l ?
                      l :
                      a.backgroundImageVerticalAlignment,
                      h = ne[ g ];
                    switch ( ( ( r.backgroundPosition = h ), u ) ) {
                      case B.zc.IMAGE_DISPLAY_MODE_FILL:
                        r.backgroundSize = "cover";
                        break;
                      case B.zc.IMAGE_DISPLAY_MODE_TILE:
                        ( r.backgroundRepeatX = "repeat" ),
                        ( r.backgroundRepeatY = "repeat" ),
                        ( r.backgroundSize = "auto" );
                        break;
                      case B.zc.IMAGE_DISPLAY_MODE_FIT:
                        ( r.backgroundRepeatX = "no-repeat" ),
                        ( r.backgroundRepeatY = "no-repeat" ),
                        ( r.backgroundSize = "contain" );
                        break;
                      case B.zc.IMAGE_DISPLAY_MODE_AUTO:
                        ( r.backgroundRepeatX = "no-repeat" ),
                        ( r.backgroundRepeatY = "no-repeat" ),
                        ( r.backgroundSize = "auto" );
                    }
                  }
                  return (
                    o.length > 0 && ( r.backgroundImage = o.join( ", " ) ), r
                  );
                };
              },
              [ e, m ]
            );
          } )( t, o );

          const u = ( null !== ( n = null == t ? void 0 : t.header ) && void 0 !== n ?
            n :
            {}
          ).backgroundImage;

          return s.createElement(
            s.Fragment,
            null,
            u &&
            s.createElement(
              Q.q,
              null,
              s.createElement( "link", {
                rel: "preload",
                href: te( u ),
                as: "image",
              } )
            ),
            s.createElement( "div", {
              className: i( a )
            }, l )
          );
        },
        ie = ( 0, c.Ps )( ee() ),
        ae = ( 0, c.Ps )( J(), ie, Z.xW, Z.hB ),
        ue = t( 83484 ),
        ce = t( 55014 ),
        se = t( 84014 ),
        de = t( 65393 ),
        me = t( 62117 ),
        ge = t( 22091 ),
        pe = t( 64504 ),
        fe = t( 51064 );

      function ve() {
        const e = o()( [
          "\n  fragment MetaHeaderNavVertical_publisher on Publisher {\n    id\n    ...PublisherAboutLink_publisher\n    ...MetaHeaderNav_publisher\n    ...MetaHeaderNavLink_publisher\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( ve = () => {
            return e;
          } ),
          e;
      }

      function he() {
        const e = o()( [
          "\n  fragment MetaHeaderNavVertical_customStyleSheet on CustomStyleSheet {\n    id\n    navigation {\n      navItems {\n        ...MetaHeaderNavLink_headerNavigationItem\n      }\n    }\n    ...MetaHeaderNav_customStyleSheet\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( he = () => {
            return e;
          } ),
          e;
      }
      const be = s.forwardRef( ( e, n ) => {
          const t = e.customStyleSheet,
            r = e.publisher,
            o = ( 0, se.yR )( t, r ),
            l = o.navItems;
          return o.isNavVisible ?
            s.createElement(
              ge.xu, {
                display: "none",
                sm: {
                  display: "flex"
                },
                flexDirection: "column",
                tag: "nav",
                width: "100%",
                padding: "8px 0 16px 0",
                ref: n,
              },
              s.createElement(
                pe.F, {
                  scale: "XL",
                  tag: "span"
                },
                l.map( ( e, n ) => {
                  return s.createElement(
                    ge.xu, {
                      key: n,
                      tag: "span",
                      margin: "14px 0"
                    },
                    s.createElement( de.d9, {
                      navItem: e,
                      publisher: r
                    } )
                  );
                } ),
                s.createElement(
                  ge.xu, {
                    tag: "span",
                    margin: "14px 0"
                  },
                  s.createElement( me.w, {
                    publisher: r
                  } )
                )
              )
            ) :
            null;
        } ),
        Ee = ( 0, c.Ps )( he(), se.Qc, de.Ze ),
        Se = ( 0, c.Ps )( ve(), me.u, se.Y$, de.ud ),
        _e = t( 22669 ),
        xe = t( 67995 );

      function ye() {
        const e = o()( [
          "\n  fragment MetaHeaderTagline_publisher on Publisher {\n    __typename\n    ... on Collection {\n      tagline\n    }\n    ... on User {\n      bio\n    }\n  }\n",
        ] );
        return ( ye = () => {
            return e;
          } ),
          e;
      }

      function Ce() {
        const e = o()( [
          "\n  fragment MetaHeaderTagline_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      taglineColor {\n        ...getHexFromColorValue_colorValue\n      }\n      taglineTreatment\n    }\n  }\n  ",
          "\n",
        ] );
        return ( Ce = () => {
            return e;
          } ),
          e;
      }
      const we = e => {
          let n;
          const t = e.publisher;
          const r = e.customStyleSheet;
          const o = e.color;
          const l = void 0 === o ? "LIGHTER" : o;
          const i = ( 0, v.Iq )();
          const a = ( 0, xe.n )( {
            name: "subtitle",
            scale: "M",
            color: l
          } );

          const u = ( null !== ( n = null == r ? void 0 : r.header ) && void 0 !== n ?
            n :
            {}
          ).taglineColor;

          const c = ( 0, Z.eQ )( u );
          const d = c ? {
            color: c
          } : {};
          const m = Ae( r, t );
          const g = m.tagline;
          return m.isTaglineVisible ?
            s.createElement(
              "span", {
                className: i( [ a, d ] )
              },
              s.createElement( _e.Z, null, g )
            ) :
            null;
        },
        Ae = ( e, n ) => {
          let t;
          let r;
          const o = ( 0, q.jb )();

          const l =
            null !==
            ( t =
              null == e || null === ( r = e.header ) || void 0 === r ?
              void 0 :
              r.taglineTreatment ) && void 0 !== t ?
            t :
            o.taglineTreatment;

          const i = "Collection" === n.__typename ? n.tagline : n.bio;
          return {
            tagline: i,
            isTaglineVisible: !!i && l === B.KI.TAGLINE_TREATMENT_HEADER,
          };
        },
        Ie = ( 0, c.Ps )( Ce(), Z.xW ),
        Me = ( 0, c.Ps )( ye() ),
        Le = t( 3658 ),
        ke = t( 6401 ),
        Pe = t( 62181 ),
        Te = t( 24438 ),
        Re = t( 74465 );

      function He() {
        const e = o()( [
          "\n  fragment MetaHeaderTop_publisher on Publisher {\n    __typename\n    ... on Collection {\n      slug\n      ...CollectionMetabarActionsPopover_collection\n      ...CollectionAvatar_collection\n      ...MetaHeaderTop_collection\n    }\n    ... on User {\n      username\n      id\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( He = () => {
            return e;
          } ),
          e;
      }

      function De() {
        const e = o()( [
          "\n  fragment MetaHeaderTop_post on Post {\n    id\n    collection {\n      ...MetaHeaderTop_collection\n    }\n    pendingCollection {\n      ...MetaHeaderTop_collection\n    }\n  }\n  ",
          "\n",
        ] );
        return ( De = () => {
            return e;
          } ),
          e;
      }

      function Ne() {
        const e = o()( [
          "\n  fragment MetaHeaderTop_collection on Collection {\n    id\n    viewerIsEditor\n    creator {\n      id\n    }\n  }\n",
        ] );
        return ( Ne = () => {
            return e;
          } ),
          e;
      }
      let Fe;
      const Oe = "16px";
      const Be = "10px";

      const Ve = e => {
        let n;
        let t;
        const r = e.publisher;
        const o = e.post;
        const l = e.withBottomBorder;

        const i = ( 0, d.v9 )( e => {
          return e.config.authDomain;
        } );

        const a = ( 0, H.YC )().value;

        const u =
          "Collection" === ( null == r ? void 0 : r.__typename ) ?
          r.slug :
          void 0;

        const c =
          "User" === ( null == r ? void 0 : r.__typename ) ?
          r.username :
          null;

        const m =
          "Collection" === ( null == r ? void 0 : r.__typename ) ?
          r :
          null !== ( n = null == o ? void 0 : o.pendingCollection ) &&
          void 0 !== n ?
          n :
          null == o ?
          void 0 :
          o.collection;

        const v =
          a &&
          m &&
          ( null == m || null === ( t = m.creator ) || void 0 === t ?
            void 0 :
            t.id ) === ( null == a ? void 0 : a.id );

        const h = null == m ? void 0 : m.viewerIsEditor;
        const b = v || h;

        const E =
          a &&
          "User" === ( null == r ? void 0 : r.__typename ) &&
          a.id === r.id;

        return s.createElement(
          ge.xu, {
            zIndex: Re.ZP.metabar,
            position: "relative",
            borderBottom: l ? "BASE_LIGHTER" : "NONE",
          },
          s.createElement(
            ge.Pm,
            null,
            s.createElement(
              ge.xu, {
                height: ( 0, Te.a )( 62 ),
                display: "flex",
                alignItems: "center",
              },
              s.createElement(
                ge.xu, {
                  flexGrow: "1",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                },
                !a &&
                s.createElement(
                  f.W, {
                    featureString: "lo-meta-header",
                    target: "sign-up-button",
                  },
                  s.createElement(
                    ge.xu, {
                      marginRight: "16px"
                    },
                    s.createElement(
                      Pe.R9, {
                        susiEntry: "nav_reg",
                        isButton: !0,
                        buttonStyle: "OBVIOUS",
                        operation: "register",
                      },
                      "Get started"
                    )
                  )
                ),
                s.createElement( ke.a, {
                  removeSpacing: !0,
                  isButton: !1,
                  collectionSlug: u,
                  postId: null == o ? void 0 : o.id,
                  username: c,
                } )
              ),
              "Collection" === ( null == r ? void 0 : r.__typename ) &&
              b &&
              s.createElement(
                ge.xu, {
                  marginRight: Oe,
                  sm: {
                    marginRight: Be
                  }
                },
                s.createElement(
                  C.o, {
                    collection: r
                  },
                  s.createElement( y.v, {
                    collection: r,
                    size: 32
                  } )
                )
              ),
              "User" === ( null == r ? void 0 : r.__typename ) &&
              a &&
              E &&
              s.createElement(
                ge.xu, {
                  marginRight: Oe,
                  sm: {
                    marginRight: Be
                  }
                },
                s.createElement(
                  A.W, {
                    viewer: a,
                    setIsMetabarLocked() {}
                  },
                  s.createElement( D.ZP, {
                    user: a,
                    scale: "XS"
                  } )
                )
              ),
              s.createElement(
                p.Z, {
                  href: "https://".concat( i, "/" ),
                  ariaLabel: "Homepage"
                },
                s.createElement( g.YR, null )
              )
            )
          )
        );
      };

      const Ue = ( 0, c.Ps )( Ne() );
      const We = ( 0, c.Ps )( De(), Ue );
      const Ge = ( 0, c.Ps )( He(), C.s, y.d, Ue );
      const je = t( 78820 );
      const ze = t( 34664 );
      const Ye = t( 82395 );
      const Xe = t( 15849 );
      const $e = t( 98701 );
      const Qe = t( 60054 );

      function Ze() {
        const e = o()( [
          "\n  fragment MetaHeader_post on Post {\n    id\n    ...SusiClickable_post\n    ...MetaHeaderTop_post\n    ...MetaHeaderActions_post\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( Ze = () => {
            return e;
          } ),
          e;
      }

      function qe() {
        const e = o()( [
          "\n  fragment MetaHeader_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      headerScale\n      horizontalAlignment\n    }\n    ...MetaHeaderBackground_customStyleSheet\n    ...MetaHeaderEngagement_customStyleSheet\n    ...MetaHeaderLogo_customStyleSheet\n    ...MetaHeaderNavVertical_customStyleSheet\n    ...MetaHeaderTagline_customStyleSheet\n    ...MetaHeaderThemeProvider_customStyleSheet\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( qe = () => {
            return e;
          } ),
          e;
      }

      function Ke() {
        const e = o()( [
          "\n  fragment MetaHeader_publisher on Publisher {\n    __typename\n    name\n    ...MetaHeaderEngagement_publisher\n    ...MetaHeaderLogo_publisher\n    ...MetaHeaderNavVertical_publisher\n    ...MetaHeaderTagline_publisher\n    ...MetaHeaderThemeProvider_publisher\n    ...MetaHeaderActions_publisher\n    ...MetaHeaderTop_publisher\n    ... on Collection {\n      id\n      favicon {\n        id\n      }\n      tagline\n      ...CollectionNavigationContextProvider_collection\n    }\n    ... on User {\n      id\n      bio\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( Ke = () => {
            return e;
          } ),
          e;
      }

      const Je = {
        overflowX: "scroll",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "::-webkit-scrollbar": {
          display: "none"
        },
      };

      const en =
        ( ( Fe = {} ),
          u()( Fe, B.v2.START, "flex-start" ),
          u()( Fe, B.v2.END, "flex-end" ),
          u()( Fe, B.v2.CENTER, "center" ),
          Fe );

      const nn = e => {
        return {
          maxWidth: ( 0, Te.a )( e.maxWidths.inset ),
          minWidth: "0",
          width: "100%",
          marginTop: "12px",
        };
      };

      var tn = e => {
        let n;
        let t;
        let r;
        const o = e.publisher;
        const l = e.customStyleSheet;
        const a = e.post;
        const u = e.forceSmall;
        const c = void 0 !== u && u;
        const h = e.disableAboutLink;
        const b = void 0 !== h && h;
        const E = e.disableFollowersLink;
        const S = void 0 !== E && E;
        const _ = ( 0, ce.uP )( l, o ).shouldShowLogo;
        const y = ( 0, v.Iq )();
        const C = ( 0, v.Fg )();

        const w = ( 0, d.v9 )( e => {
          return e.config.authDomain;
        } );

        const A = ( 0, d.v9 )( e => {
          return e.config.isAmp;
        } );

        const I = ( 0, H.YC )().value;
        const M = ( 0, q.jb )();
        const L = ln( {
          customStyleSheet: l,
          forceSmall: c
        } );
        const k = an( {
          publisher: o,
          customStyleSheet: l,
          forceSmall: c
        } );
        const P = ( 0, se.yR )( l, o ).isNavVisible;

        const T = ( () => {
          const e = ( 0, fe.O )( !1 ),
            n = i()( e, 3 ),
            t = n[ 0 ],
            r = n[ 1 ],
            o = n[ 2 ],
            l = s.useRef( null ),
            a = e => {
              const n = l.current,
                t = e.target;
              n && t && !n.contains( t ) && o();
            };
          return s.useEffect( () => {
            return document.addEventListener( "click", a, !0 ),
              document.addEventListener( "touch", a, !0 ),
              () => {
                document.removeEventListener( "click", a, !0 ),
                  document.removeEventListener( "touch", a, !0 );
              };
          }, [] ), {
            verticalNavRef: l,
            isVerticalNavVisible: t,
            showVerticalNav: r,
            hideVerticalNav: o,
          };
        } )();

        const R = T.verticalNavRef;
        const D = T.isVerticalNavVisible;
        const N = T.showVerticalNav;
        const F = T.hideVerticalNav;
        const O = L === B.w6.HEADER_SCALE_SMALL;
        const V = O && _;
        const U = C.newFonts.heading;

        const W = V ?
          void 0 :
          ( 0, $e.mu )( e => {
            const n = i()( e, 1 )[ 0 ];
            return ( 0, Te.a )( -1 * n );
          }, ( 0, Xe.AC )( U, "XS" ) );

        const G = O ?
          B.v2.START :
          null !==
          ( n =
            null == l || null === ( t = l.header ) || void 0 === t ?
            void 0 :
            t.horizontalAlignment ) && void 0 !== n ?
          n :
          M.horizontalAlignment;

        const j = !!oe( l, c );
        const Y = !O || P;
        const X = O ? ( P ? 184 : 115 ) : 334;
        const $ = O ? 115 : X - ( Y ? 70 : 0 );
        const Q = ( 0, je.PB )( o, w );
        const Z = "".concat( ( 0, je.Zu )( o ), " Homepage" );
        const K = !!re( l, c ).backgroundColor;
        const J = !( j || K ) || Y;
        const ee = "Collection" === o.__typename ? o : null;
        return s.createElement(
          m.Jr, {
            collection: ee
          },
          ee &&
          s.createElement( Qe.s, {
            faviconImageId: null == ee || null === ( r = ee.favicon ) || void 0 === r ?
              void 0 :
              r.id,
          } ),
          s.createElement(
            ge.xu, {
              boxShadow: J ?
                "inset 0 -1px 0 ".concat( C.baseColor.border.lighter ) :
                void 0,
              minHeight: ( 0, Te.a )( X ),
              sm: {
                boxShadow: "inset 0 -1px 0 ".concat(
                  C.baseColor.border.lighter
                ),
                minHeight: ( 0, Te.a )( 230 ),
              },
            },
            s.createElement(
              Le.OD, {
                publisher: o,
                customStyleSheet: l,
                withAltBackground: c
              },
              s.createElement(
                le, {
                  customStyleSheet: l,
                  withAltBackground: c
                },
                s.createElement(
                  ge.xu, {
                    display: "none",
                    sm: {
                      display: "block"
                    }
                  },
                  s.createElement( Ve, {
                    withBottomBorder: !( j || K ),
                    post: a,
                    publisher: o,
                  } )
                ),
                s.createElement(
                  ge.Pm,
                  null,
                  s.createElement(
                    ge.xu, {
                      display: "flex",
                      flexDirection: O ? "row" : "column",
                      alignItems: O ? "center" : void 0,
                      justifyContent: "space-between",
                      minHeight: ( 0, Te.a )( $ ),
                      sm: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        minHeight: ( 0, Te.a )( 98 ),
                      },
                    },
                    !O &&
                    s.createElement(
                      ge.xu, {
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginTop: ( 0, Te.a )( 41 ),
                        sm: {
                          display: "none"
                        },
                        zIndex: Re.ZP.metabar,
                      },
                      s.createElement(
                        ze.f,
                        null,
                        ( !I || A ) &&
                        s.createElement(
                          s.Fragment,
                          null,
                          s.createElement(
                            f.W, {
                              featureString: "lo-meta-header",
                              target: "sign-in-link",
                            },
                            s.createElement(
                              pe.F, {
                                scale: "M"
                              },
                              s.createElement(
                                Pe.R9, {
                                  linkStyle: "OBVIOUS",
                                  operation: "login",
                                  susiEntry: "nav_reg",
                                },
                                "Sign in"
                              )
                            )
                          ),
                          s.createElement(
                            f.W, {
                              featureString: "lo-meta-header",
                              target: "sign-up-button",
                            },
                            s.createElement(
                              ge.xu, {
                                marginLeft: "14px",
                                marginRight: "24px"
                              },
                              s.createElement(
                                Pe.R9, {
                                  buttonSize: "REGULAR",
                                  isButton: !0,
                                  buttonStyle: "OBVIOUS",
                                  operation: "register",
                                  post: a,
                                  susiEntry: "nav_reg",
                                },
                                "Get started"
                              )
                            )
                          )
                        ),
                        I &&
                        s.createElement( z, {
                          publisher: o,
                          post: a,
                          hideAboutLink: b,
                        } )
                      ),
                      s.createElement(
                        p.Z, {
                          href: "https://".concat( w, "/" ),
                          ariaLabel: "Homepage",
                        },
                        s.createElement( g.YR, {
                          contrast: K ? "darker" : "normal",
                        } )
                      )
                    ),
                    s.createElement(
                      ge.xu, {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "flex-start",
                      },
                      s.createElement(
                        "div", {
                          className: y( {
                            paddingTop: W,
                            display: "flex",
                            width: "100%",
                          } ),
                        },
                        s.createElement(
                          ge.xu, {
                            width: "100%",
                            display: "flex",
                            flexDirection: O ? "row" : "column",
                            alignItems: O ?
                              _ ?
                              "center" :
                              "flex-end" :
                              en[ G ],
                            marginBottom: O ? "0px" : "38px",
                            marginTop: O ? "-32px" : "25px",
                            textAlign: G === B.v2.CENTER ? "center" : void 0,
                            flexWrap: "wrap",
                            sm: {
                              display: "flex",
                              alignItems: O ? "flex-start" : void 0,
                              flexDirection: O ? "column" : void 0,
                              marginBottom: "28px",
                              marginTop: "0px",
                            },
                          },
                          s.createElement(
                            ge.xu, {
                              marginLeft: G === B.v2.START ? void 0 : ( 0, Te.a )( 24 ),
                              marginRight: ( 0, Te.a )( 24 ),
                              sm: {
                                marginTop: "28px"
                              },
                              marginTop: "32px",
                            },
                            s.createElement(
                              p.Z, {
                                href: Q,
                                ariaLabel: Z
                              },
                              s.createElement( ce.fI, {
                                publisher: o,
                                customStyleSheet: l,
                                withAltNameTreatment: c,
                                forcedTextScale: O ? "XS" : void 0,
                                withTextColorSubtle: !1,
                              } )
                            )
                          ),
                          k &&
                          s.createElement(
                            "div", {
                              className: y( nn )
                            },
                            s.createElement( we, {
                              customStyleSheet: l,
                              publisher: o,
                            } )
                          ),
                          !Y &&
                          s.createElement(
                            ge.xu, {
                              sm: {
                                display: "none"
                              },
                              marginTop: "32px"
                            },
                            s.createElement( ue.i_, {
                              customStyleSheet: l,
                              publisher: o,
                              disableAboutLink: b,
                              disableFollowersLink: S,
                            } )
                          )
                        )
                      ),
                      O &&
                      s.createElement(
                        ge.xu, {
                          display: "flex",
                          justifySelf: "flex-end",
                          alignItems: "center",
                          sm: {
                            display: "none"
                          },
                          zIndex: Re.ZP.metabar,
                        },
                        s.createElement(
                          ze.f,
                          null,
                          ( !I || A ) &&
                          s.createElement(
                            s.Fragment,
                            null,
                            s.createElement(
                              f.W, {
                                featureString: "lo-meta-header",
                                target: "sign-in-link",
                              },
                              s.createElement(
                                pe.F, {
                                  scale: "M"
                                },
                                s.createElement(
                                  Pe.R9, {
                                    linkStyle: "OBVIOUS",
                                    operation: "login",
                                    susiEntry: "nav_reg",
                                  },
                                  "Sign in"
                                )
                              )
                            ),
                            s.createElement(
                              f.W, {
                                featureString: "lo-meta-header",
                                target: "sign-up-button",
                              },
                              s.createElement(
                                ge.xu, {
                                  marginLeft: "14px",
                                  marginRight: "24px",
                                  marginTop: "-3px",
                                  marginBottom: "-3px",
                                },
                                s.createElement(
                                  Pe.R9, {
                                    isButton: !0,
                                    buttonSize: "REGULAR",
                                    buttonStyle: "OBVIOUS",
                                    operation: "register",
                                    post: a,
                                    susiEntry: "nav_reg",
                                  },
                                  "Get started"
                                )
                              )
                            )
                          ),
                          I &&
                          s.createElement( z, {
                            publisher: o,
                            hideAboutLink: b,
                          } )
                        ),
                        s.createElement(
                          p.Z, {
                            href: "https://".concat( w, "/" ),
                            ariaLabel: "Homepage",
                          },
                          s.createElement( g.YR, {
                            contrast: K ? "darker" : "normal",
                          } )
                        )
                      )
                    )
                  )
                )
              )
            ),
            s.createElement(
              ge.xu, {
                display: Y ? "block" : "none",
                sm: {
                  display: "block"
                }
              },
              s.createElement(
                ge.Pm,
                null,
                s.createElement(
                  "div", {
                    className: P ? y( Je ) : void 0
                  },
                  s.createElement(
                    ge.xu, {
                      height: ( 0, Te.a )( 70 ),
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "1px",
                    },
                    s.createElement(
                      ge.xu, {
                        margin: G === B.v2.CENTER ? "0 auto" : void 0,
                        sm: P ? {
                          margin: "0"
                        } : void 0,
                      },
                      s.createElement( ue.i_, {
                        customStyleSheet: l,
                        publisher: o,
                        disableAboutLink: b,
                        disableFollowersLink: S,
                        followersLinkInFront: !0,
                      } )
                    ),
                    P &&
                    s.createElement(
                      ge.xu, {
                        display: "none",
                        sm: {
                          display: "block"
                        },
                        position: "absolute",
                        right: "24px",
                      },
                      D ?
                      s.createElement( Ye.R, {
                        onClick: F,
                        ariaLabel: "Collapse navbar",
                      } ) :
                      s.createElement( x, {
                        onClick: N,
                        ariaLabel: "Expand navbar",
                      } )
                    )
                  )
                )
              )
            )
          ),
          P &&
          D &&
          s.createElement(
            ge.xu, {
              borderBottom: "BASE_LIGHTER"
            },
            s.createElement(
              ge.Pm,
              null,
              s.createElement( be, {
                ref: R,
                customStyleSheet: l,
                publisher: o,
              } )
            )
          )
        );
      };

      var rn = ( 0, c.Ps )( Ke(), m.hD, ue.QP, ce.XN, Se, Me, Le.k8, X, Ge );
      var on = ( 0, c.Ps )( qe(), ae, ue.Al, ce.Ig, Ee, Ie, Le.a6 );

      const ln =
        ( ( 0, c.Ps )( Ze(), Pe.qU, We, $ ),
          e => {
            let n;
            let t;
            const r = e.customStyleSheet;
            const o = e.forceSmall;
            const l = void 0 !== o && o;
            const i = ( 0, q.jb )();
            return l ?
              B.w6.HEADER_SCALE_SMALL :
              null !==
              ( n =
                null == r || null === ( t = r.header ) || void 0 === t ?
                void 0 :
                t.headerScale ) && void 0 !== n ?
              n :
              i.headerScale;
          } );

      var an = e => {
        const n = e.publisher,
          t = e.customStyleSheet,
          r = e.forceSmall,
          o = void 0 !== r && r,
          l = Ae( t, n ).isTaglineVisible,
          i = ln( {
            customStyleSheet: t,
            forceSmall: o
          } );
        return l && i !== B.w6.HEADER_SCALE_SMALL;
      };
    },
    83484: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        i_: () => B,
        Al: () => V,
        QP: () => U
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 59713 ),
        u = t.n( a ),
        c = t( 63038 ),
        s = t.n( c ),
        d = t( 46829 ),
        m = t( 68387 ),
        g = t( 53976 ),
        p = t( 86549 ),
        f = t( 7530 ),
        v = t( 80362 ),
        h = t( 64504 ),
        b = t( 62630 ),
        E = t( 27572 ),
        S = t( 51512 ),
        _ = t( 8403 );

      function x() {
        const e = o()( [
          "\n  fragment AutoFollowWrapper_user on User {\n    id\n    isFollowing\n    name\n  }\n",
        ] );
        return ( x = () => {
            return e;
          } ),
          e;
      }

      function y( e, n ) {
        const t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          let r = Object.getOwnPropertySymbols( e );
          n &&
            ( r = r.filter( n => {
              return Object.getOwnPropertyDescriptor( e, n ).enumerable;
            } ) ),
            t.push.apply( t, r );
        }
        return t;
      }

      function C( e ) {
        for ( let n = 1; n < arguments.length; n++ ) {
          const t = null != arguments[ n ] ? arguments[ n ] : {};
          n % 2 ?
            y( Object( t ), !0 ).forEach( n => {
              u()( e, n, t[ n ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) :
            y( Object( t ) ).forEach( n => {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor( t, n )
              );
            } );
        }
        return e;
      }
      const w = e => {
          const n = e.user,
            t = e.children,
            r = ( 0, _.PM )(),
            o = ( 0, E.Qi )(),
            l = ( 0, S.P7 )( r || "" ).name,
            a = ( 0, b.Av )(),
            u = n.isFollowing,
            c = i.useState( !1 ),
            x = s()( c, 2 ),
            y = x[ 0 ],
            w = x[ 1 ],
            A = ( 0, g.V )( {
              name: "entity_driven_subscription_milestone_1",
              placeholder: !1,
            } ),
            I = ( 0, d.useMutation )( p.Vy, {
              onCompleted() {
                w( !0 ),
                  a.event( "user.followed", {
                    targetUserId: n.id,
                    followSource: o,
                  } );
              },
            } ),
            M = s()( I, 1 )[ 0 ];
          if (
            ( i.useEffect(
                () => {
                  l !== m.Qw ||
                    u ||
                    M( {
                      variables: {
                        targetUserId: n.id
                      },
                      optimisticResponse: {
                        followUser: C(
                          C( {}, n ), {}, {
                            id: n.id,
                            isFollowing: !0
                          }
                        ),
                      },
                    } );
                },
                [ l ]
              ),
              !A )
          )
            return i.createElement( i.Fragment, null, t );
          const L = () => {
            w( !1 );
          };
          return i.createElement(
            "div",
            null,
            i.createElement(
              v.Z, {
                placement: "bottom",
                targetDistance: 15,
                noPortal: !0,
                isVisible: !!y,
                hide: L,
                popoverRenderFn() {
                  return i.createElement(
                    f.xu, {
                      padding: "20px",
                      maxWidth: "225px"
                    },
                    i.createElement(
                      f.xu, {
                        marginBottom: "8px"
                      },
                      i.createElement(
                        h.F, {
                          scale: "L",
                          color: "DARKER"
                        },
                        i.createElement(
                          "strong",
                          null,
                          "You're following ",
                          n.name
                        )
                      )
                    ),
                    i.createElement(
                      f.xu, {
                        marginBottom: "8px"
                      },
                      i.createElement(
                        h.F, {
                          scale: "S",
                          color: "DARKER"
                        },
                        "You'll see more stories from them accross Medium."
                      )
                    ),
                    i.createElement(
                      h.F, {
                        scale: "S"
                      },
                      i.createElement(
                        f.rU, {
                          linkStyle: "OBVIOUS",
                          onClick: L
                        },
                        "Got it"
                      )
                    )
                  );
                },
              },
              t
            )
          );
        },
        A = ( 0, l.Ps )( x() ),
        I = t( 84014 ),
        M = t( 42691 ),
        L = t( 62117 ),
        k = t( 45755 ),
        P = t( 15886 ),
        T = t( 86280 ),
        R = t( 68421 ),
        H = t( 22091 ),
        D = t( 14391 );

      function N() {
        const e = o()( [
          "\n  fragment MetaHeaderEngagement_publisher on Publisher {\n    __typename\n    ...MetaHeaderNav_publisher\n    ...PublisherAboutLink_publisher\n    ...PublisherFollowButton_publisher\n    ...PublisherFollowerCount_publisher\n    ... on Collection {\n      creator {\n        id\n      }\n    }\n    ... on User {\n      ...AutoFollowWrapper_user\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( N = () => {
            return e;
          } ),
          e;
      }

      function F() {
        const e = o()( [
          "\n  fragment MetaHeaderEngagement_customStyleSheet on CustomStyleSheet {\n    ...MetaHeaderNav_customStyleSheet\n  }\n  ",
          "\n",
        ] );
        return ( F = () => {
            return e;
          } ),
          e;
      }

      const O = e => {
        const n = e.publisher;
        return "User" === n.__typename ?
          i.createElement(
            w, {
              user: n
            },
            i.createElement( k.D, {
              publisher: n,
              susiEntry: "follow_profile",
              buttonSize: "REGULAR",
            } )
          ) :
          i.createElement(
            i.Fragment,
            null,
            i.createElement( k.D, {
              publisher: n,
              susiEntry: "follow_header",
              buttonSize: "REGULAR",
            } )
          );
      };

      var B = e => {
        const n = e.customStyleSheet,
          t = e.publisher,
          r = e.disableAboutLink,
          o = void 0 !== r && r,
          l = e.disableFollowersLink,
          a = void 0 !== l && l,
          u = e.followersLinkInFront,
          c = void 0 !== u && u,
          s = ( 0, T.YC )().value,
          d = ( ( e, n ) => {
            let t;
            const r = !!n && "User" === e.__typename && n.id === e.id;

            const o = !!n &&
              "Collection" === e.__typename &&
              n.id ===
              ( null == e || null === ( t = e.creator ) || void 0 === t ?
                void 0 :
                t.id );

            return {
              isFollowButtonVisible: !r && !o,
              isFollowerCountVisible: ( 0, P.ds )( e ).isFollowerCountVisible,
            };
          } )( t, s ),
          m = d.isFollowButtonVisible,
          g = d.isFollowerCountVisible,
          p = ( 0, I.yR )( n, t ).isNavVisible,
          f = i.createElement(
            H.xu, {
              marginTop: "-14px",
              marginBottom: "-16px"
            },
            i.createElement( O, {
              publisher: t
            } )
          );
        return i.createElement(
          h.F, {
            tag: "span",
            scale: "L",
            leadingTrim: !0
          },
          i.createElement(
            H.xu, {
              display: "flex",
              alignItems: "center"
            },
            m && c && i.createElement( H.xu, {
              marginRight: "32px"
            }, f ),
            g &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                H.xu, {
                  display: "inline-flex",
                  flexDirection: "column",
                  marginRight: "12px",
                },
                i.createElement(
                  R.o, {
                    flag: D.T3.FOLLOWERS_TOOLTIP,
                    isVisible: "User" === t.__typename &&
                      t.id === ( null == s ? void 0 : s.id ),
                    targetDistance: 15,
                    text: "You can now see a full list of your followers here, and people you follow from the About page.",
                  },
                  i.createElement( P.Jh, {
                    publisher: t,
                    disableLink: a
                  } )
                ),
                p && a && i.createElement( M.t, null )
              ),
              p &&
              i.createElement(
                H.xu, {
                  marginLeft: "12px",
                  display: "block",
                  sm: {
                    display: "none"
                  },
                },
                "·"
              )
            ),
            p &&
            i.createElement(
              H.xu, {
                marginLeft: "12px",
                display: "block",
                sm: {
                  display: "none"
                },
              },
              i.createElement( I.Ex, {
                customStyleSheet: n,
                publisher: t
              } )
            ),
            i.createElement(
              H.xu, {
                marginLeft: "12px",
                display: "flex",
                flexDirection: "column",
                sm: p ? {
                  display: "none"
                } : void 0,
              },
              i.createElement( L.w, {
                publisher: t,
                disableLink: o
              } ),
              p && o && i.createElement( M.t, null )
            ),
            m &&
            !c &&
            i.createElement(
              H.xu, {
                marginLeft: "24px",
                sm: {
                  marginLeft: p ? "0px" : "24px"
                },
              },
              f
            )
          )
        );
      };

      var V = ( 0, l.Ps )( F(), I.Qc );
      var U = ( 0, l.Ps )( N(), I.Y$, L.u, k.f, P.jS, A );
    },
    55014: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        fI: () => H,
        uP: () => D,
        Ig: () => F,
        XN: () => O
      } );
      let r;
      let o;
      let l;
      let i;
      const a = t( 28655 );
      const u = t.n( a );
      const c = t( 59713 );
      const s = t.n( c );
      const d = t( 71439 );
      const m = t( 67294 );
      const g = t( 2330 );
      const p = t( 52872 );
      const f = t( 49925 );
      const v = t( 85489 );
      const h = t( 65849 );
      const b = t( 8558 );
      const E = t( 67995 );
      const S = t( 28309 );
      const _ = t( 14391 );
      const x = t( 90038 );

      function y() {
        const e = u()( [
          "\n  fragment MetaHeaderLogo_publisher on Publisher {\n    __typename\n    id\n    name\n    ... on Collection {\n      logo {\n        ...MetaHeaderLogo_imageMetadata\n        ...PublisherLogo_image\n      }\n    }\n    ...auroraHooks_publisher\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ] );
        return ( y = () => {
            return e;
          } ),
          e;
      }

      function C() {
        const e = u()( [
          "\n  fragment MetaHeaderLogo_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      nameColor {\n        ...getHexFromColorValue_colorValue\n      }\n      nameTreatment\n      postNameTreatment\n      logoImage {\n        ...MetaHeaderLogo_imageMetadata\n      }\n      logoScale\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( C = () => {
            return e;
          } ),
          e;
      }

      function w() {
        const e = u()( [
          "\n  fragment MetaHeaderLogo_imageMetadata on ImageMetadata {\n    id\n    originalWidth\n    originalHeight\n    ...PublisherLogo_image\n  }\n  ",
          "\n",
        ] );
        return ( w = () => {
            return e;
          } ),
          e;
      }

      const A = ( e, n ) => {
        let t;
        let r;

        const o =
          null !== ( t = null == n ? void 0 : n.originalWidth ) &&
          void 0 !== t ?
          t :
          0;

        const l =
          null !== ( r = null == n ? void 0 : n.originalHeight ) &&
          void 0 !== r ?
          r :
          0;

        const i = Math.min( e.width / o, e.height / l );
        return {
          width: Math.floor( i * o ),
          height: Math.floor( i * l )
        };
      };

      const I =
        ( ( r = {} ),
          s()( r, _.w6.HEADER_SCALE_SMALL, {
            small: {
              width: 175,
              height: 70
            },
            large: {
              width: 175,
              height: 70
            },
          } ),
          s()( r, _.w6.HEADER_SCALE_MEDIUM, {
            small: {
              width: 225,
              height: 90
            },
            large: {
              width: 225,
              height: 90
            },
          } ),
          s()( r, _.w6.HEADER_SCALE_LARGE, {
            small: {
              width: 275,
              height: 110
            },
            large: {
              width: 275,
              height: 110
            },
          } ),
          r );

      const M =
        ( ( o = {} ),
          s()( o, _.w6.HEADER_SCALE_SMALL, {
            small: {
              width: 160,
              height: 32
            },
            large: {
              width: 240,
              height: 48
            },
          } ),
          s()( o, _.w6.HEADER_SCALE_MEDIUM, {
            small: {
              width: 280,
              height: 56
            },
            large: {
              width: 360,
              height: 72
            },
          } ),
          s()( o, _.w6.HEADER_SCALE_LARGE, {
            small: {
              width: 280,
              height: 64
            },
            large: {
              width: 520,
              height: 104
            },
          } ),
          o );

      const L =
        ( ( l = {} ),
          s()( l, _.w6.HEADER_SCALE_SMALL, {
            small: {
              width: 280,
              height: 24
            },
            large: {
              width: 320,
              height: 32
            },
          } ),
          s()( l, _.w6.HEADER_SCALE_MEDIUM, {
            small: {
              width: 280,
              height: 40
            },
            large: {
              width: 600,
              height: 60
            },
          } ),
          s()( l, _.w6.HEADER_SCALE_LARGE, {
            small: {
              width: 280,
              height: 60
            },
            large: {
              width: 680,
              height: 80
            },
          } ),
          l );

      const k = ( e, n ) => {
        let t;
        let r;

        const o =
          ( null !== ( t = null == n ? void 0 : n.originalWidth ) &&
            void 0 !== t ?
            t :
            0 ) /
          ( null !== ( r = null == n ? void 0 : n.originalHeight ) &&
            void 0 !== r ?
            r :
            0 );

        return o <= 2.5 ? I[ e ] : o < 5 ? M[ e ] : L[ e ];
      };

      const P = ( e, n ) => {
        const t = k( e, n ),
          r = A( t.small, n ),
          o = A( t.large, n );
        return {
          width: {
            xs: "".concat( r.width, "px" ),
            sm: "".concat( r.width, "px" ),
            md: "".concat( o.width, "px" ),
            lg: "".concat( o.width, "px" ),
            xl: "".concat( o.width, "px" ),
          },
          height: {
            xs: "".concat( r.height, "px" ),
            sm: "".concat( r.height, "px" ),
            md: "".concat( o.height, "px" ),
            lg: "".concat( o.height, "px" ),
            xl: "".concat( o.height, "px" ),
          },
        };
      };

      const T =
        ( ( i = {} ),
          s()( i, _.w6.HEADER_SCALE_SMALL, {
            xs: "XS",
            sm: "XS",
            md: "M",
            lg: "M",
            xl: "M",
          } ),
          s()( i, _.w6.HEADER_SCALE_MEDIUM, {
            xs: "XS",
            sm: "XS",
            md: "L",
            lg: "L",
            xl: "L",
          } ),
          s()( i, _.w6.HEADER_SCALE_LARGE, {
            xs: "XS",
            sm: "XS",
            md: "XL",
            lg: "XL",
            xl: "XL",
          } ),
          i );

      const R = {
        wordBreak: "break-word"
      };

      var H = e => {
        let n;
        let t;
        let r;
        let o;
        let l;
        let i;
        let a;
        const u = e.customStyleSheet;
        const c = e.publisher;
        const s = e.withTextColorSubtle;
        const d = void 0 !== s && s;
        const f = e.withAltNameTreatment;
        const y = e.forcedTextScale;
        const C = e.forceSmall;
        const w = void 0 !== C && C;
        const I = ( 0, S.Iq )();

        const M = ( null !== ( n = null == u ? void 0 : u.header ) && void 0 !== n ?
          n :
          {}
        ).nameColor;

        const L = ( 0, v.eQ )( M );
        const H = ( 0, h.jb )();

        const N = w ?
          _.w6.HEADER_SCALE_SMALL :
          null !==
          ( t =
            null == u || null === ( r = u.header ) || void 0 === r ?
            void 0 :
            r.logoScale ) && void 0 !== t ?
          t :
          H.logoScale;

        const F =
          null !==
          ( o =
            null == u || null === ( l = u.header ) || void 0 === l ?
            void 0 :
            l.nameTreatment ) && void 0 !== o ?
          o :
          H.nameTreatment;

        const O =
          null !==
          ( i =
            null == u || null === ( a = u.header ) || void 0 === a ?
            void 0 :
            a.postNameTreatment ) && void 0 !== i ?
          i :
          H.postNameTreatment;

        const B = [
          ( 0, E.n )( {
            name: "heading",
            scale: T[ N ],
            leadingTrim: !0
          } ),
          e => {
            return {
              color: L || e.baseColor.text[ d ? "normal" : "dark" ]
            };
          },
          R,
        ];

        const V = D( u, c );
        const U = V.logo;
        const W = V.shouldShowLogo;
        const G = ( null == U ? void 0 : U.originalHeight ) || 0;
        const j = ( null == U ? void 0 : U.originalWidth ) || 0;
        const z = ( 0, p.p )( "xs", G, j );
        if ( y )
          return m.createElement( g.r, {
            withTextColorSubtle: d,
            customNameColor: L,
            nameTreatment: f ? O : F,
            maxHeight: 35,
            maxWidth: z.maxWidth,
            textScale: y,
            logo: U,
            name: c.name,
            clamp: 0,
            leadingTrim: !0,
            withWordBreak: !0,
          } );
        if ( !W || !U )
          return m.createElement( "span", {
            className: I( B )
          }, c.name || "" );
        const Y = k( N, U ),
          X = A( Y.large, U );
        return m.createElement( b.UV, {
          miroId: U.id,
          alt: c.name || "Publication logo",
          width: X.width,
          height: X.height,
          strategy: x._S.Resample,
          rules: P( null != N ? N : H.logoScale, U ),
        } );
      };

      var D = ( e, n ) => {
        let t;
        let r;
        let o;
        const l = ( 0, h.jb )();

        const i =
          null == e || null === ( t = e.header ) || void 0 === t ?
          void 0 :
          t.logoImage;

        const a =
          null !==
          ( r =
            null == e || null === ( o = e.header ) || void 0 === o ?
            void 0 :
            o.nameTreatment ) && void 0 !== r ?
          r :
          l.nameTreatment;

        const u = ( 0, f.Iq )( n );
        const c = void 0 !== i;
        const s = "Collection" === n.__typename ? n.logo : null;
        const d = u && c ? i : s;
        return {
          logo: d,
          shouldShowLogo: ( null == d ? void 0 : d.id ) && a === _.m3.NAME_TREATMENT_LOGO,
        };
      };

      const N = ( 0, d.Ps )( w(), g.f );
      var F = ( 0, d.Ps )( C(), v.xW, N );
      var O = ( 0, d.Ps )( y(), N, g.f, f.C5 );
    },
    84014: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        yR: () => h,
        Ex: () => b,
        Qc: () => S,
        Y$: () => _,
        BD: () => x,
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 5977 ),
        u = t( 42691 ),
        c = t( 65393 ),
        s = t( 22091 ),
        d = t( 64504 ),
        m = t( 14391 ),
        g = t( 87598 );

      function p() {
        const e = o()( [
          "\n  fragment MetaHeaderNav_publisher on Publisher {\n    id\n    ...MetaHeaderNavLink_publisher\n  }\n  ",
          "\n",
        ] );
        return ( p = () => {
            return e;
          } ),
          e;
      }

      function f() {
        const e = o()( [
          "\n  fragment MetaHeaderNav_customStyleSheet on CustomStyleSheet {\n    id\n    navigation {\n      navItems {\n        ...MetaHeaderNav_headerNavigationItem\n      }\n    }\n  }\n  ",
          "\n",
        ] );
        return ( f = () => {
            return e;
          } ),
          e;
      }

      function v() {
        const e = o()( [
          "\n  fragment MetaHeaderNav_headerNavigationItem on HeaderNavigationItem {\n    name\n    tagSlugs\n    ...MetaHeaderNavLink_headerNavigationItem\n  }\n  ",
          "\n",
        ] );
        return ( v = () => {
            return e;
          } ),
          e;
      }

      var h = ( e, n ) => {
        let t;

        const r = (
          ( null == e || null === ( t = e.navigation ) || void 0 === t ?
            void 0 :
            t.navItems ) || []
        ).filter( e => {
          let n;
          return !( null === ( n = e.name ) || void 0 === n || !n.trim() );
        } );

        return {
          isNavVisible: r.length > 0 && "Collection" === n.__typename,
          navItems: r,
        };
      };

      var b = e => {
        const n = e.customStyleSheet,
          t = e.publisher,
          r = x(),
          o = h( n, t ),
          l = o.navItems;
        if ( !o.isNavVisible ) return null;
        let a = !1;
        return i.createElement(
          s.xu, {
            display: "flex",
            alignItems: "center",
            tag: "nav"
          },
          l.map( ( e, n ) => {
            const o = r( e ) && !a;
            return (
              o && ( a = !0 ),
              i.createElement(
                s.xu, {
                  key: n,
                  tag: "span",
                  margin: "0 12px",
                  display: "flex",
                  flexDirection: "column",
                },
                o ?
                i.createElement(
                  d.F, {
                    scale: "L",
                    color: "DARKER"
                  },
                  e.name
                ) :
                i.createElement( c.d9, {
                  navItem: e,
                  publisher: t
                } ),
                o && i.createElement( u.t, null )
              )
            );
          } )
        );
      };

      const E = ( 0, l.Ps )( v(), c.Ze );
      var S = ( 0, l.Ps )( f(), E );
      var _ = ( 0, l.Ps )( p(), c.ud );

      var x = () => {
        const e = ( 0, g.G )(),
          n = ( 0, a.TH )();
        return t => {
          let r, o;
          switch ( t.type ) {
            case m.Me.NAV_TYPE_LINK:
              return e( null !== ( r = t.href ) && void 0 !== r ? r : "" );
            case m.Me.NAV_TYPE_TAG:
              return (
                !( null === ( o = t.tagSlugs ) || void 0 === o || !o.length ) &&
                n.pathname.includes( "tagged/".concat( t.tagSlugs[ 0 ] ) )
              );
          }
          return !1;
        };
      };
    },
    42691: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        t: () => l
      } );
      const r = t( 67294 );
      const o = t( 22091 );

      var l = () => {
        return r.createElement(
          o.xu, {
            position: "relative",
            width: "100%"
          },
          r.createElement( o.xu, {
            position: "absolute",
            width: "100%",
            top: "23px",
            borderBottom: "BASE_DARKER",
          } )
        );
      };
    },
    65393: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        d9: () => m,
        Ze: () => g,
        ud: () => p
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 12291 ),
        u = t( 72214 ),
        c = t( 22091 );

      function s() {
        const e = o()( [
          "\n  fragment MetaHeaderNavLink_publisher on Publisher {\n    id\n    ...getNavItemHref_publisher\n  }\n  ",
          "\n",
        ] );
        return ( s = () => {
            return e;
          } ),
          e;
      }

      function d() {
        const e = o()( [
          "\n  fragment MetaHeaderNavLink_headerNavigationItem on HeaderNavigationItem {\n    name\n    ...getNavItemHref_headerNavigationItem\n  }\n  ",
          "\n",
        ] );
        return ( d = () => {
            return e;
          } ),
          e;
      }
      var m = e => {
          const n = e.publisher,
            t = e.navItem,
            r = ( 0, a.v9 )( e => {
              return e;
            } ),
            o = r.config.authDomain,
            l = r.navigation.hostname,
            s = ( 0, u.hl )( n, t, o ),
            d =
            s.startsWith( "/" ) ||
            s.startsWith( "#" ) ||
            s.includes( o ) ||
            s.includes( l );
          return i.createElement(
            c.rU, {
              href: s,
              target: d ? void 0 : "_blank"
            },
            t.name
          );
        },
        g = ( 0, l.Ps )( d(), u.qQ ),
        p = ( 0, l.Ps )( s(), u.EV );
    },
    3658: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        _5: () => f,
        OD: () => h,
        XL: () => b,
        a6: () => E,
        k8: () => S,
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 82492 ),
        i = t.n( l ),
        a = t( 71439 ),
        u = t( 67294 ),
        c = t( 28309 ),
        s = t( 534 );

      function d() {
        const e = o()( [
          "\n  fragment MetaHeaderThemeProvider_publisher on Publisher {\n    __typename\n    customStyleSheet {\n      ...MetaHeaderThemeProvider_customStyleSheet\n    }\n    ... on Collection {\n      colorPalette {\n        ...customDefaultBackgroundTheme_colorPalette\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( d = () => {
            return e;
          } ),
          e;
      }

      function m() {
        const e = o()( [
          "\n  fragment MetaHeaderThemeProvider_customStyleSheet on CustomStyleSheet {\n    id\n    ...useMetaHeaderTheme_customStyleSheet\n  }\n  ",
          "\n",
        ] );
        return ( m = () => {
            return e;
          } ),
          e;
      }

      function g() {
        const e = o()( [
          "\n  fragment useMetaHeaderTheme_customStyleSheet on CustomStyleSheet {\n    ...customDefaultBackgroundTheme_customStyleSheet\n    global {\n      colorPalette {\n        primary {\n          colorPalette {\n            tintBackgroundSpectrum {\n              ...ThemeUtil_colorSpectrum\n            }\n          }\n        }\n      }\n    }\n    header {\n      backgroundColor {\n        colorPalette {\n          tintBackgroundSpectrum {\n            ...ThemeUtil_colorSpectrum\n          }\n        }\n      }\n      postBackgroundColor {\n        colorPalette {\n          tintBackgroundSpectrum {\n            ...ThemeUtil_colorSpectrum\n          }\n        }\n      }\n      backgroundImage {\n        id\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( g = () => {
            return e;
          } ),
          e;
      }

      const p = ( e, n ) => {
        let t;
        let r;
        let o;
        let l;
        let i;
        let a;

        const u =
          null == e ||
          null === ( t = e.header ) ||
          void 0 === t ||
          null === ( r = t.backgroundColor ) ||
          void 0 === r ||
          null === ( o = r.colorPalette ) ||
          void 0 === o ?
          void 0 :
          o.tintBackgroundSpectrum;

        const c =
          null == e ||
          null === ( l = e.header ) ||
          void 0 === l ||
          null === ( i = l.postBackgroundColor ) ||
          void 0 === i ||
          null === ( a = i.colorPalette ) ||
          void 0 === a ?
          void 0 :
          a.tintBackgroundSpectrum;

        return n && null != c ? c : u;
      };

      var f = function ( e ) {
        let n;
        let t;
        let r;
        let o;
        let l;
        let i;
        const a = arguments.length > 1 && void 0 !== arguments[ 1 ] && arguments[ 1 ];
        const u = arguments.length > 2 ? arguments[ 2 ] : void 0;
        const d = ( 0, c.Fg )();
        const m = p( e, a );

        const g =
          ( null == e ||
            null === ( n = e.header ) ||
            void 0 === n ||
            null === ( t = n.backgroundImage ) ||
            void 0 === t ?
            void 0 :
            t.id ) || m;

        const f =
          null == e ||
          null === ( r = e.global ) ||
          void 0 === r ||
          null === ( o = r.colorPalette ) ||
          void 0 === o ||
          null === ( l = o.primary ) ||
          void 0 === l ||
          null === ( i = l.colorPalette ) ||
          void 0 === i ?
          void 0 :
          i.tintBackgroundSpectrum;

        const h = m ?
          ( 0, s.yd )( {
            tint: m,
            accentTint: g ? null : f
          }, d ) :
          ( 0, s.zI )( e, d, u );

        return v( h );
      };

      const v = e => {
        return i()( {}, e, {
          newFonts: {
            heading: {
              fontSize: {
                XL: 80,
                L: 64,
                M: 48,
                S: 36,
                XS: 27
              },
              lineHeight: {
                XL: 88,
                L: 72,
                M: 56,
                S: 40,
                XS: 34
              },
              weight: 700,
            },
          },
        } );
      };

      var h = e => {
        const n = e.publisher,
          t = e.customStyleSheet,
          r = e.children,
          o = e.withAltBackground,
          l = "Collection" === n.__typename ? n.colorPalette : null,
          i = f( t, o, l );
        return u.createElement( c.f6, {
          theme: i
        }, r );
      };

      var b = ( 0, a.Ps )( g(), s.Ui, s.zK );
      var E = ( 0, a.Ps )( m(), b );
      var S = ( 0, a.Ps )( d(), E, s.L9 );
    },
    62117: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        w: () => g,
        u: () => p
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 12291 ),
        u = t( 22091 ),
        c = t( 64504 ),
        s = t( 61250 ),
        d = t( 27952 );

      function m() {
        const e = o()( [
          "\n  fragment PublisherAboutLink_publisher on Publisher {\n    __typename\n    id\n    ... on Collection {\n      slug\n    }\n    ... on User {\n      ...userUrl_user\n    }\n  }\n  ",
          "\n",
        ] );
        return ( m = () => {
            return e;
          } ),
          e;
      }
      var g = e => {
          let n;
          const t = e.publisher;
          const r = e.disableLink;
          const o = void 0 !== r && r;

          const l = ( 0, a.v9 )( e => {
            return e.config;
          }, a.wU ).authDomain;

          const m = ( 0, s.GE )( "ShowCollectionMasthead", {
            collectionSlug: "Collection" === t.__typename &&
              null !== ( n = t.slug ) &&
              void 0 !== n ?
              n :
              "",
          } );

          const g = "User" === t.__typename ? ( 0, d.Jq )( t, l ) : "";
          const p = "Collection" === t.__typename ? m : g;
          return o ?
            i.createElement(
              c.F, {
                tag: "span",
                scale: "L",
                color: "DARKER"
              },
              "About"
            ) :
            i.createElement( u.rU, {
              href: p
            }, "About" );
        },
        p = ( 0, l.Ps )( m(), d.$m );
    },
    45755: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        D: () => s,
        f: () => d
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 84783 ),
        u = t( 53380 );

      function c() {
        const e = o()( [
          "\n  fragment PublisherFollowButton_publisher on Publisher {\n    __typename\n    ... on Collection {\n      ...CollectionFollowButton_collection\n    }\n    ... on User {\n      ...UserFollowButton_user\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( c = () => {
            return e;
          } ),
          e;
      }
      var s = e => {
          const n = e.publisher,
            t = e.buttonSize,
            r = e.isLinkStyle,
            o = void 0 !== r && r,
            l = e.susiEntry;
          return "Collection" === n.__typename ?
            i.createElement( a.Fp, {
              buttonSize: t,
              collection: n,
              isLinkStyle: o,
              susiEntry: l,
            } ) :
            i.createElement( u.Bv, {
              buttonSize: t,
              user: n,
              isLinkStyle: o,
              susiEntry: l,
            } );
        },
        d = ( 0, l.Ps )( c(), a.Iq, u.sj );
    },
    15886: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        ds: () => g,
        Jh: () => p,
        jS: () => f
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 67294 ),
        a = t( 22091 ),
        u = t( 64504 ),
        c = t( 61250 ),
        s = t( 27390 ),
        d = t( 27952 );

      function m() {
        const e = o()( [
          "\n  fragment PublisherFollowerCount_publisher on Publisher {\n    __typename\n    id\n    ... on Collection {\n      slug\n      subscriberCount\n    }\n    ... on User {\n      socialStats {\n        followerCount\n      }\n      username\n    }\n  }\n",
        ] );
        return ( m = () => {
            return e;
          } ),
          e;
      }
      var g = e => {
          let n;
          let t;

          const r =
            null !==
            ( n =
              "Collection" === e.__typename ?
              e.subscriberCount :
              null === ( t = e.socialStats ) || void 0 === t ?
              void 0 :
              t.followerCount ) && void 0 !== n ?
            n :
            0;

          return {
            followerCount: r,
            isFollowerCountVisible: r > 0
          };
        },
        p = e => {
          let n;
          let t;
          const r = e.publisher;
          const o = e.disableLink;
          const l = void 0 !== o && o;
          const m = e.linkStyle;
          const p = void 0 === m ? "SUBTLE" : m;
          const f = g( r );
          const v = f.followerCount;
          const h = f.isFollowerCountVisible;

          const b = ( 0, c.GE )( "ShowLiteCollectionFollowers", {
            collectionSlug: "Collection" === r.__typename &&
              null !== ( n = r.slug ) &&
              void 0 !== n ?
              n :
              "",
          } );

          const E =
            "User" === r.__typename ?
            ( 0, d.ol )( null !== ( t = r.username ) && void 0 !== t ? t : "" ) :
            b;

          const S = !l;
          if ( !h ) return null;
          const _ = ""
            .concat( ( 0, s.pY )( v ), " Follower" )
            .concat( 1 === v ? "" : "s" );
          return S ?
            i.createElement( a.rU, {
              href: E,
              linkStyle: p
            }, _ ) :
            i.createElement(
              u.F, {
                tag: "span",
                scale: "L",
                color: "DARKER"
              },
              _
            );
        },
        f = ( 0, l.Ps )( m() );
    },
    78820: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        Zu: () => x,
        n_: () => S,
        xt: () => h,
        KQ: () => b,
        In: () => E,
        PB: () => _,
      } );
      const r = t( 63038 ),
        o = t.n( r ),
        l = t( 28655 ),
        i = t.n( l ),
        a = t( 46829 ),
        u = t( 71439 ),
        c = t( 67294 );

      function s() {
        const e = i()( [
          "\n  mutation postSetPinnedByCreatorAt($postId: ID!, $isPinned: Boolean!) {\n    postSetPinnedByCreatorAt(targetPostId: $postId, isPinned: $isPinned) {\n      __typename\n      ... on Post {\n        id\n        pinnedByCreatorAt\n      }\n    }\n  }\n",
        ] );
        return ( s = () => {
            return e;
          } ),
          e;
      }

      function d() {
        const e = i()( [
          "\n  mutation setPinnedAt($postId: ID!, $collectionId: ID!, $pinnedAt: Boolean!) {\n    __typename\n    setPinnedAt(targetPostId: $postId, targetCollectionId: $collectionId, pinnedAt: $pinnedAt) {\n      __typename\n      ... on Post {\n        id\n        collection {\n          id\n        }\n        pendingCollection {\n          id\n        }\n        pinnedAt\n      }\n    }\n  }\n",
        ] );
        return ( d = () => {
            return e;
          } ),
          e;
      }
      const m = ( 0, u.Ps )( d() ),
        g = ( 0, u.Ps )( s() ),
        p = t( 61250 ),
        f = t( 27952 );

      function v() {
        const e = i()( [
          "\n  fragment useIsPinnedInContext_post on Post {\n    id\n    collection {\n      id\n    }\n    pendingCollection {\n      id\n    }\n    pinnedAt\n    pinnedByCreatorAt\n  }\n",
        ] );
        return ( v = () => {
            return e;
          } ),
          e;
      }
      var h = ( 0, u.Ps )( v() ),
        b = e => {
          const n = e.id,
            t = e.collection,
            r = e.pendingCollection,
            l = e.pinnedAt,
            i = ( t || r || {
              id: ""
            } ).id,
            u = ( 0, a.useMutation )( m, {
              optimisticResponse: {
                __typename: "Mutation",
                setPinnedAt: {
                  __typename: "Post",
                  id: n,
                  collection: t,
                  pendingCollection: r,
                  pinnedAt: l ? 0 : Date.now(),
                },
              },
            } ),
            s = o()( u, 1 )[ 0 ],
            d = c.useCallback(
              () => {
                return s( {
                  variables: {
                    postId: n,
                    collectionId: i,
                    pinnedAt: !l
                  },
                } );
              },
              [ n, i, l, s ]
            );
          return [ l, d ];
        },
        E = e => {
          const n = e.id,
            t = e.pinnedByCreatorAt,
            r = ( 0, a.useMutation )( g, {
              optimisticResponse: {
                postSetPinnedByCreatorAt: {
                  __typename: "Post",
                  id: n,
                  pinnedByCreatorAt: t ? 0 : Date.now(),
                },
              },
            } ),
            l = o()( r, 1 )[ 0 ],
            i = c.useCallback(
              () => {
                return l( {
                  variables: {
                    postId: n,
                    isPinned: !t
                  }
                } );
              },
              [ n, l, t ]
            );
          return [ t, i ];
        },
        S = ( e, n ) => {
          const t = b( e ),
            r = o()( t, 2 ),
            l = r[ 0 ],
            i = r[ 1 ],
            a = E( e ),
            u = o()( a, 2 ),
            s = u[ 0 ],
            d = u[ 1 ],
            m = c.useCallback(
              () => {
                return "Collection" === n ? i() : d();
              },
              [ n, i, d ]
            );
          return [ "Collection" === n ? l : s, m ];
        },
        _ = ( e, n ) => {
          const t = "Collection" === e.__typename ? e.slug : null,
            r = ( 0, p.GE )(
              "ShowCollectionHome",
              t ? {
                collectionSlug: t
              } : {
                collectionSlug: ""
              }
            );
          return "Collection" === e.__typename ?
            r :
            "User" === e.__typename && e.username ?
            ( 0, f.AW )( e, n ) :
            "";
        },
        x = e => {
          switch ( e.__typename ) {
            case "Collection":
              return "Publication";
            case "User":
              return "Author";
            default:
              return "Publisher";
          }
        };
    },
    82395: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        R: () => p
      } );
      const r = t( 67294 ),
        o = t( 28309 );

      function l() {
        return ( l =
          Object.assign ||
          function ( e ) {
            for ( let n = 1; n < arguments.length; n++ ) {
              const t = arguments[ n ];
              for ( const r in t )
                Object.prototype.hasOwnProperty.call( t, r ) && ( e[ r ] = t[ r ] );
            }
            return e;
          } ).apply( this, arguments );
      }
      const i = r.createElement( "path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.08.32L5.78 4.6 1.5.3.88.94l4.3 4.29L.88 9.5l.62.61 4.29-4.29 4.29 4.29.61-.61L6.4 5.2 10.69.94",
      } );

      function a() {
        return ( a =
          Object.assign ||
          function ( e ) {
            for ( let n = 1; n < arguments.length; n++ ) {
              const t = arguments[ n ];
              for ( const r in t )
                Object.prototype.hasOwnProperty.call( t, r ) && ( e[ r ] = t[ r ] );
            }
            return e;
          } ).apply( this, arguments );
      }
      const u = r.createElement( "path", {
        d: "M12.6.59L7 6.19 1.39.6l-.8.8L6.19 7 .6 12.61l.8.8L7 7.81l5.61 5.6.8-.8L7.81 7l5.6-5.61",
      } );

      function c() {
        return ( c =
          Object.assign ||
          function ( e ) {
            for ( let n = 1; n < arguments.length; n++ ) {
              const t = arguments[ n ];
              for ( const r in t )
                Object.prototype.hasOwnProperty.call( t, r ) && ( e[ r ] = t[ r ] );
            }
            return e;
          } ).apply( this, arguments );
      }
      const s = r.createElement( "path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.08.89l-3.5 3.5-3.5-3.5-.5.5 3.5 3.5-3.5 3.5.5.5 3.5-3.5 3.5 3.5.5-.5-3.5-3.5 3.5-3.5",
        } ),
        d = {
          EXTRA_SMALL( e ) {
            return r.createElement( "svg", c( {
              width: 9,
              height: 9
            }, e ), s );
          },
          SMALL( e ) {
            return r.createElement(
              "svg",
              l( {
                width: 11,
                height: 11,
                fill: "none"
              }, e ),
              i
            );
          },
          MEDIUM( e ) {
            return r.createElement( "svg", a( {
              width: 14,
              height: 14
            }, e ), u );
          },
        },
        m = e => {
          return {
            fill: e.baseColor.fill.lighter,
            ":hover": {
              fill: e.baseColor.fill.darker
            },
            ":focus": {
              fill: e.baseColor.fill.darker
            },
          };
        },
        g = e => {
          return {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "EXTRA_SMALL" === e ? "4px" : "0px",
            margin: "0px",
            border: "0px",
            cursor: "pointer",
          };
        };

      function p( e ) {
        const n = e.onClick,
          t = e.size,
          l = void 0 === t ? "MEDIUM" : t,
          i = e.ariaLabel,
          a = void 0 === i ? "close" : i,
          u = ( 0, o.Iq )(),
          c = d[ l ];
        return r.createElement(
          "button", {
            className: u( g( l ) ),
            onClick: n,
            "aria-label": a
          },
          r.createElement( c, {
            className: u( m )
          } )
        );
      }
    },
    85489: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        eQ: () => L,
        xW: () => k,
        Z: () => P,
        hB: () => T,
        MQ: () => R,
        BH: () => H,
        fl: () => D,
        zO: () => W,
        _3: () => G,
      } );
      const r = t( 50008 ),
        o = t.n( r ),
        l = t( 63038 ),
        i = t.n( l ),
        a = t( 28655 ),
        u = t.n( a ),
        c = t( 14176 ),
        s = t.n( c ),
        d = t( 45220 ),
        m = t.n( d ),
        g = t( 18446 ),
        p = t.n( g ),
        f = t( 1469 ),
        v = t.n( f ),
        h = t( 71439 );

      function b() {
        const e = u()( [
          "\n  fragment SupportedTypeStyles_styleNode on StyleNode {\n    type {\n      color\n      fontSize {\n        phone\n        tablet\n        desktop\n      }\n      fontStyle\n      letterSpacing\n      lineHeight {\n        phone\n        tablet\n        desktop\n      }\n      textAlign\n      textDecoration\n      textTransform\n      weight\n    }\n  }\n",
        ] );
        return ( b = () => {
            return e;
          } ),
          e;
      }

      function E() {
        const e = u()( [
          "\n  fragment SupportedContainerStyles_styleNode on StyleNode {\n    container {\n      backgroundColor\n      borderColor\n      borderRadius\n      borderStyle\n      borderWidth\n      marginBottom\n      marginLeft\n      marginRight\n      marginTop\n      paddingBottom\n      paddingLeft\n      paddingRight\n      paddingTop\n    }\n  }\n",
        ] );
        return ( E = () => {
            return e;
          } ),
          e;
      }

      function S() {
        const e = u()( [
          "\n  fragment getHasCustomBackgroundColor_publisher on Publisher {\n    customStyleSheet {\n      ...getHasCustomBackgroundColor_customStyleSheet\n    }\n  }\n  ",
          "\n",
        ] );
        return ( S = () => {
            return e;
          } ),
          e;
      }

      function _() {
        const e = u()( [
          "\n  fragment getHasCustomBackgroundColor_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        background {\n          rgb\n        }\n      }\n    }\n  }\n",
        ] );
        return ( _ = () => {
            return e;
          } ),
          e;
      }

      function x() {
        const e = u()( [
          "\n  fragment getHasCustomPrimaryColor_publisher on Publisher {\n    customStyleSheet {\n      ...getHasCustomPrimaryColor_customStyleSheet\n    }\n  }\n  ",
          "\n",
        ] );
        return ( x = () => {
            return e;
          } ),
          e;
      }

      function y() {
        const e = u()( [
          "\n  fragment getHasCustomPrimaryColor_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        primary {\n          rgb\n        }\n      }\n    }\n  }\n",
        ] );
        return ( y = () => {
            return e;
          } ),
          e;
      }

      function C() {
        const e = u()( [
          "\n  fragment getOpaqueHexFromColorValue_colorValue on ColorValue {\n    rgb\n  }\n",
        ] );
        return ( C = () => {
            return e;
          } ),
          e;
      }

      function w() {
        const e = u()( [
          "\n  fragment getHexFromColorValue_colorValue on ColorValue {\n    rgb\n    alpha\n  }\n",
        ] );
        return ( w = () => {
            return e;
          } ),
          e;
      }
      let A;
      let I;
      const M = /^#?([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$|^#?([0-9a-fA-F]{3})([0-9a-fA-F]{1})?$/;
      !( e => {
        ( e.FULL_WIDTH = "FULL_WIDTH" ), ( e.HALF_WIDTH = "HALF_WIDTH" );
      } )( A || ( A = {} ) ), ( e => {
        ( e.TEXT = "TEXT" ), ( e.COLOR_PICKER = "COLOR_PICKER" );
      } )( I || ( I = {} ) );

      var L = e => {
        if ( !e ) return e;
        const n = e.rgb,
          t = e.alpha;
        return "#".concat( n ).concat( t || "" );
      };

      var k = ( 0, h.Ps )( w() );

      var P = ( e, n ) => {
        if ( !e ) return e;
        const t = e.rgb;
        return "#".concat( t ).concat( null != n ? n : "" );
      };

      var T = ( 0, h.Ps )( C() );

      var R = e => {
        const n = M.exec( e );
        if ( !n ) return null;
        const t = i()( n, 5 ),
          r = t[ 1 ],
          o = t[ 2 ],
          l = t[ 3 ],
          a = t[ 4 ];
        return {
          rgb: r || l,
          alpha: o || a || null
        };
      };

      var H = e => {
        if ( !e ) return null;

        const n =
          /rgba?\((\d+),(\d+),(\d+),?(\d*\.?\d+)?\)/.exec(
            e.replace( /\s+/g, "" )
          ) || [];

        const t = i()( n, 5 );
        let r = [ t[ 1 ], t[ 2 ], t[ 3 ], t[ 4 ] ];
        return ( r[ 3 ] = r[ 3 ] ? Math.round( 255 * +r[ 3 ] ).toString() : "255" ), {
          rgb: ( r = r.map( e => {
              return ( +e ).toString( 16 ).padStart( 2, "0" );
            } ) )
            .slice( 0, 3 )
            .join( "" ),
          alpha: r[ 3 ] || null,
        };
      };

      var D = e => {
        const n = null == e ? void 0 : e.container;
        if ( !e || !n )
          return () => {
            return {};
          };
        const t = s()( n, m() );
        return delete t.__typename,
          e => {
            return N( t );
          };
      };

      const N = e => {
        const n = Object.entries( e ).map( e => {
          const n = i()( e, 2 ),
            t = n[ 0 ],
            r = n[ 1 ];
          return [ t, "object" === o()( r ) ? r : F( r ) ];
        } );
        return O( n );
      };

      const F = e => {
        return e ? {
          xs: e,
          sm: e,
          md: e,
          lg: e,
          xl: e
        } : e;
      };

      const O = e => {
        return e.reduce( ( e, n ) => {
          return ( e[ n[ 0 ] ] = n[ 1 ] ), e;
        }, {} );
      };

      const B = ( 0, h.Ps )( y() );
      const V = ( ( 0, h.Ps )( x(), B ), ( 0, h.Ps )( _() ) );

      const U =
        ( ( 0, h.Ps )( S(), V ),
          function e( n ) {
            if ( "object" === o()( n ) && null !== n ) {
              for ( let t = 0, r = Object.values( n ); t < r.length; t++ )
                if ( !e( r[ t ] ) ) return !1;
              return !0;
            }
            return null == n || "" === n;
          } );

      var W = function e( n, t ) {
        const r =
          arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : [];
        if ( !n && !t ) return U( n ) && U( t );
        if ( !t ) return U( n );
        if ( !n ) return U( t );
        if ( "object" !== o()( n ) ) return n === t;
        if ( v()( n ) && v()( t ) ) return p()( n, t );
        for ( let l = 0, a = Object.entries( n ); l < a.length; l++ ) {
          const u = i()( a[ l ], 2 ),
            c = u[ 0 ],
            s = u[ 1 ];
          if ( !r.includes( c ) ) {
            const d = t[ c ];
            if ( !e( s, d ) ) return !1;
          }
        }
        return !0;
      };

      var G = ( 0, h.Ps )( E() );
      ( 0, h.Ps )( b() );
    },
    65849: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        jb: () => o,
        Jq: () => i
      } );
      const r = t( 14391 );

      var o = () => {
        return l();
      };

      const l = () => {
        return {
          horizontalAlignment: r.v2.START,
          headerScale: r.w6.HEADER_SCALE_SMALL,
          logoScale: r.w6.HEADER_SCALE_MEDIUM,
          backgroundColorDisplayMode: r.PG.COLOR_DISPLAY_MODE_SOLID,
          backgroundImageDisplayMode: r.zc.IMAGE_DISPLAY_MODE_FILL,
          backgroundImageVerticalAlignment: r.v2.START,
          nameTreatment: r.m3.NAME_TREATMENT_TEXT,
          postNameTreatment: r.m3.NAME_TREATMENT_LOGO,
          taglineTreatment: r.KI.TAGLINE_TREATMENT_SIDEBAR,
          backgroundColor: null,
          secondaryBackgroundColor: null,
          postBackgroundColor: null,
          taglineColor: null,
          backgroundImage: null,
          logoImage: null,
          nameColor: null,
        };
      };

      var i = () => {
        return a();
      };

      const a = () => {
        return {
          font1: {
            name: r.G7.SANS_SERIF_1
          },
          font2: {
            name: r.G7.SANS_SERIF_1
          },
          font3: {
            name: r.G7.SERIF_2
          },
        };
      };
    },
    96210: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        w: () => o,
        f: () => l
      } );
      const r = t( 67294 );
      var o = r.createContext( {
        isWorkingPreview: !1
      } );

      var l = () => {
        return r.useContext( o );
      };
    },
    72214: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        hl: () => d,
        qQ: () => m,
        EV: () => g,
        w7: () => p,
        u6: () => v,
      } );
      const r = t( 28655 ),
        o = t.n( r ),
        l = t( 71439 ),
        i = t( 14391 ),
        a = t( 27952 );

      function u() {
        const e = o()( [
          "\n  fragment getNavItemHref_publisher on Publisher {\n    id\n    ...publisherUrl_publisher\n  }\n  ",
          "\n",
        ] );
        return ( u = () => {
            return e;
          } ),
          e;
      }

      function c() {
        const e = o()( [
          "\n  fragment getNavItemHref_headerNavigationItem on HeaderNavigationItem {\n    href\n    type\n    tags {\n      id\n      normalizedTagSlug\n    }\n  }\n",
        ] );
        return ( c = () => {
            return e;
          } ),
          e;
      }
      let s;

      var d = ( e, n, t ) => {
        let r;
        switch ( n.type ) {
          case i.Me.NAV_TYPE_LINK:
            return n.href || "#";
          case i.Me.NAV_TYPE_TAG:
            const o = null === ( r = n.tags ) || void 0 === r ? void 0 : r[ 0 ],
              l =
              ( null == o ? void 0 : o.normalizedTagSlug ) ||
              ( null == o ? void 0 : o.id ) ||
              "";
            return ( 0, a.Wh )( e, l, t );
        }
        return "#";
      };

      var m = ( 0, l.Ps )( c() );
      var g = ( 0, l.Ps )( u(), a.uI );
      !( e => {
        ( e.MissingName = "Please enter a section name" ),
        ( e.MissingTag = "Please add a tag" ),
        ( e.MissingLink = "Please enter a link" ),
        ( e.MissingNameAndTag = "Please enter a section name and a tag" ),
        ( e.MissingNameAndLink = "Please enter a section name and a link" );
      } )( s || ( s = {} ) );

      var p = e => {
        let n;
        switch ( e.type ) {
          case i.Me.NAV_TYPE_TAG:
            if ( null === ( n = e.tagSlugs ) || void 0 === n || !n.length )
              return e.name ? s.MissingTag : s.MissingNameAndTag;
            break;
          case i.Me.NAV_TYPE_LINK:
            if ( null == e || !e.href )
              return e.name ? s.MissingLink : s.MissingNameAndLink;
        }
        return e.name ? null : s.MissingName;
      };

      const f = e => {
        return !p( e );
      };

      var v = e => {
        return 0 === e.length || ( null == e ? void 0 : e.every( f ) );
      };
    },
    68421: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        o: () => C
      } );
      const r = t( 67154 ),
        o = t.n( r ),
        l = t( 63038 ),
        i = t.n( l ),
        a = t( 6479 ),
        u = t.n( a ),
        c = t( 28655 ),
        s = t.n( c ),
        d = t( 71439 ),
        m = t( 46829 ),
        g = t( 67294 ),
        p = t( 96210 ),
        f = t( 86280 ),
        v = t( 22091 ),
        h = t( 82318 ),
        b = t( 80362 ),
        E = t( 64504 ),
        S = t( 24438 );

      function _() {
        const e = s()( [
          "\n  mutation DismissFlagMutation($userId: ID!, $flag: UserDismissableFlags!) {\n    userDismissFlag(userId: $userId, flag: $flag)\n  }\n",
        ] );
        return ( _ = () => {
            return e;
          } ),
          e;
      }
      const x = ( 0, d.Ps )( _() );

      const y = e => {
        const n = e.children,
          t = e.flag,
          r = e.text,
          l = e.viewer,
          a = e.padding,
          c = void 0 === a ? 20 : a,
          s = u()( e, [ "children", "flag", "text", "viewer", "padding" ] ),
          d = g.useState( !1 ),
          p = i()( d, 2 ),
          f = p[ 0 ],
          _ = p[ 1 ],
          y = ( 0, m.useMutation )( x, {
            variables: {
              userId: l.id,
              flag: t
            }
          } ),
          C = i()( y, 1 )[ 0 ],
          w = g.useCallback(
            () => {
              _( !1 ), C();
            },
            [ f ]
          );
        return g.useEffect( () => {
            return _( !0 );
          }, [] ),
          g.createElement(
            b.Z,
            o()( {
                disablePortalOverlay: !0,
                hide: w,
                isVisible: f,
                popoverRenderFn() {
                  return g.createElement(
                    v.xu, {
                      minWidth: "200px",
                      padding: ( 0, S.a )( c )
                    },
                    g.createElement( E.F, {
                      scale: "S"
                    }, r ),
                    g.createElement(
                      v.xu, {
                        marginTop: "20px"
                      },
                      g.createElement(
                        E.F, {
                          scale: "S"
                        },
                        g.createElement(
                          h.Z, {
                            linkStyle: "OBVIOUS",
                            onClick() {
                              return w();
                            },
                          },
                          "Got it"
                        )
                      )
                    )
                  );
                },
              },
              s
            ),
            n
          );
      };

      var C = e => {
        const n = e.children,
          t = e.flag,
          r = e.isVisible,
          l = void 0 === r || r,
          i = u()( e, [ "children", "flag", "isVisible" ] ),
          a = ( 0, p.f )().isWorkingPreview,
          c = ( 0, f.YC )().value;
        return a || ( null != c && c.dismissableFlags.includes( t ) ) || !c || !l ?
          n :
          g.createElement( y, o()( {
            flag: t,
            viewer: c
          }, i ), n );
      };
    },
  },
] );
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7012.e66b508b.chunk.js.map
