const curry = require("../Hard/curry");
const go1 = require("../Hard/go1");

const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield go1(a, f);
  }
});

module.exports = map;
