const { expect } = require("chai");
const { add } = require("./calculator");

describe("calculator", function() {
  describe("add", function() {
    it("harusnya bisa melakukan operasi pertambahan biasa", function() {
      add(1, 2, (err, result) => {
        expect(result).to.be.eq(3);
      });
      add(9, 2, (err, result) => {
        expect(result).to.be.eq(11);
      });
    });
  });
});
