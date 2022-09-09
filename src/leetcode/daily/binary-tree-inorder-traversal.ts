import TreeNode from '~/neetcode150/trees/node';

// Iterative solution because the recursive one is basically trivial
function inorderTraversal(root: TreeNode | null): number[] {
  const result = [] as number[];
  const stack = [] as TreeNode[];

  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current?.left ?? null;
    }

    current = stack.pop() as TreeNode;
    result.push(current.val);

    current = current?.right ?? null;
  }

  return result;
}

export { inorderTraversal };
