import { recArea } from "./04_function.js"

// OOP => Object Oriented Programming
// Konsep dimana object sebagai guideline dalam membuat code program


// Deklarasi object 
// Pada dasaranya (rata2 bahasa pemrograman) membutuhkan Class
// Karena object merepresentasikan objek real (nyata)
// Mempunyai property (sesuatu bawaan) dan method (perilaku)

const person = {
    name: "Julian", // property (data)
    age: 32,
    height: 183,
    weight: 75,
    children: ["Meta"],
    hello(){  // method (perilaku / action)
        console.log(`Hello, my name is ${this.name}`)
    }
}

console.log(person) 

console.log(person.name) // mengakses properti/method of object
person.hello()  // mengakses method

// Mutable and Immutable
// Dua2nya kata yang diturunkan dari kata "mutate"
// Mutable berarti bisa bermutasi
// Immutable berarti tidak bisa bermutasi

// Immutable adalah data-data primitive (value type)
// Data-data primitive => data yang digunakan dari awal programming
// Data-data primitive: boolean, number, string, date, null, undefined, NaN, Infinity
// Mutable adalah data-data non primitive (reference type)
// Data-data non primitive: array dan object

// Immutable (Value Type)
let carName = "Ferrari"
let otherCarName = carName

console.log("carName:", carName) // Ferrari
console.log("otherCarName:", otherCarName) // Ferrari
otherCarName = "Lamborghini" // disini value "Ferrari" di replace/timpa dengan "Lamborghini"
console.log("otherCarName:", otherCarName) // Lamborghini
console.log("carName:", carName) // Ferrari

// Mutable (Reference Type)
const childrenName = ["Abdul","Adi"]
const otherChildrenName = childrenName
const anotherChildrenName = otherChildrenName 
// mendeclare dengan value berisi mutable object dia hannya sebagai pointer

console.log("childrenName:",childrenName) // ["Abdul","Adi"]
console.log("otherChildrenName:",otherChildrenName) // ["Abdul","Adi"]
otherChildrenName.push('Riky')
console.log("childrenName:",childrenName) // ["Abdul","Adi", "Riky"]
console.log("otherChildrenName:",otherChildrenName)// ["Abdul","Adi", "Riky"]

// Mutasi tidak bisa ditimpa/replace valuenya
// Menggunakan buildin method untuk memutasikan dirinya sendiri
childrenName.push("Seto")
console.log(childrenName) // ["Abdul","Adi", "Riky", "Seto"]

// Cara 1 deklarasi object
const car = {
    wheels: 4,
    color: "black",
    fuel: "petrol",
    hello () {
        "Ada yang bisa dibantu?"
    }
}

console.log(car)
car.brand = "Ferrari"
car.fuel = "electric"
console.log(car)

//Cara 2 deklarasi object
const motorycle = new Object()
console.log("motorcycle:",motorycle)
motorycle.brand  = "Kawasaki"
motorycle.wheels = 2
console.log("motorcycle:",motorycle)

// cara mengakses object
console.log(motorycle.brand)
console.log(motorycle["brand"])
// Object itu terdiri dari [keys] dan values
// Mereturn semua key
console.log(Object.keys(car))
// Mereturn semua value
console.log(Object.values(car))
console.log(car)

const animal = {
    name: "Bear",
    feet: 4,
    type: "wild",
    canine: true,
    color: 'brown'
}

console.log(animal)
const newAnimal = {
    name: "Chicken",
    feet: 2,
    canine: "false",
    feather: true
    
}

Object.assign(animal, newAnimal)
console.log(Object.entries(animal))


// Cara 3 Mendeklarasi object
// Menggunakan class
// Ini cara standar semua bahasa pemrograman lainnya

// Class adalah blueprint / template / cetakan dari sebuah object

class Student {
    greeting(){
        console.log("Hello, I'm a student")
    }
}

const newStudent = new Student()
newStudent.greeting()

// class => rumus atau formula untuk object
class Animal {  // bekisting / cetakan tidak bisa membuat object sendiri
    constructor (name,feet,color){
        this.name = name
        this.feet = feet
        this.color = color
    }
}

const rabbit  = new Animal("Rabbit",4,"white") // menggunakan class harus di pakai dengan method new
console.log(rabbit)

