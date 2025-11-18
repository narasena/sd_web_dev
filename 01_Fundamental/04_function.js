// Function is a subprogram
// Automation / Simplify a task

let a = 10
let b = 20
let c = a + b
console.log(a," + ",b," = ",c)

let d = 40
let e = 30 
let f = d + e
console.log(d," + ",e," = ",f)

// Function => Membuat rumus, metode kerja, menyimpan variabel, reusable (bisa digunakan berulang2)
// Bagian programming paling dasar di semua bahasa pemrograman

function addition(num1, num2){ // local scope
    const sum = num1 + num2
    return sum // return => output dari function
}

// any salah satu type di js yang berarti apapun
console.log(addition(8888,9999))
console.log(addition(a,b))

function subtraction(num1,num2){ // () => parameter hanya digunakan oleh si fungsi itu
    return num2 - num1
}

console.log(subtraction(5,20)) // menghitung subtraction > console log hasil
subtraction(10,100)

// function tidak harus me-return sesuatu

function multiplication(num1, num2) {
    console.log(num1*num2) // tidak ada output / return
}

// cara memanggil function itu juga bisa dengan invoke

multiplication(6,7)

function divider(num1,num2){
    console.log("Ini fungsi pembagian")
}

divider(10,20)
console.log(divider(3,33))

// Ketika ada return berarti ada output
// Output harus diolah lagi untuk pemrograman lainnya

// Ketika tidak ada return berarti function berjalan sesuai isi function
// Bila dipanggil akan menghasilkan void/undefined

function triangleArea(length, height){
    const area = 0.5 * length * height
    return area
}

console.log(triangleArea(4,6))

// Tipe deklarasi function 

// 1. Function Declaration
// function name (...parameter) {
// ... content
// }
// Hoisted => Bisa dipanggil sebelum deklarasi

// 2. Function Expression
// const name = function (..parameter) {...content}

const squareArea = function (side) {
    const area = side * side
    return area
}

console.log(squareArea(4))

// 3. Arrow Function 
// const name = (...parameter) => {...content}

const circleArea = (radius) => {
    const area = 3.14 * radius * radius;
    return area;
}

console.log(circleArea(7));

const hello = (name) => { 
    return "Hello " + name 
}

console.log(hello("donni"))

// Programming conventions
// Pada dasarnya setiap line atau syntax itu diakhiri dengan ;
// Scope kenapa harus di enter => untuk mempermudah membaca dan debugging

// 4. IIFE (Immediately Invoked Function Expression)
// Si function dipakai sekali dan tidak perlu reusable

(function(){
    const temp = 25
    const message = `Temperatur PC adalah ${temp} derajat Celcius`
    console.log(message)
})()

// 5. Function Constructor

const rectangleArea = new Function("a","b","return a*b")
console.log(rectangleArea(2,10))

// Hoisted function => si fungsi dipanggil diatas/sebelum line declaration

const squareOfTwo = square(2)
console.log(squareOfTwo)

function square(num){
    return num * num
}

// const text1 = wordJoin("test","aja") // menghasilkan ReferenceError: Cannot access 'wordJoin' before initialization
// console.log(text1) // karena pemanggilan sebelum line deklarasi

const wordJoin = (string1, string2) => {
    const joined = string1 + " " + string2
    return joined
}

// naming convention = standar penamaan
// semua tidak boleh ada spasi karena spasi itu menandakan berakhirnya syntax
// semua harusnya berbahasa inggris

// 1. camelCase => huruf kata awal kecil, sisanya huruf capitalized
// E.g. projectStatus, wordToBeDeleted, numberSoonToBeMultiplied, getDataFromDatabase
// biasa digunakan untuk nama variable, function, JSON keys

// 2. PascalCase => Semua huruf pertama kata huruf kapital
// e.g. YouTube, ConstructionCompanyData, FourWheelsDriver
// biasa digunakan untuk class components, constructor, React Components

// 3. kebab-case => semua kata huruf kecil dan spasi diganti dash (-)
// e.g laboratory-report, your-name-here
// biasa digunakan untuk file naming, url, CSS

