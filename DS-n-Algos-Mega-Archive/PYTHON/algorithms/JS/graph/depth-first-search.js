(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.depthFirstSearch = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // import Graph from '../../data-structures/graph';

  var Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
  };

  var initializeColor = function initializeColor(vertices) {
    var color = {};
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = Colors.WHITE;
    }
    return color;
  };

  var depthFirstSearchVisit = function depthFirstSearchVisit(u, color, adjList, callback) {
    color[u] = Colors.GREY;
    if (callback) {
      callback(u);
    }
    // console.log('Discovered ' + u);
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        depthFirstSearchVisit(w, color, adjList, callback);
      }
    }
    color[u] = Colors.BLACK;
    // console.log('explored ' + u);
  };

  var depthFirstSearch = exports.depthFirstSearch = function depthFirstSearch(graph, callback) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);

    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === Colors.WHITE) {
        depthFirstSearchVisit(vertices[i], color, adjList, callback);
      }
    }
  };

  var DFSVisit = function DFSVisit(u, color, d, f, p, time, adjList) {
    // console.log('discovered ' + u);
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        p[w] = u;
        DFSVisit(w, color, d, f, p, time, adjList);
      }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count;
    // console.log('explored ' + u);
  };

  var DFS = exports.DFS = function DFS(graph) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    var d = {};
    var f = {};
    var p = {};
    var time = { count: 0 };
    for (var i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }
    for (var _i = 0; _i < vertices.length; _i++) {
      if (color[vertices[_i]] === Colors.WHITE) {
        DFSVisit(vertices[_i], color, d, f, p, time, adjList);
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    };
  };
});