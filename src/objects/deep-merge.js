"use strict";
/*
  Deep Merge

  Given two values obj1 and obj2, return a deepmerged value.
  Values should be deepmerged according to these rules:
  - If the two values are objects, the resulting object should have all the keys that exist on either object. If a key belongs to both objects, deepmerge the two associated values. Otherwise, add the key-value pair to the resulting object.
  - If the two values are arrays, the resulting array should be the same length as the longer array. Apply the same logic as you would with objects, but treat the indices as keys.
  - Otherwise the resulting value is obj2.
  You can assume obj1 and obj2 are the output of JSON.parse().

  Example:
  Input: {"a": 1, "b": {"c": [1 , [2, 7], 5], "d": 2}}, {"a": 1, "b": {"c": [6, [6], [9]], "e": 3}}
  Output: {"a": 1, "b": {"c": [6, [6, 7], [9]], "d": 2, "e": 3}}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function deepMerge(o1, o2) {
    if (Array.isArray(o1) && Array.isArray(o2)) {
        var output = [];
        var size = o1.length > o2.length ? o1.length : o2.length;
        for (var i = 0; i < size; i++) {
            var result = i < o2.length ? deepMerge(o1[i], o2[i]) : o1[i];
            output[i] = result;
        }
        return output;
    }
    if (isObject(o1) && isObject(o2)) {
        var output = {};
        for (var _i = 0, _a = Object.entries(o1); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var result = value;
            if (o2.hasOwnProperty(key)) {
                result = deepMerge(o1[key], o2[key]);
            }
            output[key] = result;
        }
        for (var _c = 0, _d = Object.entries(o2); _c < _d.length; _c++) {
            var _e = _d[_c], key = _e[0], value = _e[1];
            if (output.hasOwnProperty(key)) {
                continue;
            }
            output[key] = value;
        }
        return output;
    }
    return o2;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && !Array.isArray(o);
}
(0, assert_1.deepStrictEqual)(deepMerge({ a: 1, b: { c: [1, [2, 7], 5], d: 2 } }, { a: 1, b: { c: [6, [6], [9]], e: 3 } }), { a: 1, b: { c: [6, [6, 7], [9]], d: 2, e: 3 } });
