// Define the numbers and the operation here

// Write if-statements here
/*
1. Fork and clone this repository
2. Open the repo folder in Visual Studio Code.
3. In calculator.js, create an integer variable for the first number.
4. Create a second integer variable for the second number.
5. Create a third string variable for the operation (addition "+", subtraction "-", multiplication "*", or division "/").
6. Use if-statements to check which operation the third variable has.
7. Perform the mathematical operation on the two numbers, and print the result to the console.

Submission
- To submit your work, simply push your code to GitHub.

Steps
- After finishing the task and verifying your work, follow these steps to push your code to GitHub:

1. Navigate to project root (where calculator.js is).
2. Run the command git add .
3. Run git commit -m "Solved the Conditionals task".
4. Push to GitHub: git push.*/

var number_1 = 4;
var number_2 = 6;
var operation = "+";

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
function calculate(op, a, b) {
  if (op == "+") {
    return add(a, b);
  } else if (op == "-") {
    return sub(a, b);
  } else if (op == "*") {
    return mul(a, b);
  } else if (op == "/") {
    return div(a, b);
  } else if (op == "%") {
    return mod(a, b);
  } else {
    console.log("Not a valid operation");
  }
}

console.log(calculate(operation, number_1, number_2));
