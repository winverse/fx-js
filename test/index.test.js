const L = require("../lazy");
const { take, reduce, map, find, go, promiseGo, sum } = require("../hard");

describe("take", () => {
  it("take(1, [1,2,3])", () => {
    expect(take(1, [1, 2, 3])).toEqual([1]);
  });
  it("take(2, [1,2,3])", () => {
    expect(take(2, [1, 2, 3])).toEqual([1, 2]);
  });
  it("take(2, L.map((a) => a * 2, [1,2,3]))", () => {
    expect(
      take(
        2,
        L.map((a) => a * 2, [1, 2, 3])
      )
    ).toEqual([2, 4]);
  });
  it("take(2, L.map(a => Promise.resolve(a + 1), [1, 2, 3]))", () => {
    promiseGo(
      take(
        2,
        L.map((a) => Promise.resolve(a + 1), [1, 2, 3, 4]),
        (_) => expect(_).toEqual([2, 3])
      )
    );
  });
  it("take(2, L.filter((a) => a % 2, [1,2,3,4,5]))", () => {
    expect(
      take(
        2,
        L.filter((a) => a % 2, [1, 2, 3, 4, 5])
      )
    ).toEqual([1, 3]);
  });
  it("take(2, L.map((a) => Promise.resolve(a + 1), [1, 2, 3]))", () => {
    promiseGo(
      take(
        2,
        L.map((a) => Promise.resolve(a + 1), [1, 2, 3])
      ),
      (_) => expect(_).toEqual([2, 3])
    );
  });
  it("take(2, L.filter((a) => Promise.resolve(a % 2), [1, 2, 3, 4, 5]))", () => {
    promiseGo(
      take(
        2,
        L.filter((a) => Promise.resolve(a % 2), [1, 2, 3, 4, 5])
      ),
      (_) => expect(_).toEqual([1, 3])
    );
  });
});

describe("reduce", () => {
  it("reduce(sum([1,2,3,4]))", () => {
    expect(reduce(sum, [1, 2, 3])).toBe(6);
  });
  it("reduce(sum, 10, [1,2,3,4])", () => {
    expect(reduce(sum, 10, [1, 2, 3, 4])).toBe(20);
  });
  it("reduce(sum, [Promise.resolve(1), 2, 3])", () => {
    promiseGo(reduce(sum, [Promise.resolve(1), 2, 3]), (_) =>
      expect(_).toBe(6)
    );
  });
  it("reduce(sum, L.filter((a) => a % 2, [1, 2, 3, 4]))", () => {
    expect(
      reduce(
        sum,
        L.filter((a) => a % 2, [1, 2, 3, 4])
      )
    ).toBe(4);
  });
  it("reduce(sum, L.filter((a) => Promise.resolve(a % 2), [1, 2, 3, 4]))", () => {
    promiseGo(
      reduce(
        sum,
        L.filter((a) => Promise.resolve(a % 2), [1, 2, 3, 4])
      ),
      (_) => expect(_).toBe(4)
    );
  });
  it("reduce(sum, L.filter(a => Promise.resolve(a % 2), L.map(a => a + 10, [1, 2, 3, 4])))", () => {
    promiseGo(
      reduce(
        sum,
        L.filter(
          (a) => Promise.resolve(a % 2),
          L.map((a) => a + 10, [1, 2, 3, 4])
        )
      ),
      (_) => expect(_).toBe(24)
    );
  });
  it("reduce(sum, L.filter(a => Promise.resolve(a % 2), L.map(a => Promise.resolve(a + 10), [1, 2, 3, 4])))", () => {
    promiseGo(
      reduce(
        sum,
        L.filter(
          (a) => Promise.resolve(a % 2),
          L.map((a) => Promise.resolve(a + 10), [1, 2, 3, 4])
        )
      ),
      (_) => expect(_).toBe(24)
    );
  });
});

// todo
describe("C.take", () => {});
describe("map", () => {});
describe("find", () => {});
describe("go", () => {});
