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
    global.minCoinChange = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.minCoinChange = minCoinChange;
  function minCoinChange(coins, amount) {
    var change = [];
    var total = 0;
    for (var i = coins.length; i >= 0; i--) {
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change;
  }
});