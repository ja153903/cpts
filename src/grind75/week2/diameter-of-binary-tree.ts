import TreeNode from '~/utility/trees';

function diameterOfBinaryTree(root: TreeNode | null): number {
   let diameter = 0;

   function depth(node: TreeNode | null): number {
      if (!node) {
         return 0;
      }

      const left = depth(node.left);
      const right = depth(node.right);

      diameter = Math.max(diameter, left + right);

      return Math.max(left, right) + 1;
   }

   depth(root);

   return diameter;
}

export { diameterOfBinaryTree };
