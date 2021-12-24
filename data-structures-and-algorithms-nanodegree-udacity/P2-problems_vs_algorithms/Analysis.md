# Runtime and Space Analysis

## Problem 1

* Time Complexity - O(logn) where n = number whose square has to be identified
* Space Complexity - O(nlogn)
For recursion - (Stack frame) * (space per stack frame)
Number of stack frames is O(logn) since we halves the range of values to search from. Space per stack frame is O(n)

* Design conisderations -
    1. Tried to iterate from 1 to n-1 for finding out the square but realised this will result in O(n) complexity. Hence, I found out that Binary search would work in this case.
    2. Square root of a value is always between 0 and n/2. Hence, we can use Binary search on sorted list between 0..n/2

## Problem 2

* Time Complexity - O(logn) where n = number of elements in list
* Space Complexity - O(nlogn) (Same as problem 1)
For recursion - (Stack frame) * (space per stack frame)
Number of stack frames is O(logn) since we halves the range of values to search from. Space per stack frame is O(n)

* Design considerations -
    1. Used binary search to recrusively perform divide and conquer so that we can achive time complexity of O(logn)

## Problem 3

* Time Complexity - O(nlogn). See design consideration
* Space Complexity - O(n) Additional space is required because of sorting.

* Design considerations -
    Since there was no space complexity constraints, I chose to use mergesort to solve this problem. The list is sorted in ascending order and then I take generate the maximum sum numbers. Per the suggestion of the reviewer, he/she mentioned there is a way to optimize the solution up to O(n) time complexity. I believe this to be using a hashmap to count the frequencies and then use a loop to count down from 9 -> 1 since hashmap lookups are O(1) and a loop would be O(n). That would be more efficient than what I implemented. I also wanted to implement merge sort so I took that approach.

## Problem 4

* Time Complexity - O(n) where n = number of elements present in list. Refer design section.
* Space Complexity - O(1) Since, we are not using any extra data structure apart from the 3 variables that are used. 

* Design considerations -

    1. The idea is if we put all the 0's in the beginning, and 2's in the end, the list would automatically sort themselves.
    2. Dry run for this algorithm -
        a. Three indexes are maintained - start_index(tracks 0's), end_index(tracks 2's), midpoint(tracks 1's).
        b. Iterate over the input list once from 0..length
        c. If the current element is 0, swap the element at start_index with element at midpoint.Then, increment midpoint and start_index.
        d. If the element is 1, then keep the element as it is but increment the midpoint
        e. If the element is 2, then decrement the end_index and swap element at end_index with element at midpoint.

## Problem 5

* Time Complexity
    1. Insert operation - O(n) => n : number of characters in a given word. Insert operation loops over all the characters of the given word.
    2. Find operation - O(n) => n : number of characters in given prefix. Find operation loops over all the characters in given prefix.
    3. Suffixes - O(mn) => Here, we loop over all the TrieNodes in children. So for within each trienode, its o(n) and looping over all the nodes its O(n) where m := number of characters and n := number of nodes

* Space Complexity:
    Worst case is when words with no common characters between them. Thus, there will be a single node for each letter. Hencec, the space complexity is O(n).

* Design Choices:
    1. The TrieNode has suffix function. This function at each recursive call appends character to child of current suffix to all the suffixes.

## Problem 6

* Time Complexity - O(n). Here, we traverse all the elements in entire list.
* Space Complexity - O(1). No extra storage space is needed as there are only two variables that are used to track the min and max values.
* Design Choices: Performa linear search to find min and max elements in the list.

## Problem 7

* Time Complexity -
    1. Insert operation - O(n) => n : Here we loop over the path once to iterate over all the characters in the path and insert it into the trie as per the nodes.
    2. Find operation - O(n) => n : Here, we loop over the path once to find nodes in trie that match the characters in path.
* Space Complexity - O(n), Refer Design Choices section

* Design Choices:
    1. There are 3 classes used as per the design. A router trie node, a router trie and a router.
    2. This is similar to problem 5. The main difference is there is a handle used to trigger on the lookup if found. The handler in the end splits the path to insert a new node which can then be traversed to perform the lookup. Since we have to traverse the children to find the path and any handler we have O(n) worst case.
    3. Splitting a string to store individual parts of the path is dependent on the length of the string and level of the path, which could be quite large on a site with many pages. In any case, using a dictionary should be O(n) where n is the count or number of components in the path.

