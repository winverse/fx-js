const curry = require("./curry");

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) {
      res.push(a);
    }
  }
  return res;
});

module.exports = filter;
