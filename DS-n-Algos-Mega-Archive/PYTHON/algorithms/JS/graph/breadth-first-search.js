(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../../data-structures/queue'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../../data-structures/queue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.queue);
    global.breadthFirstSearch = mod.exports;
  }
})(this, function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BFS = exports.breadthFirstSearch = undefined;

  var _queue2 = _interopRequireDefault(_queue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var breadthFirstSearch = exports.breadthFirstSearch = function breadthFirstSearch(graph, startVertex, callback) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    var queue = new _queue2.default();

    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = Colors.GREY;
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === Colors.WHITE) {
          color[w] = Colors.GREY;
          queue.enqueue(w);
        }
      }
      color[u] = Colors.BLACK;
      if (callback) {
        callback(u);
      }
    }
  };

  var BFS = exports.BFS = function BFS(graph, startVertex) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    var queue = new _queue2.default();
    var distances = {};
    var predecessors = {};
    queue.enqueue(startVertex);
    for (var i = 0; i < vertices.length; i++) {
      distances[vertices[i]] = 0;
      predecessors[vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = Colors.GREY;
      for (var _i = 0; _i < neighbors.length; _i++) {
        var w = neighbors[_i];
        if (color[w] === Colors.WHITE) {
          color[w] = Colors.GREY;
          distances[w] = distances[u] + 1;
          predecessors[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = Colors.BLACK;
    }
    return {
      distances: distances,
      predecessors: predecessors
    };
  };
});