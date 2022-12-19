import TreeNode from './node';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length) {
    const size = queue.length;
    const subResult: number[] = [];

    for (let i = 0; i < size; i++) {
      const front = queue.shift() as TreeNode;
      subResult.push(front.val);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    result.push(subResult);
  }

  return result;
}

export { levelOrder };
