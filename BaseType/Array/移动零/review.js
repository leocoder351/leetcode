// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
let moveZeroes1 = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return;

  let temp;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length; ++j) {
        if (nums[j] !== 0) {
          // switch
          temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }
    }
  }

  return nums;
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)
let moveZeroes2 = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return;

  let index = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }

  while (index < nums.length) {
    nums[index++] = 0;
  }

  return nums;
};

console.log(moveZeroes1([0, 0, 0, 3, 0, 12, 0]));
console.log(moveZeroes2([0, 0, 0, 3, 0, 12, 0]));
