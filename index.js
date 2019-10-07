const { add } = require('./calculator');
const { expect } = require('chai');

add(1, 2, function(err, res){
  expect(err).to.be.not.exist;
  expect(res).to.be.exist;
  expect(res).to.be.eq(3);
});

add(1, null, function(err, res){
  expect(err).to.be.exist;
  expect(res).to.be.not.exist;
});
