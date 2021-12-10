#include <iostream>
#include <vector>

using std::vector;

int negative_cycle(vector<vector<int> > &adj, vector<vector<int> > &cost) {
    //write your code here
    vector<int> distances(adj.size(), INT64_MAX);
    for(int k = 0; k < adj.size() - 1; k++){
        for(int i = 0; i < adj.size(); i++){
            int j = 0;
            for(auto it = adj[i].begin(); it != adj[i].end(); it++){
                if(distances[*it] > distances[i] + cost[i][j]){
                    distances[*it] = distances[i] + cost[i][j];
                }
                else
                    j++;
            }
        }
    }

    for(int i = 0; i < adj.size(); i++){
            int j = 0;
            for(auto it = adj[i].begin(); it != adj[i].end(); it++){
                if(distances[*it] > distances[i] + cost[i][j]){
                    return 1;
                }
                else
                    j++;
            }
        }
    return 0;
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
  std::cout << negative_cycle(adj, cost);
}
