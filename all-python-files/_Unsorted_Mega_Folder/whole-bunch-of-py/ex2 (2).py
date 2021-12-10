#  Hint:  You may not need all of these.  Remove the unused functions.
class Ticket:
    def __init__(self, source, destination):
        self.source = source
        self.destination = destination


def reconstruct_trip(tickets, length):
    """
    YOUR CODE HERE
    """
    # Your code here
    flights = {}
    route = [None] * length

    for i in range(0, length):
        curr = tickets[i]
        flights[curr.source] = curr.destination

    route[0] = flights["NONE"]
    route[1] = flights[route[0]]

    if length > 2:
        for i in range(2, length):
            route[i] = flights[route[i-1]]

    return route
