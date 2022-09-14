const getModule = require("../lib/get-modules");

const modules = getModule(__dirname, "strict", ["index", "nop"]);

module.exports = modules;
