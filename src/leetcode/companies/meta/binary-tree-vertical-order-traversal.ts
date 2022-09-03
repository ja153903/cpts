import { TreeNode } from '~/leetcode/data-structures/tree-node';

type QNode = { node: TreeNode; position: number };

function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const map = new Map<number, number[]>();
  const queue = new Array<QNode>();

  queue.push({ node: root, position: 0 });

  while (queue.length) {
    const { node, position } = queue.shift() as QNode;

    if (!map.has(position)) {
      map.set(position, []);
    }

    map.get(position)?.push(node.val);

    if (node.left) {
      queue.push({ node: node.left, position: position - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, position: position + 1 });
    }
  }

  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map((entry) => entry[1]);
}

export { verticalOrder };
