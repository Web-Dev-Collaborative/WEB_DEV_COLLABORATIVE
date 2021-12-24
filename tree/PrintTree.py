class printTree(object):
    def _printInorder(self, node=None, traversal=[]):
        """
        print tree in inorder
        """
        if node:
            traversal = self._printInorder(node.left, traversal)
            traversal.append(str(node.data))
            traversal = self._printInorder(node.right, traversal)
        return traversal

    def _printPreorder(self, node=None, traversal=[]):
        """
        print tree in preorder
        """
        if node:
            traversal.append(str(node.data))
            traversal = self._printPreorder(node.left, traversal)
            traversal = self._printPreorder(node.right, traversal)
        return traversal

    def _printPostorder(self, node=None, traversal=[]):
        """
        print tree in postorder
        """
        if node:
            traversal = self._printPostorder(node.left, traversal)
            traversal = self._printPostorder(node.right, traversal)
            traversal.append(str(node.data))
        return traversal

    def _printLevelorder(self, node=None, traversal=[]):
        """
        print levelorder traversal
        """
        pass
