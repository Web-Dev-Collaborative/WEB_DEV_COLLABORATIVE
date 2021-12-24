
## Generators

### `LambdaData.iota`
```
Help on built-in function iota in module LambdaData:

iota(...)
    iota(start, *, stop=None, step=1, stride=0)
    Iota
       Iterator of a given range with grouping size equal to the stride.
       The stop parameter is exclusive, if none is provided the algorithm will
           start at zero and use the start parameter as the exclusive stopping point.
           This is the same behavior as Random.randrange()
       If stride is zero - a single dimension iterator is returned.
           Otherwise, stride controls the length of the inner sequences.
    
       DocTests:
       >>> list(iota(10))
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
       >>> list(iota(start=1, stop=11))
       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       >>> list(iota(start=2, stop=21, step=2))
       [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
       >>> list(iota(start=2, stop=21, step=2, stride=2))
       [(2, 4), (6, 8), (10, 12), (14, 16), (18, 20)]
    
       @param start: Beginning. Required.
       @param stop: Ending. Default is None.
       @param step: Stepping. Default is one.
       @param stride: Size of groupings. Default is zero.

```
### `LambdaData.generate`
```
Help on built-in function generate in module LambdaData:

generate(...)
    generate(func: Callable, *args, **kwargs)
    Generate
       Infinite iterator of a callable with arguments.
    
       DocTests:
       >>> counter = itertools.count(1)
       >>> gen = generate(next, counter)
       >>> list(next(gen) for _ in range(10))
       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
       @param func: Callable.
       @param args: Positional arguments for the functor.
       @param kwargs: Keyword arguments for the functor.

```
### `LambdaData.generate_n`
```
Help on built-in function generate_n in module LambdaData:

generate_n(...)
    generate_n(n: int, func: Callable, *args, **kwargs)
    Generate N
       Abstract generator function. Finite.
    
       DocTests:
       >>> counter = itertools.count(1)
       >>> list(generate_n(10, next, counter))
       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
       @param n: Number of elements to generate.
       @param func: Callable.
       @param args: Positional arguments for the functor.
       @param kwargs: Keyword arguments for the functor.

```

## Expansions

### `LambdaData.fork`
```
Help on built-in function fork in module LambdaData:

fork(...)
    fork(array: Iterable, forks: int = 2) -> tuple
    Fork
       Iterator Duplicator. Same as itertools.tee but with a better name.
    
       DocTests:
       >>> it = iter(range(10))
       >>> a, b, c = fork(it, 3)
       >>> list(c)
       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
       >>> a == b
       False
       >>> list(a) == list(b)
       True
    
       @param array: Iterable to be forked.
       @param forks: Optional Integer. Default is 2. Represents the number of forks.
       @return: Tuple of N Iterators where N is the number of forks.

```
### `LambdaData.inclusive_scan`
```
Help on built-in function inclusive_scan in module LambdaData:

inclusive_scan(...)
    inclusive_scan(array: Iterable, init=None) -> Iterator
    Inclusive Scan -> Adjacent Pairs
    
       DocTests:
       >>> list(inclusive_scan(range(1, 10)))
       [(1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (7, 8), (8, 9)]
       >>> list(inclusive_scan(range(1, 10), 0))
       [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (7, 8), (8, 9)]
    
       @param array: Iterable to be scanned.
       @param init: Optional initial value. Default is None.
       @return: Iterator of Pairs.

```
### `LambdaData.exclusive_scan`
```
Help on built-in function exclusive_scan in module LambdaData:

exclusive_scan(...)
    exclusive_scan(array: Iterable, init=None) -> Iterator
    Exclusive Scan -> Adjacent Pairs
       Like inclusive_scan, but ignores the last value.
    
       DocTests:
       >>> list(exclusive_scan(range(1, 10)))
       [(1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (7, 8)]
       >>> list(exclusive_scan(range(1, 10), 0))
       [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (7, 8)]
    
       @param array: Iterable to be scanned.
       @param init: Initial Value.
       @return: Iterator of Pairs.

```

