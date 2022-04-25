/*
  Max Index Sum Of Two Lists

  Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
  You need to help them find out their common interest with the least list index sum.
  If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

  Example:
  Input: ["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]
  Output: ["Shogun"]
*/

function maxIndexSumOfTwoLists(arr1, arr2) {
  const map = arr1.reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  const output = [];
  let min = Infinity;

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];

    if (map.hasOwnProperty(item)) {
      const sum = map[item] + i;

      if (sum === min) {
        output.push(item);
        continue;
      }

      if (sum < min) {
        output.length = 0;
        output.push(item);
        min = sum;
      }
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  maxIndexSumOfTwoLists(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  ),
  ['Shogun']
);
