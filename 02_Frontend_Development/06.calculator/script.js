const numbers = [0,1,2,3,4,5,6,7,8,9]
const operators = ["C","+","-","x","÷","="]
    const digit = document.getElementById('digit')
    digit.innerHTML = operators.concat(numbers.reverse()).map(digit => {
        return `<button id=${digit} onClick=clickDigit() class="digit-btn">${digit}</button>`
    }).join("")

    let display = document.getElementById('screen')
    let clickedDigit

    function clickDigit () {
        digit.addEventListener('click',function(event){
            clickedDigit = event.target.innerHTML
        })
        console.log(display.innerText === "")
            console.log(numbers.includes(clickedDigit))
        if(display.innerText === "" || numbers.includes(clickedDigit)){
            
        }

    }


