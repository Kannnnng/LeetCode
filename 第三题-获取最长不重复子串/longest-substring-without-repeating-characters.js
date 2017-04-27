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
      str = s.substring(s.lastIndexOf(temp, i - 1) + 1, i + 1);
    }
  }
  return max;
};

/* 比较简洁的写法，但是没看懂…… */
function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}

const time1 = new Date();

var max = myLengthOfLongestSubstring('aab');
console.log(max, 2);

var max = myLengthOfLongestSubstring('bbtablud');
console.log(max, 6);

var max = myLengthOfLongestSubstring('bbbbb');
console.log(max, 1);

var max = myLengthOfLongestSubstring('pwwkew');
console.log(max, 3);

var max = myLengthOfLongestSubstring('13546273');
console.log(max, 7);

const time2 = new Date();
console.log(time2 - time1 + "ms");
