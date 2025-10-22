// Brute force approach O(nlogn)

var sortedSquares = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i] * nums[i]);
  }
  ans.sort((a, b) => a - b);

  return ans;
};

// Two pointer approach

var sortedSquares = function (nums) {
  let n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let pos = n - 1; // position to fill from the end

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }

  return result;
};
