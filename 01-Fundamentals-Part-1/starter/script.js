/*
// Linking a js file

let js = 'amazing';
// Tell console to show output in console which are multiple values to form a outcome
console.log(40+8+23-10);


// Values and variables

// Value 
console.log("Ebbe");
// Declaring variable and give it a value
let firstName = "Kobe";

// Ouput value of variable
console.log(firstName);
console.log(firstName);
console.log(firstName);


// Data types

// Print value of variable
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Show data type of value or variable
console.log(typeof true);
console.log(typeof javascriptIsFun);

// Change value of variable
javascriptIsFun = "KOBE IS SEXY";
// Print out data type of changed variable
console.log(typeof javascriptIsFun);


// Let, const, var

// Can be changed, can be mutated
let age =30;
age = 31;

// Const variables can not be changed, cant be delcared as an empty variable
const birthYear = 2001;
// birthYear = 2005; would give an error
// const job; would give an error, needs an initial value

// Var variables can be mutated
var job = "programmer";
job = "teacher";
*/

// Basic operators

const currentYear = 2037;

const ageKobe = currentYear - 2001;
const ageFebe = currentYear - 2000;
console.log(ageKobe, ageFebe);
// ** means to the power of 
console.log(ageKobe * 2, ageFebe / 10, 2 ** 3);

// + operator can be used to concatenated strings
const firstName = "Kobe";
const lastName = "Jacobs";

console.log(firstName + lastName);

// Assignment opperators
let x = 10 + 5;
console.log(x);

// x = x + 10
x += 10;
console.log(x);

// x = x * 10 can also be done to devide
x *= 4;
console.log(x);

// x++ adds 1 to the value and x-- decreases it by 1
x++;
x--;
console.log(x);

// Comparison operators, output is true if true or false if false
console.log(ageKobe > ageFebe);
console.log(ageKobe < ageFebe);
console.log(ageKobe >= ageFebe);
console.log(ageKobe <= ageFebe);