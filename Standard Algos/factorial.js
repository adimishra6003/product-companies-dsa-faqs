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
