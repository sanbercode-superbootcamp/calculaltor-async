const { addPromise, minusPromise, timesPromise, dividePromise,  ERR_MSG } = require('./lib/calculator')
const { expect } = require('chai');

let result = 0;

addPromise(1, 2)
  .then((result) => minusPromise(result,2))
  .then((result) => timesPromise(result,2))
  .then((result) => dividePromise(result,2)
  .then((result) => {
    console.log(result);
    expect(result).to.be.eq(1);
  }));

async function calculate(a,b) {
  result = await addPromise(a, b).then((result) => timesPromise(result, 100));
  console.log(result);
  expect(result).to.be.eq(1000);
}

calculate(2, 8)
