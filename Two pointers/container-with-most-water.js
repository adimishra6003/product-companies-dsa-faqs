/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  let i = 0,
    j = height.length - 1;

  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    ans = Math.max(ans, area);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return ans;
};
