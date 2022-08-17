import TreeNode from './node';

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // preorder traversal will always give us the root
  // inorder traversal will give us the general left and right subtree
  // preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
  // Here we can tell that 3 is the current root
  // anything to the left of 3 in inorder will be in the left subtree
  // anything to the right of 3 is in the right subtree
  // we should shift out the value from preorder everytime
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const current = preorder.shift() as number;

  const root = new TreeNode(current);
  const indexOf = inorder.indexOf(current);

  root.left = buildTree(preorder, inorder.slice(0, indexOf));
  root.right = buildTree(preorder, inorder.slice(indexOf + 1));

  return root;
}

export { buildTree };
