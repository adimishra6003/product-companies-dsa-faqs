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
  if (n == 1) return 1;

  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));
