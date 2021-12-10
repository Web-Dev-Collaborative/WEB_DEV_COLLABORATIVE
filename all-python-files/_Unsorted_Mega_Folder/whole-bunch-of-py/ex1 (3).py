def get_indices_of_item_weights(weights, length, limit):
    """
    YOUR CODE HERE
    """
    # Your code here
    cache = {}
    dupe_check = False
    dupes = {}

    for i in range(0, length):

        current = weights[i]
        cache[current] = i
        target = limit - current

        if target in cache:
            if current > target or current < target:
                return (i, cache[target])

            elif target == current:
                if dupe_check is False:
                    dupe_check = True
                    dupes[current] = i

                elif dupe_check is True:
                    return (i, dupes[current])

    return None
