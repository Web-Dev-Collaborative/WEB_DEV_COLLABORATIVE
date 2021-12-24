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
    global.mergeSort = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mergeSort = mergeSort;


  function merge(left, right, compareFn) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i < left.length && j < right.length) {
      result.push(compareFn(left[i], right[j]) === _util.Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }
  function mergeSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;

    if (array.length > 1) {
      var _array = array,
          length = _array.length;

      var middle = Math.floor(length / 2);
      var left = mergeSort(array.slice(0, middle), compareFn);
      var right = mergeSort(array.slice(middle, length), compareFn);
      array = merge(left, right, compareFn);
    }
    return array;
  }
});