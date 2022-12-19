import TreeNode from './node';

function isBalanced(root: TreeNode | null): boolean {
   // we should find the depths of the left and right of every node
   // when we find this depth, we should find the difference
   // if at any point we have a difference that's greater than 1, then we know its not balanced
   function depth(node: TreeNode | null): number {
      if (!node) {
         return 0;
      }

      const left = depth(node.left);
      const right = depth(node.right);

      return 1 + Math.max(left, right);
   }

   if (!root) {
      return true;
   }

   const left = depth(root.left);
   const right = depth(root.right);

   if (Math.abs(left - right) > 1) {
      return false;
   }

   return isBalanced(root.left) && isBalanced(root.right);
}

export { isBalanced };
