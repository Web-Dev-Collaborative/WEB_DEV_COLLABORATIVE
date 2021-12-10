#include <iostream>
#include <vector>
#include <list>
using std::vector;
using std::pair;
using std::list;


int reach(vector<vector<int> > &adj, int x, int y) {
	//write your code here
	if(x == y) return 1; //basecase
	bool isReachable = 0; //check if path exists
	vector<bool> traversed(adj.size(), false); //check if already explored
	list<int> neighbors; //to store neighbors
	int curr;

	traversed[x] = true;
	neighbors.push_back(x); //src vertex
	while(!neighbors.empty()){
		curr = neighbors.front();
		neighbors.pop_front();
		if(curr == y){
			isReachable = 1;
			break;
		}
		for(auto it = adj[curr].begin(); it != adj[curr].end(); it++){
			if(*it == y){
				isReachable = 1;
				break;
			}
			if(!traversed[*it]){
				traversed[*it] = true;
				neighbors.push_back(*it);
			}
		}
	}
	return isReachable;
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
	int x, y;
	std::cin >> x >> y;
	std::cout << reach(adj, x - 1, y - 1);
}
