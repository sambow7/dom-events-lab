/*-------------------------------- Constants --------------------------------*/
// const calculator = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/
// display
let displayValue = "";
// operator button
let inputOperator = "";
//  number button
let inputNumber1 = "";
let inputNumber2 = "";
// result
let result = "";

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button, index) => {
  button.addEventListener("click", handleButtonclick)
});

/*-------------------------------- Functions --------------------------------*/
function handleButtonclick(event) {
  const clickedButtonvalue = event.target.innerText
    // console.log(event.target.innerText)
  if (clickedButtonvalue) {
    displayValue += clickedButtonvalue;
    display.innerText = displayValue;
    // console.log(display.innerText) // i need to have if else conditon and check multiple scenerio for when fet the value, operator, and clear
    } else if (clickedButtonvalue) {
      
      
  } 
}


function handleNumberclicked(number) {
  // const clickedNumbervalue = 
}
  
  

function handleOperatorclick(operator) {
  // so i can only see the numbers display and not the operator display 
}


// Operator Functions:

function addOperator(inputNumber1, inputNumber2) {
  return inputNumber1 + inputNumber2;
}
// console.log(" + ",addOperator(2,4));

function subtractOperator(inputNumber1, inputNumber2) {
  return inputNumber1 - inputNumber2;
}
// console.log(" - ",subtractOperator(2,4));

function divideOperator(inputNumber1, inputNumber2) {
  return inputNumber1 / inputNumber2;
}
// console.log(" / ",divideOperator(2,4));

function multiplyOperator(inputNumber1, inputNumber2) {
  return inputNumber1 * inputNumber2;
}
// console.log(" X ",multiplyOperator(2,3));



// buttons.forEach((button) => {
//   button.addEventListener('click', pressButtonclick);
//   function pressButtonclick(event) {
//     const buttonClicked = event.target.innerText;
//     if (!isNaN(parseFloat(buttonClicked))) {
//       displayValue += buttonClicked;
//       display.innerText = displayValue;
//     } else if (buttonClicked) {
//       switch (buttonClicked) {
//         case "+":
//           return displayValue = " + "  ;
//           break;
//         case "-":
//           return displayValue = " - "  ;
//           break;
//         case "*":
//           return displayValue = " * "  ;
//           break;
//         case "/":
//           return displayValue = " / "  ;
//           break;
//         case "=":
//           return displayValue = " = "  ;
//           break;
//         case "C":
//           return displayValue = ""  ;
//           break;
          
//       }
//     }
//   }
// });

// function sumFunction(sum) {
//   let result = 0;
//   let i;
//   for (i = 1; i < arguments.length; i++) {
//     result += arguments[i] + sum;
//   }
//   return result;
// }

// console.log("SUM FUNCTION:",sumFunction(1,2))

