import TreeNode from '~/neetcode150/trees/node';

function maxProduct(root: TreeNode | null): number {
  let result = 0;
  let total = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    result = Math.max(result, left * (total - left), right * (total - right));

    return node.val + left + right;
  }

  // First pass to get the total value
  total = dfs(root);

  // The second pass will calculate the proper result
  dfs(root);

  return result % (Math.pow(10, 9) + 7);
}

export { maxProduct };
