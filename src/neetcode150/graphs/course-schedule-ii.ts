function findOrder(numCourses: number, prerequisites: number[][]): number[] {
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
   const result: number[] = [];

   indegree.forEach((indegree, index) => {
      if (indegree === 0) {
         queue.push(index);
      }
   });

   while (queue.length) {
      const front = queue.shift() as number;
      const children = graph.get(front) ?? [];

      coursesCompleted++;
      result.push(front);

      for (const child of children) {
         indegree[child]--;
         if (indegree[child] === 0) {
            queue.push(child);
         }
      }
   }

   return numCourses === coursesCompleted ? result : [];
}

export { findOrder };
