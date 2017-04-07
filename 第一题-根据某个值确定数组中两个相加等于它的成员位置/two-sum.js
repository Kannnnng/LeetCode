/**
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var myTwoSum = function(nums, target) {
  var length = nums.length;
  for (var i = 0; i < length - 1; i++) {
    for (var j = i + 1; j < length; j++) {
      if (target === (nums[i] + nums[j])) {
        return [i, j];
      }
    }
  }
};

/* 代码有点问题，计算出的位置比实际位置多1，所以需要一次循环将位置减1 */
var twoSum = function(nums, target) {
  var ret = [];
  var exist = {};
  for(var i = 0; i < nums.length; i++){
    if(typeof(exist[target - nums[i]]) !== 'undefined'){
      ret.push(exist[target - nums[i]]);
      ret.push(i + 1);
    }
    exist[nums[i]] = i + 1;
  }
  return ret;
};

var result = myTwoSum([3, 2, 4], 6);

console.log(result);