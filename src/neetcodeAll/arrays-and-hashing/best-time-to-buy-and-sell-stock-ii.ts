function maxProfit(prices: number[]): number {
   let minBuy = prices[0];
   let profit = 0;

   for (let i = 1; i < prices.length; i++) {
      if (prices[i] > minBuy) {
         profit += prices[i] - minBuy;
      }

      minBuy = prices[i];
   }

   return profit;
}

export { maxProfit };
