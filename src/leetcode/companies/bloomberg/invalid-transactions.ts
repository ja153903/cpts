type Transaction = { amount: number; city: string; timestamp: number };

function invalidTransactions(transactions: string[]): string[] {
   // a transaction is invalid if
   // 1. the amount exceeds $1000, or
   // 2. There exists another transaction within 60 minutes of the one we're surverying
   //    with the same name in a different city
   const result: string[] = [];

   const transactionsByName = new Map<string, Transaction[]>();

   for (const transaction of transactions) {
      const [name, timestampAsStr, amountAsStr, city] = transaction.split(',');
      const timestamp = parseInt(timestampAsStr);
      const amount = parseInt(amountAsStr);

      if (!transactionsByName.has(name)) {
         transactionsByName.set(name, []);
      }

      transactionsByName.get(name)?.push({ amount, timestamp, city });
   }

   for (const [name, userTransactions] of transactionsByName.entries()) {
      for (let i = 0; i < userTransactions.length; i++) {
         const { amount, timestamp, city } = userTransactions[i];
         const transactionA = `${name},${timestamp},${amount},${city}`;

         if (amount > 1000) {
            result.push(transactionA);
         } else {
            for (let j = 0; j < userTransactions.length; j++) {
               if (i === j) {
                  continue;
               }

               const { timestamp: otherTimestamp, city: otherCity } =
                  userTransactions[j];

               if (
                  Math.abs(timestamp - otherTimestamp) <= 60 &&
                  city !== otherCity
               ) {
                  result.push(transactionA);
                  break;
               }
            }
         }
      }
   }

   return result;
}

export { invalidTransactions };
