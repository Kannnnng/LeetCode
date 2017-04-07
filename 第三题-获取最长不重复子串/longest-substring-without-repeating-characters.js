/**
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
var myLengthOfLongestSubstring = function(s) {
  var max = 0;
  var now = 0;
  var length = s.length;
  for (var i = 0; i < length; i++) {
    var temp = s.slice(now, i);
    if (s.charAt(now) === s.charAt(i) || temp.indexOf(s.charAt(i)) !== -1) {
      if (max < (i - now)) {
        max = i - now;
      }
      now = i;
    }
  }
  return max;
};

var max = myLengthOfLongestSubstring('au');

console.log(max);