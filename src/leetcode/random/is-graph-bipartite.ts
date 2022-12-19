/**
 *
 * There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1.
 * You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to.
 * More formally, for each v in graph[u], there is an undirected edge between node u and node v.
 *
 * The graph has the following properties:
 *
 *  - There are no self-edges (graph[u] does not contain u).
 *  - There are no parallel edges (graph[u] does not contain duplicate values)
 *  - If v is in graph[u], then u is in graph[v] (the graph is undirected).
 *  - The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
 *  - A graph is bipartite if the nodes can be partitioned into two independent sets A and B
 *    such that every edge in the graph connects a node in set A and a node in set B.
 *
 * Return true if and only if it is bipartite.
 */
function isBipartite(graph: number[][]): boolean {
   // NOTE: https://leetcode.com/problems/is-graph-bipartite/solutions/127708/is-graph-bipartite/
   // Graph Coloring is the answer to solving if a graph is bipartite
   const n = graph.length;
   const color = new Array<number>(n).fill(-1);

   for (let start = 0; start < n; start++) {
      if (color[start] === -1) {
         const stack = [];
         stack.push(start);
         color[start] = 0;

         while (stack.length) {
            const node = stack.pop() as number;
            for (const neighbor of graph[node]) {
               if (color[neighbor] === -1) {
                  stack.push(neighbor);
                  // Flip the color
                  color[neighbor] = color[node] ^ 1;
               } else if (color[neighbor] === color[node]) {
                  // if the color of the current node's neighbor is the same
                  // as the current node, then we know we can't color it to be
                  // bipartite
                  return false;
               }
            }
         }
      }
   }

   return true;
}

export { isBipartite };
