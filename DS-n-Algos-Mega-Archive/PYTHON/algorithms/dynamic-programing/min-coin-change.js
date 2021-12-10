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
    var cache = [];

    var makeChange = function makeChange(value) {
      if (!value) {
        return [];
      }
      if (cache[value]) {
        return cache[value];
      }
      var min = [];
      var newMin = void 0;
      var newAmount = void 0;
      for (var i = 0; i < coins.length; i++) {
        var coin = coins[i];
        newAmount = value - coin;
        if (newAmount >= 0) {
          newMin = makeChange(newAmount);
        }
        if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
          min = [coin].concat(newMin);
          // console.log('new Min ' + min + ' for ' + amount);
        }
      }
      return cache[value] = min;
    };
    return makeChange(amount);
  }
});