#Uses python3

import sys

#m coloring problem where m = 2
def bipartite(adj):
    #write your code here
    colors = len(adj) * [-1]
    queue = []
    colors[0] = 1
    queue.append(0)
    
    while not queue:
        u = queue.pop(0)
        #if adj[u][u] == 1: #self loop
        #    return 0
        
        for v in adj[u]:
            #destination not colored
            if colors[v] == -1:
                colors[v] = 1 - colors[u]
                queue.append(v)

            elif colors[v] == colors[u]: #adjacent nodes having same color
                return 0
    return 1

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(data[0:(2 * m):2], data[1:(2 * m):2]))
    adj = [[] for _ in range(n)]
    for (a, b) in edges:
        adj[a - 1].append(b - 1)
        adj[b - 1].append(a - 1)
    print(bipartite(adj))
