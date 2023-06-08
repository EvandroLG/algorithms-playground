/*
  Join Two Arrays

  Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.
  joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id.
  The returned array should be sorted in ascending order based on the id key.
  If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
  If two objects share an id, their properties should be merged into a single object:
  - If a key only exists in one object, that single key-value pair should be included in the object.
  - If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

  Example:
  Input:
  arr1 = [{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}]
  arr2 = [{"id": 1, "b": {"c": 84}, "v": [1, 3]}]

  Output:
  [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]
*/

function joinTwoArrays(arr1, arr2) {
  const obj1 = convertToObject(arr1);
  const obj2 = convertToObject(arr2);
  const merged = merge(obj1, obj2);
  const keys = Object.keys(merged)
    .map(Number)
    .sort((a, b) => a - b);
  const output = [];

  for (const key of keys) {
    output.push(merged[key]);
  }

  return output;
}

function convertToObject(arr) {
  const output = {};

  for (const item of arr) {
    output[item.id] = { ...item };
  }

  return output;
}

function merge(obj1, obj2) {
  const output = {};
  const keys = Object.keys(obj1);

  for (const key of keys) {
    output[key] = { ...obj1[key] };
    if (obj2.hasOwnProperty(key)) {
      output[key] = { ...output[key], ...obj2[key] };
    }
  }

  return { ...obj2, ...output };
}

const assert = require('assert');

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

assert.deepEqual(joinTwoArrays(arr1, arr2), [
  { id: 1, b: { c: 84 }, v: [1, 3], y: 48 },
]);
