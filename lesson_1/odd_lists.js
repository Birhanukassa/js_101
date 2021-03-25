
function oddities(array) {
    let newElement = [];
    for(let i = 0; i < array.length; i += 2 ) {
      newElement.push(array[i]);
    }  
    return newElement;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

