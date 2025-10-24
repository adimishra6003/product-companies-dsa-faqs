// Naive approach using extra array

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
