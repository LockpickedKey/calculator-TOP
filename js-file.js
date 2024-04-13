let value1, value2, result, displayValue;
let operator = '';

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