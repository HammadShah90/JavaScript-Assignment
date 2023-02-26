// --------------Function---------------

// ----------Question no 1------------



// ----------Question no 2------------

// function myName (first, last) {
//     let firstName = prompt("what is your first name???");
    
//     let lastName = prompt("what is your last name???");

//     return `Salam! ${firstName} ${lastName}`;

// }

// console.log(myName());



// ----------Question no 3------------

// function myNumbers (first, second) {
//     let firstNo = +prompt("what is your first number???");
    
//     let secondNo = +prompt("what is your second number???");

//     return firstNo + secondNo;

// }

// console.log(myNumbers());



// ----------Question no 4------------

let calculator = (num1, operator, num2) => {
    let firstNum = +prompt("tell me first number");
    
    let operation = prompt("tell me Operation sign");

    let secondNum = +prompt("tell me second number");

    if (operation === "+") {
        return firstNum + secondNum;
    } else if (operation === "-") {
        return firstNum - secondNum;
    } else if (operation === "*") {
        return firstNum * secondNum;
    } else if (operation === "/") {
        return firstNum / secondNum;
    }

}

console.log(calculator());