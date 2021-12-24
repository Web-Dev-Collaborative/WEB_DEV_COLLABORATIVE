/*
First is recurSum(arr, start) which returns the sum of the elements of arr from the index start till the very end.
Second is partrecurSum() that recursively concatenates the required sum into an array and when we reach the end of the array, it returns the concatenated array.
*/
//arr.length -1 = 5 
//                   arr   [    1,    7,    12,   6,    5,    10   ]
//                   ind   [    0     1     2     3     4      5   ]
//                              ↟                              ↟
//                            start                           end

function recurSum(arr, start = 0, sum = 0) {
    if(start < arr.length){
       return recurSum(arr, start+1, sum+arr[start]);
    };
    
    return sum;
 }
 
 function rPartSumsArr ( arr, partSum = [], start = 0, end = arr.length - 1 ) {
    if ( start <= end ) {
       return rPartSumsArr( arr, partSum.concat( recurSum( arr, start ) ), ++start, end );
    };
    return partSum.reverse();
 }

 console.log('------------------------------------------------rPartSumArr------------------------------------------------')
console.log('rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]: ', rPartSumsArr(arr));
console.log('rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]: ', rPartSumsArr(arr1));
console.log('------------------------------------------------rPartSumArr------------------------------------------------')
/*
------------------------------------------------rPartSumArr------------------------------------------------
rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]:  [ 10, 16, 18, 23, 24, 25 ]
rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]:  [ 10, 15, 21, 33, 40, 41 ]
------------------------------------------------rPartSumArr------------------------------------------------
*/
camel2Kabab.js
function camelToKebab(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
camelCase.js
function camel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
concatLinkedLists.js
function addTwoNumbers(l1, l2) {
  let result = new ListNode(0)
  let currentNode = result
  let carryOver = 0
  while (l1 != null || l2 != null) {
    let v1 = 0
    let v2 = 0
    if (l1 != null) v1 = l1.val
    if (l2 != null) v2 = l2.val
    
    let sum =  v1 + v2 + carryOver
    carryOver = Math.floor(sum / 10)
    sum = sum % 10
    currentNode.next = new ListNode(sum)

    currentNode = currentNode.next
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  
  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver)
  }
  
  return result.next
};
