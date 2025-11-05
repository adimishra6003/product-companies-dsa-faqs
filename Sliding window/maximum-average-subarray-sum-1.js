// Brute Force approach
// TC => O(n*k) because we add k elements n times. SC=> O(1)

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

// Sliding Window approach
// TC => O(n), SC => O(1)

var findMaxAverage = function (nums, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
};
