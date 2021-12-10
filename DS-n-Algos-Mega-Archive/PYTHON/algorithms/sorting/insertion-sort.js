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
    global.insertionSort = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.insertionSort = undefined;
  var insertionSort = exports.insertionSort = function insertionSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;
    var length = array.length;

    var temp = void 0;
    for (var i = 1; i < length; i++) {
      var j = i;
      temp = array[i];
      // console.log('to be inserted ' + temp);
      while (j > 0 && compareFn(array[j - 1], temp) === _util.Compare.BIGGER_THAN) {
        // console.log('shift ' + array[j - 1]);
        array[j] = array[j - 1];
        j--;
      }
      // console.log('insert ' + temp);
      array[j] = temp;
    }
    return array;
  };
});