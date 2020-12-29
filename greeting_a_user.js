let readlineSync = require("readline-sync");
askingName = (readlineSync.question("What is your name ?\n"));

if (!askingName.includes("!")) {
   console.log( (`Hello ${askingName}.`));
} else {
   console.log((`Hello ${askingName.replace('!', '.')} why are we screaming?`).toUpperCase());
}



