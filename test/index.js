require("../");

var assert = require("assert");


describe("app-modules", function() {
  it("should work!", function() {
    assert.equal(
      require("lib/foo"),
      "It works!"
    );
  })
});
