#include <iostream>
#include <vector>

using std::vector;
using std::pair;


void connected_util(int v, vector<vector<int>> &adj, vector<bool>& visited){
	visited[v] = true;
	for(auto it = adj[v].begin(); it != adj[v].end(); it++){
		 if(!visited[*it])
		 	connected_util((*it), adj, visited);
	}
}

//simple dfs
int number_of_components(vector<vector<int> > &adj) {
	int res = 0;
	//write your code here
	vector<bool> traversed(adj.size(), false);
	//bool *traversed = new bool[adj.size()];

	for(int i = 0; i < adj.size(); i++){
		if(!traversed[i]){
			connected_util(i, adj, traversed);
			res++;
		}
	}
	return res;
}

int main() {
	size_t n, m;
	std::cin >> n >> m;
	vector<vector<int> > adj(n, vector<int>());
	for (size_t i = 0; i < m; i++) {
	int x, y;
	std::cin >> x >> y;
	adj[x - 1].push_back(y - 1);
	adj[y - 1].push_back(x - 1);
	}
	std::cout << number_of_components(adj);
}
