const curry = require("./curry");

const delay = curry(async function (time, a) {
  await new Promise((resolve) => setTimeout(resolve, time));
  return a;
});

module.exports = delay;
