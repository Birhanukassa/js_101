
let rlSync = require('readline-sync');
let minNum = rlSync.question("Please type the Minimum Number from 1 to 99: ");
let maxNum = rlSync.question("Please type the Maximum Number from 1 to 99: ");

while( minNum < maxNum) { 
    if(minNum % 2 !== 0) {
        //let odd = minNum;
       console.log(minNum);
       minNum+=2;
    }      
}