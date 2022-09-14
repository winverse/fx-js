const curry = require("../hard/curry");
const nop = require("../hard/nop");
const promiseGo = require("../hard/promiseGo");

const filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = promiseGo(a, f);
    if (b instanceof Promise) {
      yield b.then((b) => (b ? a : Promise.reject(nop)));
    } else if (b) yield a;
  }
});

module.exports = filter;
