/*
  Repeated Dna Sequences

  The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
  When studying DNA, it is useful to identify repeated sequences within the DNA.
  Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
  You may return the answer in any order.

  Example:
  Input: "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  Output: ["AAAAACCCCC","CCCCCAAAAA"]
*/

function repeatedDnaSequences(s) {
  const output = new Set();
  const memo = new Set();
  let p1 = 0;
  let p2 = 10;

  while (p2 < s.length) {
    const str = s.slice(p1, p2);

    if (memo.has(str)) {
      output.add(str);
    } else {
      memo.add(str);
    }

    p1++;
    p2++;
  }

  return Array.from(output);
}

const assert = require('assert');
assert.deepEqual(repeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'), [
  'AAAAACCCCC',
  'CCCCCAAAAA',
]);
