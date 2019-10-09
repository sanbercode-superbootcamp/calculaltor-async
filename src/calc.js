var promise = require("promise");
//const ERR = "A atau B harus diisi"; //late implementation

//calc model object
var calc = {
    tambah: function(a, b, callback){
//        if(!a || !b){ //late implementation
//            callback(new Error(ERR), null);
//            return;
//        }
        var result = a + b;
        callback(null, result);  
    },
    kurang: function(a, b, callback){
		var result = a - b;
        callback(null, result); 
    },
    kali: function(a, b, callback){
        var result = a * b;
        callback(null, result); 
    },
    bagi: function(a, b, callback){
        var result = a / b;
        callback(null, result); 
    }
}

//calc model function
//function tambah(a, b, cb){
//    var result = a + b;
//    cb(null, result);
//}

//promise model obj
var calcPromise = {
    tambah: function(a, b){
        return new Promise((resolve, reject) => {
        calc.tambah(a, b, (err, res) => {
            if(err){
            reject(err);
            return;
            }
            resolve(res);
        })
        })
    },
    
    kurang: function(a, b){
        return new Promise((resolve, reject) => {
        calc.kurang(a, b, (err, res) => {
            if(err){
            reject(err);
            return;
            }
            resolve(res);
        })
        })
    },
    
    kali: function(a, b){
        return new Promise((resolve, reject) => {
        calc.kali(a, b, (err, res) => {
            if(err){
            reject(err);
            return;
            }
            resolve(res);
        })
        })
    },
    
    bagi: function(a, b){
        return new Promise((resolve, reject) => {
        calc.bagi(a, b, (err, res) => {
            if(err){
            reject(err);
            return;
            }
            resolve(res);
        })
        })
    },
}

//promise model function
//function tambahPromise(a, b){
//    return new Promise((resolve, reject) => {
//        calc.tambah(a, b, (err, res) => {
//            if(err){
//            reject(err);
//            return;
//            }
//            resolve(res);
//        })
//    })
//}

exports.calc = calc;
exports.calcPromise = calcPromise;
//exports.tambahPromise = tambahPromise;
//exports.tambah = tambah;
//module.exports = calc;