## Transforms

### `LambdaData.transform`
```
Help on built-in function transform in module LambdaData:

transform(...)
    transform(array: Iterable, func: Callable) -> Iterator
    Transform
       Similar to map but with a reversed signature.
    
       DocTests:
       >>> list(transform(range(10), add_one))
       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       >>> list(transform(range(10), square))
       [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
    
       @param array: Iterable of Values.
       @param func: Unary Functor. F(x) -> Value
       @return: Iterator of transformed Values.

```
### `LambdaData.adjacent_difference`
```
Help on built-in function adjacent_difference in module LambdaData:

adjacent_difference(...)
    adjacent_difference(array: Iterable) -> Iterator
    Adjacent Difference
       Calculates the difference between adjacent pairs.
       This is the opposite of Partial Sum.
       The first iteration compares with zero for proper offset.
    
       DocTests:
       >>> list(adjacent_difference(range(1, 10)))
       [1, 1, 1, 1, 1, 1, 1, 1, 1]
       >>> list(adjacent_difference(partial_sum(range(1, 10))))
       [1, 2, 3, 4, 5, 6, 7, 8, 9]
       >>> list(adjacent_difference(partial_sum(range(-10, 11, 2))))
       [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]
    
       @param array: Iterable of Numeric Values.
       @return: Iterator of adjacent differences.

```
### `LambdaData.partial_sum`
```
Help on built-in function partial_sum in module LambdaData:

partial_sum(...)
    partial_sum(array: Iterable) -> Iterator
    Partial Sum
       Calculates the sum of adjacent pairs.
       This is the opposite of Adjacent Difference.
    
       DocTests:
       >>> list(partial_sum(range(1, 10)))
       [1, 3, 6, 10, 15, 21, 28, 36, 45]
       >>> list(partial_sum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
       @param array: Iterable of Numeric Values.
       @return: Iterator of adjacent sums.

```

## Permutations

### `LambdaData.partition`
```
Help on built-in function partition in module LambdaData:

partition(...)
    partition(array: Iterable, predicate: Callable) -> Iterator
    Stable Partition
       Arranges all the elements of a group such that any that return true
           when passed to the predicate will be at the front, and the rest will be
           at the back. The size of the output iterator will be the same as the
           size of the input iterable.
    
       DocTests:
       >>> list(partition(range(1, 10), is_even))
       [2, 4, 6, 8, 1, 3, 5, 7, 9]
       >>> list(partition(range(1, 10), is_odd))
       [1, 3, 5, 7, 9, 2, 4, 6, 8]
    
       @param array: Iterable of values to be partitioned.
       @param predicate: Unary functor. F(x) -> bool
       @return: Partitioned Iterator.

```

## Reductions

