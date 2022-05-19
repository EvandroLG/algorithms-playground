/*
  Final Value Of Variable

  There is a programming language with only four operations and one variable X:
  - ++X and X++ increments the value of the variable X by 1.
  - --X and X-- decrements the value of the variable X by 1.
  Initially, the value of X is 0.

  Example:
  Input: ["--X","X++","X++"]
*/

function finalValueOfVariable(operations) {
  let result = 0;

  for (const operation of operations) {
    if (operation.startsWith('--') || operation.endsWith('--')) {
      result--;
    } else {
      result++;
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(finalValueOfVariable(['--X', 'X++', 'X++']), 1);
