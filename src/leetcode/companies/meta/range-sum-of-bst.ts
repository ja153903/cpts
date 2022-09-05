import TreeNode from '~/neetcode150/trees/node';

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root) {
    const left = rangeSumBST(root.left, low, high);
    const right = rangeSumBST(root.right, low, high);

    return (low <= root.val && root.val <= high ? root.val : 0) + left + right;
  }

  return 0;
}

export { rangeSumBST };
