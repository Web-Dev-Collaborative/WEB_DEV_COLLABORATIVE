import sys

'''
Huffman Coding
A Huffman code is a type of optimal prefix code that is used for compressing data. The Huffman encoding and decoding schema is also lossless, meaning that when compressing the data to make it smaller, there is no loss of information.

The Huffman algorithm works by assigning codes that correspond to the relative frequency of each character for each character. The Huffman code can be of any length and does not require a prefix; therefore, this binary code can be visualized on a binary tree with each encoded character being stored on leafs.

There are many types of pseudocode for this algorithm. At the basic core, it is comprised of building a Huffman tree, encoding the data, and, lastly, decoding the data.

Here is one type of pseudocode for this coding schema:

Take a string and determine the relevant frequencies of the characters.
Build and sort a list of tuples from lowest to highest frequencies.
Build the Huffman Tree by assigning a binary code to each letter, using shorter codes for the more frequent letters. (This is the heart of the Huffman algorithm.)
Trim the Huffman Tree (remove the frequencies from the previously built tree).
Encode the text into its compressed form.
Decode the text from its compressed form.
You then will need to create encoding, decoding, and sizing schemas.
'''

class Node:
    def __init__(self, letter=None, frequency=None, left_child=None, right_child=None):
        self.letter = letter
        self.frequency = frequency
        self.left_child = left_child
        self.right_child = right_child
        self.binary_code = ''

    def __str__(self):
        s = 'Node(' + self.letter + ', ' + str(self.frequency) + ')'
        return s

class Tree:
    def __init__(self, node, single_character):
        self.root = node
        self.single_character = single_character
        self.binary_codes = dict()

    def create_binary_codes(self, node):
        """
        Inorder traversal for creation of binary nodes
        :params: root
        :return: None
        """

        # If data consists of only single character
        if self.single_character:
            node.binary_code = '0'
            self.binary_codes[node.letter] = node.binary_code
            return

        # append 1 to binary_code if right subtree, append 0 to binary_code if left subtree 
        # If node has left child, update binary code and traverse left subtree
        if node.left_child is not None:
            node.left_child.binary_code = node.binary_code + '0'
            self.create_binary_codes(node.left_child)

        # If node has right child, update binary code and traverse right subtree
        if node.right_child is not None:
            node.right_child.binary_code = node.binary_code + '1'
            self.create_binary_codes(node.right_child)

        #Append nodes in dictionary with their binary code
        if node.letter is not None and node.letter != '':
            self.binary_codes[node.letter] = node.binary_code


class PriorityQueue:
    def __init__(self):
        self.queue = []  # Queue of Nodes
        self.length = 0

    def is_empty(self):
        return self.length == 0

    def put(self, node):
        self.queue.append(node)
        self.length += 1

    def pop_least_frequent(self):
        least_frequent_node = self.queue[0]  # Least frequent node
        index = 0  # Index of least frequent node

        # Find least frequent node
        for i in range(self.length):
            if self.queue[i].frequency < least_frequent_node.frequency:
                least_frequent_node = self.queue[i]
                index = i

        # Decrement length of queue
        self.length -= 1

        # Remove node
        del self.queue[index]

        # Return node
        return least_frequent_node

    def __str__(self):
        s = ''
        for node in self.queue:
            s += node.__str__() + ', '
        return s