class User {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){ // getter untuk mengekspos method / property yang kita atur
        return `${this.firstName} ${this.lastName}` // `` meng-incorporatae code block dalam string
    }

    set fullName(value){ // seter untuk merubah komponen di dalam class sesuai yang kita atur
        const splitValue = value.split(" ")
        this.firstName = splitValue[0]
        this.lastName = splitValue[1]
    }
}

const user1 = new User("Tuti","Maeasaroh")
console.log(user1.fullName)

const user2 = new User("Ucup","Ajah")
console.log(user2.fullName) // menggunakan getter / get yg kita setting otomatis

user2.fullName =  "Roni Sibutarbutar" // => ["Roni","Sibutarbutar"]
console.log(user2.firstName)
console.log(user2.lastName)
console.log(user2.fullName)

// Konsep OOP di Javascript
// 1. Abstraction
// Menampilkan hanya seperlunya saja dan menyembunyikan data yang tidak perlu
// Tujuannya untuk hiding complexity, modularity, security, and reusability

const length = 5
const width = 4

const length2 = 7
const width2 = 8

const rectangleArea = length * width
const rectangleArea2 = length2 * width2

console.log("Rectangle Area",rectangleArea)
console.log("Rectangle Area 2",rectangleArea2)


console.log(recArea(9,6))

// 2. Encapsulation
// Membungkus data atau informasi kedalam sebuah unit

// Kita diperintahkan mencari sisa luas kotak yang didalmnya berisi lingkaran


const side = 4
function squareArea(side){
    const area = side * side
    return area
}

function circleArea(diameter){
    const area = 0.25 * 3.14 * diameter ** 2
    return area
}

function deltaArea(squareArea,circleArea){
    const delta = squareArea - circleArea
    return delta
}

const sqArea = squareArea(side)
const circArea = circleArea(side)
const delta = deltaArea(sqArea,circArea)
console.log(`Delta area for side of ${side} is `, delta)

function diffArea(side){  // parent function => parent tidak bisa menggunakan parameter childrennya
    function sqArea(){  // child function => child function bisa menggunakan parameter dari parent
        return side*side
    }

    function circArea(){
        return 0.25 * 3.14 * side ** 2
    }

    return (sqArea() - circArea())
}

console.log(diffArea(side))

// 3. Inheritance
// Menurunkan/mewariskan properti dan method dari class yg lain
// Membuat parent class reusable

class Vehicle {
    constructor(name,wheels){
        this.name = name
        this.wheels = wheels
    }

    speed(value){
        console.log(`This ${this.name} speed is ${value} km/h`)
    }
}

const bus = new Vehicle("Bus", 6)
bus.speed(100)

class Car extends Vehicle {
    engine(value){
        console.log(`This ${this.name} has ${value} engine blocks`)
    }
}

const buggati  = new Car("Buggati",4)
console.log(buggati.name)
console.log(buggati.wheels)
buggati.speed(210)
buggati.engine(8)

console.log(buggati instanceof Car)
console.log(buggati instanceof Vehicle)

class Tank extends Vehicle {
    cannon(value){
        console.log("My cannon is ", value, " type")
    }
}

const newTank = new Tank("Maung", 18)
newTank.cannon("laser")

// 4. Polymorphism
// Si class bisa mempunya banyak bentuk / forms

class Employee{ // main class / parent class
    constructor(name){
        this.name = name
    }

    speak(){
        console.log("I love my job")
    }

}

class ConstructionEmployee extends Employee{  // sub class
    speak(){ // ketika memiliki method atau property yang sama dari parent class dia akan menggunakan si sub class
        console.log("I hate my job")
    }
}

const employee1 = new Employee("Joko")
const employee2 = new ConstructionEmployee("Ferdi")

employee1.speak()
employee2.speak()


// Class Access Modifier (khusus Typescript)
// Public: accessible from anywhere
// Private: accssible only from inside the class
// Protected:  accssible only from inside the class and those extending it

class BankAccount {
    // private modifier
    #amount
    #rate = 0.07

    constructor(amount){
        this.#amount = amount
    }

    deposit(value){
        const newAmount = this.#amount + value
        this.#amount = newAmount
        return `You just deposit Rp. ${value},-`
    }

    interest(){
        return `Current interest ${this.#rate * this.#amount}`
    }
}

