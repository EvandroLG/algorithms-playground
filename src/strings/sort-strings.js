/*
  Sort Strings

  You are given a string s. Reorder the string using the following algorithm:
  1. Pick the smallest character from s and append it to the result.
  2. Pick the smallest character from s which is greater than the last appended character to the result and append it.
  3. Repeat step 2 until you cannot pick more characters.
  4. Pick the largest character from s and append it to the result.
  5. Pick the largest character from s which is smaller than the last appended character to the result and append it.
  6. Repeat step 5 until you cannot pick more characters.
  7. Repeat the steps from 1 to 6 until you pick all characters from s.
  Return the result string after sorting s with this algorithm.

  Example:
  Input: "aaaabbbbcccc"
  Output: "abccbaabccba"
*/

function sortStrings(s) {
  const map = counter(s);
  return sortStringHelper(map);
}

function sortStringHelper(map) {
  let lastItem = pickSmallest(map);
  const output = [];

  if (!lastItem) {
    return output.join('');
  }

  output.push(lastItem);

  while (true) {
    lastItem = pickLastSmallest(map, lastItem);

    if (lastItem === undefined) {
      break;
    }

    output.push(lastItem);
  }

  lastItem = pickLargest(map);

  if (!lastItem) {
    return output.join('');
  }

  output.push(lastItem);

  while (true) {
    lastItem = pickLastLargest(map, lastItem);

    if (!lastItem) {
      break;
    }

    output.push(lastItem);
  }

  const result = output.join('');

  return result + sortStringHelper(map);
}

function pickSmallest(map) {
  const keys = Object.keys(map);

  if (!keys.length) {
    return;
  }

  const sorted = keys.sort((a, b) => b.localeCompare(a));
  const item = sorted.pop();

  map[item]--;

  if (map[item] === 0) {
    delete map[item];
  }

  return item;
}

function counter(s) {
  return s.split('').reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

function pickLastSmallest(map, lastItem) {
  const keys = Object.keys(map);
  const filtered = keys.filter((item) => item > lastItem);

  const sorted = filtered.sort((a, b) => b.localeCompare(a));
  const item = sorted.pop();

  if (!item) {
    return;
  }

  map[item]--;

  if (map[item] === 0) {
    delete map[item];
  }

  return item;
}

function pickLargest(map) {
  const keys = Object.keys(map);

  if (!keys.length) {
    return;
  }

  const sorted = keys.sort((a, b) => a.localeCompare(b));
  const item = sorted.pop();

  map[item]--;

  if (map[item] === 0) {
    delete map[item];
  }

  return item;
}

function pickLastLargest(map, lastItem) {
  const keys = Object.keys(map);
  const filtered = keys.filter((item) => item < lastItem);
  const sorted = filtered.sort((a, b) => a.localeCompare(b));
  const item = sorted.pop();

  if (!item) {
    return;
  }

  map[item]--;

  if (map[item] === 0) {
    delete map[item];
  }

  return item;
}

const assert = require('assert');
assert.equal(sortStrings('aaaabbbbcccc'), 'abccbaabccba');
