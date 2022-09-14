const entries = function* (obj) {
  for (const key in obj) {
    yield [key, obj[key]];
  }
};

module.exports = entries;
