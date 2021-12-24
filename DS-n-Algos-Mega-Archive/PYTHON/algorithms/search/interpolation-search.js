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
    global.interpolationSearch = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.interpolationSearch = interpolationSearch;
  function interpolationSearch(array, value) {
    var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultCompare;
    var equalsFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _util.defaultEquals;
    var diffFn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _util.defaultDiff;
    var length = array.length;

    var low = 0;
    var high = length - 1;
    var position = -1;
    var delta = -1;
    while (low <= high && (0, _util.biggerEquals)(value, array[low], compareFn) && (0, _util.lesserEquals)(value, array[high], compareFn)) {
      delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
      position = low + Math.floor((high - low) * delta);
      if (equalsFn(array[position], value)) {
        return position;
      }
      if (compareFn(array[position], value) === _util.Compare.LESS_THAN) {
        low = position + 1;
      } else {
        high = position - 1;
      }
    }
    return _util.DOES_NOT_EXIST;
  }
});