/*
  Unique Emails

  Every valid email consists of a local name and a domain name, separated by the '@' sign.
  Besides lowercase letters, the email may contain one or more '.' or '+'.
  For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
  If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address
  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
  If you add a plus '+' in the local name, everything after the first plus sign will be ignored.

  Example:
  Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
  Output: 2
*/

function uniqueEmails(emails) {
  const memo = new Set();

  for (const email of emails) {
    const normalized = normalize(email);
    memo.add(normalized);
  }

  return memo.size;
}

function normalize(email) {
  const [localName, domain] = email.split('@');
  const replaced = localName.replaceAll('.', '');
  const [first] = replaced.split('+');

  return [first, '@', domain].join('');
}

const assert = require('assert');

assert.equal(
  uniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ]),
  2
);