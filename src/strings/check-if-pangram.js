/*
  Check If Pangram

  A pangram is a sentence where every letter of the English alphabet appears at least once.
  Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

  Example:
  Input: 'thequickbrownfoxjumpsoverthelazydog'
  Output: true
*/

function checkIfPangram(s) {
  const fragments = s.split('');
  const codes = fragments.map((c) => c.charCodeAt(0));
  const set = new Set(codes);

  for (let i = 97; i <= 122; i++) {
    if (!set.has(i)) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
