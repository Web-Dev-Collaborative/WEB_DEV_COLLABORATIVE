/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * ---
 * category: utilities/react
 * ---
 * Safe chained functions
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * Forked from: https://github.com/react-bootstrap/react-overlays/blob/master/src/utils/createChainedFunction.js
 * @module createChainedFunction
 * @param {function} functions to chain
 * @returns {function|null}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'funcs' implicitly has an 'any[]' t... Remove this comment to see the full error message
function createChainedFunction(...funcs) {
  return funcs
    .filter((f, i) => {
      if (f == null) {
        return false
      }

      // Only allow the first of identical functions
      const indexes = getAllIndexes(funcs, f)
      return indexes.length === 1 || i === indexes[0]
    })
    .reduce((acc, f) => {
      if (typeof f !== 'function') {
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.'
        )
      }

      if (acc === null) {
        return f
      }

      // @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'args' implicitly has an 'any[]' ty... Remove this comment to see the full error message
      return function chainedFunction(...args) {
        // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
        acc.apply(this, args)
        // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
        f.apply(this, args)
      }
    }, null)
}

/**
 * Find all indexes for a value in an Array
 *
 * @param {array} arr The Array to search for val
 * @param {*} val The value to find indexes for
 * @return {array} All the indexes of the Array matching val
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'arr' implicitly has an 'any' type.
function getAllIndexes(arr, val) {
  // @ts-expect-error ts-migrate(7034) FIXME: Variable 'indexes' implicitly has type 'any[]' in ... Remove this comment to see the full error message
  const indexes = []

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  arr.forEach((e, i) => {
    if (e === val) {
      indexes.push(i)
    }
  })

  // @ts-expect-error ts-migrate(7005) FIXME: Variable 'indexes' implicitly has an 'any[]' type.
  return indexes
}

export default createChainedFunction
export { createChainedFunction }
