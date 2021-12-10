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
    global.longestCommonSubsequence = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lcs = lcs;
  function lcs(wordX, wordY) {
    var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : wordX.length;
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : wordY.length;

    if (m === 0 || n === 0) {
      return 0;
    }
    if (wordX[m - 1] === wordY[n - 1]) {
      return 1 + lcs(wordX, wordY, m - 1, n - 1);
    }
    var a = lcs(wordX, wordY, m, n - 1);
    var b = lcs(wordX, wordY, m - 1, n);
    return a > b ? a : b;
  }
});