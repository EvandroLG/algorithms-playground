/*
  Find Elements

  Given a binary tree with the following rules:
  1. root.val == 0
  2. If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
  3. If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
  Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.
  Implement the FindElements class:
  - FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
  - bool find(int target) Returns true if the target value exists in the recovered binary tree.
*/

class FindElements {
  #memo = new Set();

  constructor(root) {
    this.#memo.add(0);
    root.val = 0;
    this.#traverse(root);
  }

  #traverse(node) {
    const value = node.val;

    if (node.left) {
      node.left.val = 2 * value + 1;
      this.#memo.add(node.left.val);
      this.#traverse(node.left);
    }

    if (node.right) {
      node.right.val = 2 * value + 2;
      this.#memo.add(node.right.val);
      this.#traverse(node.right);
    }
  }

  find(target) {
    return this.#memo.has(target);
  }
}

const assert = require('assert');
const tree = {
  val: -1,
  right: {
    val: -1,
  },
};

const obj = new FindElements(tree);

assert.ok(!obj.find(1));
assert.ok(obj.find(2));
