const { addPromise } = require('./lib/calculator');
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

function printResult(result) {
    console.log(result);
}

// addPromise(1, 2)
// .then((result) => addPromise(2, result))
// .then((result) => addPromise(3, result))
// .then((result) => addPromise(4, result))
// .then((result) => {
//     console.log(result);
//     expect(result).to.be.eq(12);
// });

// addPromise(1, 1)
// .then((result) => addPromise(1, result))
// .then((result) => {
//     console.log(result);
//     expect(result).to.be.eq(3);
// });



// let result = 0;
// add(1,2, function(res) {
//     result = res;
// });
// expect(result).to.be.eq(0);
// setTimeout(() => {
//     expect(result).to.be.eq(3);
// }, 2000);
