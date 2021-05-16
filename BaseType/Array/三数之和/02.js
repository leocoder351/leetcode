// 1. 先排序，双指针法
var threeSum = function(nums) {
	if (nums.length < 3) return [];

	let result = [];
	nums.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] > 0) break;

		if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

		let L = i + 1;
		let R = nums.length - 1;

		while (L < R) {
			let sum = nums[i] + nums[L] + nums[R];

			if (sum === 0) {
				result.push([nums[i], nums[L], nums[R]]);

				while (L < R && nums[L + 1] === nums[L]) ++L; // 去重
				while (L < R && nums[R - 1] === nums[R]) --R; // 去重

				++L;
				--R;
			} else if (sum < 0) {
				++L;
			} else if (sum > 0) {
				--R;
			}
		}
	}

	return result;
};

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
