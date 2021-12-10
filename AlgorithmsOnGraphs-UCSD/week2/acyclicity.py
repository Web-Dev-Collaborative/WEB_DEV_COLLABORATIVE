#Uses python3

import sys

def acyclicUtil(adj, traversed, recur, v):
    traversed[v] = True
    recur[v] = True

    for node in adj[v]:
        if not traversed[node]:
            if acyclicUtil(adj, traversed, recur, node):
                return 1
        elif recur[v]:
            return 1
    recur[v] = False
    return 0
    
def acyclic(adj):
    traversed = recur = len(adj) * [False]

    for i in range(len(adj)):
        if not traversed[i]:
            if acyclicUtil(adj, traversed, recur, i):
                return 1
    return 0

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(data[0:(2 * m):2], data[1:(2 * m):2]))
    adj = [[] for _ in range(n)]
    for (a, b) in edges:
        adj[a - 1].append(b - 1)
    print(acyclic(adj))
