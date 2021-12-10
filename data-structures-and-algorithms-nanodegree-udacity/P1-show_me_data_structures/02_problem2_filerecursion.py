'''
For this problem, the goal is to write code for finding all files under a directory
(and all directories beneath it) that end with ".c"
Here is an example of a test directory listing listing:
    ./testdir
    ./testdir/subdir1
    ./testdir/subdir1/a.c
    ./testdir/subdir1/a.h
    ./testdir/subdir2
    ./testdir/subdir2/.gitkeep
    ./testdir/subdir3
    ./testdir/subdir3/subsubdir1
    ./testdir/subdir3/subsubdir1/b.c
    ./testdir/subdir3/subsubdir1/b.h
    ./testdir/subdir4
    ./testdir/subdir4/.gitkeep
    ./testdir/subdir5
    ./testdir/subdir5/a.c
    ./testdir/subdir5/a.h
    ./testdir/t1.c
    ./testdir/t1.h
Python's os module will be useful—in particular, you may want to use the
following resources:
  os.path.isdir(path)
  os.path.isfile(path)
  os.listdir(directory)
  os.path.join(...)
Note: os.walk() is a handy Python method which can achieve this task very easily.
However, for this problem you are NOT allowed to use os.walk().
'''

import os

def find_files(suffix, path):
    """
    Find all files existing in the given path with suffix.
    @params:
      suffix(str): suffix if the file name to be found
      path(str): path of the file system

    @returns:
       a list of paths
    """

    # Edge cases
    if not os.path.isdir(path):
        return 'Invalid Directory'
    path_list = os.listdir(path)
    output = []
    for item in path_list:
        item_path = os.path.join(path, item)
        if os.path.isdir(item_path):
            output += find_files(suffix,item_path)
        if os.path.isfile(item_path) and item_path.endswith(suffix):
            output.append(item_path)
    return output

# Default test
print("Test 1")
print(find_files('.c', 'testdir'))

# Prints every file
print("Test 2")
print(find_files('', 'testdir'))

# Non existent extension
print("Test 3")
print(find_files('.z', 'testdir'))

# Non existent directory
print("Test 4")
print(find_files('.c', 'asdf'))

# Empty Directory
print("Test 5")
print(find_files('.c', 'emptydir'))