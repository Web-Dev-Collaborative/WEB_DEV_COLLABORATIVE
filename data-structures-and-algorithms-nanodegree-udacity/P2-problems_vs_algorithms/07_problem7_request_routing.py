import collections

# A RouteTrieNode will be similar to our autocomplete TrieNode... with one additional element, a handler.
class RouteTrieNode:
    def __init__(self, handler=None):
        # Initialize the node with children as before, plus a handler
        self.children = collections.defaultdict(RouteTrieNode)
        self.handler = handler
        
# A RouteTrie will store our routes and their associated handlers
class RouteTrie:
    def __init__(self):
        # Initialize the trie with an root node and a handler, this is the root path or home page node
        self.root = RouteTrieNode()
        
    def insert(self, handler, paths):
        # Similar to our previous example you will want to recursively add nodes
        # Make sure you assign the handler to only the leaf (deepest) node of this path
        current_node = self.root

        for path in paths:
            current_node = current_node.children[path]            
        current_node.handler = handler
        
    def find(self, paths):
        # Starting at the root, navigate the Trie to find a match for this path
        # Return the handler for a match, or None for no match
        current_node = self.root

        for path in paths:
            if path not in current_node.children:
                return False

            current_node = current_node.children[path]
        return current_node.handler

class Router:
    def __init__(self, found_handler, not_found_handler):
        # Create a new RouteTrie for holding our routes
        self.routes = RouteTrie()
        self.routes.insert(found_handler, "/")
        self.not_found = not_found_handler
        
    def add_handler(self, path, handler):
        # Add a handler for a path
        # You will need to split the path and pass the pass parts
        # as a list to the RouteTrie
        self.routes.insert(handler, self.split_path(path))
        
    def lookup(self, path):
        # lookup path (by parts) and return the associated handler
        # you can return None if it's not found or
        # return the "not found" handler if you added one
        # bonus points if a path works with and without a trailing slash
        # e.g. /about and /about/ both return the /about handler
        return self.routes.find(self.split_path(path)) or self.not_found
    
    def split_path(self, path):
        # you need to split the path into parts for 
        # both the add_handler and loopup functions,
        # so it should be placed in a function here
        stripped_path = path.strip("/")
        #print(stripped_path)
        if stripped_path == "":
            return "/"
        else:
            return stripped_path

##Testcase
# create the router and add a route
router = Router("root handler", "not found handler") # remove the 'not found handler' if you did not implement this
router.add_handler("/home/about", "about handler")  # add a route

# some lookups with the expected output
print ("Pass" if  ("root handler" == router.lookup("/")) else "Fail")
print ("Pass" if  ("not found handler" == router.lookup("/home")) else "Fail")
print ("Pass" if  ("about handler" == router.lookup("/home/about")) else "Fail")
print ("Pass" if  ("about handler" == router.lookup("/home/about/")) else "Fail")
print ("Pass" if  ("not found handler" == router.lookup("/home/about/me")) else "Fail")
print ("Pass" if  ("not found handler" == router.lookup(".")) else "Fail")