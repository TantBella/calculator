let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);

let result;

function add() {
  result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}

function subtract() {
  result = num1 - num2;
  document.getElementById("result").innerHTML = result;
}

function multiply() {
  result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}

function divide() {
  result = num1 / num2;
  document.getElementById("result").innerHTML = result;
}
