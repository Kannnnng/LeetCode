/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */

/**
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/* 算法的时间复杂度好像不是 O(log(m+n)) */
var myFindMedianSortedArrays = function(nums1, nums2) {
  nums1.push(Number.MAX_VALUE);
  nums2.push(Number.MAX_VALUE);
  var nums = [];
  var length1 = nums1.length;
  var length2 = nums2.length;
  var length = length1 + length2;
  var median1 = 0;
  var median2 = 0;
  var i, j, len;
  for (i = 0, j = 0, len = (length) / 2; i + j < len;) {
    nums.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
  }
  if (length % 2 === 0) {
   return (nums[(length - 4) / 2] + nums[(length - 2) / 2]) / 2;
  }
  return nums[(length - 3) / 2];
};

var nums1 = [1, 3];
var nums2 = [2];
console.log(myFindMedianSortedArrays(nums1, nums2));

var nums1 = [1, 2];
var nums2 = [3, 4];
console.log(myFindMedianSortedArrays(nums1, nums2));

var nums1 = [1, 2, 5, 6, 6, 6, 7, 10];
var nums2 = [3, 4, 4, 6, 8, 9, 10];
console.log(myFindMedianSortedArrays(nums1, nums2));

