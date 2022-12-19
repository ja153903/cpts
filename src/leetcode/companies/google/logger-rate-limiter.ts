class Logger {
   private logs: Map<string, number>;

   constructor() {
      this.logs = new Map();
   }

   // each unique message should be printed at most every 10 seconds
   shouldPrintMessage(timestamp: number, message: string): boolean {
      if (!this.logs.has(message)) {
         this.logs.set(message, timestamp);
         return true;
      }

      const prevTimestamp = this.logs.get(message) as number;

      if (timestamp - prevTimestamp >= 10) {
         this.logs.set(message, timestamp);
         return true;
      }

      return false;
   }
}

export { Logger };
