def has_negatives(a):
    """
    YOUR CODE HERE
    """
    # Your code here
    cache = {}
    result = []

    for num in a:
        absolute = abs(num)
        if cache.get(absolute) is not None:
            result.append(absolute)
        else:
            cache[absolute] = absolute

    return result


if __name__ == "__main__":
    print(has_negatives([-1, -2, 1, 2, 3, 4, -4]))
