import TreeNode from '~/utility/trees';

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const size = queue.length;
    let item: number | null = null;

    for (let i = 0; i < size; i++) {
      const front = queue.shift() as TreeNode;
      item = front.val;

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    if (item !== null) {
      result.push(item);
    }
  }

  return result;
}

export { rightSideView };
