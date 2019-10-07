const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;
const { add, addPromise, ERROR_MSG } = require('./calculator');

describe('calculator', function(){
    describe('add', function(){
        this.timeout(10000);
        this.slow(10000);
        it('can process adding operation', function(done){
            add(1,2, (err, result) => {
                expect(result).to.be.eq(3);
                add(9,2, (err, result) => {
                    expect(result).to.be.eq(11);
                    done();
                });
            });
        });
        context('invalid input', function(){
            it('appears error', function(done){
                add(null, 2, (err, result) => {
                    expect(err).to.be.exist;
                    expect(result).to.be.not.exist;
                    done();
                });
            });
        });
    });

    describe("add promise", function(){
        this.timeout(10000);
        this.slow(10000);

        it("can do adding operation", function(){
            return expect(addPromise(1,2))
                .to.be.eventually.eq(3)
                .then(() => expect(addPromise(9, 2))
                .to.be.eventually.eq(11));
        });

        it.only("can do adding operation 2", async function(){
            let result = await addPromise(1, 2);
            expect(result).to.be.eq(3)
            result = await addPromise(9, 2);
            expect(result).to.be.eq(11)
        })

        context('invalid input', function(){
            it('appears error', function(){
                return expect(addPromise(null, 2))
                    .to.be.rejectedWith(Error, "a & b is mandatory")
            });
        });
    });
});