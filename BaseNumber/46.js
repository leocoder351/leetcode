// 46. 全排列 https://leetcode-cn.com/problems/permutations/

var permute = function (nums) {
	let used = [];
	let result = [];
	let option = [];
	let length = nums.length;

	let backtrack = (target, length, option, first) => {
		if (first === length) {
			result.push([...option]);
			option = [];
			return;
		}

		for (let i = 0; i < length; ++i) {
			if (!used[i]) {
				option.push(target[i]);
				used[i] = true;
				backtrack(target, length, option, ++first);
				option.pop();
				used[i] = false;
				first--;
			}
		}
	};

	backtrack(nums, length, option, 0);
	return result;
};

console.log(permute([1, 2, 3]));
