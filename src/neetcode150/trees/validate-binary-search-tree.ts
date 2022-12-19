import TreeNode from './node';

function isValidBST(root: TreeNode | null): boolean {
   const result: number[] = [];

   inOrderTraversal(root, result);

   for (let i = 1; i < result.length; i++) {
      if (result[i] <= result[i - 1]) {
         return false;
      }
   }

   return true;
}

function inOrderTraversal(root: TreeNode | null, result: number[]) {
   if (root) {
      inOrderTraversal(root.left, result);
      result.push(root.val);
      inOrderTraversal(root.right, result);
   }
}

export { isValidBST };
