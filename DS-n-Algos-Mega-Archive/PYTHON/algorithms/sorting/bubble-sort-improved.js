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
    global.bubbleSortImproved = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.modifiedBubbleSort = modifiedBubbleSort;
  function modifiedBubbleSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;
    var length = array.length;

    for (var i = 0; i < length; i++) {
      // console.log('--- ');
      for (var j = 0; j < length - 1 - i; j++) {
        // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
        if (compareFn(array[j], array[j + 1]) === _util.Compare.BIGGER_THAN) {
          // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
          (0, _util.swap)(array, j, j + 1);
        }
      }
    }
    return array;
  }
});