/*
  Account Merge

  Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
  Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts.
  Note that even if two accounts have the same name, they may belong to different people as people could have the same name.
  A person can have any number of accounts initially, but all of their accounts definitely have the same name.
  After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order.

  Example:
  Input: [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
  Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
*/

function accountMerge(accounts) {
  const map = new Map();

  for (const account of accounts) {
    const [name, ...emails] = account;

    if (!map.has(name)) {
      map.set(name, []);
    }

    const emailsSet = new Set(emails);
    const indexes = findMatches(map.get(name), emailsSet);

    if (!indexes.length) {
      map.get(name).push(emailsSet);
    } else {
      combine(map, name, indexes, emailsSet);
    }
  }

  return normalize(map);
}

function findMatches(arr, emails) {
  const indexes = [];

  for (let i = 0; i < arr.length; i++) {
    const set = arr[i];

    for (const item of set) {
      if (emails.has(item)) {
        indexes.push(i);
        break;
      }
    }
  }

  return indexes;
}

function normalize(map) {
  const output = [];

  for (const [name, list] of map) {
    for (const emails of list) {
      const arr = Array.from(emails);
      arr.sort();
      output.push([name, ...arr]);
    }
  }

  return output;
}

function combine(map, name, indexes, emails) {
  const set = new Set();

  for (const email of emails) {
    set.add(email);
  }

  for (const index of indexes) {
    for (const email of map.get(name)[index]) {
      set.add(email);
    }
  }

  for (const index of indexes) {
    map.get(name)[index] = undefined;
  }

  map.get(name).push(set);
  const filtered = map.get(name).filter((item) => item !== undefined);
  map.set(name, filtered);
}

const assert = require('assert');
assert.deepStrictEqual(
  accountMerge([
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ]),
  [
    ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
    ['John', 'johnnybravo@mail.com'],
    ['Mary', 'mary@mail.com'],
  ]
);
