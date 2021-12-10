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
    global.shellSort = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shellSort = shellSort;
  function shellSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;

    var increment = array.length / 2;
    while (increment > 0) {
      for (var i = increment; i < array.length; i++) {
        var j = i;
        var temp = array[i];
        while (j >= increment && compareFn(array[j - increment], temp) === _util.Compare.BIGGER_THAN) {
          array[j] = array[j - increment];
          j -= increment;
        }
        array[j] = temp;
      }
      if (increment === 2) {
        increment = 1;
      } else {
        increment = Math.floor(increment * 5 / 11);
      }
    }
    return array;
  }
});