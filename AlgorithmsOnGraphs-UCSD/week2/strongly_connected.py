#Uses python3

import sys

sys.setrecursionlimit(200000)

def dfs(adj, used, order, x):
    #write your code here
    used[x] = True
    for node in adj[x]:
        if not used[node]:
            dfs(adj, used, order, node)
    order.append(x)

def transpose_graph(adj):
    redges = [[] for _ in range(len(adj))]
    for i in range(len(adj)):
        for j in range(len(adj[i])):
            redges[adj[i][j]].append(i)
    return redges

'''    
def toposort(adj):
    used = [0] * len(adj)
    order = []
    #write your code here
    for i in range(len(adj)):
        if not used[i]:
            dfs(adj, used, order, i)
    return order[::-1]
'''

def number_of_strongly_connected_components(adj):
    result = 0
    #write your code here
    traversed = len(adj) * [False]
    stack = []
    for i in range(len(adj)):
        if not traversed[i]:
            dfs(adj, traversed, stack, i) #get ordering via stack and toposort
    #reverse graph
    radj = transpose_graph(adj)
    traversed = len(adj) * [False]
    while stack:
        curr = stack.pop()
        if not traversed[curr]:
            elestack = []
            dfs(radj, traversed, elestack, curr)
            result += 1
    return result

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(data[0:(2 * m):2], data[1:(2 * m):2]))
    adj = [[] for _ in range(n)]
    for (a, b) in edges:
        adj[a - 1].append(b - 1)
    print(number_of_strongly_connected_components(adj))