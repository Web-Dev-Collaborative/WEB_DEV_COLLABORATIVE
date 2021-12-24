#include <algorithm>
#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

struct Node {
    int key;
    int left;
    int right;

    Node() : key(0), left(-1), right(-1) {}
    Node(int key_, int left_, int right_) : key(key_), left(left_), right(right_) {}
};

bool IsBinarySearchTree(const vector<Node>& tree) {
    // Implement correct algorithm here
    if (tree.size() == 0)
        return true;
    vector<int> stack;
    vector<int> result;
    int cid = 0;
    while (true) {
        if (cid != -1) {
            stack.push_back(cid);
            cid = tree[cid].left;
        }
        else if (stack.size()) {
            cid = stack.back();
            stack.pop_back();
            if (result.size()) {
                if (result.back() >= tree[cid].key)
                    return false;
            }
            result.push_back(tree[cid].key);
            cid = tree[cid].right;
        }
        else
            break;
    }
    return true;
}

int main() {
  int nodes;
  cin >> nodes;
  vector<Node> tree;
  for (int i = 0; i < nodes; ++i) {
    int key, left, right;
    cin >> key >> left >> right;
    tree.push_back(Node(key, left, right));
  }
  if (IsBinarySearchTree(tree)) {
    cout << "CORRECT" << endl;
  }
  else {
    cout << "INCORRECT" << endl;
  }
  return 0;
}
