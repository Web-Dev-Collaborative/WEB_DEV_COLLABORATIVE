A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example {#a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example .p-name}
===========================================================================================


Curating Complexity: A Guide to Big-O Notation


 

 

------------------------------------------------------------------------


  
### A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example"794e"}

![](https://cdn-images-1.medium.com/max/800/0*yjlSk3T9c2_14in1.png) 

***Curating Complexity: A Guide to Big-O Notation***

-   [Why is looking at runtime not a reliable method of calculating time
    complexity?]{#b70f}
-   [Not all computers are made equal( some may be stronger and
    therefore boost our runtime speed )]{#2b21}
-   [How many background processes ran concurrently with our program
    that was being tested?]{#1e1a}
-   [We also need to ask if our code remains performant if we increase
    the size of the input.]{#1cad}
-   [The real question we need to answering is:
    `How does our performance scale?`{.markup--code
    .markup--li-code}.]{#3cb7}

### big 'O' notation {#5fc8 .graf .graf--h3 .graf-after--li name="5fc8"}

-   [Big O Notation is a tool for describing the efficiency of
    algorithms with respect to the size of the input arguments.]{#9b21}
-   [Since we use mathematical functions in Big-O, there are a few big
    picture ideas that we'll want to keep in mind:]{#c0e6}
-   [The function should be defined by the size of the input.]{#2e86}
-   [`Smaller`{.markup--code .markup--li-code} Big O is better (lower
    time complexity)]{#07b0}
-   [Big O is used to describe the worst case scenario.]{#f1b0}
-   [Big O is simplified to show only its most dominant mathematical
    term.]{#e11f}

### Simplifying Math Terms {#6083 .graf .graf--h3 .graf-after--li name="6083"}

-   [We can use the following rules to simplify the our Big O
    functions:]{#64a4}
-   [`Simplify Products`{.markup--code .markup--li-code} : If the
    function is a product of many terms, we drop the terms that don\'t
    depend on n.]{#a2c2}
-   [`Simplify Sums`{.markup--code .markup--li-code} : If the function
    is a sum of many terms, we drop the non-dominant terms.]{#b058}
-   [`n`{.markup--code .markup--li-code} : size of the input]{#eb32}
-   [`T(f)`{.markup--code .markup--li-code} : unsimplified math
    function]{#c042}
-   [`O(f)`{.markup--code .markup--li-code} : simplified math
    function.]{#7b41}

`Putting it all together` 

![](https://cdn-images-1.medium.com/max/800/1*TT8uuv1x3nmGUw5rvtoZ8A.png) 

-   [First we apply the product rule to drop all constants.]{#d18b}
-   [Then we apply the sum rule to select the single most dominant
    term.]{#4335}




 

------------------------------------------------------------------------


  
### Complexity Classes {#915e .graf .graf--h3 .graf--leading name="915e"}

Common Complexity Classes

#### There are 7 major classes in Time Complexity {#e9a1 .graf .graf--h4 .graf-after--p name="e9a1"}

![](https://cdn-images-1.medium.com/max/800/1*6zKhmJoHkvDbrd8jfUDf3A.png) 

#### `O(1) Constant`{.markup--code .markup--h4-code} {#a022 .graf .graf--h4 .graf-after--figure name="a022"}

> **The algorithm takes roughly the same number of steps for any input
> size.**

#### `O(log(n)) Logarithmic`{.markup--code .markup--h4-code} {#81af .graf .graf--h4 .graf-after--figure name="81af"}

> **In most cases our hidden base of Logarithmic time is 2, log
> complexity algorithm's will typically display 'halving' the size of
> the input (like binary search!)**

#### `O(n) Linear`{.markup--code .markup--h4-code} {#be35 .graf .graf--h4 .graf-after--figure name="be35"}

> **Linear algorithm's will access each item of the input "once".**

### `O(nlog(n)) Log Linear Time` {#b965 .graf .graf--h3 .graf-after--figure name="b965"}

> **Combination of linear and logarithmic behavior, we will see features
> from both classes.**

> Algorithm's that are log-linear will use **both recursion AND
> iteration.**

### `O(nc) Polynomial` {#fb10 .graf .graf--h3 .graf-after--figure name="fb10"}

> **C is a fixed constant.**

### `O(c^n) Exponential` 

> **C is now the number of recursive calls made in each stack frame.**

> **Algorithm's with exponential time are VERY SLOW.**




 ="c3ad"}
 

------------------------------------------------------------------------


  
### Memoization {#715f .graf .graf--h3 .graf--leading name="715f"}

-   [Memoization : a design pattern used to reduce the overall number of
    calculations that can occur in algorithms that use recursive
    strategies to solve.]{#b3b0}
-   [MZ stores the results of the sub-problems in some other data
    structure, so that we can avoid duplicate calculations and only
    'solve' each problem once.]{#2583}
-   [Two features that comprise memoization:]{#65c9}

1.  [FUNCTION MUST BE RECURSIVE.]{#b2d2}
2.  [Our additional Data Structure is usually an object (we refer to it
    as our memo... or sometimes cache!)]{#91a3}

![](https://cdn-images-1.medium.com/max/800/1*4U79jBMjU2wKE_tyYcD_3A.png) 

![](https://cdn-images-1.medium.com/max/800/1*Qh42KZgcCxmVt6WrTasCVw.png) 

### Memoizing Factorial {#0763 .graf .graf--h3 .graf-after--figure name="0763"}

Our memo object is *mapping* out our arguments of factorial to it's
return value.

-   [Keep in mind we didn't improve the speed of our algorithm.]{#854a}

### Memoizing Fibonacci {#c6ac .graf .graf--h3 .graf-after--li name="c6ac"}

![](https://cdn-images-1.medium.com/max/800/0*2XaPj7UGKZYFjYhb) 

-   [Our time complexity for Fibonacci goes from O(2\^n) to O(n) after
    applying memoization.]{#5be6}

### The Memoization Formula {#860d .graf .graf--h3 .graf-after--li name="860d"}

> *Rules:*

1.  [*Write the unoptimized brute force recursion (make sure it
    works);*]{#b3f0}
2.  [*Add memo object as an additional argument .*]{#b36e}
3.  [*Add a base case condition that returns the stored value if the
    function's argument is in the memo.*]{#f81f}
4.  [*Before returning the result of the recursive case, store it in the
    memo as a value and make the function's argument it's key.*]{#1b0f}

#### Things to remember {#dad0 .graf .graf--h4 .graf-after--li name="dad0"}

1.  [*When solving DP problems with Memoization, it is helpful to draw
    out the visual tree first.*]{#bc4a}
2.  [*When you notice duplicate sub-tree's that means we can
    memoize.*]{#7bb1}




 ="f862"}
 

------------------------------------------------------------------------


  
### Tabulation {#c4a7 .graf .graf--h3 .graf--leading name="c4a7"}

#### Tabulation Strategy {#d926 .graf .graf--h4 .graf-after--h3 name="d926"}

> Use When:

-   [**The function is iterative and not recursive.**]{#f5b0}
-   [*The accompanying DS is usually an array.*]{#015c}

#### Steps for tabulation {#e9d4 .graf .graf--h4 .graf-after--figure name="e9d4"}

-   [*Create a table array based off the size of the input.*]{#8918}
-   [*Initialize some values in the table to 'answer' the trivially
    small subproblem.*]{#b4e7}
-   [*Iterate through the array and fill in the remaining
    entries.*]{#072e}
-   [*Your final answer is usually the last entry in the table.*]{#192e}




 ="fc52"}
 

------------------------------------------------------------------------


  
### Memo and Tab Demo with Fibonacci {#7366 .graf .graf--h3 .graf--leading name="7366"}

> *Normal Recursive Fibonacci*

```
 {#8ad4 .graf .graf--pre .graf-after--blockquote name="8ad4"}
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```


> *Memoization Fibonacci 1*

> *Memoization Fibonacci 2*

> *Tabulated Fibonacci*

### Example of Linear Search {#a8cd .graf .graf--h3 .graf-after--figure name="a8cd"}

-   [*Worst Case Scenario: The term does not even exist in the
    array.*]{#84b2}
-   [*Meaning: If it doesn't exist then our for loop would run until the
    end therefore making our time complexity O(n).*]{#30dc}




 

------------------------------------------------------------------------


  
### Sorting Algorithms {#5bf0 .graf .graf--h3 .graf--leading name="5bf0"}

### Bubble Sort {#ad34 .graf .graf--h3 .graf-after--h3 name="ad34"}

`Time                 Complexity` :
Quadratic O(n\^2)

-   [The inner for-loop contributes to O(n), however in a worst case
    scenario the while loop will need to run n times before bringing all
    n elements to their final resting spot.]{#ce1e}

`Space                 Complexity` : O(1)

-   [Bubble Sort will always use the same amount of memory regardless
    of n.]{#664f}

![](https://cdn-images-1.medium.com/max/800/0*Ck9aeGY-d5tbz7dT) 

-   [The first major sorting algorithm one learns in introductory
    programming courses.]{#4115}
-   [Gives an intro on how to convert unsorted data into sorted
    data.]{#ecd4}

> It's almost never used in production code because:

-   [*It's not efficient*]{#3cb1}
-   [*It's not commonly used*]{#4eac}
-   [*There is stigma attached to it*]{#d730}
-   [`Bubbling Up`{.markup--code .markup--li-code}* : Term that infers
    that an item is in motion, moving in some direction, and has some
    final resting destination.*]{#8da7}
-   [*Bubble sort, sorts an array of integers by bubbling the largest
    integer to the top.*]{#8447}

<!-- -->

-   [*Worst Case & Best Case are always the same because it makes nested
    loops.*]{#dcd2}
-   [*Double for loops are polynomial time complexity or more
    specifically in this case Quadratic (Big O) of: O(n<sup>2</sup>)*]{#9a6a}

### Selection Sort {#dda6 .graf .graf--h3 .graf-after--li name="dda6"}

`Time                 Complexity` :
Quadratic O(n\^2)

-   [Our outer loop will contribute O(n) while the inner loop will
    contribute O(n / 2) on average. Because our loops are nested we will
    get O(n<sup>2</sup>);]{#646d}

`Space                 Complexity` : O(1)

-   [Selection Sort will always use the same amount of memory regardless
    of n.]{#45ae}

![](https://cdn-images-1.medium.com/max/800/0*AByxtBjFrPVVYmyu) 

-   [Selection sort organizes the smallest elements to the start of the
    array.]{#c618}

![](https://cdn-images-1.medium.com/max/800/0*GeYNxlRcbt2cf0rY) 

> Summary of how Selection Sort should work:

1.  [*Set MIN to location 0*]{#2277}
2.  [*Search the minimum element in the list.*]{#c76c}
3.  [*Swap with value at location Min*]{#79d3}
4.  [*Increment Min to point to next element.*]{#4ede}
5.  [*Repeat until list is sorted.*]{#a649}

### Insertion Sort {#1ce8 .graf .graf--h3 .graf-after--figure name="1ce8"}

`Time                 Complexity` :
Quadratic O(n\^2)

-   [Our outer loop will contribute O(n) while the inner loop will
    contribute O(n / 2) on average. Because our loops are nested we will
    get O(n<sup>2</sup>);]{#95ea}

`Space                 Complexity` : O(n)

-   [Because we are creating a subArray for each element in the original
    input, our Space Comlexity becomes linear.]{#f6fa}

![](https://cdn-images-1.medium.com/max/800/0*gbNU6wrszGPrfAZG) 

### Merge Sort {#377f .graf .graf--h3 .graf-after--figure name="377f"}

`Time                 Complexity` : Log
Linear O(nlog(n))

-   [Since our array gets split in half every single time we contribute
    O(log(n)). The while loop contained in our helper merge function
    contributes O(n) therefore our time complexity is O(nlog(n));
    `Space                   Complexity`{.markup--code
    .markup--li-code}: O(n)]{#44b2}
-   [We are linear O(n) time because we are creating subArrays.]{#9a83}

![](https://cdn-images-1.medium.com/max/800/0*GeU8YwwCoK8GiSTD) 

![](https://cdn-images-1.medium.com/max/800/0*IxqGb72XDVDeeiMl) 

### Example of Merge Sort {#3aa9 .graf .graf--h3 .graf-after--figure name="3aa9"}

![](https://cdn-images-1.medium.com/max/800/0*HMCR--9niDt5zY6M) 

-   [**Merge sort is O(nlog(n)) time.**]{#48b4}
-   [*We need a function for merging and a function for
    sorting.*]{#c598}

> Steps:

1.  [*If there is only one element in the list, it is already sorted;
    return the array.*]{#213f}
2.  [*Otherwise, divide the list recursively into two halves until it
    can no longer be divided.*]{#6214}
3.  [*Merge the smallest lists into new list in a sorted order.*]{#3cc8}

### Quick Sort {#b50b .graf .graf--h3 .graf-after--li name="b50b"}

`Time                 Complexity` :
Quadratic O(n\^2)

-   [Even though the average time complexity O(nLog(n)), the worst case
    scenario is always quadratic.]{#8e34}

`Space                 Complexity` : O(n)

-   [Our space complexity is linear O(n) because of the partition arrays
    we create.]{#626b}
-   [QS is another Divide and Conquer strategy.]{#7e3a}
-   [Some key ideas to keep in mind:]{#233d}
-   [It is easy to sort elements of an array relative to a particular
    target value.]{#1173}
-   [An array of 0 or 1 elements is already trivially sorted.]{#8634}

![](https://cdn-images-1.medium.com/max/800/0*WLl_HpdBGXYx284T) 

![](https://cdn-images-1.medium.com/max/800/0*-LyHJXGPTYsWLDZf) 

### Binary Search {#a2ba .graf .graf--h3 .graf-after--figure name="a2ba"}

`Time                 Complexity` : Log
Time O(log(n))

`Space                 Complexity` : O(1)

![](https://cdn-images-1.medium.com/max/800/0*-naVYGTXzE2Yoali) 

> *Recursive Solution*

> *Min Max Solution*

-   [*Must be conducted on a sorted array.*]{#6fb1}
-   [*Binary search is logarithmic time, not exponential b/c n is cut
    down by two, not growing.*]{#383b}
-   [*Binary Search is part of Divide and Conquer.*]{#c940}

### Insertion Sort {#d7dd .graf .graf--h3 .graf-after--li name="d7dd"}

-   [**Works by building a larger and larger sorted region at the
    left-most end of the array.**]{#26b7}

> Steps:

1.  [*If it is the first element, and it is already sorted;
    return 1.*]{#8c1f}
2.  [*Pick next element.*]{#1451}
3.  [*Compare with all elements in the sorted sub list*]{#0f8b}
4.  [*Shift all the elements in the sorted sub list that is greater than
    the value to be sorted.*]{#4d78}
5.  [*Insert the value*]{#9131}
6.  [*Repeat until list is sorted.*]{#6c8a}

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#3695 .graf .graf--h4 .graf-after--figure name="3695"}

[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz) 

[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:

{#4bce .graf .graf--mixtapeEmbed .graf-after--p name="4bce"}
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 


![](https://cdn-images-1.medium.com/max/800/1*VCmj_H9AHs41oC9Yx1hZFQ.png) 





By [Bryan Guner](https://medium.com/@bryanguner)  on
[February 27, 2021](https://medium.com/p/803ff193c522).


