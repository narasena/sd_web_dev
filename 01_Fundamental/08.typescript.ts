// Programming language types:
// Javascript => dynamic type => tidak robust => tidak kokoh / reliable
    // contoh Javascript & Python
// Typescript => statically type

// Strong type => artinya result lebih kurang tidak menimbulkan error pada mesin 
// Dynamic type => artinya result lebih kurang bisa menimbulkan error pada mesin


// Compile time => ketika menulis kode
// Runtime => ketika kode sudah dijalankan

function sum (a:number,b:number){
    return a + b
}

console.log(sum(12,8))

interface IUser {
    name: string
    age: number
    height: number
    weight: number
}

const user1:IUser = {
    name: "Susanti",
    age: 28,
    height: 165,
    weight: 65,
    // address: "Jayapura",
    // sex: "Unknown"
}

const user2:IUser = {
    name: "Cokro",
    age: 36,
    height: 188,
    weight: 72,
    // salary: 17000000
}

interface IVehicle {
    wheels: number
    color: string
    brand: string
    type: IVehicleType
}

type IVehicleType = IElectric | IDiesel // union interface

interface IElectric {
category: "electric"
}

interface IDiesel {
    category: "diesel"
    fuel: "Solar"
}

const car1:IVehicle = {
    wheels: 4,
    color: "WHITE",
    brand: "Mitsubishi",
    type: {
        category:"electric"
    }
}

const car2:IVehicle = {
    wheels: 6,
    color: "YELLOW",
    brand: "Isuzu",
    type: {
        category:"diesel",
        fuel: "Solar"
    }
}