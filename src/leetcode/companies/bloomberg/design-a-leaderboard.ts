class Leaderboard {
  #scores: Map<number, number>;

  constructor() {
    this.#scores = new Map();
  }

  addScore(playerId: number, score: number): void {
    this.#scores.set(playerId, (this.#scores.get(playerId) ?? 0) + score);
  }

  top(K: number): number {
    return [...this.#scores.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, K)
      .map((pair) => pair[1])
      .reduce((acc, num) => acc + num, 0);
  }

  reset(playerId: number): void {
    this.#scores.delete(playerId);
  }
}

export { Leaderboard };
