const {
  filter,
  delay,
  map,
  go,
  pipe,
  range,
  log,
  reduce,
  sum,
} = require("./hard");
const L = require("./lazy");
const C = require("./concurrency");

L.interval = (time) => L.map(delay(time), L.range(Infinity));

console.time("concurrency");
go(
  range(10000),
  C.filter((a) => a % 2),
  C.map((a) => a * a),
  C.take(2),
  C.reduce(sum),
  log
);
console.timeEnd("concurrency");

// module.exports = { L, C, ...H };
