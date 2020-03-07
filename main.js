// Even though only addition requires number I replaced all the strings with numbers
let add = (x,y) => Number(x)+Number(y);
let substract = (x,y) => Number(x)-Number(y); 
let multiply = (x,y) => Number(x)*Number(y);
let divide = (x,y) => Number(x)/Number(y);
const calcDisplay = document.querySelector('#display')
calcDisplay.textContent = '0';
const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.op')
const clearBtn = document.querySelector('.clr')
const decimal = document.querySelector('.dot')
let equation = [];
let x = ""
let y = ""
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
    const thing = (obj) => {
        switch(obj.target.textContent) {
            case 'x':
                action = multiply;
                x = calcDisplay.textContent;
                equation.push(x)
                equation.push('*')
                calcDisplay.textContent = "0";
                return console.log(equation)

            case '/':
                action = divide;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(x)
                equation.push('/')
                calcDisplay.textContent = "0";
                return console.log(equation)
        
            case '+':
                action = add;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(x)
                equation.push('+')
                calcDisplay.textContent = "0";
                return console.log(equation)
    
            case '-':
                action = substract;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(x)
                equation.push('-')
                calcDisplay.textContent = "0";
                return console.log(equation)

            case '=':
                y = calcDisplay.textContent;
                equation.push(y);

                firstParameter = equation[0]
                secondParameter = equation.splice(2,equation.length-1).join('')
                for (let i = 0; i<secondParameter.split('').length;i++) {
                    if (secondParameter.split('').length[i] === NaN) {
                        `${secondParameter.split('')[i-1]}${secondParameter.split('')[i]}${secondParameter.split('')[i+1]}` 
                    }
                }
                switch(equation[1]) {
                    case "*":
                        return calcDisplay.textContent = operate(multiply,firstParameter,secondParameter)
                    case "/":
                        return calcDisplay.textContent = operate(divide,firstParameter,secondParameter)
                    case "+":
                        return calcDisplay.textContent = operate(add,firstParameter,secondParameter)
                    case "-":
                        return calcDisplay.textContent = operate(substract,firstParameter,secondParameter)
                }
                
                return console.log('=')
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', (e) => {
            if (calcDisplay.textContent === '0') {
                calcDisplay.textContent = ""
            }
            calcDisplay.textContent += e.target.textContent
        })
    }

    for (let i = 0; i < operators.length; i++) {
       operators[i].addEventListener('click', thing)
}

clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '0';
    x = 0;
    y = 0;
    equation = [];
}) 
decimal.addEventListener('click', () => {
    if (calcDisplay.textContent.includes('.')) {
        return;
    } calcDisplay.textContent += '.'
})

