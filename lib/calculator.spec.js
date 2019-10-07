const { expect } = require('chai');
const { add } = require('./calculator');

describe('calculator', function(){
    describe('add', function(){
        it('harusnya dapat melakukan operasi penjumlahan', function(){
            add(1, 2, (err, result) => {
                expect(result).to.be.eq(3);
            });
            add(9, 2, (err, result) => {
                expect(result).to.be.eq(11);
            });
        });

        context('input tidak valid', function(){
            it('harusnya keluar error', function(){
                add(a, null, (err, result) => {
                    expect(err).to.be.exist;
                    expect(result).to.be.not.exist;
                });
            });
        });
    });
});