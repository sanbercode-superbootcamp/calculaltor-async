const ERROR_MSG = 'a & b is not mandataory'


function plus(a, b, callback) {
    if(!a || !b){
        callback(new Error(ERROR_MSG))
        return
    }
    const c = a + b
    setTimeout(() => {
        callback(null, c)
    }, 1000)
}

function minus(a, b, callback) {
    if(!a || !b){
        callback(new Error(ERROR_MSG))
        return
    }
    const c = a - b
    setTimeout(() => {
        callback(null, c)
    }, 2000)
}

function multi(a, b, callback) {
    if(!a || !b){
        callback(new Error(ERROR_MSG))
        return
    }
    const c = a * b
    setTimeout(() => {
        callback(null, c)
    }, 3000)
}

function div(a, b, callback) {
    if(!a || !b){
        callback(new Error(ERROR_MSG))
        return
    }
    const c = a / b
    setTimeout(() => {
        callback(null, c)
    }, 4000)
}

function plusPromise(a, b) {
    return new Promise((resolve, reject) => {
        plus(a, b, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

function minusPromise(a, b) {
    return new Promise((resolve, reject) => {
        minus(a, b, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

function multiPromise(a, b) {
    return new Promise((resolve, reject) => {
        multi(a, b, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

function divPromise(a, b) {
    return new Promise((resolve, reject) => {
        div(a, b, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

exports.ERROR_MSG = ERROR_MSG
exports.plus = plus
exports.minus = minus
exports.multi = multi
exports.div = div
exports.plusPromise = plusPromise
exports.minusPromise = minusPromise
exports.multiPromise = multiPromise
exports.divPromise = divPromise