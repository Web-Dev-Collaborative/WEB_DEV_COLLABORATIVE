# Calculate Big O

In the below analysis, 'n' refers to number of records in input file or total number of elements present in list.
Also, for all the below tasks, we perform a read operation line by line in each file. 
So, the overall complexity to read records from one csv file and store them in list is O(n).

## TASK0 =>
Time complexity (worst-case): O(1)

Explanation - Here, we simply access elements of both the lists using list-indexing. This is O(1) operation.
Hence, the overall running-time analysis is O(1) in worst-case.

## TASK1 =>
Time complexity (worst-case): O(n) 

Explanation - Here, we iterate over two lists 'texts' and 'calls' element by element. This is O(n) operation.
We use a dictionary to set value as 1 for each key that we encounter in loop. 
The average case to associate a value to key in dictionary is O(1) **
Hence, the overall running-time analysis is O(n) in worst-case.

**Note -
Dictionaries are implemented as hash tables in Python. 
Hence, if the hash function is poorly implemented which results in collision, the ammortized running time will be O(n).
In worst-case, this will happen when you have all the values being mapped to the same key and then you have to iterate over the key bucket to insert new value in the end.


## TASK2 =>
Time complexity (worst-case): O(n)

Explanation - Here, we iterate over the list 'calls' element by element. This is O(n) operation. 
The "in" operator in Python has worst-case complexity of O(n).
Them, we use dictionary to hash telephone numbers and their count of occurences in the file.

The final for loop runs over the entire dictionary and finds max value.
So, the overall running-time analysis is O(n)


## TASK3 =>
Time complexity (worst-case): O(n * log n)

Explanation -
In part a, we iterate over the calls list and perform if-else checks. Then we store the numbers in dictionary.  All of this is O(n) operation. 
Next we sor the lists to maintain the order. The overall running time analysis of the sort operation is O(n * logn).
In part b, we iterate over the calls list. This is O(n) operation.

Thus, the overall complexity is O(n * log n)


## TASK4 =>
Time complexity (worst-case): O(n * log n)
Explanation - The set add and remove methods have a constant time complexity i.e. O(1). We perform a sort on data before the print method.
Hence, the overall complexity is O(n * log n)