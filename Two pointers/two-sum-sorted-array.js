// In sorted array, you can change the sum of two pointers (i at start and j at end) by i++ or j--, so keep doing this till you get the target number.
// To increase the sum -> i++
// To decrease the sum -> j--

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;

  while (numbers[i] + numbers[j] !== target) {
    if (numbers[i] + numbers[j] < target) {
      i++;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    }
  }

  return [i + 1, j + 1];
};
