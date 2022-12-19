import UnionFind from '~/leetcode/data-structures/union-find';

// a graph is a valid tree if there are no cycles.
function validTree(n: number, edges: number[][]): boolean {
  const uf = new UnionFind(n);

  for (const [u, v] of edges) {
    const pu = uf.find(u);
    const pv = uf.find(v);

    if (pu === pv) {
      return false;
    }

    uf.union(u, v);
  }

  const parents = new Set<number>();

  for (let i = 0; i < n; i++) {
    parents.add(uf.find(i));
  }

  return parents.size === 1;
}

export { validTree };
