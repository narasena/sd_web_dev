// Advanced JS

// Callback function

function sum (a, b){
    return  a + b
}

function subtract (a, b){
    return a - b
}

function echo (input){
    console.log(input)
}


const sum1 = sum(4,6)  // memanggil fungsi pertama: sum
echo(sum1) // memanggil fungsi ke dua: echo

const result1 = subtract(15,8)
const result2 = sum(result1,3)
echo(result2)

function addAndCallback (a,b,callback){
    const sum = a + b // ini akan dijalankan terlebih dahulu
    if(callback){ // callback hanya akan dijalankan sesuai sequence yg diinginkan
        return callback(sum)
    } else {
        return(sum)
    } 
}

function percentage (value){
    const result = value

    return `${result} %`
}

function transformToIDRThousand(input){
    return (input * 1000).toLocaleString('id-ID',{
        currency: 'IDR'
    })
}

console.log(addAndCallback(9,9))

console.log(addAndCallback(8,9,percentage))

console.log(addAndCallback(7,5,transformToIDRThousand))

// Kenapa menggunakan callback => sequence control

// Asynchronous

// setTimeout(()=>{
//     console.log("Ini asynchronous")
// },2000)

// console.log("Ini synchronous 1")
// console.log("Ini synchronous 2")
// console.log("Ini synchronous 3")


// Pengendalian fungsi asynchronous menggunakan Promise
// Promise => arti katanya janji

// Promise punya 3 state =>
    // Pending: initial state, bisa iya(resolved) bisa tidak(rejected)
    // Resolved: promise sudah fullfiled sudah terlaksana
    // Rejected: promise bisa juga dibatalkan atau tidak terjadi

const tryPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success = Boolean(Math.floor(Math.random() * 2)) // Boolean 0: FALSE, Boolean 1: TRUE
        if(success){
            resolve("SUCCESS")
        } else {
            reject("ERROR")
        }
        
    }, 2000);
})

// tryPromise
//     .then((okay) => console.log(okay)) // ini hasil dari resolve
//     .catch((err) => console.log(err)
//     ) // ini hasil dari reject
//     .finally(() => console.log("Finally Done")) // boleh dipakai atau tidak


// Bagaimana proses async bisa berjalan sesuai sequence kita

async function asyncAwait () {
    console.log("Program async await mulai")
    
    await tryPromise
    .then((okay) => console.log(okay)) // ini hasil dari resolve
    .catch((err) => console.log(err)
    ) // ini hasil dari reject
    .finally(() => console.log("Finally Done")) // boleh dipakai atau tidak

    console.log("Program async await selesai")
}

asyncAwait()

async function hello () {
    return "Hello"
}

console.log(await hello())


async function fetchUsers () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/usersy")
        const data = await response.json()
        const userOneName = await data[0].name
        const userOneCity = await data[0].address.city
        const userOneLat = await data[0].address.geo.lat
        console.log(userOneCity)
        console.log(userOneLat)
    } catch (error) {
        console.log("Ada gangguan. Mungkin URL anda salah")
    }
}

fetchUsers()

// Proses error handling digunakan baik untuk developer dan user
// .catch 

const data = {
    "user1":{
        "name":"Joe",
        "email":"joe@mail.com"
    },
    "user2" : {
        "name":"Alex",
        "email":"alex@mail.com"
    }
}

const data2 = `{"user1":{"name":"Joe","email":"joe@mail.com"},"user2":{"name":"Alex","email":"alex@mail.com"}}`

console.log(JSON.stringify(data))
const stringifiedData = JSON.stringify(data)
console.log(JSON.parse(stringifiedData))




