const ERR_MSG = 'a & b is mandatory'

function add(a, b, callback){
    if(!a || !b){
        callback(new Error(ERR_MSG))
        return
    }
    const c = a + b
    setTimeout(() => {
        callback(null, c)
    }, 1000)
}

function substract(a, b, callback){
    if(!a || !b){
        callback(new Error(ERR_MSG))
        return
    }
    const c = a - b
    setTimeout(() => {
        callback(null, c)
    }, 1000)
}

function multiply(a, b, callback){
    if(!a || !b){
        callback(new Error(ERR_MSG))
        return
    }
    const c = a * b
    setTimeout(() => {
        callback(null, c)
    }, 1000)
}

function divide(a, b, callback){
    if(!a || !b){
        callback(new Error(ERR_MSG))
        return
    }
    const c = a / b
    setTimeout(() => {
        callback(null, c)
    }, 1000)
}

function addPromise(a, b){
    return new Promise((resolve, reject) => {
        add(a, b, (err, res) => {
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

function substractPromise(a, b){
    return new Promise((resolve, reject) => {
        substract(a, b, (err, res) => {
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

function multiplyPromise(a, b){
    return new Promise((resolve, reject) => {
        multiply(a, b, (err, res) => {
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

function dividePromise(a, b){
    return new Promise((resolve, reject) => {
        divide(a, b, (err, res) => {
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

exports.add = add
exports.addPromise = addPromise
exports.substract = substract
exports.substractPromise = substractPromise
exports.multiply = multiply
exports.multiplyPromise = multiplyPromise
exports.divide = divide
exports.dividePromise = dividePromise
exports.ERR_MSG = ERR_MSG