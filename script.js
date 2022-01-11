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

function add(x, y) {
    return x + y;
}
add();

function subtract(x, y) {
    return x - y;
}
subtract();

function multiply(x, y) {
    return x * y;
}
multiply();

function divide(x, y) {
    return x / y;
}
divide();

//Very Hard
const num1 = prompt("What would you like Number1 to be: ");
const symbol = prompt("Would you like to add(+), subtract(-), multiply(*), or divide(/): ");
const num2 = prompt("What would you like Number2 to be: ");

const n1 = Number(num1);
const n2 = Number(num2);

if (symbol === "+") {
    const sum = add (n1, n2);
    console.log(sum);
}
else if (symbol === "-") {
    const sub = subtract (n1, n2);
    console.log(sub);
}
else if (symbol === "*") {
    const mult = multiply (n1, n2);
    console.log(mult);
}
else if (symbol === "/") {
    const divi = divide (n1, n2);
    console.log(divi);
}
else {
    console.log("-_- that operation is not available, try again...");
}

