const base = require("./app");

describe("Testing Addition", () => {
  test("Empty String as Input", () => {
    expect(base()).toBe("TEST");
  });
});
