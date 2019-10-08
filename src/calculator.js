const ERR_MSG = ['a & b is mandatory', 'parameters should be integer'];

var calculator = {
  add: function(a, b, callback) {
    if(!a || !b) {
      callback(new Error(ERR_MSG[0]));
      return
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
      callback(new Error(ERR_MSG[1]));
      return
    }
    setTimeout(() => {
      callback(null, a + b);
    }, 1000);
  },
  minus: function(a, b, callback) {
    if(!a || !b) {
      callback(new Error(ERR_MSG[0]));
      return
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
      callback(new Error(ERR_MSG[1]));
      return
    }
    setTimeout(() => {
      callback(null, a - b);
    }, 1000);
  },
  multiply: function(a, b, callback) {
    if(!a || !b) {
      callback(new Error(ERR_MSG[0]));
      return
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
      callback(new Error(ERR_MSG[1]));
      return
    }
    setTimeout(() => {
      callback(null, a * b);
    }, 1000);
  },
  divide: function(a, b, callback) {
    if(!a || !b) {
      callback(new Error(ERR_MSG[0]));
      return
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
      callback(new Error(ERR_MSG[1]));
      return
    }
    setTimeout(() => {
      callback(null, a / b);
    }, 1000);
  }
}

var calculatorPromise = {
  add: function(a, b) {
    return new Promise((resolve, reject) => {
      calculator.add(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  minus: function(a, b) {
    return new Promise((resolve, reject) => {
      calculator.minus(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  multiply: function(a, b) {
    return new Promise((resolve, reject) => {
      calculator.multiply(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  divide: function(a, b) {
    return new Promise((resolve, reject) => {
      calculator.divide(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  }
}

function minusPromise(a, b) {
  return new Promise((resolve, reject) => {
    calculator.minus(a, b, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
}

exports.calculator = calculator;
exports.calculatorPromise = calculatorPromise;
exports.minusPromise = minusPromise;
exports.ERR_MSG = ERR_MSG;