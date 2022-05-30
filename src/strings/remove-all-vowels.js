/*
  Remove All Vowels

  Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

  Example:
  Input: "leetcodeisacommunityforcoders"
  Output: "ltcdscmmntyfrcdrs"
*/

function removeAllVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const output = [];

  for (const c of s) {
    if (!vowels.has(c)) {
      output.push(c);
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(
  removeAllVowels('leetcodeisacommunityforcoders'),
  'ltcdscmmntyfrcdrs'
);
