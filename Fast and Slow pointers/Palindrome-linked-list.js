//  Naive approach using an array - simply store in an array and check if elements from the start and the end are equal
// TC => O(n) SC => O(n)

var isPalindrome = function (head) {
  let vals = new Array();

  while (head) {
    vals.push(head.val);
    head = head.next;
  }

  let left = 0,
    right = vals.length - 1;

  while (left < right) {
    if (vals[left] !== vals[right]) return false;

    left++;
    right--;
  }

  return true;
};

// Fast and Slow pointer approach without using set. First find the middle, then reverse from the middle, and then compare the first and second (reversed) half
// TC => O(n), SC => O(1)

var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let fast = head,
    slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let left = head,
    right = prev;

  while (right) {
    if (left.val !== right.val) return false;

    left = left.next;
    right = right.next;
  }

  return true;
};
