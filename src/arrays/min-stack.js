/*
  Min Stack

  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
  Implement the `MinStack` class:
  - MinStack() initializes the stack object.
  - void push(int val) pushes the element val onto the stack.
  - void pop() removes the element on the top of the stack.
  - int top() gets the top element of the stack.
  - int getMin() retrieves the minimum element in the stack.

  Example:
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin(); // return -3
  minStack.pop();
  minStack.top();    // return 0
  minStack.getMin(); // return -2
*/

const MinStack = function () {
  this.arr = [];
  this.currentMin = null;
};

MinStack.prototype = {
  push(value) {
    if (this.currentMin === null) {
      this.currentMin = value;
    } else if (this.currentMin > value) {
      this.currentMin = value;
    }

    this.arr.push(value);
  },

  pop() {
    const item = this.arr.pop();

    if (item === this.currentMin) {
      this.currentMin = this.arr.reduce(
        (acc, cur) => Math.min(acc, cur),
        Infinity
      );
    }

    return item;
  },

  top() {
    return this.arr[this.arr.length - 1];
  },

  getMin() {
    return this.currentMin;
  },
};

const assert = require('assert');
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
assert.equal(minStack.getMin(), -3);
minStack.pop();
assert.equal(minStack.top(), 0);
assert.equal(minStack.getMin(), -2);
