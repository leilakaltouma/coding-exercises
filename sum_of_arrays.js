//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    if(numbers === 0 ){return 0}
    let sum = 0
    numbers.forEach((x,i) =>{
      sum += x
    })
    return sum
      
  };

