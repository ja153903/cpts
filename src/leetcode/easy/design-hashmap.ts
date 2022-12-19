class MyHashMap {
   private record: Record<number, number>;

   constructor() {
      this.record = {};
   }

   put(key: number, value: number): void {
      this.record[key] = value;
   }

   get(key: number): number {
      return this.record?.[key] ?? -1;
   }

   remove(key: number): void {
      if (!this.has(key)) {
         return;
      }

      delete this.record[key];
   }

   has(key: number): boolean {
      return key in this.record;
   }
}

export { MyHashMap };
