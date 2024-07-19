function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function operate(x, y, operation) {
  return operation(x, y);
}

console.log(operate(5, 3, subtract));
