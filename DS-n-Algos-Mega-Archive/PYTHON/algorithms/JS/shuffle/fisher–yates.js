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
    global.fisherYates = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shuffle = shuffle;
  function shuffle(array) {
    var currentIndex = array.length;
    while (currentIndex !== 0) {
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      (0, _util.swap)(array, currentIndex, randomIndex);
    }
    return array;
  }
});