function noop() {}

const catchNoop = ([...arr]) => (
  arr.forEach((a) => (a instanceof Promise ? a.catch(noop) : a)), arr
);

module.exports = catchNoop;
