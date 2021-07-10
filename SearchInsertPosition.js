/**
 * @see {@link https://leetcode.com/problems/search-insert-position/}
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  let result = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      break;
    }

    if (i === 0 && target < nums[i]) {
      break;
    }
    result++;
    if (i + 1 < len && nums[i] < target && nums[i + 1] > target) {
      break;
    }
  }

  return result;
};
