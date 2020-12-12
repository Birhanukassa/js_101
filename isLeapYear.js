//Leap Years (Part 1)

function isLeapYear(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            } 
        } else {
            return true;
        }
    } return false;
}

// or 

function isLeapYear(year) {
    if(year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}




console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015));    // false
console.log(isLeapYear(2100));     // false
console.log(isLeapYear(2400));     // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));    // true
console.log(isLeapYear(1900));     // false
console.log(isLeapYear(1752));     // true
console.log(isLeapYear(1700));     // false
console.log(isLeapYear(1));     // false
console.log(isLeapYear(100));     // false
console.log(isLeapYear(400));     // true