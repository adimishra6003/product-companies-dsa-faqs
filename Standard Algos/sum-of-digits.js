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
