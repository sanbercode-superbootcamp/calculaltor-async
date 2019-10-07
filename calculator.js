const ERROR_MSG = 'a & b is mandatory';

function add(a, b, timeout, callback) {
  if (!a || !b) {
    callback(new Error(ERROR_MSG));
    return
  }
  const c = a + b;
  setTimeout(() => {
    callback(null, c);
  }, timeout || 1000);
}

function addPromise(a, b, timeout) {
  return new Promise((resolve, reject) => {
    add(a, b, timeout, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
}

exports.ERROR_MSG = ERROR_MSG;
exports.add = add;
exports.addPromise = addPromise;
