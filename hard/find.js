const curry = require("./curry");
const go = require("./go");
const head = require("./head");
const take = require("./take");
const L = require("../lazy");

const find = curry((f, iter) => go(iter, L.filter(f), take(1), head));

module.exports = find;
