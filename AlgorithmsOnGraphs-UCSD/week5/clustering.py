#Uses python3
import sys
import math

class DisjointSet:
    def __init__(self, n):
        self.parent = [-1 for _ in range(n)]

    def find(self, v):
        while self.parent[v] != -1:
            v = self.parent[v]
        return v


def clustering(x, y, k):
    #write your code here
    E = []
    for i in range(len(x)):
        for j in range(i+1, len(x)):
            dist = math.sqrt(math.pow((x[i] - x[j]), 2) + math.pow((y[i] - y[j]), 2))
            tup = (dist, i, j)  #(edge distance, node1, node2)
            E.append(tup)
    E_sorted = sorted(E)
    ds = DisjointSet(len(x))
    num_clusters = len(x)

    for (dist, idx1, idx2) in E_sorted:
        r1 = ds.find(idx1)
        r2 = ds.find(idx2)
        if r1 == r2:
            continue
        if num_clusters == k:
            return dist
        ds.parent[r1] = r2
        num_clusters -= 1
    return -1


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    data = data[1:]
    x = data[0:2 * n:2]
    y = data[1:2 * n:2]
    data = data[2 * n:]
    k = data[0]
    print("{0:.9f}".format(clustering(x, y, k)))
