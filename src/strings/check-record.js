"use strict";
/*
  Check Record

  You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day.
  The record only contains the following three characters:
  - 'A': Absent
  - 'L': Late
  - 'P': Present
  The student is eligible for an attendance award if they meet both of the following criteria:
  - The student was absent ('A') for strictly fewer than 2 days total.
  - The student was never late ('L') for 3 or more consecutive days.
  Return true if the student is eligible for an attendance award, or false otherwise.

  Example:
  Input: 'PPALLP'
  Output: true
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function checkRecord(s) {
    var map = {
        A: 0,
        L: 0,
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        if (c === 'A' || c === 'L') {
            map[c]++;
            if (map['A'] >= 2 || map['L'] >= 3) {
                return false;
            }
        }
        if (c !== 'L') {
            map['L'] = 0;
        }
    }
    return true;
}
(0, assert_1.ok)(checkRecord('PPALLP'));
