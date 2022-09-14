const curry = require("../Hard/curry");
const nop = require("../Hard/nop");
const go1 = require("../Hard/go1");

const filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = go1(a, f);
    if (b instanceof Promise) {
      yield b.then((b) => (b ? a : Promise.reject(nop)));
    } else if (b) yield a;
  }
});

module.exports = filter;
