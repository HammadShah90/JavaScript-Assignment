// ----------Question no 1-----------

// let anyAlert = "Hello World";

// for (let i = 0; i < 5; i++) {
//     document.write(`${anyAlert} <br>`);
// }



// ----------Question no 2-----------

// let i = 0;

// for (i; i <= 10; i++) {
//     document.write(`${i} <br>`);
// }



// ----------Question no 3-----------

// let usertable = +prompt("Enter a number to print its multiplication table");

// let usertableLenght = +prompt("Enter length of multiplication table");

// document.write(`Multiplication table of ${usertable} <br> Length ${usertableLenght} <br>`);

// for (let i = 1; i <= usertableLenght; i++) {

//     let result = usertable * i;

//     document.write(`${usertable} X ${i} = ${result} <br>`);
// }



// ----------Question no 4-----------

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < A.length; i++) {
//     document.write(`${A[i]} <br>`);
// }



// ----------Question no 5-----------

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// let i = 0;

// for (i; i < fruits.length; i++) {
//     document.write(`${fruits[i]} <br>`);
// }

// for (let j = 0; j < fruits.length; j++) {
//     document.write(`Element at index ${j} is ${fruits[j]} <br>`);
// }



// ----------Question no 6-----------

// let N = +prompt("Enter the number of items:");

// let itemLists = [];

// let i = 0

// document.write(`Number of items: ${N} <br> Items: <br>`);

// for (i; i < N; i++) {
//     const item = prompt(`Enter item #${i +1}:`);
//     itemLists.push(item);
//     document.write(`${itemLists[i]} <br>`);

// }



// ----------Question no 7-----------

// let a = 0;

// document.write(`a. Counting: <br> <br>`);

// for (a; a <= 15; a++) {
//     document.write(`${a}, `);
// }

// let e = 10;

// document.write(`<br> <br> b. Reverse Counting: <br> <br>`);

// for (e; e >= 1; e--) {
//     document.write(`${e}, `);
// }

// let i = 0;

// document.write(`<br> <br> c. Even: <br> <br>`);

// for (i; i <= 20 ; i += 2) {
//     document.write(`${i}, `);
// }

// let o = 1;

// document.write(`<br> <br> d. Odd: <br> <br>`);

// for (o; o <= 20 ; o += 2) {
//     document.write(`${o}, `);
// }

// let u = 2;

// document.write(`<br> <br> e. Series: <br> <br>`);

// for (u; u <= 20 ; u += 2) {
//     document.write(`${u}k, `);
// }



// ----------Question no 8-----------

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userOrder = prompt(`Welcome to ABC Bakery. What do you want to order Sir / Ma'am`);

// var flag;

// var boxNumber;


// for (let a = 0; a < bakeryItems.length; a++) {
//     if (userOrder === bakeryItems[a]) {
//         flag = true
//         boxNumber = a
//     }
// }

// if (flag) {
//     document.write(`${userOrder} is available at index ${boxNumber} in our bakery`);
// } else {
//     document.write(`We are sorry. ${userOrder} is not available in our bakery`);
// }



// ----------Question no 9-----------

// let A = [24, 53, 78, 91, 12];

// let largestNum = A[0];

// document.write(`Array items: ${A} <br>`);

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largestNum) {
//         largestNum = A[i];
//     }
// }

// document.write(`the largest number is ${largestNum}`);



// ----------Question no 10-----------

// let A = [24, 53, 78, 91, 12];

// let smallestNum = A[0];

// document.write(`Array items: ${A} <br>`);

// for (let i = 0; i < A.length; i++) {
//     if (A[i] < smallestNum) {
//         smallestNum = A[i];
//     }
// }

// document.write(`the smallest number is ${smallestNum}`);



// ----------Question no 11-----------

// let A = [24, 53, 78, 91, 12];

// let largestNum = A[0];

// let smallestNum = A[0];

// document.write(`Array items: ${A} <br>`);

// for (let i = 0; i < A.length; i++) {
//     if (A[i] < smallestNum) {
//         smallestNum = A[i];
//     }
// }

// document.write(`the smallest number is ${smallestNum} <br>`);

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largestNum) {
//         largestNum = A[i];
//     }
// }

// document.write(`the largest number is ${largestNum}`);



// ----------Question no 12-----------

// let A = 5;

// for (let i = 1; i <= 20; i++) {

//     let result = A * i;

//     document.write(`${result}, `);
// }



// ----------Question no 13-----------

