def intersection(arrays):
    """
    YOUR CODE HERE
    """
    # Your code here
    result = []
    cache = {}

    for index, arr in enumerate(arrays):
        for num in arr:
            if cache.get(num) is not None and index > 0:
                cache[num] += 1
            elif cache.get(num) is None and index == 0:
                cache[num] = 1
            else:
                continue

    for value in cache:
        if cache[value] == len(arrays):
            result.append(value)

    return result


if __name__ == "__main__":
    arrays = []

    arrays.append(list(range(1000000, 2000000)) + [1, 2, 3])
    arrays.append(list(range(2000000, 3000000)) + [1, 2, 3])
    arrays.append(list(range(3000000, 4000000)) + [1, 2, 3])

    print(intersection(arrays))
