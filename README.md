# Making it myself, functional programming extensions

# Specification
- soft - Eager evaluation, works like JavaScript built-in function
- hard - Support Iterator/Iterable protocol by Generator
- lazy - Support Lazy evaluation
- concurency - Support Concurrency processing (Not parallel)

# Iterable protocol
```javascript
const result = go(
  [1,2,3,4,5],
  filter((a) => a % 2), // [1,3,5]
  map((a) => a * a), // [1, 9, 25]
  reduce(sum),
  log // 35
);

// It is possible
go(
  [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    Promise.resolve(4),
    Promise.resolve(5),
  ],
  filter((a) => a % 2),
  map((a) => a * a),
  take(2),
  log // [1,9]
);

```

# Lazy evaluation
- `L` functions can be evaluated lazy
- `L` is namespace for lazy functions
```javascript
go(
  range(Infinity),
  L.filter((a) => a % 2),
  L.map((a) => a * a),
  take(2),
  log // [1,9] 
);

// flow: 1 -> 1 -> 2 -> 3 -> 9 -> log
```

# Concurrency
- `C` functions can be concurrency.
- `C` is namespace for concurrency functions

```javascript
await map(getData, range(10))
// After 10 seconds
// [data1, data2.. data10]

const data = await C.map(getData, range(10))
// After 1 seconds
// [data1, data2.. data10]
```
# Reference
- [FxJS](https://github.com/marpple/FxJS)
