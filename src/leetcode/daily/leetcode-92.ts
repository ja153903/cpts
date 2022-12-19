import ListNode from '../data-structures/list-node';

function reverseBetween(
   head: ListNode | null,
   left: number,
   right: number
): ListNode | null {
   if (!head) {
      return null;
   }

   const rightNode = findNodeByPos(head, right);
   const nodeAfterRight = rightNode?.next ?? null;

   const nodeBeforeLeft = findNodeByPos(head, left - 1);
   const leftNode = findNodeByPos(head, left);

   let prev: ListNode | null = nodeAfterRight;
   let curr: ListNode | null = leftNode;
   let pos: number = left;

   while (curr && pos <= right) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;

      pos++;
   }

   if (nodeBeforeLeft !== null) {
      nodeBeforeLeft.next = prev;
      return head;
   } else {
      // we return prev here because we have a new head node
      return prev;
   }
}

function findNodeByPos(head: ListNode | null, val: number): ListNode | null {
   if (val === 0) {
      return null;
   }

   let current: ListNode | null = head;
   let pos: number = 1;

   while (current) {
      if (pos === val) {
         return current;
      }

      pos++;
      current = current.next;
   }

   return null;
}

export { reverseBetween };
