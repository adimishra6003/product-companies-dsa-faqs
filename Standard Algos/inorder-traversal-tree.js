// Recursive approach
// TC => O(n) every node is visited once
// SC => O(n) worst case due to recursion stack

function inorderRecursive(node) {
  if (!node) return;
  inorderRecursive(node.left);
  console.log(node.val);
  inorderRecursive(node.right);
}

// Iterative approach (simulating recursion stack using stack data structure )
// TC => O(n) Every node is visited only once
// SC => O(n) in case of a skewed tree

function inorderIterative(node) {
  let curr = node,
    stack = [];

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    console.log(curr.val);
    curr = curr.right;
  }
}

// Testing these using a custom tree

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

inorderRecursive(root);
inorderIterative(root);
