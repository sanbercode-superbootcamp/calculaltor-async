const { calculator, calculatorPromise, ERR_MSG } = require('./calculator');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const {expect} = chai;

describe('Async calculator', function() {
  describe('Addition', function() {
    it("Addition of 2 numbers", function(done) {
      calculator.add(4,1, (err, result) => {
        expect(result).to.be.eq(5);
        done();
      });
    });
  })

  context("Invalid input", function() {
    it("NULL param", function(done) {
      calculator.minus(null,1, (err, result) => {
        expect(err).to.be.exist;
        expect(err.message).to.be.eq(ERR_MSG[0]);
        done();
      });
    })
  });
});

describe('Promise calculator', function() {
  this.timeout(10000);
  this.slow(10000);

  describe('Addition', function() {
    it('Addition of 2 numbers', async function() {
      return expect(calculatorPromise.add(7,3)).to.be.eventually.eq(10)
        .then(() => expect(calculatorPromise.add(9,2)).to.be.eventually.eq(11));
    });
  });
});

describe('Async promise calculator', function() {
  // this.timeout(10000);
  // this.slow(10000);

  describe('Addition', function() {
    it('Addition of 2 numbers', async function() {
      return expect(
        await calculatorPromise.add(4, 10)
      ).to.be.eq(14);
    });
  });

  describe('Substracation', function() {
    it('Substracation of 2 numbers', async function() {
      return expect(
        await calculatorPromise.minus(10, 3)
      ).to.be.eq(7);
    });
  });

  describe('Multiplication', function() {
    it('Multiplication of 2 numbers', async function() {
      return expect(
        await calculatorPromise.multiply(7, 3)
      ).to.be.eq(21);
    });
  });

  describe('Division', function() {
    it('Division of 2 numbers', async function() {
      return expect(
        await calculatorPromise.divide(8, 4)
      ).to.be.eq(2);
    });

    it('Division of a number by 0', async function() {
      await expect(
        calculatorPromise.divide(8, 0)
      ).to.be.rejectedWith(ERR_MSG[0]);
    });
  });

  it('Parameters include NULL', async function() {
    await expect( calculatorPromise.add(null, 10) ).to.be.rejectedWith(ERR_MSG[0]);
    await expect( calculatorPromise.minus(null, 10) ).to.be.rejectedWith(ERR_MSG[0]);
    await expect( calculatorPromise.multiply(null, 10) ).to.be.rejectedWith(ERR_MSG[0]);
    await expect( calculatorPromise.divide(null, 10) ).to.be.rejectedWith(ERR_MSG[0]);
  });

  it('Parameters include non-integer', async function() {
    await expect( calculatorPromise.add('a', 10) ).to.be.rejectedWith(ERR_MSG[1]);
    await expect( calculatorPromise.minus('a', 10) ).to.be.rejectedWith(ERR_MSG[1]);
    await expect( calculatorPromise.multiply('a', 10) ).to.be.rejectedWith(ERR_MSG[1]);
    await expect( calculatorPromise.divide('a', 10) ).to.be.rejectedWith(ERR_MSG[1]);
  });

  it('All processes', async function() {
    const addition = calculatorPromise.add(4, 5);
    const substracation = calculatorPromise.minus(6, 3);
    return expect(
      await Promise.all([addition, substracation])
    ).to.be.deep.eq([9, 3]);
  });
});