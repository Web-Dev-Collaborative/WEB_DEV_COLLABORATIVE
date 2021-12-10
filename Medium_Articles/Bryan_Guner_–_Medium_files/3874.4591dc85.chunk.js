( self.webpackChunklite = self.webpackChunklite || [] ).push( [
  [ 3874 ],
  {
    93874: ( e, n, t ) => {
      "use strict";
      t.d( n, {
        h: () => ne,
        k: () => te
      } );
      let a;
      const r = t( 28655 );
      const i = t.n( r );
      const l = t( 63038 );
      const o = t.n( l );
      const u = t( 71439 );
      const c = t( 67294 );
      const s = t( 42963 );
      const m = t( 46829 );
      const d = t( 58875 );
      const g = t.n( d );
      const p = t( 86280 );
      const f = t( 7530 );
      const h = t( 64504 );
      const v = t( 62630 );
      const E = t( 28309 );
      const x = t( 79208 );
      const b = t( 90038 );
      !( e => {
        ( e.Success = "success" ),
        ( e.UploadError = "uploadError" ),
        ( e.InvalidError = "invalidError" );
      } )( a || ( a = {} ) );
      const C = {
          height: "132px",
          width: "132px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        },
        I = e => {
          return {
            backgroundColor: e.baseColor.background.light,
            borderColor: e.baseColor.border.light,
            borderRadius: "3px",
            borderWidth: "1px",
            alignItems: "center",
            padding: "25px 20px 25px 20px",
            marginTop: "",
            borderStyle: "solid",
          };
        },
        y = e => {
          const n = e.setImageId,
            t = e.initialImageId,
            r = e.source,
            i = ( 0, v.Av )(),
            l = ( 0, p.YC )().value,
            u = ( 0, E.Iq )(),
            s = c.useState( {
              imageId: t,
              imageWidth: 0,
              imageHeight: 0
            } ),
            m = o()( s, 2 ),
            d = m[ 0 ],
            g = m[ 1 ],
            y = c.useState( null ),
            S = o()( y, 2 ),
            R = S[ 0 ],
            D = S[ 1 ],
            k = e => {
              D( e ),
                i.event( "user.updateAvatarResult", {
                  userId: null == l ? void 0 : l.id,
                  source: r,
                  uploadResult: e,
                } );
            },
            w = ( 0, x.JA )(
              ( e, t, r ) => {
                const i = t.height,
                  l = t.width,
                  o = e.value.fileId;
                g( {
                    imageId: o,
                    imageHeight: i,
                    imageWidth: l
                  } ),
                  i < parseInt( "1000px", 10 ) || l < parseInt( "1000px", 10 ) ?
                  ( k( a.InvalidError ), U() ) :
                  ( n( o ), k( a.Success ), r() );
              },
              () => {
                k( a.UploadError );
              },
              () => {
                k( a.InvalidError );
              }
            ),
            L = w.inputRef,
            T = w.fireClick,
            F = () => {
              i.event( "user.updateAvatarClick", {
                  userId: null == l ? void 0 : l.id,
                  source: r,
                  hasImage: !!d.imageId,
                } ),
                T();
            },
            U = () => {
              g( {
                imageId: "",
                imageWidth: 0,
                imageHeight: 0
              } ), n( "" );
            },
            B = () => {
              return c.createElement(
                f.xu, {
                  marginBottom: "10px"
                },
                c.createElement( "input", {
                  type: "file",
                  "aria-hidden": "true",
                  ref: L,
                  className: u( {
                    display: "none"
                  } ),
                } ),
                c.createElement(
                  f.rU, {
                    inline: !0,
                    linkStyle: "OBVIOUS",
                    onClick: F
                  },
                  "Add photo"
                )
              );
            },
            A = () => {
              return c.createElement(
                "div", {
                  className: u( [ C, I ] )
                },
                c.createElement(
                  f.xu, {
                    textAlign: "center"
                  },
                  c.createElement( f.xu, null, "1000 x 1000" ),
                  c.createElement( f.xu, null, "pixels" )
                )
              );
            },
            H = () => {
              return c.createElement(
                "div", {
                  className: u( [ C ] )
                },
                c.createElement( "div", {
                  className: u( () => {
                    return {
                      backgroundImage: "url(".concat(
                        ( 0, b.W6 )( {
                          miroId: d.imageId || "",
                          width: d.imageWidth || 0,
                          height: d.imageHeight || 0,
                        } ),
                        ")"
                      ),
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      height: "100%",
                      width: "100%",
                      borderRadius: "3px",
                      display: "flex",
                      flexDirection: "row",
                    };
                  } ),
                } )
              );
            },
            P = () => {
              return c.createElement(
                f.xu, {
                  display: "inline-block",
                  marginBottom: "15px"
                },
                d.imageId ? c.createElement( H, null ) : c.createElement( A, null )
              );
            },
            M = () => {
              return c.createElement(
                f.xu, {
                  marginRight: "5px",
                  display: "inline-block"
                },
                c.createElement(
                  h.F, {
                    scale: "S",
                    color: "ERROR"
                  },
                  "That file doesn't meet our requirements. Try another."
                )
              );
            },
            O = () => {
              return c.createElement(
                f.xu, {
                  marginTop: "8px"
                },
                c.createElement(
                  f.xu, {
                    marginRight: "5px",
                    display: "inline-block"
                  },
                  c.createElement(
                    h.F, {
                      scale: "S",
                      color: "ERROR"
                    },
                    "We couldn't process your request."
                  )
                ),
                c.createElement(
                  f.xu, {
                    marginRight: "5px",
                    display: "inline-block"
                  },
                  c.createElement(
                    h.F, {
                      scale: "S"
                    },
                    "Try again, or",
                    " ",
                    c.createElement(
                      f.rU, {
                        inline: !0,
                        linkStyle: "OBVIOUS",
                        href: "https://help.medium.com/hc/en-us",
                      },
                      "search our help center for support."
                    )
                  )
                )
              );
            };
          return c.createElement(
            f.xu, {
              display: "flex",
              flexDirection: "column",
              maxWidth: "132px"
            },
            c.createElement(
              f.xu, {
                display: "inline-block",
                float: "right"
              },
              c.createElement( P, null )
            ),
            c.createElement( B, null ),
            R === a.UploadError && c.createElement( O, null ),
            R === a.InvalidError && c.createElement( M, null )
          );
        },
        S = e => {
          const n = e.label,
            t = e.onChangeFn,
            a = e.onBlurFn,
            r = e.value,
            i = e.errorMessage,
            l = e.characterCountLimit;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              f.xu, {
                marginBottom: "15px",
                textAlign: "left"
              },
              c.createElement( h.F, {
                scale: "L",
                tag: "h4"
              }, n )
            ),
            c.createElement( f.nv, {
              scale: "L",
              onChange: t,
              value: r,
              errorMessage: i,
              onBlur: a,
              ariaLabel: n,
              characterCountLimit: l,
            } )
          );
        },
        R = t( 22091 ),
        D = t( 29035 );

      function k() {
        const e = i()( [
          "\n  mutation userCompleteProfileMutation(\n    $userId: ID!\n    $name: String!\n    $bio: String!\n    $imageId: String!\n  ) {\n    userCompleteProfile(userId: $userId, name: $name, bio: $bio, imageId: $imageId)\n  }\n",
        ] );
        return ( k = () => {
            return e;
          } ),
          e;
      }

      function w() {
        const e = i()( [
          "\n  fragment UserCompleteProfileDialog_user on User {\n    id\n    name\n    bio\n    imageId\n    hasCompletedProfile\n  }\n",
        ] );
        return ( w = () => {
            return e;
          } ),
          e;
      }
      const L = {
          min: 3,
          max: 50,
          message: "Please try another name that 's between 3 and 50 characters.",
        },
        T = {
          min: 10,
          max: 160,
          message: "Please try another description that''s between 10 and 160 characters.",
        },
        F = ( e, n ) => {
          const t = e.min,
            a = e.max,
            r = e.message;
          return e => {
            const i = e.target.value;
            n( i.length < t || i.length > a ? r : void 0 );
          };
        },
        U = e => {
          const n = ( 0, p.YC )().value;
          return {
            shouldShowDialog: g().canUseDOM &&
              !( 0, D.ic )( navigator.userAgent ) &&
              ( null == n ? void 0 : n.id ) === e.id,
          };
        },
        B = e => {
          const n = e.setHasCompletedProfile,
            t = e.user,
            a = ( 0, v.Av )(),
            r = ( 0, p.YC )().value,
            i = c.useState( !1 ),
            l = o()( i, 2 ),
            u = l[ 0 ],
            s = l[ 1 ],
            m = H(),
            d = o()( m, 1 )[ 0 ],
            g = c.useState( ( null == t ? void 0 : t.imageId ) || "" ),
            f = o()( g, 2 ),
            E = f[ 0 ],
            x = f[ 1 ],
            b = c.useState( ( null == t ? void 0 : t.name ) || "" ),
            C = o()( b, 2 ),
            I = C[ 0 ],
            D = C[ 1 ],
            k = c.useState( ( null == t ? void 0 : t.bio ) || "" ),
            w = o()( k, 2 ),
            B = w[ 0 ],
            A = w[ 1 ],
            P = c.useState(),
            M = o()( P, 2 ),
            O = M[ 0 ],
            N = M[ 1 ],
            V = c.useState(),
            $ = o()( V, 2 ),
            _ = $[ 0 ],
            G = $[ 1 ],
            W = F( L, N ),
            Y = F( T, G ),
            q = c.useCallback(
              () => {
                r &&
                  ( s( !0 ),
                    a.event( "user.completedProfile", {
                      userId: r.id,
                      changedName: ( null == t ? void 0 : t.name ) !== I,
                      changedBio: ( null == t ? void 0 : t.bio ) !== B,
                      changedImage: ( null == t ? void 0 : t.imageId ) !== E,
                      hasName: !!I,
                      hasBio: !!B,
                      hasImage: !!E,
                    } ),
                    d( {
                      variables: {
                        userId: r.id,
                        name: I,
                        bio: B,
                        imageId: E
                      },
                    } ).then( () => {
                      s( !1 ), n( !0 );
                    } ) );
              },
              [ r, d, s, t, I, B, E ]
            ),
            z = U( t ).shouldShowDialog;
          return c.useEffect(
              () => {
                z &&
                  a.event( "user.presentedCompleteProfileDialog", {
                    userId: null == r ? void 0 : r.id,
                  } );
              },
              [ z ]
            ),
            z ?
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                R.QH, {
                  confirmText: "Continue",
                  titleText: "Complete your profile",
                  isDestructiveAction: !1,
                  onConfirm: q,
                  isVisible: !0,
                  hide() {},
                  withCloseButton: !1,
                  showCancelButton: !1,
                  disableConfirm: u,
                },
                c.createElement(
                  h.F, {
                    scale: "L",
                    color: "DARKER"
                  },
                  "Readers like learning a bit more about their writers"
                ),
                c.createElement(
                  R.xu, {
                    marginTop: "48px",
                    marginBottom: "28px",
                    display: "flex",
                    flexDirection: "row",
                  },
                  c.createElement(
                    R.xu, {
                      overflow: "visible",
                      maxHeight: "200px"
                    },
                    c.createElement( y, {
                      setImageId: x,
                      initialImageId: E,
                      source: "userCompleteProfileDialog",
                    } )
                  ),
                  c.createElement(
                    R.xu, {
                      marginLeft: "48px",
                      textAlign: "left"
                    },
                    c.createElement(
                      R.xu, {
                        key: "name"
                      },
                      c.createElement( S, {
                        label: "Full name",
                        onChangeFn( e ) {
                          return D( e.target.value );
                        },
                        onBlurFn: W,
                        value: I,
                        errorMessage: O,
                      } )
                    ),
                    c.createElement(
                      R.xu, {
                        key: "bio",
                        marginTop: "40px"
                      },
                      c.createElement( S, {
                        label: "Bio (optional, max 160 characters)",
                        onChangeFn( e ) {
                          return A( e.target.value );
                        },
                        onBlurFn: Y,
                        value: B,
                        errorMessage: _,
                        characterCountLimit: 160,
                      } )
                    )
                  )
                )
              )
            ) :
            null;
        },
        A = ( 0, u.Ps )( w() ),
        H = () => {
          return ( 0, m.useMutation )( P );
        },
        P = ( 0, u.Ps )( k() ),
        M = t( 23279 ),
        O = t.n( M ),
        N = t( 12291 ),
        V = t( 51064 ),
        $ = t( 27952 );

      function _() {
        const e = i()( [
          "\n  query userDomainValidityQuery($domain: String!) {\n    userDomainValidity(domain: $domain)\n  }\n",
        ] );
        return ( _ = () => {
            return e;
          } ),
          e;
      }

      function G() {
        const e = i()( [
          "\n  mutation createUserDomainMutation($domain: String!) {\n    userDomainLink(domain: $domain) {\n      __typename\n      ... on CustomDomainFailure {\n        reason\n      }\n    }\n  }\n",
        ] );
        return ( G = () => {
            return e;
          } ),
          e;
      }

      function W() {
        const e = i()( [
          "\n  fragment UserSubdomainOnboardingDialog_user on User {\n    id\n    customDomainState {\n      pending {\n        status\n      }\n      live {\n        status\n      }\n    }\n    username\n  }\n",
        ] );
        return ( W = () => {
            return e;
          } ),
          e;
      }
      const Y = e => {
          let n;
          let t;
          const a = e.user;
          const r = e.isVisible;
          const i = e.hide;
          const l = e.redirectTo;
          const u = e.redirectOnHide;
          const s = void 0 !== u && u;
          const m = e.refreshOnHide;
          const d = void 0 !== m && m;
          const f = ( 0, E.Iq )();
          const x = ( 0, v.Av )();
          const b = ( 0, p.YC )().value;

          const C =
            null != b && b.username ? ( e => {
              return e
                .toLowerCase()
                .replace( /[_.]/g, "-" )
                .replace( /[^a-z0-9-]/g, "" )
                .replace( /-+/g, "-" )
                .replace( /^-/, "" )
                .replace( /-$/, "" );
            } )( b.username ) : "";

          const I = c.useState( C );
          const y = o()( I, 2 );
          const S = y[ 0 ];
          const D = y[ 1 ];
          const k = ( 0, V.O )( !1 );
          const w = o()( k, 3 );
          const L = w[ 0 ];
          const T = w[ 1 ];
          const F = w[ 2 ];
          const U = c.useState( !1 );
          const B = o()( U, 2 );
          const A = B[ 0 ];
          const H = B[ 1 ];
          const P = c.useState( !1 );
          const M = o()( P, 2 );
          const _ = M[ 0 ];
          const G = M[ 1 ];
          const W = J( S );
          const Y = Z( S );
          const q = c.useState( null );
          const Q = o()( q, 2 );
          const j = Q[ 0 ];
          const X = Q[ 1 ];

          const ee = ( 0, N.v9 )( e => {
            return e.config;
          } ).productName;

          const ne = z();
          const te = o()( ne, 1 )[ 0 ];
          const ae = K( W );
          const re = ae.isValidityLoading;
          const ie = ae.validityResult;
          const le = ae.checkValidity;

          const oe = c.useCallback(
            O()( e => {
              le( e ), H( !1 );
            }, 500 ),
            []
          );

          const ue = c.useCallback(
            e => {
              const n = e.target.value;
              A || H( !0 ), X( null ), oe( {
                domain: n
              } ), D( n );
            },
            [ le, A ]
          );

          const ce = c.useCallback(
            () => {
              G( !0 ),
                x.event( "user.claimedSubdomain", {
                  userId: null == b ? void 0 : b.id,
                  source: "subdomain_dialog",
                  changedUsername: ( null == b ? void 0 : b.username ) !== S,
                } ),
                te( {
                  variables: {
                    domain: W
                  }
                } ).then( e => {
                  let n;
                  let t;
                  let a;
                  let r;

                  const l =
                    "Something went wrong. Please try again with a different name.";

                  if (
                    "CustomDomain" ===
                    ( null === ( n = e.data ) ||
                      void 0 === n ||
                      null === ( t = n.userDomainLink ) ||
                      void 0 === t ?
                      void 0 :
                      t.__typename )
                  )
                    T(), i();
                  else if (
                    "CustomDomainFailure" ===
                    ( null === ( a = e.data ) ||
                      void 0 === a ||
                      null === ( r = a.userDomainLink ) ||
                      void 0 === r ?
                      void 0 :
                      r.__typename )
                  ) {
                    const o = e.data.userDomainLink.reason || l;
                    X( o );
                  } else X( l );
                  G( !1 );
                } );
            },
            [ te, x, b, W, S ]
          );

          const se = c.useCallback(
            () => {
              s && l( Y ), F(), d && window.location.reload();
            },
            [ Y, s, d ]
          );

          const me = !(
              null == a ||
              null === ( n = a.customDomainState ) ||
              void 0 === n ||
              !n.pending
            ) ||
            !(
              null == a ||
              null === ( t = a.customDomainState ) ||
              void 0 === t ||
              !t.live
            );

          const de = !!b && a.id === b.id && !me && g().canUseDOM;
          if (
            ( c.useEffect(
                () => {
                  r &&
                    de &&
                    x.event( "user.presentedClaimSubdomainDialog", {
                      userId: null == b ? void 0 : b.id,
                    } );
                },
                [ r, de ]
              ),
              !de )
          )
            return null;
          const ge = !A && !re && ( null == ie ? void 0 : ie.userDomainValidity );
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              R.QH, {
                confirmText: "Claim URL",
                titleText: "Claim your ".concat( ee, " URL" ),
                isDestructiveAction: !1,
                onConfirm: ce,
                isVisible: r,
                hide: i,
                withCloseButton: !1,
                showCancelButton: !1,
                secondaryButton: c.createElement(
                  R.zx, {
                    href: ( 0, $.mc )(),
                    size: "REGULAR"
                  },
                  "Learn More"
                ),
                hideOnConfirm: !1,
                disableConfirm: _ || !!j || !ge,
              },
              "All your stories show up on your profile, and it now comes with a personalized URL. The name you pick below will also be your username on ",
              ee,
              ".",
              c.createElement(
                R.xu, {
                  marginBottom: "14px",
                  marginTop: "32px",
                  display: "flex",
                  flexDirection: "column",
                },
                c.createElement( R.nv, {
                  ariaLabel: "Profile domain",
                  onChange: ue,
                  value: S,
                  errorMessage: null != j ? j : void 0,
                  hideErrorIcon: !0,
                } ),
                !j &&
                c.createElement(
                  R.xu, {
                    display: "inline-block",
                    marginTop: "8px"
                  },
                  c.createElement(
                    "table", {
                      className: f( {
                        display: "table",
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "left",
                        borderSpacing: "4px",
                        tableLayout: "fixed",
                        maxWidth: "100%",
                      } ),
                    },
                    c.createElement(
                      "tbody",
                      null,
                      c.createElement(
                        "tr",
                        null,
                        c.createElement(
                          "td", {
                            className: f( {
                              paddingRight: "4px",
                              verticalAlign: "top",
                            } ),
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M",
                              tag: "h4"
                            },
                            c.createElement( "strong", null, "URL" )
                          )
                        ),
                        c.createElement(
                          "td",
                          null,
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M"
                            },
                            W
                          )
                        )
                      ),
                      c.createElement(
                        "tr",
                        null,
                        c.createElement(
                          "td", {
                            className: f( {
                              paddingRight: "4px",
                              verticalAlign: "top",
                            } ),
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M",
                              tag: "h4"
                            },
                            c.createElement( "strong", null, "Username" )
                          )
                        ),
                        c.createElement(
                          "td", {
                            className: f( {
                              marginBottom: "12px",
                              marginTop: "10px",
                            } ),
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M"
                            },
                            "@",
                            S
                          )
                        )
                      ),
                      c.createElement(
                        "tr",
                        null,
                        c.createElement( "td", null ),
                        c.createElement(
                          "td", {
                            className: f( {
                              visibility: S === a.username ? "hidden" : "visible",
                            } ),
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M"
                            },
                            "@",
                            a.username,
                            " will no longer be valid"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            c.createElement(
              R.QH, {
                confirmText: "Done",
                titleText: "You're all set.",
                isDestructiveAction: !1,
                onConfirm() {},
                isVisible: L,
                hide: se,
                withCloseButton: !1,
                showCancelButton: !1,
              },
              "Your profile is now available at your ",
              ee,
              " URL.",
              c.createElement(
                R.xu,
                null,
                c.createElement(
                  R.xu, {
                    display: "inline-block",
                    marginTop: "28px"
                  },
                  c.createElement(
                    "table", {
                      className: f( {
                        display: "table",
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "left",
                        tableLayout: "fixed",
                        maxWidth: "100%",
                      } ),
                    },
                    c.createElement(
                      "tbody",
                      null,
                      c.createElement(
                        "tr",
                        null,
                        c.createElement(
                          "td", {
                            className: f( {
                              marginBottom: "12px",
                              paddingRight: "8px",
                              verticalAlign: "top",
                            } ),
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M",
                              tag: "h4"
                            },
                            c.createElement( "strong", null, "URL" )
                          )
                        ),
                        c.createElement(
                          "td",
                          null,
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M",
                              tag: "h4"
                            },
                            W
                          )
                        )
                      ),
                      c.createElement(
                        "tr", {
                          className: f( {
                            paddingTop: "8px"
                          } )
                        },
                        c.createElement(
                          "td", {
                            className: f( {
                              paddingRight: "8px",
                              verticalAlign: "top",
                            } ),
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M",
                              tag: "h4"
                            },
                            c.createElement( "strong", null, "Username" )
                          )
                        ),
                        c.createElement(
                          "td", {
                            className: f( {
                              marginBottom: "12px"
                            } )
                          },
                          c.createElement(
                            h.F, {
                              color: "LIGHTER",
                              scale: "M",
                              tag: "h4"
                            },
                            "@",
                            S
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        q = ( 0, u.Ps )( W() ),
        z = () => {
          return ( 0, m.useMutation )( Q );
        },
        Q = ( 0, u.Ps )( G() ),
        K = e => {
          const n = ( 0, m.useQuery )( j, {
            variables: {
              domain: e
            },
            ssr: !1
          } );
          return {
            isValidityLoading: n.loading,
            validityResult: n.data,
            checkValidity: n.refetch,
          };
        },
        j = ( 0, u.Ps )( _() ),
        J = e => {
          const n = ( 0, N.v9 )( e => {
            return e.config.authDomain;
          } ).split( ":" )[ 0 ];
          return "".concat( e, "." ).concat( n );
        },
        Z = e => {
          const n = ( 0, N.v9 )( e => {
            return e.config.authDomain;
          } );
          return "https://".concat( e, "." ).concat( n );
        },
        X = t( 77455 );

      function ee() {
        const e = i()( [
          "\n  fragment UserSubdomainFlow_user on User {\n    id\n    hasCompletedProfile\n    name\n    bio\n    imageId\n    ...UserCompleteProfileDialog_user\n    ...UserSubdomainOnboardingDialog_user\n  }\n  ",
          "\n  ",
          "\n",
        ] );
        return ( ee = () => {
            return e;
          } ),
          e;
      }
      var ne = e => {
          const n = e.user,
            t = e.redirectOnComplete,
            a = void 0 !== t && t,
            r = e.refreshOnComplete,
            i = void 0 !== r && r,
            l = e.forceVisible,
            u = void 0 !== l && l,
            m = "true" === ( 0, X.K )().get( "showDomainSetup" ) || u,
            d = ( 0, V.O )( m ),
            g = o()( d, 3 ),
            p = g[ 0 ],
            f = g[ 2 ],
            h = c.useState( n.hasCompletedProfile ),
            v = o()( h, 2 ),
            E = v[ 0 ],
            x = v[ 1 ],
            b = c.useState( null ),
            C = o()( b, 2 ),
            I = C[ 0 ],
            y = C[ 1 ],
            S =
            U( n ).shouldShowDialog && !E && ( !n.name || !n.bio || !n.imageId );
          return I ?
            c.createElement( s.Z, {
              to: I,
              replace: !0
            } ) :
            c.createElement(
              c.Fragment,
              null,
              c.createElement( Y, {
                isVisible: p && !S,
                hide: u ? () => {} : f,
                user: n,
                redirectTo: y,
                redirectOnHide: a,
                refreshOnHide: i,
              } ),
              p && S ?
              c.createElement( B, {
                user: n,
                setHasCompletedProfile: x
              } ) :
              null
            );
        },
        te = ( 0, u.Ps )( ee(), A, q );
    },
  },
] );
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3874.4591dc85.chunk.js.map
