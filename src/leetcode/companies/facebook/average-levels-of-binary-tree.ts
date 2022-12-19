import TreeNode from '~/neetcode150/trees/node';

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const queue = [] as TreeNode[];
  const levels = [] as number[][];

  queue.push(root);

  while (queue.length) {
    const size = queue.length;
    const sublevel = [] as number[];

    for (let i = 0; i < size; i++) {
      const front = queue.shift() as TreeNode;

      sublevel.push(front.val);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    levels.push(sublevel);
  }

  return levels.map((level) => {
    const sum = level.reduce((acc, val) => acc + val, 0);
    return sum / level.length;
  });
}

export { averageOfLevels };
