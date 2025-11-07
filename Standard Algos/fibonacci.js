// Fibonacci iterative approach
// TC => O(n), SC=> O(1)

function fibonacciIterative(n) {
  if (n < 2) return n;

  let prev = 0,
    curr = 1,
    next;

  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
}

console.log(fibonacciIterative(6));

// Recursive approach
// TC => O(2^n), SC => O(n) due to call stack

function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));

// Recursive with memoization
// TC => O(n), SC => O(n) due to call stack and memo map

function fibonacciMemoized(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n < 2) return n;

  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemoized(6));
