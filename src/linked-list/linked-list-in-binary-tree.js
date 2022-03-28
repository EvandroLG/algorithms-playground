/*
  Linked List In Binary Tree

  Given a binary tree root and a linked list with head as the first node.
  Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.
  In this context downward path means a path that starts at some node and goes downwards.

  Example:
  Input: [4,2,8], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
  Output: true
*/

function linkedListInBinaryTree(head, root) {
  if (!head || !root) {
    return false;
  }

  if (head.value === root.value && isSame(head, root)) {
    return true;
  }

  return (
    linkedListInBinaryTree(head, root.left) ||
    linkedListInBinaryTree(head, root.right)
  );
}

function isSame(head, root) {
  if (!head) {
    return true;
  }

  if (!root || root.value !== head.value) {
    return false;
  }

  return isSame(head.next, root.left) || isSame(head.next, root.right);
}

const assert = require('assert');

const linkedList = {
  value: 4,
  next: {
    value: 2,
    next: {
      value: 8,
    },
  },
};

const tree = {
  value: 1,
  left: {
    value: 4,
    right: {
      value: 2,
    },
  },
  right: {
    value: 4,
    left: {
      value: 2,
      right: {
        value: 8,
      },
    },
  },
};

assert.ok(linkedListInBinaryTree(linkedList, tree));
