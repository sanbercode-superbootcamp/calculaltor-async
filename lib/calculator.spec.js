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

  });
});
