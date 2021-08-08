/*
  Hashmap

  Design a HashMap without using any built-in hash table libraries.
  Implement the MyHashMap class:
  - MyHashMap() initializes the object with an empty map.
  - void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
  - int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
  - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

  Input
  ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
  [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]

  Output
  [null, null, null, 1, -1, null, 1, null, -1]
*/

function hashify(key, size) {
  return key % size;
}

class HashMap {
  constructor() {
    this.size = 1000;
    this.buckets = new Array(this.size).fill([]);
  }

  put(key, value) {
    const hashKey = hashify(key, this.size);
    const item = this.buckets[hashKey];
    const found = item.find((pair) => pair[0] === key);

    if (found) {
      found[1] = value;
    } else {
      item.push([key, value]);
    }
  }

  get(key) {
    const hashKey = hashify(key, this.size);
    const item = this.buckets[hashKey];
    const found = item.find((pair) => pair[0] === key);

    if (!found) {
      return -1;
    }

    return found[1];
  }

  remove(key) {
    const hashKey = hashify(key, this.size);
    const item = this.buckets[hashKey];
    const idx = item.findIndex((pair) => pair[0] === key);

    if (idx === -1) {
      return;
    }

    item.splice(idx, 1);
  }
}

const assert = require('assert');

const map = new HashMap();
const actions = [
  {
    method: 'put',
    params: [1, 2],
  },
  {
    method: 'get',
    params: [1],
    expected: 2,
  },
  {
    method: 'get',
    params: [2],
    expected: -1,
  },
  {
    method: 'put',
    params: [2, 10],
  },
  {
    method: 'get',
    params: [2],
    expected: 10,
  },
  {
    method: 'put',
    params: [2, 5],
  },
  {
    method: 'get',
    params: [2],
    expected: 5,
  },
  {
    method: 'remove',
    params: [1],
  },
  {
    method: 'get',
    params: [1],
    expected: -1,
  },
];

for (const action of actions) {
  const result = map[action.method](...action.params);

  if (action.expected) {
    assert.equal(result, action.expected);
  }
}
