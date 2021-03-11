//Sum or Product of Consecutive Integers

function SumOrProduct( ) {
    let rlSync = (require('readline-sync'));
    positiveInt = Number(rlSync.question("Please enter an integer greater than 0: \n"));
    pOrS = String(rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: \n'));
    
    if  (pOrS === "s") {
        let summed =  sum(positiveInt);
        console.log(`The sum of the integers between 1 and ${positiveInt} is ${summed}.`)
    } else if (pOrS === "p") {
            let product = factroial(positiveInt);
        console.log(`The product of the integers between 1 and ${positiveInt} is ${product}.`)
    }

    function sum(positiveInt) {
        return  (1 + positiveInt) * (positiveInt / 2);   
    }

    function factroial(positiveInt) {
        if(positiveInt === 0) {
            return 1;
        }
        return positiveInt * factroial(positiveInt - 1);
    }
}

console.log(SumOrProduct());