class _Node {
  val: number;
  next: _Node | null;

  constructor(val?: number, next?: _Node) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function insert(head: _Node | null, insertVal: number): _Node | null {
  // we can have two pointers p1, p2 which are initialized to
  // head and head.next respectively
  // if p2 is null, then we should make sure that we insert the node
  const insertNode = new _Node(insertVal);

  let p1 = head;
  let p2 = head?.next;
  let inserted = false;

  if (!p1) {
    insertNode.next = insertNode;
    return insertNode;
  }

  while (true) {
    // 1. We should insert values into the linked list when: p1.val <= insertNode.val <= p2.val
    // 2. Suppose then we hit the case where p1.val > p2.val
    // (ex: [3, 4, 5, 2], inserting 1) 5 > 2 but 1 < 2
    // if p2.val > insertNode.val => we insert it after p1
    if (
      p1 &&
      p2 &&
      ((p1.val <= insertNode.val && insertNode.val <= p2.val) ||
        (p1.val > p2.val && insertNode.val < p2.val) ||
        (p1.val > p2.val && insertNode.val > p1.val))
    ) {
      p1.next = insertNode;
      insertNode.next = p2;
      inserted = true;
      break;
    }

    p1 = p1?.next ?? null;
    p2 = p2?.next ?? null;

    if (p1 === head) {
      break;
    }
  }

  if (!inserted && p1) {
    p1.next = insertNode;
    insertNode.next = p2;
  }

  return head;
}

export { insert };
