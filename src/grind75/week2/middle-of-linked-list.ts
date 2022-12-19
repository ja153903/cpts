import ListNode from '~/utility/lists';

function middleNode(head: ListNode | null): ListNode | null {
   if (!head) {
      return null;
   }

   let slow: ListNode | null = head;
   let fast: ListNode | null = head;

   while (slow && fast?.next) {
      slow = slow.next;
      fast = fast.next?.next;
   }

   return slow;
}

export { middleNode };
