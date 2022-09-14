const take = require("./take");

const C = {};
C.takeAll = take(Infinity);

module.exports = C.takeAll;
