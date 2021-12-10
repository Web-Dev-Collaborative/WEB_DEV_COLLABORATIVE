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
    global.selectionSort = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectionSort = undefined;
  var selectionSort = exports.selectionSort = function selectionSort(array) {
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.defaultCompare;
    var length = array.length;

    var indexMin = void 0;
    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      // console.log('index ' + array[i]);
      for (var j = i; j < length; j++) {
        if (compareFn(array[indexMin], array[j]) === _util.Compare.BIGGER_THAN) {
          // console.log('new index min ' + array[j]);
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        // console.log('swap ' + array[i] + ' with ' + array[indexMin]);
        (0, _util.swap)(array, i, indexMin);
      }
    }
    return array;
  };
});