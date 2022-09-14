const L = require("../lazy");
const curry = require("./curry");
const pipe = require("./pipe");
const takeAll = require("./takeAll");

const filter = curry(pipe(L.filter, takeAll));

module.exports = filter;
