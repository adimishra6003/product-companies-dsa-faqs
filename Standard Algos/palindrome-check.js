// Iterative approach
// TC => O(n) SC => O(1)

function palindromeCheckIterative(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(palindromeCheckIterative("abcba"));
