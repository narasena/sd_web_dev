// OOP => Object Oriented Programming
// Konsep dimana object sebagai guideline dalam membuat code program

// Deklarasi object 
// Pada dasaranya (rata2 bahasa pemrograman) membutuhkan Class
// Karena object merepresentasikan objek real (nyata)
// Mempunyai property (sesuatu bawaan) dan method (perilaku)

const person = {
    name: "Julian", // property
    age: 32,
    height: 183,
    weight: 75,
    children: ["Meta"],
    hello(){  // method
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
class Animal {
    constructor (name,feet,color){
        this.name = name
        this.feet = feet
        this.color = color
    }
}

const rabbit  = new Animal("Rabbit",4,"white")
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

user2.fullName = "Roni Sibutarbutar"
console.log(user2.firstName)
console.log(user2.lastName)
console.log(user2.fullName)


const phone = {
    firstName: "John",
    lastName:"Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value){
        const splitName = value.split(" ")
        this.firstName = splitName[0]
        this.firstName = splitName[0]
    }
}