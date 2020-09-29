const { validate, Number, String, YesNo } = require("./dist/index");
const { expect } = require("chai");

describe("Validate", async () => {
  it("should return true", async () => {
    expect(
      await validate(
        ["foo", "bar", "2", "yes"],
        [String, String, Number, YesNo]
      )
    ).to.equal(true);
  });
});
