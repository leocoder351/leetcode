/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let area = 0;

  for (let i = 1; i <= height.length; ++i) {
    for (let j = i + 1; j <= height.length - 1; ++j) {
      area = (j - i) * Math.min(height[i], height[j]);
      if (max < area) max = area;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));