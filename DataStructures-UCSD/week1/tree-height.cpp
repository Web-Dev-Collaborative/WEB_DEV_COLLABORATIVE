#include <algorithm>
#include <iostream>
#include <vector>
#include <queue>
#if defined(__unix__) || defined(__APPLE__)
#include <sys/resource.h>
#endif

using namespace std;
class Node;

class Node {
public:
    int key;
    Node *parent;
    std::vector<Node *> children;

    Node() {
      this->parent = NULL;
    }

    void setParent(Node *theParent) {
      parent = theParent;
      parent->children.push_back(this);
    }
};

//Now I have root pointer; just recursing down and increasing the count.
int getTreeHeight(Node *root_ptr){
	queue<Node *> q;
	int h = 0;
	q.push(root_ptr);
	while(!q.empty()){
		auto node_cnt = q.size();
		for(int i=0; i< node_cnt; i++){
			auto front = q.front();
			for(auto child : front->children)
				q.push(child);

			q.pop();
		}
		h++;
	}
	return h;
}

int main_with_large_stack_space() {
  std::ios_base::sync_with_stdio(0);
  int n;
  std::cin >> n;

  std::vector<Node> nodes;
  nodes.resize(n);
  int root_key; 
  Node *parent_ptr;
  
  for (int child_index = 0; child_index < n; child_index++) {
    int parent_index;
    std::cin >> parent_index;
    if (parent_index >= 0)
      nodes[child_index].setParent(&nodes[parent_index]);
    else
       root_key = child_index;
    nodes[child_index].key = child_index;
  }
  
  parent_ptr = &nodes[root_key];
  cout<<getTreeHeight(parent_ptr)<<endl;
 
  // Replace this code with a faster implementation
 /* int maxHeight = 0;
  for (int leaf_index = 0; leaf_index < n; leaf_index++) {
    int height = 0;
    for (Node *v = &nodes[leaf_index]; v != NULL; v = v->parent)
      height++;
    maxHeight = std::max(maxHeight, height);
  }
    
  std::cout << maxHeight << std::endl;*/
  return 0;
}

int main ()
{
#if defined(__unix__) || defined(__APPLE__)
  // Allow larger stack space
  const rlim_t kStackSize = 16 * 1024 * 1024;   // min stack size = 16 MB
  struct rlimit rl;
  int result;

  result = getrlimit(RLIMIT_STACK, &rl);
  if (result == 0)
  {
      if (rl.rlim_cur < kStackSize)
      {
          rl.rlim_cur = kStackSize;
          result = setrlimit(RLIMIT_STACK, &rl);
          if (result != 0)
          {
              std::cerr << "setrlimit returned result = " << result << std::endl;
          }
      }
  }

#endif
  return main_with_large_stack_space();
}