### `LambdaData.reduce`
```
Help on built-in function reduce in module LambdaData:

reduce(...)
    reduce(array: Iterable, func: Callable, initial=None)
    Reduce
       Similar to accumulate but allows any binary functor and/or an initial value.
    
       DocTests:
       >>> reduce(range(1, 5), operator.add)
       10
       >>> reduce(range(1, 5), operator.add, 100)
       110
       >>> reduce(range(1, 5), operator.mul)
       24
       >>> reduce(range(1, 5), operator.mul, 0)
       0
    
       @param array: Iterable of Values to be reduced.
       @param func: Binary Functor.
       @param initial: Initial value. Typically 0 for add or 1 for multiply.
       @return: Reduced Value.

```
### `LambdaData.accumulate`
```
Help on built-in function accumulate in module LambdaData:

accumulate(...)
    accumulate(array: Iterable)
    Accumulate
       Returns the Sum of a range of elements.
           Same as sum() or reduce with operator.add
    
       DocTests:
       >>> accumulate(range(5))
       10
       >>> accumulate(range(11))
       55
    
       @param array: Iterable of Values to be summed.
       @return: Sum of Values.

```
### `LambdaData.product`
```
Help on built-in function product in module LambdaData:

product(...)
    product(array: Iterable)
    Product
       Reduce with multiply.
       For counting numbers from 1 to N: returns the factorial of N.
    
       DocTests:
       >>> product(range(1, 5))
       24
       >>> product(range(5, 10))
       15120
    
       @param array: Iterable of Values to be reduced.
       @return: Product of all elements multiplied together.

```
### `LambdaData.min_max`
```
Help on built-in function min_max in module LambdaData:

min_max(...)
    min_max(array: Iterable) -> tuple
    Min & Max Element
    
       DocTests:
       >>> min_max(range(1, 10))
       (1, 9)
       >>> min_max([100, 42, 69, 1])
       (1, 100)
    
       @param array: Iterable of Numeric Values
       @return: Tuple(Minimum, Maximum)

```
### `LambdaData.star_sum`
```
Help on built-in function star_sum in module LambdaData:

star_sum(...)
    star_sum(*args)
    Star Sum: Add All Args
       Similar to accumulate, but takes an arbitrary number of arguments.
    
       DocTests:
       >>> star_sum(1)
       1
       >>> star_sum(1, 2)
       3
       >>> star_sum(1, 2, 3)
       6
       >>> star_sum(1, 2, 3, 4)
       10
    
       @param args: Numbers to be summed.
       @return: Sum of all arguments.

```
### `LambdaData.star_product`
```
Help on built-in function star_product in module LambdaData:

star_product(...)
    star_product(*args)
    Star Product: Multiply All Args
       Similar to product, but takes an arbitrary number of arguments.
    
       DocTests:
       >>> star_product(0, 42)
       0
       >>> star_product(3, 3, 3)
       27
       >>> star_product(1, 2, 3, 4)
       24
    
       @param args: Numbers to be multiplied.
       @return: Product of all arguments.

```

## Queries

### `LambdaData.all_of`
```
Help on built-in function all_of in module LambdaData:

all_of(...)
    all_of(array: Iterable, predicate: Callable) -> bool
    All of These
    
       DocTests:
       >>> all_of([], is_even)
       True
       >>> all_of([2, 4, 6], is_even)
       True
       >>> all_of([1, 4, 6], is_even)
       False
       >>> all_of([1, 3, 5], is_even)
       False
    
       @param array: Iterable to inspect.
       @param predicate: Callable. f(x) -> bool
       @return: Boolean.

```
### `LambdaData.any_of`
```
Help on built-in function any_of in module LambdaData:

any_of(...)
    any_of(array: Iterable, predicate: Callable) -> bool
    Any of These
    
       DocTests:
       >>> any_of([], is_even)
       False
       >>> any_of([2, 4, 6], is_even)
       True
       >>> any_of([1, 4, 6], is_even)
       True
       >>> any_of([1, 3, 5], is_even)
       False
    
       @param array: Iterable to inspect.
       @param predicate: Callable. f(x) -> bool
       @return: Boolean.

```
### `LambdaData.none_of`
```
Help on built-in function none_of in module LambdaData:

none_of(...)
    none_of(array: Iterable, predicate: Callable) -> bool
    None Of These
    
       DocTests:
       >>> none_of([], is_even)
       True
       >>> none_of([2, 4, 6], is_even)
       False
       >>> none_of([1, 4, 6], is_even)
       False
       >>> none_of([1, 3, 5], is_even)
       True
    
       @param array: Iterable to inspect.
       @param predicate: Callable. f(x) -> bool
       @return: Boolean.

```

## Transform & Reduce

