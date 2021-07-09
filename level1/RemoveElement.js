/**
 * @see {@link https://leetcode.com/problems/remove-element/}
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      k++;
      nums[i] = -1;
    }
  }
  nums.sort((a, b) => {
    return b - a;
  });

  return nums.length - k;
};
