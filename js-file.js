let value1, value2, result;
let operator = '';
let displayValue = '0';
let displayNumbers = [];

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const operate = (n1, op, n2) => {
      switch(op){
          case '+':
              add(n1, n2);
              break;
          case '-':
              subtract(n1, n2);
              break;
          case '*':
              multiply(n1, n2);
              break;
          case '/':
              divide(n1, n2);
              break;
          case '%':
              percentage(n1, n2);
              break
      }
};

function updateDisplay(text) {
      display.innerText = text;
}

function refreshDisplay(){
      let newDisplay = displayNumbers.join("");
      display.innerText = newDisplay;
}

buttons.forEach(button => button.addEventListener("click", () => {
      displayNumbers.push(button.value);
      refreshDisplay();
}))