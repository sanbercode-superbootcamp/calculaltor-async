const { addPromise, subtractPromise, timesPromise, dividePromise, ERROR_MSG } = require('./tugasCalc');
const { expect } = require('chai');
const chai = require('chai');
const chaiAsPromsied = require('chai-as-promised');
chai.use(chaiAsPromsied) 


describe("calculator", function() {
    describe("add promise", function() {
        this.timeout(10000);
        this.slow(10000);

        it("harusnya sih bisa gitu doang", function() {
            return expect(addPromise(1, 2))
            .to.be.eventually.eq(3)
            .then(() => expect(addPromise(9, 2))
            .to.be.eventually.eq(11))
            .then(() => expect(addPromise(17, -9))
            .to.be.eventually.eq(8));
        });

        it("harusnya sih bisa gitu doang", async function() {
            let result = await addPromise(1, 2);
            expect(result).to.be.eq(3)
            result = await addPromise(9, 2);
            expect(result).to.be.eq(11)
            result = await addPromise(17, -9);
            expect(result).to.be.eq(8)
        });

        it("harusnya sih bisa penjumlahan doang", async function() {
            const result = await Promise.all([
                addPromise(1, 2),
                addPromise(9, 2),
                addPromise(17, -9)
            ]);
            expect(result).to.be.deep.eq([3, 11, 8])
        });

        context("input tydac valid", function() {
            it("harusnya keluar error ih", function() {
                return expect(addPromise(null, 2))
                    .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });

    describe("subtract promise", function() {
        this.timeout(10000);
        this.slow(10000);

        it("harusnya sih bisa pengurangan doang", function() {
            return expect(subtractPromise(5, 2))
            .to.be.eventually.eq(3)
            .then(() => expect(subtractPromise(9, 2))
            .to.be.eventually.eq(7))
            .then(() => expect(subtractPromise(17, -9))
            .to.be.eventually.eq(26));
        });

        it("harusnya sih bisa pengurangan doang", async function() {
            let result = await subtractPromise(5, 2);
            expect(result).to.be.eq(3)
            result = await subtractPromise(9, 2);
            expect(result).to.be.eq(7)
            result = await subtractPromise(17, -9);
            expect(result).to.be.eq(26)
        });

        it("harusnya sih bisa pengurangan doang", async function() {
            const result = await Promise.all([
                subtractPromise(10, 2),
                subtractPromise(9, 2),
                subtractPromise(17, -9)
            ]);
            expect(result).to.be.deep.eq([8, 7, 26])
        });

        context("input tydac valid", function() {
            it("harusnya keluar error ye kan", function() {
                return expect(subtractPromise(null, 2))
                    .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });

    describe("times promise", function() {
        this.timeout(10000);
        this.slow(10000);

        it("harusnya sih bisa perkalian doang", function() {
            return expect(timesPromise(1, 2))
            .to.be.eventually.eq(2)
            .then(() => expect(timesPromise(9, 2))
            .to.be.eventually.eq(18))
            .then(() => expect(timesPromise(7, -9))
            .to.be.eventually.eq(-63));
        });

        it("harusnya sih bisa perkalian doang", async function() {
            let result = await timesPromise(1, 2);
            expect(result).to.be.eq(2)
            result = await timesPromise(9, 2);
            expect(result).to.be.eq(18)
            result = await timesPromise(7, -9);
            expect(result).to.be.eq(-63)
        });

        it("harusnya sih bisa perkalian doang", async function() {
            const result = await Promise.all([
                timesPromise(4, 2),
                timesPromise(9, 2),
                timesPromise(7, -9)
            ]);
            expect(result).to.be.deep.eq([8, 18, -63])
        });

        context("input tydac valid", function() {
            it("harusnya keluar error ye kan", function() {
                return expect(timesPromise(null, 2))
                    .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });

    describe("divide promise", function() {
        this.timeout(10000);
        this.slow(10000);

        it("harusnya sih bisa pembagian doang", function() {
            return expect(dividePromise(10, 2))
            .to.be.eventually.eq(5)
            .then(() => expect(dividePromise(9, 3))
            .to.be.eventually.eq(3))
            .then(() => expect(dividePromise(54, -9))
            .to.be.eventually.eq(-6));
        });

        it("harusnya sih bisa pembagian doang", async function() {
            let result = await dividePromise(10, 2);
            expect(result).to.be.eq(5)
            result = await dividePromise(9, 3);
            expect(result).to.be.eq(3)
            result = await dividePromise(54, -9);
            expect(result).to.be.eq(-6)
        });

        it("harusnya sih bisa pembagian doang", async function() {
            const result = await Promise.all([
                dividePromise(10, 2),
                dividePromise(9, 3),
                dividePromise(1664, 4)
            ]);
            expect(result).to.be.deep.eq([5, 3, 416])
        });

        context("input tydac valid", function() {
            it("harusnya keluar error ye kan", function() {
                return expect(dividePromise(null, 2))
                    .to.be.rejectedWith(Error, ERROR_MSG);
            });
        });
    });
});