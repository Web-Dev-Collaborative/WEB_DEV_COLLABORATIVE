/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.



Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1
*/

let change = function ( amount, coins, memo = {} ) {
  let key = amount + '-' + coins;
  if ( key in memo ) return memo[ key ];
  if ( amount === 0 ) return 1;

  let currentCoin = coins[ coins.length - 1 ]

  let total = 0;

  for ( let qty = 0; qty * currentCoin <= amount; qty++ ) {
    total += change( amount - qty * currentCoin, coins.slice( 0, -1 ), memo );
  }

  memo[ key ] = total;
  return memo[ key ]
};

console.log( change( 5, [ 1, 2, 5 ] ) )
