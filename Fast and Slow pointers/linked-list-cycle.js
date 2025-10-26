// Naive approach using extra space (set)
// TC => O(n)

var hasCycle = function (head) {
  let seen = new Set();

  while (head) {
    if (seen.has(head)) return true;
    seen.add(head);
    head = head.next;
  }

  return false;
};
