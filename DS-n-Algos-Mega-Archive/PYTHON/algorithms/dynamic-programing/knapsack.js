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
    global.knapsack = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.knapSack = knapSack;
  function findValues(n, capacity, kS) {
    var i = n;
    var k = capacity;
    // console.log('Items that are part of the solution:');
    while (i > 0 && k > 0) {
      if (kS[i][k] !== kS[i - 1][k]) {
        // console.log(
        //  item ' + i + ' can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]
        //  );
        i--;
        k -= kS[i][k];
      } else {
        i--;
      }
    }
  }

  function knapSack(capacity, weights, values, n) {
    var kS = [];
    for (var i = 0; i <= n; i++) {
      kS[i] = [];
    }
    for (var _i = 0; _i <= n; _i++) {
      for (var w = 0; w <= capacity; w++) {
        if (_i === 0 || w === 0) {
          kS[_i][w] = 0;
        } else if (weights[_i - 1] <= w) {
          var a = values[_i - 1] + kS[_i - 1][w - weights[_i - 1]];
          var b = kS[_i - 1][w];
          kS[_i][w] = a > b ? a : b; // max(a,b)
          // console.log(a + ' can be part of the solution');
        } else {
          kS[_i][w] = kS[_i - 1][w];
        }
      }
      // console.log(kS[i].join());
    }
    // extra algorithm to find the items that are part of the solution
    findValues(n, capacity, kS);
    return kS[n][capacity];
  }
});