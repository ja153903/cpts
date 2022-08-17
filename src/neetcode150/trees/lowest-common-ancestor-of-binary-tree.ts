import TreeNode from './node';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // if the root is null, then we just return null
  // if the root is either p or q, then this means that we should return root
  if (!root) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
}

export { lowestCommonAncestor };
