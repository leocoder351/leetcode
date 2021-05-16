/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	if (Object.prototype.toString.call(s) !== '[object String]') {
		throw new Error('请输入字符串');
		return;
	}

	let romanObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let max = 0;
	let result = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		let roman = s[i];
		let current = romanObj[roman];

		if (current >= max) {
			result += current;
		} else {
			result -= current;
		}

		max = Math.max(max, current);
	}

	return result;
};

console.log(romanToInt('LVIII'));
