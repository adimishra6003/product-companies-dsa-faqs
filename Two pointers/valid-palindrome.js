/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }

  return true;
};
