/*
  Compare Version Numbers

  Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'.
  The value of the revision is its integer conversion ignoring leading zeros.
  Return the following:
  - If version1 < version2, return -1.
  - If version1 > version2, return 1.
  - Otherwise, return 0.

  Example:
  Input: "1.2", version2 = "1.10"
  Output: -1
*/

function compareVersionNumbers(version1, version2) {
  const v1 = normalize(version1);
  const v2 = normalize(version2);

  return compare(v1, v2);
}

function normalize(s) {
  return s.split('.').map(Number);
}

function compare(version1, version2) {
  if (version1.length > version2.length) {
    for (let i = 0; i <= version1.length - version2.length; i++) {
      version2.push(0);
    }
  }

  if (version2.length > version1.length) {
    for (let i = 0; i <= version2.length - version1.length; i++) {
      version1.push(0);
    }
  }

  let p1 = 0;
  let p2 = 0;

  while (p1 < version1.length) {
    if (version1[p1] < version2[p2]) {
      return -1;
    }

    if (version1[p1] > version2[p2]) {
      return 1;
    }

    p1++;
    p2++;
  }

  return 0;
}

const assert = require('assert');
assert.strictEqual(compareVersionNumbers('1.2', '1.10'), -1);
