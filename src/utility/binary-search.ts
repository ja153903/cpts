class BinarySearch {
  static classic(nums: number[], target: number): number {
    if (!nums || !nums.length) {
      return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  static roundDown(nums: number[], target: number): number {
    return BinarySearch.classic(nums, target);
  }

  static roundUp(nums: number[], target: number): number {
    if (!nums || !nums.length) {
      return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left + 1) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }
}
