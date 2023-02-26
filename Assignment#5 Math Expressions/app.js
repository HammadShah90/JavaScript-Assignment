// --------------CHAPTER 5 "MATH EXPRESSIONS "--------------


// ------------Question no 1 & 2-----------


// --------Addition--------

// var firstNum = prompt("What is First number in your mind...???");

// var secondNum = prompt("What is Second number in your mind...???");

// var totalNum = Number(firstNum) + Number(secondNum);

// document.write(`Sum of ${firstNum} and ${secondNum} is ${totalNum}`);


// --------Subtraction--------


// var firstNum = prompt("What is First number in your mind...???");

// var secondNum = prompt("What is Second number in your mind...???");

// var totalNum = Number(firstNum) - Number(secondNum);

// document.write(`Subtract from ${firstNum} to ${secondNum} is ${totalNum}`);


// --------Multiplication--------


// var firstNum = prompt("What is First number in your mind...???");

// var secondNum = prompt("What is Second number in your mind...???");

// var totalNum = Number(firstNum) * Number(secondNum);

// document.write(`Multiple of ${firstNum} and ${secondNum} is ${totalNum}`);


// --------Division--------


// var firstNum = prompt("What is First number in your mind...???");

// var secondNum = prompt("What is Second number in your mind...???");

// var totalNum = Number(firstNum) / Number(secondNum);

// document.write(`Divide from ${firstNum} to ${secondNum} is ${totalNum}`);


// --------Modulus--------


// var firstNum = prompt("What is First number in your mind...???");

// var secondNum = prompt("What is Second number in your mind...???");

// var totalNum = Number(firstNum) % Number(secondNum);

// document.write(`Modulus of ${firstNum} and ${secondNum} is ${totalNum}`);






// ----------------Question no 3----------------


// ----------Declare a variable.-----------


// var mindNum;

// document.write(`Value after variable declaration is undifined <br>`);


// -----------Initialize the variable with some number---------


// var mindNum = 5;

// document.write(`Initial value: ${mindNum} <br>`);


// -------------Increment the variable.-------------


// var incrementNum= ++mindNum;

// document.write(`Value
// after increment is: ${incrementNum} <br>`);


// -------------Add 7 to the variable.----------


// var addIncrementNum = incrementNum + 7;

// document.write(`Value
// after addition is: ${addIncrementNum} <br>`);


// -------------Decrement the variable.-----------


// var decrementNum = --addIncrementNum;

// document.write(`Value
// after decrement is: ${decrementNum} <br>`);


// -----------remainder after dividing------------


// var divideNum = decrementNum - 12 / 1 ;

// document.write(`The remainder is: ${divideNum}`);





// --------------Question no 4---------------


// -------------Movie Ticket Calculation-------------


// var perTicketCost = 600;

// var noOfTickets = Number(prompt("Total persons to buy Tickets"));

// var noOfTickets = 5;

// document.write(`Total cost to buy ${noOfTickets} tickets to a movie is ${perTicketCost * noOfTickets}PKR`)



// --------------Question no 5---------------


// --------------Table-------------


// var table = Number(prompt("What table do you want to see...???"));

// document.write(`Table of  ${table} <br>`);

// document.write(`${table} X 1 = ${table * 1} <br>`);

// document.write(`${table} X 2 = ${table * 2} <br>`);

// document.write(`${table} X 3 = ${table * 3} <br>`);

// document.write(`${table} X 4 = ${table * 4} <br>`);

// document.write(`${table} X 5 = ${table * 5} <br>`);

// document.write(`${table} X 6 = ${table * 6} <br>`);

// document.write(`${table} X 7 = ${table * 7} <br>`);

// document.write(`${table} X 8 = ${table * 8} <br>`);

// document.write(`${table} X 9 = ${table * 9} <br>`);

// document.write(`${table} X 10 = ${table * 10} <br>`);



// --------------Question no 6---------------


// ---------------Temperature Converter--------------


// var fahrenheit = Number(prompt("What is Fahrenheit.??"));

// var celsius = Number(prompt("What is Celsius.??"));

// var cTempToF = (celsius * 9 / 5) + 32;

// var fTempToC = (fahrenheit - 32) * 5 / 9;

// document.write(`${cTempToF}C is ${fTempToC}F <br>`);

// document.write(`${fTempToC}F is ${cTempToF}C <br>`);



// --------------Question no 7---------------


// --------------Shopping Cart-------------


// var priceItem1 = 650;

// var priceItem2 = 100;

// var orderQuantityItem1 = Number(prompt("Order Quantity Item 1"));

// var orderQuantityItem2 = Number(prompt("Order Quantity Item 2"));

// var shipCharges = 100;

// document.write(`Price of item 1 is ${priceItem1} <br>`);

// document.write(`Quantity of item 1 is ${orderQuantityItem1} <br>`);

// document.write(`Price of item 2 is ${priceItem2} <br>`);

// document.write(`Quantity of item 2 is ${orderQuantityItem2} <br>`);

// document.write(`Shipping Charges ${shipCharges} <br>`);

// document.write(`<br>`);

// document.write(`Total cost of your order is ${(priceItem1 * orderQuantityItem1) + (priceItem2 * orderQuantityItem2) + shipCharges} <br>`);



// --------------Question no 8---------------


// -----------------Marks Sheet--------------


// var totalMarks = Number(prompt("Tell me Total Marks...???"));

// var markObtained = Number(prompt("Tell me Your Marks...???"));

// document.write(`Total Marks: ${totalMarks} <br>`);

// document.write(`Marks Obtained: ${markObtained} <br>`);

// document.write(`Percentage: ${markObtained / totalMarks * 100}%`);



// --------------Question no 9---------------


// ---------------Curruncy Converter-------------


// var dollarCurrency = 104.80;

// var saudiCurrency = 28;

// document.write(`Total Currency in PKR: ${(dollarCurrency * 10) + (saudiCurrency * 25)}`);



// --------------Question no 10---------------


// -------------Arithmetic Equation-------------


// var x = 5, y = 10, z = 2;

// alert(x * y / z);



// --------------Question no 11---------------


// ----------------Age Calculater--------------


// var currentYear = Number(prompt("What is Current Year...???"));

// var birthYear = Number(prompt("What is your Birth Year...???"))

// document.write(`Current Year: ${currentYear} <br>`);

// document.write(`Birth Year: ${birthYear} <br>`);

// document.write(`Your Age is: ${currentYear - birthYear}`);



// --------------Question no 12---------------


// --------------The Geometrizer-------------


// var radius = Number(prompt("What is radius"));

// var circumference = Math.PI * 2 * radius;

// var area = Math.PI * radius * radius;

// document.write(`Radius of a circle: ${radius} <br>`);

// document.write(`The circumference is: ${circumference} <br>`);

// document.write(`The area is: ${area} <br>`);



// --------------Question no 13---------------


// --------------Lifetime Supply Calculator-----------


// var favoriteSnack = "Candi";

// var currentAge = Number(prompt("What is your Current Age...???"));

// var maximumAge = Number(prompt("what is Maximum Age...???"));

// var estAmount = 3;

// var totalNeeded = (estAmount * 365) * (maximumAge - currentAge);

// document.write(`Favorite Snack: ${favoriteSnack} <br>`);

// document.write(`Current age: ${currentAge} <br>`);

// document.write(`Estimated Maximum Age: ${maximumAge} <br>`);

// document.write(`Amount of snacks per day: ${estAmount} <br>`);

// document.write(`You will need ${totalNeeded} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}`)






// -------------------------------------------The End------------------------------------------------