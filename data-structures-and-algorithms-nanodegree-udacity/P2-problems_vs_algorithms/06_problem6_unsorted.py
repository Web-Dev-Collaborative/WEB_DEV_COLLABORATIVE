import random

def get_min_max(nums):
    """
    Return a tuple(min, max) out of list of unsorted integers.
    Args:
       nums(list): list of integers containing one or more integers
    """
    if type(nums) is not list:
        print("Input type is not list", end = ' -')
        return
    if nums is None or nums == []:
        print("Empty list", end = ' -')
        return
   
    nums_len = len(nums)
    min_val, max_val = nums[0], nums[0]
    index = 1
    while index < nums_len:
        if nums[index] < min_val:
            min_val = nums[index] #keeps track of min at every iteration
        if nums[index] > max_val:
            max_val = nums[index] #keeps track of max at every iteration
        index += 1
    return(min_val, max_val)

##Testcases
nums = [i for i in range(0, 10)]  # a list containing 0 - 9
random.shuffle(nums)
print ("Pass" if ((0, 9) == get_min_max(nums)) else "Fail")
print ("Pass" if ((0, 999) != get_min_max(nums)) else "Fail")
print ("Pass" if ((-9, 0) != get_min_max(nums)) else "Fail")
print ("Fail" if (None == get_min_max([])) else "Pass")
print ("Fail" if (None == get_min_max("Hello")) else "Pass")
