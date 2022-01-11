const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply two numbers correctly", () => {
    const result = multiply(3, 4);
    expect(result).toBe(12);
  });

  test("should return a negative product if called with one negative number", () => {
    const result = multiply(4, -5);
    expect(result).toBe(-20);
  });

  test("should multiply two floating point numbers correctly", () => {
    const result = multiply(2.5, 1.35);
    expect(result).toBe(2.5 * 1.35);
  });

  test("should return 0 if one of the arguments is 0", () => {
    const result1 = multiply(0, 10);
    const result2 = multiply(100, 0);
    expect(result1).toBe(0);
    expect(result2).toBe(0);

  });

  test("should return 0 when function is called without arguments", () => {
    const result = multiply();
    expect(result).toBe(0);
  });

  test("should return 0 when called with a single argument", () => {
    const result = multiply(26);
    expect(result).toBe(0);
  });
});
