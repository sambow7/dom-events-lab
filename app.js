/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
/*-------------------------------- Variables --------------------------------*/
let displpayValue = "";
let inputOperator = "";
let inputNumber1  = "";
let inputNumber2  = "";
let clearCalculator = "";
let resultCalulator = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});


calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log  
  console.log(event.target.innerText);

  if (event.target.classList.contains('number')) {
    return parseFloat( inputNumber1 + nummber);
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});

