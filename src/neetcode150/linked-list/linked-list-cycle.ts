import ListNode from './node';

function hasCycle(head: ListNode | null): boolean {
   let slow: ListNode | null = head;
   let fast: ListNode | null = head;

   while (fast?.next?.next) {
      slow = slow?.next!;
      fast = fast.next.next;

      if (slow === fast) {
         return true;
      }
   }

   return false;
}

export { hasCycle };
