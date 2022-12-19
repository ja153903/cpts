import TreeNode from '~/utility/trees';

function isValidBST(root: TreeNode | null): boolean {
  // the idea here is that we should be able to check whether the current node we're checking
  // is lower than the previous node we've visited i.e. inorder traversal
  // if at any point if its not less, then we return false because it's not valid
  const stack: TreeNode[] = [];
  let prev = Number.NEGATIVE_INFINITY;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const top = stack.pop() as TreeNode;
    if (top.val <= prev) {
      return false;
    }

    prev = top.val;
    root = top.right;
  }

  return true;
}

export { isValidBST };
