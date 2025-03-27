const removeSmallest = require("../case-38"); // ✅ Import the function

describe("removeSmallest", () => {
  test("removes the first smallest number", () => {
    expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
    expect(removeSmallest([2, 2, 1, 2, 1, 1, 8])).toEqual([2, 2, 2, 1, 1, 8]);
  });

  test("returns an empty array when input is empty", () => {
    expect(removeSmallest([])).toEqual([]);
  });

  test("returns an empty array when input has only one element", () => {
    expect(removeSmallest([7])).toEqual([]);
  });

  test("works with multiple identical numbers", () => {
    expect(removeSmallest([1, 1, 1, 1])).toEqual([1, 1, 1]);
  });

  test("works with negative numbers", () => {
    expect(removeSmallest([-1, -2, -3, -4])).toEqual([-1, -2, -3]);
  });
});
