/*
  Remove All Occurences

  Given two strings s and part, perform the following operation on s until all occurrences of the substring part

  Example:
  Input: "daabcbaabcbc", "abc"
  Output: "dab"
*/

function removeAllOccurences(s, part) {
  let output = s;
  let idx = output.indexOf(part);

  while (idx !== -1) {
    const fragments = output.split('');
    fragments.splice(idx, part.length);
    output = fragments.join('');
    idx = output.indexOf(part);
  }

  return output;
}

const assert = require('assert');
assert.equal(removeAllOccurences('daabcbaabcbc', 'abc'), 'dab');
