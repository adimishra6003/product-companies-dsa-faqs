// Recursive approach
// TC => O(n)
// SC => O(n)

function preorderRecursive(node) {
  if (!node) return;
  console.log(node.val);
  preorderRecursive(node.left);
  preorderRecursive(node.right);
}

// Iterative approach
// TC => O(n)
// SC => O(n) in case of skewed tree

function preorderIterative(node) {
  let curr = node,
    stack = [];

  while (curr || stack.length) {
    while (curr) {
      console.log(curr.val);
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
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

preorderRecursive(root);
preorderIterative(root);
