/*
  Postorder

  Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
  Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

  Example:
  Input: [1,null,3,2,4,null,5,6]
  Output: [5,6,3,2,4,1]
*/

function postorder(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    for (const child of node.children) {
      traverse(child);
    }

    output.push(node.value);
  })(root);

  return output;
}

const assert = require('assert');
const root = {
  value: 1,
  children: [
    {
      value: 3,
      children: [
        { value: 5, children: [] },
        { value: 6, children: [] },
      ],
    },
    { value: 2, children: [] },
    { value: 4, children: [] },
  ],
};

assert.deepEqual(postorder(root), [5, 6, 3, 2, 4, 1]);
