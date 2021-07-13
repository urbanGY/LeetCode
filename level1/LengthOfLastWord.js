/**
 * @see {@link https://leetcode.com/problems/length-of-last-word/}
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(" ").reverse();
  let answer = 0;
  for (let elem of arr) {
    if (elem.length > 0) {
      answer = elem.length;
      break;
    }
  }
  return answer;
};
