export function SudokuChecker(puzzle) {
  this.puzzle = puzzle;
  this.columns = []
  this.squares = []
}

SudokuChecker.prototype.createColumns = function() {
  for (let i = 0; i < this.puzzle.length; i++) {
    for (let j = 0; j < this.puzzle.length; j++) {
      this.columns.push(this.puzzle[j][i])
    }
  }
}

SudokuChecker.prototype.createSquares = function() {
  // [0][0],[0][1],[0][2]
  // [1][0],[1][1],[1][2]
  // [2][0],[2][1],[2][2]
  for (let i = 0; i < this.puzzle.length; i++) {
    for (let j = 0; j < this.puzzle.length; j++) {
      const gridIndex = (this.puzzle[i] / 3) * 3 + (this.puzzle[j] / 3)
      if (this.squares[gridIndex] === undefined) this.squares[gridIndex] = []
      this.squares[gridIndex].push(this.puzzle[i][j])
    }
  }
}

SudokuChecker.prototype.validate = function() {
  // validate each row
  for (let i = 0; i < this.puzzle.length; i++) {
    if (!validateSection([].concat(this.puzzle[i]))) return false
  }
  // rows are now validated, create columns
  this.createColumns()
  // validate each column
  for (let i = 0; i < this.columns.length; i++) {
    if (!validateSection([].concat(this.columns[i]))) return false
  }
  // columns are now validates, create squares
  this.createSquares()
  // validate each square 3x3
  for (let i = 0; i < this.squares.length; i++) {
    if (!validateSection([].concat(this.squares[i]))) return false
  }
  return true
}

// Takes in an array with 9 values and looks for duplicates
function validateSection(section) {
  // while there are 2+ elements in the current section...
  while (section.length > 1) {
    const currentValue = section.shift() // kickoff the first element
    // check if there are values in the section that are duplicate of the current value
    if (section.includes(currentValue)) {
      // then we have a duplicate value, IE NOT VALID
      return false
    }
  }
  return true
}
