/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 时间复杂度：n
 */
let moveZeroes = function(nums) {
	if (!Array.isArray(nums) || nums.length == 0) return;

	let index = 0;

	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] !== 0) {
			nums[index++] = nums[i];
		}
	}

	while (index < nums.length) {
		nums[index++] = 0;
	}

	return nums;
};

console.log(moveZeroes([0, 0, 0, 3, 0, 12, 0]));
