const { expect } = require("chai");
const { add, ERROR_MSG } = require("./calculator");

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

    context("input tidak valid", function() {
      it("harusnya keluar error", function() {
        add(null, 2, (err, result) => {
          expect(err).to.be.exist;
          expect(result).to.be.not.exist;
          expect(err.message).to.be.eq(ERROR_MSG);
        });
      });
    });
  });
});
