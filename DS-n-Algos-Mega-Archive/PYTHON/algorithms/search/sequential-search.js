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
    global.sequentialSearch = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sequentialSearch = sequentialSearch;
  function sequentialSearch(array, value) {
    var equalsFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultEquals;

    for (var i = 0; i < array.length; i++) {
      if (equalsFn(value, array[i])) {
        return i;
      }
    }
    return _util.DOES_NOT_EXIST;
  }
});