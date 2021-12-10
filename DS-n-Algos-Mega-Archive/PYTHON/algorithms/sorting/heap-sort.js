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
    global.heapSort = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = heapSort;


  function heapify(array, index, heapSize, compareFn) {
    var largest = index;
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
      largest = left;
    }
    if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
      largest = right;
    }
    if (largest !== index) {
      (0, _util.swap)(array, index, largest);
      heapify(array, largest, heapSize, compareFn);
    }
  }

  function buildMaxHeap(array, compareFn) {
    for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
      heapify(array, i, array.length, compareFn);
    }
    return array;
  }

  function heapSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;

    var heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
      (0, _util.swap)(array, 0, --heapSize);
      heapify(array, 0, heapSize, compareFn);
    }
    return array;
  }
  module.exports = exports.default;
});