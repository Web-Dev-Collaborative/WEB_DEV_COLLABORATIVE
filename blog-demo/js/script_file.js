window.wp = window.wp || {}, window.wp.tokenList = function ( e ) {
  var t = {};

  function r( n ) {
    if ( t[ n ] ) return t[ n ].exports;
    var u = t[ n ] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[ n ].call( u.exports, u, u.exports, r ), u.l = !0, u.exports
  }
  return r.m = e, r.c = t, r.d = function ( e, t, n ) {
    r.o( e, t ) || Object.defineProperty( e, t, {
      enumerable: !0,
      get: n
    } )
  }, r.r = function ( e ) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, {
      value: "Module"
    } ), Object.defineProperty( e, "__esModule", {
      value: !0
    } )
  }, r.t = function ( e, t ) {
    if ( 1 & t && ( e = r( e ) ), 8 & t ) return e;
    if ( 4 & t && "object" == typeof e && e && e.__esModule ) return e;
    var n = Object.create( null );
    if ( r.r( n ), Object.defineProperty( n, "default", {
        enumerable: !0,
        value: e
      } ), 2 & t && "string" != typeof e )
      for ( var u in e ) r.d( n, u, function ( t ) {
        return e[ t ]
      }.bind( null, u ) );
    return n
  }, r.n = function ( e ) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return r.d( t, "a", t ), t
  }, r.o = function ( e, t ) {
    return Object.prototype.hasOwnProperty.call( e, t )
  }, r.p = "", r( r.s = 539 )
}( {
  16: function ( e, t ) {
    e.exports = window.regeneratorRuntime
  },
  2: function ( e, t ) {
    e.exports = window.lodash
  },
  28: function ( e, t, r ) {
    "use strict";

    function n( e, t ) {
      if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  },
  29: function ( e, t, r ) {
    "use strict";

    function n( e, t ) {
      for ( var r = 0; r < t.length; r++ ) {
        var n = t[ r ];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && ( n.writable = !0 ), Object.defineProperty( e, n.key, n )
      }
    }

    function u( e, t, r ) {
      return t && n( e.prototype, t ), r && n( e, r ), e
    }
    r.d( t, "a", ( function () {
      return u
    } ) )
  },
  539: function ( e, t, r ) {
    "use strict";
    r.r( t ), r.d( t, "default", ( function () {
      return l
    } ) );
    var n = r( 28 ),
      u = r( 29 ),
      a = r( 16 ),
      i = r.n( a ),
      o = r( 2 ),
      l = function () {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : "";
          Object( n.a )( this, e ), this.value = t, this._currentValue, this._valueAsArray
        }
        return Object( u.a )( e, [ {
          key: "entries",
          value: function () {
            var e;
            return ( e = this._valueAsArray ).entries.apply( e, arguments )
          }
        }, {
          key: "forEach",
          value: function () {
            var e;
            return ( e = this._valueAsArray ).forEach.apply( e, arguments )
          }
        }, {
          key: "keys",
          value: function () {
            var e;
            return ( e = this._valueAsArray ).keys.apply( e, arguments )
          }
        }, {
          key: "values",
          value: function () {
            var e;
            return ( e = this._valueAsArray ).values.apply( e, arguments )
          }
        }, {
          key: "value",
          get: function () {
            return this._currentValue
          },
          set: function ( e ) {
            e = String( e ), this._valueAsArray = Object( o.uniq )( Object( o.compact )( e.split( /\s+/g ) ) ), this._currentValue = this._valueAsArray.join( " " )
          }
        }, {
          key: "length",
          get: function () {
            return this._valueAsArray.length
          }
        }, {
          key: "toString",
          value: function () {
            return this.value
          }
        }, {
          key: Symbol.iterator,
          value: i.a.mark( ( function e() {
            return i.a.wrap( ( function ( e ) {
              for ( ;; ) switch ( e.prev = e.next ) {
                case 0:
                  return e.delegateYield( this._valueAsArray, "t0", 1 );
                case 1:
                  return e.abrupt( "return", e.t0 );
                case 2:
                case "end":
                  return e.stop()
              }
            } ), e, this )
          } ) )
        }, {
          key: "item",
          value: function ( e ) {
            return this._valueAsArray[ e ]
          }
        }, {
          key: "contains",
          value: function ( e ) {
            return -1 !== this._valueAsArray.indexOf( e )
          }
        }, {
          key: "add",
          value: function () {
            for ( var e = arguments.length, t = new Array( e ), r = 0; r < e; r++ ) t[ r ] = arguments[ r ];
            this.value += " " + t.join( " " )
          }
        }, {
          key: "remove",
          value: function () {
            for ( var e = arguments.length, t = new Array( e ), r = 0; r < e; r++ ) t[ r ] = arguments[ r ];
            this.value = o.without.apply( void 0, [ this._valueAsArray ].concat( t ) ).join( " " )
          }
        }, {
          key: "toggle",
          value: function ( e, t ) {
            return void 0 === t && ( t = !this.contains( e ) ), t ? this.add( e ) : this.remove( e ), t
          }
        }, {
          key: "replace",
          value: function ( e, t ) {
            return !!this.contains( e ) && ( this.remove( e ), this.add( t ), !0 )
          }
        }, {
          key: "supports",
          value: function () {
            return !0
          }
        } ] ), e
      }()
  }
} ).default;;
! function ( e, t ) {
  for ( var n in t ) e[ n ] = t[ n ]
}( window, function ( e ) {
  function t( t ) {
    for ( var n, r, a = t[ 0 ], i = t[ 1 ], l = 0, c = []; l < a.length; l++ ) r = a[ l ], Object.prototype.hasOwnProperty.call( o, r ) && o[ r ] && c.push( o[ r ][ 0 ] ), o[ r ] = 0;
    for ( n in i ) Object.prototype.hasOwnProperty.call( i, n ) && ( e[ n ] = i[ n ] );
    for ( s && s( t ); c.length; ) c.shift()()
  }
  var n = {},
    r = {
      16: 0
    },
    o = {
      16: 0
    };

  function a( t ) {
    if ( n[ t ] ) return n[ t ].exports;
    var r = n[ t ] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[ t ].call( r.exports, r, r.exports, a ), r.l = !0, r.exports
  }
  a.e = function ( e ) {
    var t = [];
    r[ e ] ? t.push( r[ e ] ) : 0 !== r[ e ] && {
      29: 1
    } [ e ] && t.push( r[ e ] = new Promise( ( function ( t, n ) {
      for ( var o = "rtl" === document.dir ? ( {
          29: "vendors~map/mapbox-gl"
        } [ e ] || e ) + "." + {
          29: "2865962a9e059c170fb0"
        } [ e ] + ".rtl.css" : ( {
          29: "vendors~map/mapbox-gl"
        } [ e ] || e ) + "." + {
          29: "2865962a9e059c170fb0"
        } [ e ] + ".css", i = a.p + o, l = document.getElementsByTagName( "link" ), c = 0; c < l.length; c++ ) {
        var s = ( p = l[ c ] ).getAttribute( "data-href" ) || p.getAttribute( "href" );
        if ( "stylesheet" === p.rel && ( s === o || s === i ) ) return t()
      }
      var u = document.getElementsByTagName( "style" );
      for ( c = 0; c < u.length; c++ ) {
        var p;
        if ( ( s = ( p = u[ c ] ).getAttribute( "data-href" ) ) === o || s === i ) return t()
      }
      var f = document.createElement( "link" );
      f.rel = "stylesheet", f.type = "text/css", f.setAttribute( "data-webpack", !0 ), f.onload = t, f.onerror = function ( t ) {
        var o = t && t.target && t.target.src || i,
          a = new Error( "Loading CSS chunk " + e + " failed.\n(" + o + ")" );
        a.code = "CSS_CHUNK_LOAD_FAILED", a.request = o, delete r[ e ], f.parentNode.removeChild( f ), n( a )
      }, f.href = i, document.getElementsByTagName( "head" )[ 0 ].appendChild( f )
    } ) ).then( ( function () {
      r[ e ] = 0
    } ) ) );
    var n = o[ e ];
    if ( 0 !== n )
      if ( n ) t.push( n[ 2 ] );
      else {
        var i = new Promise( ( function ( t, r ) {
          n = o[ e ] = [ t, r ]
        } ) );
        t.push( n[ 2 ] = i );
        var l, c = document.createElement( "script" );
        c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute( "nonce", a.nc ), c.src = function ( e ) {
          return a.p + "" + ( {
            29: "vendors~map/mapbox-gl"
          } [ e ] || e ) + "." + {
            29: "2865962a9e059c170fb0"
          } [ e ] + ".js"
        }( e );
        var s = new Error;
        l = function ( t ) {
          c.onerror = c.onload = null, clearTimeout( u );
          var n = o[ e ];
          if ( 0 !== n ) {
            if ( n ) {
              var r = t && ( "load" === t.type ? "missing" : t.type ),
                a = t && t.target && t.target.src;
              s.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", s.name = "ChunkLoadError", s.type = r, s.request = a, n[ 1 ]( s )
            }
            o[ e ] = void 0
          }
        };
        var u = setTimeout( ( function () {
          l( {
            type: "timeout",
            target: c
          } )
        } ), 12e4 );
        c.onerror = c.onload = l, document.head.appendChild( c )
      } return Promise.all( t )
  }, a.m = e, a.c = n, a.d = function ( e, t, n ) {
    a.o( e, t ) || Object.defineProperty( e, t, {
      enumerable: !0,
      get: n
    } )
  }, a.r = function ( e ) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, {
      value: "Module"
    } ), Object.defineProperty( e, "__esModule", {
      value: !0
    } )
  }, a.t = function ( e, t ) {
    if ( 1 & t && ( e = a( e ) ), 8 & t ) return e;
    if ( 4 & t && "object" == typeof e && e && e.__esModule ) return e;
    var n = Object.create( null );
    if ( a.r( n ), Object.defineProperty( n, "default", {
        enumerable: !0,
        value: e
      } ), 2 & t && "string" != typeof e )
      for ( var r in e ) a.d( n, r, function ( t ) {
        return e[ t ]
      }.bind( null, r ) );
    return n
  }, a.n = function ( e ) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return a.d( t, "a", t ), t
  }, a.o = function ( e, t ) {
    return Object.prototype.hasOwnProperty.call( e, t )
  }, a.p = "", a.oe = function ( e ) {
    throw console.error( e ), e
  };
  var i = window.webpackJsonp = window.webpackJsonp || [],
    l = i.push.bind( i );
  i.push = t, i = i.slice();
  for ( var c = 0; c < i.length; c++ ) t( i[ c ] );
  var s = l;
  return a( a.s = 433 )
}( {
  0: function ( e, t ) {
    ! function () {
      e.exports = this.wp.element
    }()
  },
  1: function ( e, t ) {
    ! function () {
      e.exports = this.wp.i18n
    }()
  },
  116: function ( e, t, n ) {
    e.exports = n.p + "images/map-theme_default-2ceb449b599dbcbe2a90fead5a5f3824.jpg"
  },
  117: function ( e, t, n ) {
    e.exports = n.p + "images/map-theme_black_and_white-1ead5946ca104d83676d6e3410e1d733.jpg"
  },
  118: function ( e, t, n ) {
    e.exports = n.p + "images/map-theme_satellite-c74dc129bda9502fb0fb362bb627577e.jpg"
  },
  119: function ( e, t, n ) {
    e.exports = n.p + "images/map-theme_terrain-d41d8cd98f00b204e9800998ecf8427e.jpg"
  },
  12: function ( e, t ) {
    e.exports = function ( e, t ) {
      if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
    }
  },
  121: function ( e, t, n ) {
    "use strict";
    var r = n( 9 ),
      o = n.n( r ),
      a = n( 12 ),
      i = n.n( a ),
      l = n( 16 ),
      c = n.n( l ),
      s = n( 13 ),
      u = n.n( s ),
      p = n( 14 ),
      f = n.n( p ),
      d = n( 6 ),
      m = n.n( d ),
      b = n( 15 ),
      h = n.n( b ),
      v = n( 4 ),
      y = n.n( v ),
      g = n( 0 ),
      k = n( 1 ),
      w = n( 3 ),
      j = n( 2 ),
      x = ( n( 188 ), function ( e ) {
        function t() {
          var e, n;
          i()( this, t );
          for ( var r = arguments.length, o = new Array( r ), a = 0; a < r; a++ ) o[ a ] = arguments[ a ];
          return n = u()( this, ( e = f()( t ) ).call.apply( e, [ this ].concat( o ) ) ), y()( m()( n ), "handleClick", ( function () {
            ( 0, n.props.onClick )( m()( n ) )
          } ) ), y()( m()( n ), "getPoint", ( function () {
            var e = n.props.point;
            return [ e.coordinates.longitude, e.coordinates.latitude ]
          } ) ), n
        }
        return h()( t, e ), c()( t, [ {
          key: "componentDidMount",
          value: function () {
            this.renderMarker()
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            this.marker && this.marker.remove()
          }
        }, {
          key: "componentDidUpdate",
          value: function () {
            this.renderMarker()
          }
        }, {
          key: "renderMarker",
          value: function () {
            var e = this.props,
              t = e.map,
              n = e.point,
              r = e.mapboxgl,
              o = e.markerColor,
              a = this.handleClick,
              i = [ n.coordinates.longitude, n.coordinates.latitude ],
              l = this.marker ? this.marker.getElement() : document.createElement( "div" );
            this.marker ? this.marker.setLngLat( i ) : ( l.className = "wp-block-jetpack-map-marker", this.marker = new r.Marker( l ).setLngLat( i ).setOffset( [ 0, -19 ] ).addTo( t ), this.marker.getElement().addEventListener( "click", a ) ), l.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill-rule="evenodd"><path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="' + o + '" mask="url(#c)"/></g></svg>'
          }
        }, {
          key: "render",
          value: function () {
            return null
          }
        } ] ), t
      }( g.Component ) );
    x.defaultProps = {
      point: {},
      map: null,
      markerColor: "#000000",
      mapboxgl: null,
      onClick: function () {}
    };
    var O = x,
      M = function ( e ) {
        function t() {
          var e, n;
          i()( this, t );
          for ( var r = arguments.length, o = new Array( r ), a = 0; a < r; a++ ) o[ a ] = arguments[ a ];
          return n = u()( this, ( e = f()( t ) ).call.apply( e, [ this ].concat( o ) ) ), y()( m()( n ), "closeClick", ( function () {
            n.props.unsetActiveMarker()
          } ) ), n
        }
        return h()( t, e ), c()( t, [ {
          key: "componentDidMount",
          value: function () {
            var e = this.props.mapboxgl;
            this.el = document.createElement( "DIV" ), this.infowindow = new e.Popup( {
              closeButton: !0,
              closeOnClick: !1,
              offset: {
                left: [ 0, 0 ],
                top: [ 0, 5 ],
                right: [ 0, 0 ],
                bottom: [ 0, -40 ]
              }
            } ), this.infowindow.setDOMContent( this.el ), this.infowindow.on( "close", this.closeClick )
          }
        }, {
          key: "componentDidUpdate",
          value: function ( e ) {
            this.props.activeMarker !== e.activeMarker && ( this.props.activeMarker ? this.openWindow() : this.closeWindow() )
          }
        }, {
          key: "render",
          value: function () {
            return this.el ? Object( g.createPortal )( this.props.children, this.el ) : null
          }
        }, {
          key: "openWindow",
          value: function () {
            var e = this.props,
              t = e.map,
              n = e.activeMarker;
            this.infowindow.setLngLat( n.getPoint() ).addTo( t )
          }
        }, {
          key: "closeWindow",
          value: function () {
            this.infowindow.remove()
          }
        } ] ), t
      }( g.Component );
    M.defaultProps = {
      unsetActiveMarker: function () {},
      activeMarker: null,
      map: null,
      mapboxgl: null
    };
    var C = M;
    var _ = function ( e ) {
      function t() {
        var e;
        return i()( this, t ), e = u()( this, f()( t ).apply( this, arguments ) ), y()( m()( e ), "onMarkerClick", ( function ( t ) {
          var n = e.props.onMarkerClick;
          e.setState( {
            activeMarker: t
          } ), n()
        } ) ), y()( m()( e ), "onMapClick", ( function () {
          e.setState( {
            activeMarker: null
          } )
        } ) ), y()( m()( e ), "clearCurrentMarker", ( function () {
          e.setState( {
            activeMarker: null
          } )
        } ) ), y()( m()( e ), "updateActiveMarker", ( function ( t ) {
          var n = e.props.points,
            r = e.state.activeMarker.props.index,
            o = n.slice( 0 );
          Object( w.assign )( o[ r ], t ), e.props.onSetPoints( o )
        } ) ), y()( m()( e ), "deleteActiveMarker", ( function () {
          var t = e.props.points,
            n = e.state.activeMarker.props.index,
            r = t.slice( 0 );
          r.splice( n, 1 ), e.props.onSetPoints( r ), e.setState( {
            activeMarker: null
          } )
        } ) ), y()( m()( e ), "sizeMap", ( function () {
          var t = e.props.mapHeight,
            n = e.state.map,
            r = e.mapRef.current;
          if ( t ) r.style.height = t + "px";
          else {
            var o = r.offsetWidth,
              a = window.location.search.indexOf( "map-block-counter" ) > -1 ? window.innerHeight : .8 * window.innerHeight,
              i = Math.min( o * ( 3 / 4 ), a );
            r.style.height = i + "px"
          }
          n.resize(), e.setBoundsByMarkers()
        } ) ), y()( m()( e ), "updateZoom", ( function () {
          var t = e.props.zoom,
            n = e.state.map;
          n.setZoom( t ), n.updateZoom( t )
        } ) ), y()( m()( e ), "setBoundsByMarkers", ( function () {
          var t = e.props,
            n = t.admin,
            r = t.onSetMapCenter,
            o = t.onSetZoom,
            a = t.points,
            i = t.zoom,
            l = e.state,
            c = l.map,
            s = l.activeMarker,
            u = l.mapboxgl,
            p = l.zoomControl,
            f = l.boundsSetProgrammatically;
          if ( c && ( a.length && n ? c.dragPan.disable() : c.dragPan.enable(), a.length && !s ) ) {
            var d = new u.LngLatBounds;
            if ( a.forEach( ( function ( e ) {
                d.extend( [ e.coordinates.longitude, e.coordinates.latitude ] )
              } ) ), r( d.getCenter() ), a.length > 1 ) {
              c.fitBounds( d, {
                padding: {
                  top: 80,
                  bottom: 80,
                  left: 40,
                  right: 40
                }
              } ), e.setState( {
                boundsSetProgrammatically: !0
              } );
              try {
                c.removeControl( p )
              } catch ( m ) {}
            } else {
              if ( c.setCenter( d.getCenter() ), f ) {
                c.setZoom( 12 ), o( 12 )
              } else c.setZoom( parseInt( i, 10 ) );
              c.addControl( p ), e.setState( {
                boundsSetProgrammatically: !1
              } )
            }
          }
        } ) ), y()( m()( e ), "scriptsLoaded", ( function () {
          var t = e.props,
            n = t.mapCenter,
            r = t.points;
          e.setState( {
            loaded: !0
          } ), r.length, e.initMap( n )
        } ) ), y()( m()( e ), "googlePoint2Mapbox", ( function ( e ) {
          return e.hasOwnProperty( "lat" ) && e.hasOwnProperty( "lng" ) ? e : {
            lat: e.latitude || 0,
            lng: e.longitude || 0
          }
        } ) ), e.state = {
          map: null,
          fit_to_bounds: !1,
          loaded: !1,
          mapboxgl: null
        }, e.mapRef = Object( g.createRef )(), e.debouncedSizeMap = Object( w.debounce )( e.sizeMap, 250 ), e
      }
      return h()( t, e ), c()( t, [ {
        key: "render",
        value: function () {
          var e = this,
            t = this.props,
            n = t.points,
            r = t.admin,
            o = t.children,
            a = t.markerColor,
            i = this.state,
            l = i.map,
            c = i.activeMarker,
            s = i.mapboxgl,
            u = this.onMarkerClick,
            p = this.deleteActiveMarker,
            f = this.updateActiveMarker,
            d = Object( w.get )( c, "props.point" ) || {},
            m = d.title,
            b = d.caption,
            h = g.Children.map( o, ( function ( e ) {
              if ( "AddPoint" === Object( w.get )( e, "props.tagName" ) ) return e
            } ) ),
            v = l && s && n.map( ( function ( e, t ) {
              return Object( g.createElement )( O, {
                key: t,
                point: e,
                index: t,
                map: l,
                mapboxgl: s,
                markerColor: a,
                onClick: u
              } )
            } ) ),
            y = s && Object( g.createElement )( C, {
              activeMarker: c,
              map: l,
              mapboxgl: s,
              unsetActiveMarker: function () {
                return e.setState( {
                  activeMarker: null
                } )
              }
            }, c && r && Object( g.createElement )( g.Fragment, null, Object( g.createElement )( j.TextControl, {
              label: Object( k.__ )( "Marker Title", "jetpack" ),
              value: m,
              onChange: function ( e ) {
                return f( {
                  title: e
                } )
              }
            } ), Object( g.createElement )( j.TextareaControl, {
              className: "wp-block-jetpack-map__marker-caption",
              label: Object( k.__ )( "Marker Caption", "jetpack" ),
              value: b,
              rows: "2",
              tag: "textarea",
              onChange: function ( e ) {
                return f( {
                  caption: e
                } )
              }
            } ), Object( g.createElement )( j.Button, {
              onClick: p,
              className: "wp-block-jetpack-map__delete-btn"
            }, Object( g.createElement )( j.Dashicon, {
              icon: "trash",
              size: "15"
            } ), " ", Object( k.__ )( "Delete Marker", "jetpack" ) ) ), c && !r && Object( g.createElement )( g.Fragment, null, Object( g.createElement )( "h3", null, m ), Object( g.createElement )( "p", null, b ) ) );
          return Object( g.createElement )( g.Fragment, null, Object( g.createElement )( "div", {
            className: "wp-block-jetpack-map__gm-container",
            ref: this.mapRef
          }, v ), y, h )
        }
      }, {
        key: "componentDidMount",
        value: function () {
          this.props.apiKey && this.loadMapLibraries()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.debouncedSizeMap.cancel(), window.removeEventListener( "resize", this.debouncedSizeMap )
        }
      }, {
        key: "componentDidUpdate",
        value: function ( e ) {
          var t = this.props,
            n = t.admin,
            r = t.apiKey,
            o = t.children,
            a = t.points,
            i = t.mapStyle,
            l = t.mapDetails,
            c = t.scrollToZoom,
            s = t.showFullscreenButton,
            u = this.state,
            p = u.map,
            f = u.fullscreenControl;
          r && r.length > 0 && r !== e.apiKey && this.loadMapLibraries(), o !== e.children && !1 !== o && this.clearCurrentMarker(), a !== e.points && this.setBoundsByMarkers(), a.length !== e.points.length && this.clearCurrentMarker(), i === e.mapStyle && l === e.mapDetails || p.setStyle( this.getMapStyle() ), c !== e.scrollToZoom && ( c ? p.scrollZoom.enable() : p.scrollZoom.disable() ), s !== e.showFullscreenButton && ( s ? ( p.addControl( f ), n && f._fullscreenButton && ( f._fullscreenButton.disabled = !0 ) ) : p.removeControl( f ) )
        }
      }, {
        key: "getMapStyle",
        value: function () {
          var e = this.props;
          return function ( e, t ) {
            return {
              default: {
                details: "mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",
                no_details: "mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"
              },
              black_and_white: {
                details: "mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",
                no_details: "mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"
              },
              satellite: {
                details: "mapbox://styles/mapbox/satellite-streets-v10",
                no_details: "mapbox://styles/mapbox/satellite-v9"
              },
              terrain: {
                details: "mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",
                no_details: "mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"
              }
            } [ e ][ t ? "details" : "no_details" ]
          }( e.mapStyle, e.mapDetails )
        }
      }, {
        key: "getMapType",
        value: function () {
          switch ( this.props.mapStyle ) {
            case "satellite":
              return "HYBRID";
            case "terrain":
              return "TERRAIN";
            case "black_and_white":
            default:
              return "ROADMAP"
          }
        }
      }, {
        key: "loadMapLibraries",
        value: function () {
          var e = this,
            t = this.props.apiKey;
          Promise.all( [ n.e( 29 ).then( n.t.bind( null, 466, 7 ) ), n.e( 29 ).then( n.t.bind( null, 467, 7 ) ) ] ).then( ( function ( n ) {
            var r = o()( n, 1 )[ 0 ].default;
            r.accessToken = t, e.setState( {
              mapboxgl: r
            }, e.scriptsLoaded )
          } ) )
        }
      }, {
        key: "initMap",
        value: function ( e ) {
          var t = this,
            n = this.state.mapboxgl,
            r = this.props,
            o = r.zoom,
            a = r.onMapLoaded,
            i = r.onError,
            l = r.scrollToZoom,
            c = r.showFullscreenButton,
            s = r.admin,
            u = null;
          try {
            u = new n.Map( {
              container: this.mapRef.current,
              style: this.getMapStyle(),
              center: this.googlePoint2Mapbox( e ),
              zoom: parseInt( o, 10 ),
              pitchWithRotate: !1,
              attributionControl: !1,
              dragRotate: !1
            } )
          } catch ( d ) {
            return void i( "mapbox_error", d.message )
          }
          l || u.scrollZoom.disable();
          var p = new n.FullscreenControl;
          u.on( "error", ( function ( e ) {
            i( "mapbox_error", e.error.message )
          } ) );
          var f = new n.NavigationControl( {
            showCompass: !1,
            showZoom: !0
          } );
          u.on( "zoomend", ( function () {
            t.props.onSetZoom( u.getZoom() )
          } ) ), u.on( "moveend", ( function () {
            var e = t.props,
              n = e.onSetMapCenter;
            e.points.length < 1 && n( u.getCenter() )
          } ) ), u.getCanvas().addEventListener( "click", this.onMapClick ), this.setState( {
            map: u,
            zoomControl: f,
            fullscreenControl: p
          }, ( function () {
            t.debouncedSizeMap(), u.addControl( f ), c && ( u.addControl( p ), s && p._fullscreenButton && ( p._fullscreenButton.disabled = !0 ) ), t.mapRef.current.addEventListener( "alignmentChanged", t.debouncedSizeMap ), u.resize(), a(), t.setState( {
              loaded: !0
            } ), window.addEventListener( "resize", t.debouncedSizeMap )
          } ) )
        }
      } ] ), t
    }( g.Component );
    _.defaultProps = {
      points: [],
      mapStyle: "default",
      zoom: 13,
      onSetZoom: function () {},
      onSetMapCenter: function () {},
      onMapLoaded: function () {},
      onMarkerClick: function () {},
      onError: function () {},
      markerColor: "red",
      apiKey: null,
      mapCenter: {}
    };
    t.a = _
  },
  124: function ( e, t, n ) {
    var r = n( 76 );
    e.exports = function ( e ) {
      if ( Array.isArray( e ) ) return r( e )
    }
  },
  125: function ( e, t ) {
    e.exports = function ( e ) {
      if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
    }
  },
  126: function ( e, t ) {
    e.exports = function () {
      throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
    }
  },
  128: function ( e, t ) {
    function n( t ) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function ( e ) {
        return typeof e
      } : e.exports = n = function ( e ) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, n( t )
    }
    e.exports = n
  },
  129: function ( e, t ) {
    function n( t, r ) {
      return e.exports = n = Object.setPrototypeOf || function ( e, t ) {
        return e.__proto__ = t, e
      }, n( t, r )
    }
    e.exports = n
  },
  13: function ( e, t, n ) {
    var r = n( 128 ),
      o = n( 6 );
    e.exports = function ( e, t ) {
      return !t || "object" !== r( t ) && "function" != typeof t ? o( e ) : t
    }
  },
  14: function ( e, t ) {
    function n( t ) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
        return e.__proto__ || Object.getPrototypeOf( e )
      }, n( t )
    }
    e.exports = n
  },
  15: function ( e, t, n ) {
    var r = n( 129 );
    e.exports = function ( e, t ) {
      if ( "function" != typeof t && null !== t ) throw new TypeError( "Super expression must either be null or a function" );
      e.prototype = Object.create( t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      } ), t && r( e, t )
    }
  },
  16: function ( e, t ) {
    function n( e, t ) {
      for ( var n = 0; n < t.length; n++ ) {
        var r = t[ n ];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && ( r.writable = !0 ), Object.defineProperty( e, r.key, r )
      }
    }
    e.exports = function ( e, t, r ) {
      return t && n( e.prototype, t ), r && n( e, r ), e
    }
  },
  188: function ( e, t, n ) {},
  189: function ( e, t, n ) {},
  2: function ( e, t ) {
    ! function () {
      e.exports = this.wp.components
    }()
  },
  21: function ( e, t, n ) {
    var r = n( 124 ),
      o = n( 125 ),
      a = n( 77 ),
      i = n( 126 );
    e.exports = function ( e ) {
      return r( e ) || o( e ) || a( e ) || i()
    }
  },
  3: function ( e, t ) {
    ! function () {
      e.exports = this.lodash
    }()
  },
  39: function ( e, t, n ) {
    "use strict";
    n.d( t, "a", ( function () {
      return d
    } ) );
    var r = n( 0 ),
      o = n( 1 ),
      a = n( 116 ),
      i = n.n( a ),
      l = n( 117 ),
      c = n.n( l ),
      s = n( 118 ),
      u = n.n( s ),
      p = n( 119 ),
      f = n.n( p ),
      d = {
        name: "map",
        prefix: "jetpack",
        title: Object( o.__ )( "Map", "jetpack" ),
        icon: Object( r.createElement )( "svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          role: "img",
          "aria-hidden": "true",
          focusable: "false"
        }, Object( r.createElement )( "path", {
          fill: "none",
          d: "M0 0h24v24H0V0z"
        } ), Object( r.createElement )( "path", {
          d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"
        } ) ),
        category: "embed",
        keywords: [ Object( o._x )( "maps", "block search term", "jetpack" ), Object( o._x )( "location", "block search term", "jetpack" ), Object( o._x )( "navigation", "block search term", "jetpack" ) ],
        description: Object( o.__ )( "Add an interactive map showing one or more locations.", "jetpack" ),
        attributes: {
          align: {
            type: "string"
          },
          points: {
            type: "array",
            default: []
          },
          mapDetails: {
            type: "boolean",
            default: !0
          },
          zoom: {
            type: "integer",
            default: 13
          },
          mapCenter: {
            type: "object",
            default: {
              longitude: -122.41941550000001,
              latitude: 37.7749295
            }
          },
          markerColor: {
            type: "string",
            default: "red"
          },
          preview: {
            type: "boolean",
            default: !1
          },
          scrollToZoom: {
            type: "boolean",
            default: !1
          },
          mapHeight: {
            type: "integer"
          },
          showFullscreenButton: {
            type: "boolean",
            default: !0
          }
        },
        supports: {
          defaultStylePicker: !1,
          html: !1
        },
        styles: [ {
          name: "default",
          label: Object( o.__ )( "Basic", "jetpack" ),
          preview: i.a,
          isDefault: !0
        }, {
          name: "black_and_white",
          label: Object( o.__ )( "Black and white", "jetpack" ),
          preview: c.a
        }, {
          name: "satellite",
          label: Object( o.__ )( "Satellite", "jetpack" ),
          preview: u.a
        }, {
          name: "terrain",
          label: Object( o.__ )( "Terrain", "jetpack" ),
          preview: f.a
        } ],
        validAlignments: [ "center", "wide", "full" ],
        markerIcon: Object( r.createElement )( "svg", {
          width: "14",
          height: "20",
          viewBox: "0 0 14 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, Object( r.createElement )( "g", {
          id: "Page-1",
          fill: "none",
          fillRule: "evenodd"
        }, Object( r.createElement )( "g", {
          id: "outline-add_location-24px",
          transform: "translate(-5 -2)"
        }, Object( r.createElement )( "polygon", {
          id: "Shape",
          points: "0 0 24 0 24 24 0 24"
        } ), Object( r.createElement )( "path", {
          d: "M12,2 C8.14,2 5,5.14 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.14 15.86,2 12,2 Z M7,9 C7,6.24 9.24,4 12,4 C14.76,4 17,6.24 17,9 C17,11.88 14.12,16.19 12,18.88 C9.92,16.21 7,11.85 7,9 Z M13,6 L11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 Z",
          id: "Shape",
          fill: "#000",
          fillRule: "nonzero"
        } ) ) ) ),
        example: {
          attributes: {
            preview: !0
          }
        }
      }
  },
  4: function ( e, t ) {
    e.exports = function ( e, t, n ) {
      return t in e ? Object.defineProperty( e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      } ) : e[ t ] = n, e
    }
  },
  43: function ( e, t, n ) {
    "use strict";
    n.d( t, "a", ( function () {
      return i
    } ) );
    var r = n( 82 ),
      o = n.n( r ),
      a = n( 3 );

    function i( e, t ) {
      var n = function ( e, t ) {
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for ( var l, c = new o.a( t ).values()[ Symbol.iterator ](); !( n = ( l = c.next() ).done ); n = !0 ) {
            var s = l.value;
            if ( -1 !== s.indexOf( "is-style-" ) ) {
              var u = s.substring( 9 ),
                p = Object( a.find )( e, {
                  name: u
                } );
              if ( p ) return p
            }
          }
        } catch ( f ) {
          r = !0, i = f
        } finally {
          try {
            n || null == c.return || c.return()
          } finally {
            if ( r ) throw i
          }
        }
        return Object( a.find )( e, "isDefault" )
      }( e, t );
      return n ? n.name : null
    }
  },
  433: function ( e, t, n ) {
    n( 53 ), e.exports = n( 465 )
  },
  465: function ( e, t, n ) {
    "use strict";
    n.r( t );
    var r = n( 7 ),
      o = n.n( r ),
      a = n( 55 ),
      i = n.n( a ),
      l = ( n( 189 ), n( 121 ) ),
      c = n( 39 ),
      s = n( 21 ),
      u = n.n( s ),
      p = n( 12 ),
      f = n.n( p ),
      d = n( 16 ),
      m = n.n( d ),
      b = n( 3 ),
      h = n( 0 ),
      v = function () {
        function e() {
          f()( this, e )
        }
        return m()( e, [ {
          key: "blockIterator",
          value: function ( e, t ) {
            var n = this;
            t.forEach( ( function ( t ) {
              n.initializeFrontendReactBlocks( t.component, t.options, e )
            } ) )
          }
        }, {
          key: "initializeFrontendReactBlocks",
          value: function ( e ) {
            var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {},
              n = arguments.length > 2 ? arguments[ 2 ] : void 0,
              r = t.settings,
              o = r.attributes,
              a = r.name,
              i = r.prefix,
              l = t.selector,
              c = i && i.length ? "".concat( i, "/" ).concat( a ) : a,
              s = ".wp-block-".concat( c.replace( "/", "-" ) ),
              u = n.querySelectorAll( s ),
              p = !0,
              f = !1,
              d = void 0;
            try {
              for ( var m, v = u[ Symbol.iterator ](); !( p = ( m = v.next() ).done ); p = !0 ) {
                var y = m.value;
                if ( "true" !== y.getAttribute( "data-jetpack-block-initialized" ) ) {
                  var g = this.extractAttributesFromContainer( y, o );
                  Object( b.assign )( g, t.props );
                  var k = this.extractChildrenFromContainer( y ),
                    w = Object( h.createElement )( e, g, k );
                  Object( h.render )( w, l ? y.querySelector( l ) : y ), y.setAttribute( "data-jetpack-block-initialized", !0 )
                }
              }
            } catch ( j ) {
              f = !0, d = j
            } finally {
              try {
                p || null == v.return || v.return()
              } finally {
                if ( f ) throw d
              }
            }
          }
        }, {
          key: "extractAttributesFromContainer",
          value: function ( e, t ) {
            var n = {};
            for ( var r in t ) {
              var o = t[ r ],
                a = "data-" + Object( b.kebabCase )( r );
              if ( n[ r ] = e.getAttribute( a ), "boolean" === o.type && ( n[ r ] = "false" !== n[ r ] && !!n[ r ] ), "array" === o.type || "object" === o.type ) try {
                n[ r ] = JSON.parse( n[ r ] )
              } catch ( i ) {
                n[ r ] = null
              }
            }
            return n
          }
        }, {
          key: "extractChildrenFromContainer",
          value: function ( e ) {
            return u()( e.childNodes ).map( ( function ( e ) {
              for ( var t = {}, n = 0; n < e.attributes.length; n++ ) {
                var r = e.attributes[ n ];
                t[ r.nodeName ] = r.nodeValue
              }
              return t.dangerouslySetInnerHTML = {
                __html: e.innerHTML
              }, Object( h.createElement )( e.tagName.toLowerCase(), t )
            } ) )
          }
        } ] ), e
      }(),
      y = n( 43 );
    i()( ( function () {
      ( new v ).blockIterator( document, [ {
        component: l.a,
        options: {
          settings: o()( {}, c.a, {
            attributes: o()( {}, c.a.attributes, {
              mapStyle: Object( y.a )( c.a.styles, c.a.className ),
              apiKey: {
                type: "string",
                default: ""
              }
            } )
          } )
        }
      } ] )
    } ) )
  },
  48: function ( e, t, n ) {
    "object" == typeof window && window.Jetpack_Block_Assets_Base_Url && window.Jetpack_Block_Assets_Base_Url.url && ( n.p = window.Jetpack_Block_Assets_Base_Url.url )
  },
  53: function ( e, t, n ) {
    "use strict";
    n.r( t );
    n( 48 )
  },
  55: function ( e, t ) {
    ! function () {
      e.exports = this.wp.domReady
    }()
  },
  6: function ( e, t ) {
    e.exports = function ( e ) {
      if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
      return e
    }
  },
  7: function ( e, t, n ) {
    var r = n( 4 );

    function o( e, t ) {
      var n = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var r = Object.getOwnPropertySymbols( e );
        t && ( r = r.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), n.push.apply( n, r )
      }
      return n
    }
    e.exports = function ( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var n = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? o( Object( n ), !0 ).forEach( ( function ( t ) {
          r( e, t, n[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( n ) ) : o( Object( n ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( n, t ) )
        } ) )
      }
      return e
    }
  },
  76: function ( e, t ) {
    e.exports = function ( e, t ) {
      ( null == t || t > e.length ) && ( t = e.length );
      for ( var n = 0, r = new Array( t ); n < t; n++ ) r[ n ] = e[ n ];
      return r
    }
  },
  77: function ( e, t, n ) {
    var r = n( 76 );
    e.exports = function ( e, t ) {
      if ( e ) {
        if ( "string" == typeof e ) return r( e, t );
        var n = Object.prototype.toString.call( e ).slice( 8, -1 );
        return "Object" === n && e.constructor && ( n = e.constructor.name ), "Map" === n || "Set" === n ? Array.from( n ) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( n ) ? r( e, t ) : void 0
      }
    }
  },
  82: function ( e, t ) {
    ! function () {
      e.exports = this.wp.tokenList
    }()
  },
  88: function ( e, t ) {
    e.exports = function ( e ) {
      if ( Array.isArray( e ) ) return e
    }
  },
  89: function ( e, t ) {
    e.exports = function ( e, t ) {
      if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) {
        var n = [],
          r = !0,
          o = !1,
          a = void 0;
        try {
          for ( var i, l = e[ Symbol.iterator ](); !( r = ( i = l.next() ).done ) && ( n.push( i.value ), !t || n.length !== t ); r = !0 );
        } catch ( c ) {
          o = !0, a = c
        } finally {
          try {
            r || null == l.return || l.return()
          } finally {
            if ( o ) throw a
          }
        }
        return n
      }
    }
  },
  9: function ( e, t, n ) {
    var r = n( 88 ),
      o = n( 89 ),
      a = n( 77 ),
      i = n( 90 );
    e.exports = function ( e, t ) {
      return r( e ) || o( e, t ) || a( e, t ) || i()
    }
  },
  90: function ( e, t ) {
    e.exports = function () {
      throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
    }
  }
} ) );;
/* global jetpackCarouselStrings, DocumentTouch */

