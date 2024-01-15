/*
  Minimal Length

  You are given a string s consisting only of uppercase English letters.
  You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
  Return the minimum possible length of the resulting string that you can obtain.
  Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

  Example:
  Input: "ABFCACDB"
  Output: 2
*/

function minimalLength(s) {
  let output = s;

  while (true) {
    const indexAb = output.indexOf('AB');

    if (indexAb > -1) {
      output = updateString(output, indexAb);
      continue;
    }

    const indexCd = output.indexOf('CD');

    if (indexCd > -1) {
      output = updateString(output, indexCd);
      continue;
    }

    break;
  }

  return output.length;
}

function updateString(s, initialIndex) {
  const fragments = s.split('');
  fragments.splice(initialIndex, 2);

  return fragments.join('');
}

const assert = require('assert');
assert.equal(minimalLength('ABFCACDB'), 2);
