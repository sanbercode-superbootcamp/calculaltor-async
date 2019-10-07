const { expect } = require('chai');
const { add } = require('./calculator');

describe('calculator', function(){
    describe('add', function(){
        it('can process adding operation', function(){
            add(1,2, (err, result) => {
                expect(result).to.be.eq(3);
            });
            add(9,2, (err, result) => {
                expect(result).to.be.eq(11);
            });
        });
        context('invalid input', function(){
            it('appears error', function(){
                add(null, 2, (err, result) => {
                    expect(err).to.be.exist;
                    expect(result).to.be.not.exist;
                })
            })
        })
    });
});