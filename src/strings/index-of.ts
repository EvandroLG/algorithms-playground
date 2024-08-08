/*
  IndexOf

  You are tasked with writing a function indexOf(arr, target) that mimics the behavior of JavaScript's native String.prototype.indexOf method.

  Example:
  Input: "hello world", "word"
  Output: 6
*/

import { strictEqual } from 'assert';

function indexOf(s: string, sub: string): number {
  for (let i = 0; i < s.length; i++) {
    let p1 = i;
    let p2 = 0;

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

strictEqual(indexOf('hello world', 'world'), 6);
strictEqual(indexOf('hello world', 'woorld'), -1);
