const { isProductPresent } = require("../index.js");
const productClass = require("../classes/product.js");

describe("isProductPresent tests", () => {
  test("return true when product exists", () => {
    expect(isProductPresent("PL123456")).toBe(true);
  });
  test("return false when product doesn't exist", () => {
    expect(isProductPresent("DoesNotExist")).toBe(false);
  });
});

describe("product class tests", () => {
  test("return description when product.description method called", () => {
    console.log = jest.fn();

    let expectedResult = `
        PL Number: plNumber
        Name: name
        Dose: dose
        Substance: substance
        URL: url
        `;

    testProduct = new productClass(
      "plNumber",
      "name",
      "dose",
      "substance",
      "url"
    );

    testProduct.description();

    expect(console.log.mock.calls[0][0]).toBe(expectedResult);
  });
});
