function findRedundantConnection(edges: number[][]): number[] {
   // if we have two nodes that already share the same parent
   // then we know we have a redundant connection
   const uf = new UnionFind(edges.length);

   for (const [u, v] of edges) {
      const alreadyConnected = uf.union(u - 1, v - 1);

      if (alreadyConnected) {
         return [u, v];
      }
   }

   return [];
}

class UnionFind {
   parents: Array<number>;
   rank: Array<number>;
   size: number;

   constructor(size: number) {
      this.size = size;
      this.rank = new Array(size).fill(0);
      this.parents = new Array(size).fill(0).map((_, index) => index);
   }

   union(u: number, v: number): boolean {
      const pu = this.find(u);
      const pv = this.find(v);

      if (pu === pv) {
         return true;
      }

      if (this.rank[pu] < this.rank[pv]) {
         this.parents[pu] = pv;
         this.rank[pv]++;
      } else {
         this.parents[pv] = pu;
         this.rank[pu]++;
      }

      return false;
   }

   find(u: number): number {
      while (this.parents[u] !== u) {
         this.parents[u] = this.parents[this.parents[u]];
         u = this.parents[u];
      }

      return u;
   }
}

export { findRedundantConnection };
