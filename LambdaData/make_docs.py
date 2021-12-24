from contextlib import redirect_stdout
from LambdaData import *


def get_help(data):
    with open('help.md', 'w') as f:
        with redirect_stdout(f):
            for group in data:
                print(f"\n## {group}\n")
                for func in data[group]:
                    print(f"### `LambdaData.{func.__name__}`")
                    print("```")
                    help(func)
                    print("```")


if __name__ == '__main__':
    help_data = {
        "Generators": (iota, generate, generate_n),
        "Expansions": (fork, inclusive_scan, exclusive_scan),
        "Transforms": (transform, adjacent_difference, partial_sum),
        "Permutations": (partition, ),
        "Reductions": (reduce, accumulate, product, min_max, star_sum, star_product),
        "Queries": (all_of, any_of, none_of),
        "Transform & Reduce": (transform_reduce, inner_product, matrix_multiply),
        "Multidimensional Reductions": (zip_transform, transposed_sums),
        "Multi-Set Operations": (union, intersection, difference, symmetric_difference),
        "Pandas Helpers": (value_span, star_cat_row, star_cat_col, StateLookup),
        "Randomizers": (random_range, shuffle, TruffleShuffle)
    }
    get_help(help_data)
