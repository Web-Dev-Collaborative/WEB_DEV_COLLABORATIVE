#include <iostream>
#include <vector>

using std::vector;
using std::pair;

bool acyclicUtil(int v, vector<bool> &visited, vector<bool> &recur, vector<vector<int>> adj){
    //set visited and recursive stack to true for current v
    visited[v] = true;
    recur[v] = true;
    for(auto it = adj[v].begin(); it != adj[v].end(); it++){
        if(!visited[*it] && acyclicUtil(*it, visited, recur, adj))
            //!visited[] --> normal dfs --> recur only when not visited
            //acyclicUtil --> //checks if neighbour has a cycle
            return true;
        else if(recur[*it]) //checks if there is a node already visited for same strongly connected component
                return true;
    }   
    recur[v] = false; //once a vertex for the same component is processed, remove it from recursive stack
    return false;
}

int acyclic(vector<vector<int> > &adj) {
    //write your code here
    int n = adj.size();
    vector<bool> visited(n, false);
    vector<bool> recur(n, false);
    for(int i = 0; i < adj.size(); i++)
        if(!visited[i])
            if(acyclicUtil(i, visited, recur, adj))
                return 1;
    return 0;
}

int main() {
    size_t n, m;
    std::cin >> n >> m;
    vector<vector<int> > adj(n, vector<int>());
    for (size_t i = 0; i < m; i++) {
        int x, y;
        std::cin >> x >> y;
        adj[x - 1].push_back(y - 1);
    }
    std::cout << acyclic(adj);
}
