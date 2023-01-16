/*Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.
*/



function specialNumber(n){
  n = n.toString()
  for(let i = 0; i < n.length; i++){
    if(! '012345'.includes(n[i])){return "NOT!!"}
  }
  return "Special!!"
}