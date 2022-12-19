import ListNode from './node';

// the simplest way to do this is to copy all the nodes into a buffer
// then reverse them that way
// The downside with this is that we're incurring extra space
// This solution is O(n) time and space
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
   const elements: ListNode[] = [];

   let current = head;

   while (current) {
      elements.push(current);
      current = current.next;
   }

   for (let i = 0; i < elements.length; i += k) {
      if (i + k > elements.length) {
         break;
      }

      for (let j = i, m = i + k - 1; j < m; j++, m--) {
         const tmp = elements[j];
         elements[j] = elements[m];
         elements[m] = tmp;
      }
   }

   for (let i = 1; i < elements.length; i++) {
      elements[i - 1].next = elements[i];

      if (i === elements.length - 1) {
         elements[i].next = null;
      }
   }

   return elements[0];
}

// there exists an optimization that narrows this down to constant space

export { reverseKGroup };
