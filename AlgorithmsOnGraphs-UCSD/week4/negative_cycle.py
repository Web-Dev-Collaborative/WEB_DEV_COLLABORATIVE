#Uses python3

import sys


def negative_cycle(adj, cost):
    #write your code here
    number_of_vertices = len(adj)
    distances = [sys.maxsize] * number_of_vertices
    distances[0] = 0

    for _ in range(number_of_vertices - 1):
        for u in range(number_of_vertices):
            i = 0
            for v in adj[u]:
                if distances[v] > distances[u] + cost[u][i]:
                    distances[v] = distances[u] + cost[u][i]
                else:
                    i += 1
        
    #traversal 2
    for u in range(number_of_vertices):
        i = 0
        for v in adj[u]:
            if distances[v] > distances[u] + cost[u][i]:
                return 1
            else:
                i += 1
    return 0


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(zip(data[0:(3 * m):3], data[1:(3 * m):3]), data[2:(3 * m):3]))
    data = data[3 * m:]
    adj = [[] for _ in range(n)]
    cost = [[] for _ in range(n)]
    for ((a, b), w) in edges:
        adj[a - 1].append(b - 1)
        cost[a - 1].append(w)
    print(negative_cycle(adj, cost))
