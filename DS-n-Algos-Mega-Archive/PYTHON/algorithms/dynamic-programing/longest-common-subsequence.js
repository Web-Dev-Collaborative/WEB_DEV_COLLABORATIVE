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
    var m = wordX.length;
    var n = wordY.length;
    var l = [];
    for (var i = 0; i <= m; i++) {
      l[i] = [];
      for (var j = 0; j <= n; j++) {
        l[i][j] = 0;
      }
    }
    for (var _i = 0; _i <= m; _i++) {
      for (var _j = 0; _j <= n; _j++) {
        if (_i === 0 || _j === 0) {
          l[_i][_j] = 0;
        } else if (wordX[_i - 1] === wordY[_j - 1]) {
          l[_i][_j] = l[_i - 1][_j - 1] + 1;
        } else {
          var a = l[_i - 1][_j];
          var b = l[_i][_j - 1];
          l[_i][_j] = a > b ? a : b; // max(a,b)
        }
      }
      // console.log(l[i].join());
    }
    return l[m][n];
  }
});