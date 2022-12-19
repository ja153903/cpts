import { Counter } from '~/utility/counter';

function topKFrequent(nums: number[], k: number): number[] {
   const counter = new Counter<number>(nums);
   return counter.mostCommonElements(k);
}

export { topKFrequent };
