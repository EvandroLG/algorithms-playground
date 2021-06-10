/*
  ArrayList
  Write an ArrayList class using Object. Your ArrayList should have the following methods: get, push, pop and delete.
*/

class ArrayList {
  constructor() {
    this.length = 0;
    this.items = {};
  }

  get(index) {
    if (this.items.hasOwnProperty(index)) {
      return this.items[index];
    }
  }

  push(value) {
    this.items[this.length++] = value;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    const value = this.items[--this.length];
    delete this.items[this.length];

    return value;
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      return;
    }

    const value = this.items[index];
    let currentIndex = index;

    while (this.items.hasOwnProperty(currentIndex + 1)) {
      this.items[currentIndex] = this.items[++currentIndex];
    }

    delete this.items[this.length - 1];
    this.length--;

    return value;
  }
}

const assert = require('assert');

const arr = new ArrayList();
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(5);

assert.equal(arr.length, 4);
assert.equal(arr.pop(), 5);
assert.equal(arr.length, 3);
assert.equal(arr.remove(0), 10);
assert.equal(arr.length, 2);
assert.equal(arr.get(0), 20);
assert.equal(arr.get(1), 30);
assert.equal(arr.get(2), undefined);
