/*
  Is Same Tree

  Given the roots of two binary trees p and q, write a function to check if they are the same or not.
  Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

  Input: p = [1,2,3], q = [1,2,3]
  Output: true
*/

function isSameTree(t1, t2) {
  if (!t1 && !t2) {
    return true;
  }

  if (!t1 || !t2) {
    return false;
  }

  if (t1.value !== t2.value) {
    return false;
  }

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}

const assert = require('assert');
const BinaryTree = require('./binary-tree');

const t1 = new BinaryTree(1);
t1.insert(2);
t1.insert(3);
t1.insert(4);

const t2 = new BinaryTree(1);
t2.insert(2);
t2.insert(3);
t2.insert(4);

assert.ok(isSameTree(t1, t1));
assert.ok(isSameTree(t1, t2));

t2.insert(5);
assert.ok(!isSameTree(t1, t2));
