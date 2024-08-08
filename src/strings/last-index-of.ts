/*
  LastIndexOf

  You are tasked with writing a function indexOf(arr, target) that mimics the behavior of JavaScript's native String.prototype.lastIndexOf method.

  Example:
  Input: "hello world", "word"
  Output: 6
*/

import { strictEqual } from 'assert';

function lastIndexOf(s: string, sub: string): number {
  for (let i = s.length - sub.length; i >= 0; i--) {
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

strictEqual(lastIndexOf('hello world', 'world'), 6);
strictEqual(lastIndexOf('hello world', 'woorld'), -1);
strictEqual(lastIndexOf('hello world, hello Brazil', 'hello'), 13);
