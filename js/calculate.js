function calculate() {
  let screen = document.getElementById("screen");
  let buttons = document.getElementsByClassName("btn");
  let clear = document.getElementById("btn-clear");
  let equal = document.getElementById("btn-equal");

  //   console.log(buttons);
  //   console.log(equal);
  //   console.log(clear);
  for (const button of buttons) {
    // console.log(button);
    button.addEventListener("click", function() {
      //   console.log("clicked");
      let buttonValue = button.innerText;
      //   console.log(buttonValue);
      screen.value += buttonValue;
    });
  }
  equal.addEventListener("click", function() {
    // console.log("clicked");
    let a = document.getElementById("screen").value;
    let b = eval(a);
    document.getElementById("screen").value = b;
    // console.log(b);
  });

  clear.addEventListener("click", function() {
    screen.value = "";
    // console.log("clicked");
  });
}

calculate();
