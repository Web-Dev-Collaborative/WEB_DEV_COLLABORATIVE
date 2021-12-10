#include "route_planner.h"
#include <algorithm>

RoutePlanner::RoutePlanner(RouteModel &model, float start_x, float start_y, float end_x, float end_y): m_Model(model) {
    // Convert inputs to percentage:
    start_x *= 0.01;
    start_y *= 0.01;
    end_x *= 0.01;
    end_y *= 0.01;

    // TODO 2: Use the m_Model.FindClosestNode method to find the closest nodes to the starting and ending coordinates.
    // Store the nodes you find in the RoutePlanner's start_node and end_node attributes.
    start_node = &m_Model.FindClosestNode(start_x, start_y);
    end_node = &m_Model.FindClosestNode(end_x, end_y);
}


// TODO 3: Implement the CalculateHValue method.
// Tips:
// - You can use the distance to the end_node for the h value.
// - Node objects have a distance method to determine the distance to another node.

float RoutePlanner::CalculateHValue(RouteModel::Node const *node) {
    return node->distance(*end_node); //calculate h value on the basis on destination node 
}   


// TODO 4: Complete the AddNeighbors method to expand the current node by adding all unvisited neighbors to the open list.
// Tips:
// - Use the FindNeighbors() method of the current_node to populate current_node.neighbors vector with all the neighbors.
// - For each node in current_node.neighbors, set the parent, the h_value, the g_value. 
// - Use CalculateHValue below to implement the h-Value calculation.
// - For each node in current_node.neighbors, add the neighbor to open_list and set the node's visited attribute to true.

void RoutePlanner::AddNeighbors(RouteModel::Node *current_node) {

    current_node->FindNeighbors(); //populate current_node.neighbors vector with all neighbors
    
    for(auto neighbor : current_node->neighbors){ //for each neighbor of current node
        neighbor->parent = current_node; //set current_node as parent to neighbor
        neighbor->g_value = current_node->g_value + current_node->distance(*neighbor); //set g_value := g_value of current_node + distance to neighbor node
        neighbor->h_value = CalculateHValue(neighbor); //use CalculateHValue() to calculate the h_value of neighbor
        open_list.push_back(neighbor); //add neighbor to open_list
        neighbor->visited = true; //set neighbor node as visited to true
    }

}


// TODO 5: Complete the NextNode method to sort the open list and return the next node.
// Tips:
// - Sort the open_list according to the sum of the h value and g value.
// - Create a pointer to the node in the list with the lowest sum.
// - Remove that node from the open_list.
// - Return the pointer.

RouteModel::Node *RoutePlanner::NextNode() {

    sort(open_list.begin(), open_list.end(), [](const auto &a, const auto &b){
            return a->g_value + a->h_value < b->g_value + b->h_value;  //sort by lowest h_value + g_value
    });

    auto next_node = open_list.front(); //pointer to node in list with lowest sum
    open_list.erase(open_list.begin()); //remove the node with lowest sum from open list
    return next_node;  // return the node having lowest h_value + g_value as the next_node
}


// TODO 6: Complete the ConstructFinalPath method to return the final path found from your A* search.
// Tips:
// - This method should take the current (final) node as an argument and iteratively follow the 
//   chain of parents of nodes until the starting node is found.
// - For each node in the chain, add the distance from the node to its parent to the distance variable.
// - The returned vector should be in the correct order: the start node should be the first element
//   of the vector, the end node should be the last element.

std::vector<RouteModel::Node> RoutePlanner::ConstructFinalPath(RouteModel::Node *current_node) {

    distance = 0.0f;
    std::vector<RouteModel::Node> path_found;
    RouteModel::Node root;

    while(current_node->parent != nullptr){ //as long as parent of node exist
        path_found.push_back(*current_node);
        distance += current_node->distance(*current_node->parent); //add (distance of current node to its parent node) to global distance
        current_node = current_node->parent; //traverse backwards towards parent of node
    }
    
    path_found.push_back(*current_node); //add startnode
    reverse(path_found.begin(), path_found.end()); //end2start ==> start2end
    distance *= m_Model.MetricScale(); // Multiply the distance by the scale of the map to get meters.
    return path_found;

}

// TODO 7: Write the A* Search algorithm here.
// Tips:
// - Use the AddNeighbors method to add all of the neighbors of the current node to the open_list.
// - Use the NextNode() method to sort the open_list and return the next node.
// - When the search has reached the end_node, use the ConstructFinalPath method to return the final path that was found.
// - Store the final path in the m_Model.path attribute before the method exits. This path will then be displayed on the map tile.

void RoutePlanner::AStarSearch() {

    //set start_node's visited flag to true and push start_node to open_list
    start_node->visited = true; 
    open_list.push_back(start_node);

    RouteModel::Node *current_node = nullptr; //initialise current_node to nullptr

    //while open_list is not empty
    while(open_list.size() > 0){
        current_node = NextNode(); //set nextnode having smallest h_value as current_node

        //if our current_node is the destination node
        if(current_node->distance(*end_node) == 0){ //base case
            m_Model.path = ConstructFinalPath(current_node);   //counstruct the final path from start_node to current_node
            return;
        }
        // call AddNeighbors which will add the neighbors of current_node to open_list
        else{
            AddNeighbors(current_node);
        }
    }

}