
const ERROR_MSG = 'GALAT: parameter a dan b harus memiliki nilai'

function add(a ,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return
    }
    const c = a + b;
    setTimeout(() => {
        callback(null, c);
    }, 900);
}
function sub(a ,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return
    }
    const c = a - b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}
function div(a ,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return
    }
    const c = a / b;
    setTimeout(() => {
        callback(null, c);
    }, 1100);
}
function mul(a ,b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return
    }
    const c = a * b;
    setTimeout(() => {
        callback(null, c);
    }, 1200);
}


function addPromise(a, b) {
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

function subPromise(a, b) {
    return new Promise((resolve, reject) => {
        sub(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function divPromise(a, b) {
    return new Promise((resolve, reject) => {
        div(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function mulPromise(a, b) {
    return new Promise((resolve, reject) => {
        mul(a, b, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

exports.ERROR_MSG = ERROR_MSG;
exports.addPromise = addPromise;
exports.subPromise = subPromise;
exports.divPromise = divPromise;
exports.mulPromise = mulPromise;
exports.add = add;
exports.sub = sub;
exports.div = div;
exports.mul = mul; 