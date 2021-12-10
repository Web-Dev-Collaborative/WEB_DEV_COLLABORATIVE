(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.sudokuSolver = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sudokuSolver = sudokuSolver;
  var UNASSIGNED = 0;

  function usedInRow(matrix, row, num) {
    for (var col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === num) {
        return true;
      }
    }
    return false;
  }

  function usedInCol(matrix, col, num) {
    for (var row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === num) {
        return true;
      }
    }
    return false;
  }

  function usedInBox(matrix, boxStartRow, boxStartCol, num) {
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (matrix[row + boxStartRow][col + boxStartCol] === num) {
          return true;
        }
      }
    }
    return false;
  }

  function isSafe(matrix, row, col, num) {
    return !usedInRow(matrix, row, num) && !usedInCol(matrix, col, num) && !usedInBox(matrix, row - row % 3, col - col % 3, num);
  }
  function solveSudoku(matrix) {
    var row = 0;
    var col = 0;
    var checkBlankSpaces = false;

    for (row = 0; row < matrix.length; row++) {
      for (col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === UNASSIGNED) {
          checkBlankSpaces = true;
          break;
        }
      }
      if (checkBlankSpaces === true) {
        break;
      }
    }
    if (checkBlankSpaces === false) {
      return true;
    }

    for (var num = 1; num <= 9; num++) {
      if (isSafe(matrix, row, col, num)) {
        matrix[row][col] = num;
        if (solveSudoku(matrix)) {
          return true;
        }
        matrix[row][col] = UNASSIGNED;
      }
    }
    return false;
  }

  function sudokuSolver(matrix) {
    if (solveSudoku(matrix) === true) {
      return matrix;
    }
    return 'NO SOLUTION EXISTS!';
  }
});