### `LambdaData.transform_reduce`
```
Help on built-in function transform_reduce in module LambdaData:

transform_reduce(...)
    transform_reduce(lhs: Iterable, rhs: Iterable, transformer: Callable, reducer: Callable)
    Transform Reduce
       Pairwise transform and then reduction across all results.
    
       DocTests:
       >>> transform_reduce(range(1, 6), range(1, 6), operator.mul, sum)
       55
       >>> transform_reduce(range(1, 6), range(1, 6), operator.add, product)
       3840
    
       @param lhs: Left Iterator
       @param rhs: Right Iterator
       @param transformer: Binary Functor F(x, y) -> Value
       @param reducer: Reduction Functor F(Iterable) -> Value
       @return: Reduced Value

```
### `LambdaData.inner_product`
```
Help on built-in function inner_product in module LambdaData:

inner_product(...)
    inner_product(lhs: Iterable, rhs: Iterable)
    Inner Product
       Preforms pairwise multiplication across the iterables,
           then returns the sum of the products.
    
       DocTests:
       >>> inner_product(range(1, 6), range(1, 6))
       55
       >>> inner_product(range(11), range(11))
       385
    
       @param lhs: Left Iterator
       @param rhs: Right Iterator
       @return: Sum of the products.

```
### `LambdaData.matrix_multiply`
```
Help on built-in function matrix_multiply in module LambdaData:

matrix_multiply(...)
    matrix_multiply(left, right)
    Matrix Product
       Row by Column inner product.
    
       DocTests
       >>> list(matrix_multiply([[1,2], [3,4]], [[1], [2]]))
       [(5,), (11,)]
       >>> list(matrix_multiply([[10,20], [30,40]], [[10], [20]]))
       [(500,), (1100,)]
    
       @param left: M x N matrix
       @param right: N x P matrix
       @return: M x P matrix

```

## Multidimensional Reductions

### `LambdaData.zip_transform`
```
Help on built-in function zip_transform in module LambdaData:

zip_transform(...)
    zip_transform(transducer: Callable, *args: Iterable) -> Iterator
    Zip Transform
       The transducer should take the same number of arguments as the number of
       iterators passed. Each iteration will call the transducer with the ith element
       of each iterable. F(a[i], b[i], c[i]...) ...
    
       DocTests:
       >>> l1 = (0, 1, 2, 3)
       >>> l2 = (8, 7, 6, 5)
       >>> l3 = (1, 1, 1, 1)
       >>> list(zip_transform(star_sum, []))
       []
       >>> list(zip_transform(star_sum, l1))
       [0, 1, 2, 3]
       >>> list(zip_transform(star_sum, l1, l2))
       [8, 8, 8, 8]
       >>> list(zip_transform(star_sum, l1, l2, l3))
       [9, 9, 9, 9]
    
       @param transducer: Callable
       @param args: Any number of iterables.
       @return: Iterator of values from the transducer.

```
### `LambdaData.transposed_sums`
```
Help on built-in function transposed_sums in module LambdaData:

transposed_sums(...)
    transposed_sums(*args: Iterable) -> Iterator
    Transposed Sums - Column Sums
       The size of the output iterator will be the same as
           the smallest input iterator.
    
       DocTests:
       >>> l1 = (0, 1, 2, 3)
       >>> l2 = (8, 7, 6, 5)
       >>> l3 = (1, 1, 1, 1)
       >>> list(transposed_sums(l1, l2, l3))
       [9, 9, 9, 9]
    
       @param args: Arbitrary number of Iterators of numeric values.
       @return: Iterator of transposed sums aka column sums.

```

## Multi-Set Operations

