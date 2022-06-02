/*
  Summary Ranges

  A range [a,b] is the set of all integers from a to b (inclusive).
  Return the smallest sorted list of ranges that cover all the numbers in the array exactly.

  Example:
  Input: [0,1,2,4,5,7]
  Output: ["0->2","4->5","7"]
*/

function summaryRanges(nums) {
  if (!nums.length) {
    return [];
  }

  const output = [];
  const arr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const prev = arr.at(-1);

    if (prev + 1 !== current) {
      if (arr.length === 1) {
        output.push('' + arr[0]);
      } else {
        const item = `${arr.at(0)}->${arr.at(-1)}`;
        output.push(item);
      }

      arr.length = 0;
    }

    arr.push(current);
  }

  if (arr.length === 1) {
    output.push('' + arr[0]);
  } else {
    const item = `${arr.at(0)}->${arr.at(-1)}`;
    output.push(item);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(summaryRanges([0, 1, 2, 4, 5, 7]), ['0->2', '4->5', '7']);
