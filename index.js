const { add } = require('./calculator');
const { expect } = require('chai');

let result = 0;
add(1, 2, function(res){
  result = res
});
expect(result).to.be.eq(0);
setTimeout(() => {
  expect(result).to.be.eq(3);
}, 2000);
