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
	bool patternEnd;

	Node ()
	{
		fill (next, next + Letters, NA);
		patternEnd = false;
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

vector <int> solve (string text, int n, vector <string> patterns)
{
	vector <int> result;

	// write your code here
    //lets build trie first -- attempt 2
    vector<Node> t(1);

    for(int i = 0; i < n; i++){
        int current_node = 0;
        for(int j = 0; j < patterns[i].size(); j++){
            int current_symbol = letterToIndex(patterns[i][j]); //symbol
            if(t[current_node].next[current_symbol] != NA){
                current_node = t[current_node].next[current_symbol];
            }
            else{
                t.push_back(Node());
                t[current_node].next[current_symbol] = t.size() - 1;
                current_node = t.size() - 1;
            }
            if(j == patterns[i].size() - 1)
                t[current_node].patternEnd = true; //check if current pattern reached its end !!
        }
    }

    //check for pattern substr match within text
    for(int i = 0; i < text.size(); i++){
        int current_index = i;
        int current_node = 0;
        int current_symbol = letterToIndex(text[current_index]);
        while(1){
            if(t[current_node].patternEnd){ //instead of checking for leaf, check for last char in pattern
                result.push_back(i);
                break;
            }
            else if(t[current_node].next[current_symbol] != NA){
                current_node = t[current_node].next[current_symbol];
                current_index++;
                if(current_index == text.size()){
                    if(t[current_node].patternEnd)
                        result.push_back(i);
                    break;
                }
                current_symbol = letterToIndex(text[current_index]);
            }
            else
                break;
        }
    }
	return result;
}

int main(void) {
  string t;
  cin >> t;

  int n;
  cin >> n;

  vector<string> patterns(n);
  for (int i = 0; i < n; i++) {
    cin >> patterns[i];
  }

  vector<int> ans;
  ans = solve(t, n, patterns);

  for (int i = 0; i < (int)ans.size(); i++) {
    cout << ans[i];
    if (i + 1 < (int)ans.size()) {
      cout << " ";
    } else {
      cout << endl;
    }
  }

  return 0;
}