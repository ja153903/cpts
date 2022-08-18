import TreeNode from './node';

function maxPathSum(root: TreeNode | null): number {
  let maxResult = Number.NEGATIVE_INFINITY;

  function getMaxPath(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left = Math.max(0, getMaxPath(node.left));
    const right = Math.max(0, getMaxPath(node.right));

    const current = node.val + left + right;
    maxResult = Math.max(maxResult, current);

    return node.val + Math.max(left, right);
  }

  getMaxPath(root);

  return maxResult;
}

export { maxPathSum };
