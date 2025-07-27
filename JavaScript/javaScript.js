const display = document.getElementById("display");
function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value) || "0";
  } catch (error) {
    display.value = "error";
    setTimeout(clearDisplay, 1000);
  }
}
