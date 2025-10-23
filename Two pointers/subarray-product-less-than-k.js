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

// 2 pointer approach O(n)-

var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let left = 0,
    count = 0,
    product = 1;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    count += right - left + 1;
  }
  return count;
};
