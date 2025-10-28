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
