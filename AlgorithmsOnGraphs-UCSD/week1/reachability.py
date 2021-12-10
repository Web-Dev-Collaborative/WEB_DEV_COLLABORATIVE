#Uses python3

import sys
from collections import deque

def reach(adj, x, y):
    is_reachable = 0
    traversed = len(adj) * [False]
    de = deque()

    traversed[x] = True
    de.append(x)
    while de:
        curr = de.popleft()
        if curr == y:
            is_reachable = 1
            break
        for node in adj[curr]:
            if node == y:
                is_reachable = 1
                break
            if not traversed[node]:
                traversed[node] = True
                de.append(node)
    return is_reachable

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(data[0:(2 * m):2], data[1:(2 * m):2]))
    x, y = data[2 * m:]
    adj = [[] for _ in range(n)]
    x, y = x - 1, y - 1
    for (a, b) in edges:
        adj[a - 1].append(b - 1)
        adj[b - 1].append(a - 1)
    print(reach(adj, x, y))
