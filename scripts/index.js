#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function capitalize(str) {
  return str.split('-').reduce((acc, cur) => {
    const firstLetter = cur[0].toUpperCase();
    const rest = cur.slice(1).toLowerCase();

    return `${acc} ${firstLetter}${rest}`;
  }, '');
}

function fnName(str) {
  return str.split('-').reduce((acc, cur) => {
    if (!acc.length) {
      return cur.toLowerCase();
    }

    const firstLetter = cur[0].toUpperCase();
    const rest = cur.slice(1).toLowerCase();

    return `${acc}${firstLetter}${rest}`;
  }, '');
}

const args = process.argv.slice(2);
const [namespace, challenge] = args.pop().split('/');
const pwd = process.env.PWD;
const dir = path.join(pwd, 'src', namespace);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const template = path.join(pwd, 'scripts', '_template');
const filename = path.join(dir, `${challenge}.js`);

fs.copyFileSync(template, filename);

const data = fs
  .readFileSync(filename, { encoding: 'utf8' })
  .replace('{title}', capitalize(challenge))
  .replace(new RegExp('{fn_name}', 'g'), fnName(challenge));

fs.writeFileSync(filename, data, { encoding: 'utf8' });
