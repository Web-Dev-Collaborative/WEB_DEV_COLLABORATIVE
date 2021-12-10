
class Node:
  def __init__(self, value):
    self._value = value
    self._next = None

class LinkedList:
  def __init__(self):
    self._head = None
    self._tail = None
    self._length = 0 


  def get_node(self, position):
    if position >= self._length:
      return

    node = self._head
    for i in range(0, position):
      node = node._next
    return node


  def add_to_tail(self, value):
    new_node = Node(value)
    if self._length == 0:
      self._head = new_node
      self._tail = new_node
    else:
      self._tail._next = new_node
      self._tail = new_node
    self._length += 1


  def add_to_head(self, value):
    new_node = Node(value)
    if self._length == 0:
      self._head = new_node
      self._tail = new_node
    else:
      new_node._next = self._head
      self._head = new_node
    self._length += 1

      
  def remove_head(self):
    if self._length == 0:
      return
    elif self._length == 1:
      self._head = None
      self._tail = None
      self._length -= 1
    else:
      self._head = self._head._next
      self._length -= 1
    

  def remove_tail(self):
    if self._length == 0:
      return
    elif self._length == 1:
      self._head = None
      self._tail = None
      self._length -= 1
    else:
      node = self.get_node(self._length - 1)
      node._next = None
      self._tail = node
      self._length -= 1

  def __len__(self):
    return self._length

# Phase 2

  def contains_value(self, target):
    node = self._head

    for i in range(0, self._length):
      if node._value == target:
        return True
      node = node._next
    return False
    

  def insert_value(self, position, value):
    new_node = Node(value)

    if position == 0:
      self.add_to_head(value)
    elif position == self._length - 1:
      self.add_to_tail(value)
    else:
      prev_node = self.get_node(position - 1)
      next_node = prev_node._next
      prev_node._next = new_node
      new_node._next = next_node
  
  def update_value(self, position, value):
    node = self.get_node(position)
    node._value = value

 
  def remove_node(self, position):
    if position == 0:
      self.remove_head()
    elif position == self._length - 1:
      self.remove_tail()
    else:    
      node = self.get_node(position)
      prev_node = self.get_node(position -1)
      prev_node._next = node._next
      self._length -= 1

  def __str__(self):
    if self._length == 0:
      return 'Empty List'
    list_array = []
    node = self._head
    for i in range(0, self._length):
      list_array.append(node._value)
      node = node._next

    return ', '.join(list_array)





# Phase 2 Manual Testing

# # 1. Test whether the list contains_value a value
linked_list = LinkedList()
linked_list.add_to_head('new head node')
print(linked_list.contains_value('new head node'))      # True
print(linked_list.contains_value('App Academy node'))   # False

# # 2. Test inserting a node value into the list at a specific position
linked_list.insert_value(0, 'hello!')
linked_list.insert_value(1, 'james!')
print(linked_list.get_node(0)._value)                # `hello!`

# # 3. Test updating a list node's value at a specific position
linked_list.update_value(0, 'goodbye!')
print(linked_list.get_node(0)._value)                   # `goodbye!`

# # 4. Test removing a node value from the list at a specific position
print(linked_list.get_node(1)._value)                   # `new head node`
linked_list.remove_node(1)
print(linked_list.get_node(1))                          # None

# # 5. Format the list as a string whenever `print()` is invoked
new_linked_list = LinkedList()
print(new_linked_list)                  # Empty List
new_linked_list.add_to_tail('puppies')
print(new_linked_list)                  # puppies
new_linked_list.add_to_tail('kittens')
print(new_linked_list)                  # puppies, kittens

# Phase 1 Manual Testing:

# 1. Test Node and LinkedList initialization
# node = Node('hello')
# print(node)                                     # <__main__.Node object at ...>
# print(node._value)                              # hello
# linked_list = LinkedList()
# print(linked_list)                              # <__main__.LinkedList object at ...>
# print('---------------')

# # # 2. Test getting a node by its position
# print(linked_list.get_node(0))                # None
# print('---------------')

# # 3. Test adding a node to the list's tail
# linked_list.add_to_tail('new tail node')
# print(linked_list.get_node(0))                # <__main__.Node object at ...>
# print(linked_list.get_node(0)._value)         # `new tail node`
# print('---------------')

# # # 4. Test adding a node to list's head
# linked_list.add_to_head('new head node')
# print(linked_list.get_node(0))                # <__main__.Node object at ...>
# print(linked_list.get_node(0)._value)      # `new head node`
# print('---------------')

# # # 5. Test removing the head node
# linked_list.remove_head()
# print(linked_list.get_node(0)._value)         # `new tail node` because `new head node` has been removed
# print(linked_list.get_node(1))                # `None` because `new head node` has been removed
# print('---------------')

# # # 6. Test removing the tail node
# print(linked_list.get_node(0)._value)         # `new tail node`
# linked_list.remove_tail()
# print(linked_list.get_node(0))                # None
# print('---------------')


# # # 7. Test returning the list length
# print(len(linked_list))                                 # 2
# print('---------------')