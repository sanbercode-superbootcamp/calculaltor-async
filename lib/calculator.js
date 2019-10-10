const ERROR_MSG = 'a & b is mandatory';

<<<<<<< HEAD
// FUNGSI UTAMA

function add(a, b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a + b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function min(a, b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a - b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function multi(a, b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a * b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

function div(a, b, callback) {
    if(!a || !b) {
        callback(new Error(ERROR_MSG));
        return;
    }
    const c = a / b;
    setTimeout(() => {
        callback(null, c);
    }, 1000);
}

// FUNGSI PROMISE

function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        add(a, b, (err, res) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function minPromise(a, b) {
    return new Promise((resolve, reject) => {
        min(a, b, (err, res) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function multiPromise(a, b) {
    return new Promise((resolve, reject) => {
        multi(a, b, (err, res) => {
            if(err) {
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
            if(err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
=======
function add(a, b, callback) {
  if (!a || !b) {
    callback(new Error(ERROR_MSG));
    return
  }
  const c = a + b;
  setTimeout(() => {
    callback(null, c);
  }, 3000);
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
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
}

exports.ERROR_MSG = ERROR_MSG;
exports.add = add;
<<<<<<< HEAD
exports.min = min;
exports.multi = multi;
exports.div = div;
exports.addPromise = addPromise;
exports.minPromise = minPromise;
exports.multiPromise = multiPromise;
exports.divPromise = divPromise;
=======
exports.addPromise = addPromise;
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
