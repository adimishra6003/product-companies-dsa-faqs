// Recursive
// TC => O(n) SC => O(n)

function postorderRecursive(node) {
  if (!node) return;
  postorderRecursive(node.left);
  postorderRecursive(node.right);
  console.log(node.val);
}

// Iterative
// TC => O(n) SC => O(n)

function postorderIterative(node) {
  if (!node) return;
  let st1 = [node],
    st2 = [];

  while (st1.length) {
    let curr = st1.pop();
    st2.push(curr);

    if (curr.left) st1.push(curr.left);
    if (curr.right) st1.push(curr.right);
  }

  while (st2.length) {
    console.log(st2.pop().val);
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

postorderRecursive(root);
postorderIterative(root);
