import TreeNode from '~/utility/trees';

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // preorder traversal can give us the current root
  // inorder traversal will tell us which items are going to be in the left and right subtree
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const parent = preorder.shift() as number;
  const root = new TreeNode(parent);

  const indexOfParent = inorder.indexOf(parent);

  root.left = buildTree(preorder, inorder.slice(0, indexOfParent));
  root.right = buildTree(preorder, inorder.slice(indexOfParent + 1));

  return root;
}

export { buildTree };
