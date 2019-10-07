const { add, addPromise, subtract, subtractPromise, times, timesPromise, divide, dividePromise, ERROR_MSG } = require('./tugasCalc');
const { expect } = require('chai');
const chai = require('chai');
const chaiAsPromsied = require('chai-as-promised');
chai.use(chaiAsPromsied) 


describe("calculator", function() {
    describe("add", function() {
        this.timeout(10000);
        this.slow(10000);

        it ("harusnya gini doang bisa lah pertambahan biasa", function(done) {
            add(1, 2, (err, result) => {
                expect(result).to.be.eq(3);
                add(9, 2, (err, result) => {
                    expect(result).to.be.eq(11);
                    done();
                });
            });
        });

        context("input tydac valid", function() {
            it("harusnya keluar error ih", function(done) {
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