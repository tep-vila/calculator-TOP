const display = document.querySelector(".display");
const numpad = document.querySelector(".numpad");
const decimalKey = document.querySelector(".numpad.decimal");
const operationKeys = document.querySelector(".operation-row");
const equalSign = document.querySelector(".equal-sign");

let value1 = undefined;
let value2 = undefined;
let operator = undefined;
let computed = undefined;

let toNextValue = false;
let isDecimal = false;
let afterComputation = false;

function updateDisplay(value) {
  if (display.textContent.length >= 14) {
    return;
  }

  if (display.textContent === "0" && value === ".") {
    display.textContent = display.textContent.concat(value);
    return;
  } else if (display.textContent === "0") {
    display.textContent = value;
    return;
  }
  display.textContent = display.textContent.concat(value);
}

numpad.addEventListener("mousedown", (e) => {
  if (e.target.textContent === "clear") {
    reset();
    return;
  } else if (e.target.textContent === ".") {
    handleDecimal(e);
    return;
  }

  if (toNextValue === true) {
    clear();
    toNextValue = false;
  }
  updateDisplay(e.target.textContent);
});

operationKeys.addEventListener("mousedown", (e) => {
  if (operator !== undefined) {
    console.log(computed);
    compute();
  }
  operator = e.target.textContent;
  if (value1 === undefined) {
    value1 = display.textContent;
  } else {
    value2 = display.textContent;
  }

  toNextValue = true;
});

function clear() {
  display.textContent = undefined;
  isDecimal = false;
}

function reset() {
  display.textContent = "0";
  isDecimal = false;
  value1 = undefined;
  value2 = undefined;
  operator = undefined;
}

function handleDecimal(e) {
  if (isDecimal === true) {
    return;
  }
  updateDisplay(e.target.textContent);
  isDecimal = true;
}

equalSign.addEventListener("mousedown", () => {
  if (value1 === undefined) {
    return;
  } else {
    compute();
    afterComputation = true;
  }
});

function operation() {
  let parsedVal1 = parseFloat(value1);
  let parsedVal2 = parseFloat(value2);
  switch (operator) {
    case "+":
      add(parsedVal1, parsedVal2);
      break;

    case "-":
      subtract(parsedVal1, parsedVal2);
      break;

    case "*":
      multiply(parsedVal1, parsedVal2);
      break;

    case "/":
      divide(parsedVal1, parsedVal2);
      break;
  }
}

function add(val1, val2) {
  console.log("occured", val1, val2);
  computed = val1 + val2;
}

function subtract(val1, val2) {
  computed = val1 - val2;
}

function newEquation() {
  value1 = computed;
  value2 = undefined;
  operator = undefined;
}

function compute() {
  value2 = display.textContent;
  operation();
  if (computed.toString().length > 8) {
    display.textContent = computed.toFixed(3);
  } else display.textContent = computed;
  console.log(computed);
  newEquation();
}
