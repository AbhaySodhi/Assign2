// Part A - Leap Year Function
function isLeapYear(year) {
    if (typeof year !== "number" || isNaN(year)) {
        console.log("Please provide a valid number for the year.");
        return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
        return true;
    } else {
        console.log(`${year} is not a leap year.`);
        return false;
    }
}

isLeapYear(2024);
isLeapYear(2023);
isLeapYear("2024");

// Part B - Pyramid Building Function
function buildPyramid(height) {
    if (typeof height !== "number" || height <= 0 || isNaN(height)) {
        console.log("Please provide a valid positive number for the height.");
        return;
    }

    let pyramid = [];
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let blocks = '@'.repeat(2 * i - 1);
        pyramid.push(spaces + blocks + spaces);
    }
    console.log(pyramid);
}

buildPyramid(5);
buildPyramid(1);
buildPyramid(0);
buildPyramid("five");

// Part C - Title Case Function
function titleCase(str) {
    if (typeof str !== "string") {
        console.log("Please provide a valid string.");
        return;
    }

    let result = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    
    console.log(`Original String: ${str}`);
    console.log(`Title Cased String: ${result}`);
}

titleCase("hello world from the web");
titleCase("a quick BROWN fox");
titleCase(12345);
