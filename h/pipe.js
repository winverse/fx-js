const go = require("./go");

const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

module.exports = pipe;
