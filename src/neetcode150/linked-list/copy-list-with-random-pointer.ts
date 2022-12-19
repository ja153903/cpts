class MyNode {
  val: number;
  next: MyNode | null;
  random: MyNode | null;
  constructor(val?: number, next?: MyNode, random?: MyNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: MyNode | null): MyNode | null {
  const map = new Map<MyNode | null, MyNode>();

  let current: MyNode | null = head;

  while (current) {
    map.set(current, new MyNode(current.val));
    current = current.next;
  }

  current = head;

  while (current) {
    const copy = map.get(current) ?? null;
    if (copy) {
      copy.next = map.get(current.next) ?? null;
      copy.random = map.get(current.random) ?? null;
    }

    current = current.next;
  }

  return map.get(head) ?? null;
}

export { copyRandomList };
