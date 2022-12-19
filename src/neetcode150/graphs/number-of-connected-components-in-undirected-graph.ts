import UnionFind from '~/leetcode/data-structures/union-find';

function countComponents(n: number, edges: number[][]): number {
   const uf = new UnionFind(n);

   for (const [u, v] of edges) {
      uf.union(u, v);
   }

   return uf.numberOfConnectedComponents;
}

export { countComponents };
