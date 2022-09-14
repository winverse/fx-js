const curry = require("../hard/curry");
const pipe = require("../hard/pipe");
const map = require("./map");
const flatten = require("./flatten");

const flatMap = curry(pipe(map, flatten));

module.exports = flatMap;
