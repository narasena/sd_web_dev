// Programming : Proses kita memecahkan suatu masalah

// const togel = 1879

// console.log("Type:",togel, typeof togel)
// console.log("Type:",String(togel), typeof String(togel))
// console.log(togel.toString())

// const cash = "17000"

// console.log(Number(cash))
// console.log("Rp ", Number(cash).toLocaleString('id-ID'
// ))

// Fundamental Programming
// Binary: 0 & 1

// const isTrue = true // boolean value


// Operators

// + => Untuk Menambahkan / Addition
// - => Untuk Pengurangan / Subtraction
// * => Untuk Perkalian / Multiplication
// / => Untuk Pembagian / Divider


const x = 18
const y = 100
const z = 25

// console.log(x+y)
// console.log(y-x)
// console.log(x*y)
// console.log(100*(y/z))

// Modulo:  Sisa hasil pembagian
console.log(x%2)
console.log(y%2)
console.log(z%2)

// Exponentiation / Pangkat (^)
console.log(2**2) 

// variable naming :
// 1. Case Sensitive => Hampir Semua menggunakan ini, dan ini dasar
// 2. Case Insensitive => 

const char1 = "youTube"
const char2 = "YouTube"

console.log(char1===char2)
console.log((char1).toLowerCase()===(char2).toLowerCase())

// Operator assignments

const money = 1000 // variable declaration
// const itu artinya constant && tidak bisa di assign ulang
// money = 500
// console.log(money)

let gold = 500
gold = 9999 // re-assign me-assign ulang hasil deklarasi
gold = 12
console.log(gold)

let length = 12
length /= 2 // modifying => modifier > += || -= || *= || /=
console.log("length: ",length)

let width = 20
// width++ // increment
// width-- // decrement

console.log("width: ", width)

// Comparison
// basic (> || < || >= || <=)
const a = 33
const b = 17 
const c = 56
const d = "17"
const e = 17

const flower = "rose"
const flower2 = "Rose"

// equality
// 1. == (value)
console.log("eq1: b == d",b == d)
// 2. === (value + type)
console.log("eq2: b === d ",b === d)
console.log("eq2: b === e",b === e)
// 3. != (not equal, value )
console.log("eq3: a != d", a != d)
// 4 !== (not equal, value + type)
console.log("eq3: d != e", d != e) 
console.log("eq3: d !== e", d !== e)

// coba bikin pemrograman menghitung luas persegi, panjang 10, lebar 5, console.log
const panjangX = 20
const lebarY = 10
const recArea = panjangX * lebarY
console.log(recArea)

// hitung luas segitiga, panjang 10 tinggi 4
const triangleHeight = 4
const triangleLength = 10
const traingleArea = 0.5 * triangleLength * triangleHeight
// hitung luas lingkaran, radius 5
const radius = 5
const circleArea = 3.14 * radius * radius