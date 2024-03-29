/*We want to generate a function that computes the series starting from 0 and ending until the given number.
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
   if(count <0){return count + '<0'}
    if(count === 0){return "0=0"}
    let sum = []
   for(let i = 0; i <= count; i++){
     sum.push(i) 
   }
    return sum.join('+') + ' = ' + sum.reduce((a,b) => a+b)
      //while
  };
  return SequenceSum;

})();

