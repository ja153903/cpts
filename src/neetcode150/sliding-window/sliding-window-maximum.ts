function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  // let's keep indices in the deque
  const deque: number[] = [];

  let i = 0;

  while (i < nums.length) {
    // remove items from front of deque if out of the window range
    // i.e. if i - k > 0 then we should be removing things
    while (deque.length && i - deque[0] >= k) {
      deque.shift();
    }

    // remove items from back of deque if they are less than
    // the item we're currently iterating over
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }

    i++;
  }

  return result;
}

export { maxSlidingWindow };
