// Recursive approach
// TC => O(n) every node is visited once
// SC => O(n) worst case due to recursion stack

function inorderRecursive(node) {
  if (!node) return;
  inorderRecursive(node.left);
  console.log(node.val);
  inorderRecursive(node.left);
}
