/*
  Number Of Employees Who Met Target

  There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
  The company requires each employee to work for at least target hours.
  You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
  Return the integer denoting the number of employees who worked at least target hours.

  Example:
  Input: [0,1,2,3,4], 2
  Output: 3
*/

function numberOfEmployeesWhoMetTarget(hours, target) {
  return hours.filter((hour) => hour >= target).length;
}

const assert = require('assert');
assert.equal(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6), 0);
