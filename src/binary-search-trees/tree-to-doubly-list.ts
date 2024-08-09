/*
  Tree To Doubly List

  Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
  You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list.
  For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

  Example:
  Input: [4,2,5,1,3]
  Output: 1<->2<->3<->4<->5
*/

import { deepStrictEqual } from 'assert';

type _Node = {
  value: number;
  left: _Node | null;
  right: _Node | null;
};

function treeToDoublyList(root: _Node | null): _Node | null {
  if (!root) {
    return root;
  }

  const arr = convertToArray(root);
  const head = arr[0];

  if (arr.length === 1) {
    head.left = head;
    head.right = head;
    return head;
  }

  head.left = arr.at(-1) as _Node;
  head.right = arr[1];

  for (let i = 1; i < arr.length; i++) {
    arr[i].left = arr[i - 1];

    if (i === arr.length - 1) {
      arr[i].right = arr[0];
    } else {
      arr[i].right = arr[i + 1];
    }
  }

  return head;
}

function convertToArray(root: _Node | null): Array<_Node> {
  const arr: Array<_Node> = [];

  (function traverse(node: _Node | null) {
    if (!node) {
      return;
    }

    arr.push(node);

    traverse(node.left);
    traverse(node.right);
  })(root);

  return arr.sort((a, b) => a.value - b.value);
}

const root: _Node = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};

const node1: _Node = { value: 1, left: null, right: null };
const node2: _Node = { value: 2, left: null, right: null };
const node3: _Node = { value: 3, left: null, right: null };
const node4: _Node = { value: 4, left: null, right: null };
const node5: _Node = { value: 5, left: null, right: null };

node1.left = node5;
node1.right = node2;

node2.left = node1;
node2.right = node3;

node3.left = node2;
node3.right = node4;

node4.left = node3;
node4.right = node5;

node5.left = node4;
node5.right = node1;

deepStrictEqual(treeToDoublyList(root), node1);
