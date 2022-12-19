import ListNode from './node';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
   // if we move the fast pointer n steps forward, we have gone through n elements by then
   // then while the fast pointer still exists, we can move the slow pointer and the fast pointer until the fast pointer
   // is null
   let start: ListNode | null = new ListNode(0);

   start.next = head;

   let fast: ListNode | null = start;
   let slow: ListNode | null = start;

   for (let i = 0; i <= n; i++) {
      fast = fast?.next ?? null;
   }

   while (fast) {
      fast = fast.next;
      slow = slow?.next!;
   }

   if (slow?.next) {
      slow.next = slow.next?.next ?? null;
   }

   return start.next;
}

export { removeNthFromEnd };
