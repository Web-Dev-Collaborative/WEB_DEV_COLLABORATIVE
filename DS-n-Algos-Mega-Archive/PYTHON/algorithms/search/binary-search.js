(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../../util', '../sorting/quicksort'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../../util'), require('../sorting/quicksort'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.util, global.quicksort);
    global.binarySearch = mod.exports;
  }
})(this, function (exports, _util, _quicksort) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.binarySearch = binarySearch;
  function binarySearch(array, value) {
    var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultCompare;

    var sortedArray = (0, _quicksort.quickSort)(array);
    var low = 0;
    var high = sortedArray.length - 1;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      var element = sortedArray[mid];
      // console.log('mid element is ' + element);
      if (compareFn(element, value) === _util.Compare.LESS_THAN) {
        low = mid + 1;
        // console.log('low is ' + low);
      } else if (compareFn(element, value) === _util.Compare.BIGGER_THAN) {
        high = mid - 1;
        // console.log('high is ' + high);
      } else {
        // console.log('found it');
        return mid;
      }
    }
    return _util.DOES_NOT_EXIST;
  }
});