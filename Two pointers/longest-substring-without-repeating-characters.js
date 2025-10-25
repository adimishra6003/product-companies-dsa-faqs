// Naive approach - Generate all substrings and check length of all, use set for checking if a character repeats.
// TC => O(n^2)

var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};
