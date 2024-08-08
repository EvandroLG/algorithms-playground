"use strict";
/*
  LastIndexOf

  You are tasked with writing a function indexOf(arr, target) that mimics the behavior of JavaScript's native String.prototype.lastIndexOf method.

  Example:
  Input: "hello world", "word"
  Output: 6
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function lastIndexOf(s, sub) {
    for (var i = s.length - sub.length; i >= 0; i--) {
        var p1 = i;
        var p2 = 0;
        while (s[p1] === sub[p2]) {
            p1++;
            p2++;
            if (p2 === sub.length) {
                return i;
            }
        }
    }
    return -1;
}
(0, assert_1.strictEqual)(lastIndexOf('hello world', 'world'), 6);
(0, assert_1.strictEqual)(lastIndexOf('hello world', 'woorld'), -1);
(0, assert_1.strictEqual)(lastIndexOf('hello world, hello Brazil', 'hello'), 13);
