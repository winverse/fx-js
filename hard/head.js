const promiseGo = require("./promiseGo");
const take = require("./take");

const head = (iter) => promiseGo(take(1, iter), ([h]) => h);

module.exports = head;
