const curry = require("./curry");
const nop = require("./nop");

const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then((a) => ((res.push(a), res).length == l ? res : recur()))
          .catch((e) => (e == nop ? recur() : Promise.reject(e)));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  })();
});

module.exports = take;
