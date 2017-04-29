/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Input: "cbbd"
 * Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var myLongestPalindrome = function(s) {
  if (s.length === 0) {
    return 0;
  }
  var max = 1;
  for (var i = 0, j = 1, length = s.length; i < length - 1; i++, j = 1) {
    console.log(i);
    while (s.charAt(i - j) === s.charAt(i + j)) {
      console.log(j, max);
      max = j > max ? j : max;
      j++;
    }
  }
  return max;
};

var test = myLongestPalindrome('babad');
// console.log(test);
// var test = myLongestPalindrome('cbbd');
// console.log(test);
// var test = myLongestPalindrome('a');
// console.log(test);
// var test = myLongestPalindrome('afgjkkffsfa');
// console.log(test);