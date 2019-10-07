const ERR_MSG = 'a & b is mandatory';

const calculator = {
  add: function(a, b, callback) {
    if(!a || !b) {
      callback(new Error(ERR_MSG), null);
      return
    }
    const c = a + b;
    setTimeout(() => {
      callback(null, c);
    }, 1000);
  },
  addPromise: function(a, b) {
    return new Promise((resolve, reject) => {
      add(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    };
  },
  minus: function(a, b) {
    if(!a || !b) {
      callback(new Error(ERR_MSG), null);
      return
    }
    const c = a - b;
    setTimeout(() => {
      callback(null, c);
    }, 1000);
  },
  minusPromise: function(a, b) {
    return new Promise((resolve, reject) => {
      minus(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    };
  },
  times: function(a, b) {
    if(!a || !b) {
      callback(new Error(ERR_MSG), null);
      return
    }
    const c = a * b;
    setTimeout(() => {
      callback(null, c);
    }, 1000);
  },
  timesPromise: function(a, b) {
    return new Promise((resolve, reject) => {
      times(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    };
  },
  divide: function(a, b) {
    if(!a || !b) {
      callback(new Error(ERR_MSG), null);
      return
    }
    const c = a - b;
    setTimeout(() => {
      callback(null, c);
    }, 1000);
  },
  dividePromise: function(a, b) {
    return new Promise((resolve, reject) => {
      times(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    };
  }
}

module.exports = calculator;
exports.ERR_MSG = ERR_MSG;
