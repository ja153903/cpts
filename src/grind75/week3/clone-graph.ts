class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const created: Map<number, Node> = new Map();

  const startNode = new Node(node.val);

  created.set(node.val, startNode);

  const queue: [Node, Node][] = [];
  queue.push([node, startNode]);

  while (queue.length) {
    const [front, copy] = queue.shift() as [Node, Node];

    for (const neighbor of front.neighbors) {
      if (created.has(neighbor.val)) {
        copy.neighbors.push(created.get(neighbor.val)!);
      } else {
        const neighborCopy = new Node(neighbor.val);
        copy.neighbors.push(neighborCopy);
        created.set(neighbor.val, neighborCopy);
        queue.push([neighbor, neighborCopy]);
      }
    }
  }

  return startNode;
}

export { cloneGraph };
