/*
  Kids With Greatest Number Of Candies

  You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
  Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

  Example:
  Input: [2,3,5,1,3], 3
  Output: [true,true,true,false,true]
*/

function kidsWithGreatestNumberOfCandies(candies, extraCandies) {
  const max = Math.max(...candies);

  return candies.reduce((acc, item) => {
    acc.push(item + extraCandies >= max);
    return acc;
  }, []);
}

const assert = require('assert');
assert.deepEqual(kidsWithGreatestNumberOfCandies([2, 3, 5, 1, 3], 3), [
  true,
  true,
  true,
  false,
  true,
]);
