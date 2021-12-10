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
    global.countingSort = mod.exports;
  }
})(this, function (exports, _minMaxSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.countingSort = countingSort;
  function countingSort(array) {
    if (array.length < 2) {
      return array;
    }
    var maxValue = (0, _minMaxSearch.findMaxValue)(array);
    var sortedIndex = 0;
    var counts = new Array(maxValue + 1);
    array.forEach(function (element) {
      if (!counts[element]) {
        counts[element] = 0;
      }
      counts[element]++;
    });
    // console.log('Frequencies: ' + counts.join());
    counts.forEach(function (element, i) {
      while (element > 0) {
        array[sortedIndex++] = i;
        element--;
      }
    });
    return array;
  }
});