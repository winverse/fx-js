const L = require("../lazy");
const curry = require("./curry");
const pipe = require("./pipe");
const takeAll = require("./takeAll");

const map = curry(pipe(L.map, takeAll));

module.exports = map;
