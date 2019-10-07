function add(a,b, callback) {
    const c = a + b;
    setTimeout(() => {
        callback(c);
    }, 1000);
}

exports.add = add;