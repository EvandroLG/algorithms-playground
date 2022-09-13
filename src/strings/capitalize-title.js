/*
  Capitalize Title

  You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters.
  Capitalize the string by changing the capitalization of each word such that:
  - If the length of the word is 1 or 2 letters, change all letters to lowercase.
  - Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

  Input: 'First leTTeR of EACH Word'
  Output: 'First Letter of Each Word'
*/

function capitalizeTitle(s) {
  const lower = s.toLowerCase();

  return lower
    .split(' ')
    .reduce((acc, item) => {
      if (item.length <= 2) {
        acc.push(item);
      } else {
        acc.push([item.at(0).toUpperCase(), item.slice(1)].join(''));
      }

      return acc;
    }, [])
    .join(' ');
}

const assert = require('assert');
assert.equal(
  capitalizeTitle('First leTTeR of EACH Word'),
  'First Letter of Each Word'
);
