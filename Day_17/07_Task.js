class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);

console.log(root);
