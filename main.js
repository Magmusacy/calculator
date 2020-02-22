let add = (x,y) => x+y;
let substract = (x,y) => x-y; 
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;

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

const chuj = document.querySelector('button')       
console.log(chuj.value)