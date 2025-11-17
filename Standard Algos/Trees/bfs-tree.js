// Iterative
// TC => O(n) SC => O(n)

function bfsTree(node) {
  if (!node) return;

  let queue = [node];
  while (queue.length) {
    let curr = queue.shift();
    console.log(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
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

bfsTree(root);
