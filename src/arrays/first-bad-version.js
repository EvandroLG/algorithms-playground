/*
  First Bad Version
  You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
  Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
  You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

  Example 1:
  Input: n = 5, bad = 4
  Output: 4

  Example 2:
  Input: n = 1, bad = 1
  Output: 1
*/

function firstBadVersion(isBadVersion) {
  return (n) => {
    let first = 0;
    let last = n;

    while (first < last) {
      const middle = Math.floor((first + last) / 2);

      if (isBadVersion(middle)) {
        last = middle;
      } else {
        first = middle + 1;
      }
    }

    return first;
  };
}

const assert = require('assert');

function isBadVersion(n) {
  return n >= 4;
}

const result = firstBadVersion(isBadVersion);

assert.equal(result(5), 4);
