import TreeNode from './node';

function goodNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return traverse(root, []);
}

function traverse(node: TreeNode | null, path: number[]): number {
  if (!node) {
    return 0;
  }

  const numsGreaterThanCurrent = path.filter((num) => num > node.val);
  let current = 0;
  if (numsGreaterThanCurrent.length === 0) {
    current = 1;
  }

  path.push(node.val);
  const left = traverse(node.left, path);
  const right = traverse(node.right, path);
  path.pop();

  return current + left + right;
}

export { goodNodes };
