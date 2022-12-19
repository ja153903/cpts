import { PriorityQueue } from '~/utility/priority-queue';

type Node = { point: number[]; priority: number };

function kClosest(points: number[][], k: number): number[][] {
   const pq = new PriorityQueue<Node>((a, b) => a.priority > b.priority);

   for (const point of points) {
      const priority = point[0] * point[0] + point[1] * point[1];

      pq.insert({ point, priority });
      if (pq.size > k) {
         pq.remove();
      }
   }

   return pq.items.map((node) => node.point);
}

export { kClosest };
