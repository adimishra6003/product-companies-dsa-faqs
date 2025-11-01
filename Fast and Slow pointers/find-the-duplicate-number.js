// Naive approach using sorting
// TC => O(nlogn), SC => O(1)

var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return nums[i];
  }
};

// Naive approach using extra set to check duplicacy
// TC => O(n), SC => O(n)

var findDuplicate = function (nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return nums[i];
    seen.add(nums[i]);
  }
};
