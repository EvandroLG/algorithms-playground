/*
  Count Key Changes

  You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.
  Return the number of times the user had to change the key.
  Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.

  Example:
  Input: "aAbBcC"
  Output: 2
*/

function countKeyChanges(s) {
  let lastKey = null;
  let counter = 0;

  for (const c of s) {
    const key = c.toLowerCase();

    if (!lastKey) {
      lastKey = key;
      continue;
    }

    if (lastKey !== key) {
      counter++;
      lastKey = key;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(countKeyChanges('aAbBcC'), 2);
