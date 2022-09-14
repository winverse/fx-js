const isIterable = require("../Hard/isIterable");

const deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) {
      yield* f(a);
    } else {
      yield a;
    }
  }
};

module.exports = deepFlat;
