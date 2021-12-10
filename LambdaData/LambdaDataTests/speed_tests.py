from LambdaData import *
from MonkeyScope import timer
from random import randrange
import itertools
import operator
import time


start = time.time()
test_size = 100
is_even = lambda x: x % 2 == 0


# Generators
print(f"\niota(1, stop=100, step=1)")
timer(iota, 1, stop=100, step=1)

print(f"\ngenerate(next, counter)")
counter = itertools.count(1)
timer(generate, next, counter)

print(f"\ngenerate_n(test_size, next, counter)")
timer(generate_n, test_size, next, counter)

# Expansions
print(f"\nfork(counter, 10)")
timer(fork, counter, 10)

print(f"\ninclusive_scan(range(test_size))")
timer(inclusive_scan, range(test_size))

print(f"\nexclusive_scan(range(test_size))")
timer(exclusive_scan, range(test_size))

# Transforms
print(f"\ntransform")
timer(transform, range(test_size), is_even)

print(f"\nadjacent_difference(range(test_size))")
timer(adjacent_difference, range(test_size))

print(f"\npartial_sum(range(test_size))")
timer(partial_sum, range(test_size))

# Permutations
print(f"\npartition")
timer(partition, range(test_size), is_even)

# Reductions
print(f"\nreduce(range(test_size), operator.add)")
timer(reduce, range(test_size), operator.add)

print(f"\naccumulate(range(test_size))")
timer(accumulate, range(test_size))

print(f"\nproduct(range(test_size))")
timer(product, range(test_size))

print(f"\nmin_max(range(test_size))")
timer(min_max, range(test_size))

print(f"\nstar_sum(*range(test_size)")
timer(star_sum, *range(test_size))

print(f"\nstar_product(*range(test_size))")
timer(star_product, *range(test_size))

# Queries
print(f"\nall_of(range(test_size), is_even)")
timer(all_of, range(test_size), is_even)

print(f"\nany_of(range(test_size), is_even)")
timer(any_of, range(test_size), is_even)

print(f"\nnone_of(range(test_size), is_even)")
timer(none_of, range(test_size), is_even)

# Transform & Reduce
print(f"\ntransform_reduce(range(test_size), range(test_size), operator.mul, sum)")
timer(transform_reduce, range(test_size), range(test_size), operator.mul, sum)

print(f"\ninner_product(range(test_size), range(test_size))")
timer(inner_product, range(test_size), range(test_size))

print(f"\nmatrix_multiply([[1, 2], [3, 4]], [[1], [2]])")
timer(matrix_multiply, [[1, 2], [3, 4]], [[1], [2]])

# MD Reductions
print(f"\nzip_transform(star_sum, range(test_size), range(test_size), range(test_size))")
timer(zip_transform, star_sum, range(test_size), range(test_size), range(test_size))

print(f"\ntransposed_sums(range(test_size), range(test_size), range(test_size))")
timer(transposed_sums, range(test_size), range(test_size), range(test_size))

# Set Ops
s1, s2, s3 = set(range(100)), set(range(50, 200)), set(range(150, 300))
print(f"\nunion(s1, s2, s3)")
timer(union, s1, s2, s3)

print(f"\nintersection(s1, s2, s3)")
timer(intersection, s1, s2, s3)

print(f"\ndifference(s1, s2, s3)")
timer(difference, s1, s2, s3)

print(f"\nsymmetric_difference(s1, s2, s3)")
timer(symmetric_difference, s1, s2, s3)

# Pandas Helpers
print('\nRandom.randrange(test_size)')
timer(randrange, test_size)

print('\nrandom_range(test_size)')
timer(random_range, test_size)

end = time.time()
print(f"\n\nTotal Time: {end - start:.3f} seconds")
