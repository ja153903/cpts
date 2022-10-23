function maxSlidingWindow(nums: number[], k: number): number[] {
  // only start collecting items into the result array once we hit index k - 1
  const result: number[] = [];
  // store only the indices here
  const deque: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // remove any indices in the deque that
    // do not fall within k elements of the current index
    // i.e. if front of the deque is less then i - k
    // then we should remove it
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // remove any items from the back of the deque
    // that happen to be smaller than the current item
    while (deque.length && nums[deque.at(-1)!] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

export { maxSlidingWindow };
