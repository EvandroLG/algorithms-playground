/*
  Design Circular Queue

  Design your implementation of the circular queue.
  The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle.
  It is also called "Ring Buffer".

  Implementation the MyCircularQueue class:
  - MyCircularQueue(k) Initializes the object with the size of the queue to be k.
  - int Front() Gets the front item from the queue. If the queue is empty, return -1.
  - int Rear() Gets the last item from the queue. If the queue is empty, return -1.
  - boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
  - boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
  - boolean isEmpty() Checks whether the circular queue is empty or not.
  - boolean isFull() Checks whether the circular queue is full or not.

  You must solve the problem without using the built-in queue data structure in your programming language.
*/

const CircularQueue = function (k) {
  this.max = k;
  this.arr = [];
};

CircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }

  this.arr.push(value);

  return true;
};

CircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  this.arr.reverse().pop();
  this.arr.reverse();

  return true;
};

CircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr.at(0);
};

CircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr.at(-1);
};

CircularQueue.prototype.isEmpty = function () {
  return !this.arr.length;
};

CircularQueue.prototype.isFull = function () {
  return this.arr.length === this.max;
};

const assert = require('assert');
const queue = new CircularQueue(3);

assert.ok(queue.enQueue(1));
assert.ok(queue.enQueue(2));
assert.ok(queue.enQueue(3));
assert.ok(!queue.enQueue(4));
assert.equal(queue.Rear(), 3);
assert.ok(queue.isFull());
