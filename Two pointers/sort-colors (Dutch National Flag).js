// Simple approach (Counting approach)
// TC => O(n)

var sortColors = function (nums) {
  let n = nums.length;
  let zeroCount = 0,
    oneCount = 0,
    twoCount = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) zeroCount++;
    if (nums[i] == 1) oneCount++;
    if (nums[i] == 2) twoCount++;
  }

  let i = 0;

  while (zeroCount--) nums[i++] = 0;
  while (oneCount--) nums[i++] = 1;
  while (twoCount--) nums[i++] = 2;
  return nums;
};

// Two pointer approach
// TC => O(n) but solves in single pass so preffered

// Imagine you have 3 sections:

// [ 0-zone | 1-zone | 2-zone ]

// Initially, everything is “unsorted,”
// and low, mid, and high mark the boundaries of these zones.

// As mid traverses:

// 0 → belongs to the left zone → swap with low

// 1 → belongs to middle zone → just move mid

// 2 → belongs to right zone → swap with high

// At the end, all colors fall into their respective zones automatically — no second pass needed.

var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};
