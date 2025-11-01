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
