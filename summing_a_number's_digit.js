//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    let sum = 0
    let arr = Math.abs(number).toString().split('').forEach((x,i) =>{
    sum += Number(x)
   })
    return sum
  }