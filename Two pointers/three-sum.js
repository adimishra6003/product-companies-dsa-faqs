// Naive approach O(n^3)

var threeSum = function (nums) {
  let n = nums.length;
  let res = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          res.add(
            JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => a - b))
          );
        }
      }
    }
  }

  return Array.from(res).map(JSON.parse);
};

// 2 pointer approach O(n^2)

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [],
    sum = 0;
  let n = nums.length;

  let left, right;
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    left = i + 1;
    right = n - 1;

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate left & right values
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
