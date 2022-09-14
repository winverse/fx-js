const getModule = require("../lib/get-modules");

const C = getModule(__dirname, "concurrency", ["index"]);

module.exports = C;
