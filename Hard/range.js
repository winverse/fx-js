const range = (n) => {
  let res = [];
  let i = -1;
  while (++i < n) {
    res.push(i);
  }
  return res;
};

module.exports = range;
