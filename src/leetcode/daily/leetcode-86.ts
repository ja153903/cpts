import ListNode from '../data-structures/list-node';

function partition(head: ListNode | null, x: number): ListNode | null {
  // all nodes less than x come before nodes that are gte x
  // we should also preserve relative order

  let firstHalf = new ListNode(0);
  let firstHalfRunner = firstHalf;

  let secondHalf = new ListNode(0);
  let secondHalfRunner = secondHalf;

  let current = head;

  while (current) {
    if (current.val < x) {
      firstHalfRunner.next = new ListNode(current.val);
      firstHalfRunner = firstHalfRunner.next;
    } else {
      secondHalfRunner.next = new ListNode(current.val);
      secondHalfRunner = secondHalfRunner.next;
    }

    current = current.next;
  }

  if (firstHalfRunner) {
    firstHalfRunner.next = secondHalf.next;
    return firstHalf.next;
  }

  return secondHalf.next;
}

export { partition };
