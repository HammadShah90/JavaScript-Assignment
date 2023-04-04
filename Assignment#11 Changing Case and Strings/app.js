// Chapter no 21 to 25 : Changing Case and Strings Methods

// Question no 1

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');

// var fullName = `${firstName} ${lastName}`;

// alert(`${fullName} Welcome to JavaScript`);



// Question no 2

// var mobilePhoneModal = prompt("what is your favorite mobile phone modal");

// document.write(`My favorite phone is: ${mobilePhoneModal} <br> Length of string: ${mobilePhoneModal.length}`);



// Question no 3

var citizen = "Pakistani";

document.write(`<br><br> <strong>3: String: ${citizen} <br> Index of 'n': ${citizen.indexOf("n")}</strong>`);



// Question no 4

var greet = "Hello World";

document.write(`<br><br> <strong>4: String: ${greet} <br> Last index of 'l': ${greet.lastIndexOf("l")}</strong>`);



// Question no 5

var citizen = "Pakistani";

document.write(`<br><br> <strong>5: String: ${citizen} <br> Character at index 3: ${citizen.charAt(3)}</strong>`);



// Question no 6

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');

// var fullName = firstName + " " +lastName;

// alert(`${fullName} Welcome to JavaScript`);



// Question no 7

var city = "Hyderabad";

document.write(`<br><br> <strong>7: City: ${city} <br> After replacement: ${city.replace("Hyder", "Islam")}</strong>`);



// Question no 8

var message = "Ali and Sami are best friends. They play cricket and football together";

var messageReplace = message.replaceAll("and", "&");

var messageReplace2 = message.replace(/and/g, "&");

document.write(`<br> <br> <strong>8: ${messageReplace}</strong>`);

document.write(`<br> <br> <strong>8: ${messageReplace2}</strong>`);



// Question no 9

var value = "472";

var valueNumber = +value

document.write(`<br><br> <strong>9: Value: ${value} <br> Type: ${typeof value} <br> Value: ${valueNumber} <br> Type: ${typeof valueNumber} </strong>`);



// Question no 10

// var inputName = prompt("write any name in to lower case");
var inputName = "peanuts";

document.write(`<br><br> <strong>10: User input: ${inputName} <br> Upper case: ${inputName.toUpperCase()}`);



// Question no 11

// var inputName = prompt("write any name in to any case");
var inputName = "javascript";

document.write(`<br><br> <strong>11: User input: ${inputName} <br> Title case: ${inputName.slice(0, 1).toUpperCase()}${inputName.slice(1)}`);



// Question no 12

var itemNumber = 35.36;

var itemNumberToString = itemNumber.toString().replace(".", "");

document.write(`<br><br> <strong>12: Number: ${itemNumber} <br> Result: ${itemNumberToString}`);



// Question no 13

// var userName = prompt("Enter your username");

// if (userName.includes("@") || userName.includes(",") || userName.includes(".") || userName.includes("!")) {
//     document.write(`<br> <br> <strong> Please enter a valid username </strong>`);
// } else {
//     document.write(`<br> <br> <strong> ${userName} is valid to use </strong>`);
// }


// Question no 14

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Write any item name do you want");

// var userInputToLowerCase = userInput.toLowerCase();

// if (bakeryItems.includes(userInputToLowerCase)) {
//     document.write(`<br> <br> <strong> ${userInputToLowerCase} is availaible at index no ${bakeryItems.indexOf(userInputToLowerCase)} in our bakery </strong>`);
// } else {
//     document.write(`<br> <br> <strong> We are sorry! ${userInputToLowerCase} is not availaible in our bakery </strong>`);
// }



// Question no 15

// let password = prompt("Enter your Password!");

// if (!/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(password)) {
//     document.write(`<br> <br> <strong> Entered password: ${password} <br>
//     Invalid password! Please enter a password that:<br> Contains alphabets and numbers<br> Does not start with a number<br> Is at least 6 characters long</strong>`);
// } else {
//     document.write(`<br> <br> <strong> Password accepted! </strong>`);
// }



// Question no 16

var university = "University of Karachi";

var universityInArray = university.split("")

var universityInArrayToString =  universityInArray.map(uni => document.write(`<br> <br> <strong>${uni}</strong>`))



// Question no 17

// var userInput2 = prompt("write any country name");

var userInput2 = "pakistan";

var firstChar = userInput2.slice(0, 1).toUpperCase() + userInput2.slice(1).toLowerCase();

var lastChar = userInput2.charAt(userInput2.length - 1)

document.write(`<br><br> <strong>17: User input: ${firstChar} <br> Last character of input: ${lastChar}</strong>`);



// Question no 18

var poemName = "The quick brown fox jumps over the lazy dog";
var poemNameInWords = poemName.toLowerCase().split(" ");
var count = 0;

for (i = 0; i < poemNameInWords.length; i++) {
    if (poemNameInWords[i] === "the") {
        count++;
    }
}

document.write(`<br> <br> <strong> Text: ${poemName} <br> There are ${count} accurrence(s) of word 'the' </strong>`)