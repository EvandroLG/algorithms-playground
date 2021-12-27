/*
  Simplify Path

  Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.
  The canonical path should have the following format:
  - The path starts with a single slash '/'.
  - Any two directories are separated by a single slash '/'.
  - The path does not end with a trailing '/'.
  - The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

  Example:
  Input: "/a/./b/../../c/"
  Output: '/c'
*/

function simplifyPath(path) {
  const output = [];
  const fragments = path
    .split('/')
    .filter((item) => item !== '')
    .filter((item) => item !== '.');
  let depth = 0;

  for (let i = fragments.length - 1; i >= 0; i--) {
    const item = fragments[i];

    if (item === '..') {
      depth++;
    } else if (depth > 0) {
      depth--;
    } else {
      output.push(item);
    }
  }

  if (!output.length) {
    return '/';
  }

  return ['', ...output.reverse()].join('/');
}

const assert = require('assert');
assert.equal(simplifyPath('/a/./b/../../c/'), '/c');
