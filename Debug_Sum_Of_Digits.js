/*Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/


function getSumOfDigits(integer){
  if(integer == 0)return 0
  return integer.toString().split('').reduce((a,b) => Number(a) + Number(b))
}