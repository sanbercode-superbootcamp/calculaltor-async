function add(a, b, callback) {
  if (!a || !b) {
    callback(new Error('a & b is mandatory'));
    return
  }
  const c = a + b;
  setTimeout(() => {
    callback(null, c);
  }, 1000);
}

exports.add = add;
