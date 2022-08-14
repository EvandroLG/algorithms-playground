/*
  Remove Outermost Parentheses

  A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
  - For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

  A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
  Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

  Example:
  Input: "(()())(())(()(()))"
  Output: "()()()()(())"
*/

function removeOutermostParentheses(s) {
  let counter = 0;
  const output = [];

  for (const c of s) {
    if (c === '(') {
      if (counter > 0) {
        output.push(c);
      }

      counter++;
    } else {
      if (counter > 1) {
        output.push(c);
      }

      counter--;
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(removeOutermostParentheses('(()())(())(()(()))'), '()()()()(())');
