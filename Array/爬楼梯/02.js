// 1. 计算菲波那切数列，最笨的方法是递归，但是递归耗时间，有可能还会栈溢出
// 2. 改用循环，防止栈溢出
let climbStairs = function(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;

	let first = 1;
	let second = 2;
	let third = 0;

	for (let i = 3; i <= n; i++) {
		third = first + second;
		first = second;
		second = third;
	}

	return second;
};

console.log(climbStairs(45));
