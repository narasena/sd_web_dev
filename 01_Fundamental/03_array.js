// Array => Koleksi dari data/nilai yang teridentifikasi dengan index
// Array => Beberapa bahasa mengharuskan array itu punya tipe data yang sama

let numbers = [1, 2, 3, 4, 6]
const indexNumber = numbers[5]
const numbersLength = numbers.length
for (i = 0; i < numbersLength ; i ++){
    console.log("index ke ", i, " = ", numbers[i])
}



let alphabets = ['A', 'B', 'C', 'D']
for (i = 0; i < 4; i ++){
    console.log("index ke ", i, " = ", alphabets[i])
}

// Cara looping
let fruits = ['apple', 'blueberry', 'cherry', 'date']
for (fruit of fruits){ // built-in method looping
    console.log(fruit)
}

fruits.forEach((fruit,index) => {
    console.log("Buah ke ",index," adalah ", fruit)
})

const buah = 'guava + melon'

// cara cek array atau bukan
console.log(Array.isArray(fruits))
console.log(Array.isArray(buah))

console.log(fruits)
// Push => menambahkan ke index terakhir
fruits.push('fig','guava')
console.log(fruits)

// Pop => menghapus index terakhir
fruits.pop()  // menghapus
console.log(fruits)

// Shift => Menghapus elemen pertama
fruits.shift()
console.log(fruits)

// Unshift =>  Menambahkan elemen di index pertama
fruits.unshift('durian')
console.log(fruits)

// Slice => Mengambil potongan sesuai permulaan index awal dan permulaan index akhir
const foods = ['burger', 'spaghetti', 'pizza']

const extractedFood = foods.slice(0,1) // slice mengambil index permulaan
console.log(foods)
console.log(extractedFood)

// Splice => Bisa menambahkan, menghapus, dan dia merubah array asli (versatile)
const drinks = ['water', 'cola', 'juice', 'tea', 'coffe']
const extractedDrinks = drinks.splice(drinks.length-1,1)
console.log(drinks)
console.log(extractedDrinks)

// Indexing
// .indexOf() mencari index nilai input yang pertama (left->right)
const books = ['novel','recipe','politic','history','politic']
const politicIndex = books.indexOf('politic')
console.log(politicIndex)

// .lastIndexOf()  mencari index nilai input yang terakhir (right->left)
const politicIndex2 = books.lastIndexOf('politic')
console.log(politicIndex2)

// find => mereturn nilai value yang ketemu
const findBook = books.find(book => book === 'comic')
console.log(findBook) 

// findIndexOf => me-return nilai index yang ketemu (left->right)
const findBook2 = books.findIndex( book => book === 'comic')
console.log(findBook2) 

// findIndexOf => me-return nilai index yang ketemu (right->left)
const findBook3= books.findLastIndex( book => book === 'comic')
console.log(findBook3) 

// Kalau nilai array tidak ada = undefined
// Kalau nilai index array tidak ada = -1

// includes => me-return boolean (true/false)
const apparels = ['hat', 'shirt', 'jeans', 'pants', 'shoes']
const isJacketExist = apparels.includes('jeans')
console.log(isJacketExist)

// Some => me-return boolean tapi dengan fungsi atau kondisi
const isSandalExist = apparels.some(apparel => apparel === 'shirt')
console.log(isSandalExist)

// Reduce => Melakukan reducer (mengakumulasi dari kiri-kanan), mreturn nilai akhir
const nums = [10, 20, 30, 40]
const sum = nums.reduce((previous, current) => previous + current)
// index 0 => prev = 0; current 10, prev + curr = 10 => prev di index setelahnya
// index 1 => prev = 10; current 20, prev + curr = 30 => prev di index setelahnya
// dst.
console.log(sum)

// reduce right => reducer dari kanan ke kiri
const nums2 = [10, 30, 60, 120]
const sum2 = nums.reduceRight((previous,current) => previous - current)
console.log(sum2)

// sort & reverse => sesuai fungsi dan merubah array asal
const vegetables = ['tomato','broccoli','spinach','cucumber','wortel']
const randomNums = [99, 10, 31, 47, 2]

const reversedRandomNums = randomNums.reverse()
console.log(reversedRandomNums)

const sortedVegetables = vegetables.sort() // Kalo tidak ada parameter akan mensort sesuai semantik alfabet atau penomoran
console.log(sortedVegetables)

const sortedNumsAsc = randomNums.sort((a,b) => a-b) // Khusus number dan sesuai urutan matematika
console.log(sortedNumsAsc)

const sortedNumsDesc = randomNums.sort((a,b) => b-a) 
console.log(sortedNumsDesc)

// Map dan Filter
// Dua-duanya mereturn variable baru
// For each dia tidak mereturn apa-apa

const indexedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = indexedNums.map((number) => number * 10)
console.log(indexedNums)
console.log(result)

const oddResult = indexedNums.filter((number) => number % 2 !== 0)
const evenResult = indexedNums.filter((number) => number % 2 === 0)
console.log(indexedNums)
console.log(oddResult)
console.log(evenResult)


// String hampir mirip seperti array

const president = 'prabowo'
const splitName = president.split('')
console.log(splitName)
const reversedName = president.split('').reverse().join('')
console.log(reversedName)


// Exercise
//  1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
//  a.
//  Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

//  2. Write a function that takes an array of words and returns a string by concatenating the words in the array, 
// separated by commas and - the last word - by an 'and'.
//  a.
//  Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

//  3. Write a function from a given array of numbers and return the second smallest number
//  a.
//  Example : numbers = [5, 3, 1, 7, 2, 6] → 2

//  4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are 
// of the same length.
//  a.
//  Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

//  5. Write a function that adds an element to the end of an array. However, the element should only be added if it is 
// not already in the array.
//  a.
//  Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
// b.
//  Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

