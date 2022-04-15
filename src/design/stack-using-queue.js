/*
  Stack Using Queue

  Implement the Stack class:
  - void push(int x) Pushes element x to the top of the stack.
  - int pop() Removes the element on the top of the stack and returns it.
  - int top() Returns the element on the top of the stack.
  - boolean empty() Returns true if the stack is empty, false otherwise.

  You must use only standard operations of a queue.
*/

var Stack = function () {
  this.front = [];
  this.back = [];
};

Stack.prototype.push = function (x) {
  this.back.push(x);

  while (this.front.length) {
    this.back.push(this.front.shift());
  }

  while (this.back.length) {
    this.front.push(this.back.shift());
  }
};

Stack.prototype.pop = function () {
  return this.front.shift();
};

Stack.prototype.top = function () {
  return this.front[0];
};

Stack.prototype.isEmpty = function () {
  return !this.front.length;
};

const assert = require('assert');
const stack = new Stack();
stack.push(1);
stack.push(2);
assert.ok(!stack.isEmpty());
assert.equal(stack.top(), 2);
assert.equal(stack.pop(), 2);
assert.equal(stack.pop(), 1);
assert.ok(stack.isEmpty());
