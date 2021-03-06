/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let i = 0;
	let j = height.length - 1;
	let max = 0;

	while (i !== j) {
		area = (j - i) * Math.min(height[i], height[j]);

		if (max < area) max = area;

		if (height[i] <= height[j]) {
			++i;
		} else {
			--j;
		}
	}

	return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
