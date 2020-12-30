function getName(prompt) {
    let readlineSync = require('readline-sync');
    let name = readlineSync.question(prompt);
    return name;
  }
