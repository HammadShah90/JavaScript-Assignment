// --------------CHAPTER 6 to 9 "Math expression"--------------

// ----------------Question no 1---------------------

// ---------------Arithmetic Display---------------

// var a = 10;

// document.write(`Result: <br>`);

// document.write(`the value of a is: ${a} <br>`);

// document.write(`<br>`);

// var a = ++a;

// document.write(`the value of ++a is: ${a} <br>`);

// document.write(`Now the value of a is: ${a} <br>`);

// document.write(`<br>`);

// document.write(`the value of a++ is: ${a} <br>`);

// var newA = a++;

// document.write(`Now the value of a is: ${a} <br>`);

// document.write(`<br>`);

// var a = --a;

// document.write(`the value of --a is: ${a} <br>`);

// document.write(`Now the value of a is: ${a} <br>`);

// document.write(`<br>`);

// document.write(`the value of a-- is: ${a} <br>`);

// var NextA = a--;

// document.write(`Now the value of a is: ${a} <br>`);



// ----------------Question no 2---------------------

// ---------------Output in Variables---------------

// let a = 2, b= 1;

// document.write(`a is ${a} <br>`);

// document.write(`b is ${b} <br>`);

// let result = --a;

// document.write(`result is ${result} <br>`);

// result = --a - --b;

// document.write(`result is ${result} <br>`);

// result = --a - --b + ++b;

// document.write(`result is ${result} <br>`);

// result = --a - --b + ++b + b--;

// document.write(`result is ${result} <br>`);



// ----------------Question no 3---------------------

// ---------------Greeting the User---------------

// let name = prompt("What is your Name..??");

// alert(`Salam! ${name}. Welcome to JavaScript...`);



// ----------------Question no 5---------------------

// ---------------Ask User any Number give table---------------

// let tableNum = Number(prompt("What is the Number which you want to see Table...???"));

// let defaultNum = 5;

// if (tableNum <= 0) {
//     document.write(`Table of  ${defaultNum} <br>`);
//     document.write(`${defaultNum} X 1 = ${defaultNum * 1} <br>`);
//     document.write(`${defaultNum} X 2 = ${defaultNum * 2} <br>`);
//     document.write(`${defaultNum} X 3 = ${defaultNum * 3} <br>`);
//     document.write(`${defaultNum} X 4 = ${defaultNum * 4} <br>`);
//     document.write(`${defaultNum} X 5 = ${defaultNum * 5} <br>`);
//     document.write(`${defaultNum} X 6 = ${defaultNum * 6} <br>`);
//     document.write(`${defaultNum} X 7 = ${defaultNum * 7} <br>`);
//     document.write(`${defaultNum} X 8 = ${defaultNum * 8} <br>`);
//     document.write(`${defaultNum} X 9 = ${defaultNum * 9} <br>`);
//     document.write(`${defaultNum} X 10 = ${defaultNum * 10} <br>`);
// } else {
//     document.write(`Table of  ${tableNum} <br>`);
//     document.write(`${tableNum} X 1 = ${tableNum * 1} <br>`);
//     document.write(`${tableNum} X 2 = ${tableNum * 2} <br>`);
//     document.write(`${tableNum} X 3 = ${tableNum * 3} <br>`);
//     document.write(`${tableNum} X 4 = ${tableNum * 4} <br>`);
//     document.write(`${tableNum} X 5 = ${tableNum * 5} <br>`);
//     document.write(`${tableNum} X 6 = ${tableNum * 6} <br>`);
//     document.write(`${tableNum} X 7 = ${tableNum * 7} <br>`);
//     document.write(`${tableNum} X 8 = ${tableNum * 8} <br>`);
//     document.write(`${tableNum} X 9 = ${tableNum * 9} <br>`);
//     document.write(`${tableNum} X 10 = ${tableNum * 10} <br>`);
// }



// ----------------Question no 6---------------------

// ---------------Ask User any Number give table---------------

let subjectName1 = (prompt("Please tell me First Subject Name...?"));

let subjectName2 = (prompt("Please tell me Second Subject Name...?"));

let subjectName3 = (prompt("Please tell me Third Subject Name...?"));

let totalMarks = 100;

let obtmarksSub1 = Number(prompt("Please tell me Your First Subject marks...?"));

let obtmarksSub2 = Number(prompt("Please tell me Your Second Subject marks...?"));

let obtmarksSub3 = Number(prompt("Please tell me Your Third Subject marks...?"));

let obtMarksTotal = obtmarksSub1 + obtmarksSub2 + obtmarksSub3;

let totalMarksT = totalMarks * 3;

document.write(`<table> <tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr><th>${subjectName1}</th> <td>${totalMarks}</td> <td>${obtmarksSub1}</td> <td>${obtmarksSub1 / totalMarks * 100}%</td> </tr> <tr><th>${subjectName2}</th> <td>${totalMarks}</td> <td>${obtmarksSub2}</td> <td>${obtmarksSub2 / totalMarks * 100}%</td> </tr> <tr><th>${subjectName3}</th> <td>${totalMarks}</td> <td>${obtmarksSub3}</td> <td>${obtmarksSub3 / totalMarks * 100}%</td> </tr> <tr><th> </th> <th>${totalMarksT}</th> <th>${obtMarksTotal}</th> <th>${obtMarksTotal / totalMarksT * 100}%</th> </tr> </table> <br>`);



// -------------------------------The End--------------------------