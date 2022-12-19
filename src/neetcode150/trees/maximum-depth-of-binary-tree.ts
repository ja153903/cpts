import TreeNode from './node';

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}

export { maxDepth };
