const ERR_MSG = 'a & b is mandatory';


function add(a, b, callback) {
  if(!a || !b) {
    callback(new Error(ERR_MSG), null);
    return
  }
  const c = a + b;
  setTimeout(() => {
    callback(null, c);
  }, 1000);
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
  }, 1000);
}

function timesPromise(a, b) {
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
