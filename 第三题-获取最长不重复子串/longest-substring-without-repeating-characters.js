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
  var index = 0;
  var max = 0;
  var str = "";
  var temp = "";
  for (var i = 0, length = s.length; i < length; i++) {
    temp = s.charAt(i);
    index = str.indexOf(temp);
    if (index === -1) {
      str += temp;
      max = str.length > max ? str.length : max;
    } else {
      str = s.substring(index + 1, i + 1);
    }
  }
  return max;
};

var max = myLengthOfLongestSubstring('aab');
console.log(max);

var max = myLengthOfLongestSubstring('bbtablud');
console.log(max);

var max = myLengthOfLongestSubstring('bbbbb');
console.log(max);

var max = myLengthOfLongestSubstring('pwwkew');
console.log(max);

var max = myLengthOfLongestSubstring('13546273');
console.log(max);
