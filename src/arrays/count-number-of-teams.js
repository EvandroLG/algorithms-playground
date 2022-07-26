/*
  Count Number Of Teams

  There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

  You have to form a team of 3 soldiers amongst them under the following rules:

  - Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
  - A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).

  Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

  Example:
  Input: [2,5,3,4,1]
  Output: 3
*/

function countNumberOfTeams(rating) {
  let counter = 0;

  (function backtrack(result = [], start = 0) {
    if (result.length === 3) {
      isValid(result) && counter++;
    } else if (result.length < 3) {
      for (let i = start; i < rating.length; i++) {
        result.push(rating[i]);
        backtrack(result.slice(), i);
        result.pop();
      }
    }
  })();

  return counter;
}

function isValid(arr) {
  let isGreaterThan = arr[0] > arr[1];
  let idx = 0;

  while (idx < arr.length) {
    if (isGreaterThan) {
      if (arr[idx] <= arr[idx + 1]) {
        return false;
      }
    } else if (arr[idx] >= arr[idx + 1]) {
      return false;
    }

    idx++;
  }

  return true;
}

const assert = require('assert');
assert.equal(countNumberOfTeams([2, 5, 3, 4, 1]), 3);
