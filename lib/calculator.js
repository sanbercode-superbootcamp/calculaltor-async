const ERROR_MSG = 'a & b is mandatory';

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
}

exports.ERROR_MSG = ERROR_MSG;
exports.add = add;
exports.addPromise = addPromise;
