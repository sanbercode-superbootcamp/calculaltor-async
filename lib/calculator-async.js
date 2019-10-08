const ERROR_MSG = {
    INVALID_TYPE: "wrong data type"
}

const calculator = {

    addition: (a, b) => {
        return new Promise((resolve, reject) => {
            let sum = 0;
            // for (const number of args) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(ERROR_MSG.INVALID_TYPE);
            } else {
                sum = a + b;
            }
            // }
            setTimeout(() => {
                resolve(sum);
            }, 2000);
        })
    },
    division: (a, b) => {
        return new Promise((resolve, reject) => {
            let div = 0;
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(ERROR_MSG.INVALID_TYPE);
            } else {
                div = a / b;
            }
            setTimeout(() => {
                resolve(div);
            }, 2000);
        })
    },
    subtraction: (a, b) => {
        return new Promise((resolve, reject) => {
            let sub = 0;
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(ERROR_MSG.INVALID_TYPE);
            } else {
                sub = a - b;
            }
            setTimeout(() => {
                resolve(sub);
            }, 2000);
        })
    },
    multiplication: (a, b) => {
        return new Promise((resolve, reject) => {
            let multi = 0;
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(ERROR_MSG.INVALID_TYPE);
            } else {
                multi = a * b;
            }
            setTimeout(() => {
                resolve(multi);
            }, 2000);
        })
    }
}



module.exports = calculator;