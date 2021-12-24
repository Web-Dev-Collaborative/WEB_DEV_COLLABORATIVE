#include <iostream>
#include <vector>
#include <algorithm>
#if defined(__unix__) || defined(__APPLE__)
#include <sys/resource.h>
#endif

using std::vector;
using std::ios_base;
using std::cin;
using std::cout;

class TreeOrders {
  int n;
  vector <int> key;
  vector <int> left;
  vector <int> right;
  vector<int> result;

public:
  void read() {
    cin >> n;
    key.resize(n);
    left.resize(n);
    right.resize(n);
    for (int i = 0; i < n; i++) {
      cin >> key[i] >> left[i] >> right[i];
    }
  }


  vector <int> in_order() {
    result.clear();
    vector<int> stack;
    int cid = 0;
    // Finish the implementation
    // You may need to add a new recursive method to do that
    while (true) {
        if (cid != -1) {
            stack.push_back(cid);
            cid = left[cid];
        }
        else if (stack.size()) {
            cid = stack.back();
            stack.pop_back();
            result.push_back(key[cid]);
            cid = right[cid];
        }
        else {
            break;
        }
    }
    return result;
  }

  vector <int> pre_order() {
    result.clear();
    vector<int> stack;
    int cid = 0;
    // Finish the implementation
    // You may need to add a new recursive method to do that
    while (true) {
        if (cid != -1) {
            result.push_back(key[cid]);
            stack.push_back(cid);
            cid = left[cid];
        }
        else if (stack.size()) {
            cid = stack.back();
            stack.pop_back();
            cid = right[cid];
        }
        else {
            break;
        }
    }
    return result;
  }

  vector <int> post_order() {
    result.clear();
    vector<int> stack1 {0};
    vector<int> stack2;
    int cid = 0;
    // Finish the implementation
    // You may need to add a new recursive method to do that
    while (stack1.size()) {
        cid = stack1.back();
        stack1.pop_back();
        stack2.push_back(key[cid]);

        int left_id = left[cid];
        int right_id = right[cid];
        if (left_id != -1)
            stack1.push_back(left_id);
        if (right_id != -1)
            stack1.push_back(right_id);
    }

    vector<int> :: reverse_iterator rit;
    for (rit = stack2.rbegin(); rit != stack2.rend(); rit++) {
        result.push_back(*rit);
    }
    return result;
  }
};

void print(vector <int> a) {
  for (size_t i = 0; i < a.size(); i++) {
    if (i > 0) {
      cout << ' ';
    }
    cout << a[i];
  }
  cout << '\n';
}

int main_with_large_stack_space() {
  ios_base::sync_with_stdio(0);
  TreeOrders t;
  t.read();
  print(t.in_order());
  print(t.pre_order());
  print(t.post_order());
  return 0;
}

int main (int argc, char **argv)
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
