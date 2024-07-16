/*
  Get Directions

  You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n.
  You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.
  Find the shortest path starting from node s and ending at node t.
  Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'.
  Each letter indicates a specific direction:
  - 'L' means to go from a node to its left child node.
  - 'R' means to go from a node to its right child node.
  - 'U' means to go from a node to its parent node.
  Return the step-by-step directions of the shortest path from node s to node t.

  Example:
  Input: [5,1,2,3,null,6,4], 3, 6
  Output: 'UURL'
*/

function getDirections(root, startValue, destValue) {
  const [destinationPath] = findPath(root, destValue);
  const [startPath, startNode] = findPath(root, startValue);

  if (destinationPath.has(startNode)) {
    const path = buildPathFromStartNode(destinationPath, startNode, destValue);
    return path.join('');
  }

  const path = buildPathFromParentNode(destinationPath, startPath, destValue);
  return path.join('');
}

function buildPathFromParentNode(destinationSet, startSet, targetValue) {
  const startPath = Array.from(startSet);
  const path = [];
  let current = startPath.pop();

  while (!destinationSet.has(current)) {
    path.push('U');
    current = startPath.pop();
  }

  return [
    ...path,
    ...buildPathFromStartNode(destinationSet, current, targetValue),
  ];
}

function buildPathFromStartNode(set, startNode, targetValue) {
  let current = startNode;
  const path = [];

  while (current) {
    const left = current.left;
    const right = current.right;

    if (set.has(left)) {
      path.push('L');
      current = left;
    } else if (set.has(right)) {
      path.push('R');
      current = right;
    } else {
      break;
    }
  }

  return path;
}

function findPath(root, value) {
  let set = null;
  let lastNode = null;

  (function traverse(node, path) {
    if (!node) {
      return;
    }

    path.push(node);

    if (node.val === value) {
      set = new Set(path);
      lastNode = node;
      return;
    }

    traverse(node.left, path.slice());
    traverse(node.right, path.slice());
  })(root, []);

  return [set, lastNode];
}

const assert = require('assert');

const root = {
  val: 5,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};

assert.strictEqual(getDirections(root, 3, 6), 'UURL');
