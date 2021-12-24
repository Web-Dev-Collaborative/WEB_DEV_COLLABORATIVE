from Node import Node
from PrintTree import printTree

"""
    Binary tree implementation
    function:
        push() : To push elements in binary tree
        size() : To get the size of binary tree (no. of node in tree)
        isPresent() : To see if elements is prerent or not
"""


class BinaryTree(printTree, object):
    def __init__(self):
        self.root = None

    def get_root(self):
        """ function to get root pointer """
        return self.root

    def size(self):
        """ function to get size """
        return self.__size(self.root)

    def __size(self, node):
        """ util function to calculate size """
        if root is None:
            return 0
        else:
            return 1 + self.__size(node.left) + self.__size(node.right)

    def isPresent(self, data):
        return self.__searchUtil(self.root, data)

    def __isPresentUtil(self, node, data):
        """ function to find if elements is prerent or not
            return true or false
        """
        if node is None:
            return False
        elif node.data == data:
            return True
        elif data > root.data:
            return self.__isPresentUtil(node.right, data)
        else:
            return self.__isPresentUtil(node.left, data)

    def maxDepth(self):
        """
        function to calculate maxDepth
        """
        print(self.__maxDepthUtil(self.root))

    def __maxDepthUtil(self, node):
        if node is None:
            return 0
        else:
            lDepth = self.__maxDepthUtil(node.left)
            rDepth = self.__maxDepthUtil(node.right)

            return lDepth + 1 if lDepth > rDepth else rDepth + 1

    def minValueNode(self,node=None):
        if node is None:
            node = self.root
        """ function that returns min
        value in a tree """
        current = node
        # loop down to find the leftmost leaf
        while current.left is not None:
            current = current.left
        return current

    def height(self):
        """function to calculate height of the tree"""
        return self.__heightUtil(self.root)

    def __heightUtil(self, node):
        if node is None:
            return 0

        return 1 + max(self.__heightUtil(node.left), self.__heightUtil(node.right))

    def heightBalanced(self):
        """ function to see if tree in height balanced """
        return self.__heightBalancedUtil(self.root)

    def __heightBalancedUtil(self, node):
        if node is None:
            return True

        lh = self.__heightUtil(node.left)
        lr = self.__heightUtil(node.right)

        if (
            abs(lh - lr) <= 1
            and self.__heightBalancedUtil(node.left)
            and self.__heightBalancedUtil(node.right)
        ):
            return True
        else:
            return False

    def __pushUtil(self, data, node):
        if node is None:
            node = Node(data)
        else:
            if data < node.data:
                if node.left is None:
                    node.left = Node(data)
                else:
                    self.__pushUtil(data, node.left)
            else:
                if node.right is None:
                    node.right = Node(data)
                else:
                    self.__pushUtil(data, node.right)

    def delete(self, data):
        """ function to delete
            element from binary tree"""
        return self.__deleteUtil(self.root, data)

    def __deleteUtil(self,node, data):
        if node is None:
            return node

        if data < node.data:
            node.left = self.__deleteUtil(node.left, data)
        elif data > node.data:
            node.right = self.__deleteUtil(node.right, data)
        else:
            if node.left is None:
                temp = node.right
                node = None
                return temp
            elif node.right is None:
                temp = node.left
                node = None
                return temp
            temp = self.minValueNode(node.right)
            node.data = temp.data
            node.right = self.__deleteUtil(node.right, temp.data)
        return node

    def push(self, data):
        """ function to push elements to bst """
        if self.root is None:
            self.root = Node(data)
        else:
            self.__pushUtil(data, self.root)
        return f"\nPushed - {data}"

    # printing functions
    def printInorder(self):
        return self._printInorder(self.root)

    def printPreorder(self):
        return self._printPreorder(self.root)

    def printPostorder(self):
        return self._printPostorder(self.root)

    def __str__(self):
        tree = self._printInorder(self.root)
        # joining list to display
        return " - ".join(tree)

    def __repr__(self):
        """ same as str """
        tree = self._printInorder(self.root)
        return " - ".join(tree)


# local testing
def main():
    tree = BinaryTree()
    print(tree.push(5))
    tree.push(3)
    tree.push(1)
    tree.push(3)
    tree.push(0)
    tree.push(2)
    tree.push(9)
    print(tree)
    tree.delete(5)
    print(tree)
    print(tree.printPreorder())


if __name__ == "__main__":
    main()
