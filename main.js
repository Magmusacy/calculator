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
                x = calcDisplay.textContent;
                equation.push(Number(x))
                equation.push('*')
                calcDisplay.textContent = "0";
                return console.log(equation)

            case '/':
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(Number(x))
                equation.push('/')
                calcDisplay.textContent = "0";
                return console.log(equation)
        
            case '+':
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(Number(x))
                equation.push('+')
                calcDisplay.textContent = "0";
                return console.log(equation)
    
            case '-':
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                equation.push(Number(x))
                equation.push('-')
                calcDisplay.textContent = "0";
                return console.log(equation)

            case '=':
                y = calcDisplay.textContent;
                equation.push(Number(y));
                let answer = equation[0]
                console.log(answer)
                for (let i = 2; i < equation.length; i += 2) {
                    switch(equation[i-1]) {
                        case '+':
                        answer += equation[i]
                        break;
                        case '-':
                        answer -= equation[i]
                        break;
                        case '/':
                        answer = answer / equation[i]
                        break;
                        case '*':
                        answer = answer * equation[i]
                        break;
                    }
                
                }
                answer = parseFloat(answer)
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


