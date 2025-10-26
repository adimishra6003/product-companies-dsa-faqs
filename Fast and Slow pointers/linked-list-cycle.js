// Naive approach using extra space (set)
// TC => O(n), SC => O(n)

var hasCycle = function (head) {
  let seen = new Set();

  while (head) {
    if (seen.has(head)) return true;
    seen.add(head);
    head = head.next;
  }

  return false;
};

// Fast and slow pointer approach (Floyd's cycle detection algo)
// TC => O(n), SC => O(1)

var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};
