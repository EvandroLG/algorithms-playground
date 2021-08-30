#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const pwd = process.env.PWD;
const dir = path.join(pwd, 'src');

function getFolders() {
  return fs
    .readdirSync(dir)
    .filter((folder) => fs.statSync(path.join(dir, folder)).isDirectory());
}

function countFiles(_folder) {
  const folder = path.join(dir, _folder);

  return fs
    .readdirSync(folder)
    .filter((file) => fs.statSync(path.join(folder, file)).isFile())
    .reduce((acc) => acc + 1, 0);
}

function log(value) {
  console.log(value);
}

function output(hash) {
  const keys = Object.keys(hash);
  const topics = keys.filter((key) => key !== 'total');

  for (const topic of topics) {
    log(`${topic}: ${hash[topic]}`);
  }

  log(`\ntotal: ${hash.total}`);
}

(function () {
  if (!fs.existsSync(dir)) {
    return;
  }

  const hash = getFolders().reduce(
    (acc, folder) => {
      const count = countFiles(folder);
      acc[folder] = count;
      acc.total += count;

      return acc;
    },
    { total: 0 }
  );

  output(hash);
})();
