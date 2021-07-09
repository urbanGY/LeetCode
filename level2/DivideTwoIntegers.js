/**
 * @see {@link https://leetcode.com/problems/divide-two-integers/submissions/}
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let overflow = (1 << 30) + (1 << 30) - 1;
  let tmp = dividend / divisor;
  if (tmp < 0) {
    tmp = Math.ceil(tmp);
  } else {
    tmp = Math.floor(tmp);
  }

  if (tmp > overflow) {
    tmp = overflow;
  }
  return tmp;
};
