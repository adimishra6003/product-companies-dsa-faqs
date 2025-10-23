// Brute force approach O(n^2) - generate all subarrays and count the ones having product less than k

var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (product < k) {
        count++;
      } else break;
    }
  }
  return count;
};

// 2 pointer approach-
