// let
let displayValue = "";
let firstOperand = null;
let operator = null;
// Arrays e const
const operators = ["+", "-", "*", "/"]; 

// Arrow Function
const appendNumber = (number) => {
  displayValue += number;
  document.getElementById("display").value = displayValue;
};

// Objetos 
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b == 0) ? "Erro: Divisão por zero!" : a / b
};

//Arrow Function
const appendOperator = (op) => {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  operator = op;
  displayValue = "";
};

const calculate = () => {
  const secondOperand = parseFloat(displayValue);
  let result;
  
  // Operador ternário
  result = operators.includes(operator) ? operations[operator](firstOperand, secondOperand) : "Erro: Operador inválido!";

  displayValue = result.toString();
  document.getElementById("display").value = displayValue;
  firstOperand = null;
  operator = null;
};

const clearDisplay = () => {
  displayValue = "";
  firstOperand = null;
  operator = null;
  document.getElementById("display").value = displayValue;
};