function validPath(
   n: number,
   edges: number[][],
   source: number,
   destination: number
): boolean {
   const graph = buildGraph(n, edges);
   const visited = new Set<number>();
   const queue: number[] = [];

   queue.push(source);
   visited.add(source);

   while (queue.length > 0) {
      const front = queue.shift() as number;

      if (front === destination) {
         return true;
      }

      const children = graph.get(front) ?? [];

      for (const child of children) {
         if (visited.has(child)) {
            continue;
         }

         visited.add(child);
         queue.push(child);
      }
   }

   return false;
}

function buildGraph(n: number, edges: number[][]): Map<number, Set<number>> {
   const graph = new Map<number, Set<number>>();

   for (let i = 0; i < n; i++) {
      graph.set(i, new Set());
   }

   for (const [u, v] of edges) {
      graph.get(u)?.add(v);
      graph.get(v)?.add(u);
   }

   return graph;
}

export { validPath };
