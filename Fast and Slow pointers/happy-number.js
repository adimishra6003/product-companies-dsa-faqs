// Naive approach - use a seen set, if a number repeats, cycle is detected return false
// TC => O(logn), SC => O(logn)

var calcSquaredSum = (n) => {
  let d = 0,
    sum = 0;
  while (n) {
    d = n % 10;
    sum += d * d;
    n = Math.floor(n / 10);
  }

  return sum;
};

var isHappy = function (n) {
  let seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);
    n = calcSquaredSum(n);
  }

  return true;
};

// Fast and Slow pointer approach
// TC => O(logn), SC => O(1)

var calcSquaredSum = (n) => {
  let d = 0,
    sum = 0;
  while (n) {
    d = n % 10;
    sum += d * d;
    n = Math.floor(n / 10);
  }

  return sum;
};

var isHappy = function (n) {
  let slow = n;
  let fast = n;
  while (fast !== 1) {
    slow = calcSquaredSum(slow);
    fast = calcSquaredSum(calcSquaredSum(fast));
    if (fast !== 1 && fast == slow) return false;
  }

  return true;
};
