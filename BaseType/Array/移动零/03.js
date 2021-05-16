/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 时间复杂度：n
 */
let moveZeroes = function(nums) {
	let j = 0;
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			if (i !== j) {
				nums[i] = 0;
			}
			j++;
		}
	}

	return nums;
};

console.log(moveZeroes([0, 0, 0, 3, 0, 12, 0]));
