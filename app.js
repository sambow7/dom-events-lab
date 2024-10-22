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

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


// calculator.addEventListener('click', (event) => {
//   console.log(event.target.innerText);
//   // Example
//   if (event.target.classList.contains('number')) {
//     // Do something with a number
//   }

//   // Example
//   if (event.target.innerText === '*') {
//     return sum = inputNumber1, inputNumber2
//   }
// });

buttons.forEach((button) => {
  button.addEventListener('click', pressButtonclick);
  // This log is for testing purposes to verify we're getting the correct value
  // console.log(event.target.innerText);
  // Future logic to capture the button's value would go here...

  function pressButtonclick(event) {
    const buttonClicked = event.target.innerText;
    if (!isNaN(parseFloat(buttonClicked))) {
      displayValue += buttonClicked;
      display.innerText = displayValue;
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
          return 
          break;
        case "C":
          return displayValue = ""
          break;
          default:
      }
    }
  }
});

// function sumFunction(sum) {
//   let result = 0;
//   let i;
//   for (i = 1; i < arguments.length; i++) {
//     result += arguments[i] + sum;
//   }
//   return result;
// }

// console.log("SUM FUNCTION:",sumFunction(1,2))