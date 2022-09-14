const go1 = require("./go1");
const take = require("./take");

const head = (iter) => go1(take(1, iter), ([h]) => h);

module.exports = head;
