/*-------------------------------- Constants --------------------------------*/
// const calculator = document.querySelector("#calculator");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const clearButtonElement = document.querySelector("#clear-button")
/*-------------------------------- Variables --------------------------------*/
let displayValue = "";
let inputOperator = "";
let inputNumber1 = "";
let inputNumber2 = "";
let clearCalculator = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

clearButtonElement.addEventListener("click", () => {
  function clearButton() {
    
  }
})

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
  function pressButtonclick(event) {
    const buttonClicked = event.target.innerText;
    if (!isNaN(parseFloat(buttonClicked))) {
      displayValue += buttonClicked;
      display.innerText = displayValue;
    } else if (buttonClicked) {
      switch (buttonClicked) {
        case "+":
          return displayValue = "" ;
          break;
        case "-":
          return displayValue = ""  ;
          break;
        case "*":
          return displayValue = ""  ;
          break;
        case "/":
          return displayValue = ""  ;
          break;
        case "=":
          return displayValue = ""  ;
          break;
        case "C":
          return displayValue = ""  ;
          break;
          
      }
    }
  }
});

function sumFunction(sum) {
  let result = 0;
  let i;
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + sum;
  }
  return result;
}

// console.log("SUM FUNCTION:",sumFunction(1,2))

function addOperator(inputNumber1, inputNumber2) {
  let  num1 = parseFloat(document.getElementById(num1).value);
  let  num2 = parseFloat(document.getElementById(num2).value);
  let sum = num1 + num2;
  document.getElementById("result").innerText = "Sum: " + sum
  // return inputNumber1 + inputNumber2;
}
console.log(" + ",addOperator(1,3));

function subtractOperator(inputNumber1, inputNumber2) {
  return inputNumber1 - inputNumber2;
}
console.log(" - ",subtractOperator(2,4));

function divideOperator(inputNumber1, inputNumber2) {
  return inputNumber1 / inputNumber2;
}
console.log(" / ",divideOperator(2,4));

function multiplyOperator(inputNumber1, inputNumber2) {
  pressButtonclick
  return inputNumber1 * inputNumber2;
}
console.log(" X ",multiplyOperator(2,3));


