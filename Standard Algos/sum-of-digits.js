// Iterative approach
// TC => O(n) SC => O(1)

function sumOfDigitsIterative(n) {
  let sum = 0;
  while (n / 10) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumOfDigitsIterative(1236));

// Recursive approach
// TC => O(n) SC => O(n) because of Call stack

function sumOfDigitsRecursive(n) {
  if (n == 0) return 0;

  return (n % 10) + sumOfDigitsRecursive(Math.floor(n / 10));
}

console.log(sumOfDigitsRecursive(1236));

// No DP solution to this because no overlapping subproblems here
