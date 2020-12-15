// ASCII String Value

function asciiValue(str) {  
    let ASCII = 0;
    for(let i = 0; i < str.length; i++) {
        ASCII += str.charCodeAt(i);
    }
    return ASCII;
} 
console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0