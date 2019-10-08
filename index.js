const { plusPromise, minusPromise, multiPromise, divPromise } = require('./calculator')
// const { expect } = require("chai")

function printResult(result) {
    console.log(result)
}

multiPromise(9, 3)
    .then(printResult)
divPromise(9, 3)
    .then(printResult)
plusPromise(9, 3)
    .then(printResult)
minusPromise(9, 3)
    .then(printResult)

// harusnya hasilnya 12 6 27 3
