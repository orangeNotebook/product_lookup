const { isProductPresent } = require("../index.js");

describe("isProductPresent test", () => {
  test("return true when product exists", () => {
    expect(isProductPresent("PL123456")).toBe(true);
  });
});
