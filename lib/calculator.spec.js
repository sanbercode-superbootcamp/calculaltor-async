<<<<<<< HEAD
const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { addPromise, minusPromise, timesPromise, dividePromise, ERR_MSG } = require('./calculator');

describe('calculator', function() {
  describe('calculator operator promise test', function() {
    this.timeout(10000);
    this.slow(10000);
    it('harusnya melakukan operasi seperti biasa', async function() {
        let result = await addPromise(1,2)
                           .then((result) => minusPromise(result,2))
                           .then((result) => timesPromise(result,2))
                           .then((result) => dividePromise(result,2));
        expect(result).to.equal(1);
    });

    context('input tidak valid', function() {
      it('add harusnya keluar error', function() {
        return expect(addPromise(null, 2))
        .to.be.rejectedWith(Error, ERR_MSG);
      });

      it('minus harusnya keluar error', function() {
        return expect(minusPromise(null,2))
        .to.be.rejectedWith(Error, ERR_MSG);
      });
    });

=======
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const { expect } = chai;
const { add, addPromise, ERROR_MSG } = require("./calculator");

describe("calculator", function() {
  describe("add", function() {
    this.timeout(10000);
    this.slow(10000);

    it("harusnya bisa melakukan operasi pertambahan biasa", function(done) {
      add(1, 2, (err, result) => {
        expect(result).to.be.eq(3);
        add(9, 2, (err, result) => {
          expect(result).to.be.eq(11);
          done();
        });
      });
    });

    context("input tidak valid", function() {
      it("harusnya keluar error", function(done) {
        add(null, 2, (err, result) => {
          expect(err).to.be.exist;
          expect(result).to.be.not.exist;
          expect(err.message).to.be.eq(ERROR_MSG);
          done();
        });
      });
    });
  });

  describe("add promise", function() {
    this.timeout(12000);
    this.slow(12000);

    it("harusnya bisa melakukan operasi pertambahan", function() {
      return expect(addPromise(1, 2))
        .to.be.eventually.eq(3)
        .then(() => expect(addPromise(9, 2)).to.be.eventually.eq(11))
        .then(() => expect(addPromise(17, -9)).to.be.eventually.eq(8));
    });

    it("harusnya bisa melakukan operasi pertambahan", async function() {
      const result = await Promise.all([
        addPromise(1,2),
        addPromise(9,2),
        addPromise(17,-9)
      ]);
      expect(result).to.be.deep.eq([3,11,8]);
    });

    context("input tidak valid", function() {
      it("harusnya keluar error", function() {
        return expect(addPromise(null, 2))
          .to.be.rejectedWith(Error, ERROR_MSG);
      });
    });
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
  });
});