// 4. snake_case => semua kata huruf kecil dan spasi diganti underscore (_)
// e.g summary_report, books_detail, 
// biasa digunakan untuk penamaan database, python variables, JSON APIs

// 5. SCREAMING_SNAKE_CASE => semua kata huruf besar dan spasi diganti underscore (_)
// e.g MY_SECRET_KEY, AUTH_JWT_PASSWORD
// biasa digunakan untuk penamaan file env, atau penyimpanan Machine Code

//  2. Write a function that takes an array of words and returns a string by
// concatenating the words in the array, 
// separated by commas and - the last word - by an 'and'.
//  a.
//  Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const arr =  ["apple", "banana", "cherry", "date"] 
function wordsConcater (array) {
    // pseudo code => kode jadi-jadian
    // 1. Perlu mengambil seluruh isi array kecual yg terakhir
    const slicedWords = array.slice(0,array.length-1)
    // 2. Per array member dirubah menjadi sebuah string dan dipisahkan ","
    const joinedWords = slicedWords.join(',')
    // 3. Ditambahkan member terakhir yang sudah ditambah " and "
    const transformedLastWord = " and " + array[array.length - 1]
    return joinedWords + transformedLastWord
}

console.log(wordsConcater(arr))

const vehicles = ["car", "motorcycle", "bus", "truck", "train"]
console.log(wordsConcater(vehicles))

// Rest Parameter
// Untuk menerima infinite number of parameters

function welcome (welcomeWord, titles, ...names){
    return welcomeWord + " " + titles + " " + names
}

const test1 = welcome("Halo, ","murid sekolah X ","Kokom", "Paijo", "Jono")
console.log(test1)


// Nested function
// Function juga bisa di nesting
// Closure 
// Child function can take parameter from parent function

function identityDetails (name, city){
    function hello(){
        return "Hello " + name
    }

    function fromCity(){
        return " from " + city
    }

    return hello() + fromCity()
}

console.log(identityDetails("Hendro","Banyuwangi"))


// Recursive 
// Memanggil diri sendiri sampai berhenti

function countDown(fromNumber){
    console.log(fromNumber)
    let nextNumber = fromNumber - 1

    if(nextNumber>0){
        countDown(nextNumber)
    }
}

countDown(20)

// Create a function that can create a triangle pattern according to the height we provide like the 
// following :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ● Parameters : height → triangle height
// ● Example input: 5

function trianglePattern(height){
    let array = []
    for(i=1; i<=height; i++){
        array.push(i)
        console.log(array)
    }
}

console.log(trianglePattern(4))

// Create a function that can create a triangle pattern according to the height we provide like the 
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

// 1. Angka pada isi array terus berlanjut ( +1 dari nilai terakhir)
// 2. Panjang array sesuai dengan tinggi array
// 3. Selama panjang array < tinggi array, dia akan bertambah +1 (push nilai terakhir +1) 

function trianglePatterVerTwo(height){
    let array = []
    let lastNum = 0
    for(i=1; i<=height; i++){    // i = 1                 i = 2                                                 i = 3
        while(array.length < i){ // array.length = 0 < 1  array.lnegth = 0 < 2         array.length = 1 < 2
            lastNum++            // lastNum = 0 + 1 = 1   lastNum = 1 + 1 = 2          lastNum = 2 + 1 = 3
            array.push(lastNum)  // [] push(1) => [1]     [] push(2) => [2]            [2] push(3) => [2,3]
        }                        //                       while cek array.length: 1    cek length : 2
        console.log(array)       // print array = [1]                                  print array [2,3]
        array = []                // [1] => []                                         [2,3] => []
    }
}

trianglePatterVerTwo(3)

// ● Create a function that can loop the number of times according to the input we provide, 
// and will 
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with 
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 

function fizzBuzz(n){
    let array = []
    for(i=1; i<=n; i++){
        if(i%3===0 && i%5 ===0 ){
            array.push("FizzBuzz")
        } else if (i%5 === 0){
            array.push("Buzz")
        } else if (i%3 === 0 ){
            array.push("Fizz")
        } else {
            array.push(i)
        }
    }
    return array
}

console.log(fizzBuzz(16))

// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

// Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
