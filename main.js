//unnecessary
let add = (x,y) => x+y;
let substract = (x,y) => x-y; 
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;
//---
const calcDisplay = document.querySelector('#display')
calcDisplay.textContent = '0';
const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.op')
const clearBtn = document.querySelector('.clr')
const decimal = document.querySelector('.dot')
const backspace = document.querySelector('.bck')
let equation = [];
let x;
let y;
//unnecessary
function operate(operator,x,y) {
    switch(operator) {
        case add:
            return add(x,y)
        case substract:
            return substract(x,y)
        case multiply:
            return multiply(x,y)
        case divide:
            return divide(x,y)
        }  
}
//---
    const fillingArray = (currentOperator) => {
        switch(currentOperator.target.textContent) {
            case 'x':
                x = calcDisplay.textContent;
                equation.push(Number(x))
                equation.push('*')
                calcDisplay.textContent = "0";
                preventOverflow()
                return console.log(equation)

            case '÷':
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(Number(x))
                equation.push('÷')
                calcDisplay.textContent = "0";
                preventOverflow()
                return console.log(equation)
        
            case '+':
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(Number(x))
                equation.push('+')
                calcDisplay.textContent = "0";
                preventOverflow()
                return console.log(equation)
    
            case '-':
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(Number(x))
                equation.push('-')
                calcDisplay.textContent = "0";
                preventOverflow()
                return console.log(equation)

            case '=':
        y = calcDisplay.textContent;
        equation.push(Number(y));
        let answer = equation[0] 
                for (let i = 2; i < equation.length; i += 2) {
                    switch(equation[i-1]) {
                    case '+':
                        if (equation[i+1] === '+' || equation[i+1] === '-') {
                            answer += equation[i]
                        console.log(answer)
                        } else if (equation[i+1] === '*') {
                            answer += equation[i] * equation[i+2]
                        console.log(answer)
                        } else if (equation[i+1] === '÷') {
                            answer += equation[i] / equation[i+2]
                        } else {
                            answer += equation[i]
                        }
                    break;
                    case '-':
                        if (equation[i+1] === '+' || equation[i+1] === '-') {
                            answer -= equation[i]
                        console.log(answer)
                        } else if (equation[i+1] === '*') {
                            answer -= equation[i] * equation[i+2]
                        console.log(answer)
                        } else if (equation[i+1] === '÷') {
                            answer -= equation[i] / equation[i+2]
                        } else {
                            answer -= equation[i]
                        }
                    break;
                    case '÷':
                        if (equation[i-3] === '+' || equation[i-3] === '-') {
                        console.log(answer)
                            answer = answer
                        } else if (equation[i-3] === '*') {
                            answer = answer / equation[i]
                        console.log(answer)
                        } else if (equation[i-3] === '÷') {
                            answer = answer / equation[i]
                        console.log(answer)
                        } else {
                            answer = answer / equation[i]
                        }
                    break;
                    case '*':
                        if (equation[i-3] === '+' || equation[i-3] === '-') {
                        console.log(answer)
                            answer = answer
                        } else if (equation[i-3] === '*') {
                            answer = answer * equation[i]
                        console.log(answer)
                        } else if (equation[i-3] === '÷') {
                            answer = answer * equation[i]
                        console.log(answer)
                        } else {
                            answer = answer * equation[i]
                        }
                    break;
                    }
                } 
        answer = +parseFloat(answer).toFixed(2)
    if (answer === Infinity || answer === -Infinity) {
        answer = "Don't divide by 0!!!"
    }
        calcDisplay.textContent = answer
        equation = []
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', (e) => {
            if (calcDisplay.textContent === '0') {
                calcDisplay.textContent = ""
            }
            calcDisplay.textContent += e.target.textContent
            preventOverflow()
        })
    }
    for (let i = 0; i < operators.length; i++) {
       operators[i].addEventListener('click', fillingArray)
}

clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '0';
    x = 0;
    y = 0;
    equation = [];
    answer = 0;
}) 
decimal.addEventListener('click', () => {
    if (calcDisplay.textContent.includes('.')) {
        return;
    } calcDisplay.textContent += '.'
    
})
backspace.addEventListener('click', () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,calcDisplay.textContent.length-1)
    if (calcDisplay.textContent === "") {
        calcDisplay.textContent = 0;
    }
})

function preventOverflow() {
    if (calcDisplay.textContent.length > 20) {
        numbers.forEach((number) => {
            number.disabled = true;
            decimal.disabled = true;
        })
    } else {
        numbers.forEach((number) => {
            number.disabled = false;
            decimal.disabled = false;
        })
    }
}

