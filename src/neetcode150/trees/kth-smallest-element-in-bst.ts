import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';
import TreeNode from './node';

function kthSmallest(root: TreeNode | null, k: number): number {
  const pq = new PriorityQueue<number>((a: number, b: number) => a > b);

  function postOrderTraversal(node: TreeNode | null, k: number) {
    if (node) {
      postOrderTraversal(node.left, k);
      postOrderTraversal(node.right, k);

      pq.insert(node.val);

      if (pq.size > k) {
        pq.remove();
      }
    }
  }

  postOrderTraversal(root, k);

  return pq.remove() as number;
}

// NOTE: A more optimal algorithm
// we can also use an iterative in order traversal.
// when we have k items, then we know we're at the result

export { kthSmallest };
