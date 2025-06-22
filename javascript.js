const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  const value = button.dataset.value;
  if (value !== undefined) {
    button.addEventListener("click", () => {
      display.value += value;
    });
  }
});

document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
});

document.getElementById("equal").addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});
