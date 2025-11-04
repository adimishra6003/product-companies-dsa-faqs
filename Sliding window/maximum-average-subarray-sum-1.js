// Brute Force approach
// TC => O(n^2) SC=> O(1)

var findMaxAverage = function (nums, k) {
  let sum = 0,
    avg = 0,
    maxAvg = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    sum = 0;
    avg = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    avg = sum / k;
    maxAvg = Math.max(maxAvg, avg);
  }

  return maxAvg;
};
