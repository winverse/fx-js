# Fx-JS - Functional programming extensions for JS

## Iterable protocol
```javascript
const result = go(
  [1,2,3,4,5],
  filter((a) => a % 2), // [1,3,5]
  map((a) => a * a), // [1, 9, 25]
  reduce(sum),
);

log(result) // 35
```
