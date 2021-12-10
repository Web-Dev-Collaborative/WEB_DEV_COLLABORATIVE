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
    global.matrixChainMultiplication = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.matrixChainOrder = matrixChainOrder;
  function matrixChainOrder(p) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var j = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : p.length - 1;

    if (i === j) {
      return 0;
    }
    var min = Number.MAX_SAFE_INTEGER;
    for (var k = i; k < j; k++) {
      var count = matrixChainOrder(p, i, k) + matrixChainOrder(p, k + 1, j) + p[i - 1] * p[k] * p[j];
      if (count < min) {
        min = count;
      }
    }
    return min;
  }
});