/*
  Subarray Division

  Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
  Lily decides to share a contiguous segment of the bar selected such that:
  - The length of the segment matches Ron's birth month, and,
  - The sum of the integers on the squares is equal to his birth day.
  Determine how many ways she can divide the chocolate.

  Example:
  Input: [1, 2, 1, 3, 2], 3, 2
  Output: 2
*/

function subarrayDivision(arr, day, month) {
  if (month > arr.length) {
    return 0;
  }

  let result = 0;
  let p1 = 0;
  let p2 = month - 1;
  let sum = 0;

  for (let i = 0; i <= p2; i++) {
    sum += arr[i];
  }

  if (sum === day) {
    result++;
  }

  while (p2 < arr.length) {
    sum -= arr[p1];
    p1++;
    p2++;
    sum += arr[p2];

    if (sum === day) {
      result++;
    }
  }

  return result;
}

const assert = require('assert');
assert.strictEqual(subarrayDivision([1, 2, 1, 3, 2], 3, 2), 2);
