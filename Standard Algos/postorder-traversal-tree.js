// Recursive
// TC => O(n) SC => O(n)

function postorderRecursive(node) {
  if (!node) return;
  postorderRecursive(node.left);
  postorderRecursive(node.right);
  console.log(node.val);
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

postorderRecursive(root);
