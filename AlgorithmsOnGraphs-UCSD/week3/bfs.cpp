//find shortest distance between source and sink vertex
#include <iostream>
#include <vector>
#include <queue>
using std::vector;
using std::queue;

bool bfs(vector<vector<int> > &adj, int s, int t, vector<int> &pre, vector<int> &dist){
    int v = adj.size();
    vector<bool> visited(v, false);
    queue<int> q;
    
    pre[s] = -1;
    dist[s] = 0;
    visited[s] = true;
    q.push(s);
    
    while(!q.empty()){
        int curr = q.front();
        q.pop();
        for(auto it = adj[curr].begin(); it != adj[curr].end(); it++){
            if(!visited[*it]){
                visited[*it] = true;
                dist[*it] = dist[curr] + 1;
                pre[*it] = curr;
                q.push(*it);
                if(*it == t)return true;
            }
        }
    }
    return false;
}

int distance(vector<vector<int> > &adj, int s, int t) {
    //write your code here
    int v = adj.size();
    vector<int> pre(v, -1);
    vector<int> dist(v, INT32_MAX);

    if(!bfs(adj, s, t, pre, dist))
        //std::cout<<"No path from src to dest..\n";
        return -1;

    /* Path printing
    vector<int> path;
    int final_node = dest;
    while(pred[final_node] != -1){ //traverse back from dest to src
        path.push_back(pred[final_node]);
        final_node = pred[final_node];
    }

    for(auto it = path.rbegin(); it != path.rend(); it++)
        cout<<*it<<" ";

    */
    return dist[t];
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
    int s, t;
    std::cin >> s >> t;
    s--, t--;
    std::cout << distance(adj, s, t);
}
