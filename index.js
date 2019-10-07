const { add } = require('./calculator');
const { expect } = require('chai');

const res = add(1,2);
expect(res).to.be.eq(3);