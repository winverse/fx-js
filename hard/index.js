const getModule = require("../lib/get-modules");

const modules = getModule(__dirname, "hard", ["index"]);

module.exports = modules;
