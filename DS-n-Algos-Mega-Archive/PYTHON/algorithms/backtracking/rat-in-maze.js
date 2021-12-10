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
    global.ratInMaze = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ratInAMaze = ratInAMaze;
  function isSafe(maze, x, y) {
    var n = maze.length;
    if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
      return true;
    }
    return false;
  }

  function findPath(maze, x, y, solution) {
    var n = maze.length;
    if (x === n - 1 && y === n - 1) {
      solution[x][y] = 1;
      return true;
    }
    if (isSafe(maze, x, y) === true) {
      solution[x][y] = 1;
      if (findPath(maze, x + 1, y, solution)) {
        return true;
      }
      if (findPath(maze, x, y + 1, solution)) {
        return true;
      }
      solution[x][y] = 0;
      return false;
    }
    return false;
  }

  function ratInAMaze(maze) {
    var solution = [];
    for (var i = 0; i < maze.length; i++) {
      solution[i] = [];
      for (var j = 0; j < maze[i].length; j++) {
        solution[i][j] = 0;
      }
    }
    if (findPath(maze, 0, 0, solution) === true) {
      return solution;
    }
    return 'NO PATH FOUND';
  }
});