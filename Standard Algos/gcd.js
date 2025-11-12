// Iterative Approach
// TC => O(log(min(a, b))) because in each step b becomes the reminder of a%b which reduces quickly
// SC => O(1)

function gcdIterative(a, b) {
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcdIterative(6, 9));

// Recursive Approach
// TC => O(log(min(a, b))) because in each step b becomes the reminder of a%b which reduces quickly
//  SC => O(log(min(a, b))) because call stacks are created once at each step

function gcdRecursive(a, b) {
  if (b === 0) return a;

  return gcdRecursive(b, a % b);
}

console.log(gcdRecursive(10, 25));
