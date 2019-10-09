const { calc, calcPromise/*, tambahPromise, tambah*/ } = require("./src/calc");
const chai = require("chai");

describe("Fungsi dasar operasi", function(){
    it("Fungsi dasar pertambahan", function(){
        calcPromise.tambah(1, 2)
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => { chai.expect(result).to.equal(7) })
    })
    
    it("Fungsi dasar pengurangan", function(){
        calcPromise.kurang(1, 2)
        .then((result) => calcPromise.kurang(result, 5))
        .then((result) => calcPromise.kurang(10, result))
        .then((result) => { chai.expect(result).to.equal(16) })
    })
    
    it("Fungsi dasar perkalian", function(){
        calcPromise.kali(1, 2)
        .then((result) => calcPromise.kali(result, 2))
        .then((result) => calcPromise.kali(1, result))
        .then((result) => calcPromise.kali(result, 3))
        .then((result) => calcPromise.kali(result, 1))
        .then((result) => calcPromise.kali(result, 5))
        .then((result) => { chai.expect(result).to.equal(60) })
    })
    
    it("Fungsi dasar perkalian", function(){
        calcPromise.bagi(1, 2)
        .then((result) => { chai.expect(result).to.equal(0.5) })
    })
})

describe("Fungsi null", function(){
    it("Pertambahan 1 ditambah string terbaca string", function(){
        calcPromise.tambah(1, "word")
        .then((result) => { chai.expect(result).to.be.a("string") })
    })
    
    it("Pertambahan belakang dikosongin terbaca NaN", function(){
        calcPromise.tambah(1, )
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => { chai.expect(result).to.be.NaN })
    })
    
    it("^ sekaligus number", function(){
        calcPromise.tambah(1, )
        .then((result) => calcPromise.tambah(result, 1))
        .then((result) => { chai.expect(result).to.be.a("number") })
    })
    
    it("Pertambahan depan dikosongin terbaca number (+1)", function(){
        calcPromise.tambah(null, 1)
        .then((result) => { chai.expect(result).to.be.a("number") })
    })
    
    it("Pengurangan string dikurangi 1 terbaca NaN", function(){
        calcPromise.kurang("Word", 1)
        .then((result) => { chai.expect(result).to.be.NaN })
    })
    
    it("^ sekaligus number", function(){
        calcPromise.kurang("Word", 1)
        .then((result) => { chai.expect(result).to.be.a("number") })
    })
    
    it("Perkalian string dikali 1 terbaca NaN", function(){
        calcPromise.kali("Word", 1)
        .then((result) => { chai.expect(result).to.be.NaN })
    })
})
//describe("Return Error bila tidak diisi salah satu", function(){
//    
//})