/*
  Minimum Remove To Make Valid

  Given a string s of '(' , ')' and lowercase English characters.
  Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

  Example:
  Input: 'lee(t(c)o)de)'
  Output: 'lee(t(c)o)de'
*/

function minimumRemoveToMakeValid(str) {
  const stack = [];
  const fragments = str.split('');

  for (let i = 0; i < fragments.length; i++) {
    const c = fragments[i];

    if (c === '(') {
      stack.push(true);
      continue;
    }

    if (c === ')' && !stack.pop()) {
      fragments[i] = '';
    }
  }

  if (fragments.length) {
    while (stack.length) {
      stack.pop();
      const index = fragments.lastIndexOf('(');
      fragments[index] = '';
    }
  }

  return fragments.join('');
}

const assert = require('assert');
assert.equal(minimumRemoveToMakeValid('lee(t(c)o)de'), 'lee(t(c)o)de');
