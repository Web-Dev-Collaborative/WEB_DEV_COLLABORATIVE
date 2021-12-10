#Uses python3
import sys

# Return the trie built from patterns
# in the form of a dictionary of dictionaries,
# e.g. {0:{'A':1,'T':2},1:{'C':3}}
# where the key of the external dictionary is
# the node ID (integer), and the internal dictionary
# contains all the trie edges outgoing from the corresponding
# node, and the keys are the letters on those edges, and the
# values are the node IDs to which these edges lead.
def build_trie(patterns):
    tree = dict()
    # write your code here
    #we need to form dict of dicts
    tree[0] = dict() #dict of dicts
    next_node = 1 #next_node starts at 1 since the root has to be kept empty
    for pattern in patterns:
        current_node = 0
        for current_symbol in pattern: 
            if current_symbol in tree[current_node]: #already discovered node, hence traverse ahead
                current_node = tree[current_node][current_symbol]
            else: #not discovered node yet. Hence insert in trie and then move ahead
                tree[current_node][current_symbol] = next_node
                tree[next_node] = dict()
                current_node = next_node
                next_node += 1
    return tree

if __name__ == '__main__':
    patterns = sys.stdin.read().split()[1:]
    tree = build_trie(patterns)
    for node in tree:
        for c in tree[node]:
            print("{}->{}:{}".format(node, tree[node][c], c))