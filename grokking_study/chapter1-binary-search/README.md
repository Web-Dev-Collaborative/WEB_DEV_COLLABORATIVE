# Chapter 1 Notes
## Binary Search 

#### Key points:
- take a sorted list of elements and an item you are searching for, return the item from the list or null if it's not in the list. 
- don't do linear/simple search from 0-list.length, instead divide the list in half at each step which will tell you if you a) found the item, b) the item is higher in the list, or c) the item is lower in the list.


#### Restrictions: 
- the list of elements must be sorted so you can properly divide the problem at each step.

#### Example: 
- sorted list from 0-99 in order, looking for value 82. guess 50, return higher, now you have 50-99, guess 75, return result is higher, guess 89, return result is lower: now you know item is in range 75-89. down to 15 elements from 100 in 3 steps/guesses.

- dictionary of 240'000 words. linear search worst case scenario is it's item 240'000 so you have to traverse the whole list or take 240'000 individual steps. 2^18 is 262,144 so with binary search you find the item in 18 (or fewer) steps. 

#### Takeaway/Big O:

-binary search in general will take log2 n steps in the worst case (aka 2 to the power of what equals the total number of items in the search list). 
- Big O of B.S.: O(log2 n)
- linear search grows linearly, binary search grows logarithmically, by the # of elements
- Big O is worst case scenario, you may find the element sooner by happenstance
- Best to worst speed (most common): O(log n), O(n), O(n * log n), O(n^2), O(n!)
- Best to worst names (most common): logarithmic, linear, n * logarithmic, n squared, n factorial
- The more cases/larger the search set/list, the better speed gains you will have by using a more efficient algorithm
- traveling salesperson is n! as you multiply the time it takes for each previous case with the next case until you reach the total possible cases (5! = 120, 6! = 720, 7! = 5040 etc., 100! > time until our sun explodes)


##### more cases: 
- log2 8 === 3 (2^3 > 8) so 3 steps at most to find an element in a list of 8 items. 
- log2 1024 = 10 (2^10 > 1000 it's 1024) so at most 10 steps to find an item in a list of 1000 items. 
- log2 128 === ? (2^? >= 128) = 7, so 7 steps max to find an item in a list of 128 items
- log2 256 === ? (2^? >= 256) = 8, twice as many items but only one step extra