const myBank = new BankAccount(1000000)
console.log(myBank.interest())
console.log(myBank.deposit(200000))
console.log(myBank.interest())
console.log(myBank.amount)
console.log(myBank.rate)

// Static method

class RadioFrequency{
    randomFrequency1 = Math.ceil(Math.random()*1000)
    static randomFrequency2 = Math.ceil(Math.random()*1000)

    static getConnection(){
        return RadioFrequency.randomFrequency2
    }
}

// Standarnya untuk bisa mengakses metode/properti harus mendeklarasikan object dulu
// Membuat instance dari class
const radio1 = new RadioFrequency() // initialize instance class

console.log(radio1.randomFrequency1)
// harus di define dengan new Class
// console.log(radio1.getConnection) => getConnection merupakan metode statis 
// Static => memanggil langsung ke class tanpa instance baru / new Class

// Tidak bisa diakses langsung dengan menggunakan class
// console.log(RadioFrequency.randomFrequency)

console.log(RadioFrequency.getConnection()) // pemanggilan langsung tanpa instance new Class

// super() digunakan ketika inheritance

class Fish {
    constructor(name, habitat, color){
        this.name = name
        this.habitat = habitat
        this.color = color
    }

    swim(){
        console.log(`I am ${this.name} fish. And I can swim`)
    }
}

const snapper = new Fish("Red Snapper","lake", "red")
snapper.swim()

// super() itu untuk menambahkan dari yang sebelumnya
class MammalFish extends Fish{
    constructor(name, habitat, color, maxChildren){
        super(name, habitat, color)
        this.maxChildren = maxChildren
    }
} 

const dolphin = new MammalFish("Dolphin","sea","gray",4)
dolphin.swim()

// Spread parameter
// [{},{},{},...] => array of objects
// [[],[],[],...] => array of arrays
// {array1: [], array2: [], ....} => object of array keys

const shoes = [
    {
        name: "Adidas",
        price: 2000000,
        origin: "USA"
    },
    {
        name: "Balenciaga",
        price: 11000000,
        origin: "Spain"
    },
    {
        name: "Pioneer",
        price: 500000,
        origin: "Indonesia"
    },
]

// spread => copy isinya saja tanpa menjadi pointer / reference , tidak merubah variable awal
const newShoes = [...shoes,{name: "Pierro",price:350000,origin:"Indonesia"}]

console.log(shoes)
console.log(newShoes)

const jeans = {
    brand: "Off White",
    price: 2500000,
    origin: "USA"
}

const newJeans = {...jeans,color:"Ash Blue"} // ketika key nya belum ada akan membuat key baru

console.log(jeans)
console.log(newJeans)

const newJeans2 = {...jeans,brand: "Wrangler"} // ketika key sudah ada akan me-assign ulang si value dari key tersebut
console.log(jeans)
console.log(newJeans2)

// Exercises
// 1.

const students = [
    {
        name: "Siti",
        email: "siti@mail.com",
        age: 15,
        score: 86
    },
    {
        name: "Udin",
        email: "udin@mail.com",
        age: 16,
        score: 71
    },
    {
        name: "Ojan",
        email: "ojan@mail.com",
        age: 18,
        score: 64
    },
    {
        name: "Rohana",
        email: "rohana@mail.com",
        age: 16,
        score: 95
    }
]

// Buat fungsi untuk mengurutkan:
// a. lowest, highest berdasarkan umur (age)
// b. lowest, highest berdasarkan umur (score)

function studentSorter (data, sortBy){
    if(sortBy === "age"){
        data.sort((a,b)=> a.age - b.age)
    } else if (sortBy === "score"){
        data.sort((a,b) => a.score - b.score)
    }

    return {
        lowest: data[0],
        highest: data[data.length - 1]
    }
}
console.log(students)
console.log(studentSorter(students,"age"))
console.log(studentSorter(students,"score"))

function studentSorter2 (data, sorter) {
    let values = data.map(student => student[sorter])
    console.log(values)

    let minValue = Math.min(...values)
    let maxValue = Math.max(...values)

    console.log(minValue,maxValue)

    let lowest = data.find(student => student.age === minValue)
    let highest = data.find(student => student.age === maxValue)
     console.log(lowest,highest)
}

studentSorter2(students,"age")

