let value1, value2, result;
let operator = '';
let displayValue = '0';
let displayNumbers = [];

const buttons = document.querySelectorAll(".displayable");
const display = document.querySelector("#display");
const ac = document.querySelector("#ac");
const equal = document.querySelector("#equals");

const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;
const percentage = (a, b) => a/100*b;

function updateDisplay(text) {
      display.innerText = text;
}

function refreshDisplay(){
      let newDisplay = displayNumbers.join("");
      display.innerText = newDisplay;
}

function resetDisplay(){
      display.innerText = "0";
      displayNumbers = [];
}

function operate() {
      let foo = displayNumbers.join("");
      if(foo.includes("+")) {
            foo = foo.split("+");
            console.log(foo[0]);
            let newDisplayNumber = add(parseInt(foo[0], 10), parseInt(foo[1], 10));
            console.log(newDisplayNumber);
            displayNumbers = [newDisplayNumber];
            display.innerText = newDisplayNumber;
      } else if(foo.includes("-")) {
            foo = foo.split("-");
            console.log(foo[0]);
            let newDisplayNumber = subtract(parseInt(foo[0], 10), parseInt(foo[1], 10));
            console.log(newDisplayNumber);
            displayNumbers = [newDisplayNumber];
            display.innerText = newDisplayNumber;
      } else if(foo.includes("×")) {
            foo = foo.split("×");
            console.log(foo[0]);
            let newDisplayNumber = multiply(parseInt(foo[0], 10), parseInt(foo[1], 10));
            console.log(newDisplayNumber);
            displayNumbers = [newDisplayNumber];
            display.innerText = newDisplayNumber;
      } else if(foo.includes("÷")) {
            foo = foo.split("÷");
            console.log(foo[0]);
            let newDisplayNumber = divide(parseInt(foo[0], 10), parseInt(foo[1], 10));
            console.log(newDisplayNumber);
            displayNumbers = [newDisplayNumber];
            display.innerText = newDisplayNumber;
      }
}

buttons.forEach(button => button.addEventListener("click", () => {
      displayNumbers.push(button.value);
      refreshDisplay();
}));

ac.addEventListener("click", () => {
      resetDisplay();
});

equal.addEventListener("click", () => {
      operate();
});