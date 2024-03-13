const display = document.querySelector(".display");
const numpad = document.querySelector(".numpad");
const decimalKey = document.querySelector(".numpad.decimal");
const operationKeys = document.querySelector(".operation-row");

let value1 = 0;
let value2 = 0;
let operator = "";
let computed = "";

let isDecimal = false;

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
    clear();
    return;
  } else if (e.target.textContent === ".") {
    handleDecimal(e);
    return;
  }
  updateDisplay(e.target.textContent);
});

operationKeys.addEventListener("mousedown", (e) => {
  operator = e.target.textContent;
});

function clear() {
  display.textContent = "0";
  isDecimal = false;
}

function handleDecimal(e) {
  if (isDecimal === true) {
    return;
  }
  updateDisplay(e.target.textContent);
  isDecimal = true;
}
