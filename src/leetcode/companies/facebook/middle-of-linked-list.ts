import ListNode from '~/leetcode/data-structures/list-node';

function middleNode(head: ListNode | null): ListNode | null {
   let slow = head;
   let fast = head;

   while (fast?.next) {
      slow = slow?.next ?? null;
      fast = fast?.next?.next ?? null;
   }

   return slow;
}

export { middleNode };
