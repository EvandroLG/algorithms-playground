/*
  Custom Stack

  Design a stack which supports the following operations.
  Implement the CustomStack class:
  - CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
  - void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
  - int pop() Pops and returns the top of stack or -1 if the stack is empty.
  - void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.
*/

function CustomStack(maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
}

CustomStack.prototype.push = function (x) {
  if (this.stack.length === this.maxSize) {
    return;
  }

  this.stack.push(x);
};

CustomStack.prototype.pop = function () {
  return this.stack.pop() ?? -1;
};

CustomStack.prototype.increment = function (k, val) {
  const size = k > this.stack.length ? this.stack.length : k;

  for (let i = 0; i < size; i++) {
    this.stack[i] += val;
  }
};

const assert = require('assert');

const stack = new CustomStack(3);
stack.push(1);
stack.push(2);
assert.equal(stack.pop(), 2);
stack.push(2);
stack.push(3);
stack.push(4);
stack.increment(5, 100);
assert.equal(stack.pop(), 103);
assert.equal(stack.pop(), 102);
assert.equal(stack.pop(), 101);
assert.equal(stack.pop(), -1);
