const numbers = [0,1,2,3,4,5,6,7,8,9]
const operators = ["C","+","-","x","÷","="]
const digit = document.getElementById('digit')

digit.innerHTML = operators.concat(numbers.reverse()).map(digit => {
    return `<button onClick="clickDigit('${digit}')" class="digit-btn">${digit}</button>`
}).join("")

let result = document.getElementById('result')
let current = ""
let prev = 0
let op = null

function clickDigit(val) {
    if (!isNaN(val)) {
        current += val
        result.innerHTML = current
    } else {
        if (val === "C") {
            current = ""
            prev = 0
            op = null
            result.innerHTML = ""
        } else {
            mathOperation(val)
        }
    }
}

function mathOperation(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "x":
        case "÷":
            prev = Number(current)
            current = ""
            op = operator
            break
        case "=":
            if (op && current !== "") {
                let second = Number(current)
                switch (op) {
                    case "+": result.innerHTML = prev + second; break
                    case "-": result.innerHTML = prev - second; break
                    case "x": result.innerHTML = prev * second; break
                    case "÷": result.innerHTML = prev / second; break
                }
                current = ""
                prev = 0
                op = null
            }
            break
    }
}
