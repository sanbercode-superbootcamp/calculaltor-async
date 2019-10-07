const ERROR_MSG = "a & b is mandatory";

function add(a,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a + b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function minus(a,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a - b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function times(a,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a * b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function divide(a,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a / b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function addPromise(a, b){
    return new Promise((resolve, reject) => {
        add(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function minusPromise(a, b){
    return new Promise((resolve, reject) => {
        minus(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function timesPromise(a, b){
    return new Promise((resolve, reject) => {
        times(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function dividePromise(a, b){
    return new Promise((resolve, reject) => {
        divide(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

exports.add = add;
exports.addPromise = addPromise;
exports.minusPromise = minusPromise;
exports.timesPromise = timesPromise;
exports.dividePromise = dividePromise;
exports.ERROR_MSG = ERROR_MSG;