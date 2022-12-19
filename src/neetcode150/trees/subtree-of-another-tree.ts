import TreeNode from './node';

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) {
    return true;
  }

  if (!root || !subRoot) {
    return false;
  }

  let result = false;

  if (root.val === subRoot.val) {
    result = checkDepth(root, subRoot);
  }

  return (
    result || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
}

function checkDepth(node: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!node && !subRoot) {
    return true;
  }

  if (!node || !subRoot) {
    return false;
  }

  if (node.val === subRoot.val) {
    return (
      checkDepth(node.left, subRoot.left) &&
      checkDepth(node.right, subRoot.right)
    );
  }

  return false;
}

export { isSubtree };
