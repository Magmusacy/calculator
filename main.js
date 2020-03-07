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
        const op = obj.target.textContent
        switch(op) {
            case 'x':
                action = multiply;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                return console.log('x')
        }
        switch(op) {
            case '/':
                action = divide;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                return console.log('/')
        }
        switch(op) {
            case '+':
                action = add;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                return console.log('+')
        }
        switch(op) {
            case '-':
                action = substract;
                x = calcDisplay.textContent;
                calcDisplay.textContent = "0";
                return console.log('-')
        }
        switch(op) {
            case '=':
                y = calcDisplay.textContent;
                calcDisplay.textContent = operate(action,x,y)
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
}) 
decimal.addEventListener('click', () => {
    if (calcDisplay.textContent.includes('.')) {
        return;
    } calcDisplay.textContent += '.'
})

