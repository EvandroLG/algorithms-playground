/*
  Combination Iterator

  Design the CombinationIterator class:
  - CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
  - next() Returns the next combination of length combinationLength in lexicographical order.
  - hasNext() Returns true if and only if there exists a next combination.
*/

function CombinationIterator(characters, combinationLength) {
  this.size = characters.length;
  this.combinations = [];

  const backtrack = (start = 0, result = []) => {
    if (result.length === combinationLength) {
      this.combinations.push(result.join(''));
    } else {
      for (let i = start; i < this.size; i++) {
        const c = characters[i];
        result.push(c);
        backtrack(i + 1, result.slice());
        result.pop();
      }
    }
  };

  backtrack();
  this.combinations.reverse();
}

CombinationIterator.prototype.next = function () {
  return this.combinations.pop();
};

CombinationIterator.prototype.hasNext = function () {
  return !!this.combinations.length;
};

const assert = require('assert');
const it = new CombinationIterator('abc', 2);
assert.equal(it.next(), 'ab');
assert.ok(it.hasNext());
assert.equal(it.next(), 'ac');
assert.ok(it.hasNext());
assert.equal(it.next(), 'bc');
assert.ok(!it.hasNext());
