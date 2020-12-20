/*
  MinStack
  How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element?
  Push, pop and min should all operate in O(1) time.
*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    let newMin = value;

    if (this.minStack.length) {
      const lastMin = this.minStack[this.minStack.length - 1];
      newMin = Math.min(lastMin, newMin);
    }

    console.log(this.minStack);

    this.minStack.push(newMin);
    this.stack.push(value);
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}

const assert = require('assert');

const stack = new MinStack();
stack.push(10);
stack.push(3);
stack.push(5);
stack.push(15);
stack.push(2);
stack.push(8);

assert.equal(stack.min(), 2);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

assert.equal(stack.min(), 3);
