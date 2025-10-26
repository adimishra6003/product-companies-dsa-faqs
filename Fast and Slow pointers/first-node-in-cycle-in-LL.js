// Brute force approach using seen set
// TC => O(n)

var detectCycle = function (head) {
  if (!head) return null;

  let seen = new Set();

  while (head) {
    if (seen.has(head)) {
      return head;
    }
    seen.add(head);
    head = head.next;
  }

  return null;
};

//
