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



// Coding Challenge 1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const averageScore = (score1,score2,score3) => {
    return (score1 + score2 + score3) / 3;
}
// 2. Use the function to calculate the average for both teams
const averageDolphins = averageScore(44,23,71);
const averageKoalas = averageScore(65,54,49);
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
function checkWinner(avgDolpinhs,avgKoalas){
    if(avgDolpinhs >= avgKoalas * 2){
        return `Dolphins win (${avgDolpinhs} vs. ${avgKoalas})`;
    } else if (avgDolpinhs * 2 <= avgKoalas){
        return `Koalas win (${avgDolpinhs} vs. ${avgKoalas})`;
    } else{
        return `no one wins`;
    }
}
// 4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
console.log(checkWinner(averageDolphins,averageKoalas));
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



// Introduction to Arrays
// Literal syntax
const friends = ["Lukas","JW","Tom"];
console.log(friends);

const y = new Array(1991,1984,2008,2020);
// Output the first element in the array
console.log(friends[0]);
// Property to check the amount of elements in the array
// Can be used to output the last element of the array
console.log(friends.length);

// Change element at index 2
friends[2] = "Anton";
console.log(friends);

// An array can also contain variables and contain other arrays
const kobe = ["Kobe", "Jacobs", 19, "Programmer", friends];
console.log(kobe);

// Array exercise
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990,1967,2002,2010,2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1,age2,age3);

// Store values in new array
const agess = [calcAge2(years[0]), calcAge2(years[1]),calcAge2(years[years.length - 1])];
console.log(agess);



// Basic Array Operators (methods)
const friends = ["Lukas","JW","Tom"];
// Add element to array and storing new length in a variable
const newLength = friends.push("Anton");
console.log(friends, newLength);

// Add element to the beginning of the array
friends.unshift("Andy");
console.log(friends);

// Remove element
// Remove last element
friends.pop();
// Store the popped element in a variable
const popped = friends.pop();
console.log(friends);
// Output popped element
console.log(popped);

// Remove first element
friends.shift();
console.log(friends);

// Show index of chosen element
console.log(friends.indexOf("Lukas"));
// Do the same with non existing element (gives error -1)
console.log(friends.indexOf("Luke"));

// Check if element is in the array
console.log(friends.includes('Lukas')); // true
console.log(friends.includes('Luke')); // false

// Use include method to write conditionals
if (friends.includes("Lukas")){
    console.log("You have a Friend called Lukas");
}

*/

// Coding Challenge 2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
const bill = 125;
function calcTip(bill){
    if (bill > 50 && bill < 300){
        const tip = (bill / 100) * 15;
        return tip;
    } else {
        const tip = (bill / 100) * 20;
        return tip;
    }
}
console.log(calcTip(bill));
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125,555,44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);
// Test data: 125, 555 and 44




