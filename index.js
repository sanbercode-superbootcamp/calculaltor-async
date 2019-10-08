const {
    addition,
    subtraction,
    division,
    multiplication
} = require('./lib/calculator-async');

// division(4, 2)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

let pembagian = async function tes(a, b) {
    await division(a, b)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
}
pembagian(2, 2);

let perkalian = async function tes(a, b) {
    await multiplication(a, b)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
}
perkalian(2, 2);

let pertambahan = async function tes(a, b) {
    await addition(a, b)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
}
pertambahan(2, 2);

let pengurangan = async function tes(a, b) {
    await subtraction(a, b)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
}
pengurangan(5, 2);