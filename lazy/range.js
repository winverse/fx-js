const range = function* (n) {
  let i = -1;
  while (++i < n) {
    yield i;
  }
};

module.exports = range;
