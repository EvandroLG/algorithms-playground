/*
  Design File System

  You are asked to design a file system that allows you to create new paths and associate them with different values.
  The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters.
  For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.

  Implement the FileSystem class:
  - bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already exists or its parent path doesn't exist.
  - int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.
*/

class FileSystem {
  constructor() {
    this.paths = {};
  }

  createPath(path, value) {
    if (!path.length || path === '/' || this.paths.hasOwnProperty(path)) {
      return false;
    }

    const fragments = path.split('/').filter((item) => item !== '');
    const parents = fragments.slice(0, -1);

    while (parents.length) {
      const parentPath = `/${parents.join('/')}`;

      if (!this.paths.hasOwnProperty(parentPath)) {
        return false;
      }

      parents.pop();
    }

    this.paths[path] = value;

    return true;
  }

  get(path) {
    if (this.paths.hasOwnProperty(path)) {
      return this.paths[path];
    }

    return -1;
  }
}

const assert = require('assert');

const fs = new FileSystem();

assert.ok(fs.createPath('/leet', 1));
assert.ok(fs.createPath('/leet/code', 2));
assert.equal(fs.get('/leet/code'), 2);
assert.ok(!fs.createPath('/c/d', 1));
assert.equal(fs.get('/c'), -1);
