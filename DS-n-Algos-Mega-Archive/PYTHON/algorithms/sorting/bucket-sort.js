(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './insertion-sort'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./insertion-sort'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.insertionSort);
    global.bucketSort = mod.exports;
  }
})(this, function (exports, _insertionSort) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bucketSort = bucketSort;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function createBuckets(array, bucketSize) {
    var minValue = array[0];
    var maxValue = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
      } else if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = [];
    for (var _i = 0; _i < bucketCount; _i++) {
      buckets[_i] = [];
    }
    for (var _i2 = 0; _i2 < array.length; _i2++) {
      buckets[Math.floor((array[_i2] - minValue) / bucketSize)].push(array[_i2]);
    }
    return buckets;
  }
  function sortBuckets(buckets) {
    var sortedArray = [];
    for (var i = 0; i < buckets.length; i++) {
      if (buckets[i] != null) {
        (0, _insertionSort.insertionSort)(buckets[i]);
        sortedArray.push.apply(sortedArray, _toConsumableArray(buckets[i]));
      }
    }
    return sortedArray;
  }
  function bucketSort(array) {
    var bucketSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

    if (array.length < 2) {
      return array;
    }
    var buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
  }
});