"use strict";
/*
  Deep Object Filter

  Given an object or an array obj and a function fn, return a filtered object or array filteredObject.

  Example:
  Input: {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}}, (x) => typeof x === "string"
  Output: {"b":"2","d":"4"}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function deepObjectFilter(o, fn) {
    if (Array.isArray(o)) {
        var output = [];
        for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
            var item = o_1[_i];
            if (Array.isArray(item) || isObject(item)) {
                var result = deepObjectFilter(item, fn);
                if (result !== undefined) {
                    output.push(result);
                }
            }
            else {
                if (fn(item)) {
                    output.push(item);
                }
            }
        }
        return output.length ? output : undefined;
    }
    else {
        var output = {};
        var entries = Object.entries(o);
        for (var _a = 0, entries_1 = entries; _a < entries_1.length; _a++) {
            var _b = entries_1[_a], key = _b[0], value = _b[1];
            if (Array.isArray(value) || isObject(value)) {
                var result = deepObjectFilter(value, fn);
                if (result !== undefined) {
                    output[key] = result;
                }
            }
            else {
                if (fn(value)) {
                    output[key] = value;
                }
            }
        }
        return Object.keys(output).length ? output : undefined;
    }
}
function isObject(o) {
    return typeof o === 'object' && o !== null && !Array.isArray(o);
}
var o = { a: 1, b: '2', c: 3, d: '4', e: 5, f: 6, g: { a: 1 } };
(0, assert_1.deepStrictEqual)(deepObjectFilter(o, function (x) { return typeof x === 'string'; }), { b: '2', d: '4' });
