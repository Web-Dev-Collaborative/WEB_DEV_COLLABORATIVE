import { SudokuChecker } from "../src/sudokuChecker.js";


describe("TEMPLATE TEST", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })
})

const validSudoku = [
  // columns
// 0 1 2 3 4 5 6 7 8
  [1,2,3,4,5,6,7,8,9], // row 0
  [4,5,6,7,8,9,1,2,3], // row 1
  [7,8,9,1,2,3,4,5,6],
  [2,3,4,5,6,7,8,9,1],
  [5,6,7,8,9,1,2,3,4],
  [8,9,1,2,3,4,5,6,7],
  [3,4,5,6,7,8,9,1,2],
  [6,7,8,9,1,2,3,4,5],
  [9,1,2,3,4,5,6,7,8], // row 8
]

const invalidSudoku = [
  [1,2,3,4,5,6,7,8,9], // row 0
  [4,5,6,7,8,9,1,2,3], // row 1
  [7,8,9,1,2,3,4,5,6],
  [2,3,4,5,6,7,8,9,1],
  [5,6,7,8,9,1,2,3,4],
  [8,9,1,2,3,4,5,6,7],
  [3,4,5,6,7,8,9,1,2],
  [6,7,8,9,1,2,3,4,5],
  [9,1,2,3,4,5,6,7,9], // row 8- BAD VALUE HERE
]

describe("sudokuChecker()", () => {

  test("SudokuChecker exists", () => {
    const mySudokuChecker = new SudokuChecker()
    expect(mySudokuChecker).toBeDefined()
  })

  test("SudokuChecker takes in a puzzle", () => {
    const myValidSudoku = new SudokuChecker(validSudoku)
    expect(myValidSudoku.puzzle).toEqual(validSudoku)
  })
})

describe("SudokuChecker.validate()", () => {
  test("SudokuChecker.validate exists", () => {
    const mySudokuChecker = new SudokuChecker()
    expect(mySudokuChecker.validate).toBeDefined();
  })

  test("SudokuChecker.validate validates first row", () => {
    const mySudokuChecker = new SudokuChecker(validSudoku)
    expect(mySudokuChecker.validate()).toEqual(true)
  })

  test("validate returns false on an invalid puzzle", () => {
    const mySudokuChecker = new SudokuChecker(invalidSudoku)
    expect(mySudokuChecker.validate()).toEqual(false)
  })

  test("validate returns false on an invalid puzzle with a deeply nested invalid value", () => {
    const mySudokuChecker = new SudokuChecker(invalidSudoku)
    expect(mySudokuChecker.validate()).toEqual(false)
  })
})


