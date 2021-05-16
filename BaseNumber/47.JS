// 47. 全排列2 https://leetcode-cn.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let used = [];
	let result = [];
	let option = [];
	let length = nums.length;

	nums.sort();

	let backtrack = (target, length, option, first) => {
		if (first === length) {
			result.push([...option]);
			option = [];
			return;
		}

		for (let i = 0; i < length; ++i) {
			if (used[i] || (i > 0 && target[i] === target[i - 1] && !used[i - 1])) continue;

			option.push(target[i]);
			used[i] = true;
			backtrack(target, length, option, ++first);
			option.pop();
			used[i] = false;
			first--;
		}
	};

	backtrack(nums, length, option, 0);
	return result;
};

console.log(permuteUnique([1, 1, 2]));
