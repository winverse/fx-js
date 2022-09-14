const isIterable = require("../strict/isIterable");

const flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) {
      yield* a;
    } else {
      yield a;
    }
  }
};

module.exports = flatten;
