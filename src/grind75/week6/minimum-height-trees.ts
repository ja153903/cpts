function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (edges.length === 0) {
    return new Array<number>(n).fill(0).map((_value, index) => index);
  }

  const graph = createUndirectedGraph(edges);

  const result: number[] = new Array<number>(n).fill(Number.POSITIVE_INFINITY);

  // TODO: This will timeout. We should find another solution for this problem.
  for (let i = 0; i < n; i++) {
    // find the height of each as root
    const visited = new Set<number>();
    visited.add(i);

    let maxHeight = depth(graph, visited, i);
    maxHeight = maxHeight === 0 ? Number.POSITIVE_INFINITY : maxHeight;

    result[i] = Math.min(result[i], maxHeight);
  }

  const minimumHeight = Math.min(...result);

  const resultingNodes: number[] = [];

  result.forEach((value, index) => {
    if (value === minimumHeight) {
      resultingNodes.push(index);
    }
  });

  return resultingNodes;
}

function depth(
  graph: Map<number, Set<number>>,
  visited: Set<number>,
  node: number
) {
  let result = 0;

  for (const child of graph.get(node)!) {
    if (visited.has(child)) {
      continue;
    }

    visited.add(child);

    result = Math.max(result, depth(graph, visited, child) + 1);
  }

  return result;
}

// LEET: https://leetcode.com/problems/minimum-height-trees/solutions/76055/share-some-thoughts/?orderBy=most_votes
// LEET: https://leetcode.com/problems/minimum-height-trees/solutions/900035/minimum-height-trees/
function topologicalSortSolution(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0];
  }

  // Create an undirected graph using a map
  const graph = createUndirectedGraph(edges);
  let leaves: number[] = [];

  // keep track of all the nodes where they are only connected to 1 other node
  for (let i = 0; i < n; i++) {
    const children = graph.get(i);
    if (children?.size === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    // subtract the number of nodes we need to consider from our solution
    n -= leaves.length;
    const newLeaves: number[] = [];
    for (const node of leaves) {
      // for each leaf node, we can survey the node its connected to
      const child = graph.get(node)?.values()?.next()?.value;
      if (child != null) {
        // if such a node exists, we should get rid of its reference to
        // the leaf node.
        graph.get(child)?.delete(node);
        // if that node now is only connected to 1 other node,
        // then we know it's a leaf node so we push it into a new queue
        if (graph.get(child)?.size === 1) {
          newLeaves.push(child);
        }
      }
    }

    // we update our leaves to hold the new set of leaves
    leaves = newLeaves;
  }

  return leaves;
}

function createUndirectedGraph(edges: number[][]): Map<number, Set<number>> {
  const graph = new Map<number, Set<number>>();
  for (const [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, new Set());
    }

    if (!graph.has(v)) {
      graph.set(v, new Set());
    }

    graph.get(u)?.add(v);
    graph.get(v)?.add(u);
  }

  return graph;
}

export { findMinHeightTrees, topologicalSortSolution };
