<<<<<<< HEAD
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;
const {addPromise, minPromise, multiPromise, divPromise, ERROR_MSG, add, min, multi, div } = require('./calculator');

describe('calculator', function() {
    describe('add promise', function() {
        this.timeout(5000);
        this.slow(5000);

        // TEST OPERATION
        it('harusnya bisa melakukan operasi pertambahan', async function() {
            let result = await addPromise(1,1);
            expect(result).to.be.eq(2);
            result = await addPromise(5,5);
            expect(result).to.be.eq(10);
        });

        // TEST VALIDITAS INPUT
        context('input tidak valid', function() {
            it('harusnya keluar error', function() {
                return expect(addPromise(null, 2))
                .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });

    describe('min promise', function() {
        this.timeout(5000);
        this.slow(5000);

        // TEST OPERATION
        it('harusnya bisa melakukan operasi pengurangan', async function() {
            let result = await minPromise(1,1);
            expect(result).to.be.eq(0);
            result = await minPromise(5,3);
            expect(result).to.be.eq(2);
        });

        // TEST VALIDITAS INPUT
        context('input tidak valid', function() {
            it('harusnya keluar error', function() {
                return expect(minPromise(null, 2))
                .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });
        
    describe('multi promise', function() {
        this.timeout(5000);
        this.slow(5000);

        // TEST OPERATION
        it('harusnya bisa melakukan operasi perkalian', async function() {
            let result = await multiPromise(2,2);
            expect(result).to.be.eq(4);
            result = await multiPromise(5,5);
            expect(result).to.be.eq(25);
        });

        // TEST VALIDITAS INPUT
        context('input tidak valid', function() {
            it('harusnya keluar error', function() {
                return expect(multiPromise(null, 2))
                .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });

    describe('div promise', function () {
        this.timeout(5000);
        this.slow(5000);

        // TEST OPERATION
        it('harusnya bisa melakukan operasi pembagian', async function() {
            let result = await divPromise(2,2);
            expect(result).to.be.eq(1);
            result = await divPromise(15,3);
            expect(result).to.be.eq(5);
        });

        // TEST VALIDITAS INPUT
        context('input tidak valid', function() {
            it('harusnya keluar error', function() {
                return expect(divPromise(null, 2))
                .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
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
  });
});
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
