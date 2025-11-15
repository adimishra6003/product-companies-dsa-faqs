function height(node) {
  if (!node) return 0;

  return 1 + Math.max(height(node.left), height(node.right));
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

console.log(height(root));
