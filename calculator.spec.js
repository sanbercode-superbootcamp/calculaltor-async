const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;
const { add, minus, times, divide, addPromise, minusPromise, timesPromise, dividePromise, ERROR_MSG } = require('./calculator');

describe.only('calculator', function(){
    this.timeout(10000)
    this.slow(10000)
    describe('add', function(){
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

    describe('minus', function(){
        it('can process adding operation', function(done){
            minus(5,2, (err, result) => {
                expect(result).to.be.eq(3);
                minus(9,2, (err, result) => {
                    expect(result).to.be.eq(7);
                    done();
                });
            });
        });
        context('invalid input', function(){
            it('appears error', function(done){
                minus(null, 2, (err, result) => {
                    expect(err).to.be.exist;
                    expect(result).to.be.not.exist;
                    done();
                });
            });
        });
    });

    describe('times', function(){
        it('can process adding operation', function(done){
            times(1,2, (err, result) => {
                expect(result).to.be.eq(2);
                times(9,2, (err, result) => {
                    expect(result).to.be.eq(18);
                    done();
                });
            });
        });
        context('invalid input', function(){
            it('appears error', function(done){
                times(null, 2, (err, result) => {
                    expect(err).to.be.exist;
                    expect(result).to.be.not.exist;
                    done();
                });
            });
        });
    });

    describe('divide', function(){
        it('can process adding operation', function(done){
            divide(4,2, (err, result) => {
                expect(result).to.be.eq(2);
                divide(8,2, (err, result) => {
                    expect(result).to.be.eq(4);
                    done();
                });
            });
        });
        context('invalid input', function(){
            it('appears error', function(done){
                divide(null, 2, (err, result) => {
                    expect(err).to.be.exist;
                    expect(result).to.be.not.exist;
                    done();
                });
            });
        });
    });
});

describe("calculator with promises", function() {
    this.timeout(10000);
    this.slow(10000);

    describe("add promise", function(){
        it("can do adding operation", function(){
            return expect(addPromise(1,2))
                .to.be.eventually.eq(3)
                .then(() => expect(addPromise(9, 2))
                .to.be.eventually.eq(11));
        });

        it("can do adding operation 2", async function(){
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
})