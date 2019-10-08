const { calculator, calculatorPromise } = require('./src/calculator'); // deconstructor
const { expect } = require('chai');

// avoid callback by modularize callback function
function getResult(err, result) {
  expect(err).to.be.not.exist;
  expect(result).to.be.exist;
  expect(result).to.be.eq(3);
}
calculator.add(2, 1, getResult);

calculator.minus(2, null, function(err, result) {
  expect(err).to.be.exist;
  expect(result).to.be.not.exist;
});

calculatorPromise.add(2,3)
  .then((result) => {
    calculatorPromise.divide(10, result)
    .then((result) => {
      console.log(result);
    });
  });

calculatorPromise.divide(3,1)
  .then((result) => {
    console.log(result);
  });