const { add } = require('./calculator');
const { expect } = require('chai');

function handleResult (err, res){
    expect(err).to.be.not.exist;
    expect(res).to.be.exist;
    expect(res).to.be.eq(3)
}

function handleErrorResult (err, res){
    expect(err).to.be.exist;
    expect(res).to.be.not.exist;
}

add(1, 2, handleResult);
add(1, null, handleErrorResult);

// let result = 0;
// add(1,2, function(res) {
//     result = res;
// });
// expect(result).to.be.eq(0);
// setTimeout(() => {
//     expect(result).to.be.eq(3);
// }, 2000);
