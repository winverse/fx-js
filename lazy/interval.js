const delay = require("../hard/delay");
const map = require("./map");
const range = require("./range");

const L = {};
L.interval = (time) => map(delay(time), range(Infinity));

module.exports = L.interval;
