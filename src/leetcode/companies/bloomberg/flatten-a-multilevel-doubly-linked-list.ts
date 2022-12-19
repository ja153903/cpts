class Node {
   val: number;
   prev: Node | null;
   next: Node | null;
   child: Node | null;
   constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
      this.val = val === undefined ? 0 : val;
      this.prev = prev === undefined ? null : prev;
      this.next = next === undefined ? null : next;
      this.child = child === undefined ? null : child;
   }
}

function flatten(head: Node | null): Node | null {
   // the reason we care about this being a doubly linked list is because
   // we want to be able to connect previous and next nodes when we can
   // we only really do that though when there exists a child
   // however, we should somehow also keep track of nodes we've already visited
   let current: Node | null = head;

   while (current !== null) {
      if (!current.child) {
         current = current.next;
         continue;
      }
      // in the case that there's a child, we have to make sure that
      // we connect all the possible nodes before we move on
      // if any of the children have a child themselves, we don't have to worry
      // about that until later

      let temp = current.child;

      // when temp.next is null, we'll want to fill that in
      // so we exit then
      while (temp?.next) {
         temp = temp.next;
      }

      // connect end of children to current.next
      temp.next = current.next;

      // if current.next is not null, then make sure
      // that node's previous node is the the tail
      // of the children nodes
      if (current?.next) {
         current.next.prev = temp;
      }

      // current.next should be the current child
      current.next = current.child;
      // previous node the child should then be current
      current.child.prev = current;
      // make sure that child is now null
      current.child = null;
   }

   return head;
}

export { flatten };
