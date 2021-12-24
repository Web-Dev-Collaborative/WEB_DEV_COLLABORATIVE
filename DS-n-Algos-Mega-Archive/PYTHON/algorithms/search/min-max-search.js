(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../../util'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../../util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.util);
    global.minMaxSearch = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.findMaxValue = findMaxValue;
  exports.findMinValue = findMinValue;
  function findMaxValue(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;

    if (array && array.length > 0) {
      var max = array[0];
      for (var i = 1; i < array.length; i++) {
        if (compareFn(max, array[i]) === _util.Compare.LESS_THAN) {
          max = array[i];
        }
      }
      return max;
    }
    return undefined;
  }
  function findMinValue(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;

    if (array && array.length > 0) {
      var min = array[0];
      for (var i = 1; i < array.length; i++) {
        if (compareFn(min, array[i]) === _util.Compare.BIGGER_THAN) {
          min = array[i];
        }
      }
      return min;
    }
    return undefined;
  }
});