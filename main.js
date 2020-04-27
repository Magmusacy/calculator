const buttons = document.querySelectorAll(".btn");
const calcDisplay = document.querySelector("#display");
calcDisplay.textContent = "0";
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const clearBtn = document.querySelector(".clr");
const decimal = document.querySelector(".dot");
const backspace = document.querySelector(".bck");
const equation = [];
let x;
let y;
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};
function currentOperatorAdd(operatorSign) {
  if (operatorSign.value !== "=") {
    x = calcDisplay.textContent;
    equation.push(+x);
    switch (operatorSign.value) {
      case "*":
        equation.push(operations["*"]);
        break;
      case "/":
        equation.push(operations["/"]);
        break;
      case "+":
        equation.push(operations["+"]);
        break;
      case "-":
        equation.push(operations["-"]);
        break;
    }
    calcDisplay.textContent = "0";
    preventOverflow();
    return console.log(equation);
  }
}
function evaluateArray(array) {
  for (let i = 1; i < array.length; i += 2) {
    if (
      (array[i] === operations["+"] || array[i] === operations["-"]) &&
      (array[i + 2] === operations["+"] ||
        array[i + 2] === operations["-"] ||
        array[i + 2] === undefined)
    ) {
      array.splice(i - 1, 3, +`${array[i](array[i - 1], array[i + 1])}`); // evaluate [number,operator,number] and splice the array
    }
    else if (
      (array[i] === operations["+"] || array[i] === operations["-"]) &&
      (array[i + 2] === operations["/"] || array[i + 2] === operations["*"])
    ) {
      console.log(equation)
      array.splice(i + 1, 3, +`${array[i + 2](array[i + 1], array[i + 3])}`);
      console.log(equation)
    } else {
      array.splice(i - 1, 3, +`${array[i](array[i - 1], array[i + 1])}`);
    }
  }
}
const fillingArray = (currentOperator) => {
  console.log(currentOperator);
  currentOperatorAdd(currentOperator);
  if (currentOperator.value === "=") {
    y = calcDisplay.textContent;
    equation.push(+y);
    console.log(equation);
    x = 0;
    y = 0;
    while (equation.length > 1) {
      evaluateArray(equation);
    }
    console.log(equation);
    calcDisplay.textContent = equation[0];
    x = equation[0];
    equation.pop();
    console.log(equation);
  }
};

// filling the display with numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (calcDisplay.textContent === "0") {
      calcDisplay.textContent = "";
    }
    calcDisplay.textContent += e.target.textContent;
    preventOverflow();
  });
}
// keyboard support below
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Backspace") {
    calcDisplay.textContent = calcDisplay.textContent.slice(
      0,
      calcDisplay.textContent.length - 1
    );
    preventOverflow();
    if (calcDisplay.textContent === "") {
      calcDisplay.textContent = 0;
    }
  }
  if (e.key === ".") {
    if (calcDisplay.textContent.includes(".")) {
      return;
    }
    calcDisplay.textContent += ".";
    decimal.classList.add("activecolor");
  }
  const operatorPressed = Array.from(operators);
  const operatord = operatorPressed.find((chuj) => chuj.value == `${e.key}`);
  if (operatord !== undefined) {
    operatord.classList.add("activeop");
    console.log(operatord);
    fillingArray(operatord);
  }
  operators.forEach((op) =>
    op.addEventListener("transitionend", removeTransitionOp)
  );
  const number = Array.from(numbers);
  const clickedNum = number.find((num) => num.textContent == `${e.key}`);
  if (clickedNum === undefined) {
    return;
  } else if (clickedNum !== undefined) {
    if (calcDisplay.textContent === "0") {
      calcDisplay.textContent = "";
    }
  }
  clickedNum.classList.add("activecolor");
  calcDisplay.textContent += clickedNum.textContent;
  preventOverflow();
  console.log(clickedNum);
  numbers.forEach((num) =>
    num.addEventListener("transitionend", removeTransitionNum)
  );
});
operators.forEach((operator) =>
  operator.addEventListener("click", (operator) => {
    const operatorTarget = operator.target;
    fillingArray(operatorTarget);
  })
);

clearBtn.addEventListener("click", () => {
  calcDisplay.textContent = "0";
  x = 0;
  y = 0;
  equation = [];
  answer = 0;
  preventOverflow();
});
decimal.addEventListener("transitionend", removeTransitionNum);
decimal.addEventListener("click", () => {
  if (calcDisplay.textContent.includes(".")) {
    return;
  }
  calcDisplay.textContent += ".";
});
backspace.addEventListener("click", () => {
  calcDisplay.textContent = calcDisplay.textContent.slice(
    0,
    calcDisplay.textContent.length - 1
  );
  preventOverflow();
  if (calcDisplay.textContent === "") {
    calcDisplay.textContent = 0;
  }
});

function preventOverflow() {
  if (calcDisplay.textContent.length > 16) {
    calcDisplay.textContent = 0;
    preventOverflow();
  }
}
function removeTransitionOp(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("activeop");
}
function removeTransitionNum(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("activecolor");
}
