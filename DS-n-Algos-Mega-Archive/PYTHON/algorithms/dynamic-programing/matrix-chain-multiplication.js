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
  function printOptimalParenthesis(s, i, j) {
    if (i === j) {
      // console.log('A[' + i + ']');
    } else {
      // console.log('(');
      printOptimalParenthesis(s, i, s[i][j]);
      printOptimalParenthesis(s, s[i][j] + 1, j);
      // console.log(')');
    }
  }

  function matrixChainOrder(p) {
    var n = p.length;
    var m = [];
    var s = [];
    for (var i = 1; i <= n; i++) {
      m[i] = [];
      m[i][i] = 0;
    }
    for (var _i = 0; _i <= n; _i++) {
      // to help printing the optimal solution
      s[_i] = []; // auxiliary
      for (var j = 0; j <= n; j++) {
        s[_i][j] = 0;
      }
    }
    for (var l = 2; l < n; l++) {
      for (var _i2 = 1; _i2 <= n - l + 1; _i2++) {
        var _j = _i2 + l - 1;
        m[_i2][_j] = Number.MAX_SAFE_INTEGER;
        for (var k = _i2; k <= _j - 1; k++) {
          // q = cost/scalar multiplications
          var q = m[_i2][k] + m[k + 1][_j] + p[_i2 - 1] * p[k] * p[_j];
          if (q < m[_i2][_j]) {
            m[_i2][_j] = q;
            s[_i2][_j] = k; // s[i,j] = Second auxiliary table that stores k
          }
        }
      }
    }
    // console.log(m);
    // console.log(s);
    printOptimalParenthesis(s, 1, n - 1);
    return m[1][n - 1];
  }
});