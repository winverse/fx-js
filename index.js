const H = require("./hard");
const L = require("./lazy");
const C = require("./concurrency");

module.exports = { L, C, ...H };
