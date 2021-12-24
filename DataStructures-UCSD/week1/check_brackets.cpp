#include <iostream>
#include <stack>
#include <string>


using namespace std;

struct Bracket {
    Bracket(char type, int position):
        type(type),
        position(position)
    {}

    bool Matchc(char c) {
        if (type == '[' && c == ']')
            return true;
        if (type == '{' && c == '}')
            return true;
        if (type == '(' && c == ')')
            return true;
        return false;
    }

    char type;
    int position;
};

int main() {
    std::string text;
    getline(std::cin, text);

    std::stack <Bracket> opening_brackets_stack;
    int mismatch;
    bool flag = false;
    stack<char> myst;
    myst.push('T');
    
    if(text.length() == 1 or text.length() == 0){
      cout<<1<<"\n";
      return 1;
    } 
    
    for (int position = 0; position < text.length(); ++position) {
        char next = text[position];

        if (next == '(' || next == '[' || next == '{') {
            // Process opening bracket, write your code here
            //opening_brackets_stack.push(next, position);	
            Bracket ob(next, position);
			opening_brackets_stack.push(ob);
			continue;
        }
        
        else if (next == ')' || next == ']' || next == '}') {
	        if (opening_brackets_stack.empty()){
					//std::cout << "empty, no open bracket for ";
					std::cout << position + 1 << std::endl;
					exit(1);
				}
				Bracket topb = opening_brackets_stack.top();
				if (topb.Matchc(next)) {
					opening_brackets_stack.pop();
					//std::cout << "matched" << std::endl;
					continue;
				}
				else {
					std::cout << position + 1 << std::endl;
					return 0;
				}
		}
		else
			continue;
			
        
    }

    // Printing answer, write your code here
	/*1. find the first unmatched closing bracket
	which doesn’t have an opening bracket before it, like ] in ](),
	2. closes the wrong opening bracket, like } in ()[}.
	3. it should find the first unmatched opening bracket without the corresponding closing bracket after it, like ( in {}([].
	4. If there are no mistakes, text editor should inform the user that is correct.*/
    // Printing answer, write your code here

	if (opening_brackets_stack.empty())
		std::cout << "Success" << std::endl;
	else
	{
		//std::cout << " More open paren at " ;
		std::cout << opening_brackets_stack.top().position +1 << std::endl;
	}
}
