'''
Union and Intersection of Two Linked Lists
Your task for this problem is to fill out the union and intersection functions. The union of two sets A and B is the set of elements which are in A, in B, or in both A and B. The intersection of two sets A and B, denoted by A ∩ B, is the set of all objects that are members of both the sets A and B.
You will take in two linked lists and return a linked list that is composed of either the union or intersection, respectively. Once you have completed the problem you will create your own test cases and perform your own run time analysis on the code.
'''

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __repr__(self):
        return str(self.value)

    def get_next_node(self):
        return self.next

    def set_next_node(self, node):
        self.next = node

    def get_current_value(self):
        return self.value
    

class LinkedList:
    def __init__(self):
        self.head = None

    def get_head(self):
        return self.head
    
    def set_head(self, node):
        self.head = node
        
    def __str__(self):
        cur_head = self.get_head()
        out_string = ""
        while cur_head:
            out_string += str(cur_head.get_current_value()) + " -> "
            cur_head = cur_head.get_next_node()
        return out_string

    def append(self, value):
        if self.get_head() is None:
            self.set_head(Node(value))
            return

        node = self.get_head()
        while node.get_next_node():
            node = node.get_next_node()
        node.set_next_node(Node(value))

    def size(self):
        size = 0
        node = self.get_head()
        while node:
            size += 1
            node = node.get_next_node()
        return size

def union(l1, l2):
    # Your Solution Here
    union_ll = LinkedList()

    # create a dictionary
    values_map = dict({})
    
    # scan l1 and append to union_ll
    current_node = l1.get_head()

    while current_node is not None:
        value = current_node.get_current_value()

        if value in values_map:
            current_count = values_map[value].get("count") + 1
            values_map[value] = {"count": current_count}
        else:
            values_map[value] = {"count": 1}
            union_ll.append(value)
        
        current_node = current_node.get_next_node()

    # scan l2 and append to union_ll
    current_node = l2.get_head()

    while current_node is not None:
        value = current_node.get_current_value()
        
        if value in values_map:
            current_count = values_map[value].get("count") + 1
            values_map[value] = {"count": current_count}
        else:
            values_map[value] = {"count": 1}
            union_ll.append(value)
        
        current_node = current_node.get_next_node()

    if union_ll.size() == 0:
        return None
    return union_ll

def intersection(l1, l2):
    # Your Solution Here
    intersect_ll = LinkedList()
    
    # create a dictionary
    values_map = dict({}) 

    # scan l1 and append to intersect_ll
    current_node = l1.get_head()
    while current_node is not None:
        value = current_node.get_current_value()

        if value in values_map:
            current_count = values_map[value].get("count") + 1
            values_map[value] = {"count": current_count, "seen_in_first_list" : True}
        else:
            values_map[value] = {"count": 1, "seen_in_first_list" : True}        
        current_node = current_node.get_next_node()

    # scan l2 and append to intersect_ll
    current_node = l2.get_head()
    while current_node is not None:
        value = current_node.get_current_value()
        if value in values_map:
            current_count = values_map[value].get("count") + 1
            if values_map[value].get("seen_in_first_list") is True:
                values_map[value] = {"count": current_count}
                intersect_ll.append(value)
        else:
            values_map[value] = {"count": 1}
        current_node = current_node.get_next_node()

    if intersect_ll.size() == 0:
        return None
    return intersect_ll

# Test case 1

linked_list_1 = LinkedList()
linked_list_2 = LinkedList()

element_1 = [3,2,4,35,6,65,6,4,3,21]
element_2 = [6,32,4,9,6,1,11,21,1]

for i in element_1:
    linked_list_1.append(i)

for i in element_2:
    linked_list_2.append(i)

print (union(linked_list_1,linked_list_2))
print (intersection(linked_list_1,linked_list_2))

# Test case 2

linked_list_3 = LinkedList()
linked_list_4 = LinkedList()

element_1 = [3,2,4,35,6,65,6,4,3,23]
element_2 = [1,7,8,9,11,21,1]

for i in element_1:
    linked_list_3.append(i)

for i in element_2:
    linked_list_4.append(i)

print (union(linked_list_3,linked_list_4))
print (intersection(linked_list_3,linked_list_4))

# Test case 3

linked_list_5 = LinkedList()
linked_list_6 = LinkedList()

element_1 = []
element_2 = []

for i in element_1:
    linked_list_5.append(i)

for i in element_2:
    linked_list_6.append(i)

print("Test Case 3:")
print (union(linked_list_5,linked_list_6)) # empty list, returns None
print (intersection(linked_list_5,linked_list_6)) # empty list, returns None