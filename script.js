/* <--- operators buttons ----> */

const additionBtn = document.getElementById("addition");
const subtractionBtn = document.getElementById("subtraction");
const multiplicationBtn = document.getElementById("multiplication");
const divisionBtn = document.getElementById("division");
const equalBtn = document.getElementById("equal");

/* <--- numbers ----> */
const numbers = document.querySelectorAll(".numbers");

/* <--- display ----> */
const previousValueInDisplay = document.querySelector(".prev-value");
const currentValueInDisplay = document.querySelector(".current-value");

let currentValue = "";
let previousValue = "";

function showInDisplay() {
  currentValueInDisplay.textContent = currentValue;
  previousValueInDisplay.textContent = previousValue;
}

function showNumbersInDisplay(number) {
  if (number === "." && currentValue.includes(".")) return;
  currentValue += number;
  showInDisplay();
}

numbers.forEach((number) =>
  number.addEventListener("click", () => showNumbersInDisplay(number.innerHTML))
);

additionBtn.addEventListener("click", () => {
  currentValue += additionBtn.innerHTML;
  previousValue = currentValue;
  currentValue = "";
  showInDisplay();
});

subtractionBtn.addEventListener("click", () => {
  currentValue += subtractionBtn.innerHTML;
  previousValue = currentValue;
  currentValue = "";
  showInDisplay();
});

multiplicationBtn.addEventListener("click", () => {
  currentValue += multiplicationBtn.innerHTML;
  previousValue = currentValue;
  currentValue = "";
  showInDisplay();
});

divisionBtn.addEventListener("click", () => {
  currentValue += divisionBtn.innerHTML;
  previousValue = currentValue;
  currentValue = "";
  showInDisplay();
});

equalBtn.addEventListener("click", () => {
  if (additionBtn.innerHTML === "+" && previousValue.includes("+")) {
    previousValue = parseFloat(previousValue) + parseFloat(currentValue);
  } else if (subtractionBtn.innerHTML === "-" && previousValue.includes("-")) {
    previousValue = parseFloat(previousValue) - parseFloat(currentValue);
  } else if (
    multiplicationBtn.innerHTML === "*" &&
    previousValue.includes("*")
  ) {
    previousValue = parseFloat(previousValue) * parseFloat(currentValue);
  } else {
    previousValue = parseFloat(previousValue) / parseFloat(currentValue);
  }

  currentValue = "";
  showInDisplay();
});

function cleanDisplay() {
  currentValue = currentValue.slice(1);
  showInDisplay();
}

function cleanAllDisplay() {
  currentValue = "";
  previousValue = "";
  showInDisplay();
}
