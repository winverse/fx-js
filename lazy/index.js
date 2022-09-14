const getModule = require("../lib/get-modules");

const L = getModule(__dirname, "lazy", ["index"]);

module.exports = L;
