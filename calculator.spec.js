const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect } = chai
const { plusPromise, minusPromise, multiPromise, divPromise, ERROR_MSG, plus, minus, multi, div } = require('./calculator')

describe('Calculator', function() {
    describe('Base Case', function() {
        this.timeout(5000)
        this.slow(5000)

        it('Operasi Pertambahan', async function() {
            const result = await Promise.all([
                plusPromise(9, 3),
                plusPromise(18, 3)
            ])
            expect(result).to.be.deep.eq([12, 21])
        })

        it('Operasi Pengurangan', async function() {
            const result = await Promise.all([
                minusPromise(9, 3),
                minusPromise(18, 3)
            ])
            expect(result).to.be.deep.eq([6, 15])
        })

        it('Operasi Perkalian', async function() {
            const result = await Promise.all([
                multiPromise(9, 3),
                multiPromise(18, 3)
            ])
            expect(result).to.be.deep.eq([27, 54])
        })

        it('Operasi Pembagian', async function() {
            const result = await Promise.all([
                divPromise(9, 3),
                divPromise(18, 3)
            ])
            expect(result).to.be.deep.eq([3, 6])
        })

        context('Jika Input Tidak Valid',  function() {
            it('Pertambahan error', function() {
                plus(null, 2, (err, result) => {
                    return expect(plusPromise(null, 2)).to.be.rejectedWith(Error, ERROR_MSG)
                })
            })

            it('Pengurangan error', function() {
                minus(null, 2, (err, result) => {
                    return expect(minusPromise(null, 2)).to.be.rejectedWith(Error, ERROR_MSG)
                })
            })

            it('Perkalian error', function() {
                multi(null, 2, (err, result) => {
                    return expect(multiPromise(null, 2)).to.be.rejectedWith(Error, ERROR_MSG)
                })
            })

            it('Pembagian error', function() {
                div(null, 2, (err, result) => {
                    return expect(divPromise(null, 2)).to.be.rejectedWith(Error, ERROR_MSG)
                })
            })
        })
    })
})