const curry = require("./curry");
const head = require("./head");
const promiseGo = require("./promiseGo");
const nop = require("./nop");

const reduceF = (acc, a, f) =>
  a instanceof Promise
    ? a.then(
        (a) => f(acc, a),
        (e) => (e == nop ? acc : Promise.reject(e))
      )
    : f(acc, a);

const reduce = curry((f, acc, iter) => {
  if (!iter) return reduce(f, head((iter = acc[Symbol.iterator]())), iter);

  iter = iter[Symbol.iterator]();
  return promiseGo(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = reduceF(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});

module.exports = reduce;
