const curry = require("../Hard/curry");
const promiseGo = require("../hard/promiseGo");

const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield promiseGo(a, f);
  }
});

module.exports = map;
