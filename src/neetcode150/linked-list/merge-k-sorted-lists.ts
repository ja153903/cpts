import ListNode from './node';
import { PriorityQueue } from '../../leetcode/data-structures/priority-queue';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const pq = new PriorityQueue<ListNode>(
    (a: ListNode, b: ListNode) => a.val < b.val
  );

  for (const list of lists) {
    if (list) {
      pq.insert(list);
    }
  }

  let result: ListNode | null = new ListNode(0);
  let runner = result;

  while (pq.size > 0) {
    const front = pq.remove();
    if (front) {
      const next = front.next;
      runner.next = new ListNode(front.val);
      runner = runner.next;

      if (next) {
        pq.insert(next);
      }
    }
  }

  return result.next;
}

export { mergeKLists };
