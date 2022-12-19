import ListNode from './node';

function addTwoNumbers(
   l1: ListNode | null,
   l2: ListNode | null
): ListNode | null {
   let result: ListNode | null = new ListNode(0);

   let runner: ListNode | null = result;
   let carry = 0;

   while (l1 || l2) {
      let current = carry;

      if (l1) {
         current += l1.val;
         l1 = l1.next;
      }

      if (l2) {
         current += l2.val;
         l2 = l2.next;
      }

      runner.next = new ListNode(current % 10);
      carry = Math.floor(current / 10);

      runner = runner.next;
   }

   if (carry > 0) {
      runner.next = new ListNode(carry);
   }

   return result.next;
}

export { addTwoNumbers };
