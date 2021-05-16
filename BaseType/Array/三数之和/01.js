// 1. 三重 for 循环
// 2. 输入太大，会超出时间限制
var threeSum = function(nums) {
	if (nums.length < 3) return [];

	let result = [];

	for (let i = 0; i < nums.length; ++i) {
		for (let j = i + 1; j < nums.length; ++j) {
			for (let k = j + 1; k < nums.length; ++k) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					let temp = [nums[i], nums[j], nums[k]];
					let isRepeat = false;
					result.forEach(arr => {
						if (arr.sort().toString() === temp.sort().toString()) {
							isRepeat = true;
							return;
						}
					});

					!isRepeat && result.push([nums[i], nums[j], nums[k]]);
				}
			}
		}
	}

	return result;
};
