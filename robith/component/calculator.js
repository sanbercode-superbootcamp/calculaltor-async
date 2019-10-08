const INVALID_PARAM = "Error Invalid Parameter";
const PARAM_NOT_A_NUMBER = "Error Input Should be A Number";

module.exports = {
    add: (a, b) => {
        return new Promise((resolve, reject) => {
            if (!a || !b) {
                reject(INVALID_PARAM);
                return;
            } else if (typeof a != 'number' || typeof b != 'number') {
                reject(PARAM_NOT_A_NUMBER);
            }
            setTimeout(() => {
                resolve(a + b);
            }, 2000)
        })
    },
    substract: (a, b) => {
        return new Promise((resolve, reject) => {
            if (!a || !b) {
                reject(INVALID_PARAM);
                return;
            } else if (typeof a != 'number' || typeof b != 'number') {
                reject(PARAM_NOT_A_NUMBER);
            }
            setTimeout(() => {
                resolve(a - b);
            }, 2000)
        })
    },
    divide: (a, b) => {
        return new Promise((resolve, reject) => {
            if (!a || !b) {
                reject(INVALID_PARAM);
                return;
            } else if (typeof a != 'number' || typeof b != 'number') {
                reject(PARAM_NOT_A_NUMBER);
            }
            setTimeout(() => {
                resolve(a / b);
            }, 2000)
        })
    },
    multiple: (a, b) => {
        return new Promise((resolve, reject) => {
            if (!a || !b) {
                reject(INVALID_PARAM);
                return;
            } else if (typeof a != 'number' || typeof b != 'number') {
                reject(PARAM_NOT_A_NUMBER);
            }
            setTimeout(() => {
                resolve(a * b);
            }, 2000)
        })
    }
}

module.exports.INVALID_PARAM = INVALID_PARAM;
module.exports.PARAM_NOT_A_NUMBER = PARAM_NOT_A_NUMBER;