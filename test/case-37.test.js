const isSquare = require("../case-37"); // ✅ Import the function

describe("isSquare", () => {
  test("returns true for perfect squares", () => {
    expect(isSquare(0)).toBe(true); // 0^2 = 0
    expect(isSquare(1)).toBe(true); // 1^2 = 1
    expect(isSquare(4)).toBe(true); // 2^2 = 4
    expect(isSquare(9)).toBe(true); // 3^2 = 9
    expect(isSquare(16)).toBe(true); // 4^2 = 16
    expect(isSquare(25)).toBe(true); // 5^2 = 25
    expect(isSquare(100)).toBe(true); // 10^2 = 100
  });

  test("returns false for non-square positive numbers", () => {
    expect(isSquare(2)).toBe(false);
    expect(isSquare(3)).toBe(false);
    expect(isSquare(5)).toBe(false);
    expect(isSquare(10)).toBe(false);
    expect(isSquare(15)).toBe(false);
    expect(isSquare(26)).toBe(false);
    expect(isSquare(99)).toBe(false);
  });

  test("returns false for negative numbers", () => {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare(-4)).toBe(false);
    expect(isSquare(-9)).toBe(false);
    expect(isSquare(-16)).toBe(false);
  });

  test("handles large numbers correctly", () => {
    expect(isSquare(1000000)).toBe(true); // 1000^2 = 1000000
    expect(isSquare(999999)).toBe(false); // Not a perfect square
  });
});
