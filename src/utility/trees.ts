export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

/**
 *
 * createBinaryTreeFromList is a function that we can use for testing
 * problems that use LeetCode's TreeNode data structure.
 *
 *
 * Note that the expected format of the input array requires that
 * we be explicit about the null nodes that may exist since we use
 * a binary heap structure. This means that for any node i, its children
 * are located at indices 2 * i + 1 and 2 * i + 2. Furthermore, this also
 * implies that a node's parent is located at index floor((i - 1) / 2)
 */
export function createBinaryTreeFromList(
  nums: (number | null)[]
): TreeNode | null {
  if (nums.length === 0 || nums[0] === null) {
    return null;
  }

  const nodes = new Array<TreeNode | null>(nums.length).fill(null);

  const root = new TreeNode(nums[0]);
  nodes[0] = root;

  for (let i = 1; i < nums.length; i++) {
    const parent = Math.floor((i - 1) / 2);
    if (nums[i] !== null) {
      const node = new TreeNode(nums[i] as number);
      nodes[i] = node;

      const isLeftChild = 2 * parent + 1 === i;

      if (isLeftChild) {
        nodes[parent]!.left = node;
      } else {
        nodes[parent]!.right = node;
      }
    }
  }

  return root;
}

export function inOrderTraversal(root: TreeNode | null, result: number[]) {
  if (root !== null) {
    inOrderTraversal(root.left, result);
    result.push(root.val);
    inOrderTraversal(root.right, result);
  }
}
