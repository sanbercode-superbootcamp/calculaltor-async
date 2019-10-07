function add(a, b, callback) {
  const c = a + b;
  callback(c);
}

exports.add = add;
