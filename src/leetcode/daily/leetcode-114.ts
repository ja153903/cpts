import { TreeNode } from '../data-structures/tree-node';

// Time Complexity O(n); Space Complexity O(n)
function flatten(root: TreeNode | null): void {
   // we have a binary tree
   // and we want to return it as a list in preorder travesal
   // but by list we mean that the left node should always be empty
   // and that everything is moved to the right node
   const result: Array<TreeNode> = [];

   preOrderTraversal(root, result);

   if (!result.length) {
      return;
   }

   let prev = result[0];

   for (let i = 1; i <= result.length; i++) {
      prev.left = null;

      if (i < result.length) {
         prev.right = result[i];
         prev = result[i];
      }
   }
}

function preOrderTraversal(root: TreeNode | null, result: Array<TreeNode>) {
   if (root) {
      result.push(root);
      preOrderTraversal(root.left, result);
      preOrderTraversal(root.right, result);
   }
}

export { flatten };
