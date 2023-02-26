// ---------------CHAPTER 9 to 11 "USER INPUT & CONDITIONAL STATEMENT "----------------

// -------------------Question no 1----------------------

// let city = prompt("which city are you from..?");

// if (city == "karachi") {
//     alert("Salam... Welcome to city of lights");
// } else {
//     alert("Salam... Good to see you");
// }



// -------------------Question no 2----------------------

// let gender = prompt("Please tell me your Gender..?");

// if (gender == "male") {
//     alert("Good Morning Sir... Have a Good Day");
// } else if (gender == "female"){
//     alert("Good Morning Ma'am... Nice to meet you");
// } else {
//     alert("Good Morning... How are you?");
// }



// -------------------Question no 3----------------------

// let signalColor = prompt("What is the color of Signal light...?");

// let message1 = "Must Stop";

// let message2 = "Ready to move";

// let message3 = "Move now";

// if (signalColor == "red") {
//     document.write(`<table>
//                         <tr>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; padding: 10px;">Signal color</th>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; padding: 10px;">Messege</th>
//                         </tr>
//                         <tr>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; border-bottom: 1px solid #3333ff; padding: 10px; text-transform: capitalize;">${signalColor}</th>
//                             <td style="color: #ff1a1a; font-size: 36px; border-top: 1px solid #3333ff; border-bottom: 1px solid #3333ff; padding: 10px;">"${message1}"</td>
//                         </tr>
//                     </table>`);
// } else if (signalColor == "yellow") {
//     document.write(`<table>
//                         <tr>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; padding: 10px;">Signal color</th>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; padding: 10px;">Messege</th>
//                         </tr>
//                         <tr>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; border-bottom: 1px solid #3333ff; padding: 10px; text-transform: capitalize;">${signalColor}</th>
//                             <td style="color: #cccc00; font-size: 36px; border-top: 1px solid #3333ff; border-bottom: 1px solid #3333ff; padding: 10px;">"${message2}"</td>
//                         </tr>
//                     </table>`);
// } else {
//     document.write(`<table>
//                         <tr>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; padding: 10px;">Signal color</th>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; padding: 10px;">Messege</th>
//                         </tr>
//                         <tr>
//                             <th style="color: #000000; font-size: 36px; border-top: 1px solid #3333ff; border-bottom: 1px solid #3333ff; padding: 10px; text-transform: capitalize;">${signalColor}</th>
//                             <td style="color: #009933; font-size: 36px; border-top: 1px solid #3333ff; border-bottom: 1px solid #3333ff; padding: 10px;">"${message3}"</td>
//                         </tr>
//                     </table>`);
// }



// -------------------Question no 4----------------------

// let fuel = Number(prompt("Please tell me your Fuel capacity...?"));

// if (fuel <= 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel in your car.. Have a save journey!");
// }



// -------------------Question no 5----------------------

// ---------------Section A------------------

// let a = 4;

// if (++a == 5) {
//     alert("given condition for variable a is true");
// } else {
//     alert("given condition for variable a is false");
// }

// // ---------------Section B------------------

// let b = 82;

// if (b++ == 83) {
//     alert("given condition for variable b is true");
// } else {
//     alert("given condition for variable b is false");
// }

// // ---------------Section C------------------

// let c = 12;

// if (c++ == 13) {
//     alert("condition 1 is true");
// } else if (c === 13) {
//     alert("condition 2 is true");
// } else if (++c < 14) {
//     alert("condition 3 is true");
// } else if (c === 14) {
//     alert("condition 4 is true");
// } else {
//     alert("All conditions are false")
// }

// // ---------------Section D------------------

// let materialCost = 20000;

// let labourCost = 2000;

// let totalCost = materialCost + labourCost;

// if (totalCost = labourCost + materialCost) {
//     alert("The cost equals");
// } else {
//     alert("The cost is not equals")
// }

// // ---------------Section E------------------

// let yourTalk = prompt("true / false");

// if (yourTalk == "true") {
//     alert("True");
// } else if (yourTalk == "false") {
//     alert("False");
// }



// -------------------Question no 6----------------------

// let obtmarksSub1 = Number(prompt("Please tell me Your First Subject marks...?"));

// let obtmarksSub2 = Number(prompt("Please tell me Your Second Subject marks...?"));

// let obtmarksSub3 = Number(prompt("Please tell me Your Third Subject marks...?"));

// let obtMarksTotal = obtmarksSub1 + obtmarksSub2 + obtmarksSub3;

// let totalMarks = 300;

// let percentAge = obtMarksTotal / totalMarks * 100;

// document.write(`Total Marks: ${totalMarks} <br>`);

// document.write(`Mark Obtained: ${obtMarksTotal} <br>`);

// document.write(`Percentage: ${percentAge}% <br>`);

// if (percentAge >= 80) {
    
//     document.write(`Grade: A-one <br>`);

//     document.write(`Remarks: Excellent <br>`);

// } else if (percentAge >= 70) {

//     document.write(`Grade: A <br>`);

//     document.write(`Remarks: Good <br>`);

// } else if (percentAge >= 60) {

//     document.write(`Grade: B <br>`);

//     document.write(`Remarks: You need to improve <br>`);
    
// } else if (percentAge < 60) {

//     document.write(`Grade: Fail <br>`);

//     document.write(`Remarks: Sorry! You are Fail <br>`);
    
// }



// -------------------Question no 7----------------------

// let secretNum = Number(prompt("Write a number between 1 to 10 that comes to your mind.."));

// if (secretNum == 7) {

//     alert("Bingo! Correct answer");

// } else if (secretNum == 8) {

//     alert("Close enough to the correct answer");

// } else if (secretNum == 6) {

//     alert("Close enough to the correct answer");

// } else {

//     alert("Sorry! Wrong answer")

// }



// -------------------Question no 8----------------------

// let anyNum = Number(prompt("Write a number"));

// if (anyNum % 3 == 0) {
    
//     alert("It's Possible");

// } else {

//     alert("It's not Possible");

// }



// -------------------Question no 9----------------------

// let anyNum = Number(prompt("Write a number"));

// if (anyNum % 2 == 0) {
    
//     alert("Even Number");

// } else {

//     alert("Odd Number");

// }



// -------------------Question no 10----------------------

// let temperature = Number(prompt("What is the Temperature..?"));

// if (temperature >= 40) {

//     alert("It is too hot outside.");

// } else if (temperature >= 30) {

//     alert("The Weather today is Normal.");

// } else if (temperature >= 20) {

//     alert("Today’s Weather is cool.");

// } else if (temperature >= 10) {

//     alert("“OMG! Today’s weather is so Cool.");

// }



// -------------------Question no 11----------------------

// let firstNum = Number(prompt("Tell me First Number"));

// let operation = prompt("Tell me operation do you want ..?");

// let secondNum = Number(prompt("Tell me Second Number"));

// if (operation == "+") {

//     alert(firstNum + secondNum);

// } else if (operation == "-") {

//     alert(firstNum - secondNum);

// } else if (operation == "*") {

//     alert(firstNum * secondNum);

// } else if (operation == "/") {

//     alert(firstNum / secondNum);

// } else if (operation == "%") {

//     alert(firstNum % secondNum);

// }