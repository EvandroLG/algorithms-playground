/*
  Lowest Common Ancestor V2

  Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
  Each node will have a reference to its parent node.

  Example:
  Input: [3,5,1,6,2,0,8,null,null,7,4], 5, 1
  Output: 3
*/

function lowestCommonAncestorV2(p, q) {
  const pathP = traverse(p);
  const pathQ = traverse(q);

  for (const node of pathP) {
    if (pathQ.has(node)) {
      return node;
    }
  }

  return null;
}

function traverse(node, path = new Set()) {
  if (!node) {
    return path;
  }

  path.add(node);

  return traverse(node.parent, path);
}

const assert = require('assert');
const root = {
  value: 3,
  parent: null,
};

const p = {
  value: 5,
  parent: root,
};

const q = {
  value: 1,
  parent: root,
};

assert.equal(lowestCommonAncestorV2(p, q).value, 3);
