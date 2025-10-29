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
  // find the middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse from the middle (watch this video if you want to know how to reverse - https://www.youtube.com/watch?v=auoTGovuo9A)
  let prev = null;
  while (slow) {
    let next = slow.next; // Temporarily store the next node into next so that on reversing the node does not lead to loosing the next node
    slow.next = prev; // Reverse the node
    prev = slow; // Move the prev pointer forward
    slow = next; // Move the slow pointer forward
  }
  // compare the first and second (reversed) half
  let left = head,
    right = prev;

  while (right) {
    if (left.val !== right.val) return false;

    left = left.next;
    right = right.next;
  }

  return true;
};
