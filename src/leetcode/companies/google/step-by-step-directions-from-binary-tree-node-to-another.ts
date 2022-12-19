import { TreeNode } from '~/leetcode/data-structures/tree-node';

function getDirections(
   root: TreeNode | null,
   startValue: number,
   destValue: number
): string {
   const pathToStart = generatePath(root, startValue);
   const pathToDest = generatePath(root, destValue);

   // now that we have both paths, we should prune the paths
   // while they are equal
   let i = 0;
   while (
      i < pathToStart.length &&
      i < pathToDest.length &&
      pathToStart[i] === pathToDest[i]
   ) {
      // note that they both start from the root, so we prune it like this
      i++;
   }

   let fromStart = '';

   if (i < pathToStart.length) {
      fromStart = 'U'.repeat(pathToStart.length - i);
   }

   return fromStart + pathToDest.substring(i);
}

function generatePath(
   root: TreeNode | null,
   value: number,
   acc: string = ''
): string {
   if (root == null) {
      return '';
   }

   if (root.val === value) {
      return acc;
   }

   return (
      generatePath(root.left, value, acc + 'L') +
      generatePath(root.right, value, acc + 'R')
   );
}

export { getDirections };