def huffman_encoding(data):
    """
    Function encodes data using huffman coding. The data on the huffman leaves results in the huffman encoding
    :params: String to encode
    :return: encoded_data: Encoded data
    :return: binary_tree: Binary tree with characters on leaves
    """

    # Edge case
    if data is None or data == '':
        return None, None

    print("data: ", data)
    
    # Create dictionary for frequencies {character : frequency}
    frequencies = dict()
    for char in data:
        if char in frequencies:
            frequencies[char] += 1
        else:
            frequencies[char] = 1
    print("frequencies: ", frequencies)

    # Build Priority Queue by iterating through data
    priority_queue = PriorityQueue()
    for char in frequencies:
        # Build Nodes using (character --> frequency) dictionary
        node = Node(char, frequencies[char])

        # Insert Nodes into a Priority Queue
        priority_queue.put(node)
    print("priority_queue:", priority_queue)

    # Build the Huffman Tree from Priority Queue
    while priority_queue.length > 1:
        
        # Pop 2 nodes with least frequency count
        node1 = priority_queue.pop_least_frequent()
        node2 = priority_queue.pop_least_frequent()

        # Create a parent node with: sum of frequencies of 2 nodes, left and right child which are the 2 nodes
        parent_node_frequency = node1.frequency + node2.frequency
        parent_node = Node('', parent_node_frequency, node1, node2)

        # Push parent node back into Priority Queue
        priority_queue.put(parent_node)

    # Finally, the priority queue will have 1 node that represents the root of the tree
    print("priority_queue after creating tree:", priority_queue)

    # Create (character --> binary code) dictionary
    # Assign a binary code to each letter (shorter codes for more frequent letters)
    # When we hit a leaf node that holds a letter, we return that binary code and assign it to that letter
    # e.g. 0111 is "left right right right", so binary_codes[letter] = "0111"
    
    binary_codes = {}
    root = priority_queue.queue[0]  # Find the root
    if data == len(data) * data[0]:  # Check if data consists of a single unique character e.g 'AAAAA'
        single_character = True
    else:
        single_character = False
    binary_tree = Tree(root, single_character)  # Create binary tree
    binary_tree.create_binary_codes(root)  # Create binary codes
    binary_codes = binary_tree.binary_codes

    print("binary_codes:", binary_codes)
    print("binary_tree:", binary_tree)

    # Encode text into its compressed form (sequence of binary codes that were assigned to each letter)
    # Read input and access (character --> binary code) dictionary
    # E.g. binary_codes[first_letter] + binary_codes[second_letter] + ...
    compressed_form = ''
    for letter in data:
        compressed_form += binary_codes[letter]
    print("compressed_form:", compressed_form)
    print()

    return compressed_form, binary_tree


def huffman_decoding(data, tree):
    """
    Decodes data on a tree using Huffman Decoding
    :param data:
    :param tree:
    :return:
    """

    decoded_data = ''
    root = tree.root
    node = root  # Node used for traverse tree
    index = 0  # Index used to traverse data

    # If encoded data only consists of one unique character
    if tree.single_character:
        decoded_data = root.letter * root.frequency
        return decoded_data

    # Iterate over data
    while index != len(data):
        # print(decoded_data, node, index)

        # If current bit is 0
        if data[index] == '0':
            # Move to the left node
            node = node.left_child

        # Elif current bit is 1
        elif data[index] == '1':
            # Move to the right node
            node = node.right_child

        # If we hit a leaf node, append the letter to decoded_data and restart at the root
        if node.left_child is None and node.right_child is None:
            decoded_data += node.letter
            node = root

        index += 1
    return decoded_data

def test_function(sentence):
    encoded_data, tree = huffman_encoding(sentence)

    if encoded_data is not None:
        print("The size of the data is: {}\n".format(sys.getsizeof(sentence)))
        print("The content of the data is: {}\n".format(sentence))

        print("The size of the encoded data is: {}\n".format(sys.getsizeof(int(encoded_data, base=2))))
        print("The content of the encoded data is: {}\n".format(encoded_data))

        decoded_data = huffman_decoding(encoded_data, tree)

        print("The size of the decoded data is: {}\n".format(sys.getsizeof(decoded_data)))
        print("The content of the decoded data is: {}\n".format(decoded_data))
    print('\n\n\n')


# Edge test cases
test_function('')
test_function('A')
test_function('AA')
test_function('AAAAA')

# General test case
test_function("The bird is the word")