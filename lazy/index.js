const getModule = require("../lib/get-modules");

const modules = getModule(__dirname, "lazy", ["index"]);

module.exports = modules;
