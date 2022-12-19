import TreeNode from '~/utility/trees';

function levelOrder(root: TreeNode | null): number[][] {
   if (!root) {
      return [];
   }

   const result: number[][] = [];
   const queue: TreeNode[] = [];

   queue.push(root);

   while (queue.length) {
      const size = queue.length;
      const currentLevel: number[] = [];

      for (let i = 0; i < size; i++) {
         const front = queue.shift() as TreeNode;
         currentLevel.push(front.val);

         if (front.left) {
            queue.push(front.left);
         }

         if (front.right) {
            queue.push(front.right);
         }
      }

      result.push(currentLevel);
   }

   return result;
}

export { levelOrder };
