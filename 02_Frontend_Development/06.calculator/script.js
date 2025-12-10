const digits = [0,1,2,3,4,5,6,7,8,9]

    document.body.addEventListener('click',function (event) {
        const screen = document.getElementById('screen')

        const prevVal = screen.innerHTML
        const newDigit = event.target.innerHTML
        let currVal
    
        if(event.target && event.target.nodeName === 'BUTTON'){
            if(digits.includes(Number(newDigit))){
                currVal = prevVal + newDigit
            }

        }
        screen.innerHTML = currVal
            
    })

