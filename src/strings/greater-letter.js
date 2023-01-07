/*
  Greater Letter

  Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s.
  The returned letter should be in uppercase. If no such letter exists, return an empty string.
  An English letter b is greater than another letter a if b appears after a in the English alphabet.

  Example:
  Input: 'arRAzFif'
  Output: 'R'
*/

function greaterLetter(s) {
  const lower = new Set();
  const upper = new Set();

  for (const c of s) {
    if (isLower(c)) {
      lower.add(c.toUpperCase());
    } else {
      upper.add(c);
    }
  }

  const intersect = buildIntersect(lower, upper);

  return getGreater(intersect);
}

function getGreater(set) {
  return Array.from(set).reduce((acc, item) => {
    if (acc === '') {
      return item;
    }

    if (acc.localeCompare(item) === -1) {
      return item;
    }

    return acc;
  }, '');
}

function buildIntersect(setA, setB) {
  const set = new Set();

  for (const x of setA) {
    if (setB.has(x)) {
      set.add(x);
    }
  }

  return set;
}

function isLower(c) {
  return c === c.toLowerCase();
}

const assert = require('assert');
assert.equal(greaterLetter('arRAzFif'), 'R');
