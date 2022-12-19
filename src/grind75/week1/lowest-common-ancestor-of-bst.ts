import TreeNode from '~/utility/trees';

function lowestCommonAncestor(
   root: TreeNode | null,
   p: TreeNode | null,
   q: TreeNode | null
): TreeNode | null {
   // By definition the lowest common ancestor of two nodes
   // will be the closest node to each one that can be itself
   if (!root) {
      return null;
   }

   if (root === p || root === q) {
      return root;
   }

   // we have to recurse down
   const left = lowestCommonAncestor(root.left, p, q);
   const right = lowestCommonAncestor(root.right, p, q);

   // if at some point we discover both p and q in the left and right subtrees
   // then we return the current root
   if (left && right) {
      return root;
   }

   // otherwise this means that the value exists in just one subtree
   // so we return the one that is not null
   return left ? left : right;
}

export { lowestCommonAncestor };
