// Activating strict mode, should be the first line of the code
// Forbids us to do certain things, shows us errors in the console
'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest){
    hasDriversLicense = true;
}
if (hasDriversLicense){
    console.log("I can drive!");
}
// Tells us about certain reserved words to avoid errors
// const interface = "audio";


// Functions
function logger(){
    console.log("My name is Kobe");
}
// Invoking/Calling function
logger();
// Using parameters
function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// Call function with parameters and store the returned value in a variable
const applejuice = fruitProcessor(5, 0);
// print output
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);



// Function Declaration vs Expressions
// Function Declaration
function calcAge(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge(1991);

// Function Expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1,age2);



// Arrow Functions
// Function Expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

// Arrow function
// Faster and easier to write and the return happens explicitly after the 'arrow'
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age3);

// Return manually when using more code and variables
const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirment(2001, "Kobe"));

*/

// Functions calling other functions
function cuttingMachine(fruit){
    return fruit * 4;
}
// Use the cuttingMachine function to calculate the amount of pieces per fruit
function fruitProcessor(apples, oranges){
    const applePieces = cuttingMachine(apples);
    const orangePieces = cuttingMachine(oranges);

    console.log(apples,oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2,3));