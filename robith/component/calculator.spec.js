const chaiasPromised = require('chai-as-promised');
const { expect } = require('chai').use(chaiasPromised);
const { add, divide, multiple, substract, INVALID_PARAM, PARAM_NOT_A_NUMBER } = require('./calculator');

describe('Async Calculator Unit Test', function () {
    describe('Addition', function () {
        this.timeout(5000);

        it('should output 6 for 3 + 3 within 2 seconds', async function () {
            let res = await add(3, 3);
            expect(res).to.be.eq(6);
        })

        context('Invalid Input', function () {
            it('should return error of INVALID_PARAM for 3 + null', async function () {
                await expect(add(3, null)).to.be.rejectedWith(INVALID_PARAM);
            })
            it('should return error of PARAM_NOT_A_NUMBER for 4 + \'4\'', async function () {
                await expect(add(3, '4')).to.be.rejectedWith(PARAM_NOT_A_NUMBER);
            })
        })
    })

    describe('Substraction', function () {
        this.timeout(5000);

        it('should output 1 for 5 - 2, then (-) 2 within 4 seconds', async function () {
            let res = await substract(5, 2);
            expect(res).to.be.eq(3);
            res = await substract(res, 2);
            expect(res).to.be.eq(1);
        })

        context('Invalid Input', function () {
            it('should return error of INVALID_PARAM for 5 - null', async function () {
                await expect(substract(5, null)).to.be.rejectedWith(INVALID_PARAM);
            })
        })
    })

    describe('Division', function () {
        this.timeout(5000);

        it('should output 3 for 12:4 within 2 seconds', async function () {
            let res = await divide(12, 4);
            expect(res).to.be.eq(3);
        })
        it('should output [3, 4, 6] for 12:4, 12:3, 12:2 concurrently within 2 seconds', async function () {
            let res = await Promise.all([
                divide(12, 4),
                divide(12, 3),
                divide(12, 2),
            ]);
            expect(res).to.be.deep.eq([3, 4, 6]);
        })

        context('Invalid Input', function () {
            it('should return error of PARAM_NOT_A_NUMBER for 5:\'5\' ', async function () {
                await expect(divide(5, '5')).to.be.rejectedWith(PARAM_NOT_A_NUMBER);
            })
        })
    })
    describe('Multiplication', function () {
        this.timeout(10000);

        it('should output 144 for 12x12 within 2 seconds', async function () {
            let res = await multiple(12, 12);
            expect(res).to.be.eq(144);
        })
        it('should eventually output 512 for 64x2, x2, x2', function () {
            return expect(multiple(64, 2)).to.be.eventually.eq(128)
                .then((res) => expect(multiple(res, 2)).to.be.eventually.eq(256)
                    .then((res) => expect(multiple(res, 2)).to.be.eventually.eq(512)));
        })

        context('Invalid Input', function () {
            it('should return error of PARAM_NOT_A_NUMBER for 5x\'5\' ', async function () {
                await expect(multiple(5, '5')).to.be.rejectedWith(PARAM_NOT_A_NUMBER);
            })
        })
    })
})