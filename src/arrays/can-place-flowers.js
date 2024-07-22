/*
  Can Place Flowers

  You have a long flowerbed in which some of the plots are planted, and some are not.
  However, flowers cannot be planted in adjacent plots.
  Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

  Example:
  Input: [1,0,0,0,1], 1
  Output: true
*/

function canPlaceFlowers(flowerbed, n) {
  if (n === 0) {
    return true;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }

    const prev = i === 0 ? true : flowerbed[i - 1] === 0;
    const next = i === flowerbed.length - 1 ? true : flowerbed[i + 1] === 0;

    if (prev && next) {
      flowerbed[i] = 1;
      n--;
    }

    if (n <= 0) {
      return true;
    }
  }

  return false;
}

const assert = require('assert');
assert.ok(canPlaceFlowers([1, 0, 0, 0, 1], 1));
