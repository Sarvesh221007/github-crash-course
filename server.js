// mathFunctions.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero!";
}

let x = 10;
let y = 5;

console.log("Add:", add(x, y));
console.log("Subtract:", subtract(x, y));
console.log("Multiply:", multiply(x, y));
console.log("Divide:", divide(x, y));
