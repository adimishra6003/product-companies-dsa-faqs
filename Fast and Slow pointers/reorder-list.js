// Naive approach using array
// TC => O(n), SC => O(n)

var reorderList = function (head) {
  if (!head) return null;

  let arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (i === j) break;
    arr[i].next = arr[j];
    i++;
    arr[j].next = arr[i];
    j--;
  }
  arr[i].next = null;
};

// Fast and Slow pointer approach -> Break the LL into 2 halves, reverse the second half and then join their nodes alternatively
// TC => O(n), SC => O(1)

var reorderList = function (head) {
  if (!head || !head.next) return head;

  let slow = head,
    fast = head;
  // Finding middle node
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reversing the second half
  let prev = null,
    curr = slow.next;
  slow.next = null; // Breaking the first half's connection
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // Rearranging the LL by taking one node from each LL alternatively

  let first = head,
    second = prev;
  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;

    first = tmp1;
    second = tmp2;
  }
};
