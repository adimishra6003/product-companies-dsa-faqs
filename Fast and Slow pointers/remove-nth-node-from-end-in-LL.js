// Naive approach using counting (TC is same as Fast and slow pointer, but it needs 2 passes)
// TC => O(n), SC => O(n)

var removeNthFromEnd = function (head, n) {
  let curr = head;
  let count = 0;

  while (curr) {
    count++;
    curr = curr.next;
  }

  if (count == n) return head.next; // If first node is deleted, return head.next

  let res = count - n - 1;
  curr = head;
  while (res--) {
    curr = curr.next;
  }

  curr.next = curr.next.next; // When curr is pointing at the node before the node to be deleted, make it's next to be next to next

  return head;
};

// Fast and Slow pointer approach, we use dummy node here to counter the cases where the head node may be removed
// TC => O(n) Single pass, SC => O(1)

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};
