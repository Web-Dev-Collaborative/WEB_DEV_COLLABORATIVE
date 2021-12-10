# Runtime and Space Analysis

## Problem 1

* Time Complexity - O(1)
* Space Complexity - O(n) where n = size of cache

* Design conisderations -
    1. Used Python's OrderedDict as Cache. This keeps the cache insertion ordered.
    2. Deleting an element and reinserting it will move the element to end of cache.
    3. OrderedDict are implemented as Hash Tables. Hash tables provide O(1) for search, insertion and deletion provided there is no hash collision. There will be 'n' elements hashed to different keys in cache.

## Problem 2

* Time Complexity - O(n) where n = number of paths appended to the list
* Space Complexity - O(a *b) where a = number of recursive calls, b = space for each stack frame

* Design considerations -
    1. Used a list to store the paths. Appending in the list takes O(1) time complexity while traversing the list takes O(n) where n is the number of elements in list.
    2. Recursion is used here as required in the problem. Recursion requires additional space overhead because of recursive calls stack space. The memory or space used is based on the number of recursive calls, which determines the number of stack frames times the space required for each stack frame.

## Problem 3

* Time Complexity - O(n). See design consideration
* Space Complexity - O(n) Stores binary codes, priority queues and frequencies.

* Design considerations -
    1. Dictionaries are used to store the data as it allows for O(1) access. The priority queue is used along with Node having a frequency parameter. This provides easy access to frequencies associated with each letter. It also allowed in popping the least frequent character easily from the tree.
    2. Binary codes are stored in Tree so there is no need to return anything.
    3. In terms of time complexity, first we run through entire data to determine frequencies. Then, we build the priority queue. Next we build the tree and lastly we create compressed and decompressed data. So in every case, we run through entire data only once each time.

## Problem 4

* Time Complexity - O(n) where n = number of nodes
* Space Complexity - O(n) where n = number of nodes

* Design considerations -

    1. Recursion is used again in this problem. Searching requires recursively going through each group to find if the user exists or not. Adding a user to a group is constant time.

## Problem 5

* Time Complexity - O(1)
* Space Complexity - O(n) where n = number of nodes

* Design considerations -
    1. LinkedList is required for this problem. Every node had a previous pointer, next pointer(except the initial genesis node) and the hash associated to it. Usually blockchain uses merkle trees as its underlying structure but in this case tree wasn't required.

## Problem 6

* Time Complexity - O(n)
* Space Complexity - O(n)

* Design considerations -
    1. As there are 2 lists here to read data in, the total time needed here is n+m elements for reference or add to the hashmap in constant time. Here, we check if the element value exists in the dictionary. If it doesnt exist and there is a union, then we add it to the map. Next for intersection, we mark it as exists in both the lists if it already exists in the map.
