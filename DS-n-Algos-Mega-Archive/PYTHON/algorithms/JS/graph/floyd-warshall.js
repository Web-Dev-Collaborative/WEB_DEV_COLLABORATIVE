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
    global.floydWarshall = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var floydWarshall = exports.floydWarshall = function floydWarshall(graph) {
    var dist = [];
    var length = graph.length;

    for (var i = 0; i < length; i++) {
      dist[i] = [];
      for (var j = 0; j < length; j++) {
        if (i === j) {
          dist[i][j] = 0;
        } else if (!isFinite(graph[i][j])) {
          dist[i][j] = Infinity;
        } else {
          dist[i][j] = graph[i][j];
        }
      }
    }
    for (var k = 0; k < length; k++) {
      for (var _i = 0; _i < length; _i++) {
        for (var _j = 0; _j < length; _j++) {
          if (dist[_i][k] + dist[k][_j] < dist[_i][_j]) {
            dist[_i][_j] = dist[_i][k] + dist[k][_j];
          }
        }
      }
    }
    return dist;
  };
});