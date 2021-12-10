#Uses python3

import sys
import math

# 1. make set out of each node
# 2. sort edges by distances
# 3. pick shortest edge
#     - if end vertices in same connected component, drop edge
#     - add edge, fuse connected components
# - Do #3 till 1 connected component

class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class DisjointSet:
    def __init__(self, n):
        self.parent = [-1 for _ in range(n)]

    def find(self, v):
        while self.parent[v] != -1:
            v = self.parent[v]
        return v


def compute_distance(V1, V2):
    d2 = math.pow((V1.x - V2.x), 2) + math.pow((V1.y - V2.y), 2)
    d = math.sqrt(d2)
    # print("distance:{0}".format(d))
    return d


def minimum_distance(x, y):
    result = 0.

    V = []
    for i in range(len(x)):
        V.append(Node(x[i], y[i]))

    E = []
    for i in range(len(V)):
        for j in range(len(V)):
            if i == j:
                continue

            dist = compute_distance(V[i], V[j])
            tup = (dist, i, j)  # (edge distance, node1, node2)
            E.append(tup)

    E_sorted = sorted(E)
    ds = DisjointSet(len(V))
    for (dist, idx1, idx2) in E_sorted:
        r1 = ds.find(idx1)
        r2 = ds.find(idx2)
        if r1 == r2:
            continue

        result += dist
        ds.parent[r1] = r2

    return result


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    x = data[1::2]
    y = data[2::2]
    # x = [0, 0, 1, 1]
    # y = [0, 1, 0, 1]
    print("{0:.9f}".format(minimum_distance(x, y)))
