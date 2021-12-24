#include <iostream>
#include <vector>
#include <string>
#include <cassert>
#include <algorithm>

using namespace std;

class StackWithMax {
    vector<int> stack;

  public:

    void Push(int value) {
        stack.push_back(value);
    }

    void Pop() {
        assert(stack.size());
        stack.pop_back();
    }
    
    int Size(){
        return stack.size();
    }
    
    int Top() {
        //auto myval = stack.back();
        //stack.pop_back();
        assert(stack.size());
        return stack.back();
	}

    int Max() const {
        assert(stack.size());
        return *max_element(stack.begin(), stack.end());
    }
};

int main() {
    int num_queries = 0;
    cin >> num_queries;

    string query;
    string value;
    StackWithMax stack;
    StackWithMax aux_stack;

    for (int i = 0; i < num_queries; ++i) {
        cin >> query;
        if (query == "push") {
            cin >> value;
            stack.Push(stoi(value));
            if(stack.Size() == 1)
            	aux_stack.Push(stoi(value));
			else{
			    int curr = aux_stack.Top();
				if(stoi(value) >= curr){
					aux_stack.Push(stoi(value));
				}
				else
					aux_stack.Push(aux_stack.Top());
			}
        }
        else if (query == "pop") {
            stack.Pop();
            aux_stack.Pop();
        }
        else if (query == "max") {
            cout << aux_stack.Top() << "\n";
        }
        else {
            assert(0);
        }
    }
    return 0;
}
