import TreeNode from '~/utility/trees';

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return depth(root) !== -1;
}

function depth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  // as we calculate the depths from a bottom-up approach
  // we only need to check the depth once
  // if at any point the depth is greater than 1, then
  // we can just return -1 and that will bubble up all the way
  const left = depth(root.left);
  const right = depth(root.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
}

export { isBalanced };
