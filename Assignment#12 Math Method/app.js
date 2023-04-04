// Chapter no 26 to 30 : Math Methods

// Question no 1

// var userInputPositive = +prompt("Please write any Positive point value...");
var userInputPositive = "3.45214"

if (userInputPositive <= 0) {
    alert("Please write positive point value");
}

document.write(`<strong> number: ${userInputPositive} <br> round off value ${Math.round(userInputPositive)} <br> floor value: ${Math.floor(userInputPositive)} <br> ceil value: ${Math.ceil(userInputPositive)} </strong>`)



// Question no 2

// var userInputNagetive = +prompt("Please write any Negative point value...");
var userInputNagetive = "-2.673";

if (userInputNagetive >= 0) {
    alert("Please write Negative point value");
}

document.write(`<br> <br> <strong> number: ${userInputNagetive} <br> round off value ${Math.round(userInputNagetive)} <br> floor value: ${Math.floor(userInputNagetive)} <br> ceil value: ${Math.ceil(userInputNagetive)} </strong>`)



// Question no 3

// var userInputAbsolute = +prompt("Please write any Absolute value...");
var userInputAbsolute = "-4";

document.write(`<br> <br> <strong> The absolute value of ${userInputAbsolute} is ${Math.abs(userInputAbsolute)} </strong>`)



// Question no 4

var inputDiceNum1 = Math.round(Math.random() * 5) + 1;
var inputDiceNum2 = Math.round(Math.random() * 5) + 1;

document.write(`<br> <br> <strong> Random dice value : ${inputDiceNum1} <br> Random dice value : ${inputDiceNum2} </strong>`)



// Question no 5

var randomCoinValue = Math.round(Math.random() * 1) + 1;

if (randomCoinValue == 2) {
    document.write(`<br> <br> <strong> ${randomCoinValue} <br> Random coin value: Heads`)
} else {
    document.write(`<br> <br> <strong> ${randomCoinValue} <br> Random coin value: Tails`)
}



// Question no 6

var randomNumber = Math.round(Math.random() * 99) + 1;

document.write(`<br> <br> <strong> Random number between 1 to 100: ${randomNumber}`);



// Question no 7

// var yourWeights = prompt("What is our body weight");

// var yourWeightsParsInt = parseFloat(yourWeights)

// console.log(yourWeightsParsInt);



// Question no 8

// var randomSecretNum = Math.round(Math.random() * 9) + 1;

// var userInputNum = prompt("Write any number between 1 to 10")

// if (userInputNum < 1 || userInputNum > 10) {
//     alert("Please write between 1 to 10 numbers")
// } else if (userInputNum == randomSecretNum) {
//     document.write(`<br> <br> <strong> Congratulation your number match to my secret number and my secret number is ${randomSecretNum}`)
// } else {
//     document.write(`<br> <br> <strong> Try again! your number do not match to my secret number and my secret number is ${randomSecretNum}`)
// }

