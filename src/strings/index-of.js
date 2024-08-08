"use strict";
/*
  IndexOf

  You are tasked with writing a function indexOf(arr, target) that mimics the behavior of JavaScript's native String.prototype.indexOf method.

  Example:
  Input: "hello world", "word"
  Output: 6
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function indexOf(s, sub) {
    for (var i = 0; i < s.length; i++) {
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
(0, assert_1.strictEqual)(indexOf('hello world', 'world'), 6);
(0, assert_1.strictEqual)(indexOf('hello world', 'woorld'), -1);
