/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let temp;
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    // swapping logic
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
};
