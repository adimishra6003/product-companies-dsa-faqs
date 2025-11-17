// Recursive approach
// TC => O(n) SC => O(n)

function heightRecursive(node) {
  if (!node) return 0;

  return 1 + Math.max(heightRecursive(node.left), heightRecursive(node.right));
}
// Iterative approach
// TC => O(n) SC => O(n)

function heightIterative(node) {
  if (!node) return 0;

  let q = [node];
  let height = 0;

  while (q.length) {
    let numberOfNodesInThisLevel = q.length;

    while (numberOfNodesInThisLevel--) {
      let curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    height++;
  }

  return height;
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

console.log(heightRecursive(root));
console.log(heightIterative(root));
