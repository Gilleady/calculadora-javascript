let displayValue = "";
let firstOperand = null;
let operator = null;

function appendNumber(number) {
  displayValue += number;
  document.getElementById("display").value = displayValue;
}

function appendOperator(op) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  operator = op;
  displayValue = "";
}

function calculate() {
  const secondOperand = parseFloat(displayValue);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      if (secondOperand === 0) {
        result = "Erro: Divisão por zero!";
      } else {
        result = firstOperand / secondOperand;
      }
      break;
    default:
      result = "Erro: Operador inválido!";
  }
  displayValue = result.toString();
  document.getElementById("display").value = displayValue;
  firstOperand = null;
  operator = null;
}

function clearDisplay() {
  displayValue = "";
  firstOperand = null;
  operator = null;
  document.getElementById("display").value = displayValue;
}