class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    parent?: Node | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;
  }
}

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
  // can we treat this problem like finding a cycle within a linked list?
  let pRunner: Node | null = p;
  let qRunner: Node | null = q;

  while (pRunner && qRunner) {
    if (pRunner === qRunner) {
      return pRunner;
    }

    if (pRunner.parent) {
      pRunner = pRunner.parent;
    } else {
      pRunner = q;
    }

    if (qRunner.parent) {
      qRunner = qRunner.parent;
    } else {
      qRunner = p;
    }
  }

  return null;
}

export { lowestCommonAncestor };
