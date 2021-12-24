(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../search/min-max-search'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../search/min-max-search'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.minMaxSearch);
    global.radixSort = mod.exports;
  }
})(this, function (exports, _minMaxSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.radixSort = radixSort;


  var getBucketIndex = function getBucketIndex(value, minValue, significantDigit, radixBase) {
    return Math.floor((value - minValue) / significantDigit % radixBase);
  };

  var countingSortForRadix = function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    var bucketsIndex = void 0;
    var buckets = [];
    var aux = [];
    for (var i = 0; i < radixBase; i++) {
      buckets[i] = 0;
    }
    for (var _i = 0; _i < array.length; _i++) {
      bucketsIndex = getBucketIndex(array[_i], minValue, significantDigit, radixBase);
      buckets[bucketsIndex]++;
    }
    for (var _i2 = 1; _i2 < radixBase; _i2++) {
      buckets[_i2] += buckets[_i2 - 1];
    }
    for (var _i3 = array.length - 1; _i3 >= 0; _i3--) {
      bucketsIndex = getBucketIndex(array[_i3], minValue, significantDigit, radixBase);
      aux[--buckets[bucketsIndex]] = array[_i3];
    }
    for (var _i4 = 0; _i4 < array.length; _i4++) {
      array[_i4] = aux[_i4];
    }
    return array;
  };
  function radixSort(array) {
    var radixBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    if (array.length < 2) {
      return array;
    }
    var minValue = (0, _minMaxSearch.findMinValue)(array);
    var maxValue = (0, _minMaxSearch.findMaxValue)(array);
    // Perform counting sort for each significant digit, starting at 1
    var significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
      // console.log('radix sort for digit ' + significantDigit);
      array = countingSortForRadix(array, radixBase, significantDigit, minValue);
      // console.log(array.join());
      significantDigit *= radixBase;
    }
    return array;
  }
});