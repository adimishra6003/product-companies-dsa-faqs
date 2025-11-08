// Iterative approach
// TC => O(n) SC => O(1)

function factorialIterative(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans *= i;
  }

  return ans;
}

console.log(factorialIterative(5));

// Recursive approach
// TC => O(n), SC=> O(2^n)

function factorialRecursive(n) {
  if (n == 0 || n == 1) return 1;

  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));

// Recursive with memoization
// TC => O(n), SC=> O(n) due to memo and stack memory

function factorialMemoized(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n == 0 || n == 1) return 1;

  memo[n] = n * factorialMemoized(n - 1);
  return memo[n];
}

console.log(factorialMemoized(5));
