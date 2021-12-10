#Uses python3

import sys


def distance(adj, src, dest):
    pred = len(adj) * [-1]
    dist = len(adj) * [0]
    visited = len(adj) * [False]
    queue = []
    
    dist[src] = 0
    visited[src] = True
    queue.append(src)

    while queue:
        curr = queue.pop(0)
        for node in adj[curr]:
            if not visited[node]:
                visited[node] = True
                pred[node] = curr
                dist[node] = dist[curr] + 1
                queue.append(node)
                if dest == node:
                    return dist[dest]
    return -1
    
    '''
    #printing path
    path = []
    crawl = t #reverse traverse from destination node
    while pred[crawl] != -1:
        path.append(pred[crawl])
        crawl = pred[crawl]
    print(path[::-1])
    '''

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
    s, t = data[2 * m] - 1, data[2 * m + 1] - 1
    print(distance(adj, s, t))
