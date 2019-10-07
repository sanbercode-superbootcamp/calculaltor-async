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
