/*
  Time Map

  Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
  Implement the TimeMap class:
  - TimeMap() Initializes the object of the data structure.
  - void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
  - String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
*/

class TimeMap {
  constructor() {
    this.map = {};
  }

  set(key, value, timestamp) {
    if (!this.map.hasOwnProperty(key)) {
      this.map[key] = [];
    }

    this.map[key].push([value, timestamp]);
  }

  get(key, timestamp) {
    if (!this.map.hasOwnProperty(key)) {
      return '';
    }

    this.map[key].sort((a, b) => a[1] - b[1]);

    return search(this.map[key], timestamp);
  }
}

function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = '';

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle][1] === target) {
      return arr[middle][0];
    }

    if (arr[middle][1] < target) {
      result = arr[middle][0];
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result;
}

const assert = require('assert');
const time = new TimeMap();
time.set('key1', 'value1', 1);
assert.strictEqual(time.get('key1', 1), 'value1');
assert.strictEqual(time.get('key1', 3), 'value1');
time.set('key1', 'value2', 4);
assert.strictEqual(time.get('key1', 4), 'value2');
assert.strictEqual(time.get('key1', 10), 'value2');
