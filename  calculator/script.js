

  let display = document.getElementById('display');
  let currentNumber = '';
  let operator = '';
  let result = 0;

  function appendNumber(num) {
    currentNumber += num;
    display.textContent = currentNumber;
  }

  function setOperator(op) {
    operator = op;
    result = parseFloat(currentNumber);
    currentNumber = '';
  }

  function calculate() {
    if (operator === '+') {
      result += parseFloat(currentNumber);
    } else if (operator === '-') {
      result -= parseFloat(currentNumber);
    } else if (operator === '*') {
      result *= parseFloat(currentNumber);
    } else if (operator === '/') {
      result /= parseFloat(currentNumber);
    }
    display.textContent = result;
    currentNumber = result.toString();
  }

  function clearDisplay() {
    currentNumber = '';
    operator = '';
    result = 0;
    display.textContent = '0';
  }