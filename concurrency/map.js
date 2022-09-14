const curry = require("../hard/curry");
const pipe = require("../hard/pipe");
const L = require("../lazy");
const takeAll = require("./takeAll");

const C = {};
C.map = curry(pipe(L.map, takeAll));

module.exports = C.map;
