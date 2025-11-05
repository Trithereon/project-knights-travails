I need to run a search algorithm to find the shortest path
between two vertices on a graph, using graph traversal.

There are three data structures to choose from:

1. Edge list

   - Space complexity: O(E)
   - Time complexity: O(E) or O(log E), where E=number of edges. The O(log E) can be reached if I build the Edge list in a particular way... As per Khan academy's article from TOP.

2. Adjacency list

   - Space complexity: O(V+E)
   - Time complexity: O(d), where d=degree of each vertex,
     which is the number of edges connected to the vertex.

3. Adjacency matrix
   - Space complexity: O($V^2$)
   - Time complexity: O(1)

- I should choose the one that is most efficient
  for the type of search algorithm I will use.
- Adjacent matrix, I guess.
- The assignment instructions say that I don't need to build the entire graph. All I need is to consider it implicitly. I'm not entirely sure how to apply that yet, but it does sound like a hint towards using the Adjacency matrix, since it has the highest Space complexity and lowest Time complexity.

- Each square on the board is a vertex.
- The knight's valid moves are the edges.

Idea: I probably need recursion, where I select the Math.min() of multiple values. I did that for the BST, except I was choosing the Math.max() returned value in my recursive calls.

- However, the instructions say to avoid thinking about this as a tree, but more as a graph.

- Need to have a function that generates a list of valid moves, based on current position.

- Ok I made the Validity check and Move generation functions.
- I think the move generation function needs to be called every move, as I traverse in a BFS way through the graph.
- I just found out that Set objects are great at preventing duplicates, so I'd like to use one to keep track of which positions have been visited.
- HOWEVER, a Set can contain identical arrays, since the equality of REFERENCE is tested, not the equality of content or value. So I need to convert my [x,y] position arrays into something else, maybe strings? JSON.stringify?
