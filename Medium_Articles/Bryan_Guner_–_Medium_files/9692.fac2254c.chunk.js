( self.webpackChunklite = self.webpackChunklite || [] ).push( [
[ 9692 ],
{
  43198: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      j: () => c,
      s: () => s
    } );
    const r = n( 59713 );
    const a = n.n( r );
    const o = n( 14391 );

    const i = e => {
      let t;
      return ( ( t = {} ),
        a()( t, o.NJ.BQ, !0 ),
        a()( t, o.NJ.PQ, !0 ),
        a()( t, o.NJ.H1, !0 ),
        a()( t, o.NJ.H2, !0 ),
        a()( t, o.NJ.H3, !0 ),
        a()( t, o.NJ.HR, !0 ),
        a()( t, o.NJ.COVER_TITLE, !0 ),
        a()( t, o.NJ.H4, !0 ),
        a()( t, o.NJ.OLI, !0 ),
        a()( t, o.NJ.P, !0 ),
        a()( t, o.NJ.SECTION_CAPTION, !0 ),
        a()( t, o.NJ.ULI, !0 ),
        a()( t, o.NJ.PRE, !0 ),
        a()( t, o.NJ.IFRAME, !1 ),
        a()( t, o.NJ.MIXTAPE_EMBED, !1 ),
        a()( t, o.NJ.IMG, !1 ),
        t )[ e ];
    };

    var c = [ o.NJ.PQ, o.NJ.H4 ];

    var s = ( e, t ) => {
      for ( var n = null, r = 0; r < e.length && e[ r ]; r++ ) {
        const a = e[ r ].type;
        if ( i( a ) ) {
          if ( !t.includes( a ) ) break;
          n = r;
          break;
        }
      }
      return n;
    };
  },
  92013: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      h: () => i
    } );
    const r = n( 76972 ),
      a = n( 27003 ),
      o = n( 95482 );

    function i( e ) {
      const t = e.hasPrefix,
        n = void 0 !== t && t,
        i = e.timestamp,
        c = Date.now(),
        s = ( 0, r.Z )( c, i );
      if ( 0 === s ) return n ? "just now" : "Just now";
      if ( s >= 1 && s < 24 )
        return "".concat( s, " hour" ).concat( s > 1 ? "s" : "", " ago" );
      const u = ( 0, a.Z )( c, i );
      return u >= 1 && u < 7 ?
        "".concat( u, " day" ).concat( u > 1 ? "s" : "", " ago" ) :
        ( 0, o.Z )( {
          timestamp: i
        } );
    }
  },
  22669: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      Z: () => u
    } );
    const r = n( 68337 ),
      a = n.n( r ),
      o = n( 67294 ),
      i = n( 76134 ),
      c = n.n( i ),
      s = n( 7530 );
    const u = e => {
      const t = e.children,
        n = e.linkifyTwitterHandles,
        r = void 0 !== n && n,
        i = e.wrapLinks,
        u = void 0 !== i && i;
      if ( !t ) return null;
      const l = a()().tlds( c() );
      r &&
        l.add( "@", {
          validate( e, t, n ) {
            const r = e.slice( t );
            return (
              n.re.twitter ||
              ( n.re.twitter = new RegExp(
                "^([a-zA-Z0-9_]){1,15}(?!_)(?=$|" + n.re.src_ZPCc + ")"
              ) ),
              n.re.twitter.test( r ) ?
              !( t >= 2 && "@" === r[ t - 2 ] ) &&
              r.match( n.re.twitter )[ 0 ].length :
              0
            );
          },
          normalize( e ) {
            e.url = "https://twitter.com/" + e.url.replace( /^@/, "" );
          },
        } );
      const p = l.match( t );
      if ( !p ) return t;
      let f = 0;
      return p.reduce( ( e, n, r ) => {
        return t ?
          ( n.index > f && e.push( t.substring( f, n.index ) ),
            e.push(
              o.createElement(
                s.rU, {
                  wrapLinks: u,
                  disableSourceParam: !0,
                  key: r,
                  inline: !0,
                  linkStyle: "OBVIOUS",
                  href: n.url,
                },
                n.text
              )
            ),
            r === p.length - 1 &&
            n.lastIndex < t.length &&
            e.push( t.substring( n.lastIndex, t.length ) ),
            ( f = n.lastIndex ),
            e ) : [];
      }, [] );
    };
  },
  6741: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      m: () => O,
      Z: () => I
    } );
    const r = n( 59713 ),
      a = n.n( r ),
      o = n( 28655 ),
      i = n.n( o ),
      c = n( 71439 ),
      s = n( 80439 ),
      u = n( 67294 ),
      l = n( 12291 ),
      p = n( 62630 ),
      f = n( 27572 );

    function d( e, t ) {
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
          d( Object( n ), !0 ).forEach( t => {
            a()( e, t, n[ t ] );
          } ) :
          Object.getOwnPropertyDescriptors ?
          Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
          d( Object( n ) ).forEach( t => {
            Object.defineProperty(
              e,
              t,
              Object.getOwnPropertyDescriptor( n, t )
            );
          } );
      }
      return e;
    }

    function m() {
      const e = i()( [
        "\n  query QuoteDeleteMutation_postQuotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      highlights {\n        id\n        ...QuoteDeleteMutation_highlight\n      }\n    }\n  }\n  ",
        "\n",
      ] );
      return ( m = () => {
          return e;
        } ),
        e;
    }

    function h() {
      const e = i()( [
        "\n  mutation QuoteDeleteMutation($targetPostId: ID!, $targetQuoteId: ID!) {\n    deleteQuote(targetPostId: $targetPostId, targetQuoteId: $targetQuoteId)\n  }\n",
      ] );
      return ( h = () => {
          return e;
        } ),
        e;
    }

    function v() {
      const e = i()( [
        "\n  fragment QuoteDeleteMutation_highlight on Quote {\n    id\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n",
      ] );
      return ( v = () => {
          return e;
        } ),
        e;
    }
    const E = ( 0, c.Ps )( v() );
    const y = ( 0, c.Ps )( h() );
    const P = ( 0, c.Ps )( m(), E );

    var O = e => {
      const t = e.children,
        n = e.onCompleted,
        r = e.targetPostId,
        a = e.targetQuoteId,
        o = ( 0, p.Av )(),
        i = ( 0, f.Qi )();
      return u.createElement(
        s.mm, {
          mutation: y,
          onCompleted( e ) {
            o.event( "quotes.ui.quoteDeleted", {
                postId: r,
                quoteId: a,
                source: i,
              } ),
              n && n( e );
          },
          optimisticResponse: {
            deleteQuote: !0
          },
          update( e ) {
            const t = {
                query: P,
                variables: {
                  postId: r
                }
              },
              n = e.readQuery( t );
            e.writeQuery(
              g( {
                  data: {
                    post: g(
                      g( {}, n.post ), {}, {
                        highlights: n.post.highlights.filter( e => {
                          return e.id !== a;
                        } ),
                      }
                    ),
                  },
                },
                t
              )
            );
          },
          variables: {
            targetPostId: r,
            targetQuoteId: a
          },
        },
        e => {
          return t( {
            deleteQuote: e
          } );
        }
      );
    };

    const I = ( 0, l.$j )()( O );
  },
  86156: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      f: () => r
    } );
    var r = n( 67294 ).createContext( {
      openSidebarToRespondToHighlight() {
        return null;
      },
    } );
  },
  25415: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      KN: () => s,
      Zx: () => u
    } );
    const r = n( 63038 );
    const a = n.n( r );
    const o = n( 67294 );
    const i = n( 69677 );

    const c = o.createContext( {
      openPrivateNoteId: null,
      privateNoteSelection: null,
      setOpenPrivateNoteId() {},
      setPrivateNoteSelection() {},
    } );

    var s = e => {
      const t = e.children,
        n = e.initialActivePrivateNoteId,
        r = e.initialActiveGrafName,
        s = ( 0, i.Ij )().paragraphRefsMappers,
        u = s.paragraphRefsMap,
        l = s.paragraphRefsByNameMap,
        p = o.useState( null ),
        f = a()( p, 2 ),
        d = f[ 0 ],
        g = f[ 1 ],
        m = o.useState( null ),
        h = a()( m, 2 ),
        v = h[ 0 ],
        E = h[ 1 ];
      return o.useEffect(
          () => {
            g( n );
          },
          [ n ]
        ),
        o.useEffect(
          () => {
            if ( r && !n ) {
              const e = l.get( r );
              e &&
                setTimeout( () => {
                  return window.scrollTo( 0, e.offsetTop );
                } );
            }
          },
          [ u ]
        ),
        o.createElement(
          c.Provider, {
            value: {
              openPrivateNoteId: d,
              privateNoteSelection: v,
              setOpenPrivateNoteId: g,
              setPrivateNoteSelection: E,
            },
          },
          t
        );
    };

    var u = () => {
      return o.useContext( c );
    };
  },
  93227: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      Tz: () => $e,
      UW: () => ze,
      iF: () => We,
      Ms: () => Be
    } );
    const r = n( 28655 ),
      a = n.n( r ),
      o = n( 63038 ),
      i = n.n( o ),
      c = n( 71439 ),
      s = n( 67294 ),
      u = n( 25415 ),
      l = n( 69677 ),
      p = n( 76915 ),
      f = n( 59713 ),
      d = n.n( f ),
      g = n( 67154 ),
      m = n.n( g ),
      h = n( 12291 ),
      v = n( 319 ),
      E = n.n( v ),
      y = n( 80439 ),
      P = n( 62630 ),
      O = n( 27572 );

    function I( e, t ) {
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

    function S( e ) {
      for ( let t = 1; t < arguments.length; t++ ) {
        const n = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ?
          I( Object( n ), !0 ).forEach( t => {
            d()( e, t, n[ t ] );
          } ) :
          Object.getOwnPropertyDescriptors ?
          Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
          I( Object( n ) ).forEach( t => {
            Object.defineProperty(
              e,
              t,
              Object.getOwnPropertyDescriptor( n, t )
            );
          } );
      }
      return e;
    }

    function b() {
      const e = a()( [
        "\n  query QuoteCreateMutation_postQuotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      highlights {\n        id\n        ...QuoteCreateMutation_highlight\n      }\n    }\n  }\n  ",
        "\n",
      ] );
      return ( b = () => {
          return e;
        } ),
        e;
    }

    function x() {
      const e = a()( [
        "\n  mutation QuoteCreateMutation(\n    $targetPostId: ID!\n    $targetPostVersionId: ID!\n    $targetParagraphNames: [ID!]!\n    $startOffset: Int!\n    $endOffset: Int!\n    $quoteType: StreamItemQuoteType!\n  ) {\n    createQuote(\n      targetPostId: $targetPostId\n      targetPostVersionId: $targetPostVersionId\n      targetParagraphNames: $targetParagraphNames\n      startOffset: $startOffset\n      endOffset: $endOffset\n      quoteType: $quoteType\n    ) {\n      __typename\n      id\n      ...QuoteCreateMutation_highlight\n    }\n  }\n  ",
        "\n",
      ] );
      return ( x = () => {
          return e;
        } ),
        e;
    }

    function w() {
      const e = a()( [
        "\n  fragment QuoteCreateMutation_highlight on Quote {\n    id\n    paragraphs {\n      ...QuoteCreateMutation_paragraph\n    }\n    startOffset\n    endOffset\n    userId\n    user {\n      __typename\n      id\n      name\n    }\n  }\n  ",
        "\n",
      ] );
      return ( w = () => {
          return e;
        } ),
        e;
    }

    function N() {
      const e = a()( [
        "\n  fragment QuoteCreateMutation_paragraph on Paragraph {\n    id\n    name\n    text\n  }\n",
      ] );
      return ( N = () => {
          return e;
        } ),
        e;
    }
    const R = ( 0, c.Ps )( N() ),
      T = ( 0, c.Ps )( w(), R ),
      M = ( 0, c.Ps )( x(), T ),
      C = ( 0, c.Ps )( b(), T ),
      _ = e => {
        const t = e.children,
          n = e.endOffset,
          r = e.onUpdate,
          a = e.onCompleted,
          o = e.quoteType,
          i = e.startOffset,
          c = e.targetParagraphs,
          u = e.targetPostId,
          l = e.targetPostVersionId,
          p = e.viewer,
          f = ( 0, P.Av )(),
          d = ( 0, O.Qi )(),
          g = c
          .map( e => {
            return e.name;
          } )
          .filter( e => {
            return !!e;
          } );
        return s.createElement(
          y.mm, {
            mutation: M,
            onCompleted( e ) {
              e.createQuote &&
                f.event( "quotes.ui.quoteCreated", {
                  postId: u,
                  quoteId: e.createQuote.id,
                  source: d,
                } ),
                a && a( e );
            },
            optimisticResponse: {
              createQuote: {
                __typename: "Quote",
                id: "temp",
                paragraphs: c.map( e => {
                  return {
                    id: "tempQuote_".concat( e.id ),
                    name: e.name,
                    text: e.text,
                    __typename: "Paragraph",
                  };
                } ),
                startOffset: i,
                endOffset: n,
                userId: p ? p.id : "",
                user: {
                  __typename: "User",
                  id: p ? p.id : "",
                  name: p ? p.name : "",
                },
              },
            },
            update( e, t ) {
              let n;
              const a = e.readQuery( {
                query: C,
                variables: {
                  postId: u
                }
              } );

              const o =
                null === ( n = t.data ) || void 0 === n ?
                void 0 :
                n.createQuote;

              if ( o ) {
                let i;
                let c;

                const s = S(
                  S( {}, a ), {}, {
                    post: S(
                      S( {}, null == a ? void 0 : a.post ), {}, {
                        highlights: [].concat(
                          E()(
                            null !==
                            ( i =
                              null == a ||
                              null === ( c = a.post ) ||
                              void 0 === c ?
                              void 0 :
                              c.highlights ) && void 0 !== i ?
                            i : []
                          ),
                          [ o ]
                        ),
                      }
                    ),
                  }
                );

                e.writeQuery( {
                  query: C,
                  variables: {
                    postId: u
                  },
                  data: s
                } );
              }
              r && r( t.data );
            },
            variables: {
              targetPostId: u,
              targetPostVersionId: l,
              targetParagraphNames: g,
              startOffset: i,
              endOffset: n,
              quoteType: o,
            },
          },
          e => {
            return t( {
              createQuote: e
            } );
          }
        );
      };
    ( 0, h.$j )()( _ );
    const D = n( 6741 );
    const H = ( 0, h.$j )()( e => {
      const t = e.children,
        n = e.endOffset,
        r = e.onCompleted,
        a = e.quoteType,
        o = e.startOffset,
        i = e.onUpdate,
        c = e.targetParagraphs,
        u = e.targetPostId,
        l = e.targetPostVersionId,
        p = e.targetQuoteId,
        f = e.viewer;
      return s.createElement(
        _, {
          endOffset: n,
          onUpdate: i,
          onCompleted: r,
          quoteType: a,
          startOffset: o,
          targetParagraphs: c,
          targetPostId: u,
          targetPostVersionId: l,
          viewer: f,
        },
        e => {
          const n = e.createQuote;
          return s.createElement(
            D.m, {
              targetPostId: u,
              targetQuoteId: p || "",
              onCompleted: r
            },
            e => {
              const r = e.deleteQuote;
              return t( {
                createQuote: n,
                deleteQuote: r
              } );
            }
          );
        }
      );
    } );
    const k = n( 86156 ),
      L = n( 86280 ),
      j = n( 62181 ),
      A = n( 7530 ),
      q = n( 73810 ),
      Q = n( 98024 ),
      F = n( 28309 ),
      U = n( 14391 ),
      $ = n( 67122 );

    function G() {
      return ( G =
        Object.assign ||
        function ( e ) {
          for ( let t = 1; t < arguments.length; t++ ) {
            const n = arguments[ t ];
            for ( const r in n )
              Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] );
          }
          return e;
        } ).apply( this, arguments );
    }
    const B = s.createElement( "path", {
      d: "M13.7 15.96l5.2-9.38-4.72-2.62-5.2 9.38 4.72 2.62zm-.5.89l-1.3 2.37-1.26.54-.7 1.26-3.8-.86 1.23-2.22-.2-1.35 1.31-2.37 4.73 2.62z",
      fillRule: "evenodd",
    } );
    const z = e => {
      return s.createElement(
        "svg",
        G( {
          width: 25,
          height: 25,
          viewBox: "0 0 25 25"
        }, e ),
        B
      );
    };

    function W() {
      return ( W =
        Object.assign ||
        function ( e ) {
          for ( let t = 1; t < arguments.length; t++ ) {
            const n = arguments[ t ];
            for ( const r in n )
              Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] );
          }
          return e;
        } ).apply( this, arguments );
    }
    const V = s.createElement(
      "g", {
        fillRule: "evenodd"
      },
      s.createElement( "path", {
        d: "M17.66 4.55H7.35A4.36 4.36 0 0 0 3 8.9v5.68a4.35 4.35 0 0 0 3.7 4.28v2.77c0 .3.35.48.59.3l3.9-3h6.48a4.37 4.37 0 0 0 4.35-4.35V8.9a4.35 4.35 0 0 0-4.34-4.35zM16 14.31a.99.99 0 0 1-1 .99h-5a1 1 0 0 1-1-.99v-3.02a.99.99 0 0 1 1-.99v-.78A2.5 2.5 0 0 1 12.5 7 2.5 2.5 0 0 1 15 9.5v.79a1 1 0 0 1 1 .99v3.02z",
      } ),
      s.createElement( "path", {
        d: "M14 9.81c0-.83-.67-1.68-1.5-1.68S11 8.97 11 9.81v.49h3v-.49z",
      } )
    );
    const Z = e => {
      return s.createElement(
        "svg",
        W( {
          width: 25,
          height: 25,
          viewBox: "0 0 25 25"
        }, e ),
        V
      );
    };

    function J() {
      return ( J =
        Object.assign ||
        function ( e ) {
          for ( let t = 1; t < arguments.length; t++ ) {
            const n = arguments[ t ];
            for ( const r in n )
              Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] );
          }
          return e;
        } ).apply( this, arguments );
    }
    const K = s.createElement( "path", {
      d: "M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03z",
      fillRule: "evenodd",
    } );
    const X = e => {
      return s.createElement(
        "svg",
        J( {
          width: 25,
          height: 25,
          viewBox: "0 0 25 25"
        }, e ),
        K
      );
    };
    const Y = n( 27778 ),
      ee = n( 95614 ),
      te = n( 96879 ),
      ne = n( 27952 ),
      re = n( 534 );

    function ae() {
      const e = a()( [
        "\n  fragment SelectionMenuPopover_post on Post {\n    id\n    isLocked\n    isPublished\n    latestPublishedVersion\n    visibility\n  }\n",
      ] );
      return ( ae = () => {
          return e;
        } ),
        e;
    }

    function oe() {
      const e = a()( [
        "\n  fragment SelectionMenuPopover_highlight on Quote {\n    id\n    userId\n    user {\n      name\n    }\n  }\n",
      ] );
      return ( oe = () => {
          return e;
        } ),
        e;
    }

    function ie( e, t ) {
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

    function ce( e ) {
      for ( let t = 1; t < arguments.length; t++ ) {
        const n = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ?
          ie( Object( n ), !0 ).forEach( t => {
            d()( e, t, n[ t ] );
          } ) :
          Object.getOwnPropertyDescriptors ?
          Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
          ie( Object( n ) ).forEach( t => {
            Object.defineProperty(
              e,
              t,
              Object.getOwnPropertyDescriptor( n, t )
            );
          } );
      }
      return e;
    }
    const se = ( e, t ) => {
        return n => {
          return {
            display: "inline-block",
            fill: e ? n.accentColor.fill.light : null,
            paddingRight: t ? "6px" : null,
            ":hover": {
              fill: e ? n.accentColor.fill.light : null
            },
          };
        };
      },
      ue = () => {
        return {
          display: "inline-block",
          fill: $.ix,
          padding: "8px 0",
          whiteSpace: "nowrap",
        };
      },
      le = e => {
        return {
          background: e.baseColor.overlay.lighter,
          display: "inline-block",
          height: "25px",
          width: "1px",
          verticalAlign: "top",
        };
      };

    function pe( e ) {
      let t;
      const n = e.action;
      const r = e.actionHandler;
      const a = e.requireLogin;
      const o = void 0 === a || a;
      const c = e.susiProps;
      const u = e.viewer;
      const l = s.useState( null );
      const p = i()( l, 2 );
      const f = p[ 0 ];
      const d = p[ 1 ];
      switch (
        ( s.useEffect( () => {
            d(
              document &&
              document.documentElement &&
              "ontouchstart" in document.documentElement
            );
          }, [] ),
          n )
      ) {
        case "highlight":
          t = z;
          break;
        case "respond":
          t = X;
          break;
        case "tweet":
          t = Y.Z;
          break;
        case "privateNote":
          t = Z;
          break;
        default:
          t = () => {
            return null;
          };
      }
      const g = f ?
        e => {
          e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
        } :
        () => {},
        h = !u && o ?
        e => {
          const t = e.children;
          return s.createElement(
            "div", {
              onTouchStart: g
            },
            !!c &&
            s.createElement(
              j.R9,
              m()( {
                susiEntry: "highlight_text"
              }, c ),
              t
            )
          );
        } :
        e => {
          const t = e.children;
          return s.createElement(
            q.Z, {
              rules: {
                fill: "inherit"
              },
              onClick: r,
              onTouchStart: g
            },
            t
          );
        };
      return s.createElement( h, null, s.createElement( t, null ) );
    }

    function fe( e ) {
      const t = e.allowNotes,
        n = e.authDomain,
        r = e.createPrivateNote,
        a = e.endOffset,
        o = e.highlightId,
        i = e.highlights,
        c = e.interactivePost,
        u = e.isPersistent,
        l = e.mouseEnter,
        p = e.mouseLeave,
        f = e.position,
        d = e.selectedParagraphs,
        g = e.startOffset,
        h = e.update,
        v = s.useContext( k.f ).openSidebarToRespondToHighlight,
        E = !( 0, ee.T )(),
        y = !!c && !!c.isPublished,
        I = y && ( "PUBLIC" === c.visibility || !!c.isLocked ),
        S = E || I,
        b =
        i &&
        i.find( e => {
          return e.id === o;
        } ),
        x = d.map( e => {
          return e.name;
        } ),
        w = c.id,
        N = c.latestPublishedVersion;
      s.useEffect(
        () => {
          h && h();
        },
        [ l, p, f ]
      );
      const R = s.useContext( $e ),
        T = R.activeSelection,
        M = R.setActiveSelection,
        C = ( 0, P.Av )();
      return s.createElement( F.Yi, null, e => {
        return s.createElement(
          F.f6, {
            theme: ( 0, re.$_ )( e )
          },
          s.createElement( A.hS, null, e => {
            return s.createElement( L.Q_, {
              nonBlocking: !0
            }, i => {
              let c;
              const f = !( !b || !i ) && i.id === b.userId;
              if ( f ) c = "You highlighted";
              else if ( b && "anon" === b.userId ) c = "Top highlight";
              else {
                let h, P;
                c =
                  null !==
                  ( h =
                    null == b || null === ( P = b.user ) || void 0 === P ?
                    void 0 :
                    P.name ) && void 0 !== h ?
                  h :
                  "";
              }
              const R = {
                targetPostId: w,
                targetPostVersionId: N,
                targetParagraphs: d,
                startOffset: g,
                endOffset: a,
                viewer: i,
              };
              return s.createElement(
                "div", {
                  onMouseEnter: l,
                  onMouseLeave: p
                },
                s.createElement(
                  "div", {
                    className: e( ue )
                  },
                  y &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      A.xu, {
                        display: "inline-block",
                        padding: "0 12px 0 10px"
                      },
                      s.createElement(
                        s.Fragment,
                        null,
                        s.createElement(
                          "div", {
                            className: e( se( f, S ) )
                          },
                          s.createElement(
                            O.cW, {
                              source: {
                                name: b ?
                                  "quote_click_menu" : "selection_menu",
                              },
                            },
                            s.createElement(
                              H,
                              m()( {}, R, {
                                quoteType: U.a6.HIGHLIGHT,
                                targetQuoteId: o,
                              } ),
                              e => {
                                const t = e.createQuote,
                                  r = e.deleteQuote;
                                return s.createElement( pe, {
                                  action: "highlight",
                                  viewer: i,
                                  actionHandler: f ?
                                    () => {
                                      M( null ), r();
                                    } : () => {
                                      t(), M( null );
                                    },
                                  susiProps: {
                                    actionUrl: ( 0, te.Rk )(
                                      ( 0, ne.QW )( n, w ), {
                                        endOffset: a.toString(),
                                        paragraphName: x.toString(),
                                        startOffset: g.toString(),
                                        versionId: N,
                                      }
                                    ),
                                    operation: "register",
                                  },
                                } );
                              }
                            )
                          )
                        ),
                        E &&
                        s.createElement(
                          H,
                          m()( {}, R, {
                            quoteType: U.a6.RESPONSE,
                            onCompleted( e ) {
                              e &&
                                e.createQuote &&
                                e.createQuote.id &&
                                v( e.createQuote );
                            },
                          } ),
                          t => {
                            let n;
                            const r = t.createQuote;
                            return s.createElement(
                              "div", {
                                className: e(
                                  ( ( n = I ), {
                                    display: "inline-block",
                                    paddingRight: n ? "6px" : null,
                                  } )
                                ),
                              },
                              s.createElement( pe, {
                                action: "respond",
                                viewer: i,
                                actionHandler: r,
                              } )
                            );
                          }
                        ),
                        I &&
                        s.createElement(
                          H,
                          m()( {}, R, {
                            quoteType: U.a6.HIGHLIGHT,
                            targetQuoteId: o,
                            onUpdate( e ) {
                              return (
                                T &&
                                M(
                                  ce(
                                    ce( {}, T ), {}, {
                                      highlightId: e.createQuote.id
                                    }
                                  )
                                )
                              );
                            },
                          } ),
                          e => {
                            const t = e.createQuote;
                            return s.createElement( pe, {
                              action: "tweet",
                              viewer: i,
                              requireLogin: !1,
                              actionHandler() {
                                !( e => {
                                  const t = e.isYourHighlight;
                                  const r = e.createQuote;
                                  const a = e.viewer;

                                  const o =
                                    T &&
                                    T.selectedParagraph &&
                                    T.selectedParagraph.text;

                                  const i = T && T.startOffset;
                                  const c = T && T.endOffset;
                                  let s = "";
                                  o &&
                                    "number" == typeof i &&
                                    "number" == typeof c &&
                                    ( s = encodeURIComponent(
                                      o.slice( i, c )
                                    ) ),
                                    a && a.id && !t && r(),
                                    window.open(
                                      ""
                                      .concat(
                                        ( 0, ne.A2 )( n, w ),
                                        "?type=highlight&text="
                                      )
                                      .concat( s ),
                                      "_blank"
                                    ),
                                    C.event( "post.shareOpen", {
                                      postId: w,
                                      source: "highlight_menu",
                                      dest: "twitter",
                                      dialogType: "native",
                                    } );
                                } )( {
                                  isYourHighlight: f,
                                  createQuote: t,
                                  viewer: i,
                                } );
                              },
                            } );
                          }
                        )
                      )
                    ),
                    ( !u || t ) &&
                    s.createElement( "div", {
                      className: e( le )
                    } )
                  ),
                  !u &&
                  s.createElement(
                    A.xu, {
                      display: "inline-block",
                      padding: "0 16px"
                    },
                    s.createElement(
                      Q.F, {
                        color: "DARKER",
                        scale: "S"
                      },
                      c || ""
                    )
                  ),
                  u &&
                  t &&
                  s.createElement( "div", {
                    className: e( le )
                  } ) &&
                  s.createElement(
                    A.xu, {
                      display: "inline-block",
                      padding: "0 16px"
                    },
                    s.createElement( pe, {
                      action: "privateNote",
                      viewer: i,
                      actionHandler: r,
                    } )
                  )
                )
              );
            } );
          } )
        );
      } );
    }
    const de = s.memo( fe ),
      ge = ( 0, c.Ps )( oe() ),
      me = ( 0, c.Ps )( ae() ),
      he = ( 0, h.$j )( e => {
        return {
          authDomain: e.config.authDomain
        };
      } )( de ),
      ve = n( 74465 );

    function Ee() {
      const e = a()( [
        "\n  fragment SelectionMenu_post on Post {\n    id\n    isPublished\n    creator {\n      id\n      allowNotes\n    }\n    ...SelectionMenuPopover_post\n  }\n  ",
        "\n",
      ] );
      return ( Ee = () => {
          return e;
        } ),
        e;
    }

    function ye() {
      const e = a()( [
        "\n  fragment SelectionMenu_highlight on Quote {\n    id\n    ...SelectionMenuPopover_highlight\n  }\n  ",
        "\n",
      ] );
      return ( ye = () => {
          return e;
        } ),
        e;
    }
    const Pe = e => {
        e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
      },
      Oe = e => {
        e.preventDefault();
      };

    function Ie( e ) {
      const t = e.createPrivateNote,
        n = e.endOffset,
        r = e.highlightId,
        a = e.highlights,
        o = e.interactivePost,
        i = e.isPersistent,
        c = e.mouseEnter,
        u = e.mouseLeave,
        l = e.position,
        p = void 0 === l ? {
          left: 0,
          top: 0,
          bottom: 0
        } : l,
        f = e.selectedParagraphs,
        d = e.startOffset,
        g = p.left,
        m = p.top,
        h = p.bottom,
        v = o && o.isPublished,
        E = !!( o && o.creator && o.creator.allowNotes );
      return s.createElement(
        "span", {
          onMouseDown: Oe,
          onMouseUp: Pe,
          onClick: Pe,
          style: {
            display: "block",
            position: "absolute",
            left: g,
            top: m,
            height: "".concat( h - m, "px" ),
            width: "0px",
          },
        },
        ( E || v ) &&
        s.createElement(
          A.J2, {
            darkTheme: !0,
            disablePortalOverlay: !0,
            display: "block",
            isVisible: !0,
            hide() {},
            placement: "top",
            customZIndex: ve.ZP.selectionMenu,
            popoverRenderFn( e ) {
              return s.createElement( he, {
                allowNotes: E,
                createPrivateNote: t,
                endOffset: n,
                highlightId: r,
                highlights: a,
                interactivePost: o,
                isPersistent: i,
                mouseEnter: c,
                mouseLeave: u,
                position: p,
                update: e,
                selectedParagraphs: f,
                startOffset: d,
              } );
            },
            referenceHeight: "100%",
            refTag: "span",
            shouldAnimateOpen: !0,
          },
          s.createElement( s.Fragment, null )
        )
      );
    }
    const Se = ( 0, c.Ps )( ye(), ge ),
      be = ( 0, c.Ps )( Ee(), me ),
      xe = n( 46898 ),
      we = n( 16803 );

    function Ne( e, t ) {
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

    function Re( e ) {
      for ( let t = 1; t < arguments.length; t++ ) {
        const n = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ?
          Ne( Object( n ), !0 ).forEach( t => {
            d()( e, t, n[ t ] );
          } ) :
          Object.getOwnPropertyDescriptors ?
          Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
          Ne( Object( n ) ).forEach( t => {
            Object.defineProperty(
              e,
              t,
              Object.getOwnPropertyDescriptor( n, t )
            );
          } );
      }
      return e;
    }

    function Te() {
      const e = a()( [
        "\n  mutation NoteCreateMutation(\n    $targetPostId: ID!\n    $targetPostVersion: ID!\n    $targetParagraphName: ID!\n    $noteContent: String!\n    $selectionStartOffset: Int!\n    $selectionEndOffset: Int!\n  ) {\n    createNote(\n      targetPostId: $targetPostId\n      targetPostVersion: $targetPostVersion\n      targetParagraphName: $targetParagraphName\n      noteContent: $noteContent\n      selectionStartOffset: $selectionStartOffset\n      selectionEndOffset: $selectionEndOffset\n    ) {\n      id\n      ...NoteCreateMutation_privateNote\n    }\n  }\n  ",
        "\n",
      ] );
      return ( Te = () => {
          return e;
        } ),
        e;
    }

    function Me() {
      const e = a()( [
        "\n  query NoteCreateMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n        ...NoteCreateMutation_privateNote\n      }\n    }\n  }\n  ",
        "\n",
      ] );
      return ( Me = () => {
          return e;
        } ),
        e;
    }

    function Ce() {
      const e = a()( [
        "\n  fragment NoteCreateMutation_privateNote on Note {\n    id\n    anchor\n    author {\n      id\n    }\n    content\n    createdAt\n    replies {\n      id\n    }\n    post {\n      id\n    }\n    postId\n    selectionStartOffset\n    selectionEndOffset\n  }\n",
      ] );
      return ( Ce = () => {
          return e;
        } ),
        e;
    }
    const _e = ( 0, c.Ps )( Ce() ),
      De = ( 0, c.Ps )( Me(), _e ),
      He = ( 0, c.Ps )( Te(), _e ),
      ke = e => {
        const t = e.children,
          n = e.onCompleted,
          r = e.targetPostId,
          a = e.targetPostVersion,
          o = e.targetParagraphName,
          i = e.selectionStartOffset,
          c = e.selectionEndOffset,
          l = ( 0, u.Zx )().setOpenPrivateNoteId;
        return s.createElement( L.Q_, null, e => {
          return s.createElement(
            y.mm, {
              mutation: He,
              onCompleted: n,
              update( e, t ) {
                const n = e.readQuery( {
                    query: De,
                    variables: {
                      postId: r
                    }
                  } ),
                  a = Re(
                    Re( {}, t.data.createNote ), {}, {
                      selectionStartOffset: i,
                      selectionEndOffset: c,
                      post: {
                        id: r,
                        __typename: "Post"
                      },
                    }
                  ),
                  o = {
                    post: Re(
                      Re( {}, n.post ), {}, {
                        privateNotes: [].concat( E()( n.post.privateNotes ), [
                          a,
                        ] ),
                      }
                    ),
                  };
                e.writeQuery( {
                  query: De,
                  variables: {
                    postId: r
                  },
                  data: o,
                } );
              },
            },
            n => {
              return t( {
                onCreateMutate( t ) {
                  const s = n( {
                    variables: {
                      targetPostId: r,
                      targetPostVersion: a,
                      targetParagraphName: o,
                      selectionStartOffset: i,
                      selectionEndOffset: c,
                      noteContent: t,
                    },
                    optimisticResponse: {
                      __typename: "Mutation",
                      createNote: {
                        __typename: "Note",
                        id: "temp",
                        anchor: o,
                        author: e,
                        content: t,
                        createdAt: new Date(),
                        replies: [],
                        postId: r,
                        selectionStartOffset: i,
                        selectionEndOffset: c,
                        post: {
                          id: r,
                          __typename: "Post"
                        },
                      },
                    },
                  } );
                  return l( "temp" ), s;
                },
              } );
            }
          );
        } );
      },
      Le = n( 11241 );

    function je() {
      const e = a()( [
        "\n  fragment PostNewNoteCard_post on Post {\n    id\n    latestPublishedVersion\n  }\n",
      ] );
      return ( je = () => {
          return e;
        } ),
        e;
    }
    const Ae = e => {
        const t = e.activeSelection,
          n = t.selectedParagraph.name,
          r = t.startOffset,
          a = t.endOffset,
          o = e.onCancel,
          i = e.onMutationComplete,
          c = e.onNoteCreation,
          u = e.post;
        return n ?
          s.createElement(
            A.xu, {
              padding: "12px 20px"
            },
            s.createElement(
              ke, {
                targetPostId: u.id,
                targetPostVersion: u.latestPublishedVersion,
                targetParagraphName: n,
                selectionStartOffset: r,
                selectionEndOffset: a,
                onCompleted: i,
              },
              e => {
                const t = e.onCreateMutate;
                return s.createElement( Le.X, {
                  onSubmit( e ) {
                    t( e ), c();
                  },
                  onCancel: o,
                } );
              }
            )
          ) :
          null;
      },
      qe = ( 0, c.Ps )( je() ),
      Qe = n( 19464 );

    function Fe() {
      const e = a()( [
        "\n  fragment ActiveSelectionContext_post on Post {\n    id\n    ...SelectionMenu_post\n    ...PostNewNoteCard_post\n  }\n  ",
        "\n  ",
        "\n",
      ] );
      return ( Fe = () => {
          return e;
        } ),
        e;
    }

    function Ue() {
      const e = a()( [
        "\n  fragment ActiveSelectionContext_highlight on Quote {\n    id\n    ...SelectionMenu_highlight\n  }\n  ",
        "\n",
      ] );
      return ( Ue = () => {
          return e;
        } ),
        e;
    }

    var $e = s.createContext( {
      activeSelection: null,
      setActiveSelection() {},
    } );

    const Ge = ( e, t, n ) => {
      for (
        let r,
          a = document.createNodeIterator(
            n,
            NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT
          ),
          o = 0;
        ( r = a.nextNode() );

      )
        if ( "NOSCRIPT" !== r.nodeName ) {
          if ( e === r ) return o + t;
          r.nodeType === Node.TEXT_NODE ?
            ( o += r.nodeValue.length ) :
            "BR" === r.nodeName && ( o += 1 );
        } else a.nextNode();
      return -1;
    };

    var Be = e => {
      let t;
      const n = e.children;
      const r = e.highlights;
      const a = e.interactivePost;
      const o = s.useState( null );
      const c = i()( o, 2 );
      const f = c[ 0 ];
      const d = c[ 1 ];
      const g = ( 0, u.Zx )();
      const m = g.setOpenPrivateNoteId;
      const h = g.setPrivateNoteSelection;

      const v = e => {
        const t = e.createNote,
          n = null == t ? void 0 : t.id;
        n && m( n );
      };

      const E = ( 0, l.Ij )().paragraphRefsMappers;
      const y = E.paragraphRefsMap;
      const P = E.paragraphRefsByNameMap;

      const O = s.useCallback(
        () => {
          d( null ), document.removeEventListener( "click", O );
        },
        [ d ]
      );

      const I = s.useCallback(
        ( e, n ) => {
          const r = ( ( e, t ) => {
              return {
                startOffset: Ge( e.startContainer, e.startOffset, t ),
                endOffset: Ge( e.endContainer, e.endOffset, t ),
              };
            } )( e, n ),
            a = r.startOffset,
            o = r.endOffset;
          if (
            -1 !== a &&
            -1 !== o &&
            o - a != 0 &&
            ( !f || f.startOffset !== a || f.endOffset !== o )
          ) {
            const i = y.get( n );
            if ( i ) {
              const c = e.getBoundingClientRect(),
                s = c.left,
                u = c.top,
                l = c.right,
                p = c.bottom,
                g = {
                  isFocused: !0,
                  selectedParagraph: i,
                  startOffset: a,
                  endOffset: o,
                  menuPosition: {
                    left: ( s + l ) / 2 + window.pageXOffset,
                    top: u + window.pageYOffset,
                    bottom: p + window.pageYOffset,
                  },
                };
              setTimeout( () => {
                  d( g );
                } ),
                document.removeEventListener( "click", O ),
                ( t = setTimeout( () => {
                  return document.addEventListener( "click", O );
                }, 20 ) );
            }
          }
        },
        [ y, f, d ]
      );

      return s.useEffect(
          () => {
            return () => {
              t && clearTimeout( t ),
                document.removeEventListener( "click", O );
            };
          },
          [ y, d ]
        ),
        ( 0, p.f )( I ),
        s.createElement(
          $e.Provider, {
            value: {
              activeSelection: f,
              setActiveSelection: d
            }
          },
          s.createElement( Qe.Z, null, e => {
            const t = e.isVisible,
              n = e.hide,
              o = e.show,
              i = () => {
                d( null ), h( null ), n();
              },
              c = f && f.selectedParagraph && f.selectedParagraph.name,
              u = P.get( c || "" );
            return s.createElement(
              we.G, {
                isVisible: t,
                hide: i,
                reference: u,
                popoverRenderFn() {
                  return s.createElement(
                    xe.Y,
                    null,
                    f ?
                    s.createElement( Ae, {
                      activeSelection: f,
                      onCancel: i,
                      onMutationComplete: v,
                      onNoteCreation: i,
                      post: a,
                    } ) :
                    s.createElement( s.Fragment, null )
                  );
                },
              },
              !t && f && f.menuPosition ?
              s.createElement( Ie, {
                createPrivateNote() {
                  h( {
                      id: "private-note-selection",
                      paragraphs: [ f.selectedParagraph ],
                      userId: null,
                      startOffset: f.startOffset,
                      endOffset: f.endOffset,
                      user: void 0,
                    } ),
                    o();
                },
                endOffset: f.endOffset,
                highlightId: f.highlightId,
                highlights: r,
                interactivePost: a,
                isPersistent: f.isFocused,
                mouseEnter: f.menuMouseEnter,
                mouseLeave: f.menuMouseLeave,
                position: f.menuPosition,
                selectedParagraphs: [ f.selectedParagraph ],
                startOffset: f.startOffset,
              } ) :
              s.createElement( s.Fragment, null )
            );
          } ),
          n
        );
    };

    var ze = ( 0, c.Ps )( Ue(), Se );
    var We = ( 0, c.Ps )( Fe(), be, qe );
  },
  69677: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      yb: () => d,
      Ij: () => g,
      CF: () => m,
      pK: () => h
    } );
    const r = n( 28655 ),
      a = n.n( r ),
      o = n( 63038 ),
      i = n.n( o ),
      c = n( 71439 ),
      s = n( 67294 ),
      u = n( 76915 );

    function l() {
      const e = a()( [
        "\n  fragment ParagraphRefsMapContext_paragraph on Paragraph {\n    id\n    name\n    text\n  }\n",
      ] );
      return ( l = () => {
          return e;
        } ),
        e;
    }

    const p = s.createContext( {
      paragraphRefsMappers: {
        paragraphRefsMap: new Map(),
        paragraphRefsByNameMap: new Map(),
      },
      addParagraphRef() {},
    } );

    const f = () => {
      return {
        paragraphRefsMap: new Map(),
        paragraphRefsByNameMap: new Map(),
      };
    };

    var d = e => {
      const t = e.children,
        n = s.useState( f ),
        r = i()( n, 2 ),
        a = r[ 0 ],
        o = r[ 1 ],
        c = s.useCallback(
          ( e, t ) => {
            o( n => {
              if ( !e.current ) return n;
              const r = n.paragraphRefsMap,
                a = n.paragraphRefsByNameMap,
                o = new Map( r );
              o.set( e.current, t );
              const i = new Map( a );
              return (
                t.name && i.set( t.name, e.current ), {
                  paragraphRefsMap: o,
                  paragraphRefsByNameMap: i
                }
              );
            } );
          },
          [ o ]
        );
      return s.createElement(
        p.Provider, {
          value: {
            paragraphRefsMappers: a,
            addParagraphRef: c
          }
        },
        t
      );
    };

    var g = () => {
      return s.useContext( p );
    };

    var m = ( e, t ) => {
      const n = s.useContext( p ).addParagraphRef,
        r = s.useRef( null );
      return s.useEffect(
          () => {
            r.current &&
              ![ "Title", "Subtitle" ].includes( t ) &&
              ( r.current.setAttribute( u.O, "" ), n( r, e ) );
          },
          [ r ]
        ),
        r;
    };

    var h = ( 0, c.Ps )( l() );
  },
  76915: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      O: () => a,
      f: () => o
    } );
    const r = n( 67294 );
    var a = "data-selectable-paragraph";

    var o = e => {
      r.useEffect(
        () => {
          const t = () => {
            const t = document.getSelection();
            if ( t && "Range" === t.type && !( t.rangeCount > 1 ) ) {
              const n = t.getRangeAt( 0 );
              if ( n ) {
                const r = ( e => {
                  if ( !e.commonAncestorContainer ) return null;
                  const t =
                    e.commonAncestorContainer instanceof Element ?
                    e.commonAncestorContainer :
                    e.commonAncestorContainer.parentElement;
                  return t ? t.closest( "[".concat( a, "]" ) ) : null;
                } )( n );
                r && e( n, r );
              }
            }
          };
          return document.addEventListener( "mouseup", t ),
            () => {
              return document.removeEventListener( "mouseup", t );
            };
        },
        [ e ]
      );
    };
  },
  91442: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      Vc: () => y,
      U7: () => I,
      g8: () => S,
      iB: () => b
    } );
    const r = n( 28655 ),
      a = n.n( r ),
      o = n( 59713 ),
      i = n.n( o ),
      c = n( 63038 ),
      s = n.n( c ),
      u = n( 71439 ),
      l = n( 67294 ),
      p = n( 93227 ),
      f = n( 69677 );

    function d() {
      const e = a()( [
        "\n  fragment HighlighSegmentContext_paragraph on Paragraph {\n    ...ParagraphRefsMapContext_paragraph\n  }\n  ",
        "\n",
      ] );
      return ( d = () => {
          return e;
        } ),
        e;
    }

    function g() {
      const e = a()( [
        "\n  fragment HighlighSegmentContext_highlight on Quote {\n    endOffset\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    userId\n  }\n",
      ] );
      return ( g = () => {
          return e;
        } ),
        e;
    }

    function m( e, t ) {
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

    function h( e ) {
      for ( let t = 1; t < arguments.length; t++ ) {
        const n = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ?
          m( Object( n ), !0 ).forEach( t => {
            i()( e, t, n[ t ] );
          } ) :
          Object.getOwnPropertyDescriptors ?
          Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
          m( Object( n ) ).forEach( t => {
            Object.defineProperty(
              e,
              t,
              Object.getOwnPropertyDescriptor( n, t )
            );
          } );
      }
      return e;
    }
    let v;
    let E;

    var y = l.createContext( {
      updateHighlightSegments() {},
      highlightSegments: new Map(),
    } );

    const P = () => {
      return new Map();
    };

    const O = ( e, t, n ) => {
      const r = e.reduce( ( e, r ) => {
        const a = t.get( r );
        if (
          !a ||
          ( !a.startOffset && 0 !== a.startOffset ) ||
          ( !a.endOffset && 0 !== a.endOffset )
        )
          return e;
        if (
          !e ||
          ( !e.startOffset && 0 !== e.startOffset ) ||
          ( !e.endOffset && 0 !== e.endOffset )
        )
          return a;
        const o = e.endOffset - e.startOffset,
          i = a.endOffset - a.startOffset;
        return ( a.userId === n && e.userId !== n ) || o > i ? a : e;
      }, null );
      return r && r.id;
    };

    var I = e => {
      const t = e.children,
        n = e.highlights,
        r = e.paragraphs,
        a = e.viewer,
        o = n || [],
        i = l.useMemo(
          () => {
            return new Map(
              o.map( e => {
                return [ e.id, e ];
              } )
            );
          },
          [ o ]
        ),
        c = l.useMemo( () => {
          return new Map();
        }, [] ),
        u = l.useState( P ),
        f = s()( u, 2 ),
        d = f[ 0 ],
        g = f[ 1 ],
        m = l.useContext( p.Tz ),
        I = m.activeSelection,
        S = m.setActiveSelection,
        b = e => {
          const t = c.get( e );
          if ( t ) {
            const n = Array.from( t )
              .map( e => {
                return d.get( e );
              } )
              .filter( Boolean )
              .reduce( ( e, t ) => {
                if ( !t.ref.current ) return e;
                const n = t.ref.current.getBoundingClientRect(),
                  r = n.left,
                  a = n.top,
                  o = n.right,
                  i = n.bottom,
                  c = r + window.pageXOffset,
                  s = o + window.pageXOffset,
                  u = a + window.pageYOffset,
                  l = i + window.pageYOffset;
                return (
                  ( !e.minLeft || c < e.minLeft ) && ( e.minLeft = c ),
                  ( !e.maxRight || s > e.maxRight ) && ( e.maxRight = s ),
                  ( !e.minTop || u < e.minTop ) && ( e.minTop = u ),
                  ( !e.maxTop || l < e.maxTop ) && ( e.maxTop = l ),
                  e
                );
              }, {} );
            return {
              left: ( n.minLeft + n.maxRight ) / 2,
              top: n.minTop,
              bottom: n.maxTop,
            };
          }
        },
        x = e => {
          if (
            e &&
            e.paragraphs &&
            ( e.startOffset || 0 === e.startOffset ) &&
            ( e.endOffset || 0 === e.endOffset )
          ) {
            const t = r.find( t => {
              const n = t.name;
              return e && e.paragraphs[ 0 ].name === n;
            } );
            return t ? {
                isFocused: !1,
                selectedParagraph: t,
                highlightId: e.id,
                startOffset: e.startOffset,
                endOffset: e.endOffset,
                menuPosition: b( e.id ),
              } :
              null;
          }
        },
        w = {
          highlightSegments: l.useMemo(
            () => {
              const e = new Map();
              return d.forEach( ( t, n ) => {
                  const r = t.highlightIds,
                    o = () => {
                      ( I && I.isFocused ) ||
                      ( ( E = () => {
                          O( r, i, a && a.id ) &&
                            ( S( null ), ( v = null ), ( E = null ) );
                        } ),
                        ( v = setTimeout( E, 100 ) ) );
                    },
                    c = h(
                      h( {}, t ), {}, {
                        isActive:
                          !!I && t.highlightIds.includes( I.highlightId ),
                        onClick() {
                          const e = document.getSelection();
                          if ( !e || "Range" !== e.type ) {
                            const t = O( r, i, a && a.id ),
                              n = i.get( t || "" ),
                              o = x( n );
                            if ( o ) {
                              setTimeout( () => {
                                S( h( h( {}, o ), {}, {
                                  isFocused: !0
                                } ) );
                              } );
                              const c =
                                document.documentElement &&
                                "ontouchstart" in document.documentElement ?
                                "touchstart" :
                                "click";
                              document.addEventListener( c, function e() {
                                S( null ), document.removeEventListener( c, e );
                              } );
                            }
                          }
                        },
                      }
                    );
                  document.documentElement &&
                    !( "ontouchstart" in document.documentElement ) &&
                    ( ( c.onMouseEnter = function e() {
                        if ( !I || !I.isFocused ) {
                          v && E && ( clearTimeout( v ), E() );
                          const t = O( r, i, a && a.id ),
                            n = i.get( t || "" ),
                            c = x( n );
                          c &&
                            S(
                              h(
                                h( {}, c ), {}, {
                                  isFocused: !1,
                                  menuMouseEnter: e,
                                  menuMouseLeave: o,
                                }
                              )
                            );
                        }
                      } ),
                      ( c.onMouseLeave = o ) ),
                    e.set( n, c );
                } ),
                e;
            },
            [ d, i, a, I ]
          ),
          updateHighlightSegments( e, t ) {
            const n = t.highlightIds,
              r = t.ref;
            g( t => {
                const o = new Map( t );
                return o.set( e, {
                    isActive: !!I && n.includes( I.highlightId ),
                    highlightIds: n,
                    ref: r,
                    viewerIsOwner: n.some( e => {
                      const t = i.get( e );
                      return a && t && t.userId === a.id;
                    } ),
                  } ),
                  o;
              } ),
              n.forEach( t => {
                let n = c.get( t );
                n || ( n = new Set() ), n.add( e ), c.set( t, n );
              } );
          },
        };
      return l.createElement( y.Provider, {
        value: w
      }, t );
    };

    var S = ( 0, u.Ps )( g() );
    var b = ( 0, u.Ps )( d(), f.pK );
  },
  79914: ( e, t, n ) => {
    "use strict";
    n.d( t, {
      T2: () => ge,
      DV: () => me,
      Zr: () => he
    } );
    const r = n( 28655 ),
      a = n.n( r ),
      o = n( 71439 ),
      i = n( 67294 ),
      c = n( 319 ),
      s = n.n( c ),
      u = n( 43198 ),
      l = n( 56862 ),
      p = n( 28309 ),
      f = n( 84564 ),
      d = n.n( f ),
      g = "[^\\.!*'\\(\\);:@&=+$,/?#\\[\\]\\/]+",
      m = "(?:".concat( g, "@)?" ),
      h = "".concat( g, "(?:\\." ).concat( g, ")+" ),
      v =
      ( new RegExp(
          "^"
          .concat( "(?:[A-Za-z][A-Za-z0-9\\.-]*:)?(?:\\/\\/)?" )
          .concat( m )
          .concat( h )
        ),
        [ "http:", "https:", "mailto:" ] ),
      E = ( e, t ) => {
        return {
          color: "inherit",
          textDecoration: "Kicker" === e || ( ( e, t ) => {
              return (
                [ "Title" ].concat( s()( u.j ) ).includes( e ) &&
                ( "CARD" === t || "SHORTFORM_CARD" === t )
              );
            } )( e, t ) ?
            "none" : "underline",
        };
      },
      y = e => {
        let t;
        let n;
        const r = e.href;
        const a = e.children;
        const o = e.paragraphStyle;
        const c = e.richTextStyle;
        const s = ( 0, p.Iq )();
        return (
          ( t = r ),
          ( n = d()( t ) ).protocol && !v.includes( n.protocol ) ?
          a :
          "STREAM" === c ?
          i.createElement( "span", {
            className: s( E( o, c ) )
          }, a ) :
          i.createElement(
            l.Z, {
              href: r,
              className: s( E( o, c ) ),
              disableSourceParam: !0
            },
            a
          )
        );
      },
      P = n( 5955 ),
      O = e => {
        return {
          backgroundColor: e.baseColor.background.normal,
          padding: "2px 4px",
          fontSize: "75%",
          "> strong": {
            fontFamily: "inherit"
          },
        };
      },
      I = e => {
        const t = e.children,
          n = ( 0, p.Iq )();
        return i.createElement( "code", {
          className: n( [ O, ( 0, P.XK )() ] )
        }, t );
      },
      S = n( 59713 ),
      b = n.n( S ),
      x = n( 27721 ),
      w = n( 53006 ),
      N = n( 90038 );

    function R() {
      const e = a()( [
        "\n  fragment DropCap_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n",
      ] );
      return ( R = () => {
          return e;
        } ),
        e;
    }

    function T( e, t ) {
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
    const M = ( e, t ) => {
        return {
          display: "block",
          float: "left",
          height: "".concat( t, "px" ),
          marginRight: "12px",
          position: "relative",
          width: "".concat( e, "px" ),
        };
      },
      C = ( function ( e ) {
        for ( let t = 1; t < arguments.length; t++ ) {
          const n = null != arguments[ t ] ? arguments[ t ] : {};
          t % 2 ?
            T( Object( n ), !0 ).forEach( t => {
              b()( e, t, n[ t ] );
            } ) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
            T( Object( n ) ).forEach( t => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor( n, t )
              );
            } );
        }
        return e;
      } )( {
          maxWidth: "100%",
          marginTop: {
            xs: "-2px",
            sm: "-2px",
            md: "11px",
            lg: "11px",
            xl: "11px",
          },
        },
        ( 0, w.m )()
      );

    function _( e ) {
      const t = e.children,
        n = e.image,
        r = e.text,
        a = ( 0, p.Iq )(),
        o = ( 0, p.Fg )();
      if ( !n || !n.originalWidth || !n.originalHeight )
        return i.createElement( i.Fragment, null, t );
      const c = 3 * o.newFonts.body.lineHeight.S - 5,
        s = n.originalHeight,
        u = c * ( n.originalWidth / s );
      return i.createElement(
        "span", {
          className: a( M( u, c ) )
        },
        i.createElement( x.ZP, {
          alt: r,
          miroId: n.id,
          rules: [ C ],
          strategy: N._S.Resample,
          height: c,
          width: u,
          freezeGifs: !1,
        } ),
        t
      );
    }

    function D( e ) {
      let t;
      const n = ( 0, p.Iq )();
      const r = e.image;
      const a = e.text;
      return i.createElement(
        _,
        e,
        i.createElement(
          "span", {
            className: n(
              ( ( t = !!r ), {
                display: "block",
                float: "left",
                fontSize: "66px",
                lineHeight: ".83",
                marginRight: "12px",
                paddingTop: {
                  xs: "0",
                  sm: "0",
                  md: "7px",
                  lg: "7px",
                  xl: "7px",
                },
                position: "relative",
                opacity: t ? "0" : null,
              } )
            ),
          },
          a
        )
      );
    }
    const H = ( 0, o.Ps )( R() ),
      k = n( 65441 ),
      L = e => {
        switch ( e ) {
          case "P":
          case "OLI":
          case "ULI":
          case "BQ":
          case "PRE":
            return "italic" === ( 0, k.S$ )( e ) ? {
              fontStyle: "normal"
            } : {
              fontStyle: "italic"
            };
          default:
            return {
              fontStyle: "inherit"
            };
        }
      },
      j = e => {
        const t = e.children,
          n = e.paragraphStyle,
          r = ( 0, p.Iq )();
        return i.createElement( "em", {
          className: r( L( n ) )
        }, t );
      },
      A = /[\r\n↵]/,
      q = func 'ion ( e ) {
    const t =
      arguments.length > 1 && void 0 !== arguments[ 1 ] ?
      arguments[ 1 ] :
      "",
      n = e.split( A );
    if ( n.length <= 1 ) return e;
    if ( 1 === e.length && "" === n[ 0 ] && "" === n[ 1 ] )
      return i.createElement( "br", {
        key: "".concat( t )
      } );
    "" === n[ n.length - 1 ] && n.pop();
    const r = [];
    return n.forEach( e => {
        r.push( e ), r.push( "br" );
      } ),
      A.test( e[ e.length - 1 ] ) || r.pop(),
      i.createElement(
        i.Fragment,
        null,
        r.map( ( e, n ) => {
          return n % 2 == 0 ?
            e || null :
            i.createElement( "br", {
              key: "".concat( t ).concat( n )
            } );
        } )
      );
  },
  Q = n( 91442 ),
  F = ( e, t ) => {
    return n => {
      return {
        backgroundColor: ( e && n.highlightColor.dark ) ||
          ( t && n.highlightColor.normal ) ||
          n.highlightColor.light,
        color: "currentColor",
        cursor: "pointer",
      };
    };
  },
  U = e => {
    const t = e.children,
      n = e.highlightIds,
      r = e.segmentId,
      a = ( 0, p.Iq )(),
      o = i.useRef( null ),
      c = n.some( e => {
        return "private-note-selection" === e;
      } ),
      s = i.useContext( Q.Vc ),
      u = s.highlightSegments,
      l = s.updateHighlightSegments,
      f = u.get( r ),
      d = f || {},
      g = d.isActive,
      m = d.viewerIsOwner,
      h = d.onClick,
      v = d.onMouseEnter,
      E = d.onMouseLeave;
    return i.useEffect(
        () => {
          c ||
            ( f &&
              f.ref &&
              f.ref.current &&
              n.length === f.highlightIds.length &&
              n.every( e => {
                return f.highlightIds.includes( e );
              } ) ) ||
            l( r, {
              highlightIds: n,
              ref: o
            } );
        },
        [ n, o ]
      ),
      i.createElement(
        "mark", {
          className: a( F( g || c, !!m ) ),
          onClick: h,
          onMouseEnter: v,
          onMouseLeave: E,
          ref: o,
        },
        t
      );
  },
  $ = i.memo( U ),
  G = n( 10515 ),
  B = ( e, t ) => {
    return n => {
      switch ( e ) {
        case "P":
        case "BQ":
        case "OLI":
        case "ULI":
          return t ?
            ( 0, P.qd )()( n ) : {
              fontFamily: n.newFonts.body.family,
              fontWeight: n.newFonts.body.boldWeight,
            };
        case "PRE":
          return ( 0, P.t5 )()( n );
        case "IMG":
          return {
            fontFamily: n.newFonts.detail.family,
              fontWeight: n.newFonts.detail.boldWeight,
          };
        default:
          return {
            fontWeight: "inherit"
          };
      }
    };
  },
  z = e => {
    const t = e.children,
      n = e.paragraphStyle,
      r = ( 0, p.Iq )();
    return i.createElement( G.M.Consumer, null, e => {
      return i.createElement( "strong", {
        className: r( B( n, e ) )
      }, t );
    } );
  },
  W = n( 46829 ),
  V = n( 12291 ),
  Z = n( 85740 ),
  J = n( 41832 ),
  K = n( 22091 ),
  X = n( 27952 );

  function Y() {
    const e = a()( [
      "\n  query UserMentionTooltipQuery($userId: ID!) {\n    user(id: $userId) {\n      ...UserMentionTooltip_user\n    }\n  }\n  ",
      "\n",
    ] );
    return ( Y = () => {
        return e;
      } ),
      e;
  }
  const ee = e => {
      return {
        background: "none",
        color: e.accentColor.text.normal,
        textDecoration: "none",
      };
    },
    te = {
      display: "inline-block",
      width: "auto"
    },
    ne = ( 0, V.$j )( e => {
      return {
        authDomain: e.config.authDomain
      };
    } )( e => {
      const t = e.children,
        n = e.userId,
        r = e.richTextStyle,
        a = e.authDomain,
        o = ( 0, p.Iq )(),
        c = ( 0, W.useQuery )( re, {
          variables: {
            userId: n
          },
          ssr: !1
        } ).data,
        s = null == c ? void 0 : c.user,
        u = i.createElement(
          l.Z, {
            target: "_blank",
            href: ( 0, X.bU )( a, n ),
            className: o( ee )
          },
          t
        );
      return "STREAM" === r ?
        i.createElement( "span", {
          className: o( ee )
        }, t ) :
        i.createElement(
          Z.bZ, {
            name: "enable_author_cards",
            placeholder() {
              return u;
            },
          },
          e => {
            return e && s ?
              i.createElement(
                "div", {
                  className: o( te )
                },
                i.createElement(
                  K.$W, {
                    placement: "right",
                    targetDistance: 15,
                    mouseLeaveDelay: 200,
                    popoverRenderFn() {
                      return s && i.createElement( J.Z, {
                        user: s
                      } );
                    },
                  },
                  i.createElement(
                    l.Z, {
                      target: "_blank",
                      href: ( 0, X.bU )( a, n ),
                      className: o( ee ),
                    },
                    t
                  )
                )
              ) :
              u;
          }
        );
    } ),
    re = ( 0, o.Ps )( Y(), J.O );

  function ae() {
    const e = a()( [
      "\n  fragment MarkupNode_data_dropCapImage on ImageMetadata {\n    ...DropCap_image\n  }\n  ",
      "\n",
    ] );
    return ( ae = () => {
        return e;
      } ),
      e;
  }
  const oe = ( 0, o.Ps )( ae(), H ),
    ie = function e( t ) {
      const n = t.data,
        r = t.prefix,
        a = t.paragraphStyle,
        o = t.richTextStyle;
      if ( "string" == typeof n ) return q( n, r );
      const c = n.children.map( ( t, n ) => {
        return "string" == typeof t ?
          q( t, "".concat( r ).concat( n ) ) :
          i.createElement( e, {
            key: n,
            data: t,
            paragraphStyle: a,
            prefix: "".concat( r ).concat( n ),
            richTextStyle: o,
          } );
      } );
      switch ( n.type ) {
        case "A":
          return i.createElement(
            y, {
              href: n.href,
              paragraphStyle: a,
              richTextStyle: o
            },
            c
          );
        case "CODE":
          return "PRE" === a ?
            i.createElement( i.Fragment, null, c ) :
            i.createElement( I, null, c );
        case "DROPCAP":
          const s = c[ 0 ];
          return s && "string" == typeof s ?
            "BQ" === a || "PQ" === a ?
            s :
            i.createElement( D, {
              text: s,
              image: n.dropCapImage
            } ) :
            null;
        case "EM":
          return i.createElement( j, {
            paragraphStyle: a
          }, c );
        case "QUOTE":
          return i.createElement(
            $, {
              highlightIds: n.highlightIds,
              segmentId: n.segmentId,
              key: n.segmentId,
            },
            c
          );
        case "STRONG":
          return i.createElement( z, {
            paragraphStyle: a
          }, c );
        case "ID_WRAPPER":
          return i.createElement( "span", {
            id: n.wrapperId
          }, c );
        case "USER_MENTION":
          return i.createElement(
            ne, {
              userId: n.userId,
              richTextStyle: o
            },
            c
          );
        default:
          return null;
      }
    },
    ce = i.memo( ie );

  function se() {
    const e = a()( [
      "\n  fragment Markups_paragraph on Paragraph {\n    name\n    text\n    hasDropCap\n    dropCapImage {\n      ...MarkupNode_data_dropCapImage\n    }\n    markups {\n      type\n      start\n      end\n      href\n      anchorType\n      userId\n      linkMetadata {\n        httpStatus\n      }\n    }\n  }\n  ",
      "\n",
    ] );
    return ( se = () => {
        return e;
      } ),
      e;
  }

  function ue() {
    const e = a()( [
      "\n  fragment Markups_highlight on Quote {\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n",
    ] );
    return ( ue = () => {
        return e;
      } ),
      e;
  }

  const le =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƏǺǼǾȘȚẀẂẄẞỲΩ∆";

  const pe =
    "abcdefghijklmnopqrstuvwxyzµßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżžſǻǽǿșțȷəẁẃẅỳ";

  const fe = new RegExp(
    "^[" +
    le +
    "][" +
    pe +
    "\\,\\.](?= )|^[" +
    le +
    "] '(?=[" +
    pe +
    "])|^[ '‘“„”]?[" +
    le +
    "]|^[0-9]{1,4}\\.?(?![0-9])"
  );

  const de = e => {
    const t = e.highlights,
      n = e.paragraph,
      r = e.paragraphStyle,
      a = e.richTextStyle,
      o = e.allowDropCap;
    return ye( n, a, void 0 !== o && o, t || [] ).map( ( e, t ) => {
      return i.createElement( ce, {
        key: t,
        data: e,
        paragraphStyle: r,
        prefix: t.toString(),
        richTextStyle: a,
      } );
    } );
  };

  var ge = i.memo( de );
  var me = ( 0, o.Ps )( ue() );
  var he = ( 0, o.Ps )( se(), oe );

  const ve = e => {
    return null != e.type && null != e.start && null != e.end;
  };

  const Ee = ( e, t ) => {
    const n = {
      COMMENT: 1,
      HIGHLIGHT: 2,
      FULL_HIGHLIGHT: 3,
      HIGHLIGHT_SEGMENT: 4,
      QUOTE: 5,
      QUERY: 6,
      CODE: 7,
      A: 8,
      STRONG: 9,
      EM: 10,
      WARNING: 11,
      DROPCAP: 12,
      ID_WRAPPER: 13,
      UNUSED_DETAIL: 14,
      SENTENCE_DEPRECATED: 15,
    };
    if (
      null == e.type ||
      null == e.start ||
      null == e.end ||
      null == t.type ||
      null == t.start ||
      null == t.end
    )
      throw new Error(
        "Comparing markups requires type, start, and end fields."
      );
    let r = n[ e.type ] - n[ t.type ];
    if ( 0 !== r ) return r;
    if ( 0 != ( r = e.start - t.start ) ) return r;
    if ( 0 != ( r = e.end - t.end ) ) return r;
    const a = JSON.stringify( e ),
      o = JSON.stringify( t );
    return a > o ? 1 : a < o ? -1 : 0;
  };

  const ye = ( e, t, n, r ) => {
    const a = e.dropCapImage;
    const o = [];

    const i = ( ( e, t, n, r ) => {
      const a = e.hasDropCap,
        o = e.text;
      if ( !o ) return [];
      const i = n && "FULL_PAGE" === t && a,
        c = e.text ? e.text.length : 0,
        s = r.map( t => {
          return {
            type: "FULL_HIGHLIGHT",
            highlightId: t.id,
            start: t.startOffset || 0,
            end: ( t.paragraphs[ 0 ].name === e.name && t.endOffset ) || c - 1,
          };
        } ),
        u = [].concat( e.markups, s ).filter( ve ),
        l = new Set();
      l.add( 0 ),
        l.add( o.length ),
        u.forEach( e => {
          l.add( e.start ), l.add( e.end );
        } );
      const p = [];
      if (
        ( u
          .slice()
          .sort( Ee )
          .forEach( e => {
            p.push( e );
          } ),
          i )
      ) {
        const f = ( e => {
          if ( !e ) return "";
          const t = fe.exec( e ),
            n = t ? t[ 0 ] : "";
          return n.length >= e.trim().length ? "" : n;
        } )( e.text );
        f.length > 0 &&
          ( l.add( f.length ),
            p.unshift( {
              type: "DROPCAP",
              start: 0,
              end: f.length
            } ) );
      }
      const d = Array.from( l ).sort( ( e, t ) => {
          return e - t;
        } ),
        g = d.map( ( e, t ) => {
          let n;
          return {
            point: e,
            markups: p
              .filter( t => {
                return t.start <= e && t.end > e;
              } )
              .reduce( ( r, a ) => {
                return (
                  "FULL_HIGHLIGHT" === a.type ?
                  ( n ||
                    ( ( n = {
                        type: "HIGHLIGHT_SEGMENT",
                        highlightIds: [],
                        start: e,
                        end: d[ t ] - 1,
                      } ),
                      r.push( n ) ),
                    n.highlightIds.push( a.highlightId ) ) :
                  r.push( a ),
                  r
                );
              }, [] ),
          };
        } );
      if ( i ) {
        const m = g[ 0 ].markups.filter( e => {
          return "DROPCAP" === e.type;
        } );
        if ( m.length > 0 ) {
          const h = m[ 0 ];
          g[ 0 ].markups = [ h ];
        }
      }
      return g;
    } )( e, t, n, r );

    let c = [];
    let s = [];
    return i.forEach( ( t, n ) => {
        const r = t.point,
          u = t.markups,
          l = ( i[ n + 1 ] || i[ i.length - 1 ] ).point,
          p = ( e.text || "" ).slice( r, l );
        ( c = s ), ( s = [] );
        let f = !1;
        let d = o;

        const g = e => {
          s.push( e );
          const t = e.markupNodeData;
          "string" != typeof t && ( d = t.children );
        };

        u.forEach( ( t, n ) => {
            const r = c[ n ];
            if ( !f && r && r.markup === t )
              g( {
                markup: t,
                markupNodeData: r.markupNodeData
              } );
            else {
              f = !0;
              const o = Pe( t, a, e );
              o && ( d.push( o ), g( {
                markup: t,
                markupNodeData: o
              } ) );
            }
          } ),
          d.push( p );
      } ),
      o;
  };

  const Pe = ( e, t, n ) => {
    switch ( e.type ) {
      case "A":
        return "LINK" !== e.anchorType && e.anchorType ?
          "USER" === e.anchorType && e.userId ? {
            type: "USER_MENTION",
            userId: e.userId,
            children: []
          } :
          null :
          e.href ? {
            type: "A",
            href: e.href,
            children: []
          } :
          null;
      case "CODE":
        return {
          type: "CODE", children: []
        };
      case "DROPCAP":
        return {
          type: "DROPCAP", dropCapImage: t, children: []
        };
      case "EM":
        return {
          type: "EM", children: []
        };
      case "STRONG":
        return {
          type: "STRONG", children: []
        };
      case "ID_WRAPPER":
        return {
          type: "ID_WRAPPER",
            wrapperId: e.wrapperId,
            children: [],
        };
      case "HIGHLIGHT":
        return {
          type: "QUOTE",
            highlightIds: [],
            segmentId: "".concat( n.name || "", "_" ).concat( e.start ),
            children: [],
        };
      case "HIGHLIGHT_SEGMENT":
        return {
          type: "QUOTE",
            highlightIds: e.highlightIds,
            segmentId: "".concat( n.name || "", "_" ).concat( e.start ),
            children: [],
        };
      default:
        return null;
    }
  };
},
24219: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    A7: () => De,
    Mx: () => He,
    uR: () => ke
  } );
  const r = n( 28655 ),
    a = n.n( r ),
    o = n( 319 ),
    i = n.n( o ),
    c = n( 63038 ),
    s = n.n( c ),
    u = n( 71439 ),
    l = n( 67294 ),
    p = n( 25415 ),
    f = n( 46898 ),
    d = n( 16803 ),
    g = n( 12291 ),
    m = n( 95482 ),
    h = n( 22669 ),
    v = n( 24548 ),
    E = n( 59713 ),
    y = n.n( E ),
    P = n( 80439 );

  function O( e, t ) {
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

  function I( e ) {
    for ( let t = 1; t < arguments.length; t++ ) {
      const n = null != arguments[ t ] ? arguments[ t ] : {};
      t % 2 ?
        O( Object( n ), !0 ).forEach( t => {
          y()( e, t, n[ t ] );
        } ) :
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
        O( Object( n ) ).forEach( t => {
          Object.defineProperty(
            e,
            t,
            Object.getOwnPropertyDescriptor( n, t )
          );
        } );
    }
    return e;
  }

  function S() {
    const e = a()( [
      "\n  query NoteDeleteMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n      }\n    }\n  }\n",
    ] );
    return ( S = () => {
        return e;
      } ),
      e;
  }

  function b() {
    const e = a()( [
      "\n  mutation NoteDeleteMutation($targetPostId: ID!, $targetNoteId: ID!) {\n    deleteNote(targetPostId: $targetPostId, targetNoteId: $targetNoteId)\n  }\n",
    ] );
    return ( b = () => {
        return e;
      } ),
      e;
  }
  const x = ( 0, u.Ps )( b() ),
    w = ( 0, u.Ps )( S() ),
    N = ( 0, g.$j )()( e => {
      const t = e.children,
        n = e.onCompleted,
        r = e.targetPostId,
        a = e.targetNoteId;
      return l.createElement(
        P.mm, {
          mutation: x,
          onCompleted: n,
          optimisticResponse: {
            deleteNote: !0
          },
          update( e ) {
            const t = e.readQuery( {
                query: w,
                variables: {
                  postId: r
                }
              } ),
              n = {
                post: I(
                  I( {}, t.post ), {}, {
                    privateNotes: t.post.privateNotes.filter( e => {
                      return e.id !== a;
                    } ),
                  }
                ),
              };
            e.writeQuery( {
              query: w,
              variables: {
                postId: r
              },
              data: n
            } );
          },
          variables: {
            targetPostId: r,
            targetNoteId: a
          },
        },
        e => {
          return t( {
            mutate: e
          } );
        }
      );
    } );

  function R( e, t ) {
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

  function T( e ) {
    for ( let t = 1; t < arguments.length; t++ ) {
      const n = null != arguments[ t ] ? arguments[ t ] : {};
      t % 2 ?
        R( Object( n ), !0 ).forEach( t => {
          y()( e, t, n[ t ] );
        } ) :
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
        R( Object( n ) ).forEach( t => {
          Object.defineProperty(
            e,
            t,
            Object.getOwnPropertyDescriptor( n, t )
          );
        } );
    }
    return e;
  }

  function M() {
    const e = a()( [
      "\n  query NoteDismissMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n      }\n    }\n  }\n",
    ] );
    return ( M = () => {
        return e;
      } ),
      e;
  }

  function C() {
    const e = a()( [
      "\n  mutation NoteDismissMutation($targetPostId: ID!, $targetNoteId: ID!) {\n    dismissNote(targetPostId: $targetPostId, targetNoteId: $targetNoteId)\n  }\n",
    ] );
    return ( C = () => {
        return e;
      } ),
      e;
  }
  const _ = ( 0, u.Ps )( C() ),
    D = ( 0, u.Ps )( M() ),
    H = ( 0, g.$j )()( e => {
      const t = e.children,
        n = e.onCompleted,
        r = e.targetPostId,
        a = e.targetNoteId;
      return l.createElement(
        P.mm, {
          mutation: _,
          onCompleted: n,
          optimisticResponse: {
            dismissNote: !0
          },
          update( e ) {
            const t = e.readQuery( {
                query: D,
                variables: {
                  postId: r
                }
              } ),
              n = {
                post: T(
                  T( {}, t.post ), {}, {
                    privateNotes: t.post.privateNotes.filter( e => {
                      return e.id !== a;
                    } ),
                  }
                ),
              };
            e.writeQuery( {
              query: D,
              variables: {
                postId: r
              },
              data: n
            } );
          },
          variables: {
            targetPostId: r,
            targetNoteId: a
          },
        },
        e => {
          return t( {
            mutate: e
          } );
        }
      );
    } );

  function k( e, t ) {
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

  function L( e ) {
    for ( let t = 1; t < arguments.length; t++ ) {
      const n = null != arguments[ t ] ? arguments[ t ] : {};
      t % 2 ?
        k( Object( n ), !0 ).forEach( t => {
          y()( e, t, n[ t ] );
        } ) :
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
        k( Object( n ) ).forEach( t => {
          Object.defineProperty(
            e,
            t,
            Object.getOwnPropertyDescriptor( n, t )
          );
        } );
    }
    return e;
  }

  function j() {
    const e = a()( [
      "\n  mutation NoteReplyCreateMutation($targetPostId: ID!, $targetNoteId: ID!, $replyContent: String!) {\n    createNoteReply(\n      targetPostId: $targetPostId\n      targetNoteId: $targetNoteId\n      replyContent: $replyContent\n    ) {\n      id\n      ...NoteReplyCreateMutation_privateNoteReply\n    }\n  }\n  ",
      "\n",
    ] );
    return ( j = () => {
        return e;
      } ),
      e;
  }

  function A() {
    const e = a()( [
      "\n  query NoteReplyCreateMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n        replies {\n          id\n          ...NoteReplyCreateMutation_privateNoteReply\n        }\n      }\n    }\n  }\n  ",
      "\n",
    ] );
    return ( A = () => {
        return e;
      } ),
      e;
  }

  function q() {
    const e = a()( [
      "\n  fragment NoteReplyCreateMutation_privateNoteReply on NoteReply {\n    id\n    noteId\n    author {\n      id\n    }\n    content\n    createdAt\n    postId\n  }\n",
    ] );
    return ( q = () => {
        return e;
      } ),
      e;
  }
  const Q = ( 0, u.Ps )( q() ),
    F = ( 0, u.Ps )( A(), Q ),
    U = ( 0, u.Ps )( j(), Q ),
    $ = e => {
      const t = e.children,
        n = e.targetPostId,
        r = e.targetNoteId;
      return l.createElement(
        P.mm, {
          mutation: U,
          update( e, t ) {
            const a = e.readQuery( {
                query: F,
                variables: {
                  postId: n
                }
              } ),
              o = a.post.privateNotes.map( e => {
                return e.id !== r ?
                  e :
                  L(
                    L( {}, e ), {}, {
                      replies: [].concat( i()( e.replies ), [
                        t.data.createNoteReply,
                      ] ),
                    }
                  );
              } ),
              c = {
                post: L( L( {}, a.post ), {}, {
                  privateNotes: o
                } )
              };
            e.writeQuery( {
              query: F,
              variables: {
                postId: n
              },
              data: c
            } );
          },
        },
        e => {
          return t( {
            mutate( t ) {
              return e(
                L(
                  L( {}, t ), {}, {
                    variables: L( {
                        targetPostId: n,
                        targetNoteId: r
                      },
                      t && t.variables
                    ),
                  }
                )
              );
            },
          } );
        }
      );
    };

  function G( e, t ) {
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

  function B( e ) {
    for ( let t = 1; t < arguments.length; t++ ) {
      const n = null != arguments[ t ] ? arguments[ t ] : {};
      t % 2 ?
        G( Object( n ), !0 ).forEach( t => {
          y()( e, t, n[ t ] );
        } ) :
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
        G( Object( n ) ).forEach( t => {
          Object.defineProperty(
            e,
            t,
            Object.getOwnPropertyDescriptor( n, t )
          );
        } );
    }
    return e;
  }

  function z() {
    const e = a()( [
      "\n  query PostNotesReplies($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n        replies {\n          id\n        }\n      }\n    }\n  }\n",
    ] );
    return ( z = () => {
        return e;
      } ),
      e;
  }

  function W() {
    const e = a()( [
      "\n  mutation NoteReplyDeleteMutation($targetPostId: ID!, $targetNoteId: ID!, $targetReplyId: ID!) {\n    deleteNoteReply(\n      targetPostId: $targetPostId\n      targetNoteId: $targetNoteId\n      targetReplyId: $targetReplyId\n    )\n  }\n",
    ] );
    return ( W = () => {
        return e;
      } ),
      e;
  }
  const V = ( 0, u.Ps )( W() ),
    Z = ( 0, u.Ps )( z() ),
    J = e => {
      const t = e.children,
        n = e.targetPostId,
        r = e.targetNoteId,
        a = e.targetReplyId;
      return l.createElement(
        P.mm, {
          mutation: V,
          optimisticResponse: {
            deleteNoteReply: !0
          },
          update( e ) {
            const t = e.readQuery( {
                query: Z,
                variables: {
                  postId: n
                }
              } ),
              o = t.post.privateNotes.map( e => {
                return e.id !== r ?
                  e :
                  B(
                    B( {}, e ), {}, {
                      replies: e.replies.filter( e => {
                        return e.id !== a;
                      } ),
                    }
                  );
              } ),
              i = {
                post: B( B( {}, t.post ), {}, {
                  privateNotes: o
                } )
              };
            e.writeQuery( {
              query: Z,
              variables: {
                postId: n
              },
              data: i
            } );
          },
          variables: {
            targetPostId: n,
            targetNoteId: r,
            targetReplyId: a
          },
        },
        e => {
          return t( {
            mutate: e
          } );
        }
      );
    },
    K = n( 46829 );

  function X() {
    const e = a()( [
      "\n  mutation NoteReplyReportMutation($targetId: ID!) {\n    reportNoteReply(targetNoteReplyId: $targetId)\n  }\n",
    ] );
    return ( X = () => {
        return e;
      } ),
      e;
  }
  const Y = ( 0, u.Ps )( X() );

  function ee() {
    const e = a()( [
      "\n  mutation NoteReportMutation($targetId: ID!) {\n    reportNote(targetNoteId: $targetId)\n  }\n",
    ] );
    return ( ee = () => {
        return e;
      } ),
      e;
  }
  const te = ( 0, u.Ps )( ee() ),
    ne = n( 11241 ),
    re = n( 86280 ),
    ae = n( 98281 ),
    oe = n( 7530 ),
    ie = n( 64504 ),
    ce = n( 85277 ),
    se = n( 27952 );

  function ue() {
    const e = a()( [
      "\n  fragment PostViewNoteCard_privateNote on Note {\n    id\n    author {\n      id\n      ...PostViewNoteCard_user\n    }\n    content\n    createdAt\n    postId\n    post {\n      id\n      creator {\n        id\n      }\n      collection {\n        id\n        viewerIsEditor\n      }\n    }\n    replies {\n      id\n      ...PostViewNoteCard_noteReply\n    }\n    selectionStartOffset\n    selectionEndOffset\n  }\n  ",
      "\n  ",
      "\n",
    ] );
    return ( ue = () => {
        return e;
      } ),
      e;
  }

  function le() {
    const e = a()( [
      "\n  fragment PostViewNoteCard_paragraph on Paragraph {\n    name\n  }\n",
    ] );
    return ( le = () => {
        return e;
      } ),
      e;
  }

  function pe() {
    const e = a()( [
      "\n  fragment PostViewNoteCard_noteReply on NoteReply {\n    id\n    author {\n      id\n      ...PostViewNoteCard_user\n    }\n    content\n    createdAt\n    noteId\n    postId\n  }\n  ",
      "\n",
    ] );
    return ( pe = () => {
        return e;
      } ),
      e;
  }

  function fe() {
    const e = a()( [
      "\n  fragment PostViewNoteCard_user on User {\n    id\n    name\n    username\n    ...UserAvatar_user\n    ...userUrl_user\n  }\n  ",
      "\n  ",
      "\n",
    ] );
    return ( fe = () => {
        return e;
      } ),
      e;
  }
  const de = e => {
      const t = e.timestamp;
      return t ?
        n.g.Date.now() - t < 864e5 ?
        l.createElement( v.Z, {
          timestamp: t
        } ) :
        l.createElement( m.Z, {
          timestamp: t
        } ) :
        null;
    },
    ge = e => {
      const t = ( 0, g.v9 )( e => {
          return e.config.authDomain;
        } ),
        n = e.author,
        r = e.content,
        a = e.createdAt,
        o = e.id,
        i = e.isNote,
        c = e.onDelete,
        u = e.onReportError,
        p = ( e => {
          const t = e.onError,
            n = e.targetId;
          return ( 0, K.useMutation )( Y, {
            onError: t,
            variables: {
              targetId: n
            },
            optimisticResponse: {
              reportNoteReply: !0
            },
          } );
        } )( {
          onError: u,
          targetId: o
        } ),
        f = ( e => {
          const t = e.onCompleted,
            n = e.onError,
            r = e.targetId;
          return ( 0, K.useMutation )( te, {
            onCompleted: t,
            onError: n,
            optimisticResponse: {
              reportNote: !0
            },
            variables: {
              targetId: r
            },
          } );
        } )( {
          onError: u,
          targetId: o
        } );
      if ( !n ) return null;
      const d = i ? f : p,
        m = s()( d, 2 ),
        v = m[ 0 ],
        E = m[ 1 ],
        y = E.called,
        P = E.error,
        O = E.loading;
      return P && u(),
        l.createElement( re.Q_, {
          nonBlocking: !0
        }, e => {
          return l.createElement(
            oe.xu, {
              padding: "12px 0"
            },
            l.createElement(
              oe.xu, {
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              },
              l.createElement(
                oe.xu, {
                  marginRight: "12px"
                },
                l.createElement( ae.ZP, {
                  scale: "XS",
                  user: n,
                  link: !0
                } )
              ),
              l.createElement(
                oe.xu, {
                  flexGrow: "1",
                  flexShrink: "1"
                },
                l.createElement(
                  ie.F, {
                    scale: "M",
                    tag: "h4",
                    color: "DARKER",
                    clamp: 1
                  },
                  l.createElement(
                    oe.rU, {
                      href: ( 0, se.AW )( n, t ),
                      inline: !0
                    },
                    n.name
                  )
                ),
                l.createElement(
                  ie.F, {
                    scale: "M"
                  },
                  l.createElement( de, {
                    timestamp: a
                  } )
                )
              ),
              e &&
              e.id === n.id &&
              l.createElement(
                oe.xu, {
                  alignSelf: "flex-start",
                  marginLeft: "12px"
                },
                l.createElement(
                  ie.F, {
                    scale: "M",
                    tag: "div"
                  },
                  l.createElement(
                    oe.rU, {
                      linkStyle: "SUBTLE",
                      onClick: c
                    },
                    "Delete"
                  )
                )
              ),
              e &&
              e.id !== n.id &&
              l.createElement(
                oe.xu, {
                  alignSelf: "flex-start"
                },
                l.createElement(
                  ie.F, {
                    scale: "M",
                    tag: "div"
                  },
                  l.createElement( oe.Bn, null, e => {
                    const t = e.isVisible,
                      n = e.show,
                      r = e.hide;
                    return l.createElement(
                      oe.xu,
                      null,
                      l.createElement(
                        oe.QH, {
                          confirmText: "Report",
                          hide: r,
                          isVisible: t,
                          onConfirm: v,
                          titleText: "Confirm",
                          isDestructiveAction: !0,
                        },
                        "Are you sure you want to report this note?"
                      ),
                      l.createElement(
                        oe.rU, {
                          linkStyle: "SUBTLE",
                          onClick: n,
                          disabled: y || O,
                        },
                        y ? "Reported" : "Report"
                      )
                    );
                  } )
                )
              )
            ),
            l.createElement(
              oe.xu, {
                whiteSpace: "pre-wrap"
              },
              l.createElement(
                ie.F, {
                  scale: "M",
                  tag: "span",
                  color: "DARKER"
                },
                l.createElement( h.Z, null, r )
              )
            )
          );
        } );
    },
    me = e => {
      const t = e.note,
        n = e.exitReplyingMode;
      return l.createElement(
        oe.xu, {
          padding: "12px 0"
        },
        l.createElement(
          $, {
            targetPostId: t.postId,
            targetNoteId: t.id
          },
          e => {
            const t = e.mutate;
            return l.createElement( ne.$, {
              onSubmit( e ) {
                t( {
                  variables: {
                    replyContent: e
                  }
                } ), n();
              },
              onCancel: n,
            } );
          }
        )
      );
    },
    he = e => {
      const t = e.note,
        n = e.isReplyingMode,
        r = e.exitReplyingMode,
        a = e.dispatch,
        o = t.replies;
      return 0 !== o.length || n ?
        l.createElement(
          oe.xu, {
            tag: "ol",
            marginLeft: "20px"
          },
          o.map( e => {
            return l.createElement(
              "li", {
                key: e.id
              },
              l.createElement(
                J, {
                  targetPostId: e.postId,
                  targetNoteId: e.noteId,
                  targetReplyId: e.id,
                },
                t => {
                  const n = t.mutate;
                  return l.createElement( ge, {
                    author: e.author,
                    content: e.content,
                    createdAt: e.createdAt,
                    onDelete() {
                      n(),
                        a(
                          ( 0, ce.Dx )( {
                            duration: 5e3,
                            message: "The reply has been deleted.",
                          } )
                        );
                    },
                    id: e.id,
                    isNote: !1,
                    onReportError() {
                      a(
                        ( 0, ce.Dx )( {
                          duration: 5e3,
                          toastStyle: "ERROR",
                          message: "An error occurred while reporting this reply.",
                        } )
                      );
                    },
                  } );
                }
              )
            );
          } ),
          n &&
          l.createElement(
            "li", {
              key: "reply-new"
            },
            l.createElement( me, {
              note: t,
              exitReplyingMode: r
            } )
          )
        ) :
        null;
    },
    ve = ( 0, g.$j )()( e => {
      const t = e.isLast,
        n = e.isReplyingMode,
        r = e.onReplyClick,
        a = e.note,
        o = e.dispatch,
        i = e.viewer,
        c = ( 0, p.Zx )().setPrivateNoteSelection;
      if ( !i || !a.post ) return null;
      const s = !n,
        u =
        ( a.post.creator &&
          a.post.creator.id &&
          a.post.creator.id === i.id ) ||
        ( a.post.collection && a.post.collection.viewerIsEditor ),
        f =
        s &&
        l.createElement(
          ie.F, {
            scale: "M",
            tag: "div"
          },
          l.createElement(
            oe.rU, {
              linkStyle: "OBVIOUS",
              onClick: r
            },
            "Reply"
          )
        ),
        d =
        u &&
        l.createElement(
          H, {
            targetPostId: a.postId,
            targetNoteId: a.id
          },
          e => {
            const t = e.mutate;
            return l.createElement(
              oe.xu, {
                flexGrow: "1",
                flexShrink: "1",
                textAlign: "right"
              },
              l.createElement(
                ie.F, {
                  scale: "M",
                  tag: "span"
                },
                l.createElement(
                  oe.rU, {
                    linkStyle: "SUBTLE",
                    onClick() {
                      t(),
                        c( null ),
                        o(
                          ( 0, ce.Dx )( {
                            duration: 5e3,
                            message: "The note has been dismissed.",
                          } )
                        );
                    },
                  },
                  "Dismiss note"
                )
              )
            );
          }
        );
      return f || d || !t ?
        l.createElement(
          oe.xu, {
            display: "flex",
            borderTop: "BASE_LIGHTER",
            padding: "12px 0",
            marginTop: "8px",
            marginBottom: t ? "0" : "16px",
          },
          f,
          d
        ) :
        null;
    } ),
    Ee = ( 0, g.$j )()( e => {
      const t = e.dispatch,
        n = e.isLast,
        r = e.paragraph,
        a = e.note,
        o = l.useState( !1 ),
        i = s()( o, 2 ),
        c = i[ 0 ],
        u = i[ 1 ],
        f = ( 0, p.Zx )().setPrivateNoteSelection;
      return l.useEffect( () => {
          if (
            ( a.selectionStartOffset || 0 === a.selectionStartOffset ) &&
            ( a.selectionEndOffset || 0 === a.selectionEndOffset )
          )
            return f( {
                id: "private-note-selection",
                paragraphs: [ r ],
                userId: null,
                startOffset: a.selectionStartOffset,
                endOffset: a.selectionEndOffset,
                user: void 0,
              } ),
              () => {
                return f( null );
              };
        }, [] ),
        l.createElement(
          oe.xu, {
            padding: "0 20px"
          },
          l.createElement(
            N, {
              targetPostId: a.postId,
              targetNoteId: a.id
            },
            e => {
              const n = e.mutate;
              return l.createElement( ge, {
                author: a.author,
                createdAt: a.createdAt,
                content: a.content,
                id: a.id,
                isNote: !0,
                onDelete() {
                  n(),
                    f( null ),
                    t(
                      ( 0, ce.Dx )( {
                        duration: 5e3,
                        message: "The note has been deleted.",
                      } )
                    );
                },
                onReportError() {
                  t(
                    ( 0, ce.Dx )( {
                      duration: 5e3,
                      toastStyle: "ERROR",
                      message: "An error occurred while reporting this note.",
                    } )
                  );
                },
              } );
            }
          ),
          l.createElement( he, {
            note: a,
            isReplyingMode: c,
            exitReplyingMode() {
              u( !1 );
            },
            dispatch: t,
          } ),
          l.createElement( re.Q_, {
            nonBlocking: !0
          }, e => {
            return l.createElement( ve, {
              note: a,
              viewer: e,
              isLast: n,
              isReplyingMode: c,
              onReplyClick() {
                return u( !0 );
              },
            } );
          } )
        );
    } ),
    ye = ( 0, u.Ps )( fe(), ae.WQ, se.$m ),
    Pe = ( 0, u.Ps )( pe(), ye ),
    Oe = ( 0, u.Ps )( le() ),
    Ie = ( 0, u.Ps )( ue(), ye, Pe ),
    Se = n( 62630 ),
    be = n( 28309 );

  function xe() {
    return ( xe =
      Object.assign ||
      function ( e ) {
        for ( let t = 1; t < arguments.length; t++ ) {
          const n = arguments[ t ];
          for ( const r in n )
            Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] );
        }
        return e;
      } ).apply( this, arguments );
  }
  const we = l.createElement( "path", {
    d: "M14.78 8.07a8.68 8.68 0 0 0-.43-1.38.48.48 0 0 0-.58-.27l-3.12.77V4.03c0-.24-.2-.48-.43-.5a7.23 7.23 0 0 0-1.38 0c-.24.02-.43.26-.43.5V7.2L5.3 6.41a.48.48 0 0 0-.58.27c-.18.45-.33.92-.43 1.39-.05.24.1.5.32.58l3.06.75-1.98 2.96c-.14.2-.13.5.04.67.34.33.7.63 1.1.9.2.13.48.07.62-.12l2.1-3.12 2.08 3.12c.15.19.43.25.63.11a7.7 7.7 0 0 0 1.1-.89.53.53 0 0 0 .03-.67L11.4 9.41l3.06-.76a.52.52 0 0 0 .32-.58",
    fillRule: "evenodd",
  } );
  const Ne = e => {
    return l.createElement( "svg", xe( {
      width: 19,
      height: 19
    }, e ), we );
  };
  const Re = n( 51064 );

  function Te() {
    const e = a()( [
      "\n  fragment PostAnnotationsMarker_privateNote on Note {\n    ...PostViewNoteCard_privateNote\n  }\n  ",
      "\n",
    ] );
    return ( Te = () => {
        return e;
      } ),
      e;
  }

  function Me() {
    const e = a()( [
      "\n  fragment PostAnnotationsMarker_paragraph on Paragraph {\n    ...PostViewNoteCard_paragraph\n  }\n  ",
      "\n",
    ] );
    return ( Me = () => {
        return e;
      } ),
      e;
  }

  const Ce = {
    float: "right",
    position: "relative",
    width: "0",
    height: "0",
  };

  const _e = {
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
    "-webkit-user-select": "none",
  };

  var De = e => {
    const t = e.paragraph,
      n = e.privateNotes,
      r = ( 0, be.Iq )(),
      a = ( 0, Se.Av )(),
      o = ( 0, p.Zx )(),
      c = o.openPrivateNoteId,
      u = o.setOpenPrivateNoteId,
      g = o.privateNoteSelection,
      m = o.setPrivateNoteSelection,
      h = n.map( e => {
        return e.id;
      } ),
      v = l.useMemo(
        () => {
          return new Set( h );
        },
        [ h ]
      ),
      E = l.useRef( null ),
      y = ( 0, Re.O )( !1 ),
      P = s()( y, 4 ),
      O = P[ 0 ],
      I = P[ 1 ],
      S = P[ 2 ],
      b = P[ 3 ];
    if (
      ( l.useEffect(
          () => {
            c &&
              v.has( c ) &&
              !O &&
              E.current &&
              ( I(), window.scrollTo( {
                top: E.current.offsetTop
              } ) );
          },
          [ c ]
        ),
        !n || 0 === n.length )
    )
      return null;
    const x = n[ 0 ].postId,
      w = Math.min.apply(
        Math,
        i()(
          n.map( e => {
            let t;
            return null !== ( t = e.selectionStartOffset ) && void 0 !== t ?
              t :
              0;
          } )
        )
      ),
      N = Math.max.apply(
        Math,
        i()(
          n.map( e => {
            let t;
            return null !== ( t = e.selectionEndOffset ) && void 0 !== t ?
              t :
              0;
          } )
        )
      );
    return l.createElement(
      "span", {
        className: r( Ce ),
        ref: E
      },
      l.createElement(
        d.G, {
          isVisible: O,
          hide() {
            u( null ), S();
          },
          popoverRenderFn() {
            return l.createElement(
              f.Y,
              null,
              n.map( ( e, r ) => {
                return l.createElement( Ee, {
                  isLast: r === n.length - 1,
                  key: e.id,
                  note: e,
                  paragraph: t,
                } );
              } )
            );
          },
        },
        l.createElement(
          "span", {
            className: r( _e )
          },
          l.createElement(
            oe.D6, {
              onMouseEnter() {
                m( {
                  id: "private-note-hover",
                  paragraphs: [ t ],
                  userId: null,
                  startOffset: w,
                  endOffset: N,
                  user: void 0,
                } );
              },
              onMouseLeave() {
                "private-note-hover" === ( null == g ? void 0 : g.id ) &&
                m( null );
              },
            },
            l.createElement(
              oe.PS, {
                onClick() {
                  b(),
                    a.event( "notes.ui.showNotes", {
                      postId: x,
                      noteIds: h,
                    } );
                },
              },
              l.createElement( Ne, {
                "aria-label": "View ".concat( n.length, " Private Notes" ),
              } )
            )
          )
        )
      )
    );
  };

  var He = ( 0, u.Ps )( Me(), Oe );
  var ke = ( 0, u.Ps )( Te(), Ie );
},
46898: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    Y: () => f
  } );
  const r = n( 67294 ),
    a = n( 324 ),
    o = n( 7530 ),
    i = n( 64504 ),
    c = n( 98024 );

  function s() {
    return ( s =
      Object.assign ||
      function ( e ) {
        for ( let t = 1; t < arguments.length; t++ ) {
          const n = arguments[ t ];
          for ( const r in n )
            Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] );
        }
        return e;
      } ).apply( this, arguments );
  }
  const u = r.createElement( "path", {
    d: "M14 14.05a1 1 0 0 1-1 1H6a.99.99 0 0 1-1-1v-4a1 1 0 0 1 1-1h7a.99.99 0 0 1 1 1v4zm-7-8.6c0-1.26 1.11-2.3 2.5-2.3S12 4.19 12 5.45v2.6H7v-2.6zm6 2.6v-2.6c0-1.83-1.58-3.3-3.5-3.3S6 3.62 6 5.45v2.6a2 2 0 0 0-2 2v4a1.99 1.99 0 0 0 2 2h7a2 2 0 0 0 2-2v-4a1.99 1.99 0 0 0-2-2z",
    fillRule: "evenodd",
  } );
  const l = e => {
    return r.createElement( "svg", s( {
      width: 19,
      height: 19
    }, e ), u );
  };
  const p = n( 27952 );

  var f = e => {
    return r.createElement(
      a.N8,
      null,
      r.createElement(
        o.xu, {
          width: "400px",
          backgroundColor: "BACKGROUND"
        },
        r.createElement(
          o.xu, {
            backgroundColor: "BASE_DARK",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
          },
          r.createElement(
            o.xu, {
              marginLeft: "-4px",
              marginRight: "8px"
            },
            r.createElement( l, null )
          ),
          r.createElement(
            o.xu, {
              flexGrow: "1",
              flexShrink: "1",
              position: "relative",
              top: "1px",
            },
            r.createElement(
              i.Lh, {
                tag: "h4"
              },
              r.createElement(
                c.F, {
                  scale: "S",
                  tag: "span",
                  color: "DARKER"
                },
                "Private Notes"
              )
            )
          ),
          r.createElement(
            o.xu, {
              position: "relative",
              top: "1px"
            },
            r.createElement(
              c.F, {
                scale: "S",
                color: "DARKER"
              },
              r.createElement(
                o.rU, {
                  href: ( 0, p.qP )(),
                  inline: !0,
                  target: "_blank",
                  linkStyle: "SUBTLE",
                },
                "Learn more"
              )
            )
          )
        ),
        e.children
      )
    );
  };
},
16803: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    G: () => g
  } );
  const r = n( 67154 );
  const a = n.n( r );
  const o = n( 63038 );
  const i = n.n( o );
  const c = n( 67294 );
  const s = n( 18736 );
  const u = n( 75617 );
  const l = n( 39453 );
  const p = n( 28309 );

  const f = e => {
    return {
      background: e.backgroundColor,
      boxSizing: "border-box",
      border: "1px solid ".concat( e.baseColor.border.lighter ),
      borderRadius: "".concat( e.borderRadius.regular, "px" ),
      boxShadow: "0 1px 4px ".concat( e.baseColor.border.lighter ),
      maxHeight: "100vh",
      overflowY: "auto",
    };
  };

  const d = e => {
    e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
  };

  var g = e => {
    const t = e.boundariesElement,
      n = void 0 === t ? "viewport" : t,
      r = e.children,
      o = e.popoverRenderFn,
      g = e.isVisible,
      m = e.hide,
      h = e.placement,
      v = void 0 === h ? "right-start" : h,
      E = e.referenceHeight,
      y = e.reference,
      P = ( 0, p.Iq )(),
      O = {
        display: "block",
        height: E
      },
      I = c.useState( null ),
      S = i()( I, 2 ),
      b = S[ 0 ],
      x = S[ 1 ],
      w = c.useState( null ),
      N = i()( w, 2 ),
      R = N[ 0 ],
      T = N[ 1 ],
      M = c.useCallback( e => {
        return x( e );
      }, [] ),
      C = c.useCallback( e => {
        return T( e );
      }, [] ),
      _ = ( 0, s.D )( y || b, R, {
        modifiers: [ {
            name: "flip",
            enabled: !1
          },
          {
            name: "preventOverflow",
            options: {
              altAxis: !0,
              rootBoundary: n,
              padding: 15
            },
          },
        ],
        placement: v,
      } ),
      D = _.styles,
      H = _.attributes,
      k = _.update,
      L = c.createElement(
        u.Z, {
          disableOverlay: !1,
          onClick( e ) {
            return ( 0, l.fF )( m, e );
          },
          onKeyDown( e ) {
            return ( 0, l.cD )( m, e );
          },
        },
        c.createElement(
          "div", {
            onClick: d
          },
          c.createElement(
            "div",
            a()( {
              ref: C,
              style: D.popper,
              className: P( f )
            }, H.popper ),
            c.createElement( "div", null, o( k ) )
          )
        )
      );
    return c.createElement(
      c.Fragment,
      null,
      y ? r : c.createElement( "span", {
        ref: M,
        className: P( O )
      }, r ),
      g ? L : null
    );
  };
},
11241: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    X: () => v,
    $: () => y
  } );
  const r = n( 67154 );
  const a = n.n( r );
  const o = n( 63038 );
  const i = n.n( o );
  const c = n( 67294 );
  const s = n( 86280 );
  const u = n( 98281 );
  const l = n( 7530 );
  const p = n( 64504 );
  const f = n( 67995 );
  const d = n( 28309 );

  const g = {
    border: "none",
    display: "block",
    resize: "none",
    width: "100%",
    ":focus": {
      outline: "none"
    },
  };

  const m = e => {
    const t = e.onSubmit,
      r = e.onCancel,
      a = e.thresholdMaxChars,
      o = e.thresholdCharsShowIndicator,
      m = e.placeholderText,
      h = e.numTextAreaLines,
      v = ( 0, d.Iq )(),
      E = c.useState( "" ),
      y = i()( E, 2 ),
      P = y[ 0 ],
      O = y[ 1 ],
      I = c.useRef( null );
    c.useEffect( () => {
        I.current &&
          "function" == typeof I.current.focus &&
          setTimeout( () => {
            I.current && I.current.focus();
          } );
      } ),
      c.useEffect(
        () => {
          const e = e => {
            if ( P )
              return (
                e.preventDefault(),
                ( e.returnValue = "Note input not empty" ),
                "Note input not empty"
              );
          };
          return n.g.window.addEventListener( "beforeunload", e ),
            () => {
              n.g.window.removeEventListener( "beforeunload", e );
            };
        },
        [ P ]
      );
    const S = e => {
        const t = e.target.value;
        O( t );
      },
      b = ( 0, f.n )( {
        name: "detail",
        scale: "M",
        color: "DARKER"
      } );
    return c.createElement( s.Q_, null, e => {
      return (
        !!e &&
        c.createElement(
          l.xu,
          null,
          c.createElement(
            l.xu, {
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            },
            c.createElement(
              l.xu, {
                marginRight: "12px"
              },
              c.createElement( u.ZP, {
                scale: "XS",
                user: e
              } )
            ),
            c.createElement(
              p.F, {
                scale: "M",
                tag: "h5",
                color: "DARKER",
                clamp: 1
              },
              ( e && e.name ) || ""
            )
          ),
          c.createElement(
            l.xu, {
              marginBottom: "12px",
              tag: "label"
            },
            c.createElement( "textarea", {
              ref: I,
              required: !0,
              placeholder: m,
              value: P,
              rows: h,
              onChange: S,
              className: v( [ b, g ] ),
            } ),
            P.length >= o &&
            c.createElement(
              l.xu, {
                marginTop: "4px"
              },
              c.createElement(
                p.F, {
                  scale: "XS",
                  color: P.length > a ? "ERROR" : "LIGHTER",
                },
                P.length,
                "/",
                a
              )
            )
          ),
          c.createElement(
            p.F, {
              scale: "M",
              tag: "div"
            },
            c.createElement(
              l.xu, {
                display: "flex",
                justifyContent: "space-between"
              },
              c.createElement(
                l.xu, {
                  display: "flex"
                },
                c.createElement(
                  l.rU, {
                    disabled: 0 === P.length || P.length > a,
                    linkStyle: "OBVIOUS",
                    onClick() {
                      t( P );
                    },
                  },
                  "Send"
                )
              ),
              c.createElement(
                l.xu, {
                  display: "flex"
                },
                c.createElement(
                  l.rU, {
                    linkStyle: "SUBTLE",
                    onClick: r
                  },
                  "Cancel"
                )
              )
            )
          )
        )
      );
    } );
  };

  const h = {
    thresholdMaxChars: 400,
    thresholdCharsShowIndicator: 255,
    placeholderText: "Write a note…",
    numTextAreaLines: 5,
  };

  var v = e => {
    return c.createElement( m, a()( {}, h, e ) );
  };

  const E = {
    thresholdMaxChars: 200,
    thresholdCharsShowIndicator: 133,
    placeholderText: "Leave a reply…",
    numTextAreaLines: 3,
  };

  var y = e => {
    return c.createElement( m, a()( {}, E, e ) );
  };
},
19692: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    Pq: () => Y,
    m8: () => oe,
    Rg: () => ae,
    hz: () => ie,
    zZ: () => ne,
    ZP: () => re,
  } );
  const r = n( 28655 ),
    a = n.n( r ),
    o = n( 63038 ),
    i = n.n( o ),
    c = n( 59854 ),
    s = n.n( c ),
    u = n( 71439 ),
    l = n( 67294 ),
    p = n( 10515 ),
    f = n( 69677 ),
    d = n( 79914 ),
    g = n( 24219 ),
    m = n( 319 ),
    h = n.n( m ),
    v = n( 67995 ),
    E = n( 28309 ),
    y = {
      xs: "S",
      sm: "S",
      md: "M",
      lg: "M",
      xl: "M"
    },
    P = e => {
      return {
        color: e.baseColor.text.normal
      };
    },
    O = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.rules,
        o = e.richTextStyle,
        i = ( 0, E.Iq )(),
        c = l.useContext( p.M ),
        s =
        "FULL_PAGE" === o || "CARD" === o || "SHORTFORM_CARD" === o ?
        y :
        "S",
        u = ( 0, v.n )( {
          name: "body",
          scale: s
        } ),
        f = i( [ a, {
          wordBreak: "break-word"
        } ].concat( h()( c ? [ P ] : [ u ] ) ) );
      return l.createElement( "p", {
        id: r,
        className: f,
        ref: t
      }, n );
    } ),
    I = n( 14391 ),
    S = {
      card: {
        xs: "S",
        sm: "S",
        md: "M",
        lg: "M",
        xl: "M"
      },
      fullPage: {
        xs: "M",
        sm: "M",
        md: "L",
        lg: "L",
        xl: "L"
      },
      streamLike: "M",
    },
    b = {
      card: {
        xs: "XS",
        sm: "XS",
        md: "S",
        lg: "S",
        xl: "S"
      },
      fullPage: {
        xs: "S",
        sm: "S",
        md: "M",
        lg: "M",
        xl: "M"
      },
      streamLike: "S",
    },
    x = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.richTextStyle,
        o = e.rules,
        i = e.paragraphType,
        c = ( 0, E.Iq )(),
        s = "CARD" === a || "SHORTFORM_CARD" === a,
        u = "STREAM" === a || s,
        p = i === I.NJ.H4 ? "h2" : "h1",
        f = "h1" === p ? S : b,
        d = s ? f.card : u ? f.streamLike : f.fullPage,
        g = c( [ o, ( 0, v.n )( {
          name: "heading",
          scale: d
        } ) ] );
      return l.createElement( p, {
        id: r,
        className: g,
        ref: t
      }, n );
    } ),
    w = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.rules,
        o = ( 0, E.Iq )()( [
          a,
          ( 0, v.n )( {
            name: "overline",
            scale: "M",
            color: "LIGHTER"
          } ),
        ] );
      return l.createElement( "h2", {
        id: r,
        className: o,
        ref: t
      }, n );
    } ),
    N = {
      xs: "S",
      sm: "S",
      md: "M",
      lg: "M",
      xl: "M"
    },
    R = e => {
      return {
        color: e.baseColor.text.normal
      };
    },
    T = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.rules,
        o = e.richTextStyle,
        i = ( 0, E.Iq )(),
        c = l.useContext( p.M ),
        s = "FULL_PAGE" === o ? N : "S",
        u = ( 0, v.n )( {
          name: "body",
          scale: s
        } ),
        f = i(
          [
            a,
            {
              listStyleType: "decimal",
              marginLeft: "30px",
              paddingLeft: "0px",
            },
          ].concat( h()( c ? [ R ] : [ u ] ) )
        );
      return l.createElement( "li", {
        id: r,
        className: f,
        ref: t
      }, n );
    } ),
    M = {
      xs: "S",
      sm: "S",
      md: "M",
      lg: "M",
      xl: "M"
    },
    C = e => {
      return {
        color: e.baseColor.text.normal
      };
    },
    _ = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.hasDropCap,
        a = e.paragraphName,
        o = e.rules,
        i = e.richTextStyle,
        c = ( 0, E.Iq )(),
        s = l.useContext( p.M ),
        u =
        "FULL_PAGE" === i || "CARD" === i || "SHORTFORM_CARD" === i ?
        M :
        "S",
        f = ( 0, v.n )( {
          name: "body",
          scale: u
        } ),
        d = c(
          [ o, {
            wordBreak: "break-word"
          } ].concat(
            h()( s ? [ C ] : [ f ] ),
            h()( r ? [ {
              clear: "left"
            } ] : [] )
          )
        );
      return l.createElement( "p", {
        id: a,
        className: d,
        ref: t
      }, n );
    } ),
    D = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.richTextStyle,
        o = e.rules,
        i = ( 0, E.Iq )()( [
          o,
          ( 0, v.n )( {
            name: "pullQuote",
            scale: "CARD" === a || "SHORTFORM_CARD" === a ? {
              xs: "M",
              sm: "M",
              md: "L",
              lg: "L",
              xl: "L"
            } : "L",
          } ),
        ] );
      return l.createElement( "p", {
        id: r,
        className: i,
        ref: t
      }, n );
    } ),
    H = e => {
      return {
        color: e.baseColor.text.normal
      };
    },
    k = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.rules,
        o = ( 0, E.Iq )()( [
          H,
          a,
          {
            display: "block",
            whiteSpace: "pre-wrap"
          },
        ] );
      return l.createElement( "span", {
        id: r,
        className: o,
        ref: t
      }, n );
    } ),
    L = {
      xs: "M",
      sm: "M",
      md: "L",
      lg: "L",
      xl: "L"
    },
    j = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.richTextStyle,
        o = e.rules,
        i = "FULL_PAGE" === a,
        c = "CARD" === a || "SHORTFORM_CARD" === a,
        s = ( 0, E.Iq )()( [
          o,
          ( 0, v.n )( {
            name: "subtitle",
            scale: i || c ? L : "L",
            color: "LIGHTER",
            richTextStyle: a,
          } ),
        ] );
      return l.createElement( "h2", {
        id: r,
        className: s,
        ref: t
      }, n );
    } ),
    A = {
      xs: "M",
      sm: "M",
      md: "XL",
      lg: "XL",
      xl: "XL"
    },
    q = {
      xs: "S",
      sm: "S",
      md: "L",
      lg: "L",
      xl: "L"
    },
    Q = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.richTextStyle,
        a = e.paragraphName,
        o = e.rules,
        i = "CARD" === r || "SHORTFORM_CARD" === r,
        c = "FULL_PAGE" === r,
        s = ( 0, E.Iq )()( [
          o,
          [
            ( 0, v.n )( {
              name: "title",
              scale: c ? A : i ? q : "M",
              richTextStyle: r,
            } ),
          ],
        ] );
      return l.createElement( "h1", {
        id: a,
        className: s,
        ref: t
      }, n );
    } ),
    F = {
      xs: "S",
      sm: "S",
      md: "M",
      lg: "M",
      xl: "M"
    },
    U = e => {
      return {
        color: e.baseColor.text.normal
      };
    },
    $ = l.forwardRef( ( e, t ) => {
      const n = e.children,
        r = e.paragraphName,
        a = e.rules,
        o = e.richTextStyle,
        i = ( 0, E.Iq )(),
        c = l.useContext( p.M ),
        s = "FULL_PAGE" === o ? F : "S",
        u = ( 0, v.n )( {
          name: "body",
          scale: s
        } ),
        f = i(
          [
            a,
            {
              listStyleType: "disc",
              marginLeft: "30px",
              paddingLeft: "0px",
            },
          ].concat( h()( c ? [ U ] : [ u ] ) )
        );
      return l.createElement( "li", {
        id: r,
        className: f,
        ref: t
      }, n );
    } ),
    G = n( 77714 ),
    B = n( 98701 ),
    z = n( 5955 ),
    W = n( 65441 ),
    V = n( 11642 );

  function Z() {
    const e = a()( [
      "\n  fragment TextParagraph_privateNote on Note {\n    ...PostAnnotationsMarker_privateNote\n  }\n  ",
      "\n",
    ] );
    return ( Z = () => {
        return e;
      } ),
      e;
  }

  function J() {
    const e = a()( [
      "\n  fragment TextParagraph_highlight on Quote {\n    ...Markups_highlight\n  }\n  ",
      "\n",
    ] );
    return ( J = () => {
        return e;
      } ),
      e;
  }

  function K() {
    const e = a()( [
      "\n  fragment TextParagraph_paragraph on Paragraph {\n    type\n    hasDropCap\n    ...Markups_paragraph\n    ...ParagraphRefsMapContext_paragraph\n  }\n  ",
      "\n  ",
      "\n",
    ] );
    return ( K = () => {
        return e;
      } ),
      e;
  }
  const X = {
    xs: "M",
    sm: "M",
    md: "L",
    lg: "L",
    xl: "L"
  };

  var Y = {
    marginTop: {
      xs: "8px",
      sm: "12px",
      md: "12px",
      lg: "18px",
      xl: "20px",
    },
  };

  const ee = e => {
    return e !== W.qq.P ? {} : Y;
  };

  const te = ( e, t, n, r, a ) => {
    return {
      marginTop: a ?
        "".concat( a, "px" ) : ( 0, B.mu )(
          e => {
            const n = i()( e, 2 ),
              a = n[ 0 ],
              o = n[ 1 ];
            return "".concat(
              s()( a / o - ( r.xHeight + ( t - 1 ) / 2 ), 2 ),
              "em"
            );
          },
          e,
          n
        ),
      marginBottom: "".concat(
        s()( -1 * ( r.baseline + ( t - 1 ) / 2 ), 2 ),
        "em"
      ),
    };
  };

  var ne = e => {
    const t = e.children,
      n = e.hasDropCap,
      r = e.marginTopOverride,
      a = e.name,
      o = e.paragraphRef,
      c = e.paragraphStyle,
      s = e.richTextStyle,
      u = e.spaceTop,
      f = ( 0, E.Fg )(),
      d = ( e => {
        const t = e.isEmbedded;
        const n = e.marginTopOverride;
        const r = e.paragraphStyle;
        const a = e.richTextStyle;
        const o = e.spaceTop;

        let c = ( ( e, t, n ) => {
          const r = "FULL_PAGE" === t,
            a = "CARD" === t || "SHORTFORM_CARD" === t,
            o = "STREAM" === t || "TOPIC_LANDING" === t || a;
          switch ( e ) {
            case W.qq.Title:
              const c = n.newFonts.title.fontSize,
                s =
                c &&
                ( 0, B.mu )( e => {
                  const t = i()( e, 1 )[ 0 ];
                  return c[ t ];
                }, A );
              return r || a ? {
                fontRule: z.Wd,
                multipliers: z.jo,
                fontSize: s,
                lineHeight: 1.23,
                letterSpacing: "0",
              } : {
                fontRule: z.Yu,
                multipliers: z.Yq,
                fontSize: o ? 34 : 30,
                lineHeight: 1.12,
                letterSpacing: "-0.022em",
              };
            case W.qq.Subtitle:
              const u = n.newFonts.subtitle.fontSize,
                l =
                u &&
                ( 0, B.mu )( e => {
                  const t = i()( e, 1 )[ 0 ];
                  return u[ t ];
                }, X );
              return {
                fontRule: z.Wt,
                  multipliers: z.Yq,
                  fontSize: o ? 24 : l,
                  lineHeight: 1.394,
                  letterSpacing: "0",
              };
            case W.qq.Kicker:
              const p = n.newFonts.overline.fontSize,
                f = p && p.M;
              return {
                fontRule: z.Wt,
                  multipliers: z.Yq,
                  fontSize: f || 22,
                  lineHeight: 1.18,
                  letterSpacing: "-0.022em",
              };
            case W.qq.P:
            case W.qq.BQ:
              return {
                fontRule: z.rJ,
                  multipliers: z.Ol,
                  fontSize: {
                    xs: 18,
                    sm: 18,
                    md: r || a ? 21 : 18,
                    lg: r || a ? 21 : 18,
                    xl: r || a ? 21 : 18,
                  },
                  lineHeight: 1.58,
                  letterSpacing: "-0.004em",
              };
            case W.qq.ULI:
            case W.qq.OLI:
              return {
                fontRule: z.rJ,
                  multipliers: z.Ol,
                  fontSize: {
                    xs: 18,
                    sm: 18,
                    md: r ? 21 : 18,
                    lg: r ? 21 : 18,
                    xl: r ? 21 : 18,
                  },
                  lineHeight: 1.58,
                  letterSpacing: "-0.004em",
              };
            case W.qq.H1:
            case W.qq.H2:
            case W.qq.H3:
              return {
                fontRule: z.Yu,
                  multipliers: z.Yq,
                  fontSize: a ? {
                    xs: n.newFonts.heading.fontSize.S,
                    sm: n.newFonts.heading.fontSize.S,
                    md: n.newFonts.heading.fontSize.M,
                    lg: n.newFonts.heading.fontSize.M,
                    xl: n.newFonts.heading.fontSize.M,
                  } :
                  o ?
                  26 : {
                    xs: 30,
                    sm: 30,
                    md: 34,
                    lg: 34,
                    xl: 34
                  },
                  lineHeight: a ? 1.31 : 1.12,
                  letterSpacing: "-0.022em",
              };
            case W.qq.H4:
              return {
                fontRule: z.Yu,
                  multipliers: z.Yq,
                  fontSize: a ? {
                    xs: n.newFonts.heading.fontSize.XS,
                    sm: n.newFonts.heading.fontSize.XS,
                    md: n.newFonts.heading.fontSize.S,
                    lg: n.newFonts.heading.fontSize.S,
                    xl: n.newFonts.heading.fontSize.S,
                  } :
                  o ?
                  22 : {
                    xs: 24,
                    sm: 24,
                    md: 26,
                    lg: 26,
                    xl: 26
                  },
                  lineHeight: a ? 1.22 : 1.18,
                  letterSpacing: "-0.022em",
              };
            case W.qq.PRE:
              return {
                fontRule: z.XK,
                  multipliers: z.G4,
                  fontSize: 16,
                  lineHeight: 1.18,
                  letterSpacing: "-0.022em",
              };
            case W.qq.PQ:
              return {
                fontRule: z.Wd,
                  multipliers: z.z1,
                  fontSize: 24,
                  lineHeight: 1.48,
                  letterSpacing: "-0.014em",
              };
            default:
              return null;
          }
        } )( r, a, e.theme );

        if ( null == c ) return [];
        t &&
          ( c = ( ( e, t ) => {
            switch ( e ) {
              case W.qq.P:
              case W.qq.BQ:
                ( t.fontSize = {
                  xs: 18,
                  sm: 18,
                  md: 18,
                  lg: 18,
                  xl: 18
                } ),
                ( t.lineHeight = 1.34 ),
                ( t.fontRule = z.Wt );
                break;
              case W.qq.ULI:
                ( t.fontSize = {
                  xs: 18,
                  sm: 18,
                  md: 18,
                  lg: 18,
                  xl: 18
                } ),
                ( t.lineHeight = 1.48 ),
                ( t.fontRule = z.Wt );
            }
            return t;
          } )( r, c ) );
        const s = c,
          u = s.fontRule,
          l = s.multipliers,
          p = s.fontSize,
          f = s.lineHeight,
          d = s.letterSpacing,
          g =
          "number" == typeof p ?
          p * f :
          Object.entries( p ).reduce( ( e, t ) => {
            const n = i()( t, 2 ),
              r = n[ 0 ],
              a = n[ 1 ];
            return ( e[ r ] = a * f ), e;
          }, {} ),
          m =
          "SHORTFORM_CARD" === a && r === W.qq.Subtitle && f ?
          ( 0, G.V )( {
            clamp: 1,
            lineHeight: g
          } ) : {};
        return [ {
            lineHeight: f,
            letterSpacing: d,
            fontStyle: ( 0, W.S$ )( r )
          },
          u( {
            fontSize: p
          } ),
          t ? ee( r ) : te( o, f, p, l, n ),
          m,
        ];
      } )( {
        isEmbedded: l.useContext( p.M ),
        marginTopOverride: r,
        richTextStyle: s,
        paragraphStyle: c,
        spaceTop: u,
        theme: f,
      } );
    switch ( c ) {
      case W.qq.Title:
        return l.createElement(
          Q, {
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.Subtitle:
        return l.createElement(
          j, {
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.PQ:
        return l.createElement(
          D, {
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.Kicker:
        return l.createElement(
          w, {
            paragraphName: a,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.P:
        return l.createElement(
          _, {
            hasDropCap: n,
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d,
          },
          t
        );
      case W.qq.BQ:
        return l.createElement(
          O, {
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.ULI:
        return l.createElement(
          $, {
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.OLI:
        return l.createElement(
          T, {
            paragraphName: a,
            richTextStyle: s,
            ref: o,
            rules: d
          },
          t
        );
      case W.qq.H1:
      case W.qq.H2:
      case W.qq.H3:
      case W.qq.H4:
        return l.createElement(
          x, {
            paragraphName: a,
            paragraphType: c,
            richTextStyle: s,
            ref: o,
            rules: d,
          },
          t
        );
      case W.qq.PRE:
        return l.createElement(
          k, {
            paragraphName: a,
            ref: o,
            rules: d
          },
          t
        );
      default:
        return ( 0, V.v )( c ), null;
    }
  };

  function re( e ) {
    const t = e.highlights,
      n = e.marginTopOverride,
      r = e.paragraph,
      a = e.paragraphStyle,
      o = e.privateNotes,
      i = e.richTextStyle,
      c = e.spaceTop,
      s = !!r && !!r.hasDropCap,
      u = ( 0, f.CF )( r, a );
    return l.createElement(
      ne, {
        hasDropCap: s,
        marginTopOverride: n,
        name: r.name || void 0,
        paragraphRef: u,
        paragraphStyle: a,
        richTextStyle: i,
        spaceTop: c,
      },
      o && l.createElement( g.A7, {
        paragraph: r,
        privateNotes: o
      } ),
      l.createElement( d.T2, {
        allowDropCap: !0,
        highlights: t,
        paragraph: r,
        paragraphStyle: a,
        richTextStyle: i,
      } )
    );
  }
  var ae = ( 0, u.Ps )( K(), d.Zr, f.pK ),
    oe = ( 0, u.Ps )( J(), d.DV ),
    ie = ( 0, u.Ps )( Z(), g.uR );
},
41832: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    Z: () => E,
    O: () => y
  } );
  const r = n( 28655 ),
    a = n.n( r ),
    o = n( 71439 ),
    i = n( 93022 ),
    c = n( 23450 ),
    s = n.n( c ),
    u = n( 67294 ),
    l = n( 12291 ),
    p = n( 92013 ),
    f = n( 98281 ),
    d = n( 53380 ),
    g = n( 7530 ),
    m = n( 64504 ),
    h = n( 27390 );

  function v() {
    const e = a()( [
      "\n  fragment UserMentionTooltip_user on User {\n    id\n    name\n    username\n    bio\n    imageId\n    createdAt\n    mediumMemberAt\n    lastPostCreatedAt\n    socialStats {\n      followerCount\n    }\n    ...UserAvatar_user\n    ...UserFollowButton_user\n  }\n  ",
      "\n  ",
      "\n",
    ] );
    return ( v = () => {
        return e;
      } ),
      e;
  }
  const E = ( 0, l.$j )( e => {
    return {
      productName: e.config.productName
    };
  } )( e => {
    let t;
    const n = e.user;
    const r = e.productName;
    const a = n.id;
    const o = n.name;
    const c = n.username;
    const l = n.bio;
    const v = n.imageId;
    const E = n.mediumMemberAt;
    const y = n.lastPostCreatedAt;
    const P = n.socialStats;
    const O = n.createdAt;
    const I = n.hasSubdomain;
    const S = n.customDomainState;
    const b = ( 0, h.pY )( null == P ? void 0 : P.followerCount );
    if (
      ( ( null == P ? void 0 : P.followerCount ) >= 100 &&
        ( t = "Followed by ".concat( b, " people" ) ),
        y )
    )
      t = u.createElement(
        u.Fragment,
        null,
        "Last published ",
        u.createElement( p.h, {
          timestamp: y,
          hasPrefix: !0
        } )
      );
    else if ( !y && ( null == P ? void 0 : P.followerCount ) > 0 )
      t = "Followed by ".concat( b, " " ).concat( s()( "person", b ) );
    else if ( O ) {
      const x = ( 0, i.Z )( O, "LLL yyyy" );
      t = "Joined ".concat( r, " " ).concat( x );
    } else t = "";
    return u.createElement(
      g.xu, {
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        width: "300px",
      },
      u.createElement(
        g.xu, {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          whiteSpace: "normal",
        },
        u.createElement( f.ZP, {
          scale: "XS",
          user: {
            __typename: "User",
            mediumMemberAt: E,
            username: c,
            name: o,
            imageId: v,
            id: a,
            hasSubdomain: I,
            customDomainState: S,
          },
          link: !0,
        } ),
        u.createElement(
          g.xu, {
            display: "flex",
            flexDirection: "column",
            paddingLeft: "12px"
          },
          u.createElement( m.X6, {
            scale: "S",
            clamp: 2
          }, o )
        )
      ),
      l &&
      u.createElement(
        g.xu, {
          paddingTop: "12px"
        },
        u.createElement( m.F, {
          scale: "S",
          color: "DARKER"
        }, l )
      ),
      u.createElement(
        g.xu, {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "BASE_LIGHTER",
          marginTop: "10px",
          paddingTop: "10px",
        },
        u.createElement( m.F, {
          scale: "S"
        }, t ),
        u.createElement( d.Bv, {
          user: n,
          buttonSize: "COMPACT",
          susiEntry: "follow_card",
        } )
      )
    );
  } );
  var y = ( 0, o.Ps )( v(), f.WQ, d.sj );
},
69703: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    HM: () => l,
    QS: () => p,
    nO: () => f,
    yH: () => d,
    Zf: () => g,
    m1: () => m,
    lA: () => h,
    Mk: () => v,
    OG: () => E,
    Bu: () => y,
    S1: () => P,
    h_: () => O,
    zg: () => I,
    qB: () => S,
  } );
  const r = n( 63038 ),
    a = n.n( r ),
    o = n( 59713 ),
    i = n.n( o ),
    c = n( 98701 );

  function s( e, t ) {
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

  function u( e ) {
    for ( let t = 1; t < arguments.length; t++ ) {
      const n = null != arguments[ t ] ? arguments[ t ] : {};
      t % 2 ?
        s( Object( n ), !0 ).forEach( t => {
          i()( e, t, n[ t ] );
        } ) :
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
        s( Object( n ) ).forEach( t => {
          Object.defineProperty(
            e,
            t,
            Object.getOwnPropertyDescriptor( n, t )
          );
        } );
    }
    return e;
  }
  var l = 0,
    p = 10,
    f = {
      xs: 24,
      sm: 24,
      md: 32,
      lg: 32,
      xl: 32
    },
    d = 36,
    g = {
      xs: 40,
      sm: 40,
      md: 56,
      lg: 56,
      xl: 56
    },
    m = {
      xs: 48,
      sm: 48,
      md: 66,
      lg: 66,
      xl: 66
    },
    h = {
      xs: 48,
      sm: 48,
      md: 80,
      lg: 80,
      xl: 80
    },
    v = 36,
    E = 24,
    y = 24,
    P = 32,
    O = 40,
    I = u( u( {}, g ), {}, {
      lg: 0,
      xl: 0
    } ),
    S = function () {
      const e =
        arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : 0;
      return t => {
        return {
          marginTop: ( 0, c.mu )( e => {
            const t = a()( e, 1 )[ 0 ];
            return "".concat( t, "px" );
          }, e ),
        };
      };
    };
},
65441: ( e, t, n ) => {
  "use strict";
  n.d( t, {
    qq: () => H,
    XC: () => q,
    Zp: () => Q,
    S$: () => z,
    W: () => K,
    fj: () => X,
    jH: () => Y,
    gd: () => ee,
    Cn: () => te,
    EH: () => ne,
  } );
  const r = n( 319 ),
    a = n.n( r ),
    o = n( 63038 ),
    i = n.n( o ),
    c = n( 59713 ),
    s = n.n( c ),
    u = n( 28655 ),
    l = n.n( u ),
    p = n( 71439 ),
    f = n( 14391 ),
    d = n( 69703 ),
    g = n( 27952 );

  function m() {
    const e = l()( [
      "\n  fragment normalizedBodyModel_privateNote on Note {\n    ...getParagraphPrivateNotes_privateNote\n  }\n  ",
      "\n",
    ] );
    return ( m = () => {
        return e;
      } ),
      e;
  }

  function h() {
    const e = l()( [
      "\n  fragment normalizedBodyModel_highlight on Quote {\n    ...getParagraphHighlights_highlight\n  }\n  ",
      "\n",
    ] );
    return ( h = () => {
        return e;
      } ),
      e;
  }

  function v() {
    const e = l()( [
      "\n  fragment normalizedBodyModel_richText on RichText {\n    paragraphs {\n      markups {\n        type\n      }\n      ...getParagraphHighlights_paragraph\n      ...getParagraphPrivateNotes_paragraph\n    }\n    sections {\n      startIndex\n      ...getSectionEndIndex_section\n    }\n    ...getParagraphStyles_richText\n    ...getParagraphSpaces_richText\n  }\n  ",
      "\n  ",
      "\n  ",
      "\n  ",
      "\n  ",
      "\n",
    ] );
    return ( v = () => {
        return e;
      } ),
      e;
  }

  function E() {
    const e = l()( [
      "\n  fragment getParagraphPrivateNotes_privateNote on Note {\n    id\n    anchor\n    author {\n      id\n      name\n      username\n      imageId\n      mediumMemberAt\n      ...userUrl_user\n    }\n    content\n    createdAt\n    postId\n    post {\n      id\n      creator {\n        id\n      }\n      collection {\n        id\n        viewerIsEditor\n      }\n    }\n    replies {\n      id\n      author {\n        id\n        name\n        username\n        imageId\n        mediumMemberAt\n        ...userUrl_user\n      }\n      content\n      createdAt\n      noteId\n      postId\n    }\n    selectionStartOffset\n    selectionEndOffset\n  }\n  ",
      "\n",
    ] );
    return ( E = () => {
        return e;
      } ),
      e;
  }

  function y() {
    const e = l()( [
      "\n  fragment getParagraphPrivateNotes_paragraph on Paragraph {\n    name\n  }\n",
    ] );
    return ( y = () => {
        return e;
      } ),
      e;
  }

  function P() {
    const e = l()( [
      "\n  fragment getParagraphHighlights_highlight on Quote {\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n",
    ] );
    return ( P = () => {
        return e;
      } ),
      e;
  }

  function O() {
    const e = l()( [
      "\n  fragment getParagraphHighlights_paragraph on Paragraph {\n    name\n  }\n",
    ] );
    return ( O = () => {
        return e;
      } ),
      e;
  }

  function I() {
    const e = l()( [
      "\n  fragment getParagraphSpaces_richText on RichText {\n    paragraphs {\n      layout\n      metadata {\n        originalHeight\n        originalWidth\n      }\n      type\n      ...paragraphExtendsImageGrid_paragraph\n    }\n    ...getSeriesParagraphTopSpacings_richText\n    ...getPostParagraphTopSpacings_richText\n  }\n  ",
      "\n  ",
      "\n  ",
      "\n",
    ] );
    return ( I = () => {
        return e;
      } ),
      e;
  }

  function S() {
    const e = l()( [
      "\n  fragment paragraphExtendsImageGrid_paragraph on Paragraph {\n    layout\n    type\n  }\n",
    ] );
    return ( S = () => {
        return e;
      } ),
      e;
  }

  function b() {
    const e = l()( [
      "\n  fragment getSeriesParagraphTopSpacings_richText on RichText {\n    paragraphs {\n      id\n    }\n    sections {\n      startIndex\n    }\n  }\n",
    ] );
    return ( b = () => {
        return e;
      } ),
      e;
  }

  function x() {
    const e = l()( [
      "\n  fragment getEmbedlyCardUrlParams_paragraph on Paragraph {\n    type\n    iframe {\n      mediaResource {\n        iframeSrc\n      }\n    }\n  }\n",
    ] );
    return ( x = () => {
        return e;
      } ),
      e;
  }

  function w() {
    const e = l()( [
      "\n  fragment getPostParagraphTopSpacings_richText on RichText {\n    paragraphs {\n      layout\n      text\n    }\n    sections {\n      startIndex\n    }\n  }\n",
    ] );
    return ( w = () => {
        return e;
      } ),
      e;
  }

  function N() {
    const e = l()( [
      "\n  fragment getParagraphStyles_richText on RichText {\n    paragraphs {\n      text\n      type\n    }\n    sections {\n      ...getSectionEndIndex_section\n    }\n  }\n  ",
      "\n",
    ] );
    return ( N = () => {
        return e;
      } ),
      e;
  }

  function R( e, t ) {
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

  function T( e ) {
    for ( let t = 1; t < arguments.length; t++ ) {
      const n = null != arguments[ t ] ? arguments[ t ] : {};
      t % 2 ?
        R( Object( n ), !0 ).forEach( t => {
          s()( e, t, n[ t ] );
        } ) :
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) :
        R( Object( n ) ).forEach( t => {
          Object.defineProperty(
            e,
            t,
            Object.getOwnPropertyDescriptor( n, t )
          );
        } );
    }
    return e;
  }

  function M() {
    const e = l()( [
      "\n  fragment getSectionEndIndex_section on Section {\n    startIndex\n  }\n",
    ] );
    return ( M = () => {
        return e;
      } ),
      e;
  }
  let C;

  const _ = ( e, t, n ) => {
    const r = e[ t + 1 ];
    return r && null != r.startIndex ? r.startIndex : n;
  };

  const D = ( 0, p.Ps )( M() );
  !( e => {
    ( e.Title = "Title" ), ( e.Subtitle = "Subtitle" ), ( e.Kicker = "Kicker" );
  } )( C || ( C = {} ) );
  var H = T( T( {}, C ), f.NJ );
  const k = ( 0, p.Ps )( N(), D );

  const L = ( e, t, n ) => {
    const r = e.paragraphs;
    const a = e.sections;
    const o = Y( n );
    const i = o ? d.OG : d.nO;
    const c = o ? d.Bu : d.yH;
    const s = o ? d.S1 : d.Zf;
    const u = o ? d.h_ : d.lA;
    let l = -1;
    return r.map( ( e, n ) => {
      const p = t[ n ],
        f = t[ n - 1 ],
        g = e.layout,
        m = r[ n - 1 ] && r[ n - 1 ].layout,
        h = a[ l + 1 ];
      if ( h && h.startIndex === n ) {
        if ( ( l++, ( "IMG" === p || "IFRAME" === p ) && !o ) ) {
          if ( "OUTSET_LEFT" === g ) return d.zg;
          if ( "INSET_LEFT" === g ) return d.HM;
          if ( 0 === n ) return "FULL_WIDTH" === g ? d.HM : d.nO;
        }
        return s;
      }
      if ( "PQ" === f ) return p === f ? s : o ? d.h_ : d.m1;
      switch ( p ) {
        case "Title":
          switch ( f ) {
            case "Kicker":
              return c;
            default:
              return s;
          }
          case "Subtitle":
            switch ( f ) {
              case "Title":
                return i;
              default:
                return s;
            }
            case "P":
              switch ( f ) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                  return i;
                default:
                  return s;
              }
              case "H1":
              case "H2":
              case "H3":
                return u;
              case "OLI":
                switch ( f ) {
                  case "H1":
                  case "H2":
                  case "H3":
                  case "H4":
                    return i;
                  case "OLI":
                    return d.Mk;
                  default:
                    return s;
                }
                case "ULI":
                  switch ( f ) {
                    case "H1":
                    case "H2":
                    case "H3":
                    case "H4":
                      return i;
                    case "ULI":
                      return d.Mk;
                    default:
                      return s;
                  }
                  case "IMG":
                  case "IFRAME":
                    switch ( f ) {
                      case "IMG":
                      case "IFRAME":
                        switch ( m ) {
                          case "OUTSET_LEFT":
                          case "INSET_LEFT":
                            return d.HM;
                          case "OUTSET_CENTER":
                            switch ( g ) {
                              case "OUTSET_CENTER":
                              case "OUTSET_ROW":
                                return d.HM;
                              case "FULL_WIDTH":
                                return u;
                              default:
                                return s;
                            }
                            case "OUTSET_ROW_CONTINUE":
                              switch ( g ) {
                                case "OUTSET_CENTER":
                                case "OUTSET_ROW":
                                  return d.HM;
                                default:
                                  return s;
                              }
                              case "INSET_CENTER":
                                switch ( g ) {
                                  case "INSET_LEFT":
                                    return d.HM;
                                  case "OUTSET_LEFT":
                                    return d.QS;
                                  case "FULL_WIDTH":
                                    return u;
                                  default:
                                    return s;
                                }
                                case "FULL_WIDTH":
                                  return "FULL_WIDTH" === g ? d.HM : u;
                                default:
                                  return s;
                        }
                        default:
                          return s;
                    }
                    case "PRE":
                      switch ( f ) {
                        case "PRE":
                          return i;
                        default:
                          return s;
                      }
                      case "PQ":
                        switch ( f ) {
                          case "H1":
                          case "H2":
                          case "H3":
                          case "H4":
                          case "P":
                            return s;
                          default:
                            return u;
                        }
                        case "MIXTAPE_EMBED":
                          return i;
      }
      return s;
    } );
  };

  const j = ( e, t ) => {
    const n = e.paragraphs;
    return n.map( ( e, r ) => {
      const a = t[ r ],
        o = t[ r - 1 ];
      if ( 0 === r ) return 24;
      switch ( a ) {
        case "Title":
          switch ( o ) {
            case "Kicker":
              return 8;
            case "IMG":
              return n[ r - 1 ].text ? 48 : 32;
            default:
              return 24;
          }
          case "Subtitle":
            switch ( o ) {
              case "Title":
                return 18;
              default:
                return 24;
            }
            case "P":
              switch ( o ) {
                case "Title":
                  return 30;
                case "Subtitle":
                  return 23;
                case "H1":
                case "H2":
                  return 14;
                case "H3":
                  return 13;
                case "H4":
                  return 11;
                case "P":
                  return 42;
                case "BQ":
                  return 40;
                case "PQ":
                  return 35;
                case "IMG":
                  return 32;
                case "MIXTAPE_EMBED":
                  return 48;
                default:
                  return;
              }
              case "H1":
              case "H2":
              case "H3":
                switch ( o ) {
                  case "P":
                    return 40;
                  default:
                    return;
                }
                case "H4":
                  switch ( o ) {
                    case "P":
                      return 36;
                    default:
                      return;
                  }
                  case "IMG":
                  case "IFRAME":
                    switch ( o ) {
                      case "Subtitle":
                        return 31;
                      default:
                        return;
                    }
                    case "BQ":
                      switch ( o ) {
                        case "P":
                          return 24;
                        default:
                          return;
                      }
                      case "PQ":
                        switch ( o ) {
                          case "P":
                            return 32;
                          default:
                            return;
                        }
                        case "MIXTAPE_EMBED":
                          switch ( o ) {
                            case "P":
                              return 40;
                            default:
                              return;
                          }
      }
    } );
  };

  const A = ( 0, p.Ps )( w() );

  var q = e => {
    if ( !e || !e.type || "IFRAME" !== e.type ) return null;
    const t =
      e &&
      e.iframe &&
      e.iframe.mediaResource &&
      e.iframe.mediaResource.iframeSrc ?
      e.iframe.mediaResource.iframeSrc :
      "";
    if (
      !(
        t.includes( "https://cdn.embedly.com" ) &&
        t.includes( "&schema=" ) &&
        t.includes( "&key=" ) &&
        t.includes( "&url=" )
      )
    )
      return null;
    const n = {};
    decodeURIComponent( t )
      .split( "?" )[ 1 ]
      .split( "&" )
      .forEach( e => {
        const t = e.split( "=" ),
          r = i()( t, 2 ),
          a = r[ 0 ],
          o = r[ 1 ];
        n[ a ] = o;
      } );
    const r = n.key,
      a = n.schema,
      o = n.url;
    return r && a && o ? {
      key: r,
      schema: a,
      url: o
    } : null;
  };

  var Q = ( 0, p.Ps )( x() );

  const F = ( e, t ) => {
    const n = e.paragraphs;
    const r = e.sections;
    const a = d.nO;
    const o = d.Zf;
    const i = d.lA;
    let c = -1;
    return n.map( ( e, n ) => {
      const s = r[ c + 1 ];
      if ( s && s.startIndex === n ) return c++, d.HM;
      const u = t[ n ],
        l = t[ n - 1 ];
      switch ( l ) {
        case "PQ":
          if ( "PQ" !== u ) return i;
      }
      switch ( u ) {
        case "BQ":
          switch ( l ) {
            case "BQ":
              return a;
            default:
              return o;
          }
          case "OLI":
            switch ( l ) {
              case "OLI":
                return a;
              default:
                return o;
            }
            case "ULI":
              switch ( l ) {
                case "ULI":
                  return a;
                default:
                  return o;
              }
              case "PQ":
                switch ( l ) {
                  case "PQ":
                    return o;
                  default:
                    return i;
                }
      }
      return o;
    } );
  };

  const U = ( 0, p.Ps )( b() );

  const $ = e => {
    return e && "OUTSET_ROW_CONTINUE" === e.layout && "IMG" === e.type;
  };

  const G = ( 0, p.Ps )( S() );
  const B = ( 0, p.Ps )( I(), G, U, A );

  var z = e => {
    switch ( e ) {
      case "BQ":
        return "italic";
      default:
        return "normal";
    }
  };

  const W = ( 0, p.Ps )( O() );
  const V = ( 0, p.Ps )( P() );
  const Z = ( 0, p.Ps )( y() );
  const J = ( 0, p.Ps )( E(), g.$m );
  var K = "rmm";

  var X = ( e, t ) => {
    const n = t.bylineParagraphName,
      r = t.highlights,
      o = t.isAuroraPostPageEnabled,
      i = void 0 !== o && o,
      c = t.isPostPage,
      s = void 0 !== c && c,
      u = t.privateNotes,
      l = t.richTextStyle,
      p = t.shouldAddHrs,
      g = void 0 === p || p;
    if ( !e ) return [];
    const m = e.paragraphs;
    const h = e.sections;

    const v = ( e => {
      const t = e.paragraphs,
        n = e.sections;
      if ( !n[ 0 ] ) return [];
      for (
        var r = _( n, 0, t.length ),
          a = t.map( e => {
            return e.type || f.NJ.P;
          } ),
          o = !1,
          i = -1,
          c = 0; c < r; c++
      ) {
        const s = t[ c ];
        if ( o ) {
          "H4" === s.type && ( a[ c ] = H.Subtitle );
          break;
        }
        if ( "H3" === s.type || "H2" === s.type )
          ( a[ c ] = H.Title ), ( o = !0 );
        else {
          if ( -1 !== i ) break;
          if ( "H4" !== s.type ) {
            if (
              "IMG" === s.type ||
              "IFRAME" === s.type ||
              ( "P" === s.type && /^\s*$/.test( s.text || "" ) )
            )
              continue;
            break;
          }
          i = c;
        }
      }
      return o && -1 !== i && ( a[ i ] = H.Kicker ), a;
    } )( e );

    const E = ( function ( e, t, n ) {
      for (
        var r =
          arguments.length > 3 &&
          void 0 !== arguments[ 3 ] &&
          arguments[ 3 ],
          a = e.paragraphs,
          o = "SERIES" === n ? F( e, t ) : L( e, t, n ),
          i = j( e, t ),
          c = [],
          s = 0; s < a.length; s++
      )
        if ( a[ s ] ) {
          const u = a[ s ].layout,
            l = a[ s ].type;
          if ( "OUTSET_ROW" === u && "IMG" === l ) {
            const p = a[ s ].metadata;
            if ( !p || !p.originalHeight || !p.originalWidth ) continue;
            for (
              var f = p.originalWidth / p.originalHeight, g = s + 1; $( a[ g ] );

            ) {
              const m = a[ g ].metadata;
              if ( !m || !m.originalHeight || !m.originalWidth ) break;
              ( f += m.originalWidth / m.originalHeight ), g++;
            }
            for ( ; s < g; )( c[ s ] = f ), s++;
            s = g - 1;
          }
        }
      return a.map( ( e, s ) => {
        const u = o[ s ];
        const l = i[ s ];
        let p = {
          paragraphTopSpacing: u
        };
        const f = t[ s ];
        const g = t[ s - 1 ];
        const m = e.layout;
        const h = a[ s - 1 ] ? a[ s - 1 ].layout : null;
        switch ( f ) {
          case "PRE":
            switch ( g ) {
              case "PRE":
                break;
              default:
                p = {
                  sequenceTopSpacing: p.paragraphTopSpacing,
                  paragraphTopSpacing: d.HM,
                };
            }
        }
        switch ( m ) {
          case "OUTSET_ROW":
            switch ( h ) {
              case "OUTSET_ROW_CONTINUE":
              case "OUTSET_CENTER":
                p = {
                  paragraphTopSpacing: d.HM
                };
                break;
              default:
                p = {
                  paragraphTopSpacing: d.HM,
                  sequenceTopSpacing: p.paragraphTopSpacing,
                };
            }
            break;
          case "OUTSET_ROW_CONTINUE":
            p = {
              paragraphTopSpacing: "STREAM" === n ? d.S1 : d.HM
            };
        }
        return (
          c[ s ] && ( p.sequenceAspectRatio = c[ s ] ),
          r && ( p.paragraphTopMarginForPostPage = l ),
          p
        );
      } );
    } )( e, v, l, s );

    const y = ( ( e, t ) => {
      if ( !t ) return [];
      const n = new Map();
      return t.forEach( e => {
          e.paragraphs.forEach( t => {
            const r = n.get( t.name ) || [];
            r.push( e ), n.set( t.name, r );
          } );
        } ),
        e.map( e => {
          return n.get( e.name ) || [];
        } );
    } )( m, r );

    const P = ( ( e, t ) => {
      if ( !t ) return [];
      const n = new Map();
      return t.forEach( e => {
          const t = e.anchor,
            r = n.get( t ) || [];
          r.push( e ), n.set( t, r );
        } ),
        e.map( e => {
          return n.get( e.name ) || [];
        } );
    } )( m, u );

    const O = m.findIndex( e => {
      return e.name === n;
    } );

    let I = 0;

    const S = m.map( ( e, t ) => {
      let n;
      const r = v[ t ];
      if (
        i &&
        "FULL_PAGE" === l &&
        "P" === e.type &&
        "string" == typeof e.text
      ) {
        const o = ( ( null == e ? void 0 : e.text ) || "" ).split( /\s+/ )
          .length;
        if ( I + o < 100 ) I += o;
        else if ( I < 100 ) {
          const c = 100 - I;
          ( e.markups = [].concat( a()( e.markups ), [ {
            type: "ID_WRAPPER",
            wrapperId: K,
            start: c,
            end: c + 1,
            __typename: "Markup",
          }, ] ) ),
          ( I += o );
        }
      }
      let u;
      let p;
      const f = m[ t ].layout;
      const d = null === ( n = m[ t + 1 ] ) || void 0 === n ? void 0 : n.layout;
      const g = "OUTSET_ROW" === f && "OUTSET_ROW_CONTINUE" === d;
      if ( i && "FULL_PAGE" === l && t === O + 1 )
        switch ( r ) {
          case "IMG":
            g || ( u = 33 );
            break;
          case "P":
            u = 24;
        }
      else
        !s ||
        g ||
        ( "CARD" !== l && "SHORTFORM_CARD" !== l ) ||
        !E[ t ].paragraphTopMarginForPostPage ||
        ( ( u =
            i && 0 === t && "Title" === r ?
            12 :
            E[ t ].paragraphTopMarginForPostPage ),
          "SHORTFORM_CARD" === l &&
          ( ( u = 0 ),
            "Title" === r ? ( p = 28 ) : "Subtitle" === r && ( p = 0 ) ) );
      return {
        highlights: y[ t ],
        marginTopOverride: u,
        marginBottomOverride: p,
        paragraph: e,
        paragraphStyle: r,
        privateNotes: P[ t ],
        richTextStyle: l,
        sequenceAspectRatio: E[ t ].sequenceAspectRatio,
        sequenceSpaceTop: E[ t ].sequenceTopSpacing,
        spaceTop: E[ t ].paragraphTopSpacing,
      };
    } );

    const b = [];
    return h.forEach( ( e, t ) => {
        const n = _( h, t, m.length );
        g && 0 !== t && b.push( "HR" ),
          b.push( {
            section: e,
            paragraphViewModels: S.slice( e.startIndex, n ),
          } );
      } ),
      b;
  };

  var Y = e => {
    return "STREAM" === e || "CARD" === e || "SHORTFORM_CARD" === e;
  };

  var ee = ( 0, p.Ps )( v(), W, Z, D, k, B );
  var te = ( 0, p.Ps )( h(), V );
  var ne = ( 0, p.Ps )( m(), J );
},
}, ] );
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9692.fac2254c.chunk.js.map
