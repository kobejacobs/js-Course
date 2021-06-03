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
*/

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
