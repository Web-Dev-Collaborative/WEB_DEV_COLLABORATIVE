def merge_sort(input_list):
    """
    Standard mergesort operation
    """
    length = len(input_list)
    if length == 1:
        return input_list
            
    midpoint = length // 2 #find mid
    left_half = merge_sort(input_list[0 : midpoint]) 
    right_half = merge_sort(input_list[midpoint : ])
    
    sorted_list = list([])
    left_ind_len, right_ind_len = len(left_half), len(right_half)
    left_ind, right_ind = 0, 0
    
    while (len(sorted_list) != left_ind_len + right_ind_len): #terminating condition
        if left_half[left_ind] < right_half[right_ind]: #apped smallest to sorted first
            sorted_list.append(left_half[left_ind])

            if left_ind == left_ind_len - 1:
                sorted_list.extend(right_half[right_ind:])
                right_ind += right_ind_len - right_ind
            else:
                left_ind += 1

        else:   
            sorted_list.append(right_half[right_ind])

            if right_ind == right_ind_len - 1:
                sorted_list.extend(left_half[left_ind:])
                left_ind += left_ind_len - left_ind
            else:
                right_ind += 1
    return sorted_list
    
def rearrange_digits(input_list):
    """
    Rearrange Array Elements so as to form two number such that their sum is maximum.
    Args:
       input_list(list): Input List
    Returns:
       (int),(int): Two maximum sums
    """
    if len(input_list) == 0:
        return [-1, -1]
    
    sorted_input_list = merge_sort(input_list)
    sorted_list_len = len(sorted_input_list)    
    first_sum, second_sum = '', ''
    index = 0

    while index < sorted_list_len:

        first_sum_index = sorted_list_len - index - 1
        second_sum_index = first_sum_index - 1
        first_sum = f"{first_sum}{sorted_input_list[first_sum_index]}"

        if sorted_list_len - index != 1:
            second_sum = f"{second_sum}{sorted_input_list[second_sum_index]}"
        
        index += 2

    return [int(first_sum), int(second_sum)] #map string representation of int to integer

#testcases
def test_function(test_case):
    output = rearrange_digits(test_case[0])
    solution = test_case[1]
    if sum(output) == sum(solution):
        print("Pass")
    else:
        print("Fail")

test_function([[1, 2, 3, 4, 5], [542, 31]])
test_function([[4, 6, 2, 5, 9, 8], [964, 852]])
test_function([[4, 6, 2, 5, 9, 8, 7, 1], [9752, 8641]])
test_function([[3, 0, 4, 6, 2, 5, 9, 8, 7, 1], [97531, 86420]])
test_function([[], [-1, -1]])