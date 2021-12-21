/*
  Bst Iterator

  Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

  - BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
  - boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
  - int next() Moves the pointer to the right, then returns the number at the pointer.
*/

function BstIterator(root) {
  const values = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    values.push(node.value);
    traverse(node.right);
  })(root);

  this.values = values;
}

BstIterator.prototype = {
  next() {
    return this.values.shift();
  },

  hasNext() {
    return !!this.values.length;
  },
};

const assert = require('assert');
const root = {
  value: 7,
  left: {
    value: 3,
  },
  right: {
    value: 15,
    left: {
      value: 9,
    },
    right: {
      value: 20,
    },
  },
};

const bst = new BstIterator(root);
assert.equal(bst.next(), 3);
assert.equal(bst.next(), 7);
assert.equal(bst.next(), 9);
assert.ok(bst.hasNext());
assert.equal(bst.next(), 15);
assert.equal(bst.next(), 20);
assert.ok(!bst.hasNext());
