/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let displayValue = "";
let inputOperator = "";
let inputNumber1 = "";
let inputNumber2 = "";
let clearCalculator = "";
let calculatorTotal = 0;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', pressButtonclick)
  // This log is for testing purposes to verify we're getting the correct value
  // console.log(event.target.innerText);
  // Future logic to capture the button's value would go here...

  function pressButtonclick(event) {
    const buttonClicked = event.target.innerText;
    if (!isNaN(parseFloat(buttonClicked))) {
      displayValue += buttonClicked;~
      display.innerText += displayValue;
    } else if (buttonClicked) {
      switch (buttonClicked) {
        case "+":
          return inputNumber1 + inputNumber2;
          break;
        case "-":
          return inputNumber1 - inputNumber2;
          break;
        case "*":
          return inputNumber1 * inputNumber2;
          break;
        case "/":
          return inputNumber1 / inputNumber2;
          break;
        case "=":
          return sumFunction;
          break;
        case "C":
          return displayValue = "";
          break;
      }
    }
  }
});

function sumFunction(sum) {
  let result = -1;
  let i;
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + sum;
  }
  return result;
}

console.log(sumFunction("====== SUM of numbers ===="1,2,5))