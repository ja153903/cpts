import TreeNode from './node';

function diameterOfBinaryTree(root: TreeNode | null): number {
   let result = 0;

   function depth(node: TreeNode | null): number {
      if (!node) {
         return 0;
      }

      const left = depth(node.left);
      const right = depth(node.right);

      result = Math.max(result, left + right);

      return 1 + Math.max(left, right);
   }

   depth(root);

   return result;
}

export { diameterOfBinaryTree };
