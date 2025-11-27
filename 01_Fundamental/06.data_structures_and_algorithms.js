// Data memiliki banyak tipe: primitive (value) dan non-primitive (reference)
// Data structures => pengorganisasian data untuk penyimpanan, akses, navigasi, modifikasi, dll.
// Data structures => dibuat oleh manusia untuk bisa mengolah data dengan lebih efisien

// Tipe data awal paling basic itu bahasa mesin yaitu binary (0,1)

// A B C

// Contoh sederhana linked list

const list = {
    head: {
        value: 1,
        next: {
            value:2,
            next:{
                value:3,
                next:{
                    value:4,
                    next: null
                }
            }
        }
    }
}

// 2D Arrays => Matrix => 3D 

const twoDimensionalArray = [
    [1,2,3], // index 0
    [4,5,6], // indes 1
    [7,8,9]  // index 2
]

console.log(twoDimensionalArray[0][1])

console.log(twoDimensionalArray[2][2])

// Penyelesain masalah programming itu ~% Logika & ~% Algoritma
// Algorithms diukur dengan menggunakan Big O Notation
// Time complexity: waktu yang dibutuhkan algoritman menyelesaikan tugas sesuai besarnya data
// Space complexity: memory/resource yang dibutuhkan algoritman menyelesaikan tugas sesuai besarnya data

// Binary search
// Digunakan untuk mencari sesuatu/nomor yang berurutan

const numbers = [2,4,8,12,15,16,18,21,30,33,34,37,44,45,46,48,52,55,62,77,81,83,84,85,87,88]

const target = 87

// time complexity: O(n)
// space complexity: O(1)
function findNumber(num, array){
    for (let i = 0; i < array.length; i++){
        if(array[i] === num){
            return i
        } 
    }
    return -1
}

console.log(findNumber(target,numbers))

function findNumber2(num, array) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (array[mid] === num) {
            return mid
        }

        if (array[mid] < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

const targetIndex = findNumber2(target, numbers)

console.log(targetIndex)
