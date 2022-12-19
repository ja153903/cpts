/**
 * TreeNode is a basic data structure simulating
 * a node in a binary tree
 *
 * Here we assume that the value is only a number
 */
export class TreeNode {
   val: number;
   left: TreeNode | null;
   right: TreeNode | null;

   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val ?? 0;
      this.left = left ?? null;
      this.right = right ?? null;
   }
}
