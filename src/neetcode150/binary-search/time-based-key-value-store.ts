type TimeMapNode = { value: string; timestamp: number };

class TimeMap {
   private map: Map<string, Array<TimeMapNode>>;

   constructor() {
      this.map = new Map();
   }

   set(key: string, value: string, timestamp: number): void {
      if (!this.map.has(key)) {
         this.map.set(key, []);
      }

      this.map.get(key)?.push({ value, timestamp });
   }

   get(key: string, timestamp: number): string {
      // find a timestamp t such that it's less then or equal to the timestamp we pass in
      if (!this.map.has(key)) {
         return '';
      }

      const nodes = this.map.get(key)!;

      let left = 0;
      let right = nodes.length - 1;
      let result = 0;

      // we should do binary search now to find the largest such value that's less than timestamp
      while (left <= right) {
         const mid = left + Math.floor((right - left) / 2);

         if (nodes[mid].timestamp <= timestamp) {
            result = mid;
            left = mid + 1;
         } else {
            right = mid - 1;
         }
      }

      if (nodes[result].timestamp <= timestamp) {
         return nodes[result].value;
      }

      return '';
   }
}

export { TimeMap };