### `LambdaData.union`
```
Help on built-in function union in module LambdaData:

union(...)
    union(*args: set) -> set
    Multiple Set Union
       Includes all elements of every set passed in.
    
       DocTests:
       >>> s1 = {0, 2, 4, 6, 8}
       >>> s2 = {1, 2, 3, 4, 5}
       >>> s3 = {2, 8, 9, 1, 7}
       >>> union(s1, s2, s3)
       {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
    
       @param args: Arbitrary number of sets.
       @return: Unified set

```
### `LambdaData.intersection`
```
Help on built-in function intersection in module LambdaData:

intersection(...)
    intersection(*args: set) -> set
    Multiple Set Intersection
       Includes all elements that are common to every set passed in.
       If there is no intersection, it will return the empty set.
       If all sets are the same, it will return the union of all sets.
       Opposite of symmetric_difference.
    
       DocTests:
       >>> s1 = {0, 2, 4, 6, 8}
       >>> s2 = {1, 2, 3, 4, 5}
       >>> s3 = {2, 8, 9, 1, 7}
       >>> intersection(s1, s2, s3)
       {2}
    
       @param args: Arbitrary number of sets.
       @return: Set of common elements

```
### `LambdaData.difference`
```
Help on built-in function difference in module LambdaData:

difference(...)
    difference(*args: set) -> set
    Multiple Set Difference
       Includes every element in the first set that isn't in one of the others.
       If there is no difference, it will return the empty set.
    
       DocTests:
       >>> s1 = {0, 2, 4, 6, 8}
       >>> s2 = {1, 2, 3, 4, 5}
       >>> s3 = {2, 8, 9, 1, 7}
       >>> difference(s1, s2, s3)
       {0, 6}
    
       @param args: Arbitrary number of sets.
       @return: Difference between the first set and the rest.

```
### `LambdaData.symmetric_difference`
```
Help on built-in function symmetric_difference in module LambdaData:

symmetric_difference(...)
    symmetric_difference(*args: set) -> set
    Multiple Set Symmetric Difference
       Includes all elements that are not common to every set passed in.
       If there is no intersection, it will return the union of all sets.
       If all sets are the same, it will return the empty set.
       Opposite of intersection.
    
       DocTests:
       >>> s1 = {0, 2, 4, 6, 8}
       >>> s2 = {1, 2, 3, 4, 5}
       >>> s3 = {2, 8, 9, 1, 7}
       >>> symmetric_difference(s1, s2, s3)
       {0, 1, 3, 4, 5, 6, 7, 8, 9}
    
       @param args: Arbitrary number of sets.
       @return: Symmetric difference considering all sets.

```

## Pandas Helpers

### `LambdaData.value_span`
```
Help on built-in function value_span in module LambdaData:

value_span(...)
    value_span(data: pd.Series, start, stop)
    Value Span
       Returns a conditional matching values in the inclusive range [start, stop]
    
       @param data: Series
       @param start: Sortable Value, lower bound
       @param stop: Sortable Value, upper bound
       @return: Conditional

```
### `LambdaData.star_cat_row`
```
Help on built-in function star_cat_row in module LambdaData:

star_cat_row(...)
    star_cat_row(*args: pd.DataFrame, crop=False, reset_index=True)
    Star Cat Rows
       Concatenates two or more pandas data frames in the order you provide them.
    
       @param args: Two or more DataFrames
       @param crop: Boolean to indicate join type, default is False
           True: inner join, this will crop columns that are not in all data frames
           False: outer join, this will fill missing columns with NaN
       @param reset_index: Boolean to indicate resetting the index, default is True
       @return: DataFrame

```
### `LambdaData.star_cat_col`
```
Help on built-in function star_cat_col in module LambdaData:

star_cat_col(...)
    star_cat_col(*args: pd.DataFrame, crop=False, reset_index=False)
    Star Cat Cols
       Concatenates two or more pandas data frames in the order you provide them.
    
       @param args: Two or more DataFrames
       @param crop: Boolean to indicate join type, default is False
           True: inner join, this will crop columns that are not in all data frames
           False: outer join, this will fill missing columns with NaN
       @param reset_index: Boolean to indicate resetting the index, default is True
       @return: DataFrame

```
### `LambdaData.StateLookup`
```
Help on class StateLookup in module LambdaData:

class StateLookup(builtins.object)
 |  Class methods defined here:
 |  
 |  abbrev_lookup(state_name: 'unicode') -> 'unicode' from builtins.type
 |      StateLookup.abbrev_lookup(cls, unicode state_name: str) -> str
 |      State Abbreviation Lookup Utility
 |      
 |             DocTests:
 |             >>> StateLookup.abbrev_lookup('Texas')
 |             'TX'
 |      
 |             @param state_name: the state name
 |             @return string: abbreviation
 |  
 |  name_lookup(state_abbrev: 'unicode') -> 'unicode' from builtins.type
 |      StateLookup.name_lookup(cls, unicode state_abbrev: str) -> str
 |      State Name Lookup Utility
 |      
 |             DocTests:
 |             >>> StateLookup.name_lookup('CA')
 |             'California'
 |      
 |             @param state_abbrev: state abbreviation
 |             @return string: state name
 |  
 |  ----------------------------------------------------------------------
 |  Data descriptors defined here:
 |  
 |  __dict__
 |      dictionary for instance variables (if defined)
 |  
 |  __weakref__
 |      list of weak references to the object (if defined)
 |  
 |  ----------------------------------------------------------------------
 |  Data and other attributes defined here:
 |  
 |  abbreviations = {'Alabama': 'AL', 'Alaska': 'AK', 'American Samoa': 'A...
 |  
 |  states = {'AK': 'Alaska', 'AL': 'Alabama', 'AR': 'Arkansas', 'AS': 'Am...

```

