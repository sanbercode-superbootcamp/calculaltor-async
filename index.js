const { add,sub,div,mul,addPromise,subPromise,divPromise,mulPromise,ERROR_MSG } = require('./lib/calculator');
const { expect } = require('chai');

addPromise(1, 2)
.then((result) => addPromise(2, result))
.then((result) => {
    console.log('hasil tambah = ',result);
    expect(result).to.be.eq(5);
});

mulPromise(1, 2)
.then((result) => addPromise(2, result))
.then((result) => {
    console.log('hasil kali = ',result);
    expect(result).to.be.eq(4);
});

subPromise(1, 2)
.then((result) => subPromise(2, result))
.then((result) => {
    console.log('hasil kurang = ',result);
    expect(result).to.be.eq(3);
});

divPromise(1, 2)
.then((result) => divPromise(2, result))
.then((result) => {
    console.log('hasil bagi = ',result);
    expect(result).to.be.eq(4);
});

Promise.all([
    addPromise(null,1),
    subPromise(1,null),
    divPromise(null,1),
    mulPromise(1,null)
  ]).then(results => {
  }).catch(err => {
    expect(err).to.be.exist;
    expect(err.message).to.be.eq(ERROR_MSG);
    console.log(err);
  });
