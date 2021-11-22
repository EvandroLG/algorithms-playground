/*
  Queue Using Stacks

  Implement a first in first out (FIFO) queue using only two stacks.
  The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

  Implement the MyQueue class:
  - void push(int x) Pushes element x to the back of the queue.
  - int pop() Removes the element from the front of the queue and returns it.
  - int peek() Returns the element at the front of the queue.
  - boolean empty() Returns true if the queue is empty, false otherwise.

*/

function Stack() {
  this.stack = [];
}

Stack.prototype = {
  push(value) {
    this.stack.push(value);
  },

  pop() {
    return this.stack.pop();
  },

  peek() {
    return this.stack[this.stack.length - 1];
  },

  size() {
    return this.stack.length;
  },
};

function Queue() {
  this.first = new Stack();
  this.last = new Stack();
}

Queue.prototype = {
  push(value) {
    while (this.last.size()) {
      this.first.push(this.last.pop());
    }

    this.first.push(value);

    while (this.first.size()) {
      this.last.push(this.first.pop());
    }
  },

  pop() {
    return this.last.pop();
  },

  peek() {
    return this.last.peek();
  },

  isEmpty() {
    return !this.last.size();
  },
};

const assert = require('assert');
const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
assert.equal(queue.pop(), 1);
assert.equal(queue.peek(), 2);
assert.ok(!queue.isEmpty());
assert.equal(queue.pop(), 2);
assert.equal(queue.pop(), 3);
assert.ok(queue.isEmpty());
