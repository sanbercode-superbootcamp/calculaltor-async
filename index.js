<<<<<<< HEAD
const { addPromise } = require('../calculator-async/lib/calculator');
const { expect } = require('chai');

function printResult(result) {
    console.log(result);
}

addPromise(1, 2, 2000).then(printResult);
addPromise(1, 1, 1000).then(printResult);
=======
const { addPromise, ERROR_MSG } = require("./lib/calculator");
const { expect } = require("chai");

Promise.all([
  addPromise(1,1, 3000),
  addPromise(1,null, 1000)
]).then(results => {
}).catch(err => {
  expect(err).to.be.exist;
  expect(err.message).to.be.eq(ERROR_MSG);
});
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
