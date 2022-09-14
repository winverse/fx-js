const curry = require("../hard/curry");
const pipe = require("../hard/pipe");
const L = require("../lazy");
const takeAll = require("./takeAll");

const C = {};
C.filter = curry(pipe(L.filter, takeAll));

module.exports = C.filter;
