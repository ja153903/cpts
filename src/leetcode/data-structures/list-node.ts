export default class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

/**
 * `collect` takes a ListNode instance and collects
 * the values into an array.
 *
 * Ex: 1 -> 2 -> 4 will return [1, 2, 4]
 */
function collect(node: ListNode | null): number[] {
  const result = [] as number[];

  if (!node) {
    return result;
  }

  let current: ListNode | null = node;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

export { collect };
