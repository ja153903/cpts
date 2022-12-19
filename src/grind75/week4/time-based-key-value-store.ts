type Entry = { value: string; timestamp: number };

class TimeMap {
   private map: Map<string, Entry[]>;

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
      const entries = this.map.get(key) ?? null;
      if (!entries) {
         return '';
      }

      let left = 0;
      let right = entries.length;

      // with our binary search what we want to achieve
      // if the highest such number that is less than
      // or equal to the current timestamp
      while (left < right) {
         const mid = left + Math.floor((right - left) / 2);

         // if the current timestamp is less than what we want
         // then we increase left
         // otherwise, we assign mid to right (this denotes that right)
         // should contain our answer
         if (entries[mid].timestamp <= timestamp) {
            left = mid + 1;
         } else {
            right = mid;
         }
      }

      return right === 0 ? '' : entries[right - 1].value;
   }
}

export { TimeMap };
