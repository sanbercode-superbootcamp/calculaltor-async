const { addPromise } = require('./calculator');
const { expect } = require('chai');

addPromise(1, 2)
.then((result) => addPromise(2, result))
.then((result) => addPromise(3, result))
.then((result) => addPromise(4, result))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(12);
});

addPromise(1, 1)
.then((result) => addPromise(1, result))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(3);
});