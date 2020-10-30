let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonItem = e.target.innerText;
    if (buttonItem == "X") {
      buttonItem = "*";
      screenValue += buttonItem;
      screen.value = screenValue;
    } else if (buttonItem == "C") {
      screenValue = "  ";
      screen.value = screenValue;
    } else if (buttonItem == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonItem;
      screen.value = screenValue;
    }
  });
}
