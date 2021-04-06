/*
  Balanced Brakets

  Write a function that takes in a string made up of brackets ((, [, {, ), ], and }) and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.
  A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(]).

  Sample Input
  string = "([])(){}(())()()"

  Sample Output
  true // it's balanced
*/

function balancedBrakets(str) {
  const stack = [];
  const hash = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const c of str) {
    if (Object.keys(hash).includes(c)) {
      stack.push(c);
      continue;
    }

    if (Object.values(hash).includes(c) && hash[stack.pop()] !== c) {
      return false;
    }
  }

  return stack.length === 0;
}

const assert = require('assert');

assert.ok(balancedBrakets('([])(){}(())()()'));
assert.ok(!balancedBrakets('()[]{}{'));
