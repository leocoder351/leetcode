// 300. 最长递增子序列 https://leetcode-cn.com/problems/longest-increasing-subsequence/
// f(x) = max{f(x), f(p)+1}
// p < x，a(p) < a(x)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  
  let dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = 1; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j]+1);
      }
    }
    max = Math.max(max, dp[i]);
  }

  return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))