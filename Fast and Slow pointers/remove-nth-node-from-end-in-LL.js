// Naive approach using counting
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
