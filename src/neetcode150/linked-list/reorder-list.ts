import ListNode from './node';

function reorderList(head: ListNode | null): void {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast?.next?.next) {
    slow = slow?.next!;
    fast = fast?.next?.next;
  }

  let prev: ListNode | null = null;
  let curr: ListNode | null = slow?.next ?? null;

  while (curr) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  if (slow?.next) {
    slow.next = null;
  }

  let p1: ListNode | null = head;
  let p2: ListNode | null = prev;

  while (p1 && p2) {
    // the next node should point to p2 because we're swapping order
    const next = p1.next;
    // p1.next should be pointing to p2
    p1.next = p2;
    // swap p1 with p2
    p1 = p2;
    // swap p2 with next
    p2 = next;
  }
}

export { reorderList };
