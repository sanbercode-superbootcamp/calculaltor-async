const { add } = require('./calculator');
const { expect } = require('chai');

let result = 0;

function handleResult(err, res){
    expect(err).to.be.not.exist;
    expect(res).to.be.exist;
    expect(res).to.be.eq(3);
}

function handleErrorResult(err, res){
    expect(err).to.be.exist;
    expect(res).to.be.not.exist;
}

add(1, 2, handleResult);
add(1, null, handleErrorResult);