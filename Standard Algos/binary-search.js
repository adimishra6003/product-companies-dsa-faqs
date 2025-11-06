// Binary search only works if array is sorted
// TC => O(logn) we half the array in each step

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target == nums[mid]) return mid;
    else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 4, 6, 77, 80], 20)); // -1
console.log(binarySearch([1, 2, 4, 6, 77, 80], 77)); // 4
console.log(binarySearch([1, 2, 4, 6, 77, 80], 65)); // -1
