/*-------------------------------- Constants --------------------------------*/
// const calculator = document.querySelector("#calculator");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let displayValue = "";
let inputOperator = "";
let inputNumber1 = "";
let inputNumber2 = "";
let result = "";
let clear = "";
/*------------------------ Cached Element References ------------------------*/

display.innerText = 0 
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonclick)
});

/*-------------------------------- Functions --------------------------------*/
function handleButtonclick(event) {
  const clickedButtonvalue = event.target.innerText
  if (!isNaN(clickedButtonvalue)) {
    displayValue += clickedButtonvalue;
    display.innerText = displayValue;
  } else if(["+","-","*","/"].includes(clickedButtonvalue)) {
    inputNumber1 = displayValue;
    inputOperator = clickedButtonvalue;
    displayValue = "";
  } else if (clickedButtonvalue === "="){
    inputNumber2 = displayValue;
    const num1 = parseFloat(inputNumber1);
    const num2 = parseFloat(inputNumber2);
    switch(inputOperator){
      case "+":
        result = num1 + num2;
        break
      case  "-":
        result = num1 - num2;
        break
      case "*":
        result = num1 * num2;
        break
      case "/":
        result = num1 / num2;
        break
      default:
          return
    }
    displayValue = result;
    display.innerText = displayValue;
  } else if (clickedButtonvalue === "C") {
    displayValue = clear;
    display.innerText = 0;
  }
};
