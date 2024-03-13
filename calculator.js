const display = document.querySelector(".display");
const numpad = document.querySelector(".numpad");
let value1 = 0;
let value2 = 0;

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
  }
  updateDisplay(e.target.textContent);
});

function clear() {
  display.textContent = "0";
}
