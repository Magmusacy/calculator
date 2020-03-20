//unnecessary
let add = (x,y) => x+y;
let substract = (x,y) => x-y; 
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;
//---
const buttons = document.querySelectorAll('.btn')
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
        console.log(currentOperator)
        switch(currentOperator.textContent) {
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
                console.log(answer)
        answer = +parseFloat(answer).toFixed(2)
    if (answer === Infinity || answer === -Infinity) {
        answer = "ERROR!"
    }
        calcDisplay.textContent = answer
        equation = []
        }
    }
    // filling the display with numbers
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', (e) => {
            if (calcDisplay.textContent === '0') {
                calcDisplay.textContent = ""
            }
            calcDisplay.textContent += e.target.textContent
            preventOverflow()
        })
    }
    // keyboard support below
    document.addEventListener('keydown',(e) => {
        console.log(e.key)
        if (e.key === 'Backspace') {
            calcDisplay.textContent = calcDisplay.textContent.slice(0,calcDisplay.textContent.length-1)
        preventOverflow()
            if (calcDisplay.textContent === "") {
        calcDisplay.textContent = 0;
    }
        }
        if (e.key === ".") {
                if (calcDisplay.textContent.includes('.')) {
                    return;
                } calcDisplay.textContent += '.'
                decimal.classList.add('activecolor')
        }
        const operatorPressed = Array.from(operators)
        const operatord = operatorPressed.find(chuj => chuj.value == `${e.key}`)
        if (operatord !== undefined) {
            operatord.classList.add('activeop');
            console.log(operatord)
            fillingArray(operatord)
        }
            operators.forEach(op => op.addEventListener('transitionend', removeTransitionOp))
        const number = Array.from(numbers)
        const clickedNum = number.find(num => num.textContent == `${e.key}`)
        if (clickedNum === undefined) {
            return;
        } else if (clickedNum !== undefined) {
           if (calcDisplay.textContent === '0') {
                calcDisplay.textContent = ""
           }
        }
        clickedNum.classList.add('activecolor')
        calcDisplay.textContent += clickedNum.textContent
        preventOverflow()
        console.log(clickedNum)
            numbers.forEach(num => num.addEventListener('transitionend', removeTransitionNum))
    })
    operators.forEach(operator => operator.addEventListener('click', (operator) => {
        const operatorTarget = operator.target
        fillingArray(operatorTarget)
    }))

clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '0';
    x = 0;
    y = 0;
    equation = [];
    answer = 0;
    preventOverflow()
}) 
decimal.addEventListener('transitionend', removeTransitionNum)
decimal.addEventListener('click', () => {
    if (calcDisplay.textContent.includes('.')) {
        return;
    } calcDisplay.textContent += '.'
})
backspace.addEventListener('click', () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,calcDisplay.textContent.length-1)
    preventOverflow()
    if (calcDisplay.textContent === "") {
        calcDisplay.textContent = 0;
    }
})

function preventOverflow() {
    if (calcDisplay.textContent.length > 16) {
            calcDisplay.textContent = 0;
            preventOverflow()
    }
}
function removeTransitionOp(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('activeop')
}
function removeTransitionNum(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('activecolor')
}