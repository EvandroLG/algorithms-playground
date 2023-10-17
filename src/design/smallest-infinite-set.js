/*
  Smallest Infinite Set
*/

class SmallestInfiniteSet {
  #removedItems = new Set();

  popSmallest() {
    if (!this.#removedItems.has(1)) {
      this.#removedItems.add(1);
      return 1;
    }

    const sorted = Array.from(this.#removedItems).sort((a, b) => a - b);
    let idx = 0;

    for (const item of sorted) {
      if (item !== idx + 1) {
        this.#removedItems.add(idx + 1);
        return idx + 1;
      }

      idx++;
    }

    this.#removedItems.add(idx + 1);
    return idx + 1;
  }

  addBack(item) {
    this.#removedItems.delete(item);
  }
}

const assert = require('assert');
const set = new SmallestInfiniteSet();
set.addBack(2);
assert.equal(set.popSmallest(), 1);
assert.equal(set.popSmallest(), 2);
set.addBack(1);
assert.equal(set.popSmallest(), 1);
