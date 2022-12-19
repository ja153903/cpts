import TreeNode from '~/utility/trees';

function lowestCommonAncestor(
   root: TreeNode | null,
   p: TreeNode | null,
   q: TreeNode | null
): TreeNode | null {
   // base case: if root is null, then return null
   if (root === null) {
      return null;
   }

   // if the root is either p or q, then we break early
   // and return the root
   if (root === p || root === q) {
      return root;
   }

   const left = lowestCommonAncestor(root.left, p, q);
   const right = lowestCommonAncestor(root.right, p, q);

   // if both exist, then we know that root is the closest
   if (left && right) {
      return root;
   }

   return left ? left : right;
}

export { lowestCommonAncestor };
