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


// Coding challenge 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
console.log((markMass / (markHeight ** 2)), (johnMass / (johnHeight ** 2)));
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
let markHigherBMI = markMass / (markHeight ** 2) > johnMass / (johnHeight ** 2);
console.log(markHigherBMI);
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.



// Template Literals
const firstName = "Kobe";
const job = "unemployed";
const birthYear = 2001;
const currentYear = 2037;

// Make new variable to concatenate string together and show it in an ouput
const kobe = "I am " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + " young man";
console.log(kobe)

// Can also be done using backticks and ${} to insert variables directly (template literals)
const kobeNew = `I am ${firstName}, a ${(currentYear - birthYear)} years old ${job} young man.`;
console.log(kobeNew);


// Taking decisions
const age = 18;
// Check if statement is true or false, correspond with the given output
if(age >= 18){
    console.log("Kobe can start driving license 🎩");
} else {
    console.log(`Kobe has to wait ${18 - age} years to start driving`);
}


// Coding Challenge 2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const bmiMark = (markMass / (markHeight ** 2));
const bmiJohn = (johnMass / (johnHeight ** 2));
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if(bmiMark > bmiJohn){
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}
// 2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
if(bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

*/

// Type conversion and Coercion
// Type convertion
const inputYear = "1991"
// This will concatenate 18 tot the string inputYear
// console.log(inputYear + 18);

// Now we convert the string to a number or integer
console.log(Number(inputYear) + 18);
// Trying to covert a string to a number without a number as value, gives error NaN because it isnt a number
console.log(Number("Jonas"))

// Converting to a string
console.log(String(23));


// Type coertion
// js will automatically convert the faulty type to the right one, in this case the number to a string
console.log("I am " + 23 + " years old");
// The minus opperator converts string to numbers, the same goes for the multiplier operator or the deviding operator
console.log("23" - "10" - 3);

