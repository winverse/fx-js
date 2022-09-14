const curry = require("./curry");

const take = curry((n, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == n) return res;
  }
  return res;
});

module.exports = take;
