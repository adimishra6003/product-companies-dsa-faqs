// Simple count and find middle node approach
// TC => O(n)

var middleNode = function (head) {
  let countOfNodes = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    countOfNodes++;
  }
  let mid = Math.floor(countOfNodes / 2);

  while (mid) {
    head = head.next;
    mid--;
  }

  return head;
};

// Fast and Slow pointer approach (faster and cleaner)

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
