#include <string>
#include <iostream>
#include <vector>
#include <map>

using std::map;
using std::vector;
using std::string;

typedef map<char, int> edges;
typedef vector<edges> trie;

trie build_trie(vector<string> & patterns) {
    trie t; // this is [vector of map of [char to int]]
    // write your code here
    t.resize(1); //empty root node --> dynamically resizing trie
    for(int i = 0; i < patterns.size(); i++){
        int current_node = 0; // For each pattern check from root node
        for(int j = 0; j < patterns[i].size(); j++){
            char current_symbol = patterns[i][j];
            //map of char to int from source node --> list of all outgoing edges from source node
            if(t[current_node].find(current_symbol) != t[current_node].end()) //check if symbol/char exists in the vec[current_node]
                current_node = t[current_node][current_symbol]; //set current node to the vector of next character
            else{ //the node is not yet present in list of outgoing edges --> i.e. its undiscovered
                t.resize(t.size() + 1); //dynamically resize the trie to add one node from root
                t[current_node][current_symbol] = t.size() - 1; //assign int to the newly discovered symbol
                current_node = t.size() - 1;
            }
        }
    }
    return t;
}

/*
for(auto pattern = patterns.begin(); pattern != patterns.end(); pattern++){
string current = *pattern;
int cNode = 0; // For each pattern get back to root node
for (char c : current){
    /* 
    //map of char to int from source node --> list of all outgoing edges from source node
    edges cEdge = t[cNode];  //all discovered nodes from source node
    if(cEdge.find(c) != cEdge.end()) //if char c is present in the list of outgoing edges
        cNode = cEdge[c]; //set current node to the vector of next character
    else{ //the node is not yet present in list of outgoing edges --> i.e. its undiscovered
        cEdge[c] = count++;
        cNode = count;
    }
}
t.push_back(); //stuck here --> doesnt work .. :(
}*/

int main() {
    size_t n;
    std::cin >> n;
    vector<string> patterns;
    for (size_t i = 0; i < n; i++) {
        string s;
        std::cin >> s;
        patterns.push_back(s);
    }

    trie t = build_trie(patterns);
    for (size_t i = 0; i < t.size(); ++i) {
        for (const auto & j : t[i]) {
            std::cout << i << "->" << j.second << ":" << j.first << "\n";
        }
    }
    return 0;
}