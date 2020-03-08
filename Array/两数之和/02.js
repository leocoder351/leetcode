// 两重循环，时间复杂度 O(n^2)
// 使用 Hash，空间换时间，做 2 次 for 循环
// 时间复杂度 O(n)
var twoSum = function(nums, target) {
	if (nums.length <= 1) return [];

	let res = {};

	for (let i = 0; i < nums.length; ++i) {
		res[nums[i]] = i;
	}

	for (let i = 0; i < nums.length; ++i) {
		if (res[target - nums[i]] !== undefined && i !== res[target - nums[i]]) {
			return [i, res[target - nums[i]]];
		}
	}
};

console.log(twoSum([1, 3, 4, 2], 6));
