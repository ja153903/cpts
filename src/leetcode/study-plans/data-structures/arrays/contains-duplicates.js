/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const unique = new Set();
  for (const num of nums) {
    if (unique.has(num)) {
      return true;
    }

    unique.add(num);
  }

  return false;
};

export { containsDuplicate };
