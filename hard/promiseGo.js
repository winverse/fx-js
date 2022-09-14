const promiseGo = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

module.exports = promiseGo;
