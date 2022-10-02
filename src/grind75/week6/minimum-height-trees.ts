function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (edges.length === 0) {
    return new Array<number>(n).fill(0).map((_value, index) => index);
  }

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

export { findMinHeightTrees };
