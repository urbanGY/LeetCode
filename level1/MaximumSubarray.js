/**
 * @see {@link https://leetcode.com/problems/maximum-subarray/}
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let answer = result;
  for (let i = 1; i < nums.length; i++) {
    if (result + nums[i] < nums[i]) {
      result = nums[i];
    } else {
      result += nums[i];
    }
    if (result > answer) answer = result;
  }
  return answer;
};
