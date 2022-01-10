//Very Easy
const numb1 = 6;
const numb2 = 4;

console.log('the difference between ' + numb1 + ' and 2 is ' + numb2);

//Easy
const name1 = 'Miku';
const name2 = 'Van';

console.log('The name ' + name1 + ' is longer than ' + name2 + ' by 1 characters');

//Medium
const popUp = prompt('Enter a word: ');

if (popUp === popUp.toUpperCase()) {
    console.log('SHOUTING');
} else if (popUp === popUp.toLowerCase()) {
    console.log('Whispering');
} else {
    console.log('Talking normally');
}

//Hard
let x = 40;
let y = 10;

function add() {
    return x + y;
}
add();

function subtract() {
    return x - y;
}
subtract();

function multiply() {
    return x * y;
}
multiply();

function divide() {
    return x / y;
}
divide();

//Very Hard
const num1 = prompt("What would you like Number1 to be: ");
const symbol = prompt("Would you like to add(+), subtract(-), multiply(*), or divide(/): ");
const num2 = prompt("What would you like Number2 to be: ");

if (symbol == "+") {
    add(num1, num2);
}
else if (symbol == "-") {
    subtract(num1, num2);
}
else if (symbol == "*") {
    multiply(num1, num2);
}
else if (symbol == "/") {
    divide(num1, num2);
}
else {
    console.log("-_- that operation is not available, try again...");
}

