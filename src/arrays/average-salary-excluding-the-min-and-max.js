/*
  Average Salary Excluding The Min And Max

  You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
  Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

  Example:
  Input: [4000,3000,1000,2000]
  Output: 2500.00000
*/

function averageSalaryExcludingTheMinAndMax(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  sorted.shift();
  sorted.pop();

  const size = sorted.length;
  const sum = sorted.reduce((acc, value) => acc + value, 0);

  return sum / size;
}

const assert = require('assert');
assert.equal(
  averageSalaryExcludingTheMinAndMax([4000, 3000, 1000, 2000]),
  2500.0
);
