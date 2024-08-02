/*
  Colorful Numbers

  Given a number, find out whether its colorful or not.
  When in a given number, product of every digit of a sub-sequence are different. That number is called Colorful Number.

  Example:
  Input: 3245
  Output: true
*/

function colorfulNumbers(n) {
  const memo = new Set();
  const numbers = ('' + n).split('').map(Number);

  for (const number of numbers) {
    if (memo.has(number)) {
      return false;
    }

    memo.add(number);
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const subset = numbers.slice(i, j + 1);
      const product = subset.reduce((acc, value) => acc * value, 1);

      if (memo.has(product)) {
        return false;
      }

      memo.add(product);
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(colorfulNumbers(3245));
assert.ok(colorfulNumbers(23));
assert.ok(colorfulNumbers(987));

assert.ok(!colorfulNumbers(11));
assert.ok(!colorfulNumbers(22));
assert.ok(!colorfulNumbers(326));
