/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length === 0) return true;
	if (s.length % 2 !== 0) return false;

	let stack = [];
	let mapping = {
		'(': -1,
		')': 1,
		'{': -2,
		'}': 2,
		'[': -3,
		']': 3,
	};

	for (let i = 0; i < s.length; ++i) {
		if (mapping[s[i]] < 0) {
			stack.push(s[i]);
		} else {
			let latest = stack.pop();
			if (mapping[latest] + mapping[s[i]] !== 0) return false;
		}
	}

	return stack.length === 0;
};

console.log(isValid('(())'));
