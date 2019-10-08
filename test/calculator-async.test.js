const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const {
    expect
} = require('chai');

const {
    addition,
    subtraction,
    multiplication,
    division,
    ERROR_MSG
} = require('../lib/calculator-async');



describe('calculator', function () {
    describe('tes fungsi calculatory async', function () {
        this.timeout(10000);
        this.slow(10000);


        it('harusnya bisa melakukan operasi pertambahan async', async function () {
            let result = await addition(1, 2);
            expect(result).to.be.eq(3);
            result = await addition(3, 4);
            expect(result).to.be.eq(7);
            result = await addition(9, 1);
            expect(result).to.be.eq(10);
        });

        it('harusnya bisa melakukan operasi pengurangan async', async function () {
            let result = await subtraction(5, 2);
            expect(result).to.be.eq(3);
            result = await subtraction(4, 4);
            expect(result).to.be.eq(0);
            result = await subtraction(9, 1);
            expect(result).to.be.eq(8);
        })

        it('harusnya bisa melakukan operasi perkalian async', async function () {
            let result = await multiplication(1, 2);
            expect(result).to.be.eq(2);
            result = await multiplication(3, 4);
            expect(result).to.be.eq(12);
            result = await multiplication(9, 1);
            expect(result).to.be.eq(9);
        })

        it('harusnya bisa melakukan operasi pembagian async', async function () {
            let result = await division(2, 2);
            expect(result).to.be.eq(1);
            result = await division(10, 2);
            expect(result).to.be.eq(5);
            result = await division(6, 2);
            expect(result).to.be.eq(3);
        })
    })

});