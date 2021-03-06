/**

# eq.js: minimalistic equation evaluator.

   eq(str, vars)

Features:
  - evaluate variables in the `vars` object
  - `str` can use any `Math` function or property: round, ceil, max, E

Examples:

    eq('round(test / 2)', { test: 5 })   // 3
    eq('floor(test / 2)', { test: 5 })   // 2
    eq('2 + 2')                          // 4
    eq('cos(PI)')                        // -1

Handy amongst other things for CLI node programs that accept numbers.

**/

(function (g) {
  function eq(input, vars) {
    try {
      return eval("with(Math){with(vars || {}){" + input + "}}");
    } catch (e) {
      return NaN;
    }
  }

  g.top ? (g.eq = eq) : (module.exports = eq);
})(this);
