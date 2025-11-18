// OOP => Object Oriented Programming
// Konsep dimana object sebagai guideline dalam membuat code program

// Deklarasi object 

const person = {
    name: "Julian", // property
    age: 32,
    height: 183,
    weight: 75,
    children: ["Meta"],
    hello: () => {  // method
        console.log("Hello, my name is Julian")
    }
}

console.log(person) 

console.log(person.name) // mengakses properti/method of object
person.hello()  // mengakses method

// Mutable and Immutable
person.children.push("Rena") // mutable
console.log(person.children)
person.name = "Joko"
console.log(person)