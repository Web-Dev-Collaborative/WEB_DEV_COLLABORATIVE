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
    global.quicksort = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.quickSort = quickSort;


  function partition(array, left, right, compareFn) {
    var pivot = array[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
      while (compareFn(array[i], pivot) === _util.Compare.LESS_THAN) {
        i++;
      }
      while (compareFn(array[j], pivot) === _util.Compare.BIGGER_THAN) {
        j--;
      }
      if (i <= j) {
        (0, _util.swap)(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  function quick(array, left, right, compareFn) {
    var index = void 0;
    if (array.length > 1) {
      index = partition(array, left, right, compareFn);
      if (left < index - 1) {
        quick(array, left, index - 1, compareFn);
      }
      if (index < right) {
        quick(array, index, right, compareFn);
      }
    }
    return array;
  }
  function quickSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;

    return quick(array, 0, array.length - 1, compareFn);
  }
});