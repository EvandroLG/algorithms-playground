/*
  Products

  Given an array `arr` of integers, return an array `products` such that `products[i]` is equal to the product of all elements of `arr` except `arr[i]`.

  Example:
  Input: [1, 2, 3, 4]
  Output: [24, 12, 8, 6]
*/

function productsHelper(arr, index, result) {
  if (index === arr.length) {
    return result;
  }

  const value = arr.reduce((acc, value, i) => {
    if (i !== index) {
      acc *= value;
    }

    return acc;
  }, 1);

  result.push(value);
  return productsHelper(arr, index + 1, result);
}

function products(arr) {
  return productsHelper(arr, 0, []);
}

const assert = require('assert');
assert.deepEqual(products([1, 2, 3, 4]), [24, 12, 8, 6]);
