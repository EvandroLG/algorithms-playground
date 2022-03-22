/*
  Sort By Bits

  Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

  Example:
  Input: [0,1,2,3,4,5,6,7,8]
  Output: [0,1,2,4,8,3,5,6,7]
*/

function sortByBits(arr) {
  const map = arr.reduce((acc, item, idx) => {
    const key = toBinary(item);

    if (!acc.hasOwnProperty(key)) {
      acc[key] = [];
    }

    acc[key].push(idx);

    return acc;
  }, {});

  const keys = Object.keys(map);
  keys.sort(compare);

  return keys.reduce((acc, binaryNum) => {
    const indeces = map[binaryNum];

    while (indeces.length) {
      acc.push(arr[indeces.pop()]);
    }

    return acc;
  }, []);
}

function compare(a, b) {
  if (counter(a) > counter(b)) {
    return 1;
  }

  if (counter(a) < counter(b)) {
    return -1;
  }

  const decimalA = parseInt(a, 2);
  const decimalB = parseInt(b, 2);

  if (decimalA > decimalB) {
    return 1;
  }

  if (decimalA < decimalB) {
    return -1;
  }

  return 0;
}

function counter(a) {
  const fragments = a.split('');
  return fragments.filter((i) => i === '1').length;
}

function toBinary(value) {
  return Number(value).toString(2);
}

const assert = require('assert');
assert.deepEqual(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]), [
  0,
  1,
  2,
  4,
  8,
  3,
  5,
  6,
  7,
]);
