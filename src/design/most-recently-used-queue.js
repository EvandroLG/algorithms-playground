/*
  Most Recently Used Queue

  Design a queue-like data structure that moves the most recently used element to the end of the queue.

  Implement the MRUQueue class:
  - MRUQueue(int n) constructs the MRUQueue with n elements: [1,2,3,...,n].
  - int fetch(int k) moves the kth element (1-indexed) to the end of the queue and returns it.
*/

function MRUQueue(n) {
  this.queue = Array(n)
    .fill(0)
    .reduce((acc, _, idx) => {
      acc.push(idx + 1);
      return acc;
    }, []);
}

MRUQueue.prototype.fetch = function (k) {
  const item = this.queue.splice(k - 1, 1).at(0);
  this.queue.push(item);

  return item;
};

const assert = require('assert');
const queue = new MRUQueue(8);
assert.equal(queue.fetch(1), 1);
assert.equal(queue.fetch(6), 7);