//  Create a program to create transaction
//  ● Product Class
//      ○ Properties
//          ■ Name
//          ■ Price
//  ● Transaction Class
//      ○ Properties
//          ■ Total
//          ■ Product
//              ● All product data
//              ● Qty
//      ○ Add to cart method → Add product to transaction
//      ○ Show total method → Show total current transaction
//      ○ Checkout method → Finalize transaction, return transaction data

// 1. Create Product class

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

const fruit = new Product("Orange",25000)
const milk = new Product("Ultra",18000)
const soap = new Product("Lifebuoy",35000)

const currentCarts = [
    {...fruit, qty: 2},
    {...milk, qty:1},
    {...soap, qty: 3}
]

console.log(currentCarts)

class Transaction {
    constructor(products){
        this.total = 0
        this.products = products
    }

    totalTrans(){
        this.products.forEach(product => {
            this.total += product.price * product.qty
        });
        return this.total
    }
}

const newTrans = new Transaction(currentCarts)
console.log(newTrans.totalTrans())

// Exercise 1 
// ● Create a function to merge two array of student data and remove duplicate data
//  ● Student data : name & email
//  ● Example : 
// Array1 → [
//  { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
//  ]
//  Array2 → [
//  { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
//  ]
//  ● Result : 
// ArrayResult → [
//  { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
//  { name: ‘Student 3’, email : ‘student3@mail.com’  }
//  ]

const arrData1 = [
    {
        name : "student 1",
        email : "student1@mail.com",
    },
    {
        name : "student 2",
        email : "student2@mail.com",
    }
];
const arrData2 = [
    {
        name : "student 1",
        email : "student1@mail.com",
    },
    {
        name : "student 3",
        email : "student3@mail.com",
    }
]
const join = arrData1.concat(arrData2)
console.log(join.includes({
        name : "student 1",
        email : "student1@mail.com",
    })) // seolah2 membuat variable baru
const student1 = join[0] // mutable => reference type
console.log(join.includes(student1))

function sortStudent (arrData1,arrData2){
    const joinedArray = arrData1.concat(arrData2)
    console.log("joined array:",joinedArray)
    // const joinedArray2 = [...arrData1,...arrData2]
    // 1. Gabungkan 2 array
    // 2. Melooping array gabungan dan mencari nilai yang uniknya/ tidak berduplikasi
    let diffArray = []
    let duplicate = []

    for (let i=0; i<joinedArray.length; i++){
        if(!diffArray.find(student => student.email === joinedArray[i].email)){
          diffArray.push(joinedArray[i])
        } else {
          if(!duplicate.find(student => student.email === joinedArray[i].email)){
          duplicate.push(joinedArray[i])
          }
        }
    }
    
    return {
      diffArray,
      duplicate
    }
    
}
console.log(sortStudent(arrData1,arrData2))

const car2 = {
  brand: "Honda",
  type: "Civic",
  engine: 15000
}

console.log("brand" in car2) // untuk mencari key di dalam object
console.log(car2.brand === "Honda")


// Exercise 2
// Create a function that can accept input as an array of objects and switch all values into property and 
// property into value (key => value, value => key)
//  ● Example : 
// ○ Input : [{ name: ‘David’, age: 20 }]
//  ○ Output : [{ David: ‘name’, 20: ‘age’}]

const arr = [{ name: "David", age: 20 },{ brand: "Honda", wheels: 4 }]

function valueSwithcer(array){
  const newArray = []
  for(let element of array){
    const newElement = {}
    for(let property in element){
      let prevKey = property // 'name' & 'age' || 'brand' & 'wheels'
      let prevValue = element[property] // "David" & 20 || "Honda" & 4
      newElement[prevValue] = prevKey // {"David":"name",'20':'age'} || {"Honda":'brand','4':"wheels"}
    }
    newArray.push(newElement)
  }
  return newArray
}

console.log(valueSwithcer(arr))
// (2) [{...}, {...}]
// 0
// :
// (2) {20: "age", David: "name"}
// 1
// :
// (2) {4: "wheels", Honda: "brand"}
// [[Prototype]]
// :
// []

// Exercise 3
// Create a function to find a factorial number using recursion
//  ● Example
//  ○ Input :  5
//  ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// Rumus Fctorial: n! = n * (n-1)!

function factorial(num){
    let result = 0
    if(num <= 1){
        return 1
    } else {
        result = num * factorial(num - 1)
    }
    return result
}

console.log(factorial(2))
