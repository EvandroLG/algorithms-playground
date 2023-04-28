/*
  Convert Json To String

  Given an object, return a valid JSON string of that object.
  You may assume the object only inludes strings, integers, arrays, objects, booleans, and null.
  The returned string should not include extra spaces.
  The order of keys should be the same as the order returned by Object.keys().

  Example:
  Input: {"key":{"a":1,"b":[{},null,"Hello"]}}
  Output: '{"key":{"a":1,"b":[{},null,"Hello"]}}'
*/

function convertJsonToString(obj) {
  if (obj == null || typeof obj != 'object') {
    return getValue(obj);
  }

  const keys = Object.keys(obj);
  const isArray = Array.isArray(obj);
  const output = [isArray ? '[' : '{'];
  const internal = [];

  for (const key of keys) {
    const value = obj[key];
    internal.push(isArray ? '' : `"${key}":`);

    if (value != null && typeof value === 'object') {
      internal.push(convertJsonToString(value));
    } else {
      internal.push(getValue(value));
    }

    internal.push(',');
  }

  output.push(internal.join('').slice(0, -1));

  output.push(isArray ? ']' : '}');

  return output.join('');
}

function getValue(v) {
  const isString = typeof v === 'string';
  return isString ? `"${v}"` : '' + v;
}

const assert = require('assert');
const obj = { key: { a: 1, b: [{}, null, 'Hello'] } };
assert.equal(convertJsonToString(obj), '{"key":{"a":1,"b":[{},null,"Hello"]}}');
