const getModule = require("../lib/get-modules");

const modules = getModule(__dirname, "soft", ["index"]);

module.exports = modules;
