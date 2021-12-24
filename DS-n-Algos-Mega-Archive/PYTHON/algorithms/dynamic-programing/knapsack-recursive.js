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
    global.knapsackRecursive = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.knapSack = knapSack;
  function knapSack(capacity, weights, values, n) {
    if (n === 0 || capacity === 0) {
      return 0;
    }
    if (weights[n - 1] > capacity) {
      return knapSack(capacity, weights, values, n - 1);
    }
    var a = values[n - 1] + knapSack(capacity - weights[n - 1], weights, values, n - 1);
    var b = knapSack(capacity, weights, values, n - 1);
    return a > b ? a : b;
  }
});