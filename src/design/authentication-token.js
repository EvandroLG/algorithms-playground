/*
  Authentication Token

  There is an authentication system that works with authentication tokens.
  For each session, the user will receive a new authentication token that will expire timeToLive seconds after the currentTime.
  If the token is renewed, the expiry time will be extended to expire timeToLive seconds after the (potentially different) currentTime.
*/

function AuthenticationManager(timeToLive) {
  this.timeToLive = timeToLive;
  this.tokens = {};
}

AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.tokens[tokenId] = currentTime + this.timeToLive;
};

AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if (
    this.tokens.hasOwnProperty(tokenId) &&
    this.tokens[tokenId] > currentTime
  ) {
    this.tokens[tokenId] = currentTime + this.timeToLive;
  }
};

AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  return Object.keys(this.tokens).reduce((acc, key) => {
    if (this.tokens[key] > currentTime) {
      acc++;
    } else {
      delete this.tokens[key];
    }

    return acc;
  }, 0);
};

const assert = require('assert');
const authentication = new AuthenticationManager(5);
authentication.renew('aaa', 1);
assert.equal(authentication.countUnexpiredTokens(3), 0);
authentication.generate('aaa', 2);
assert.equal(authentication.countUnexpiredTokens(3), 1);
authentication.generate('bbb', 15);
assert.equal(authentication.countUnexpiredTokens(6), 2);
assert.equal(authentication.countUnexpiredTokens(16), 1);
