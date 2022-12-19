function sum(...args: number[]) {
   return args.reduce((a, b) => a + b);
}

function maximumWealth(accounts: number[][]): number {
   return Math.max(...accounts.map((account) => sum(...account)));
}

export { maximumWealth };
