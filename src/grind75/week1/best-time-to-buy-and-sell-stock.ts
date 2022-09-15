function maxProfit(prices: number[]): number {
  let minBuy = prices[0];
  let profit = 0;

  for (const price of prices) {
    minBuy = Math.min(minBuy, price);
    profit = Math.max(profit, price - minBuy);
  }

  return profit;
}

export { maxProfit };
