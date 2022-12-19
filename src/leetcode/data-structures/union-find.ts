class UnionFind {
  parents: Array<number>;
  rank: Array<number>;
  size: number;

  constructor(size: number) {
    this.size = size;
    this.rank = new Array(size).fill(0);
    this.parents = new Array(size).fill(0).map((_, index) => index);
  }

  union(u: number, v: number) {
    const pu = this.find(u);
    const pv = this.find(v);

    if (this.rank[pu] < this.rank[pv]) {
      this.parents[pv] = pu;
      this.rank[pu]++;
    } else {
      this.parents[pu] = pv;
      this.rank[pv]++;
    }
  }

  find(u: number): number {
    while (this.parents[u] !== u) {
      this.parents[u] = this.parents[this.parents[u]];
      u = this.parents[u];
    }

    return u;
  }

  get numberOfConnectedComponents(): number {
    const uniqueParents = new Set<number>();

    for (let i = 0; i < this.size; i++) {
      uniqueParents.add(this.find(i));
    }

    return uniqueParents.size;
  }
}

export default UnionFind;
