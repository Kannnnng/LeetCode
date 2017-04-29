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

var longestPalindrome = function(s) {
  var length = s.length;
  if (length === 0) return "";
  if (length === 1) return s;
  var min_start = 0, max_len = 1;
  for (var i = 0; i < length;) {
    if (length - i <= max_len / 2) break;
    var j = i, k = i;
    while (k < length-1 && s[k+1] == s[k]) ++k; // Skip duplicate characters.
    i = k+1;
    while (k < length-1 && j > 0 && s[k + 1] == s[j - 1]) { ++k; --j; } // Expand.
    var new_len = k - j + 1;
    if (new_len > max_len) { min_start = j; max_len = new_len; }
  }
  return s.substr(min_start, max_len);
};

var test = longestPalindrome('babad');
console.log(test);
var test = longestPalindrome('cbbd');
console.log(test);
var test = longestPalindrome('a');
console.log(test);
var test = longestPalindrome('afgjkkffsfa');
console.log(test);