#include <algorithm>
#include <cassert>
#include <cstdio>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int const Letters =    4;
int const NA      =   -1;

struct Node
{
	int next [Letters];
	Node () {
		fill (next, next + Letters, NA);
	}

	bool isLeaf () const {
	    return (next[0] == NA && next[1] == NA && next[2] == NA && next[3] == NA);
	}
};

int letterToIndex (char letter)
{
	switch (letter)
	{
		case 'A': return 0; break;
		case 'C': return 1; break;
		case 'G': return 2; break;
		case 'T': return 3; break;
		default: assert (false); return -1;
	}
}

vector <int> solve (const string& text, int n, const vector <string>& patterns)
{
	vector <int> result;

	// write your code here
    //build trie first -- iterate over patterns
    vector<Node> t(1); //empty root node --> dynamically resizing trie
    for(int i = 0; i < patterns.size(); i++){
        int current_node = 0; //for each pattern check from root node
        for (int j = 0; j < patterns[i].size(); j++){ 
            int current_symbol = letterToIndex(patterns[i][j]);
            if(t[current_node].next[current_symbol] != NA) //check if there is path ahead
                current_node = t[current_node].next[current_symbol]; //if yes, traverse ahead 
            else{
                t.push_back(Node()); //if the exisiting node is not discovered yet or there is a deadwall ahead,
                t[current_node].next[current_symbol] = t.size() - 1; //map next symbol -- basically this is resizing of trie to secure next incoming node
                current_node = t.size() - 1; //increment current_node counter to move ahead in the pattern matching
            }
        }
    }

    //check for text match from the built trie
    //keep eliminating char from start of string to match substring
    for(int i = 0; i < text.size(); i++){
        int current_index = i;
        int current_symbol = letterToIndex(text[current_index]);
        int current_node = 0;
        while(1){
            if(t[current_node].isLeaf()){ //final node in tree path
                result.push_back(i); //substring found
                break;
            }
            else if(t[current_node].next[current_symbol] != NA){ //there exist nodes ahead --> its a prediscovered path
                current_node = t[current_node].next[current_symbol]; //just increment current node --> traverse ahead
                current_index++; //increment current visit index
                if(current_index == text.size()){ //since we increased current index; we need to ensure that the are we still left with text or its done
                    // check for leaf, if yes push in result
                    if(t[current_node].isLeaf()) //found another substring
                        result.push_back(i);
                    break;
                }
                current_symbol = letterToIndex(text[current_index]); //ensure that you traverse your current_symbol pointer to next char based on current_index
            }
            else  //Can't find any other scenario to build but since its infinite loop lets break it.. Don't think this will reach anytime..
                  //Since problem states there is definitely a match of text from trie patterns
                break;
        }
    }
    //finally done!!
	return result;
}

int main (void)
{
	string t;
	cin >> t;

	int n;
	cin >> n;

	vector <string> patterns (n);
	for (int i = 0; i < n; i++)
	{
		cin >> patterns[i];
	}

	vector <int> ans;
	ans = solve (t, n, patterns);

	for (int i = 0; i < (int) ans.size (); i++)
	{
		cout << ans[i];
		if (i + 1 < (int) ans.size ())
		{
			cout << " ";
		}
		else
		{
			cout << endl;
		}
	}

	return 0;
}
