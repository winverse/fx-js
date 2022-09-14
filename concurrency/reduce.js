const curry = require("../hard/curry");
const reduce = require("../hard/reduce");
const catchNoop = require("./catchNoop");

const C = {};
C.reduce = curry((f, acc, iter) =>
  iter ? reduce(f, acc, catchNoop(iter)) : reduce(f, catchNoop(acc))
);

module.exports = C.reduce;
