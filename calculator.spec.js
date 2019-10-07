const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect } = require('chai')
const { add, addPromise, 
    substract, substractPromise,
    multiply, multiplyPromise,
    divide, dividePromise,
    ERR_MSG } = require('./calculator')

describe('calculator', function(){
    describe('add async', function(){
        this.timeout(10000)
        this.slow(10000)

        it('sholud do addition operation', function(done){
            add(1, 2, (err, result) => {
                expect(result).to.be.eq(3)
                add(9, 2, (err, result) => {
                    expect(result).to.be.eq(11)
                    done()
                })
            })
        })

        it('sholud do addition operation with async function', async function(){
            let result = await addPromise(1, 2)
            expect(result).to.be.eq(3)
            result = await addPromise(9, 2)
            expect(result).to.be.eq(11)
        })

        context('input is not valid', function(){
            it('should be error', function(done){
                add(null, 2, (err, result) => {
                    expect(err).to.be.exist
                    expect(result).to.be.not.exist
                    expect(err.message).to.be.eq(ERR_MSG)
                    done()
                })
            })
        })
    })

    describe('add promise', function(){
        this.timeout(10000)
        this.slow(10000)
        it('should do addition operation', function(){
            return expect(addPromise(1, 2))
                .to.be.eventually.eq(3)
                .then(() => expect(addPromise(9, 2))
                .to.be.eventually.eq(11))
            
        })

        context('input is not valid', function(){
            it('should be error', function(){
                return expect(addPromise(null, 2))
                    .to.be.rejectedWith(Error, ERR_MSG)
            })
        })
    })

    describe('substract promise', function(){
        this.timeout(10000)
        this.slow(10000)
        it('should do substract operation', async function(){
            let result = await substractPromise(5, 4)
            expect(result).to.be.eq(1)
            result = await substractPromise(15, 6)
            expect(result).to.be.eq(9)
        })

        context('input is not valid', function(){
            it('should be error', function(){
                return expect(addPromise(null, 2))
                    .to.be.rejectedWith(Error, ERR_MSG)
            })
        })
    })

    describe.only('multiply promise', function(){
        this.timeout(10000)
        this.slow(10000)
        it('should do multiply operation', async function(){
            let result = await multiplyPromise(5, 4)
            expect(result).to.be.eq(20)
            result = await multiplyPromise(5, 6)
            expect(result).to.be.eq(30)
        })

        context('input is not valid', function(){
            it('should be error', function(){
                return expect(addPromise(null, 2))
                    .to.be.rejectedWith(Error, ERR_MSG)
            })
        })
    })

    describe.only('divide promise', function(){
        this.timeout(10000)
        this.slow(10000)
        it('should do divide operation', async function(){
            let result = await dividePromise(8, 4)
            expect(result).to.be.eq(2)
            result = await dividePromise(25, 5)
            expect(result).to.be.eq(5)
        })

        context('input is not valid', function(){
            it('should be error', function(){
                return expect(addPromise(null, 2))
                    .to.be.rejectedWith(Error, ERR_MSG)
            })
        })
    })
})