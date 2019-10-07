const { addPromise } = require('./calculator');
const { minusPromise } = require('./calculator');
const { timesPromise } = require('./calculator');
const { dividePromise } = require('./calculator');
const { expect } = require('chai');

addPromise(1, 2)
.then((result) => addPromise(2, result))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(5);
});

minusPromise(5, 1)
.then((result) => minusPromise(10, result))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(6);
});

timesPromise(2, 1)
.then((result) => timesPromise(5, result))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(10);
});

dividePromise(2, 1)
.then((result) => dividePromise(10, result))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(5);
});