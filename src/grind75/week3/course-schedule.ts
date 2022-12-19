// NOTE: This question requires us to use Khan's Algorithm
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
   // what's the idea behind khan's algorithm?
   // given an adjacency list, we should figure out how many indegrees a certain node has
   // knowing the number of indegrees will inform us of whether we can process the element or not
   // note that in the context of this question a course with indegree 0 will be a course where
   // we don't have anymore prerequisites, and we can freely finish this.
   // the question in a nutshell asks if we can finish numCourses courses so we should also
   // keep track of how many courses we end up finishing.
   let coursesFinished = 0;

   const indegree = new Array(numCourses).fill(0);
   const graph = new Map<number, number[]>();

   for (const [u, v] of prerequisites) {
      if (!graph.has(v)) {
         graph.set(v, []);
      }

      graph.get(v)?.push(u);
      indegree[u]++;
   }

   const queue: number[] = [];

   for (let i = 0; i < indegree.length; i++) {
      if (indegree[i] === 0) {
         queue.push(i);
      }
   }

   while (queue.length) {
      const course = queue.shift() as number;
      coursesFinished++;

      for (const nextCourse of graph.get(course) ?? []) {
         indegree[nextCourse]--;
         if (indegree[nextCourse] === 0) {
            queue.push(nextCourse);
         }
      }
   }

   return coursesFinished === numCourses;
}

export { canFinish };
