/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 时间复杂度：n^2
 */
let moveZeroes = function (nums) {
  if (!Array.isArray(nums) || nums.length == 0) return;

  let j = 0;
  let temp;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      for (j = i + 1; j < nums.length; ++j) {
        if (nums[j] !== 0) {
          temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }
    }
  }
  return nums;
};

console.log(moveZeroes([0, 0, 0, 3, 0, 12, 0]));