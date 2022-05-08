/*
  Peeking Iterator

  Design an iterator that supports the peek operation on an existing iterator in addition to the hasNext and the next operations.
  Implement the PeekingIterator class:
  - PeekingIterator(Iterator<int> nums) Initializes the object with the given integer iterator iterator.
  - int next() Returns the next element in the array and moves the pointer to the next element.
  - boolean hasNext() Returns true if there are still elements in the array.
  - int peek() Returns the next element in the array without moving the pointer.
*/

function PeekingIterator(iterator) {
  this.iterator = iterator;
  this.cache = [];
}

PeekingIterator.prototype.peek = function () {
  if (this.cache.length) {
    return this.cache[0];
  }

  const next = this.iterator.next();
  this.cache.push(next);

  return next;
};

PeekingIterator.prototype.next = function () {
  if (!this.cache.length) {
    return this.iterator.next();
  }

  return this.cache.shift();
};

PeekingIterator.prototype.hasNext = function () {
  if (this.cache.length) {
    return true;
  }

  return this.iterator.hasNext();
};

const assert = require('assert');

function Iterator(arr) {
  let idx = 0;

  this.next = () => arr[idx++];
  this.hasNext = () => idx < arr.length;
}

const iterator = new PeekingIterator(new Iterator([1, 2, 3]));
assert.equal(iterator.next(), 1);
assert.equal(iterator.peek(), 2);
assert.equal(iterator.next(), 2);
assert.equal(iterator.next(), 3);
assert.ok(!iterator.hasNext());
