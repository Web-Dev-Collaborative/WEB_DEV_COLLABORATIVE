 #Uses python3
import sys

def minDistance(visited, distance):
    min_vertex = len(distance)
    min_distance = sys.maxsize

    for v in range(len(distance)):
        if not visited[v] and distance[v] < min_distance:
            min_distance = distance[v]
            min_vertex = v    
    return min_vertex


def distance(adj, cost, s, t):
    #write your code here
    '''
        #assuming directed graph
        adj --> 0 1 2 3 
                2 4 6 5   
                (0 is index of list which represents src index)
                (2 is destination index)
       cost --> 0 1 2
                5 3 7
                (0 is src index which represents weight)
    '''
    number_of_vertices = len(adj)
    distance = [sys.maxsize] * number_of_vertices
    visited = [False] * number_of_vertices
    distance[s] = 0 #src distance
    for _ in range(number_of_vertices - 1):
        u = minDistance(visited, distance) 
        if u == number_of_vertices:
            break
        visited[u] = True
        i = 0 # for all neighbours from u. Check cost[u][i]
        for v in adj[u]:
            if not visited[v] and distance[v] > distance[u] + cost[u][i]:
                distance[v] = distance[u] + cost[u][i]
            i += 1
    return distance[t] if distance[t] != sys.maxsize else -1

 
if __name__ == '__main__':
    user_input = sys.stdin.read()
    data = list(map(int, user_input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(
        zip(zip(data[0:(3 * m):3], data[1:(3 * m):3]), data[2:(3 * m):3]))
    data = data[3 * m:]
    adj = [[] for _ in range(n)]
    cost = [[] for _ in range(n)]
    for ((a, b), w) in edges:
        adj[a - 1].append(b - 1)
        cost[a - 1].append(w)
    s, t = data[0] - 1, data[1] - 1
    print(distance(adj, cost, s, t))