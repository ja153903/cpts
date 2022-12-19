function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // this problem requires Khan's algorithm to solve efficiently
  // we initialize our search by finding nodes with indegree of 0.
  // if a node doesn't have an incoming edge, then we know that they have no more "prerequisites"
  const indegree = new Array<number>(numCourses).fill(0);
  const graph = new Map<number, Array<number>>();

  for (const [ai, bi] of prerequisites) {
    indegree[ai]++;

    if (!graph.has(bi)) {
      graph.set(bi, []);
    }

    graph.get(bi)?.push(ai);
  }

  let coursesCompleted = 0;
  const queue: number[] = [];
  indegree.forEach((indegree, index) => {
    if (indegree === 0) {
      queue.push(index);
    }
  });

  while (queue.length) {
    const front = queue.shift() as number;
    const children = graph.get(front) ?? [];

    coursesCompleted++;

    for (const child of children) {
      indegree[child]--;
      if (indegree[child] === 0) {
        queue.push(child);
      }
    }
  }

  return numCourses === coursesCompleted;
}

export { canFinish };
