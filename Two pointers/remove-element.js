// Naive approach using extra array
// TC - O(n)

var removeElement = function (nums, val) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newArr.push(nums[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i];
  }

  return newArr.length;
};

// 2 pointer approach without using extra space
//TC - O(n)

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
