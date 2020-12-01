/*
  Find Common Characters
  Given an array of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
  You may return the answer in any order.

  Example 1:
  Input: ["bella","label","roller"]
  Output: ["e","l","l"]

  Example 2:
  Input: ["cool","lock","cook"]
  Output: ["c","o"]
*/

function removeCharAt(str, i) {
  const tmp = str.split('');
  tmp.splice(i, 1);
  return tmp.join('');
}

function findCommonCharacters(arr) {
  const first = arr[0];
  const output = [];

  for (const s of first) {
    let isValid = true;

    for (let i = 1; i < arr.length; i++) {
      const item = arr[i];
      const index = item.indexOf(s);

      if (index >= 0) {
        arr[i] = removeCharAt(item, index);
      } else {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      output.push(s);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findCommonCharacters(['cool', 'lock', 'cook']), ['c', 'o']);
assert.deepEqual(findCommonCharacters(['bella', 'label', 'roller']), [
  'e',
  'l',
  'l',
]);
