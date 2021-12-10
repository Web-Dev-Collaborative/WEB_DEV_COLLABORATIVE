class TrieNode:
    def __init__(self):
        """
        Initialize this node in the Trie
        """
        self.children = {}  # Dictionary of children
        self.is_word = False  # True if path taken up to this TrieNode is a word

    def insert(self, char):
        """
        Add a child node in this Trie
        param: char to insert
        """
        self.children[char] = TrieNode()

    def suffixes(self, suffix=''):
        """
        Recursive function that collects the suffix for all complete words below this point
        """

        suffixes = [] #find all suffixes
        #Iterate over all the children
        for char, node in self.children.items():
            #if node is a word
            if node.is_word:
                #append the suffix with the current char
                suffixes.append(suffix + char)
            #if node has more children down the path
            if node.children:
                #recursively add children to the suffixes
                suffixes.extend(node.suffixes(suffix + char))
        return suffixes

class Trie:
    """
    Trie itself containing the root node and insert/find functions
    """

    def __init__(self):
        """
        Initializes Trie with root node
        """
        self.root = TrieNode()  # Root of tree
        
    def insert(self, word):
        """Adds a word to the Trie"""

        node = self.root  # Node used to traverse the Trie

        # Iterate over all character in word
        for char in word:

            # If character isn't a child of current node
            if char not in node.children:
                # Add character as a child
                node.insert(char)

            # Move traversal node forward
            node = node.children[char]

        # New word has been added to Trie
        node.is_word = True

    def find(self, prefix):
        """Finds the Trie node that represents this prefix"""

        node = self.root  # Node used to traverse the Trie

        # Iterate over all character in prefix
        for char in prefix:

            # If character isn't a child of current node
            if char not in node.children:
                # Prefix doesn't exist in Trie
                return False

            # Move traversal node forward
            node = node.children[char]

        # Return node that represents prefix
        return node


def test(prefix):
    # if prefix != '':
    prefix_node = MyTrie.find(prefix)
    print(prefix + ".suffixes():")
    if prefix_node:
        return prefix_node.suffixes()
    else:
        return prefix + "not found"


MyTrie = Trie()
wordList = [
    "ant", "anthology", "antagonist", "antonym",
    "fun", "function", "factory",
    "trie", "trigger", "trigonometry", "tripod"
]

for word in wordList:
    MyTrie.insert(word)

print("Word List:", wordList, '\n')

output = test('')
print(output)
print("Pass") if len(output) == len(wordList) else print("Fail")
print("----####----\n")

output = test('f')
print(output)
print("Pass") if output == ['un', 'unction', 'actory'] else print("Fail")
print("----####----\n")

output = test('an')
print(output)
print("Pass") if output == ['t', 'thology', 'tagonist', 'tonym'] else print("Fail")
print("----####----\n")

output = test('ant')
print(output)
print("Pass") if output == ['hology', 'agonist', 'onym'] else print("Fail")
print("----####----\n")

output = test('tripod')
print("Fail") if output == [] else print("Pass")
print("----####----\n")