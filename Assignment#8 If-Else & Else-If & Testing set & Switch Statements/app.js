// ---------CHAPTER 12 & 14 "IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS"-----------

// ----------------Question no 1-----------------

// let num = +prompt("Tell me any number");

// let divisibleNum = num / 3;

// if (num % 3 === 0) {
//     console.log(`${num} is divisible by 3 and the answer is ${divisibleNum}`);
// } else {
//     console.log(`Number is not divisible by 3`);
// }



// ----------------Question no 2-----------------

// let anyNum = +prompt("Write a number");

// if (anyNum % 2 == 0) {
    
//     console.log("Even Number");

// } else {

//     console.log("Odd Number");

// }



// ----------------Question no 3-----------------

// let ageCondition = prompt("Tell me your Age...?");

// if (ageCondition > 18) {
//     console.log(`${ageCondition} is Old enough`);
// } else {
//     console.log(`${ageCondition} is Too young`);
// }



// ----------------Question no 4-----------------

// let userName = prompt("Write your Name ..??");

// if (userName === "muhammad hammad"){
//     console.log(`Wow! your name and my name is same`);
// } else {
//     console.log(``);
// }



// ----------------Question no 5-----------------

// let num = +prompt("Tell me any number");

// let divisibleNum = num / 3;

// if (num % 3 === 0) {
//     console.log(`${num} is divisible by 3 and the answer is ${divisibleNum}`);
// } else {
//     console.log(`Number is not divisible by 3`);
// }



// ----------------Question no 6-----------------

// let text = prompt("write somthing text here number or string...");

// if (text >= "A" && text <= "Z"){

//     console.log(`${text} is an Uppercase Character`);

// } else if (text >= "a" && text <= "z"){

//     console.log(`${text} is an Lowercase Character`);

// } else if (text == +text){

//     console.log(`${text} is a Number`);
    
// } else {
    
//     console.log(`${text} is a not a Number and Character`);

// }



// ----------------Question no 7-----------------

// let firstNum = +prompt("Tell me First Number");

// let operation = prompt("Tell me operation do you want ..?");

// let secondNum = +prompt("Tell me Second Number");

// if (operation == "+") {

//     console.log(`${firstNum} ${operation} ${secondNum} = ${firstNum + secondNum}`);
    
// } else if (operation == "-") {
    
//     console.log(`${firstNum} ${operation} ${secondNum} = ${firstNum - secondNum}`);
    
// } else if (operation == "*") {
    
//     console.log(`${firstNum} ${operation} ${secondNum} = ${firstNum * secondNum}`);
    
// } else if (operation == "/") {
    
//     console.log(`${firstNum} ${operation} ${secondNum} = ${firstNum / secondNum}`);
    
// } else if (operation == "%") {
    
//     console.log(`${firstNum} ${operation} ${secondNum} = ${firstNum % secondNum}`);
    
// }



// ----------------Question no 8-----------------

// let time = +prompt("what time is it in 24 Hours format?");

// if (time >= 00 && time < 12){
//     console.log(`Good Morning`);
// } else if (time >= 12 && time < 17){
//     console.log(`Good Afternoon`);
// } else if (time >= 17 && time < 21){
//     console.log(`Good Evening`);
// } else {
//     console.log(`Good night`);
// }



// ----------------Question no 9-----------------

// let leapYear = +prompt("Enter the year");

// if (leapYear % 100 !== 0 && leapYear % 4 == 0 || leapYear % 400 == 400) {
//     console.log(`${leapYear} is a Leap year`);
// } else {
//     console.log(`${leapYear} is not a Leap year`);
// }



// ----------------Question no 10-----------------

// let myPassword = "Karachi90";

// let password = prompt("Please tell me your Password?");

// if (password === myPassword) {
//     console.log("Correct! The password you entered matches the original password");
// } else if (password === "" || password === undefined) {
//     console.log("Please enter your password");
// } else {
//     console.log("Sorry! your password is incorrect");
// }



// ----------------Question no 11-----------------

// let firstName = `Ali`;
// let firstName = prompt(`what is your name?`);


// if(firstName === `Fahad`) {
//     console.log(`Hello Fahad`);
// } else {
//     console.log(`You are not Fahad`);
// }



// ----------------Question no 12-----------------

// let greeting;

// let hour = +prompt("what time is it in 24hours?")

// if (hour < 18) {
//     greeting = "Good Day";
//     console.log(greeting);
// } else {
//     greeting = "Good Evening";
//     console.log(greeting);
// }



// ----------------Question no 13-----------------

// let firstNum = +prompt("Write First number...");

// let secondNum = +prompt("Write Second number...");

// if (firstNum > 0 && secondNum > 0 && firstNum > secondNum) {

//     console.log(`Large number is ${firstNum}`);

// } else if (firstNum > 0 && secondNum > 0 && firstNum < secondNum) {

//     console.log(`Large number is ${secondNum}`);

// } else if (firstNum > 0 && secondNum > 0 && firstNum == secondNum) {

//     console.log(`Both numbers are equal!`);

// } else {

//     console.log(`Please add a number`);

// }



// ----------------Question no 14-----------------

// let num = +prompt("Write some number...");

// if (num > 0) {

//     console.log(`This number is positive`);

// } else if (num == 0) {

//     console.log(`This number is zero`);

// }else {

//     console.log(`This number is Negative`)

// }



// ----------------Question no 15-----------------

// let currentHours = +prompt(`Please enter Current Hour in 24 Hours format`);

// // let currentHours = new Date().getHours();

// if(currentHours >= 6 && currentHours <= 9){
//     console.log(`Breakfast is served`);

// } else if(currentHours >= 11 && currentHours <= 15){
//     console.log(`Time for Lunch`);
    
// } else if(currentHours >= 17 && currentHours <= 20){
//     console.log(`It's Dinner Time`);

// } else {
//     console.log(`Sorry, you'll have to
//     wait, or go get a snack.`);
// }



// ----------------Question no 16-----------------

// let variableType = ["string", 54, true, false, undefined, null];

// if (variableType[0]) {
    // console.log(typeof variableType[0]);
// }




// ----------------Question no 17-----------------

// let alphabet = prompt("write any singal Lowercase Alphabet...!");

// if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u") {

//     console.log(`True`);

// } else {

//     console.log(`False`);

// }



// ----------------Question no 18-----------------

// let number = 10;

// if (10 != 8) {
//     console.log(`true`);
// } else {
//     console.log(`false`);
// }



// ----------------Question no 19-----------------

// let userMonth = +prompt(`Tell me the number of the month`);

// if (userMonth === 1) {
//     console.log(`January`);
// } else if (userMonth === 2) {
//     console.log(`February`);
// } else if (userMonth === 3) {
//     console.log(`March`);
// } else if (userMonth === 4) {
//     console.log(`April`);
// } else if (userMonth === 5) {
//     console.log(`May`);
// } else if (userMonth === 6) {
//     console.log(`June`);
// } else if (userMonth === 7) {
//     console.log(`July`);
// } else if (userMonth === 8) {
//     console.log(`August`);
// } else if (userMonth === 9) {
//     console.log(`September`);
// } else if (userMonth === 10) {
//     console.log(`October`);
// } else if (userMonth === 11) {
//     console.log(`November`);
// } else if (userMonth === 12) {
//     console.log(`December`);
// } else {
//     console.log(`It's not a Month Number`);
// }