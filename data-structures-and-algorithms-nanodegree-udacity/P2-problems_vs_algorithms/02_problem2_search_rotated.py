def rotated_array_search(input_list, number):
    """
    Find the index by searching in a rotated sorted array
    Args:
       input_list(array), number(int): Input array to search and the target
    Returns:
       int: Index or -1
    """
    return helper(input_list, number, 0, len(input_list) - 1)


def helper(input_list, number, start, end):
    """
    variation of binary search to find one half of array that is strictly sorted
    :params input_list, number to search, start and end of range to search within
    """

    if start > end: #edge case
        return -1

    mid_index = (start + end) // 2 #find middle index
    mid_element = input_list[mid_index] #find middle element

    if mid_element == number: #base case
        return mid_index

    if input_list[start] <= mid_element: #check if left half is sorted and target number is present in it
        if mid_element > number and input_list[start] <= number: #if yes, truncate the right half and search for left half recursively for target
            return helper(input_list,number,start,mid_index - 1)
        return helper(input_list,number,mid_index + 1,end)
    else:  #check if right half is sorted and target number is present in it
        if mid_element < number and input_list[end] >= number:
            return helper(input_list,number,mid_index + 1,end)
        return helper(input_list,number,start,mid_index - 1)

def linear_search(input_list, number):
    for index, element in enumerate(input_list):
        if element == number:
            return index
    return -1

#testcases
def test_function(test_case):
    input_list = test_case[0]
    number = test_case[1]
    if linear_search(input_list, number) == rotated_array_search(input_list, number):
        print("Pass")
    else:
        print("Fail")

test_function([[6, 7, 8, 9, 10, 1, 2, 3, 4], 6])
test_function([[6, 7, 8, 9, 10, 1, 2, 3, 4], 1])
test_function([[6, 7, 8, 1, 2, 3, 4], 8])
test_function([[6, 7, 8, 1, 2, 3, 4], 1])
test_function([[6, 7, 8, 1, 2, 3, 4], 10])
test_function([[], 10]) #empty testcase
test_function([[1], 1])
test_function([[1], 0])
test_function([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3]) #check for non-rotated