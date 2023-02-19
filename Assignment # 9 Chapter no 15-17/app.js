// |	IF	STATEMENTS NESTED |	ARRAYS|

// ------------Question no 1------------

// let assign = [];



// ------------Question no 3------------

// let strings = ["Muhammad Hammad", "Ali", "Muhammad Hassan", "Murfad"];



// ------------Question no 4------------

// let numbers = [1, 2, 3, 4, 5];



// ------------Question no 5------------

// let boolean = [true, false];



// ------------Question no 6------------

// let mixedArray = ["string", 12, varaible, true];



// ------------Question no 7------------

// let mobNetworks = ["Mobilink", "Ufone", "Zong", "Telenor", "PTCL"];



// ------------Question no 8------------

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Qualifications</h1> <br>");

// document.write(`1) ${qualifications[0]} <br>`);
// document.write(`2) ${qualifications[1]} <br>`);
// document.write(`3) ${qualifications[2]} <br>`);
// document.write(`4) ${qualifications[3]} <br>`);
// document.write(`5) ${qualifications[4]} <br>`);
// document.write(`6) ${qualifications[5]} <br>`);
// document.write(`7) ${qualifications[6]} <br>`);
// document.write(`8) ${qualifications[7]} <br>`);



// ------------Question no 9------------

// var topMoviesOf2015 = [];

// topMoviesOf2015[0] = "Avengers: Age of Ultron";
// topMoviesOf2015[1] = "Spectre";
// topMoviesOf2015[2] = "Jurassic World";
// topMoviesOf2015[3] = "Inside Out";

// document.write(`<h1>Top movies of 2015</h1> <br>`);
// document.write(`1) ${topMoviesOf2015[0]} <br>`);
// document.write(`2) ${topMoviesOf2015[1]} <br>`);
// document.write(`3) ${topMoviesOf2015[2]} <br>`);
// document.write(`4) ${topMoviesOf2015[3]} <br>`);
// document.write(`<h1>Length of the array: ${topMoviesOf2015.length}</h1> <br>`);



// ------------Question no 10------------

// let favoriteCars = ["Audi", "Volvo", "Ford", "Lamborghini"];


// document.write(`<h1>Favorite Cars</h1> <br>`);

// document.write(`${favoriteCars[0]}, ${favoriteCars[1]}, ${favoriteCars[2]}, ${favoriteCars[3]} <br> <br>`);

// document.write(`First index of the Array: ${favoriteCars.indexOf(favoriteCars[0])} <br>`);

// document.write(`Car at first index of the array: ${favoriteCars[0]} <br>`);

// document.write(`Last index of the array: ${favoriteCars.lastIndexOf(favoriteCars[3])} <br>`);

// document.write(`Car at last index of the array: ${favoriteCars[3]} <br>`);



// ------------Question no 11------------

// let students = ["Micheal", "John", "Tony"];

// let studentsScore = [320, 230, 480];

// document.write(`Score of ${students[0]} is ${studentsScore[0]}. Percentage: ${studentsScore[0] / 500 * 100}% <br>`);

// document.write(`Score of ${students[1]} is ${studentsScore[1]}. 
// Percentage: ${studentsScore[1] / 500 * 100}% <br>`);

// document.write(`Score of ${students[2]} is ${studentsScore[2]}. Percentage: ${studentsScore[2] / 500 * 100}% <br>`);



// ------------Question no 12------------

// const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// document.write(`${colors} <br>`);

// ------------Section "A"------------

// const askBiginColor = prompt("What color do you wants to add to the beginning Array");

// colors.unshift(askBiginColor);

// document.write(`${colors} <br>`);

// ------------Section "B"------------

// const askEndColor = prompt("What color do you wants to add to the Ending Array");

// colors.push(askEndColor);

// document.write(`${colors} <br>`);

// ------------Section "C"------------

// colors.unshift("Purple", "Orange");

// document.write(`${colors} <br>`);

// ------------Section "D"------------

// colors.shift();

// document.write(`${colors} <br>`);

// ------------Section "E"------------

// colors.pop();

// document.write(`${colors} <br>`);

// ------------Section "F"------------

// const askMidColorIndex = +prompt("What Index number do you wants to add to the Middle Array");

// const askMidColorName = prompt("What color name do you wants to add to the Middle Array");

// colors.splice(askMidColorIndex, 0, askMidColorName);

// document.write(`${colors} <br>`);

// ------------Section "g"------------

// const askMidDelColorIndex = +prompt("What Index number do you wants start to delete at this Array");

// const addMidDelColorNo = +prompt("What color names do you wants to delete to the Array");

// colors.splice(askMidDelColorIndex, addMidDelColorNo);

// document.write(`${colors} <br>`);



// ------------Question no 13------------

// const studentsScores = [320, 230, 480, 120];

// document.write(`Scores of Students : ${studentsScores} <br>`);

// const studentsScoresSort = studentsScores.sort();

// document.write(`Ordered Scores of Students : ${studentsScoresSort} <br>`);



// ------------Question no 14------------

// const fruits = ["strawberry", "apple", "orange", "banana"];

// document.write(`<h1>Fruits List:</h1> ${fruits}`);

// const orderedList = fruits.sort();

// document.write(`<h1>Ordered fruits List:</h1> ${orderedList}`);



// ------------Question no 15------------

// const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write(`<h1>Cities List:</h1> ${cities}`);

// const selectedCities = cities.slice(2 , 4);

// document.write(`<h1>Selected cities List:</h1> ${selectedCities}`);



// ------------Question no 16------------

// const array = ["This", "is", "my", "cat"];

// document.write(`Array: <br> ${array} <br>`);

// // const string = array.join(" ");

// document.write(`String: <br> ${array.join(" ")}`);



// ------------Question no 17------------

// const devices = ["keyboard", "mouse", "printer", "moniter"];


// document.write(`<h3>Devices:</h3> ${devices}`);

// document.write(`<h4>Out:</h4> ${devices[0]}`);

// document.write(`<h4>Out:</h4> ${devices[1]}`);

// document.write(`<h4>Out:</h4> ${devices[2]}`);

// document.write(`<h4>Out:</h4> ${devices[3]}`);



// ------------Question no 18------------

// const devices = ["keyboard", "mouse", "printer", "moniter"];


// document.write(`<h3>Devices:</h3> ${devices}`);

// document.write(`<h4>Out:</h4> ${devices[3]}`);

// document.write(`<h4>Out:</h4> ${devices[2]}`);

// document.write(`<h4>Out:</h4> ${devices[1]}`);

// document.write(`<h4>Out:</h4> ${devices[0]}`);



// ------------Question no 19------------

const phoneMenufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select name="Devices">
                    <option value="Apple" selected>${phoneMenufactures[0]}</option>
                    <option value="Samsung">${phoneMenufactures[1]}</option>
                    <option value="Motorola">${phoneMenufactures[2]}</option>
                    <option value="Nokia">${phoneMenufactures[3]}</option>
                    <option value="Sony">${phoneMenufactures[4]}</option>
                    <option value="Haier">${phoneMenufactures[5]}</option>
                </select>`
)