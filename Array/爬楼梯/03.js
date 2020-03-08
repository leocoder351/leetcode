// 1. 动态规划
// 它的最优解可以从其子问题的最优解来有效的构建，使用动态规划来解决这一问题
// 第 i 阶可以由以下两种方法得到：
// (1) 在第 (i-1) 阶后向上爬 1 阶
// (2) 在第 (i-2) 阶后向上爬 2 阶
// 所以，到达第 i 阶的方法总数就是到第 (i-1) 阶和第 (i-2) 阶的方法数之和
// dp[i] = dp[i-1] + dp[i-2]
let climbStairs = function(n) {
	let dp = [];

	if (n === 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;

	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
};

console.log(climbStairs(45));
