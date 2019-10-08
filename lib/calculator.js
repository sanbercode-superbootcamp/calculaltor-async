<<<<<<< HEAD
const ERR_MSG = 'a & b is mandatory';
const fs = require('fs');

function add(a, b, callback) {
  if(!a || !b) {
    callback(new Error(ERR_MSG), null);
=======
const ERROR_MSG = 'a & b is mandatory';

function add(a, b, callback) {
  if (!a || !b) {
    callback(new Error(ERROR_MSG));
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
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
<<<<<<< HEAD
      let file = fs.readFileSync("./video.webm");
=======
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
      resolve(res);
    });
  });
}

<<<<<<< HEAD
function minus(a, b, callback) {
  if(!a || !b) {
    callback(new Error(ERR_MSG), null);
    return
  }
  const c = a - b;
  setTimeout(() => {
    callback(null, c);
  }, 1000);
}

function minusPromise(a, b) {
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

function times(a, b, callback) {
  if(!a || !b) {
    callback(new Error(ERR_MSG), null);
    return
  }
  const c = a * b;
  setTimeout(() => {
    callback(null, c);
  }, 3000);
}

function timesPromise(a, b) {
  return new Promise((resolve, reject) => {
    times(a, b, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      let file = fs.readFileSync("./video.webm");
      resolve(res);
    });
  });
}

function divide(a, b, callback) {
  if(!a || !b) {
    callback(new Error(ERR_MSG), null);
    return
  }
  const c = a / b;
  setTimeout(() => {
    callback(null, c);
  }, 1000);
}

function dividePromise(a, b) {
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


exports.ERR_MSG = ERR_MSG;
exports.add = add;
exports.addPromise = addPromise;
exports.minus = minus;
exports.minusPromise = minusPromise;
exports.times = times;
exports.timesPromise = timesPromise;
exports.divide = divide;
exports.dividePromise = dividePromise;
=======
exports.ERROR_MSG = ERROR_MSG;
exports.add = add;
exports.addPromise = addPromise;
>>>>>>> 5d9593f11984af76f7d4b73b04fe59fb6414c6f0
