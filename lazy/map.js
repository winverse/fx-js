const curry = require("../strict/curry");
const go1 = require("../strict/go1");

const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield go1(a, f);
  }
});

module.exports = map;
