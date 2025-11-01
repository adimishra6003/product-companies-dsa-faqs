// Naive approach using extra set to check duplicacy
// TC => O(n), SC => O(n)

var findDuplicate = function (nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return nums[i];
    seen.add(nums[i]);
  }
};
