/*
  Subdomain Visit Count

  A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
  A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.
  For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
  Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.

  Example:
  Input: cpdomains = ["9001 discuss.leetcode.com"]
  Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
*/

function getDomains(str) {
  const output = [];
  const splitted = str.split('.');

  for (let i = splitted.length - 1; i >= 0; i--) {
    const firstPart = splitted[i];

    if (!output.length) {
      output.push(firstPart);
    } else {
      const lastPart = output[output.length - 1];
      const result = [firstPart, lastPart].join('.');
      output.push(result);
    }
  }

  return output;
}

function subdomainVisitCount(cpdomains) {
  const memo = {};

  for (const cpdomain of cpdomains) {
    const [counter, rest] = cpdomain.split(' ');
    const domains = getDomains(rest);

    for (const domain of domains) {
      if (memo.hasOwnProperty(domain)) {
        memo[domain] += Number(counter);
      } else {
        memo[domain] = Number(counter);
      }
    }
  }

  const keys = Object.keys(memo);

  return keys.reduce((acc, domain) => {
    const counter = memo[domain];
    acc.push(`${counter} ${domain}`);
    return acc;
  }, []);
}

const assert = require('assert');
assert.deepEqual(
  subdomainVisitCount([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ]).sort((a, b) => a.localeCompare(b)),
  [
    '901 mail.com',
    '50 yahoo.com',
    '900 google.mail.com',
    '5 wiki.org',
    '5 org',
    '1 intel.mail.com',
    '951 com',
  ].sort((a, b) => a.localeCompare(b))
);
