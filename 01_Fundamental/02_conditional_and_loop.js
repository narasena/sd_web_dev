// Conditional Statements
// Menentukan kode mana yang akan dijalankan sesuai logic yang kita berikan

let age = 11
if (age <= 5) {
    console.log("Umur masih balita")
} else if (age > 5 && age <= 10) {
    console.log("Umur remaja")
} else if (age > 10 && age <=18){
    console.log("Umur anak-anak")
} else {
    console.log("Umur sudah dewasa")
}

// Logical Operator AND dan OR
// && === AND di excel
// || === OR di excel

// && 
// true && true === true
// true && false === false
// false && true === false
// false && false === false

// ||
// true || true === true
// true || false === true
// false || true === true
// false || false === false

let length = "-120"
if(length>0||typeof length==="string"){
    console.log("Panjang OK")
}

// scope ditandai dengan {} setelah deklarasi sesuatu
// nested => scope didalam scope

let number = -10000
if (number >=0 ) {
    console.log("Nomor positif")
    if(number > 999){
        console.log("Positif ribuan")
        if( number > 9999){
            console.log("Positif puluhan ribu")
        }
    }
} else {
    console.log("Nomor negatif")
    if(number < -999){
        console.log("Negatif ribuan")
        if( number < -9999){
            console.log("Negatif puluhan ribu")
        }
    }
}

// cara penulisan 
// boleh tidak menggunakan scope

let weight = 80
if (weight <=75 ) console.log("Berat badan ideal")
else console.log("Tidak ideal")

// ternary operator
let wheels = 3
// condition ? if true => apa : if false => apa
wheels >= 4 ? 
    wheels >= 6? 
        console.log ( "kendaraan besar dan berat" )
        : console.log ( "kendaraan besar" )
    : console.log ("kendaraan kecil")

// spasi digunakan ketika antar syntax berbeda
// apabila bertemu () atau [] atau {} atau ; atau "" atau '' atau operator lain
// tidak wajib spasi

let storey = 11
if ( !(storey < 10) ){
  console.log("Apartment")
} else {
  console.log("Condominium")
}

// ! NOT operator adalah inversi dari hasil value setelahnya

// Truthy dan Falsy
// Truthy adalah value2 yg dianggap bernilai true
// Falsy adalah value2 yg dianggap bernilai false

// Truthy
// Boolean => true || false
// [], {}, " ", "false", 1, "0"
// [] => array kosong
// {} => object kosong

// Falsy:  null, undefined, NaN
// undefined: data null, sudah deklarasi
// null: tidak ada deklarasinya
// NaN: Not A Number

console.log("Truthy or falsy? :", Boolean("false"))
console.log("Truthy or falsy? :", Boolean(""))
console.log("Truthy or falsy? :", Boolean([]))
console.log("Truthy or falsy? :", Boolean({}))
console.log("Truthy or falsy? :", Boolean(0))
console.log("Truthy or falsy? :", Boolean(null))
console.log("Truthy or falsy? :", Boolean(undefined))
console.log("Truthy or falsy? :", Boolean(NaN))

console.log(Number("kecap"))

// Loop 
// Loop => Pengulang berputar
// 

for ( i = 1; i < 8; i++){
  if( i === 4 ) continue // men-skip bagian yg terkondisikan
  console.log("Makan bakso ",i,"kali")
}

// While, pengkondisian dulu > menjalankan fungsi / code block

let maxNumber = 10
let num = 0
let target = 6

// while ( num < maxNumber){
//   console.log(num)
//   num++
// }

// do while, menjalankan dulu baru pengecekan kondisi

// do {
//   console.log(num)
//   num++
// } while ( num < maxNumber)

// break dan continue


// while ( num < maxNumber){
//   console.log(num)
//   if (num === target) {
//     break // memberhentikan jalannya code block
//   }
//   num++
// }


// ● Write a code to check whether the number is odd or even
//  ○ Example: 25 → odd number, 2 → even number

let numberToCheck = 24
if ( numberToCheck % 2 === 0 ){
  console.log("Even Number")
} else {
  console.log("Odd Number")
}

//  ● Write a code to check whether the number is prime number or not
//  ○ Example: 7 → 7 is a prime number
//  ○ Example: 6 → 6 is not a prime number
//  Bilangan Prima / Prime Number => Bilangan yang cuma 2 kemungkinan
//  Habis dibagi 1 dan dirinya sendiri, artinya modulo % 1 === 0 && % num === 0
const numCheck = -99
let countZeroModulo = 0
for (i = 1; i <= numCheck; i++){
    if ( numCheck === 1 || numCheck % i === 0 ){
        countZeroModulo++
    }
}
console.log(numCheck, (countZeroModulo <= 2) ? " Bilangan Prima":" Bukan Prima")
console.log("Berapa kali sisa pembagian 0:",countZeroModulo)


//  ● Write a code to find the sum of the numbers 1 to N
//  ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
//  ○ Example: 3 → 1 + 2 + 3 = 6
const numToSum = 5
let sum = 0
for (i = 1; i <= numToSum; i++){
    sum += i
}
console.log("Sum 1 to ", numToSum ," = ", sum )

// var => bisa di re-assign/timpa dan bisa dipanggil di semua scope
// let => bisa di re-assign/timpa tapi hanya dalam satu scope
// const => tidak bisa di re-assign/timpa dan hanya bisa dalam satu scope

// Javascript dibuat ~1995 , 1995 - 2015 cuma ada syntax var. 
// 2015 ES6+ memperkenalkan let dan const


//  ● Write a code to find factorial of a number
//  ○ Example: 4! → 4 x 3 x 2 x 1 = 24
//  ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 72


//  ● Write a code to print the first N fibonacci numbers
//  ○ Example: 15 → 610
