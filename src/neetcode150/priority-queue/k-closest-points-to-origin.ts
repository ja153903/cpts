import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

type Node = { point: number[]; priority: number };

function kClosest(points: number[][], k: number): number[][] {
  const pq = new PriorityQueue<Node>(
    (a: Node, b: Node) => a.priority > b.priority
  );

  for (const point of points) {
    pq.insert({
      point,
      priority: Math.pow(point[0], 2) + Math.pow(point[1], 2),
    });

    if (pq.size > k) {
      pq.remove();
    }
  }

  return pq.items.map((item) => item.point);
}

export { kClosest };
