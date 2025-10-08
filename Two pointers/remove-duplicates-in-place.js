// j is the slower pointer which keeps track of the unique numbers, i is the fast pointer which goes ahead in every iteration and compares it with j's value.
// If nums[i] and nums[j] is equal, i moves ahead
// If it is not, then j increments and the new unique value is added to nums[j]

var removeDuplicates = function (nums) {
  let n = nums.length;
  let j = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
};
