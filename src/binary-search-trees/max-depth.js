"use strict";
/*
  Max Depth

  Given the root of a binary tree, return its maximum depth.
  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Example:
  Input: [3,9,20,null,null,15,7]
  Output: 3
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    var max = 1;
    if (root.left) {
        max = Math.max(max, 1 + maxDepth(root.left));
    }
    if (root.right) {
        max = Math.max(max, 1 + maxDepth(root.right));
    }
    return max;
}
var tree = {
    value: 3,
    left: {
        value: 9,
        left: null,
        right: null,
    },
    right: {
        value: 20,
        left: {
            value: 15,
            left: null,
            right: null,
        },
        right: {
            value: 7,
            left: null,
            right: null,
        },
    },
};
(0, assert_1.strictEqual)(maxDepth(tree), 3);
