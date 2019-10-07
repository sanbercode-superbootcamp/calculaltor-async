function add(a,b, callback) {
    if(!a || !b) {
        callback(new Error('a & b is mandatory'));
        return;
    }
    const c = a + b;
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

exports.add = add;
exports.addPromise = addPromise;