## Randomizers

### `LambdaData.random_range`
```
Help on built-in function random_range in module LambdaData:

random_range(...)
    random_range(start: int, stop: int = 0, step: int = 1) -> int
    Random Range: Flat uniform distribution.
       The order of the inputs `start` and `stop` are interchangeable.
       Conceptually: A = min(start, stop), B = max(start, stop), C = step
       The sign of the step parameter controls the phase of the output.
       Negative stepping will flip the inclusively of the distribution.
       In other words: a negative step means to count down, not up.
    
       DocTests:
       >>> all(random_range(10) in range(10) for _ in range(100))
       True
       >>> all(random_range(1, 10) in range(1, 10) for _ in range(100))
       True
       >>> all(random_range(1, 10, 2) in range(1, 10, 2) for _ in range(100))
       True
       >>> random_range(0)
       0
    
       @param start: Typically the lower bound. Inclusive.
       @param stop: Typically the upper limit. Exclusive.
       @param step: Size of the increments within the distribution.
       @return: Random Integer in range [A, B) by C, or (A, B] by |C| for -C

```
### `LambdaData.shuffle`
```
Help on built-in function shuffle in module LambdaData:

shuffle(...)
    shuffle(array: List[Any])
    Shuffle: Knuth B Algorithm
       Destructive, in-place shuffle.
       Reverse Order Random Swap Back.
    
       @param array: List of values to be shuffled.

```
### `LambdaData.TruffleShuffle`
```
Help on class TruffleShuffle in module LambdaData:

class TruffleShuffle(builtins.object)
 |  TruffleShuffle(collection: Iterable[Any])
 |  
 |  Truffle Shuffle
 |  Produces random values from a collection with a Wide Uniform Distribution.
 |  
 |  @param collection :: Collection of Values. Any list-like object, a Set is
 |      recommended but not required.
 |  @return :: Callable Object. `Callable() -> Value`
 |      @return :: Random Value, wide distribution
 |  
 |  Wide Uniform Distribution: "Wide" refers to the average distance between
 |  consecutive occurrences of the same value. The average width of the output
 |  distribution will naturally scale up with the size of the collection.
 |  The goal of this type of distribution is to keep the output sequence free
 |  of clumps or streaks of the same value, while maintaining randomness and
 |  uniform probability. This is not the same as a flat uniform distribution.
 |  The two distributions over time will be statistically similar for any
 |  given set, but the repetitiveness of the output sequence will be
 |  very different.
 |  
 |  Methods defined here:
 |  
 |  __call__(self, *args, **kwargs) -> Any
 |      TruffleShuffle.__call__(self, *args, **kwargs) -> Any
 |  
 |  __init__(self, collection: Iterable[Any])
 |      TruffleShuffle.__init__(self, collection: Iterable[Any])
 |  
 |  ----------------------------------------------------------------------
 |  Data descriptors defined here:
 |  
 |  data
 |  
 |  rotate_size

```
