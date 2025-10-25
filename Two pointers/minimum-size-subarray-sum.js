// Naive apporach - consider all subarrays and if their sum >= target, record it's length (j-i+1) and track the minimum.
// TC => O(n^2)

var minSubArrayLen = function (target, nums) {
  let minLen = Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        minLen = Math.min(minLen, j - i + 1);
        break; // no need to check longer subarrays starting from i
      }
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

// Sliding window (Two pointer approach) keep sliding right pointer till sum>=target, and when condition becomes true, move left pointer forward and reduce them from sum
// TC => O(n)

var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};
