const curry = require("../hard/curry");
const take = require("../hard/take");
const catchNoop = require("./catchNoop");

const C = {};
C.take = curry((n, iter) => take(n, catchNoop(iter)));

module.exports = C.take;
