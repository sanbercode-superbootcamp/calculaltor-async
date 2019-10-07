const { add, addPromise } = require('./calculator')
const { expect } = require('chai')

function handleResult(err, res){
    expect(err).to.be.not.exist
    expect(res).to.be.exist
    expect(res).to.be.eq(3)
    console.log(res)
}

function handleErrorResult(err, res){
    expect(err).to.be.exist
    expect(res).to.be.not.exist
}

// add(1, 2, handleResult)
// add(1, null, handleErrorResult)

// addPromise(1, 2)
//     .then((result) => addPromise(2, result))
//     .then((result) => addPromise(3, result))
//     .then((result) => addPromise(4, result))
//     .then((result) => {
//         console.log(result)
//         expect(result).to.be.eq(12)
//     })

function printResult(result){
    console.log(result)
}

addPromise(1, 2, 2000).then(printResult)
addPromise(1, 1, 1000).then(printResult)

