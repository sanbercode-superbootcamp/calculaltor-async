const { add,sub,div,mul,addPromise,subPromise,divPromise,mulPromise,ERROR_MSG } = require('./calculator');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai

describe('Operasi Perhitungan (async function)', function(){
    this.timeout('4500');
    this.slow('2500');

    it("Dapat melakukan penjumlahan", async function(){
        let result = await addPromise(3, 2);
        expect(result).to.be.eq(5)
        result = await addPromise(result, 3);
        expect(result).to.be.eq(8)
    });
    it("Dapat melakukan pengurangan", async function(){
        let result = await subPromise(3, 2);
        expect(result).to.be.eq(1)
        result = await subPromise(result, 3);
        expect(result).to.be.eq(-2)
    });
    it("Dapat melakukan pembagian", async function(){
        let result = await divPromise(6, 2);
        expect(result).to.be.eq(3)
        result = await divPromise(result, 4);
        expect(result).to.be.eq(0.75)
    });
    it("Dapat melakukan perkalian", async function(){
        let result = await mulPromise(4, 2);
        expect(result).to.be.eq(8)
        result = await mulPromise(result, 3);
        expect(result).to.be.eq(24)
    });
    it("Dapat melakukan penjumlahan, pengurangan, pembagian, dan perkalian", async function(){
        let result = await addPromise(4, 2);
        expect(result).to.be.eq(6)
        result = await subPromise(result, 3);
        expect(result).to.be.eq(3)
        result = await divPromise(result, 3);
        expect(result).to.be.eq(1)
        result = await mulPromise(result, 9);
        expect(result).to.be.eq(9)
    });
});

describe('Operasi Perhitungan (chai-as-promised)', function(){
    this.timeout(4500);
    this.slow(3700);

    it('Dapat melakukan penjumlahan', function(){
        return expect(addPromise(5,2)).to.be.eventually.eq(7)
        .then((result) => expect(addPromise(result, 2)).to.be.eventually.eq(9))
        .then((result) => expect(addPromise(result, 1)).to.be.eventually.eq(10));
    });
    it('Dapat melakukan pengurangan', function(){
        return expect(subPromise(5,2)).to.be.eventually.eq(3)
        .then((result) => expect(subPromise(result, 2)).to.be.eventually.eq(1))
        .then((result) => expect(subPromise(result, 1)).to.be.eventually.eq(0));
    });
    it('Dapat melakukan pembagian', function(){
        return expect(divPromise(5,2)).to.be.eventually.eq(2.5)
        .then((result) => expect(divPromise(result, 2)).to.be.eventually.eq(1.25))
        .then((result) => expect(divPromise(result, 1)).to.be.eventually.eq(1.25));
    });
    it('Dapat melakukan perkalian', function(){
        return expect(mulPromise(5,2)).to.be.eventually.eq(10)
        .then((result) => expect(mulPromise(result, 2)).to.be.eventually.eq(20))
        .then((result) => expect(mulPromise(result, 1)).to.be.eventually.eq(20));
    });
    it('Dapat melakukan penjumlahan, pengurangan, pembagian, dan perkalian', function(){
        return expect(addPromise(5,2)).to.be.eventually.eq(7)
        .then((result) => expect(subPromise(result, 3)).to.be.eventually.eq(4))
        .then((result) => expect(divPromise(result, 2)).to.be.eventually.eq(2))
        .then((result) => expect(mulPromise(result, 7)).to.be.eventually.eq(14));
    });
});

describe('Operasi Perhitungan (promise.all)',function(){
    this.timeout(3000);
    this.slow(1100);

    it('Dapat melakukan penjumlahan', async function(){
        let result = await Promise.all([addPromise(2, 3), addPromise(3, 4), addPromise(4, 5)])
        expect(result).to.be.deep.equal([5, 7, 9]);
    });
    it('Dapat melakukan pengurangn', async function(){
        let result = await Promise.all([subPromise(2, 3), subPromise(3, 4), subPromise(4, 5)])
        expect(result).to.be.deep.equal([-1, -1, -1]);
    });
    it('Dapat melakukan pembagian', async function(){
        let result = await Promise.all([divPromise(6, 3), divPromise(16, 4), divPromise(20, 5)])
        expect(result).to.be.deep.equal([2, 4, 4]);
    });
    it('Dapat melakukan perkalian', async function(){
        let result = await Promise.all([mulPromise(2, 3), mulPromise(3, 4), mulPromise(4, 5)])
        expect(result).to.be.deep.equal([6, 12, 20]);
    });
    it('Dapat melakukan operasi campuran', async function(){
        let result = await Promise.all([addPromise(2, 3), subPromise(12, 7), divPromise(50, 10), mulPromise(5, 1)]);
        expect(result).to.be.deep.equal([5, 5, 5, 5]);
        result = await Promise.all([addPromise(result[0], 5), subPromise(result[1], -5), divPromise(result[2], 0.5), mulPromise(result[3], 2)]);
        expect(result).to.be.deep.equal([10, 10, 10, 10]);
    });
});

    context('Terdapat input yang null', function() {
        it('Input null dalam operasi penjumlahan', function() {
            return expect(addPromise(null,3)).to.be.rejectedWith(Error, ERROR_MSG);
        });
        it('Input null dalam operasi pengurangan', function() {
            return expect(subPromise(null,3)).to.be.rejectedWith(Error, ERROR_MSG);
        });
        it('Input null dalam operasi pembagian', function() {
            return expect(divPromise(null,3)).to.be.rejectedWith(Error, ERROR_MSG);
        });
        it('Input null dalam operasi perkalian', function() {
            return expect(mulPromise(null,3)).to.be.rejectedWith(Error, ERROR_MSG);
        });
    });


