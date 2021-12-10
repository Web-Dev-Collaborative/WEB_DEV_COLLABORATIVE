#include <iostream>
#include <vector>
#include <queue>

using std::vector;
using std::queue;
using std::pair;
using std::priority_queue;

int minDistance(const vector<int> &distances, const vector<bool> &visited){
    int min_dist = INT32_MAX;
    int min_index = 0;

    for(int i = 0; i < distances.size(); i++){
        if(!visited[i] && distances[i] < min_dist){
            min_dist = distances[i];
            min_index = i;
        }
    }
    return min_index;
}

int distance(vector<vector<int> > &adj, vector<vector<int> > &cost, int s, int t) {
    //write your code here
    vector<int> distances(adj.size(), INT32_MAX);
    vector<bool> visited(adj.size(), false);
    distances[s] = 0;

    for(int i = 0; i < adj.size() - 1; i++){
        int u = minDistance(distances, visited);
        if(u == adj.size())
            break;  
        int j = 0;
        visited[u] = true;
        for(auto it = adj[u].begin(); it != adj[u].end(); it++){
            if(!visited[*it] && distances[*it] > distances[u] + cost[u][j]){
                distances[*it] = distances[u] + cost[u][j];
            }
            j++;
        }
    }

    if(distances[t] != INT32_MAX)
        return distances[t];
    else return -1;
}

int main() {
  int n, m;
  std::cin >> n >> m;
  vector<vector<int> > adj(n, vector<int>());
  vector<vector<int> > cost(n, vector<int>());
  for (int i = 0; i < m; i++) {
    int x, y, w;
    std::cin >> x >> y >> w;
    adj[x - 1].push_back(y - 1);
    cost[x - 1].push_back(w);
  }
  int s, t;
  std::cin >> s >> t;
  s--, t--;
  std::cout << distance(adj, cost, s, t);
}
