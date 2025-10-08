// i traverses through the array, while j tracks at what position the next non-zero element should go

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; //swapping in JS
      j++;
    } else if (nums[j] !== 0) j++;
  }
};
