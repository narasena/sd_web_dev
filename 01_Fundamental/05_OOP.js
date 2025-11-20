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
// Menurunkan/mewariskan properti dan method dari kelas lain
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
const radio1 = new RadioFrequency()

console.log(radio1.randomFrequency1) // harus di define dengan new Class
// console.log(radio1.getConnection) => getConnection merupakan metode statis 
// Static => memanggil langsung ke class tanpa instance baru / new Class

// Tidak bisa diakses langsung dengan menggunakan class
// console.log(RadioFrequency.randomFrequency)

console.log(RadioFrequency.getConnection()) // pemanggilan langsung tanpa instance new Class