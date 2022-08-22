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

  // we basically want to iterate over all the nodes
  const startNode = new Node(node.val);
  const copies = new Map<number, Node>();

  copies.set(startNode.val, startNode);

  const queue: Node[] = [];

  queue.push(node);

  while (queue.length) {
    const front = queue.shift() as Node;

    for (const neighbor of front.neighbors) {
      if (!copies.has(neighbor.val)) {
        const copy = new Node(neighbor.val);
        copies.set(copy.val, copy);
        queue.push(neighbor);
      }

      copies.get(front.val)?.neighbors?.push(copies.get(neighbor.val) as Node);
    }
  }

  return startNode;
}

export { cloneGraph, Node };
