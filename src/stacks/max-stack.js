/*
  Max Stack

  Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.

  Implement the MaxStack class:
  - MaxStack() Initializes the stack object.
  - void push(int x) Pushes element x onto the stack.
  - int pop() Removes the element on top of the stack and returns it.
  - int top() Gets the element on the top of the stack without removing it.
  - int peekMax() Retrieves the maximum element in the stack without removing it.
  - int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.
*/

const MaxStack = function () {
  this.stack = [];
};

MaxStack.prototype = {
  push(x) {
    this.stack.push(x);
  },

  pop() {
    return this.stack.pop();
  },

  top() {
    return this.stack[this.stack.length - 1];
  },

  peekMax() {
    return this.stack
      .slice()
      .sort((a, b) => a - b)
      .at(-1);
  },

  popMax() {
    const max = this.peekMax();
    const index = this.stack.lastIndexOf(max);

    this.stack.splice(index, 1);

    return max;
  },
};

const assert = require('assert');

const stack = new MaxStack();
stack.push(5);
stack.push(1);
stack.push(5);

assert.equal(stack.top(), 5);
assert.equal(stack.popMax(), 5);
assert.equal(stack.top(), 1);
assert.equal(stack.peekMax(), 5);
assert.equal(stack.pop(), 1);
