<<<<<<< HEAD
const { addPromise, minusPromise, timesPromise, dividePromise,  ERR_MSG } = require('./lib/calculator')
const { expect } = require('chai');


exports.addPromise = addPromise;
exports.minusPromise = minusPromise;
exports.timesPromise = timesPromise;
exports.dividePromise = dividePromise;
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
