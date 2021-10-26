/*
  Flatten 2d Vector

  Design an iterator to flatten a 2D vector. It should support the `next` and `hasNext` operations.
  Implement the Vector2D class:
  - Vector2D(int[][] vec) initializes the object with the 2D vector vec.
  - next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
  - hasNext() returns true if there are still some elements in the vector, and false otherwise.

  Example:
  Input: [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]

  Output:
  Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
  vector2D.next();    // return 1
  vector2D.next();    // return 2
  vector2D.next();    // return 3
  vector2D.hasNext(); // return True
  vector2D.hasNext(); // return True
  vector2D.next();    // return 4
  vector2D.hasNext(); // return False
*/

function flat(arr) {
  const output = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      output.push(...flat(item));
    } else {
      output.push(item);
    }
  }

  return output;
}

/**
 * @param {number[][]} vec
 */
var Vector2D = function (vec) {
  this.list = flat(vec);
  this.idx = 0;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
  if (!this.hasNext()) {
    return null;
  }

  const result = this.list[this.idx];
  this.idx++;

  return result;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  return this.list[this.idx] !== undefined;
};

const assert = require('assert');

const vector2D = new Vector2D([[1, 2], [3], [4]]);
assert.equal(vector2D.next(), 1);
assert.equal(vector2D.next(), 2);
assert.equal(vector2D.next(), 3);
assert.ok(vector2D.hasNext());
assert.ok(vector2D.hasNext());
assert.equal(vector2D.next(), 4);
assert.ok(!vector2D.hasNext());
