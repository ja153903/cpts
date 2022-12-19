class Counter<T> {
   #map: Map<T, number>;

   constructor(arr: T[]) {
      this.#map = new Map();

      for (const item of arr) {
         this.#map.set(item, (this.#map.get(item) ?? 0) + 1);
      }
   }

   mostCommonElements(k: number): T[] {
      const entries = [...this.#map.entries()];
      entries.sort(([_aKey, aValue], [_bKey, bValue]) => bValue - aValue);
      return entries.slice(0, k).map(([key, _value]) => key);
   }
}

export { Counter };
