"use strict";
/*
  Tree To Doubly List

  Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
  You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list.
  For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

  Example:
  Input: [4,2,5,1,3]
  Output: 1<->2<->3<->4<->5
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function treeToDoublyList(root) {
    if (!root) {
        return root;
    }
    var arr = convertToArray(root);
    var head = arr[0];
    if (arr.length === 1) {
        head.left = head;
        head.right = head;
        return head;
    }
    head.left = arr.at(-1);
    head.right = arr[1];
    for (var i = 1; i < arr.length; i++) {
        arr[i].left = arr[i - 1];
        if (i === arr.length - 1) {
            arr[i].right = arr[0];
        }
        else {
            arr[i].right = arr[i + 1];
        }
    }
    return head;
}
function convertToArray(root) {
    var arr = [];
    (function traverse(node) {
        if (!node) {
            return;
        }
        arr.push(node);
        traverse(node.left);
        traverse(node.right);
    })(root);
    return arr.sort(function (a, b) { return a.value - b.value; });
}
var root = {
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
var node1 = { value: 1, left: null, right: null };
var node2 = { value: 2, left: null, right: null };
var node3 = { value: 3, left: null, right: null };
var node4 = { value: 4, left: null, right: null };
var node5 = { value: 5, left: null, right: null };
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
(0, assert_1.deepStrictEqual)(treeToDoublyList(root), node1);
