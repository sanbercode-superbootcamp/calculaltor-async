const { add } = require('./calculator');
const { expect } = require('chai');

add(1, 2, function(res){
  expect(res).to.be.eq(3);
});
