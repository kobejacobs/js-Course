// Values and Variables
// // 1. Declare variables called 'country', 'continent' and 'population' and
// // assign their values according to your own country (population in millions)
// let country = "Sweden";
// let continent = "Europe";
// let population = "10.2 million";
// // 2. Log their values to the console
// console.log(country,continent,population);

// Date Types
// // 1. Declare a variable called 'isIsland' and set its value according to your
// // country. The variable should hold a Boolean value. Also declare a variable
// // 'language', but don't assign it any value yet
// let country = "Sweden";
// let continent = "Europe";
// let population = "10.2 million";
// let isIsland = true;
// let language;
// // 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// // to the console
// console.log(isIsland,country,continent,population);

// Let, Const, Var
// // 1. Set the value of 'language' to the language spoken where you live (some
// // countries have multiple languages, but just choose one)
// let country = "Sweden";
// let continent = "Europe";
// let population = "10.2 million";
// let isIsland = true;
// // let language = "Swedish";
// // 2. Think about which variables should be const variables (which values will never
// // change, and which might change?). Then, change these variables to const.
// const language = "Swedish";
// // 3. Try to change one of the changed variables now, and observe what happens
// console.log(isIsland,country,continent,population,language);


// Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
let country = "Sweden";
let continent = "Europe";
let population = 10200000;
let isIsland = true;
const language = "Swedish";

let halfPopulation = population / 2;
console.log(halfPopulation);
// 2. Increase the population of your country by 1 and log the result to the console
population++;
console.log(population);
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
console.log(population > 6000000);
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
console.log(population > 33000000);
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
