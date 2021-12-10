//graph m coloring problem --> find the bipartiteness
#include <iostream>
#include <vector>
#include <queue>

using std::vector;
using std::queue;

int bipartite(vector<vector<int> > &adj) {
    //write your code here
    // we create a color array to store colors assigned to all veritces.
    // value 1 --> color 1 assigned
    // value 0 --> color 2 assigned
    vector<int> colorArr(adj.size(), -1);

    //assign color to source vertex
    colorArr[0] = 1;

    //enqueue source
    queue<int> queue;
    queue.push(0);

    while(!queue.empty()){
        int u = queue.front();
        queue.pop();

        //check for self loop
        //if(adj[u][u] == 1) 
        //    return 0;
        
        //find all non-colored adjacent vertices
        for(auto it = adj[u].begin(); it != adj[u].end(); it++) {
            int v = *it;

            //destination v is not colored
            if (colorArr[v] == -1) {
            //assign alternate color to this adjacent v of u
                colorArr[v] = 1- colorArr[u];
                queue.push(v);
            }
            
            //destination v is colored with same color as u
            else if (colorArr[v] == colorArr[u])
                return 0;
        }
    }
    // If we reach here, then all adjacent vertices can
    //  be colored with alternate color
    return 1;
}

int main() {
  int n, m;
  std::cin >> n >> m;
  vector<vector<int> > adj(n, vector<int>());
  for (int i = 0; i < m; i++) {
    int x, y;
    std::cin >> x >> y;
    adj[x - 1].push_back(y - 1);
    adj[y - 1].push_back(x - 1);
  }
  std::cout << bipartite(adj);
}
