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
