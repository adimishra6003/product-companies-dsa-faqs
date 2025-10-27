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

// Fast slow pointer approach, when you get the point of collision of fast and slow pointer, start a new pointer
//  "entry" from head and keep slow and entry moving one step till they meet each other at the first node of
// the loop (It will always collide at the starting of loop, we can prove mathematically)

var detectCycle = function (head) {
  if (head == null || head.next == null) return null;

  let slow = head;
  let fast = head;
  let hasCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) return null;

  let entry = head;

  while (entry !== slow) {
    slow = slow.next;
    entry = entry.next;
  }

  return entry;
};