// @start-hide-in-jetpack
if ( typeof wpcom === 'undefined' ) {
  var wpcom = {};
}
wpcom.carousel = ( function ( /*$*/) {
  var prebuilt_widths = jetpackCarouselStrings.widths;
  var pageviews_stats_args = jetpackCarouselStrings.stats_query_args;

  var findFirstLargeEnoughWidth = function ( original_w, original_h, dest_w, dest_h ) {
    var inverse_ratio = original_h / original_w;

    for ( var i = 0; i < prebuilt_widths.length; ++i ) {
      if ( prebuilt_widths[ i ] >= dest_w || prebuilt_widths[ i ] * inverse_ratio >= dest_h ) {
        return prebuilt_widths[ i ];
      }
    }

    return original_w;
  };

  var removeResizeFromImageURL = function ( url ) {
    return removeArgFromURL( url, 'resize' );
  };

  var removeArgFromURL = function ( url, arg ) {
    var re = new RegExp( '[\\?&]' + arg + '(=[^?&]+)?' );
    if ( url.match( re ) ) {
      return url.replace( re, '' );
    }
    return url;
  };

  var addWidthToImageURL = function ( url, width ) {
    width = parseInt( width, 10 );
    // Give devices with a higher devicePixelRatio higher-res images (Retina display = 2, Android phones = 1.5, etc)
    if ( 'undefined' !== typeof window.devicePixelRatio && window.devicePixelRatio > 1 ) {
      width = Math.round( width * window.devicePixelRatio );
    }
    url = addArgToURL( url, 'w', width );
    url = addArgToURL( url, 'h', '' );
    return url;
  };

  var addArgToURL = function ( url, arg, value ) {
    var re = new RegExp( arg + '=[^?&]+' );
    if ( url.match( re ) ) {
      return url.replace( re, arg + '=' + value );
    } else {
      var divider = url.indexOf( '?' ) !== -1 ? '&' : '?';
      return url + divider + arg + '=' + value;
    }
  };

  var stat = function ( names ) {
    if ( typeof names !== 'string' ) {
      names = names.join( ',' );
    }

    new Image().src = window.location.protocol +
      '//pixel.wp.com/g.gif?v=wpcom-no-pv' +
      '&x_carousel=' + names +
      '&baba=' + Math.random();
  };

  var pageview = function ( post_id ) {
    new Image().src = window.location.protocol +
      '//pixel.wp.com/g.gif?host=' + encodeURIComponent( window.location.host ) +
      '&ref=' + encodeURIComponent( document.referrer ) +
      '&rand=' + Math.random() +
      '&' + pageviews_stats_args +
      '&post=' + encodeURIComponent( post_id );
  };


  return {
    findFirstLargeEnoughWidth: findFirstLargeEnoughWidth,
    removeResizeFromImageURL: removeResizeFromImageURL,
    addWidthToImageURL: addWidthToImageURL,
    stat: stat,
    pageview: pageview
  };

} )( jQuery );
// @end-hide-in-jetpack
jQuery( document ).ready( function ( $ ) {
  // gallery faded layer and container elements
  var overlay,
    gallery,
    container,
    info,
    transitionBegin,
    caption,
    resizeTimeout,
    photo_info,
    commentInterval,
    lastSelectedSlide,
    screenPadding,
    originalOverflow = $( 'body' ).css( 'overflow' ),
    originalHOverflow = $( 'html' ).css( 'overflow' ),
    proportion = 85,
    last_known_location_hash = '',
    imageMeta,
    titleAndDescription,
    commentForm,
    leftColWrapper,
    scrollPos;

  var keyListener = function ( e ) {
    switch ( e.which ) {
      case 38: // up
        e.preventDefault();
        container.scrollTop( container.scrollTop() - 100 );
        break;
      case 40: // down
        e.preventDefault();
        container.scrollTop( container.scrollTop() + 100 );
        break;
      case 39: // right
        e.preventDefault();
        gallery.jp_carousel( 'next' );
        break;
      case 37: // left
      case 8: // backspace
        e.preventDefault();
        gallery.jp_carousel( 'previous' );
        break;
      case 27: // escape
        e.preventDefault();
        container.jp_carousel( 'close' );
        break;
      default:
        // making jslint happy
        break;
    }
  };

  var calculatePadding = function () {
    var baseScreenPadding = 110;
    screenPadding = baseScreenPadding;

    if ( window.innerWidth <= 760 ) {
      screenPadding = Math.round( ( window.innerWidth / 760 ) * baseScreenPadding );
      var isTouch = 'ontouchstart' in window || ( window.DocumentTouch && document instanceof DocumentTouch );

      if ( screenPadding < 40 && isTouch ) {
        screenPadding = 0;
      }
    }
  }

  var resizeListener = function ( /*e*/) {
    // Don't animate if user prefers reduced motion.
    var shouldAnimate = window.matchMedia && !window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

    clearTimeout( resizeTimeout );
    resizeTimeout = setTimeout( function () {
      calculatePadding();
      gallery.jp_carousel( 'slides' ).jp_carousel( 'fitSlide', shouldAnimate );
      gallery.jp_carousel( 'updateSlidePositions', shouldAnimate );
      gallery.jp_carousel( 'fitMeta', shouldAnimate );
    }, 200 );
  };

  var prepareGallery = function ( /*dataCarouselExtra*/) {
    if ( !overlay ) {
      container = $( '.jp-carousel-wrap' );
      overlay = container.find( '.jp-carousel-overlay' );

      gallery = container.find( '.jp-carousel' );
      caption = container.find( '.jp-carousel-caption' );
      photo_info = container.find( '.jp-carousel-photo-info' );
      info = container.find( '.jp-carousel-info' );
      commentForm = container.find( '.jp-carousel-comment-form-container' );
      commentsLoading = container.find( '.jp-carousel-comments-loading' );
      imageMeta = container.find( '.jp-carousel-image-meta' );
      leftColWrapper = container.find( '.jp-carousel-left-column-wrapper' );
      titleAndDescription = container.find( '.jp-carousel-titleanddesc' );
      buttons = container.find( '.jp-carousel-buttons' );

      var nextButton = container.find( '.jp-carousel-next-button' );
      var previousButton = container.find( '.jp-carousel-previous-button' );

      calculatePadding();
      gallery.jp_carousel( 'fitMeta', false );

      container.click( function ( e ) {
          var target = $( e.target ),
            wrap = target.parents( 'div.jp-carousel-wrap' ),
            data = wrap.data( 'carousel-extra' ),
            slide = wrap.find( 'div.selected' ),
            attachment_id = slide.data( 'attachment-id' );
          data = data || [];

          if ( target.is( gallery ) || target.parents().add( target ).is( container.find( '.jp-carousel-close-hint' ) ) ) {
            if ( !window.matchMedia( '(max-device-width: 760px)' ).matches ) {
              container.jp_carousel( 'close' );
            } else {
              if ( target.parents().add( target ).is( container.find( '.jp-carousel-close-hint' ) ) ) {
                container.jp_carousel( 'close' );
              }

              if ( e.pageX <= 70 ) {
                container.jp_carousel( 'previous' );
              }
              if ( $( window ).width() - e.pageX <= 70 ) {
                container.jp_carousel( 'next' );
              }
            }
            // @start-hide-in-jetpack
          } else if ( target.hasClass( 'jp-carousel-reblog' ) ) {
            e.preventDefault();
            e.stopPropagation();
            if ( !target.hasClass( 'reblogged' ) ) {
              target.jp_carousel( 'show_reblog_box' );
              wpcom.carousel.stat( 'reblog_show_box' );
            }
          } else if ( target.parents( '#carousel-reblog-box' ).length ) {
            if ( target.is( 'a.cancel' ) ) {
              e.preventDefault();
              e.stopPropagation();
              target.jp_carousel( 'hide_reblog_box' );
              wpcom.carousel.stat( 'reblog_cancel' );
            } else if ( target.is( 'input[type="submit"]' ) ) {
              e.preventDefault();
              e.stopPropagation();

              var note = $( '#carousel-reblog-box textarea' ).val();
              if ( jetpackCarouselStrings.reblog_add_thoughts === note ) {
                note = '';
              }

              $( '#carousel-reblog-submit' ).val( jetpackCarouselStrings.reblogging );
              $( '#carousel-reblog-submit' ).prop( 'disabled', true );
              $( '#carousel-reblog-box div.submit span.canceltext' ).show();

              $.post( jetpackCarouselStrings.ajaxurl, {
                  'action': 'post_reblog',
                  'reblog_source': 'carousel',
                  'original_blog_id': $( '#carousel-reblog-box input#carousel-reblog-blog-id' ).val(),
                  'original_post_id': $( '.jp-carousel div.selected' ).data( 'attachment-id' ),
                  'blog_id': $( '#carousel-reblog-box select' ).val(),
                  'blog_url': $( '#carousel-reblog-box input#carousel-reblog-blog-url' ).val(),
                  'blog_title': $( '#carousel-reblog-box input#carousel-reblog-blog-title' ).val(),
                  'post_url': $( '#carousel-reblog-box input#carousel-reblog-post-url' ).val(),
                  'post_title': slide.data( 'caption' ) || $( '#carousel-reblog-box input#carousel-reblog-post-title' ).val(),
                  'note': note,
                  '_wpnonce': $( '#carousel-reblog-box #_wpnonce' ).val()
                },
                function ( /*result*/) {
                  $( '#carousel-reblog-box' ).css( {
                    'height': $( '#carousel-reblog-box' ).height() + 'px'
                  } ).slideUp( 'fast' );
                  $( 'a.jp-carousel-reblog' ).html( jetpackCarouselStrings.reblogged ).removeClass( 'reblog' ).addClass( 'reblogged' );
                  $( '#carousel-reblog-box div.submit span.canceltext' ).hide();
                  $( '#carousel-reblog-submit' ).val( jetpackCarouselStrings.post_reblog );
                  $( 'div.jp-carousel-info' ).children().not( '#carousel-reblog-box' ).fadeIn( 'fast' );
                  slide.data( 'reblogged', 1 );
                  $( 'div.gallery' ).find( 'img[data-attachment-id="' + slide.data( 'attachment-id' ) + '"]' ).data( 'reblogged', 1 );


                }, 'json' );
              wpcom.carousel.stat( 'reblog_submit' );
            }
          } else if ( target.hasClass( 'jp-carousel-image-download' ) ) {
            wpcom.carousel.stat( 'download_original_click' );
            // @end-hide-in-jetpack
          } else if ( target.hasClass( 'jp-carousel-commentlink' ) ) {
            e.preventDefault();
            e.stopPropagation();
            $( window ).unbind( 'keydown', keyListener );
            container.animate( {
              scrollTop: parseInt( info.position()[ 'top' ], 10 )
            }, 'fast' );
            $( '#jp-carousel-comment-form-submit-and-info-wrapper' ).slideDown( 'fast' );
            $( '#jp-carousel-comment-form-comment-field' ).focus();
          } else if ( target.hasClass( 'jp-carousel-comment-login' ) ) {
            var url = jetpackCarouselStrings.login_url + '%23jp-carousel-' + attachment_id;

            window.location.href = url;
          } else if ( target.parents( '#jp-carousel-comment-form-container' ).length ) {
            var textarea = $( '#jp-carousel-comment-form-comment-field' )
              .blur( function () {
                $( window ).bind( 'keydown', keyListener );
              } )
              .focus( function () {
                $( window ).unbind( 'keydown', keyListener );
              } );

            var emailField = $( '#jp-carousel-comment-form-email-field' )
              .blur( function () {
                $( window ).bind( 'keydown', keyListener );
              } )
              .focus( function () {
                $( window ).unbind( 'keydown', keyListener );
              } );

            var authorField = $( '#jp-carousel-comment-form-author-field' )
              .blur( function () {
                $( window ).bind( 'keydown', keyListener );
              } )
              .focus( function () {
                $( window ).unbind( 'keydown', keyListener );
              } );

            var urlField = $( '#jp-carousel-comment-form-url-field' )
              .blur( function () {
                $( window ).bind( 'keydown', keyListener );
              } )
              .focus( function () {
                $( window ).unbind( 'keydown', keyListener );
              } );

            if ( textarea && textarea.attr( 'id' ) === target.attr( 'id' ) ) {
              // For first page load
              $( window ).unbind( 'keydown', keyListener );
              $( '#jp-carousel-comment-form-submit-and-info-wrapper' ).slideDown( 'fast' );
            } else if ( target.is( 'input[type="submit"]' ) ) {
              e.preventDefault();
              e.stopPropagation();

              $( '#jp-carousel-comment-form-spinner' ).show();

              var ajaxData = {
                action: 'post_attachment_comment',
                nonce: jetpackCarouselStrings.nonce,
                blog_id: data[ 'blog_id' ],
                id: attachment_id,
                comment: textarea.val(),
              };

              if ( !ajaxData[ 'comment' ].length ) {
                gallery.jp_carousel( 'postCommentError', {
                  field: 'jp-carousel-comment-form-comment-field',
                  error: jetpackCarouselStrings.no_comment_text,
                } );
                return;
              }

              if ( 1 !== Number( jetpackCarouselStrings.is_logged_in ) ) {
                ajaxData[ 'email' ] = emailField.val();
                ajaxData[ 'author' ] = authorField.val();
                ajaxData[ 'url' ] = urlField.val();

                if ( 1 === Number( jetpackCarouselStrings.require_name_email ) ) {
                  if ( !ajaxData[ 'email' ].length || !ajaxData[ 'email' ].match( '@' ) ) {
                    gallery.jp_carousel( 'postCommentError', {
                      field: 'jp-carousel-comment-form-email-field',
                      error: jetpackCarouselStrings.no_comment_email,
                    } );
                    return;
                  } else if ( !ajaxData[ 'author' ].length ) {
                    gallery.jp_carousel( 'postCommentError', {
                      field: 'jp-carousel-comment-form-author-field',
                      error: jetpackCarouselStrings.no_comment_author,
                    } );
                    return;
                  }
                }
              }

              $.ajax( {
                type: 'POST',
                url: jetpackCarouselStrings.ajaxurl,
                data: ajaxData,
                dataType: 'json',
                success: function ( response /*, status, xhr*/ ) {
                  if ( 'approved' === response.comment_status ) {
                    $( '#jp-carousel-comment-post-results' )
                      .slideUp( 'fast' )
                      .html(
                        '<span class="jp-carousel-comment-post-success">' +
                        jetpackCarouselStrings.comment_approved +
                        '</span>'
                      )
                      .slideDown( 'fast' );
                  } else if ( 'unapproved' === response.comment_status ) {
                    $( '#jp-carousel-comment-post-results' )
                      .slideUp( 'fast' )
                      .html(
                        '<span class="jp-carousel-comment-post-success">' +
                        jetpackCarouselStrings.comment_unapproved +
                        '</span>'
                      )
                      .slideDown( 'fast' );
                  } else {
                    // 'deleted', 'spam', false
                    $( '#jp-carousel-comment-post-results' )
                      .slideUp( 'fast' )
                      .html(
                        '<span class="jp-carousel-comment-post-error">' +
                        jetpackCarouselStrings.comment_post_error +
                        '</span>'
                      )
                      .slideDown( 'fast' );
                  }
                  gallery.jp_carousel( 'clearCommentTextAreaValue' );
                  gallery.jp_carousel( 'getComments', {
                    attachment_id: attachment_id,
                    offset: 0,
                    clear: true,
                  } );
                  $( '#jp-carousel-comment-form-button-submit' ).val(
                    jetpackCarouselStrings.post_comment
                  );
                  $( '#jp-carousel-comment-form-spinner' ).hide();
                },
                error: function ( /*xhr, status, error*/) {
                  // TODO: Add error handling and display here
                  gallery.jp_carousel( 'postCommentError', {
                    field: 'jp-carousel-comment-form-comment-field',
                    error: jetpackCarouselStrings.comment_post_error,
                  } );
                  return;
                },
              } );
            }
          } else if ( !target.parents( '.jp-carousel-info' ).length ) {
            if ( window.matchMedia( '(max-device-width: 760px)' ).matches ) {
              if ( e.pageX <= 70 ) {
                container.jp_carousel( 'previous' );
              }
              if ( $( window ).width() - e.pageX <= 70 ) {
                container.jp_carousel( 'next' );
              }
            } else {
              container.jp_carousel( 'next' );
            }
          }
        } )
        .bind( 'jp_carousel.afterOpen', function () {
          $( window ).bind( 'keydown', keyListener );
          $( window ).bind( 'resize', resizeListener );
          gallery.opened = true;

          resizeListener();
        } )
        .bind( 'jp_carousel.beforeClose', function () {
          var scroll = $( window ).scrollTop();

          $( window ).unbind( 'keydown', keyListener );
          $( window ).unbind( 'resize', resizeListener );
          $( window ).scrollTop( scroll );
          $( '.jp-carousel-previous-button' ).hide();
          $( '.jp-carousel-next-button' ).hide();
          // Set height to original value
          // Fix some themes where closing carousel brings view back to top
          $( 'html' ).css( 'height', '' );
          gallery.jp_carousel( 'hide_reblog_box' ); // @hide-in-jetpack
        } )
        .bind( 'jp_carousel.afterClose', function () {
          if ( window.location.hash && history.back ) {
            history.back();
          }
          last_known_location_hash = '';
          gallery.opened = false;
        } )
        .on( 'transitionend.jp-carousel ', '.jp-carousel-slide', function ( e ) {
          // If the movement transitions take more than twice the allotted time, disable them.
          // There is some wiggle room in the 2x, since some of that time is taken up in
          // JavaScript, setting up the transition and calling the events.
          if ( 'transform' === e.originalEvent.propertyName ) {
            var transitionMultiplier =
              ( Date.now() - transitionBegin ) / 1000 / e.originalEvent.elapsedTime;

            container.off( 'transitionend.jp-carousel' );

            if ( transitionMultiplier >= 2 ) {
              $( '.jp-carousel-transitions' ).removeClass( 'jp-carousel-transitions' );
            }
          }
        } );

      container.touchwipe( {
        wipeLeft: function ( e ) {
          e.preventDefault();
          gallery.jp_carousel( 'next' );
        },
        wipeRight: function ( e ) {
          e.preventDefault();
          gallery.jp_carousel( 'previous' );
        },
        preventDefaultEvents: false,
      } );

      nextButton.add( previousButton ).click( function ( e ) {
        e.preventDefault();
        e.stopPropagation();
        if ( nextButton.is( this ) ) {
          gallery.jp_carousel( 'next' );
        } else {
          gallery.jp_carousel( 'previous' );
        }
      } );
    }
  };

  var processSingleImageGallery = function () {
    // process links that contain img tag with attribute data-attachment-id
    $( 'a img[data-attachment-id]' ).each( function () {
      var container = $( this ).parent();

      // skip if image was already added to gallery by shortcode
      if ( container.parent( '.gallery-icon' ).length ) {
        return;
      }

      // skip if the container is not a link
      if ( 'undefined' === typeof $( container ).attr( 'href' ) ) {
        return;
      }

      var valid = false;

      // if link points to 'Media File' (ignoring GET parameters) and flag is set allow it
      if (
        $( container ).attr( 'href' ).split( '?' )[ 0 ] ===
        $( this ).attr( 'data-orig-file' ).split( '?' )[ 0 ] &&
        1 === Number( jetpackCarouselStrings.single_image_gallery_media_file )
      ) {
        valid = true;
      }

      // if link points to 'Attachment Page' allow it
      if ( $( container ).attr( 'href' ) === $( this ).attr( 'data-permalink' ) ) {
        valid = true;
      }

      // links to 'Custom URL' or 'Media File' when flag not set are not valid
      if ( !valid ) {
        return;
      }

      // make this node a gallery recognizable by event listener above
      $( container ).addClass( 'single-image-gallery' );
      // blog_id is needed to allow posting comments to correct blog
      $( container ).data( 'carousel-extra', {
        blog_id: Number( jetpackCarouselStrings.blog_id ),
      } );
    } );
  };

  var methods = {
    testForData: function ( gallery ) {
      gallery = $( gallery );
      return !( !gallery.length || !gallery.data( 'carousel-extra' ) );
    },

    testIfOpened: function () {
      return !!(
        'undefined' !== typeof gallery &&
        'undefined' !== typeof gallery.opened &&
        gallery.opened
      );
    },

    openOrSelectSlide: function ( index ) {
      // The `open` method triggers an asynchronous effect, so we will get an
      // error if we try to use `open` then `selectSlideAtIndex` immediately
      // after it. We can only use `selectSlideAtIndex` if the carousel is
      // already open.
      if ( !$( this ).jp_carousel( 'testIfOpened' ) ) {
        // The `open` method selects the correct slide during the
        // initialization.
        $( this ).jp_carousel( 'open', {
          start_index: index
        } );
      } else {
        gallery.jp_carousel( 'selectSlideAtIndex', index );
      }
    },

    open: function ( options ) {
      var settings = {
          items_selector: '.gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id], img[data-attachment-id]',
          start_index: 0,
        },
        data = $( this ).data( 'carousel-extra' );

      if ( !data ) {
        return; // don't run if the default gallery functions weren't used
      }

      prepareGallery( data );

      if ( gallery.jp_carousel( 'testIfOpened' ) ) {
        return; // don't open if already opened
      }

      // make sure to stop the page from scrolling behind the carousel overlay, so we don't trigger
      // infiniscroll for it when enabled (Reader, theme infiniscroll, etc).
      originalOverflow = $( 'body' ).css( 'overflow' );
      $( 'body' ).css( 'overflow', 'hidden' );
      // prevent html from overflowing on some of the new themes.
      originalHOverflow = $( 'html' ).css( 'overflow' );
      $( 'html' ).css( 'overflow', 'hidden' );
      scrollPos = $( window ).scrollTop();

      container.data( 'carousel-extra', data );
      // @start-hide-in-jetpack
      wpcom.carousel.stat( [ 'open', 'view_image' ] );
      // @end-hide-in-jetpack

      return this.each( function () {
        // If options exist, lets merge them
        // with our default settings
        var $this = $( this );

        if ( options ) {
          $.extend( settings, options );
        }
        if ( -1 === settings.start_index ) {
          settings.start_index = 0; //-1 returned if can't find index, so start from beginning
        }

        container.trigger( 'jp_carousel.beforeOpen' ).fadeIn( 'fast', function () {
          container.trigger( 'jp_carousel.afterOpen' );
          gallery
            .jp_carousel(
              'initSlides',
              $this.find( settings.items_selector ),
              settings.start_index
            )
            .jp_carousel( 'selectSlideAtIndex', settings.start_index );
        } );
        gallery.html( '' );
      } );
    },

    selectSlideAtIndex: function ( index ) {
      var slides = this.jp_carousel( 'slides' ),
        selected = slides.eq( index );

      if ( 0 === selected.length ) {
        selected = slides.eq( 0 );
      }

      gallery.jp_carousel( 'selectSlide', selected, false );
      return this;
    },

    close: function () {
      // make sure to let the page scroll again
      $( 'body' ).css( 'overflow', originalOverflow );
      $( 'html' ).css( 'overflow', originalHOverflow );
      this.jp_carousel( 'clearCommentTextAreaValue' );
      return container.trigger( 'jp_carousel.beforeClose' ).fadeOut( 'fast', function () {
        container.trigger( 'jp_carousel.afterClose' );
        $( window ).scrollTop( scrollPos );
      } );
    },

    next: function () {
      this.jp_carousel( 'previousOrNext', 'nextSlide' );
      gallery.jp_carousel( 'hide_reblog_box' ); // @hide-in-jetpack
    },

    previous: function () {
      this.jp_carousel( 'previousOrNext', 'prevSlide' );
      gallery.jp_carousel( 'hide_reblog_box' ); // @hide-in-jetpack
    },

    previousOrNext: function ( slideSelectionMethodName ) {
      if ( !this.jp_carousel( 'hasMultipleImages' ) ) {
        return false;
      }

      var slide = gallery.jp_carousel( slideSelectionMethodName );

      if ( slide ) {
        container.animate( {
          scrollTop: 0
        }, 'fast' );
        this.jp_carousel( 'clearCommentTextAreaValue' );
        this.jp_carousel( 'selectSlide', slide );
        wpcom.carousel.stat( [ 'previous', 'view_image' ] ); // @hide-in-jetpack
      }
    },

    // @start-hide-in-jetpack
    resetButtons: function ( current ) {
      if ( current.data( 'reblogged' ) ) {
        $( '.jp-carousel-buttons a.jp-carousel-reblog' ).addClass( 'reblogged' ).text( jetpackCarouselStrings.reblogged );
      } else {
        $( '.jp-carousel-buttons a.jp-carousel-reblog' ).removeClass( 'reblogged' ).text( jetpackCarouselStrings.reblog );
      }
      // Must also take care of reblog/reblogged here
    },
    // @end-hide-in-jetpack
    selectedSlide: function () {
      return this.find( '.selected' );
    },

    setSlidePosition: function ( x ) {
      transitionBegin = Date.now();

      return this.css( {
        '-webkit-transform': 'translate3d(' + x + 'px,0,0)',
        '-moz-transform': 'translate3d(' + x + 'px,0,0)',
        '-ms-transform': 'translate(' + x + 'px,0)',
        '-o-transform': 'translate(' + x + 'px,0)',
        transform: 'translate3d(' + x + 'px,0,0)',
      } );
    },

    updateSlidePositions: function ( animate ) {
      var current = this.jp_carousel( 'selectedSlide' ),
        galleryWidth = gallery.width(),
        currentWidth = current.width(),
        previous = gallery.jp_carousel( 'prevSlide' ),
        next = gallery.jp_carousel( 'nextSlide' ),
        previousPrevious = previous.prev(),
        nextNext = next.next(),
        left = Math.floor( ( galleryWidth - currentWidth ) * 0.5 );

      current.jp_carousel( 'setSlidePosition', left ).show();

      // minimum width
      gallery.jp_carousel( 'fitInfo', animate );

      // prep the slides
      var direction = lastSelectedSlide.is( current.prevAll() ) ? 1 : -1;

      // Since we preload the `previousPrevious` and `nextNext` slides, we need
      // to make sure they technically visible in the DOM, but invisible to the
      // user. To hide them from the user, we position them outside the edges
      // of the window.
      //
      // This section of code only applies when there are more than three
      // slides. Otherwise, the `previousPrevious` and `nextNext` slides will
      // overlap with the `previous` and `next` slides which must be visible
      // regardless.
      if ( 1 === direction ) {
        if ( !nextNext.is( previous ) ) {
          nextNext.jp_carousel( 'setSlidePosition', galleryWidth + next.width() ).show();
        }

        if ( !previousPrevious.is( next ) ) {
          previousPrevious
            .jp_carousel( 'setSlidePosition', -previousPrevious.width() - currentWidth )
            .show();
        }
      } else {
        if ( !nextNext.is( previous ) ) {
          nextNext.jp_carousel( 'setSlidePosition', galleryWidth + currentWidth ).show();
        }
      }

      previous
        .jp_carousel( 'setSlidePosition', Math.floor( -previous.width() + screenPadding * 0.75 ) )
        .show();
      next
        .jp_carousel( 'setSlidePosition', Math.ceil( galleryWidth - screenPadding * 0.75 ) )
        .show();
    },

    selectSlide: function ( slide, animate ) {
      lastSelectedSlide = this.find( '.selected' ).removeClass( 'selected' );

      var slides = gallery.jp_carousel( 'slides' ).css( {
          position: 'fixed'
        } ),
        current = $( slide ).addClass( 'selected' ).css( {
          position: 'relative'
        } ),
        attachmentId = current.data( 'attachment-id' ),
        previous = gallery.jp_carousel( 'prevSlide' ),
        next = gallery.jp_carousel( 'nextSlide' ),
        previousPrevious = previous.prev(),
        nextNext = next.next(),
        animated,
        captionHtml;

      // center the main image
      gallery.jp_carousel( 'loadFullImage', current );

      caption.hide();

      if ( next.length === 0 && slides.length <= 2 ) {
        $( '.jp-carousel-next-button' ).hide();
      } else {
        $( '.jp-carousel-next-button' ).show();
      }

      if ( previous.length === 0 && slides.length <= 2 ) {
        $( '.jp-carousel-previous-button' ).hide();
      } else {
        $( '.jp-carousel-previous-button' ).show();
      }

      animated = current
        .add( previous )
        .add( previousPrevious )
        .add( next )
        .add( nextNext )
        .jp_carousel( 'loadSlide' );

      // slide the whole view to the x we want
      slides.not( animated ).hide();

      gallery.jp_carousel( 'updateSlidePositions', animate );
      gallery.jp_carousel( 'resetButtons', current ); // @hide-in-jetpack

      container.trigger( 'jp_carousel.selectSlide', [ current ] );

      gallery.jp_carousel( 'getTitleDesc', {
        title: current.data( 'title' ),
        desc: current.data( 'desc' ),
      } );

      var imageMeta = current.data( 'image-meta' );
      gallery.jp_carousel( 'updateExif', imageMeta );
      gallery.jp_carousel( 'updateFullSizeLink', current );

      if ( 1 === +jetpackCarouselStrings.display_comments ) {
        gallery.jp_carousel( 'testCommentsOpened', current.data( 'comments-opened' ) );
        gallery.jp_carousel( 'getComments', {
          attachment_id: attachmentId,
          offset: 0,
          clear: true,
        } );
        $( '#jp-carousel-comment-post-results' ).slideUp();
      }

      // $('<div />').text(sometext).html() is a trick to go to HTML to plain
      // text (including HTML entities decode, etc)
      if ( current.data( 'caption' ) ) {
        captionHtml = $( '<div />' ).text( current.data( 'caption' ) ).html();

        if ( captionHtml === $( '<div />' ).text( current.data( 'title' ) ).html() ) {
          $( '.jp-carousel-titleanddesc-title' ).fadeOut( 'fast' ).empty();
        }

        if ( captionHtml === $( '<div />' ).text( current.data( 'desc' ) ).html() ) {
          $( '.jp-carousel-titleanddesc-desc' ).fadeOut( 'fast' ).empty();
        }

        caption.html( current.data( 'caption' ) ).fadeIn( 'slow' );
      } else {
        caption.fadeOut( 'fast' ).empty();
      }

      // Record pageview in WP Stats, for each new image loaded full-screen.
      if ( jetpackCarouselStrings.stats ) {
        new Image().src =
          document.location.protocol +
          '//pixel.wp.com/g.gif?' +
          jetpackCarouselStrings.stats +
          '&post=' +
          encodeURIComponent( attachmentId ) +
          '&rand=' +
          Math.random();
      }

      wpcom.carousel.pageview( attachmentId ); // @hide-in-jetpack
      // Load the images for the next and previous slides.
      $( next )
        .add( previous )
        .each( function () {
          gallery.jp_carousel( 'loadFullImage', $( this ) );
        } );

      window.location.hash = last_known_location_hash = '#jp-carousel-' + attachmentId;
    },

    slides: function () {
      return this.find( '.jp-carousel-slide' );
    },

    slideDimensions: function () {
      return {
        width: $( window ).width() - screenPadding * 2,
        height: Math.floor( ( $( window ).height() / 100 ) * proportion - 60 ),
      };
    },

    loadSlide: function () {
      return this.each( function () {
        var slide = $( this );
        slide.find( 'img' ).one( 'load', function () {
          // set the width/height of the image if it's too big
          slide.jp_carousel( 'fitSlide', false );
        } );
      } );
    },

    bestFit: function () {
      var max = gallery.jp_carousel( 'slideDimensions' ),
        orig = this.jp_carousel( 'originalDimensions' ),
        orig_ratio = orig.width / orig.height,
        w_ratio = 1,
        h_ratio = 1,
        width,
        height;

      if ( orig.width > max.width ) {
        w_ratio = max.width / orig.width;
      }
      if ( orig.height > max.height ) {
        h_ratio = max.height / orig.height;
      }

      if ( w_ratio < h_ratio ) {
        width = max.width;
        height = Math.floor( width / orig_ratio );
      } else if ( h_ratio < w_ratio ) {
        height = max.height;
        width = Math.floor( height * orig_ratio );
      } else {
        width = orig.width;
        height = orig.height;
      }

      return {
        width: width,
        height: height,
      };
    },

    fitInfo: function ( /*animated*/) {
      var current = this.jp_carousel( 'selectedSlide' );
      var size = current.jp_carousel( 'bestFit' );

      photo_info.css( {
        left: Math.floor( ( info.width() - size.width ) * 0.5 ),
        width: Math.floor( size.width ),
      } );

      return this;
    },

    fitMeta: function ( animated ) {
      var newInfoPos = {
        left: screenPadding + 'px',
        right: screenPadding + 'px'
      };

      if ( animated ) {
        info.animate( newInfoPos );
      } else {
        info.css( newInfoPos );
      }
    },

    fitSlide: function ( /*animated*/) {
      return this.each( function () {
        var $this = $( this ),
          dimensions = $this.jp_carousel( 'bestFit' ),
          method = 'css',
          max = gallery.jp_carousel( 'slideDimensions' );

        dimensions.left = 0;
        dimensions.top = Math.floor( ( max.height - dimensions.height ) * 0.5 ) + 40;
        $this[ method ]( dimensions );
      } );
    },

    texturize: function ( text ) {
      text = '' + text; // make sure we get a string. Title "1" came in as int 1, for example, which did not support .replace().
      text = text
        .replace( /'/g, '&#8217;' )
        .replace( /&#039;/g, '&#8217;' )
        .replace( /[\u2019]/g, '&#8217;' );
      text = text
        .replace( /"/g, '&#8221;' )
        .replace( /&#034;/g, '&#8221;' )
        .replace( /&quot;/g, '&#8221;' )
        .replace( /[\u201D]/g, '&#8221;' );
      text = text.replace( /([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g, '$1="$2"' ); // untexturize allowed HTML tags params double-quotes
      return $.trim( text );
    },

    initSlides: function ( items, start_index ) {
      if ( items.length < 2 ) {
        $( '.jp-carousel-next-button, .jp-carousel-previous-button' ).hide();
      } else {
        $( '.jp-carousel-next-button, .jp-carousel-previous-button' ).show();
      }

      // Calculate the new src.
      items.each( function ( /*i*/) {
        var src_item = $( this ),
          orig_size = src_item.data( 'orig-size' ) || '',
          max = gallery.jp_carousel( 'slideDimensions' ),
          parts = orig_size.split( ',' ),
          medium_file = src_item.data( 'medium-file' ) || '',
          large_file = src_item.data( 'large-file' ) || '',
          src;
        orig_size = {
          width: parseInt( parts[ 0 ], 10 ),
          height: parseInt( parts[ 1 ], 10 )
        };

        // @start-hide-in-jetpack
        if ( 'undefined' !== typeof wpcom ) {
          src = src_item.attr( 'src' ) || src_item.attr( 'original' ) || src_item.data( 'original' ) || src_item.data( 'lazy-src' );
          if ( src.indexOf( 'imgpress' ) !== -1 ) {
            src = src_item.data( 'orig-file' );
          }
          // Square/Circle galleries use a resize param that needs to be removed.
          src = wpcom.carousel.removeResizeFromImageURL( src );
          src = wpcom.carousel.addWidthToImageURL( src, wpcom.carousel.findFirstLargeEnoughWidth( orig_size.width, orig_size.height, max.width, max.height ) );
        } else {

          // @end-hide-in-jetpack
          src = src_item.data( 'orig-file' );

          src = gallery.jp_carousel( 'selectBestImageSize', {
            orig_file: src,
            orig_width: orig_size.width,
            orig_height: orig_size.height,
            max_width: max.width,
            max_height: max.height,
            medium_file: medium_file,
            large_file: large_file,
          } );
          // @start-hide-in-jetpack
        } // end else of if ( 'undefined' != typeof wpcom )
        // @end-hide-in-jetpack

        // Set the final src
        $( this ).data( 'gallery-src', src );
      } );

      // If the start_index is not 0 then preload the clicked image first.
      if ( 0 !== start_index ) {
        $( '<img/>' )[ 0 ].src = $( items[ start_index ] ).data( 'gallery-src' );
      }

      var useInPageThumbnails =
        items.first().closest( '.tiled-gallery.type-rectangular' ).length > 0;

      // create the 'slide'
      items.each( function ( i ) {
        var src_item = $( this ),
          reblogged = src_item.data( 'reblogged' ) || 0, // @hide-in-jetpack
          attachment_id = src_item.data( 'attachment-id' ) || 0,
          comments_opened = src_item.data( 'comments-opened' ) || 0,
          image_meta = src_item.data( 'image-meta' ) || {},
          orig_size = src_item.data( 'orig-size' ) || '',
          thumb_size = {
            width: src_item[ 0 ].naturalWidth,
            height: src_item[ 0 ].naturalHeight
          },
          title = src_item.data( 'image-title' ) || '',
          description = src_item.data( 'image-description' ) || '',
          caption = src_item.parents( '.gallery-item' ).find( '.gallery-caption' ).html() || '',
          src = src_item.data( 'gallery-src' ) || '',
          medium_file = src_item.data( 'medium-file' ) || '',
          large_file = src_item.data( 'large-file' ) || '',
          orig_file = src_item.data( 'orig-file' ) || '';

        var tiledCaption = src_item
          .parents( 'div.tiled-gallery-item' )
          .find( 'div.tiled-gallery-caption' )
          .html();
        if ( tiledCaption ) {
          caption = tiledCaption;
        }

        if ( attachment_id && orig_size.length ) {
          title = gallery.jp_carousel( 'texturize', title );
          description = gallery.jp_carousel( 'texturize', description );
          caption = gallery.jp_carousel( 'texturize', caption );

          // Initially, the image is a 1x1 transparent gif.  The preview is shown as a background image on the slide itself.
          var image = $( '<img/>' )
            .attr(
              'src',
              'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            )
            .css( 'width', '100%' )
            .css( 'height', '100%' );

          var slide = $(
              '<div class="jp-carousel-slide" itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject"></div>'
            )
            .hide()
            .css( {
              //'position' : 'fixed',
              left: i < start_index ? -1000 : gallery.width(),
            } )
            .append( image )
            .appendTo( gallery )
            .data( 'src', src )
            .data( 'title', title )
            .data( 'desc', description )
            .data( 'caption', caption )
            .data( 'attachment-id', attachment_id )
            .data( 'permalink', src_item.parents( 'a' ).attr( 'href' ) )
            .data( 'orig-size', orig_size )
            .data( 'comments-opened', comments_opened )
            .data( 'image-meta', image_meta )
            .data( 'medium-file', medium_file )
            .data( 'large-file', large_file )
            .data( 'orig-file', orig_file )
            .data( 'reblogged', reblogged ) // @hide-in-jetpack
            .data( 'thumb-size', thumb_size );
          if ( useInPageThumbnails ) {
            // Use the image already loaded in the gallery as a preview.
            slide.data( 'preview-image', src_item.attr( 'src' ) ).css( {
              'background-image': 'url("' + src_item.attr( 'src' ) + '")',
              'background-size': '100% 100%',
              'background-position': 'center center',
            } );
          }

          slide.jp_carousel( 'fitSlide', false );
        }
      } );
      return this;
    },

    selectBestImageSize: function ( args ) {
      if ( 'object' !== typeof args ) {
        args = {};
      }

      if ( 'undefined' === typeof args.orig_file ) {
        return '';
      }

      if ( 'undefined' === typeof args.orig_width || 'undefined' === typeof args.max_width ) {
        return args.orig_file;
      }

      if ( 'undefined' === typeof args.medium_file || 'undefined' === typeof args.large_file ) {
        return args.orig_file;
      }

      // Check if the image is being served by Photon (using a regular expression on the hostname).

      var imageLinkParser = document.createElement( 'a' );
      imageLinkParser.href = args.large_file;

      var isPhotonUrl = /^i[0-2].wp.com$/i.test( imageLinkParser.hostname );

      var medium_size_parts = gallery.jp_carousel(
        'getImageSizeParts',
        args.medium_file,
        args.orig_width,
        isPhotonUrl
      );
      var large_size_parts = gallery.jp_carousel(
        'getImageSizeParts',
        args.large_file,
        args.orig_width,
        isPhotonUrl
      );

      var large_width = parseInt( large_size_parts[ 0 ], 10 ),
        large_height = parseInt( large_size_parts[ 1 ], 10 ),
        medium_width = parseInt( medium_size_parts[ 0 ], 10 ),
        medium_height = parseInt( medium_size_parts[ 1 ], 10 );

      // Assign max width and height.
      args.orig_max_width = args.max_width;
      args.orig_max_height = args.max_height;

      // Give devices with a higher devicePixelRatio higher-res images (Retina display = 2, Android phones = 1.5, etc)
      if ( 'undefined' !== typeof window.devicePixelRatio && window.devicePixelRatio > 1 ) {
        args.max_width = args.max_width * window.devicePixelRatio;
        args.max_height = args.max_height * window.devicePixelRatio;
      }

      if ( large_width >= args.max_width || large_height >= args.max_height ) {
        return args.large_file;
      }

      if ( medium_width >= args.max_width || medium_height >= args.max_height ) {
        return args.medium_file;
      }

      if ( isPhotonUrl ) {
        // args.orig_file doesn't point to a Photon url, so in this case we use args.large_file
        // to return the photon url of the original image.
        var largeFileIndex = args.large_file.lastIndexOf( '?' );
        var origPhotonUrl = args.large_file;
        if ( -1 !== largeFileIndex ) {
          origPhotonUrl = args.large_file.substring( 0, largeFileIndex );
          // If we have a really large image load a smaller version
          // that is closer to the viewable size
          if ( args.orig_width > args.max_width || args.orig_height > args.max_height ) {
            origPhotonUrl += '?fit=' + args.orig_max_width + '%2C' + args.orig_max_height;
          }
        }
        return origPhotonUrl;
      }

      return args.orig_file;
    },

    getImageSizeParts: function ( file, orig_width, isPhotonUrl ) {
      var size = isPhotonUrl ?
        file.replace( /.*=([\d]+%2C[\d]+).*$/, '$1' ) :
        file.replace( /.*-([\d]+x[\d]+)\..+$/, '$1' );

      var size_parts =
        size !== file ?
        isPhotonUrl ?
        size.split( '%2C' ) :
        size.split( 'x' ) : [ orig_width, 0 ];

      // If one of the dimensions is set to 9999, then the actual value of that dimension can't be retrieved from the url.
      // In that case, we set the value to 0.
      if ( '9999' === size_parts[ 0 ] ) {
        size_parts[ 0 ] = '0';
      }

      if ( '9999' === size_parts[ 1 ] ) {
        size_parts[ 1 ] = '0';
      }

      return size_parts;
    },

    // @start-hide-in-jetpack
    show_reblog_box: function () {
      $( '#carousel-reblog-box textarea' ).val( jetpackCarouselStrings.reblog_add_thoughts );
      //t.addClass('selected');
      $( '#carousel-reblog-box p.response' ).remove();
      $( '#carousel-reblog-box div.submit, #carousel-reblog-box div.submit span.canceltext' ).show();
      $( '#carousel-reblog-box div.submit input[type=submit]' ).prop( 'disabled', false );

      var current = $( '.jp-carousel div.selected' );
      $( '#carousel-reblog-box input#carousel-reblog-post-url' ).val( current.data( 'permalink' ) );
      $( '#carousel-reblog-box input#carousel-reblog-post-title' ).val( $( 'div.jp-carousel-info' ).children( 'h2' ).text() );

      $( 'div.jp-carousel-info' ).append( $( '#carousel-reblog-box' ) ).children().fadeOut( 'fast' );
      $( '#carousel-reblog-box' ).fadeIn( 'fast' );
    },

    hide_reblog_box: function () {
      $( 'div.jp-carousel-info' ).children().not( '#carousel-reblog-box' ).fadeIn( 'fast' );
      $( '#carousel-reblog-box' ).fadeOut( 'fast' );
    },
    // @end-hide-in-jetpack
    originalDimensions: function () {
      var splitted = $( this ).data( 'orig-size' ).split( ',' );
      return {
        width: parseInt( splitted[ 0 ], 10 ),
        height: parseInt( splitted[ 1 ], 10 )
      };
    },

    format: function ( args ) {
      if ( 'object' !== typeof args ) {
        args = {};
      }
      if ( !args.text || 'undefined' === typeof args.text ) {
        return;
      }
      if ( !args.replacements || 'undefined' === typeof args.replacements ) {
        return args.text;
      }
      return args.text.replace( /{(\d+)}/g, function ( match, number ) {
        return typeof args.replacements[ number ] !== 'undefined' ?
          args.replacements[ number ] :
          match;
      } );
    },

    /**
     * Returns a number in a fraction format that represents the shutter speed.
     * @param Number speed
     * @return String
     */
    shutterSpeed: function ( speed ) {
      var denominator;

      // round to one decimal if value > 1s by multiplying it by 10, rounding, then dividing by 10 again
      if ( speed >= 1 ) {
        return Math.round( speed * 10 ) / 10 + 's';
      }

      // If the speed is less than one, we find the denominator by inverting
      // the number. Since cameras usually use rational numbers as shutter
      // speeds, we should get a nice round number. Or close to one in cases
      // like 1/30. So we round it.
      denominator = Math.round( 1 / speed );

      return '1/' + denominator + 's';
    },

    parseTitleDesc: function ( value ) {
      if ( !value.match( ' ' ) && value.match( '_' ) ) {
        return '';
      }

      return value;
    },

    getTitleDesc: function ( data ) {
      var title = '',
        desc = '',
        markup = '',
        target;

      target = $( 'div.jp-carousel-titleanddesc', 'div.jp-carousel-wrap' );
      target.hide();

      title = gallery.jp_carousel( 'parseTitleDesc', data.title ) || '';
      desc = gallery.jp_carousel( 'parseTitleDesc', data.desc ) || '';

      if ( title.length || desc.length ) {
        // Convert from HTML to plain text (including HTML entities decode, etc)
        if ( $( '<div />' ).html( title ).text() === $( '<div />' ).html( desc ).text() ) {
          title = '';
        }

        markup = title.length ?
          '<div class="jp-carousel-titleanddesc-title">' + title + '</div>' :
          '';
        markup += desc.length ?
          '<div class="jp-carousel-titleanddesc-desc">' + desc + '</div>' :
          '';

        target.html( markup ).fadeIn( 'slow' );
      }

      $( 'div#jp-carousel-comment-form-container' ).css( 'margin-top', '20px' );
      $( 'div#jp-carousel-comments-loading' ).css( 'margin-top', '20px' );
    },

    // updateExif updates the contents of the exif UL (.jp-carousel-image-exif)
    updateExif: function ( meta ) {
      if ( !meta || 1 !== Number( jetpackCarouselStrings.display_exif ) ) {
        return false;
      }

      var $ul = $( "<ul class='jp-carousel-image-exif'></ul>" );

      $.each( meta, function ( key, val ) {
        if (
          0 === parseFloat( val ) ||
          !val.length ||
          -1 === $.inArray( key, $.makeArray( jetpackCarouselStrings.meta_data ) )
        ) {
          return;
        }

        switch ( key ) {
          case 'focal_length':
            val = val + 'mm';
            break;
          case 'shutter_speed':
            val = gallery.jp_carousel( 'shutterSpeed', val );
            break;
          case 'aperture':
            val = 'f/' + val;
            break;
        }

        $ul.append( '<li><h5>' + jetpackCarouselStrings[ key ] + '</h5>' + val + '</li>' );
      } );

      // Update (replace) the content of the ul
      $( 'div.jp-carousel-image-meta ul.jp-carousel-image-exif' ).replaceWith( $ul );
    },

    // updateFullSizeLink updates the contents of the jp-carousel-image-download link
    updateFullSizeLink: function ( current ) {
      if ( !current || !current.data ) {
        return false;
      }
      var original,
        origSize = current.data( 'orig-size' ).split( ',' ),
        imageLinkParser = document.createElement( 'a' );

      imageLinkParser.href = current.data( 'src' ).replace( /\?.+$/, '' );

      // Is this a Photon URL?
      if ( imageLinkParser.hostname.match( /^i[\d]{1}.wp.com$/i ) !== null ) {
        original = imageLinkParser.href;
      } else {
        original = current.data( 'orig-file' ).replace( /\?.+$/, '' );
      }

      var permalink = $(
          '<a>' +
          gallery.jp_carousel( 'format', {
            text: jetpackCarouselStrings.download_original,
            replacements: origSize,
          } ) +
          '</a>'
        )
        .addClass( 'jp-carousel-image-download' )
        .attr( 'href', original )
        .attr( 'target', '_blank' );

      // Update (replace) the content of the anchor
      $( 'div.jp-carousel-image-meta a.jp-carousel-image-download' ).replaceWith( permalink );
    },

    testCommentsOpened: function ( opened ) {
      if ( 1 === parseInt( opened, 10 ) ) {
        // @start-hide-in-jetpack
        if ( 1 === Number( jetpackCarouselStrings.is_logged_in ) ) {
          $( '.jp-carousel-commentlink' ).fadeIn( 'fast' );
        } else {
          // @end-hide-in-jetpack
          $( '.jp-carousel-buttons' ).fadeIn( 'fast' );
          // @start-hide-in-jetpack
        }
        // @end-hide-in-jetpack
        commentForm.fadeIn( 'fast' );
      } else {
        // @start-hide-in-jetpack
        if ( 1 === Number( jetpackCarouselStrings.is_logged_in ) ) {
          $( '.jp-carousel-commentlink' ).fadeOut( 'fast' );
        } else {
          // @end-hide-in-jetpack
          $( '.jp-carousel-buttons' ).fadeOut( 'fast' );
          // @start-hide-in-jetpack
        }
        // @end-hide-in-jetpack
        commentForm.fadeOut( 'fast' );
      }
    },

    getComments: function ( args ) {
      clearInterval( commentInterval );

      if ( 'object' !== typeof args ) {
        return;
      }

      if ( 'undefined' === typeof args.attachment_id || !args.attachment_id ) {
        return;
      }

      if ( !args.offset || 'undefined' === typeof args.offset || args.offset < 1 ) {
        args.offset = 0;
      }

      var comments = $( '.jp-carousel-comments' ),
        commentsLoading = $( '#jp-carousel-comments-loading' ).show();

      if ( args.clear ) {
        comments.hide().empty();
      }

      $.ajax( {
        type: 'GET',
        url: jetpackCarouselStrings.ajaxurl,
        dataType: 'json',
        data: {
          action: 'get_attachment_comments',
          nonce: jetpackCarouselStrings.nonce,
          id: args.attachment_id,
          offset: args.offset,
        },
        success: function ( data /*, status, xhr*/ ) {
          if ( args.clear ) {
            comments.fadeOut( 'fast' ).empty();
          }

          $( data ).each( function () {
            var comment = $( '<div></div>' )
              .addClass( 'jp-carousel-comment' )
              .attr( 'id', 'jp-carousel-comment-' + this[ 'id' ] )
              .html(
                '<div class="comment-gravatar">' +
                this[ 'gravatar_markup' ] +
                '</div>' +
                '<div class="comment-author">' +
                this[ 'author_markup' ] +
                '</div>' +
                '<div class="comment-date">' +
                this[ 'date_gmt' ] +
                '</div>' +
                '<div class="comment-content">' +
                this[ 'content' ] +
                '</div>'
              );
            comments.append( comment );

            // Set the interval to check for a new page of comments.
            clearInterval( commentInterval );
            commentInterval = setInterval( function () {
              if (
                $( '.jp-carousel-overlay' ).height() - 150 <
                $( '.jp-carousel-wrap' ).scrollTop() + $( window ).height()
              ) {
                gallery.jp_carousel( 'getComments', {
                  attachment_id: args.attachment_id,
                  offset: args.offset + 10,
                  clear: false,
                } );
                clearInterval( commentInterval );
              }
            }, 300 );
          } );

          // Verify (late) that the user didn't repeatldy click the arrows really fast, in which case the requested
          // attachment id might no longer match the current attachment id by the time we get the data back or a now
          // registered infiniscroll event kicks in, so we don't ever display comments for the wrong image by mistake.
          var current = $( '.jp-carousel div.selected' );
          if ( current && current.data && current.data( 'attachment-id' ) != args.attachment_id ) {
            comments.fadeOut( 'fast' );
            comments.empty();
            return;
          }

          // Increase the height of the background, semi-transparent overlay to match the new length of the comments list.
          $( '.jp-carousel-overlay' ).height(
            $( window ).height() +
            titleAndDescription.height() +
            commentForm.height() +
            ( comments.height() > 0 ? comments.height() : imageMeta.height() ) +
            200
          );

          comments.show();
          commentsLoading.hide();
        },
        error: function ( xhr, status, error ) {
          // TODO: proper error handling
          console.log( 'Comment get fail...', xhr, status, error );
          comments.fadeIn( 'fast' );
          commentsLoading.fadeOut( 'fast' );
        },
      } );
    },

    postCommentError: function ( args ) {
      if ( 'object' !== typeof args ) {
        args = {};
      }
      if (
        !args.field ||
        'undefined' === typeof args.field ||
        !args.error ||
        'undefined' === typeof args.error
      ) {
        return;
      }
      $( '#jp-carousel-comment-post-results' )
        .slideUp( 'fast' )
        .html( '<span class="jp-carousel-comment-post-error">' + args.error + '</span>' )
        .slideDown( 'fast' );
      $( '#jp-carousel-comment-form-spinner' ).hide();
    },

    setCommentIframeSrc: function ( attachment_id ) {
      var iframe = $( '#jp-carousel-comment-iframe' );
      // Set the proper irame src for the current attachment id
      if ( iframe && iframe.length ) {
        iframe.attr( 'src', iframe.attr( 'src' ).replace( /(postid=)\d+/, '$1' + attachment_id ) );
        iframe.attr(
          'src',
          iframe.attr( 'src' ).replace( /(%23.+)?$/, '%23jp-carousel-' + attachment_id )
        );
      }
    },

    clearCommentTextAreaValue: function () {
      var commentTextArea = $( '#jp-carousel-comment-form-comment-field' );
      if ( commentTextArea ) {
        commentTextArea.val( '' );
      }
    },

    nextSlide: function () {
      var slides = this.jp_carousel( 'slides' );
      var selected = this.jp_carousel( 'selectedSlide' );

      if ( selected.length === 0 || ( slides.length > 2 && selected.is( slides.last() ) ) ) {
        return slides.first();
      }

      return selected.next();
    },

    prevSlide: function () {
      var slides = this.jp_carousel( 'slides' );
      var selected = this.jp_carousel( 'selectedSlide' );

      if ( selected.length === 0 || ( slides.length > 2 && selected.is( slides.first() ) ) ) {
        return slides.last();
      }

      return selected.prev();
    },

    loadFullImage: function ( slide ) {
      var image = slide.find( 'img:first' );

      if ( !image.data( 'loaded' ) ) {
        // If the width of the slide is smaller than the width of the "thumbnail" we're already using,
        // don't load the full image.

        image.on( 'load.jetpack', function () {
          image.off( 'load.jetpack' );
          $( this ).closest( '.jp-carousel-slide' ).css( 'background-image', '' );
        } );

        if (
          !slide.data( 'preview-image' ) ||
          ( slide.data( 'thumb-size' ) && slide.width() > slide.data( 'thumb-size' ).width )
        ) {
          image
            .attr( 'src', image.closest( '.jp-carousel-slide' ).data( 'src' ) )
            .attr( 'itemprop', 'image' );
        } else {
          image.attr( 'src', slide.data( 'preview-image' ) ).attr( 'itemprop', 'image' );
        }

        image.data( 'loaded', 1 );
      }
    },

    hasMultipleImages: function () {
      return gallery.jp_carousel( 'slides' ).length > 1;
    },
  };

  $.fn.jp_carousel = function ( method ) {
    // ask for the HTML of the gallery
    // Method calling logic
    if ( methods[ method ] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    } else if ( typeof method === 'object' || !method ) {
      return methods.open.apply( this, arguments );
    } else {
      $.error( 'Method ' + method + ' does not exist on jQuery.jp_carousel' );
    }
  };

  // register the event listener for starting the gallery
  $( document.body ).on(
    'click.jp-carousel',
    'div.gallery, div.tiled-gallery, ul.wp-block-gallery, ul.blocks-gallery-grid, figure.blocks-gallery-grid, div.wp-block-jetpack-tiled-gallery, a.single-image-gallery',
    function ( e ) {
      if ( !$( this ).jp_carousel( 'testForData', e.currentTarget ) ) {
        return;
      }
      // If Gallery is made up of individual Image blocks check for custom link before
      // loading carousel.
      if ( $( e.target ).parents().eq( 1 ).hasClass( 'wp-block-image' ) ) {
        var parentHref = $( e.target ).parent().attr( 'href' );

        // If the link does not point to the attachment or media file then assume Image has
        // a custom link so don't load the carousel.
        if (
          parentHref.split( '?' )[ 0 ] !==
          $( e.target ).attr( 'data-orig-file' ).split( '?' )[ 0 ] &&
          parentHref !== $( e.target ).attr( 'data-permalink' )
        ) {
          return;
        }
      }

      // Do not open the modal if we are looking at a gallery caption from before WP5, which may contain a link.
      if ( $( e.target ).parent().hasClass( 'gallery-caption' ) ) {
        return;
      }

      // Do not open the modal if we are looking at a caption of a gallery block, which may contain a link.
      if ( $( e.target ).parent().is( 'figcaption' ) ) {
        return;
      }

      // Set height to auto
      // Fix some themes where closing carousel brings view back to top
      $( 'html' ).css( 'height', 'auto' );

      e.preventDefault();

      // Stopping propagation in case there are parent elements
      // with .gallery or .tiled-gallery class
      e.stopPropagation();
      $( this ).jp_carousel( 'open', {
        start_index: $( this )
          .find(
            '.gallery-item, .tiled-gallery-item, .blocks-gallery-item, .tiled-gallery__item, .wp-block-image'
          )
          .index(
            $( e.target ).parents(
              '.gallery-item, .tiled-gallery-item, .blocks-gallery-item, .tiled-gallery__item, .wp-block-image'
            )
          ),
      } );
    }
  );

  // handle lightbox (single image gallery) for images linking to 'Attachment Page'
  if ( 1 === Number( jetpackCarouselStrings.single_image_gallery ) ) {
    processSingleImageGallery();
    $( document.body ).on( 'post-load', function () {
      processSingleImageGallery();
    } );
  }

  // Makes carousel work on page load and when back button leads to same URL with carousel hash (ie: no actual document.ready trigger)
  $( window ).on( 'hashchange.jp-carousel', function () {
    var hashRegExp = /jp-carousel-(\d+)/,
      matches,
      attachmentId,
      galleries,
      selectedThumbnail;

    if ( !window.location.hash || !hashRegExp.test( window.location.hash ) ) {
      if ( gallery && gallery.opened ) {
        container.jp_carousel( 'close' );
      }

      return;
    }

    if ( window.location.hash === last_known_location_hash && gallery.opened ) {
      return;
    }

    if ( window.location.hash && gallery && !gallery.opened && history.back ) {
      history.back();
      return;
    }

    last_known_location_hash = window.location.hash;
    matches = window.location.hash.match( hashRegExp );
    attachmentId = parseInt( matches[ 1 ], 10 );
    galleries = $(
      'div.gallery, div.tiled-gallery, a.single-image-gallery, ul.wp-block-gallery, div.wp-block-jetpack-tiled-gallery'
    );

    // Find the first thumbnail that matches the attachment ID in the location
    // hash, then open the gallery that contains it.
    galleries.each( function ( _, galleryEl ) {
      $( galleryEl )
        .find( 'img' )
        .each( function ( imageIndex, imageEl ) {
          if ( $( imageEl ).data( 'attachment-id' ) === parseInt( attachmentId, 10 ) ) {
            selectedThumbnail = {
              index: imageIndex,
              gallery: galleryEl
            };
            return false;
          }
        } );

      if ( selectedThumbnail ) {
        $( selectedThumbnail.gallery ).jp_carousel( 'openOrSelectSlide', selectedThumbnail.index );
        return false;
      }
    } );
  } );

  if ( window.location.hash ) {
    $( window ).trigger( 'hashchange' );
  }
} );

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * Version 1.1.1, modified to pass the touchmove event to the callbacks.
 */
( function ( $ ) {
  $.fn.touchwipe = function ( settings ) {
    var config = {
      threshold: 150, // Required min distance traveled to be considered swipe.
      restraint: 100, // Maximum distance allowed at the same time in perpendicular direction.
      allowedTime: 300, // Maximum time allowed to travel that distance.
      wipeLeft: function ( /*e*/) {},
      wipeRight: function ( /*e*/) {},
      wipeUp: function ( /*e*/) {},
      wipeDown: function ( /*e*/) {},
      preventDefaultEvents: true,
    };
    var startTime, elapsedTime;
    if ( settings ) {
      $.extend( config, settings );
    }

    this.each( function () {
      var startX;
      var startY;
      var isMoving = false;

      function cancelTouch() {
        this.removeEventListener( 'touchmove', onTouchMove );
        startX = null;
        isMoving = false;
      }

      function onTouchMove( e ) {
        if ( config.preventDefaultEvents ) {
          e.preventDefault();
        }
        if ( isMoving ) {
          var x = e.touches[ 0 ].pageX;
          var y = e.touches[ 0 ].pageY;
          var dx = startX - x;
          var dy = startY - y;
          elapsedTime = new Date().getTime() - startTime;
          if ( elapsedTime <= config.allowedTime ) {
            if ( Math.abs( dx ) >= config.threshold && Math.abs( dy ) <= config.restraint ) {
              cancelTouch();
              if ( dx > 0 ) {
                config.wipeLeft( e );
              } else {
                config.wipeRight( e );
              }
            } else if ( Math.abs( dy ) >= config.threshold && Math.abs( dx ) <= config.restraint ) {
              cancelTouch();
              if ( dy > 0 ) {
                config.wipeDown( e );
              } else {
                config.wipeUp( e );
              }
            }
          }
        }
      }

      function onTouchStart( e ) {
        if ( e.touches.length === 1 ) {
          startTime = new Date().getTime();
          startX = e.touches[ 0 ].pageX;
          startY = e.touches[ 0 ].pageY;
          isMoving = true;
          this.addEventListener( 'touchmove', onTouchMove, false );
        }
      }
      if ( 'ontouchstart' in document.documentElement ) {
        this.addEventListener( 'touchstart', onTouchStart, false );
      }
    } );

    return this;
  };
} )( jQuery );;
/* global WPCOM_sharing_counts, grecaptcha */

// NOTE: This file intentionally does not make use of polyfills or libraries,
// including jQuery. Please keep all code as IE11-compatible vanilla ES5, and
// ensure everything is inside an IIFE to avoid global namespace pollution.
// Code follows WordPress browser support guidelines. For an up to date list,
// see https://make.wordpress.org/core/handbook/best-practices/browser-support/

( function () {
  var currentScript = document.currentScript;
  var recaptchaScriptAdded = false;

  // -------------------------- UTILITY FUNCTIONS -------------------------- //

  // Helper function to load an external script.
  function loadScript( url ) {
    var script = document.createElement( 'script' );
    var prev = currentScript || document.getElementsByTagName( 'script' )[ 0 ];
    script.setAttribute( 'async', true );
    script.setAttribute( 'src', url );
    prev.parentNode.insertBefore( script, prev );
  }

  // Helper matches function (not a polyfill), compatible with IE 11.
  function matches( el, sel ) {
    if ( Element.prototype.matches ) {
      return el.matches( sel );
    }

    if ( Element.prototype.msMatchesSelector ) {
      return el.msMatchesSelector( sel );
    }
  }

  // Helper closest parent node function (not a polyfill) based on
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  function closest( el, sel ) {
    if ( el.closest ) {
      return el.closest( sel );
    }

    var current = el;

    do {
      if ( matches( current, sel ) ) {
        return current;
      }
      current = current.parentElement || current.parentNode;
    } while ( current !== null && current.nodeType === 1 );

    return null;
  }

  // Helper function to iterate over a NodeList
  // (since IE 11 doesn't have NodeList.prototype.forEach)
  function forEachNode( list, fn ) {
    for ( var i = 0; i < list.length; i++ ) {
      var node = list[ i ];
      fn( node, i, list );
    }
  }

  // Helper function to remove a node from the DOM.
  function removeNode( node ) {
    if ( node && node.parentNode ) {
      node.parentNode.removeChild( node );
    }
  }

  // Helper functions to show/hide a node, and check its status.
  function hideNode( node ) {
    if ( node ) {
      node.style.display = 'none';
    }
  }

  function showNode( node ) {
    if ( node ) {
      node.style.removeProperty( 'display' );
    }
  }

  function isNodeHidden( node ) {
    return !node || node.style.display === 'none';
  }

  // ------------------------------- CLASSES ------------------------------- //

  var PANE_SELECTOR = '.sharing-hidden .inner';
  var PANE_DATA_ATTR = 'data-sharing-more-button-id';

  // Implements a MoreButton class, which controls the lifecycle and behavior
  // of a "more" button and its dialog.
  function MoreButton( buttonEl ) {
    this.button = buttonEl;
    this.pane = closest( buttonEl, 'div' ).querySelector( PANE_SELECTOR );
    this.openedBy = null;
    this.recentlyOpenedByHover = false;

    MoreButton.instances.push( this );
    this.pane.setAttribute( PANE_DATA_ATTR, MoreButton.instances.length - 1 );

    this.attachHandlers();
  }

  // Keep a reference to each instance, so we can get back to it from the DOM.
  MoreButton.instances = [];

  // Delay time configs.
  MoreButton.hoverOpenDelay = 200;
  MoreButton.recentOpenDelay = 400;
  MoreButton.hoverCloseDelay = 300;

  // Use this to avoid creating new instances for buttons which already have one.
  MoreButton.instantiateOrReuse = function ( buttonEl ) {
    var pane = closest( buttonEl, 'div' ).querySelector( PANE_SELECTOR );
    var paneId = pane && pane.getAttribute( PANE_DATA_ATTR );

    var existingInstance = MoreButton.instances[ paneId ];
    if ( existingInstance ) {
      return existingInstance;
    }

    return new MoreButton( buttonEl );
  };

  // Retrieve a button instance from the pane DOM element.
  MoreButton.getButtonInstanceFromPane = function ( paneEl ) {
    var paneId = paneEl && paneEl.getAttribute( PANE_DATA_ATTR );
    return MoreButton.instances[ paneId ];
  };

  // Close all open More Button dialogs.
  MoreButton.closeAll = function () {
    for ( var i = 0; i < MoreButton.instances.length; i++ ) {
      MoreButton.instances[ i ].close();
    }
  };

  MoreButton.prototype.open = function () {
    var offset;
    var offsetParent;
    var parentOffset = [ 0, 0 ];

    function getOffsets( el ) {
      var rect = el.getBoundingClientRect();
      return [
        rect.left + ( window.scrollX || window.pageXOffset || 0 ),
        rect.top + ( window.scrollY || window.pageYOffset || 0 ),
      ];
    }

    function getStyleValue( el, prop ) {
      return parseInt( getComputedStyle( el ).getPropertyValue( prop ) || 0 );
    }

    offset = getOffsets( this.button );
    offsetParent = this.button.offsetParent || document.documentElement;

    while (
      offsetParent &&
      ( offsetParent === document.body || offsetParent === document.documentElement ) &&
      getComputedStyle( offsetParent ).getPropertyValue( 'position' ) === 'static'
    ) {
      offsetParent = offsetParent.parentNode;
    }

    if ( offsetParent && offsetParent !== this.button && offsetParent.nodeType === 1 ) {
      parentOffset = getOffsets( offsetParent );
      parentOffset = [
        parentOffset[ 0 ] + getStyleValue( offsetParent, 'border-left-width' ),
        parentOffset[ 1 ] + getStyleValue( offsetParent, 'border-top-width' ),
      ];
    }

    var positionLeft =
      offset[ 0 ] - parentOffset[ 0 ] - getStyleValue( this.button, 'margin-left' );
    var positionTop = offset[ 1 ] - parentOffset[ 1 ] - getStyleValue( this.button, 'margin-top' );

    this.pane.style.left = positionLeft + 'px';
    this.pane.style.top = positionTop + this.button.offsetHeight + 3 + 'px';

    showNode( this.pane );
  };

  MoreButton.prototype.close = function () {
    hideNode( this.pane );
    this.openedBy = null;
  };

  MoreButton.prototype.toggle = function () {
    if ( isNodeHidden( this.pane ) ) {
      this.open();
    } else {
      this.close();
    }
  };

  MoreButton.prototype.resetCloseTimer = function () {
    clearTimeout( this.closeTimer );
    this.closeTimer = setTimeout( this.close.bind( this ), MoreButton.hoverCloseDelay );
  };

  MoreButton.prototype.attachHandlers = function () {
    this.buttonClick = function ( event ) {
      event.preventDefault();
      event.stopPropagation();

      this.openedBy = 'click';
      clearTimeout( this.openTimer );
      clearTimeout( this.closeTimer );

      closeEmailDialog();

      if ( this.recentlyOpenedByHover ) {
        this.recentlyOpenedByHover = false;
        clearTimeout( this.hoverOpenTimer );
        this.open();
      } else {
        this.toggle();
      }
    }.bind( this );

    this.buttonEnter = function () {
      if ( !this.openedBy ) {
        this.openTimer = setTimeout(
          function () {
            closeEmailDialog();
            this.open();
            this.openedBy = 'hover';
            this.recentlyOpenedByHover = true;
            this.hoverOpenTimer = setTimeout(
              function () {
                this.recentlyOpenedByHover = false;
              }.bind( this ),
              MoreButton.recentOpenDelay
            );
          }.bind( this ),
          MoreButton.hoverOpenDelay
        );
      }
      clearTimeout( this.closeTimer );
    }.bind( this );

    this.buttonLeave = function () {
      if ( this.openedBy === 'hover' ) {
        this.resetCloseTimer();
      }
      clearTimeout( this.openTimer );
    }.bind( this );

    this.paneEnter = function () {
      clearTimeout( this.closeTimer );
    }.bind( this );

    this.paneLeave = function () {
      if ( this.openedBy === 'hover' ) {
        this.resetCloseTimer();
      }
    }.bind( this );

    this.documentClick = function () {
      this.close();
    }.bind( this );

    this.button.addEventListener( 'click', this.buttonClick );
    document.addEventListener( 'click', this.documentClick );

    if ( document.ontouchstart === undefined ) {
      // Non-touchscreen device: use hover/mouseout with delay
      this.button.addEventListener( 'mouseenter', this.buttonEnter );
      this.button.addEventListener( 'mouseleave', this.buttonLeave );
      this.pane.addEventListener( 'mouseenter', this.paneEnter );
      this.pane.addEventListener( 'mouseleave', this.paneLeave );
    }
  };

  // ---------------------------- SHARE COUNTS ---------------------------- //

  if ( window.sharing_js_options && window.sharing_js_options.counts ) {
    var WPCOMSharing = {
      done_urls: [],
      get_counts: function () {
        var url, requests, id, service, service_request;

        if ( 'undefined' === typeof WPCOM_sharing_counts ) {
          return;
        }

        for ( url in WPCOM_sharing_counts ) {
          id = WPCOM_sharing_counts[ url ];

          if ( 'undefined' !== typeof WPCOMSharing.done_urls[ id ] ) {
            continue;
          }

          requests = {
            // Pinterest handles share counts for both http and https
            pinterest: [
              window.location.protocol +
              '//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url=' +
              encodeURIComponent( url ),
            ],
            // Facebook protocol summing has been shown to falsely double counts, so we only request the current URL
            facebook: [
              window.location.protocol +
              '//graph.facebook.com/?callback=WPCOMSharing.update_facebook_count&ids=' +
              encodeURIComponent( url ),
            ],
          };

          for ( service in requests ) {
            if ( !document.querySelector( 'a[data-shared=sharing-' + service + '-' + id + ']' ) ) {
              continue;
            }

            while ( ( service_request = requests[ service ].pop() ) ) {
              loadScript( service_request );
            }

            if ( window.sharing_js_options.is_stats_active ) {
              WPCOMSharing.bump_sharing_count_stat( service );
            }
          }

          WPCOMSharing.done_urls[ id ] = true;
        }
      },

      // get the version of the url that was stored in the dom
      get_permalink: function ( url ) {
        if ( 'https:' === window.location.protocol ) {
          url = url.replace( /^http:\/\//i, 'https://' );
        } else {
          url = url.replace( /^https:\/\//i, 'http://' );
        }

        return url;
      },
      update_facebook_count: function ( data ) {
        var url, permalink;

        if ( !data ) {
          return;
        }

        for ( url in data ) {
          if (
            !Object.prototype.hasOwnProperty.call( data, url ) ||
            !data[ url ].share ||
            !data[ url ].share.share_count
          ) {
            continue;
          }

          permalink = WPCOMSharing.get_permalink( url );

          if ( !( permalink in WPCOM_sharing_counts ) ) {
            continue;
          }

          WPCOMSharing.inject_share_count(
            'sharing-facebook-' + WPCOM_sharing_counts[ permalink ],
            data[ url ].share.share_count
          );
        }
      },
      update_pinterest_count: function ( data ) {
        if ( 'undefined' !== typeof data.count && data.count * 1 > 0 ) {
          WPCOMSharing.inject_share_count(
            'sharing-pinterest-' + WPCOM_sharing_counts[ data.url ],
            data.count
          );
        }
      },
      inject_share_count: function ( id, count ) {
        forEachNode( document.querySelectorAll( 'a[data-shared=' + id + '] > span' ), function (
          span
        ) {
          var countNode = span.querySelector( '.share-count' );
          removeNode( countNode );
          var newNode = document.createElement( 'span' );
          newNode.className = 'share-count';
          newNode.textContent = WPCOMSharing.format_count( count );
          span.appendChild( newNode );
        } );
      },
      format_count: function ( count ) {
        if ( count < 1000 ) {
          return count;
        }
        if ( count >= 1000 && count < 10000 ) {
          return String( count ).substring( 0, 1 ) + 'K+';
        }
        return '10K+';
      },
      bump_sharing_count_stat: function ( service ) {
        new Image().src =
          document.location.protocol +
          '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request=' +
          service +
          '&r=' +
          Math.random();
      },
    };
    window.WPCOMSharing = WPCOMSharing;
  }

  // ------------------------ BUTTON FUNCTIONALITY ------------------------ //

  function shareIsEmail( val ) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(
      val
    );
  }

  function closeEmailDialog() {
    var dialog = document.querySelector( '#sharing_email' );
    hideNode( dialog );
  }

  // Sharing initialization.
  // Will run immediately or on `DOMContentLoaded`, depending on current page status.
  function init() {
    // Move email dialog to end of body.
    var emailDialog = document.querySelector( '#sharing_email' );
    if ( emailDialog ) {
      document.body.appendChild( emailDialog );
    }

    WPCOMSharing_do();
  }
  if ( document.readyState !== 'loading' ) {
    init();
  } else {
    document.addEventListener( 'DOMContentLoaded', init );
  }

  // Set up sharing again whenever a new post loads, to pick up any new buttons.
  document.body.addEventListener( 'is.post-load', WPCOMSharing_do );

  // Set up sharing, updating counts and adding all button functionality.
  function WPCOMSharing_do() {
    if ( window.WPCOMSharing ) {
      window.WPCOMSharing.get_counts();
    }

    forEachNode( document.querySelectorAll( '.sharedaddy a' ), function ( anchor ) {
      var href = anchor.getAttribute( 'href' );
      if ( href && href.indexOf( 'share=' ) !== -1 && href.indexOf( '&nb=1' ) === -1 ) {
        anchor.setAttribute( 'href', href + '&nb=1' );
      }
    } );

    // Show hidden buttons

    // Touchscreen device: use click.
    // Non-touchscreen device: use click if not already appearing due to a hover event

    forEachNode( document.querySelectorAll( '.sharedaddy a.sharing-anchor' ), function (
      buttonEl
    ) {
      MoreButton.instantiateOrReuse( buttonEl );
    } );

    if ( document.ontouchstart !== undefined ) {
      document.body.classList.add( 'jp-sharing-input-touch' );
    }

    // Add click functionality
    forEachNode( document.querySelectorAll( '.sharedaddy ul' ), function ( group ) {
      if ( group.getAttribute( 'data-sharing-events-added' ) === 'true' ) {
        return;
      }
      group.setAttribute( 'data-sharing-events-added', 'true' );

      var printUrl = function ( uniqueId, urlToPrint ) {
        var iframe = document.createElement( 'iframe' );
        iframe.setAttribute(
          'style',
          'position:fixed; top:100; left:100; height:1px; width:1px; border:none;'
        );
        iframe.setAttribute( 'id', 'printFrame-' + uniqueId );
        iframe.setAttribute( 'name', iframe.getAttribute( 'id' ) );
        iframe.setAttribute( 'src', urlToPrint );
        iframe.setAttribute(
          'onload',
          'frames["printFrame-' +
          uniqueId +
          '"].focus();frames["printFrame-' +
          uniqueId +
          '"].print();'
        );
        document.body.appendChild( iframe );
      };

      // Print button
      forEachNode( group.querySelectorAll( 'a.share-print' ), function ( printButton ) {
        printButton.addEventListener( 'click', function ( event ) {
          event.preventDefault();
          event.stopPropagation();

          var ref = printButton.getAttribute( 'href' ) || '';
          var doPrint = function () {
            if ( ref.indexOf( '#print' ) === -1 ) {
              var uid = new Date().getTime();
              printUrl( uid, ref );
            } else {
              window.print();
            }
          };

          // Is the button in a dropdown?
          var pane = closest( printButton, PANE_SELECTOR );
          if ( pane ) {
            var moreButton = MoreButton.getButtonInstanceFromPane( pane );
            if ( moreButton ) {
              moreButton.close();
              doPrint();
            }
          } else {
            doPrint();
          }
        } );
      } );

      // Press This button
      forEachNode( group.querySelectorAll( 'a.share-press-this' ), function ( pressThisButton ) {
        pressThisButton.addEventListener( 'click', function ( event ) {
          event.preventDefault();
          event.stopPropagation();

          var s = '';

          if ( window.getSelection ) {
            s = window.getSelection();
          } else if ( document.getSelection ) {
            s = document.getSelection();
          } else if ( document.selection ) {
            s = document.selection.createRange().text;
          }

          if ( s ) {
            var href = pressThisButton.getAttribute( 'href' );
            pressThisButton.setAttribute( 'href', href + '&sel=' + encodeURI( s ) );
          }

          if (
            !window.open(
              pressThisButton.getAttribute( 'href' ),
              't',
              'toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570'
            )
          ) {
            document.location.href = pressThisButton.getAttribute( 'href' );
          }
        } );
      } );

      // Email button
      forEachNode( group.querySelectorAll( 'a.share-email' ), function ( emailButton ) {
        var dialog = document.querySelector( '#sharing_email' );

        emailButton.addEventListener( 'click', function ( event ) {
          event.preventDefault();
          event.stopPropagation();

          // Load reCAPTCHA if needed.
          if ( typeof grecaptcha !== 'object' && !recaptchaScriptAdded ) {
            var configEl = document.querySelector( '.g-recaptcha' );

            if ( configEl && configEl.getAttribute( 'data-lazy' ) === 'true' ) {
              recaptchaScriptAdded = true;
              loadScript( decodeURI( configEl.getAttribute( 'data-url' ) ) );
            }
          }

          var url = emailButton.getAttribute( 'href' );
          var currentDomain = window.location.protocol + '//' + window.location.hostname + '/';
          if ( url.indexOf( currentDomain ) !== 0 ) {
            return true;
          }

          if ( !isNodeHidden( dialog ) ) {
            closeEmailDialog();
            return;
          }

          removeNode( document.querySelector( '#sharing_email .response' ) );

          var form = document.querySelector( '#sharing_email form' );
          showNode( form );
          form.querySelector( 'input[type=submit]' ).removeAttribute( 'disabled' );
          showNode( form.querySelector( 'a.sharing_cancel' ) );

          // Reset reCATPCHA if exists.
          if (
            'object' === typeof grecaptcha &&
            'function' === typeof grecaptcha.reset &&
            window.___grecaptcha_cfg.count
          ) {
            grecaptcha.reset();
          }

          // Show dialog
          var rect = emailButton.getBoundingClientRect();
          var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
          dialog.style.left = scrollLeft + rect.left + 'px';
          dialog.style.top = scrollTop + rect.top + rect.height + 'px';
          showNode( dialog );

          // Close all open More Button dialogs.
          MoreButton.closeAll();
        } );

        // Hook up other buttons
        dialog.querySelector( 'a.sharing_cancel' ).addEventListener( 'click', function ( event ) {
          event.preventDefault();
          event.stopPropagation();

          hideNode( dialog.querySelector( '.errors' ) );
          hideNode( dialog );
          hideNode( document.querySelector( '#sharing_background' ) );
        } );

        var submitButton = dialog.querySelector( 'input[type=submit]' );
        submitButton.addEventListener( 'click', function ( event ) {
          event.preventDefault();
          event.stopPropagation();

          var form = closest( submitButton, 'form' );
          var source_email_input = form.querySelector( 'input[name=source_email]' );
          var target_email_input = form.querySelector( 'input[name=target_email]' );

          // Disable buttons + enable loading icon
          submitButton.setAttribute( 'disabled', true );
          hideNode( form.querySelector( 'a.sharing_cancel' ) );
          forEachNode( form.querySelectorAll( 'img.loading' ), function ( img ) {
            showNode( img );
          } );

          hideNode( form.querySelector( '.errors' ) );

          forEachNode( form.querySelectorAll( '.error' ), function ( node ) {
            node.classList.remove( 'error' );
          } );

          if ( !shareIsEmail( source_email_input.value ) ) {
            source_email_input.classList.add( 'error' );
          }

          if ( !shareIsEmail( target_email_input.value ) ) {
            target_email_input.classList.add( 'error' );
          }

          if ( !form.querySelector( '.error' ) ) {
            // Encode form data. This would be much easier if we could rely on URLSearchParams...
            var params = [];
            for ( var i = 0; i < form.elements.length; i++ ) {
              if ( form.elements[ i ].name ) {
                // Encode each form element into a URI-compatible string.
                var encoded =
                  encodeURIComponent( form.elements[ i ].name ) +
                  '=' +
                  encodeURIComponent( form.elements[ i ].value );
                // In x-www-form-urlencoded, spaces should be `+`, not `%20`.
                params.push( encoded.replace( '%20', '+' ) );
              }
            }
            var data = params.join( '&' );

            // AJAX send the form
            var request = new XMLHttpRequest();
            request.open( 'POST', emailButton.getAttribute( 'href' ), true );
            request.setRequestHeader(
              'Content-Type',
              'application/x-www-form-urlencoded; charset=UTF-8'
            );
            request.setRequestHeader( 'x-requested-with', 'XMLHttpRequest' );

            request.onreadystatechange = function () {
              if ( this.readyState === XMLHttpRequest.DONE && this.status === 200 ) {
                forEachNode( form.querySelectorAll( 'img.loading' ), function ( img ) {
                  hideNode( img );
                } );

                if ( this.response === '1' || this.response === '2' || this.response === '3' ) {
                  showNode( dialog.querySelector( '.errors-' + this.response ) );
                  dialog.querySelector( 'input[type=submit]' ).removeAttribute( 'disabled' );
                  showNode( dialog.querySelector( 'a.sharing_cancel' ) );

                  if ( typeof grecaptcha === 'object' && typeof grecaptcha.reset === 'function' ) {
                    grecaptcha.reset();
                  }
                } else {
                  hideNode( form );
                  var temp = document.createElement( 'div' );
                  temp.innerHTML = this.response;
                  dialog.appendChild( temp.firstChild );
                  showNode( dialog.querySelector( 'a.sharing_cancel' ) );
                  var closeButton = dialog.querySelector( '.response a.sharing_cancel' );
                  if ( closeButton ) {
                    closeButton.addEventListener( 'click', function ( event ) {
                      event.preventDefault();
                      event.stopPropagation();

                      closeEmailDialog();
                      hideNode( document.querySelector( '#sharing_background' ) );
                    } );
                  }
                }
              }
            };

            request.send( data );

            return;
          }

          forEachNode( dialog.querySelectorAll( 'img.loading' ), function ( img ) {
            hideNode( img );
          } );
          submitButton.removeAttribute( 'disabled' );
          showNode( dialog.querySelector( 'a.sharing_cancel' ) );
          forEachNode( dialog.querySelectorAll( '.errors-1' ), function ( error ) {
            showNode( error );
          } );
        } );
      } );
    } );

    forEachNode(
      document.querySelectorAll( 'li.share-email, li.share-custom a.sharing-anchor' ),
      function ( node ) {
        node.classList.add( 'share-service-visible' );
      }
    );
  }
} )();;
