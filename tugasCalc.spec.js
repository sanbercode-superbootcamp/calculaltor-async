const { add, addPromise, ERROR_MSG } = require('./tugasCalc');
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

        it.only("harusnya sih bisa gitu doang", async function() {
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
});