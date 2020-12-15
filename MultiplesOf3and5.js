// Multiples of 3 and 5

function multisum(num) {
  let added = 0;
  for(let i = 1; i <= num; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      added = added + i;
    }
  }
    return added;
}
  
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168 
