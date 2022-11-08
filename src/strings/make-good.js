/*
  Make Good

  Given a string s of lower and upper case English letters.
  A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
  - 0 <= i <= s.length - 2
  - s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
  To make the string good, you can choose two adjacent characters that make the string bad and remove them.
  You can keep doing this until the string becomes good.
  Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

  Example:
  Input: "abBAcC"
  Output: ""
*/

function makeGood(s) {
  const fragments = s.split('');
  let p1 = 0;
  let p2 = 1;

  while (p2 < fragments.length) {
    const c1 = fragments[p1];
    const c2 = fragments[p2];

    if (isAdjacent(c1, c2)) {
      fragments.splice(p1, 2);

      if (p1 >= 1) {
        p1--;
        p2--;
      }
    } else {
      p1++;
      p2++;
    }
  }

  return fragments.join('');
}

function isAdjacent(c1, c2) {
  if (isLowerCase(c1) && isLowerCase(c2)) {
    return false;
  }

  if (isUpperCase(c1) && isUpperCase(c2)) {
    return false;
  }

  return c1.toLowerCase() === c2.toLowerCase();
}

function isUpperCase(c) {
  return !isLowerCase(c);
}

function isLowerCase(c) {
  return c === c.toLowerCase();
}

const assert = require('assert');
assert.equal(makeGood('abBAcC'), '');
