// Naive approach - Generate all substrings and check length of all, use set for checking if a character repeats, if it does move i++
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
// 2 pointer approach. The window right-left+1 always contains unique elements, we check with the help of Set
// Tc => O(n)

var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let left = 0;
  let seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
