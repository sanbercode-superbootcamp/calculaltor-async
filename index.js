const { calc, calcPromise/*, tambahPromise, tambah*/ } = require("./src/calc");

console.log("Deklarasi Asyncron");

//stmt 1
calc.tambah(2,2, function(err, res) {
    console.log("Statement No. 1: "+res)
});

//stmt 2
calcPromise.tambah(1, 2)
.then((result) => calcPromise.tambah(result, 1))
.then((result) => calcPromise.tambah(result, 1))
.then((result) => calcPromise.tambah(result, 1))
.then((result) => calcPromise.tambah(result, 1))
.then((result) => console.log("Statement No. 2: "+result))

//stmt 3
calcPromise.kurang(1, 2)
.then((result) => calcPromise.kurang(result, 5))
.then((result) => console.log("Statement No. 3: "+result))

//stmt 4
calcPromise.kali(1, 2)
.then((result) => calcPromise.kali(result, 2))
.then((result) => calcPromise.kali(result, 3))
.then((result) => calcPromise.kali(result, 5))
.then((result) => console.log("Statement No. 4: "+result))

//stmt 5
calcPromise.bagi(1, 2)
.then((result) => console.log("Statement No. 5: "+result))

//stmt 6
calc.bagi(2,2, function(err, res) {
    console.log("Statement No. 6: "+res)
});
