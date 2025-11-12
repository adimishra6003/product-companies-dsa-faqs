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

// Recursive approach
// TC => O(n) SC => O(n)

function palindromeCheckRecursive(s, left = 0, right = s.length - 1) {
  if (left === right) return true;

  if (s[left] !== s[right]) return false;

  return palindromeCheckRecursive(s, left + 1, right - 1);
}

console.log(palindromeCheckRecursive("abcba"));
