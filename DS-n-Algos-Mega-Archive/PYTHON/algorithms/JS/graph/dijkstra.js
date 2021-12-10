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
    global.dijkstra = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var INF = Number.MAX_SAFE_INTEGER;
  var minDistance = function minDistance(dist, visited) {
    var min = INF;
    var minIndex = -1;
    for (var v = 0; v < dist.length; v++) {
      if (visited[v] === false && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }
    return minIndex;
  };
  var dijkstra = exports.dijkstra = function dijkstra(graph, src) {
    var dist = [];
    var visited = [];
    var length = graph.length;

    for (var i = 0; i < length; i++) {
      dist[i] = INF;
      visited[i] = false;
    }
    dist[src] = 0;
    for (var _i = 0; _i < length - 1; _i++) {
      var u = minDistance(dist, visited);
      visited[u] = true;
      for (var v = 0; v < length; v++) {
        if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
          dist[v] = dist[u] + graph[u][v];
        }
      }
    }
    return dist;
  };
});