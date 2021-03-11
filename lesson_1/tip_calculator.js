
//Tip Calculator
function tipCalculator() {
    let rlSync = (require('readline-sync'));
    let bill = Number(rlSync.question("what is the bill? "));
    let tipInPercent = Number(rlSync.question("what is the percentage? "));

    let tipAmount = (tipInPercent * bill) / 100;
    let totalAmount = bill + tipAmount;

    console.log(`the tip is $${tipAmount}`);
    console.log(`The total is $${totalAmount}`);
}

tipCalculator();